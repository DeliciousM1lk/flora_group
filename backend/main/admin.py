from django.contrib import admin
from django.utils.safestring import mark_safe
from .models import Project, ProjectCategory, ProjectImage

class ProjectImageInline(admin.TabularInline):
    model = ProjectImage
    extra = 1
    fields = ('preview', 'image', 'is_main')
    readonly_fields = ('preview',)

    def preview(self, obj):
        if obj.image:
            return mark_safe(f'<img src="{obj.image.url}" width="100" style="border-radius: 8px;"/>')
        return "Нет фото"
    preview.short_description = "Превью"

@admin.register(Project)
class ProjectAdmin(admin.ModelAdmin):
    list_display = ('get_thumbnail', 'title', 'category', 'year')
    list_display_links = ('get_thumbnail', 'title')
    list_filter = ('category', 'year')
    search_fields = ('title',)
    prepopulated_fields = {"slug": ("title",)}
    inlines = [ProjectImageInline]
    # save_on_top убран, кнопки будут только снизу

    def get_thumbnail(self, obj):
        url = obj.main_image
        if url:
            return mark_safe(f'<img src="{url}" width="50" height="50" style="object-fit: cover; border-radius: 4px;"/>')
        return "—"
    get_thumbnail.short_description = 'Фото'

@admin.register(ProjectCategory)
class ProjectCategoryAdmin(admin.ModelAdmin):
    list_display = ('name', 'slug')
    prepopulated_fields = {"slug": ("name",)}