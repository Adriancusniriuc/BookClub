from django.urls import path
from .views import ClubListView, ClubDetailView

urlpatterns = [
  path('', ClubListView.as_view()),
  path('<int:pk>/', ClubDetailView.as_view()),
  path('<int:pk>/books/create/', ClubDetailView.as_view()),
  # path('<int:pk>/members/', ClubDetailView.as_view()),
]