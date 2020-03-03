from datetime import datetime, timedelta
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.exceptions import PermissionDenied
from rest_framework.permissions import IsAuthenticatedOrReadOnly
from rest_framework.status import HTTP_422_UNPROCESSABLE_ENTITY
from django.contrib.auth import get_user_model
from django.conf import settings

# from django.views.decorators.csrf import ensure_csrf_cookie
# from django.core.context_processors import csrf

import jwt
from .serializers import UserSerializer
User = get_user_model()

class RegisterView(APIView):
  
  def post(self, request):

    serialized_user = UserSerializer(data=request.data)

    if serialized_user.is_valid():
      serialized_user.save()
      return Response({'message': 'Registration Successfull'})
    
    return Response(serialized_user.errors, status=HTTP_422_UNPROCESSABLE_ENTITY )

class LoginView(APIView):
  # @ensure_csrf_cookie
  def post(self, request):
    username = request.data.get('username')
    password = request.data.get('password')

    try:
      user = User.objects.get(username=username)

      if not user.check_password(password):
        raise PermissionDenied({'message': 'Invalid Credentials'})

      dt = datetime.now() + timedelta(days=7)

      token = jwt.encode({'sub': user.id, 'exp': int(dt.strftime('%s'))}, settings.SECRET_KEY, algorithm='HS256')
      #this gives you a timestamp

      return Response({'token':token, 'message': f'Welcome back {user.username}'})
    
    except User.DoesNotExist:
      raise PermissionDenied({'message': 'Invalid Credentials'})
  
class UserView(APIView): # one route GET '/user'
  permission_classes = (IsAuthenticatedOrReadOnly, ) # profile route requires a user to be signed in, otherwise wewould not know which users profile to get. We work out who they are from the token send with the requestfor the profile
  def get(self, request): # get method to return the user object
      user = User.objects.get(pk=request.user.id) # find the user by their id(primary key, pk). We get theuser from the request.user.id. This is set in 'jwt/authentication.py' and is worked out by decoding thejwt token send with the request
      serialized_user = UserSerializer(user) # running that found user through the serialiser to turn it intoJSON
      return Response(serialized_user.data) 