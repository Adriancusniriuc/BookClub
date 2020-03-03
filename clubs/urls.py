from django.urls import path
from .views import ClubListView, ClubDetailView
from books.views import BookListView

urlpatterns = [
  path('', ClubListView.as_view()),
  path('<int:pk>/', ClubDetailView.as_view()),
  path('<int:pk>/books', BookListView.as_view()),
  path('<int:pk>/books/create/', ClubDetailView.as_view()),
  # path('<int:pk>/members/', ClubDetailView.as_view()),
]