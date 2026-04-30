from django.contrib import admin
from django.utils.safestring import mark_safe

from .models import (
    Project,
    ProjectCategory,
    ProjectImage,
    Plant,
    PlantCategory,
    PlantSubcategory,
    PlantImage,
)


# ===================== PROJECTS =====================

class ProjectImageInline(admin.TabularInline):
    model = ProjectImage
    extra = 1
    fields = ("preview", "image", "is_main")
    readonly_fields = ("preview",)

    def preview(self, obj):
        if obj.image:
            return mark_safe(
                f'<img src="{obj.image.url}" width="100" '
                f'style="border-radius: 8px;"/>'
            )
        return "Нет фото"

    preview.short_description = "Превью"


@admin.register(Project)
class ProjectAdmin(admin.ModelAdmin):
    list_display = ("get_thumbnail", "title", "category", "year")
    list_display_links = ("get_thumbnail", "title")
    list_filter = ("category", "year")
    search_fields = ("title",)
    prepopulated_fields = {"slug": ("title",)}
    inlines = [ProjectImageInline]

    def get_thumbnail(self, obj):
        url = obj.main_image
        if url:
            return mark_safe(
                f'<img src="{url}" width="50" height="50" '
                f'style="object-fit: cover; border-radius: 4px;"/>'
            )
        return "—"

    get_thumbnail.short_description = "Фото"


@admin.register(ProjectCategory)
class ProjectCategoryAdmin(admin.ModelAdmin):
    list_display = ("name", "slug")
    prepopulated_fields = {"slug": ("name",)}


# ===================== PLANTS =====================

class PlantSubcategoryInline(admin.TabularInline):
    model = PlantSubcategory
    extra = 1
    fields = ("name", "slug")
    prepopulated_fields = {"slug": ("name",)}


class PlantImageInline(admin.TabularInline):
    model = PlantImage
    extra = 1
    fields = ("preview", "image", "is_main")
    readonly_fields = ("preview",)

    def preview(self, obj):
        if obj.image:
            return mark_safe(
                f'<img src="{obj.image.url}" width="100" height="80" '
                f'style="object-fit: cover; border-radius: 8px;"/>'
            )
        return "Нет фото"

    preview.short_description = "Превью"


@admin.register(PlantCategory)
class PlantCategoryAdmin(admin.ModelAdmin):
    list_display = ("name", "slug", "count_label", "sort_order")
    list_editable = ("sort_order",)
    search_fields = ("name",)
    prepopulated_fields = {"slug": ("name",)}
    inlines = [PlantSubcategoryInline]


@admin.register(PlantSubcategory)
class PlantSubcategoryAdmin(admin.ModelAdmin):
    list_display = ("name", "category", "slug")
    list_filter = ("category",)
    search_fields = ("name",)
    prepopulated_fields = {"slug": ("name",)}


@admin.register(Plant)
class PlantAdmin(admin.ModelAdmin):
    list_display = (
        "get_thumbnail",
        "name",
        "category",
        "subcategory",
        "price_from",
        "in_stock",
    )
    list_display_links = ("get_thumbnail", "name")
    list_filter = ("category", "subcategory", "in_stock")
    list_editable = ("price_from", "in_stock")
    search_fields = ("name", "latin_name", "description")
    prepopulated_fields = {"slug": ("name",)}
    inlines = [PlantImageInline]

    fieldsets = (
        (
            "Основное",
            {
                "fields": (
                    "category",
                    "subcategory",
                    "name",
                    "latin_name",
                    "slug",
                    "description",
                )
            },
        ),
        (
            "Цена и параметры",
            {
                "fields": (
                    "price_from",
                    "price_text",
                    "height",
                    "age",
                )
            },
        ),
        (
            "Показ",
            {
                "fields": (
                    "in_stock",
                )
            },
        ),
    )

    def get_thumbnail(self, obj):
        url = obj.main_image
        if url:
            return mark_safe(
                f'<img src="{url}" width="55" height="55" '
                f'style="object-fit: cover; border-radius: 8px;"/>'
            )
        return "—"

    get_thumbnail.short_description = "Фото"