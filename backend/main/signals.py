from pathlib import Path

from django.conf import settings
from django.db.models.signals import post_delete, pre_save
from django.dispatch import receiver

from .models import ProjectImage, PlantImage


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
        cache_name = instance.image_watermarked.name
        if cache_name:
            paths_to_clean.append(Path(settings.MEDIA_ROOT) / cache_name)
    except Exception:
        pass

    for path in paths_to_clean:
        try:
            if path.exists():
                path.unlink()

                for parent in path.parents:
                    if parent == Path(settings.MEDIA_ROOT):
                        break

                    try:
                        parent.rmdir()
                    except OSError:
                        break
        except OSError:
            pass


@receiver(pre_save, sender=ProjectImage)
def cleanup_project_image_on_update(sender, instance, **kwargs):
    """При замене файла проекта удаляем старый оригинал и его кэш."""
    if not instance.pk:
        return

    try:
        old_instance = ProjectImage.objects.get(pk=instance.pk)
    except ProjectImage.DoesNotExist:
        return

    if old_instance.image and old_instance.image != instance.image:
        _delete_files_and_empty_dirs(old_instance)


@receiver(post_delete, sender=ProjectImage)
def cleanup_project_image_on_delete(sender, instance, **kwargs):
    """При удалении фото проекта удаляем оригинал и кэш."""
    _delete_files_and_empty_dirs(instance)


@receiver(pre_save, sender=PlantImage)
def cleanup_plant_image_on_update(sender, instance, **kwargs):
    """При замене файла растения удаляем старый оригинал и его кэш."""
    if not instance.pk:
        return

    try:
        old_instance = PlantImage.objects.get(pk=instance.pk)
    except PlantImage.DoesNotExist:
        return

    if old_instance.image and old_instance.image != instance.image:
        _delete_files_and_empty_dirs(old_instance)


@receiver(post_delete, sender=PlantImage)
def cleanup_plant_image_on_delete(sender, instance, **kwargs):
    """При удалении фото растения удаляем оригинал и кэш."""
    _delete_files_and_empty_dirs(instance)