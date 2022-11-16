import datetime
from os import stat
from wsgiref.util import request_uri
from django.shortcuts import render
from rest_framework.decorators import api_view, authentication_classes, permission_classes
from rest_framework.exceptions import PermissionDenied
from rest_framework import viewsets
from .models import *
from .serializers import *
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from django.http import JsonResponse
from rest_framework import status
from calendar import monthrange
from dateutil.relativedelta import relativedelta



@api_view(['GET'])
def getAllLaboriste(request):
    if request.method == 'GET' and request.user.is_authenticated:
        queryset = Laboriste.objects.all()
        print(queryset)

        source_serial = LaboristeSerializer(queryset, many=True)

        return Response(status=status.HTTP_200_OK,data=source_serial.data)
                
    
    else :
        return Response(status=status.HTTP_401_UNAUTHORIZED) 



@api_view(['GET'])
def getSelectedLaboriste(request, id):
    if request.method == 'GET' and request.user.is_authenticated:
        queryset = Laboriste.objects.get(id = id)

        source_serial = LaboristeSerializer(queryset)

        return Response(status=status.HTTP_200_OK,data=source_serial.data)
                
    
    else :
        return Response(status=status.HTTP_401_UNAUTHORIZED)


@api_view(['GET'])
def getAllLaboristeToSelect(request):
    if request.method == 'GET' and request.user.is_authenticated:
        queryset = Laboriste.objects.all()

        source_serial = LaboristeSelectSerializer(queryset, many=True)

        return Response(status=status.HTTP_200_OK,data=source_serial.data)
                
    
    else :
        return Response(status=status.HTTP_401_UNAUTHORIZED) 


@api_view(['POST'])
def createNewLaboriste(request):
    if request.method == 'POST' and request.user.is_authenticated:
        first_name = request.data.pop('first_name')
        last_name = request.data.pop('last_name')

        source = Laboriste.objects.create(first_name=first_name, last_name=last_name)

        if source.id is not None:
            return Response(status=status.HTTP_201_CREATED, data = {"status":"laboriste created"})
        else:
            return Response(status=status.HTTP_500_INTERNAL_SERVER_ERROR)



@api_view(['POST'])
def updateLaboriste(request, id):
    if request.method == 'POST' and request.user.is_authenticated:
        first_name = request.data.pop("first_name")
        last_name = request.data.pop("last_name")
        laboriste_to_update = Laboriste.objects.get(id=id)
        if not laboriste_to_update.first_name == first_name:
            laboriste_to_update.first_name = first_name
        if not laboriste_to_update.last_name == last_name:
            laboriste_to_update.last_name = last_name
        
        laboriste_to_update.save()
        
        return Response(status=status.HTTP_200_OK, data = {"status":"laboriste updated"})


@api_view(['DELETE'])
def deleteLaboriste(request, id):
    if request.method == 'DELETE' and request.user.is_authenticated:
        Laboriste.objects.filter(id=id).delete()
        return Response(status=status.HTTP_200_OK, data = {"status":"laboriste deleted"})