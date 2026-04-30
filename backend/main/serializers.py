from rest_framework import serializers

from main.models import (
    Project,
    ProjectCategory,
    ProjectImage,
    Plant,
    PlantCategory,
    PlantSubcategory,
    PlantImage,
)


# ===================== PROJECTS =====================

class ProjectImageSerializer(serializers.ModelSerializer):
    image = serializers.ImageField(source="image_watermarked", read_only=True)

    class Meta:
        model = ProjectImage
        fields = ["id", "image", "is_main"]


class ProjectSerializer(serializers.ModelSerializer):
    images = serializers.SerializerMethodField()
    category_name = serializers.ReadOnlyField(source="category.name")
    main_image = serializers.SerializerMethodField()

    class Meta:
        model = Project
        fields = [
            "id",
            "category",
            "category_name",
            "title",
            "slug",
            "year",
            "main_image",
            "images",
        ]

    def get_main_image(self, obj):
        request = self.context.get("request")
        main_img_obj = obj.images.filter(is_main=True).first() or obj.images.first()

        if main_img_obj:
            try:
                image_url = main_img_obj.image_watermarked.url
                if request:
                    return request.build_absolute_uri(image_url)
                return image_url
            except Exception:
                return None

        return None

    def get_images(self, obj):
        all_images = obj.images.all()

        if all_images.count() <= 1:
            return []

        main_img_obj = all_images.filter(is_main=True).first() or all_images.first()
        other_images = all_images.exclude(id=main_img_obj.id)

        return ProjectImageSerializer(
            other_images,
            many=True,
            context=self.context,
        ).data


class ProjectCategorySerializer(serializers.ModelSerializer):
    projects = ProjectSerializer(many=True, read_only=True)

    class Meta:
        model = ProjectCategory
        fields = ["id", "name", "slug", "projects"]


# ===================== PLANTS =====================

class PlantImageSerializer(serializers.ModelSerializer):
    image = serializers.ImageField(source="image_watermarked", read_only=True)

    class Meta:
        model = PlantImage
        fields = ["id", "image", "is_main"]


class PlantSubcategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = PlantSubcategory
        fields = ["id", "name", "slug"]


class PlantCategorySerializer(serializers.ModelSerializer):
    subcategories = PlantSubcategorySerializer(many=True, read_only=True)
    plants_count = serializers.SerializerMethodField()

    class Meta:
        model = PlantCategory
        fields = [
            "id",
            "name",
            "slug",
            "description",
            "count_label",
            "plants_count",
            "subcategories",
        ]

    def get_plants_count(self, obj):
        return obj.plants.count()


class PlantSerializer(serializers.ModelSerializer):
    images = serializers.SerializerMethodField()
    main_image = serializers.SerializerMethodField()

    category_name = serializers.ReadOnlyField(source="category.name")
    category_slug = serializers.ReadOnlyField(source="category.slug")

    subcategory_name = serializers.ReadOnlyField(source="subcategory.name")
    subcategory_slug = serializers.ReadOnlyField(source="subcategory.slug")

    display_price = serializers.SerializerMethodField()

    class Meta:
        model = Plant
        fields = [
            "id",
            "name",
            "latin_name",
            "slug",
            "description",
            "price_from",
            "price_text",
            "display_price",
            "height",
            "age",
            "in_stock",
            "category_name",
            "category_slug",
            "subcategory_name",
            "subcategory_slug",
            "main_image",
            "images",
        ]

    def get_display_price(self, obj):
        if obj.price_text:
            return obj.price_text
        if obj.price_from:
            return f"от {obj.price_from:,} ₸".replace(",", " ")
        return "Цена по запросу"

    def get_main_image(self, obj):
        request = self.context.get("request")
        main_img_obj = obj.images.filter(is_main=True).first() or obj.images.first()

        if main_img_obj:
            try:
                image_url = main_img_obj.image_watermarked.url
                if request:
                    return request.build_absolute_uri(image_url)
                return image_url
            except Exception:
                return None

        return None

    def get_images(self, obj):
        all_images = obj.images.all()

        if all_images.count() <= 1:
            return []

        main_img_obj = all_images.filter(is_main=True).first() or all_images.first()
        other_images = all_images.exclude(id=main_img_obj.id)

        return PlantImageSerializer(
            other_images,
            many=True,
            context=self.context,
        ).data