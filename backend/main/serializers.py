from rest_framework import serializers
from .models import Project, ProjectCategory, ProjectImage


class ProjectImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProjectImage
        fields = ["id", "image", "is_main"]


class ProjectSerializer(serializers.ModelSerializer):
    images = ProjectImageSerializer(many=True, read_only=True)
    main_image = serializers.SerializerMethodField()

    class Meta:
        model = Project
        fields = [
            "id",
            "title",
            "slug",
            "description",
            "area",
            "year",
            "main_image",
            "images",
        ]

    def get_main_image(self, obj):
        request = self.context.get("request")
        if obj.main_image:
            if request:
                return request.build_absolute_uri(obj.main_image)
            return obj.main_image
        return None


class ProjectCategorySerializer(serializers.ModelSerializer):
    projects = ProjectSerializer(many=True, read_only=True)

    class Meta:
        model = ProjectCategory
        fields = ["id", "name", "slug", "projects"]