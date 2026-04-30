from rest_framework import generics
from django_filters.rest_framework import DjangoFilterBackend

from main.models import (
    Project,
    ProjectCategory,
    Plant,
    PlantCategory,
)

from main.serializers import (
    ProjectSerializer,
    ProjectCategorySerializer,
    PlantSerializer,
    PlantCategorySerializer,
)


# ===================== PROJECTS =====================

class CategoryListView(generics.ListAPIView):
    queryset = ProjectCategory.objects.prefetch_related("projects__images")
    serializer_class = ProjectCategorySerializer

    def get_serializer_context(self):
        return {"request": self.request}


class ProjectListView(generics.ListAPIView):
    queryset = Project.objects.all().prefetch_related("images", "category")
    serializer_class = ProjectSerializer
    filter_backends = [DjangoFilterBackend]
    filterset_fields = ["category__slug"]

    def get_serializer_context(self):
        return {"request": self.request}


class ProjectDetailView(generics.RetrieveAPIView):
    queryset = Project.objects.all().prefetch_related("images", "category")
    serializer_class = ProjectSerializer
    lookup_field = "slug"

    def get_serializer_context(self):
        return {"request": self.request}


# ===================== PLANTS =====================

class PlantCategoryListView(generics.ListAPIView):
    queryset = PlantCategory.objects.prefetch_related("subcategories", "plants")
    serializer_class = PlantCategorySerializer

    def get_serializer_context(self):
        return {"request": self.request}


class PlantListView(generics.ListAPIView):
    queryset = (
        Plant.objects.all()
        .select_related("category", "subcategory")
        .prefetch_related("images")
    )
    serializer_class = PlantSerializer
    filter_backends = [DjangoFilterBackend]
    filterset_fields = [
        "category__slug",
        "subcategory__slug",
        "in_stock",
    ]

    def get_serializer_context(self):
        return {"request": self.request}


class PlantDetailView(generics.RetrieveAPIView):
    queryset = (
        Plant.objects.all()
        .select_related("category", "subcategory")
        .prefetch_related("images")
    )
    serializer_class = PlantSerializer
    lookup_field = "slug"

    def get_serializer_context(self):
        return {"request": self.request}