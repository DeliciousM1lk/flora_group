import io
import uuid
from django.db import models, transaction
from django.utils.text import slugify
from django.core.files.base import ContentFile
from unidecode import unidecode
from PIL import Image
import pillow_heif

# Регистрируем поддержку HEIF/HEIC
pillow_heif.register_heif_opener()


class ProjectCategory(models.Model):
    name = models.CharField(max_length=100, verbose_name="Название категории")
    slug = models.SlugField(unique=True, blank=True, verbose_name="Слаг")

    def save(self, *args, **kwargs):
        if not self.slug:
            self.slug = slugify(unidecode(self.name))
        super().save(*args, **kwargs)

    def __str__(self):
        return self.name

    class Meta:
        verbose_name = "Категория проекта"
        verbose_name_plural = "Категории проектов"


class Project(models.Model):
    category = models.ForeignKey(
        ProjectCategory,
        on_delete=models.CASCADE,
        related_name='projects',
        verbose_name="Категория"
    )
    title = models.CharField(max_length=255, verbose_name="Название проекта")
    slug = models.SlugField(unique=True, blank=True, verbose_name="Слаг")
    year = models.CharField(max_length=4, verbose_name="Год реализации")

    def save(self, *args, **kwargs):
        if not self.slug:
            base_slug = slugify(unidecode(self.title))
            self.slug = f"{base_slug}-{str(uuid.uuid4())[:6]}"
        super().save(*args, **kwargs)

    def __str__(self):
        return self.title

    @property
    def main_image(self):
        # Ищем фото с галочкой, если нет — берем первое попавшееся
        main = self.images.filter(is_main=True).first() or self.images.first()
        return main.image.url if main and main.image else None

    class Meta:
        verbose_name = "Проект"
        verbose_name_plural = "Проекты"


class ProjectImage(models.Model):
    project = models.ForeignKey(
        Project,
        on_delete=models.CASCADE,
        related_name='images',
        verbose_name="Проект"
    )
    image = models.ImageField(upload_to='projects/', verbose_name="Изображение")
    is_main = models.BooleanField(default=False, verbose_name="Главное фото")

    def save(self, *args, **kwargs):
        # 1. Конвертация HEIC/HEIF в JPEG
        if self.image:
            filename = self.image.name.lower()
            if filename.endswith(('.heic', '.heif')):
                img = Image.open(self.image)
                if img.mode != 'RGB':
                    img = img.convert('RGB')

                output = io.BytesIO()
                img.save(output, format='JPEG', quality=90, optimize=True)
                output.seek(0)

                new_name = self.image.name.rsplit('.', 1)[0] + '.jpg'
                self.image = ContentFile(output.read(), name=new_name)

        # 2. Логика единственного главного фото
        if self.is_main:
            # Атомарно снимаем флаг у всех остальных изображений ЭТОГО проекта
            with transaction.atomic():
                ProjectImage.objects.filter(project=self.project, is_main=True).update(is_main=False)

        super().save(*args, **kwargs)

    class Meta:
        verbose_name = "Изображение проекта"
        verbose_name_plural = "Изображения проектов"