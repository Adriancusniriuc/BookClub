from django.urls import path
from .views import BookListView, BookDetailView, CommentListView, CommentDetailView

urlpatterns = [
    path('', BookListView.as_view()),
    path('<int:pk>/', BookDetailView.as_view()),
    path('<int:pk>/comments/', CommentListView.as_view()),
    path('<int:pk>/comments/<int:comment_pk>/', CommentDetailView.as_view())
]