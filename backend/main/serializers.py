from rest_framework import serializers
from main.models import Project, ProjectCategory, ProjectImage


class ProjectImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProjectImage
        fields = ["id", "image", "is_main"]


class ProjectSerializer(serializers.ModelSerializer):
    # Используем SerializerMethodField, чтобы отфильтровать дубликаты на уровне базы
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
        Возвращает URL изображения, помеченного как is_main=True.
        """
        request = self.context.get("request")
        # Пытаемся найти объект ProjectImage с флагом is_main
        main_img_obj = obj.images.filter(is_main=True).first()

        if main_img_obj and main_img_obj.image:
            image_url = main_img_obj.image.url
            if request:
                return request.build_absolute_uri(image_url)
            return image_url
        return None

    def get_images(self, obj):
        """
        Возвращает все изображения проекта, КРОМЕ главного,
        чтобы избежать дублирования в галерее на фронтенде.
        """
        # Исключаем изображение с флагом is_main=True
        other_images = obj.images.filter(is_main=False)
        return ProjectImageSerializer(other_images, many=True, context=self.context).data


class ProjectCategorySerializer(serializers.ModelSerializer):
    # Список проектов в каждой категории
    projects = ProjectSerializer(many=True, read_only=True)

    class Meta:
        model = ProjectCategory
        fields = ["id", "name", "slug", "projects"]