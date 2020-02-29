from rest_framework import serializers
from django.contrib.auth import get_user_model
from .models import Book, Comment
User = get_user_model()

class BookSerializer(serializers.ModelSerializer):

  class Meta:
    model = Book
    fields = '__all__'
    extra_kwargs = {'comments': {'required': False}}
    

class UserSerializer(serializers.ModelSerializer):

  class Meta:
    model = User
    fields = '__all__'

class CommentSerializer(serializers.ModelSerializer):

  class Meta:
    model = Comment
    fields = ('text', 'owner', 'id')

class PopulatedCommentSerializer(CommentSerializer):

  owner = UserSerializer()
  

class PopulatedBookSerializer(BookSerializer):

  owner = UserSerializer()
  comments = PopulatedCommentSerializer(many=True)

