from rest_framework import serializers
from main.models import Project, ProjectCategory, ProjectImage


class ProjectImageSerializer(serializers.ModelSerializer):
    # Источник — защищенная версия
    image = serializers.ImageField(source='image_watermarked', read_only=True)

    class Meta:
        model = ProjectImage
        fields = ["id", "image", "is_main"]


class ProjectSerializer(serializers.ModelSerializer):
    images = serializers.SerializerMethodField()
    category_name = serializers.ReadOnlyField(source='category.name')
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
        """
        Логика: берем либо отмеченное как главное, либо просто первое из списка.
        """
        request = self.context.get("request")
        # Сначала ищем с галочкой, если нет — берем любое первое
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
        """
        Возвращает остальные фото, исключая то, которое ушло в main_image.
        """
        all_images = obj.images.all()

        # Если фото всего одно, оно уже ушло в main_image, так что галерея должна быть пустой
        if all_images.count() <= 1:
            return []

        # Определяем, какое именно фото сейчас считается главным
        main_img_obj = all_images.filter(is_main=True).first() or all_images.first()

        # Исключаем это конкретное фото из списка галереи по ID
        other_images = all_images.exclude(id=main_img_obj.id)

        return ProjectImageSerializer(other_images, many=True, context=self.context).data


class ProjectCategorySerializer(serializers.ModelSerializer):
    projects = ProjectSerializer(many=True, read_only=True)

    class Meta:
        model = ProjectCategory
        fields = ["id", "name", "slug", "projects"]