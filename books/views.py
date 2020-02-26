# pylint: disable=no-member
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.status import HTTP_404_NOT_FOUND, HTTP_201_CREATED, HTTP_422_UNPROCESSABLE_ENTITY, HTTP_204_NO_CONTENT, HTTP_202_ACCEPTED
from .models import Book, Comment
from .serializers import BookSerializer, CommentSerializer, PopulatedBookSerializer, PopulatedCommentSerializer

class BookListView(APIView):
  def get(self, _request):
    books = Book.objects.all()
    serialized_books = PopulatedBookSerializer(books, many=True)
    return Response(serialized_books.data)

  def post(self, request):
    request.data['owner'] = request.user.id
    book = BookSerializer(data=request.data)
    if book.is_valid():
      book.save()
      return Response(book.data, status=HTTP_201_CREATED)
    return Response(book.errors, status=HTTP_422_UNPROCESSABLE_ENTITY)

class BookDetailView(APIView):
  def get(self, _request, pk):
    book = Book.objects.get(pk=pk)
    serialized_book = PopulatedBookSerializer(book)
    return Response(serialized_book.data)
  
  def put(self, request, pk):
    request.data['owner'] = request.user.id
    book = Book.objects.get(pk=pk)
    if book.owner.id != request.user.id:
      return Response(status=HTTP_401_UNAUTHORIZED)
    updated_book = BookSerializer(book, data=request.data)
    if updated_book.is_valid():
      updated_book.save()
      return Response(updated_book.data)
    return Response(updated_post.errors, status=HTTP_422_UNPROCESSABLE_ENTITY)

  def delete(self, request, pk):
    book = Book.objects.get(pk=pk)
    if book.owner.id != request.user.id:
      return Response(status=HTTP_401_UNAUTHORIZED)
    post.delete()
    return Response(status=HTTP_204_NO_CONTENT)

# ADD COMMENT VIEWS HERE SAME AS NEWEST DENZELS