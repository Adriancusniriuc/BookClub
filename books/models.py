from django.db import models
from django.core.validators import MaxValueValidator, MinValueValidator
from django.contrib.auth import get_user_model
User = get_user_model()


class Book(models.Model):
  title = models.CharField(max_length=100)
  author = models.CharField(max_length=100)
  genre = models.CharField(max_length=100)
  no_pages = models.CharField(max_length=5)
  image = models.CharField(max_length=300)
  rating = models.PositiveSmallIntegerField(validators=[MinValueValidator(1), MaxValueValidator(5)])
  owner = models.ForeignKey(User, related_name='books', null=True, on_delete=models.CASCADE)
  clubs = models.ManyToManyField('clubs.Club', related_name='books', blank=True)

  # comment = models.ForeignKey(Comment, related_name='comment', on_delete=models.CASCADE)

  def __str__(self):
    return self.title
  
class Comment(models.Model):
  text = models.CharField(max_length=300)
  book = models.ForeignKey(Book, related_name='comments', on_delete=models.CASCADE)
  owner = models.ForeignKey(User, on_delete=models.CASCADE)

  def __str__(self):
        return f'{self.text} - {self.owner}'






