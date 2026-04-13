from rest_framework import generics
from django_filters.rest_framework import DjangoFilterBackend

from main.models import Project, ProjectCategory
from main.serializers import ProjectSerializer, ProjectCategorySerializer


class CategoryListView(generics.ListAPIView):
    queryset = ProjectCategory.objects.prefetch_related("projects__images")
    serializer_class = ProjectCategorySerializer


class ProjectListView(generics.ListAPIView):
    queryset = Project.objects.all().prefetch_related("images", "category")
    serializer_class = ProjectSerializer
    filter_backends = [DjangoFilterBackend]
    filterset_fields = ["category__slug"]


class ProjectDetailView(generics.RetrieveAPIView):
    queryset = Project.objects.all().prefetch_related("images", "category")
    serializer_class = ProjectSerializer
    lookup_field = "slug"
    from rest_framework import generics


from django_filters.rest_framework import DjangoFilterBackend

from main.models import Project, ProjectCategory
from main.serializers import ProjectSerializer, ProjectCategorySerializer


class CategoryListView(generics.ListAPIView):
    queryset = ProjectCategory.objects.prefetch_related("projects__images")
    serializer_class = ProjectCategorySerializer

    def get_serializer_context(self):
        context = super().get_serializer_context()
        context["request"] = self.request
        return context


class ProjectListView(generics.ListAPIView):
    queryset = Project.objects.all().prefetch_related("images", "category")
    serializer_class = ProjectSerializer
    filter_backends = [DjangoFilterBackend]
    filterset_fields = ["category__slug"]

    def get_serializer_context(self):
        context = super().get_serializer_context()
        context["request"] = self.request
        return context


class ProjectDetailView(generics.RetrieveAPIView):
    queryset = Project.objects.all().prefetch_related("images", "category")
    serializer_class = ProjectSerializer
    lookup_field = "slug"

    def get_serializer_context(self):
        context = super().get_serializer_context()
        context["request"] = self.request
        return context
