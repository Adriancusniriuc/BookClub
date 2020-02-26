#pylint: disable=no-member
from django.db import models
from django.contrib.auth import get_user_model
User = get_user_model()

# Create your models here.

class Club(models.Model):
  name = models.CharField(max_length=50)
  venue = models.CharField(max_length=50)
  postcode = models.CharField(max_length=50)
  date = models.CharField(max_length=50)
  description = models.CharField(max_length=300)
  maxspace = models.CharField(max_length=50)
  books = models.ManyToManyField('books.Book', related_name='clubs', blank=True)
  owner = models.ForeignKey(User, related_name='clubs',null=True, on_delete=models.CASCADE)
  # if the user is deleted, will it affect of the clubs he was a member of
  member = models.ForeignKey(User, related_name='clubs',null=True, on_delete=models.CASCADE)
  


  def __str__(self):
      return self.name 