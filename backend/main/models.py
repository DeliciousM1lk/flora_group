from django.db import models
from django.utils.text import slugify
from unidecode import unidecode
import uuid


class ProjectCategory(models.Model):
    name = models.CharField(max_length=100)
    slug = models.SlugField(unique=True, blank=True)

    def save(self, *args, **kwargs):
        if not self.slug:
            self.slug = slugify(unidecode(self.name))
        super().save(*args, **kwargs)

    def __str__(self):
        return self.name


class Project(models.Model):
    category = models.ForeignKey(ProjectCategory, on_delete=models.CASCADE, related_name='projects')
    title = models.CharField(max_length=255)
    slug = models.SlugField(unique=True, blank=True)
    description = models.TextField()
    area = models.CharField(max_length=50)
    year = models.CharField(max_length=4)

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
        return main.image.url if main and main.image else None


class ProjectImage(models.Model):
    project = models.ForeignKey(Project, on_delete=models.CASCADE, related_name='images')
    image = models.ImageField(upload_to='projects/')
    is_main = models.BooleanField(default=False)

    def save(self, *args, **kwargs):
        if self.is_main:
            ProjectImage.objects.filter(project=self.project).exclude(pk=self.pk).update(is_main=False)
        super().save(*args, **kwargs)