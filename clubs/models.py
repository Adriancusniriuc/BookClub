#pylint: disable=no-member
from django.db import models
from django.contrib.auth import get_user_model
User = get_user_model()


class Club(models.Model):
  name = models.CharField(max_length=50)
  venue = models.CharField(max_length=50)
  postcode = models.CharField(max_length=50)
  date = models.CharField(max_length=50)
  description = models.CharField(max_length=300)
  maxspace = models.CharField(max_length=50)
  book = models.ManyToManyField('books.Book', related_name='clubs+', blank=True)
  owner = models.ForeignKey(User, related_name='clubs', null=True, on_delete=models.CASCADE)
  member = models.ManyToManyField(User, related_name='members', blank=True) 

  def __str__(self):
      return self.name 