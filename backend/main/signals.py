from pathlib import Path
from django.db.models.signals import post_delete, pre_save
from django.dispatch import receiver
from django.conf import settings
from .models import ProjectImage


def _delete_files_and_empty_dirs(instance):
    """Удаляет оригинал, кэш ImageKit и пустые родительские папки."""
    if not instance.image:
        return

    paths_to_clean = []
    try:
        paths_to_clean.append(Path(instance.image.path))
    except (ValueError, AttributeError):
        pass

    try:
        # Пытаемся получить путь к кэшированному вотермарку
        cache_name = instance.image_watermarked.name
        if cache_name:
            paths_to_clean.append(Path(settings.MEDIA_ROOT) / cache_name)
    except:
        pass

    for p in paths_to_clean:
        if p.exists():
            p.unlink()
            # Рекурсивно чистим пустые папки вверх до корня медиа
            for parent in p.parents:
                if parent == Path(settings.MEDIA_ROOT):
                    break
                try:
                    parent.rmdir()  # Удалит, только если папка пуста
                except OSError:
                    break


@receiver(pre_save, sender=ProjectImage)
def cleanup_on_update(sender, instance, **kwargs):
    """При замене файла в админке удаляем старый оригинал и его кэш."""
    if not instance.pk:
        return
    try:
        old_instance = ProjectImage.objects.get(pk=instance.pk)
        if old_instance.image and old_instance.image != instance.image:
            _delete_files_and_empty_dirs(old_instance)
    except ProjectImage.DoesNotExist:
        pass


@receiver(post_delete, sender=ProjectImage)
def cleanup_on_delete(sender, instance, **kwargs):
    """При удалении записи удаляем всё связанное."""
    _delete_files_and_empty_dirs(instance)