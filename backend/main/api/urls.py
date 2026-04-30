from django.urls import path

from .views import (
    CategoryListView,
    ProjectListView,
    ProjectDetailView,
    PlantCategoryListView,
    PlantListView,
    PlantDetailView,
)

urlpatterns = [
    path("categories/", CategoryListView.as_view()),
    path("projects/", ProjectListView.as_view()),
    path("projects/<slug:slug>/", ProjectDetailView.as_view()),

    path("plant-categories/", PlantCategoryListView.as_view()),
    path("plants/", PlantListView.as_view()),
    path("plants/<slug:slug>/", PlantDetailView.as_view()),
]