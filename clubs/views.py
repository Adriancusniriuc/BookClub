# pylint: disable=no-member
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.status import HTTP_404_NOT_FOUND, HTTP_201_CREATED, HTTP_422_UNPROCESSABLE_ENTITY, HTTP_204_NO_CONTENT, HTTP_202_ACCEPTED, HTTP_401_UNAUTHORIZED
from rest_framework.permissions import IsAuthenticatedOrReadOnly

from .models import Club
from .serializers import PopulatedClubSerializer, ClubSerializer, UserSerializer, BookSerializer


class ClubListView(APIView):

  permission_classes = (IsAuthenticatedOrReadOnly, )

  def get(self, _request):

    clubs = Club.objects.all()
    serialized_clubs = PopulatedClubSerializer(clubs, many=True)

    return Response(serialized_clubs.data)

  def post(self, request):
    request.data['owner'] = request.user.id
    # club = Club.objects.get()   KEEP AN EYE ON THIS. NOT SURE WE need it
    club = ClubSerializer(data=request.data)
    
    if club.is_valid():
      club.save()
      return Response(club.data, status=HTTP_201_CREATED)
    return Response(club.errors, status=HTTP_422_UNPROCESSABLE_ENTITY)



class ClubDetailView(APIView):

  permission_classes = (IsAuthenticatedOrReadOnly, )

  # def get(self, _request, pk):
  #   try:
  #     club = Club.objects.get(pk=pk)
  #     serialized_clubs = ClubSerializer(club)
  #     return Response(serialized_clubs.data)
  #   except Club.DoesNotExist:
  #     return Response({ 'message': 'Not Found'}, status=HTTP_404_NOT_FOUND)

  def get(self, _request, pk):
    try:
      club = Club.objects.get(pk=pk, )
      serialized_clubs = PopulatedClubSerializer(club)
      return Response(serialized_clubs.data)
    except Club.DoesNotExist:
      return Response({ 'message': 'Not Found'}, status=HTTP_404_NOT_FOUND)
  
  def put(self, request, pk):
    request.data['owner'] = request.user.id
    #            [club]=pk
    # request.data['member'] = request.user.id

    try:
      club = Club.objects.get(pk=pk)
      if club.owner.id != request.user.id:
        return Response(status=HTTP_401_UNAUTHORIZED)
      updated_club = ClubSerializer(club, data=request.data)
      if updated_club.is_valid():
        updated_club.save()
        return Response(updated_club.data, status=HTTP_202_ACCEPTED)
      return Response(updated_club.errors, status=HTTP_422_UNPROCESSABLE_ENTITY)
    except Club.DoesNotExist:
      return Response({ 'message': 'Not Found'}, status=HTTP_404_NOT_FOUND)

  def delete(self, request, pk):
    
    try:
        club = Club.objects.get(pk=pk)
        if club.owner.id != request.user.id:
          return Response(status=HTTP_401_UNAUTHORIZED)
        club.delete()
        return Response(status=HTTP_204_NO_CONTENT)
    except Club.DoesNotExist:
        return Response({'message': 'Not Found'}, status=HTTP_404_NOT_FOUND)   
