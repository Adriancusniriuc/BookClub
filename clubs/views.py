# pylint: disable=no-member
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.status import HTTP_404_NOT_FOUND, HTTP_201_CREATED, HTTP_422_UNPROCESSABLE_ENTITY, HTTP_204_NO_CONTENT, HTTP_202_ACCEPTED, HTTP_401_UNAUTHORIZED

from .models import Club
from .serializer import PopulatedClubSerializer, ClubSerializer, UserSerializer, BookSerializer


class ClubListView(APIView):

  def get(self, _request):

    clubs = Club.objects.all()
    serialized_clubs = PopulatedClubSerializer(clubs, many=True)

    return Response(serialized_clubs.data)

  def post(self, request):

    club = ClubSerializer(data=request.data)

    if club.is_valid():
      club.save()
      return Response(club.data, status=HTTP_201_CREATED)
    return Response(club.errors, status=HTTP_422_UNPROCESSABLE_ENTITY)



class ClubDetailView(APIView):
  def get(self, _request, pk):
    try:
      club = Club.objects.get(pk=pk)
      serialized_clubs = ClubSerializer(club)
      return Response(serialized_clubs.data)
    except Club.DoesNotExist:
      return Response({ 'message': 'Not Found'}, status=HTTP_404_NOT_FOUND)

  
  def put(self, request, pk):

    try:
      club = Club.objects.get(pk=pk)
      updated_club = ClubSerializer(club, data=request.data)
      if updated_club.is_valid():
        updated_club.save()
        return Response(updated_club.data, status=HTTP_202_ACCEPTED)
      return Response(updated_club.errors, status=HTTP_422_UNPROCESSABLE_ENTITY)
    except Club.DoesNotExist:
      return Response({ 'message': 'Not Found'}, status=HTTP_404_NOT_FOUND)

  def delete(self, _request, pk):
    try:
        club = Club.objects.get(pk=pk)
        club.delete()
        return Response(status=HTTP_204_NO_CONTENT)
    except Club.DoesNotExist:
        return Response({'message': 'Not Found'}, status=HTTP_404_NOT_FOUND)   
