import io
import uuid
from pathlib import Path

from django.db import models, transaction
from django.utils.text import slugify
from django.core.files.base import ContentFile
from unidecode import unidecode
from PIL import Image
import pillow_heif
from imagekit.models import ImageSpecField
from django.conf import settings

# Регистрация поддержки HEIF/HEIC
pillow_heif.register_heif_opener()

class WatermarkGridProcessor:
    """Процессор для создания сетки водяных знаков."""
    def process(self, img):
        watermark_path = Path(settings.BASE_DIR) / 'static' / 'watermark.png'
        if not watermark_path.exists():
            return img

        WM_WIDTH, OPACITY, SPACING = 100, 0.5, 150
        watermark = Image.open(watermark_path).convert('RGBA')

        w_percent = (WM_WIDTH / float(watermark.size[0]))
        wm_height = int((float(watermark.size[1]) * float(w_percent)))
        watermark = watermark.resize((WM_WIDTH, wm_height), Image.Resampling.LANCZOS)

        r, g, b, a = watermark.split()
        a = a.point(lambda p: p * OPACITY)
        watermark = Image.merge('RGBA', (r, g, b, a))

        img_rgba = img.convert('RGBA')
        overlay = Image.new('RGBA', img.size, (0, 0, 0, 0))

        for x in range(0, img.width, watermark.width + SPACING):
            for y in range(0, img.height, watermark.height + SPACING):
                overlay.paste(watermark, (x, y), mask=watermark)

        return Image.alpha_composite(img_rgba, overlay).convert('RGB')

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
    category = models.ForeignKey(ProjectCategory, on_delete=models.CASCADE, related_name='projects', verbose_name="Категория")
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
        main = self.images.filter(is_main=True).first() or self.images.first()
        return main.image_watermarked.url if main and main.image else None

    class Meta:
        verbose_name = "Проект"
        verbose_name_plural = "Проекты"

class ProjectImage(models.Model):
    project = models.ForeignKey(Project, on_delete=models.CASCADE, related_name='images', verbose_name="Проект")
    image = models.ImageField(upload_to='projects/', verbose_name="Изображение")
    image_watermarked = ImageSpecField(
        source='image',
        processors=[WatermarkGridProcessor()],
        format='JPEG',
        options={'quality': 85}
    )
    is_main = models.BooleanField(default=False, verbose_name="Главное фото")

    def save(self, *args, **kwargs):
        if self.image:
            self._convert_to_jpg()
        if self.is_main:
            self._ensure_unique_main()
        super().save(*args, **kwargs)

    def _convert_to_jpg(self):
        img = Image.open(self.image)
        if img.mode != 'RGB':
            img = img.convert('RGB')
        output = io.BytesIO()
        img.save(output, format='JPEG', quality=95, optimize=True)
        output.seek(0)
        new_name = Path(self.image.name).with_suffix('.jpg').name
        self.image = ContentFile(output.read(), name=new_name)

    def _ensure_unique_main(self):
        with transaction.atomic():
            ProjectImage.objects.filter(project=self.project, is_main=True).exclude(pk=self.pk).update(is_main=False)

    class Meta:
        verbose_name = "Изображение проекта"
        verbose_name_plural = "Изображения проектов"