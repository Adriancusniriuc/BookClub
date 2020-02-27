from rest_framework import serializers
from books.models import Book
from .models import Club
from django.contrib.auth import get_user_model
User = get_user_model()


class UserSerializer(serializers.ModelSerializer):

  class Meta:
    model = User
    fields = ('id', 'username')

class BookSerializer(serializers.ModelSerializer):

  class Meta:
    model = Book
    fields = '__all__'


class ClubSerializer(serializers.ModelSerializer):

  class Meta:
      model = Club
      fields = '__all__'

class PopulatedClubSerializer(ClubSerializer):

  books = BookSerializer(many=True)
  owner = UserSerializer()