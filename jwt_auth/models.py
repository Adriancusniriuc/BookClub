from django.db import models
from django.contrib.auth.models import AbstractUser



class User(AbstractUser):
  username = models.CharField(max_length=40, unique=True)
  email = models.CharField(max_length=40, unique=True)
  image = models.CharField(max_length=400)
  bio = models.CharField(max_length=300)
  