from django.urls import path
from .views import CategoryListView, ProjectListView, ProjectDetailView

urlpatterns = [
    path("categories/", CategoryListView.as_view()),
    path("projects/", ProjectListView.as_view()),
    path("projects/<slug:slug>/", ProjectDetailView.as_view()),
]