# pylint: disable=no-member
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.status import HTTP_404_NOT_FOUND, HTTP_201_CREATED, HTTP_422_UNPROCESSABLE_ENTITY, HTTP_204_NO_CONTENT, HTTP_202_ACCEPTED
from rest_framework.permissions import IsAuthenticatedOrReadOnly
from .models import Book, Comment
# from clubs.models import Club
from .serializers import BookSerializer, CommentSerializer, PopulatedBookSerializer, PopulatedCommentSerializer
# from clubs.serializers import PopulatedClubSerializer


class BookListView(APIView):

  permission_classes = (IsAuthenticatedOrReadOnly, )

  def get(self, _request):
    books = Book.objects.all()
    serialized_books = PopulatedBookSerializer(books, many=True)
    return Response(serialized_books.data)

  def post(self, request, *args, **kwargs):
    request.data['owner'] = request.user.id
    # request.data['clubs'] = request.clubs.pk
    # request.data['book'] = pk

  #HERE 
    book = BookSerializer(data=request.data)
    if book.is_valid():
      book.save()
      # club = Club.objects.get(pk=pk)
      # club = Club.objects.get(pk=request.club.id)
      # serialized_club = PopulatedClubSerializer(club)

      # return Response(serialized_club.data)
    #HERE

      return Response(book.data, status=HTTP_201_CREATED)
    return Response(book.errors, status=HTTP_422_UNPROCESSABLE_ENTITY)

class BookDetailView(APIView):

  permission_classes = (IsAuthenticatedOrReadOnly, )

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
      return Response(updated_book.data, status=HTTP_202_ACCEPTED)
    return Response(updated_post.errors, status=HTTP_422_UNPROCESSABLE_ENTITY)

  def delete(self, request, pk):

    try:
        book = Book.objects.get(pk=pk)
        if book.owner.id != request.user.id:
          return Response(status=HTTP_401_UNAUTHORIZED)
        book.delete()
        return Response(status=HTTP_204_NO_CONTENT)
    except Book.DoesNotExist:
        return Response({'message': 'Not Found'}, status=HTTP_404_NOT_FOUND) 


class CommentListView(APIView):
  
  permission_classes = (IsAuthenticatedOrReadOnly, )

  def get(self, _request):
    comment = Comment.objects.all()
    serialized_comment = PopulatedCommentSerializer(comment, many=True)
    return Response(serialized_comment.data)
  
  def post(self, request, pk):
      request.data['book'] = pk
      request.data['owner'] = request.user.id
      comment = CommentSerializer(data=request.data)
  
      if comment.is_valid():
        comment.save()
        book = Book.objects.get(pk=pk)
        serialized_book = PopulatedBookSerializer(book)

        return Response(serialized_book.data, status=HTTP_201_CREATED)
      
      return Response(comment.errors, status=HTTP_422_UNPROCESSABLE_ENTITY)


class CommentDetailView(APIView):

  permission_classes = (IsAuthenticatedOrReadOnly, )

  def delete(self, request, comment_pk, **kwargs):
    
    try:
      comment = Comment.objects.get(pk=comment_pk)
      if comment.owner.id != request.user.id:
        return Response(status=HTTP_401_UNAUTHORIZED)
      comment.delete()
      return Response(status=HTTP_204_NO_CONTENT)
    except Comment.DoesNotExist:
      return Response({'message': 'Not Found'}, status=HTTP_404_NOT_FOUND)