from rest_framework import serializers
from django.contrib.auth import get_user_model
from .models import Book, Comment
User = get_user_model()

class BookSerializer(serializers.ModelSerializer):

  class Meta:
    model = Book
    fields = '__all__'
    extra_kwargs = {'comments': {'required': False}}

class CommentSerializer(serializers.ModelSerializer):

  class Meta:
    model = Comment
    fields '__all__'

class PopulatedCommentSerializer(CommentSerializer):

  owner = UserSerializer()

class PopulatedBookSerializer(BookSerializer):

  owner = UserSerializer()
  comments = PopulatedCommentSerializer(many=True)

