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






@api_view(['GET'])
def getAllInfirmier(request):
    if request.method == 'GET' and request.user.is_authenticated:
        queryset = InfPrileve.objects.all()

        source_serial = InfirmierSerializer(queryset, many=True)

        return Response(status=status.HTTP_200_OK,data=source_serial.data)
                
    else :
        return Response(status=status.HTTP_401_UNAUTHORIZED) 



@api_view(['GET'])
def getSelectedInfirmier(request, id):
    if request.method == 'GET' and request.user.is_authenticated:
        queryset = InfPrileve.objects.get(id = id)

        source_serial = InfirmierSerializer(queryset)

        return Response(status=status.HTTP_200_OK,data=source_serial.data)
                
    
    else :
        return Response(status=status.HTTP_401_UNAUTHORIZED)


@api_view(['GET'])
def getAllInfirmiersToSelect(request):
    if request.method == 'GET' and request.user.is_authenticated:
        queryset = InfPrileve.objects.all()

        source_serial = InfirmierSelectSerializer(queryset, many=True)

        return Response(status=status.HTTP_200_OK,data=source_serial.data)
                
    
    else :
        return Response(status=status.HTTP_401_UNAUTHORIZED) 


@api_view(['POST'])
def createNewInfirmier(request):
    if request.method == 'POST' and request.user.is_authenticated:
        first_name = request.data.pop('first_name')
        last_name = request.data.pop('last_name')

        source = InfPrileve.objects.create(first_name=first_name, last_name=last_name)

        if source.id is not None:
            return Response(status=status.HTTP_201_CREATED, data = {"status":"Infirmier created"})
        else:
            return Response(status=status.HTTP_500_INTERNAL_SERVER_ERROR)



@api_view(['POST'])
def updateInfirmier(request, id):
    if request.method == 'POST' and request.user.is_authenticated:
        first_name = request.data.pop("first_name")
        last_name = request.data.pop("last_name")
        infirmier_to_update = InfPrileve.objects.get(id=id)
        if not infirmier_to_update.first_name == first_name:
            infirmier_to_update.first_name = first_name
        if not infirmier_to_update.last_name == last_name:
            infirmier_to_update.last_name = last_name
        
        infirmier_to_update.save()
        
        return Response(status=status.HTTP_200_OK, data = {"status":"infirmier updated"})


@api_view(['DELETE'])
def deleteInfirmier(request, id):
    if request.method == 'DELETE' and request.user.is_authenticated:
        InfPrileve.objects.filter(id=id).delete()
        return Response(status=status.HTTP_200_OK, data = {"status":"infirmier deleted"})






@api_view(['GET'])
def getAllExameTests(request):
    if request.method == 'GET' and request.user.is_authenticated:
        queryset = ExamenTestes.objects.all()

        source_serial = ExemenTestSerializer(queryset, many=True)

        return Response(status=status.HTTP_200_OK,data=source_serial.data)
                
    else :
        return Response(status=status.HTTP_401_UNAUTHORIZED) 


@api_view(['GET'])
def getExameTestsOfSelectedType(request, exm_type):
    if request.method == 'GET' and request.user.is_authenticated:
        queryset = ExamenTestes.objects.filter(exam_type=str(exm_type))

        source_serial = ExemenTestSerializer(queryset, many=True)

        return Response(status=status.HTTP_200_OK,data=source_serial.data)
                
    else :
        return Response(status=status.HTTP_401_UNAUTHORIZED) 



@api_view(['GET'])
def getSelectedExemenTest(request, id):
    if request.method == 'GET' and request.user.is_authenticated:
        queryset = ExamenTestes.objects.get(id = id)

        source_serial = ExemenTestSerializer(queryset)

        return Response(status=status.HTTP_200_OK,data=source_serial.data)
                
    
    else :
        return Response(status=status.HTTP_401_UNAUTHORIZED)


@api_view(['GET'])
def getAllExemenTestToSelect(request):
    if request.method == 'GET' and request.user.is_authenticated:
        queryset = ExamenTestes.objects.values('exam_type').distinct()

        source_serial = ExemenTestSelectSerializer(queryset, many=True)

        return Response(status=status.HTTP_200_OK,data=source_serial.data)
                
    
    else :
        return Response(status=status.HTTP_401_UNAUTHORIZED) 


@api_view(['GET'])
def getAllTestesOfType(request):
    if request.method == 'GET' and request.user.is_authenticated:
        queryset = ExamenTestes.objects.values('exam_type').distinct()

        source_serial = ExemenTestSelectSerializer(queryset, many=True)

        return Response(status=status.HTTP_200_OK,data=source_serial.data)
                
    
    else :
        return Response(status=status.HTTP_401_UNAUTHORIZED) 


@api_view(['POST'])
def createNewExemenTest(request):
    if request.method == 'POST' and request.user.is_authenticated:
        exam_test = request.data.pop('exam_test')
        exam_type = request.data.pop('exam_type')
        exam_color = request.data.pop('exam_color')

        source = ExamenTestes.objects.create(exam_test=exam_test, exam_type=exam_type, exam_color=exam_color)

        if source.id is not None:
            return Response(status=status.HTTP_201_CREATED, data = {"status":"Exemen test created"})
        else:
            return Response(status=status.HTTP_500_INTERNAL_SERVER_ERROR)



@api_view(['POST'])
def updateExemenTest(request, id):
    if request.method == 'POST' and request.user.is_authenticated:
        exam_test = request.data.pop('exam_test')
        exam_type = request.data.pop('exam_type')
        exam_color = request.data.pop('exam_color')
        Exemen_Test_to_update = InfPrileve.objects.get(id=id)
        if not Exemen_Test_to_update.exam_test == exam_test:
            Exemen_Test_to_update.exam_test = exam_test
        if not Exemen_Test_to_update.exam_type == exam_type:
            Exemen_Test_to_update.exam_type = exam_type
        if not Exemen_Test_to_update.exam_color == exam_color:
            Exemen_Test_to_update.exam_color = exam_color
        
        Exemen_Test_to_update.save()
        
        return Response(status=status.HTTP_200_OK, data = {"status":"Exemen test updated"})


@api_view(['DELETE'])
def deleteExemenTest(request, id):
    if request.method == 'DELETE' and request.user.is_authenticated:
        ExamenTestes.objects.filter(id=id).delete()
        return Response(status=status.HTTP_200_OK, data = {"status":"Exemen test deleted"})



@api_view(['GET'])
def getLastExemenTest(request):
    if request.method == 'GET' and request.user.is_authenticated:
        queryset = Examen.objects.all().order_by("-no_enregistrement")

        print(queryset)

        if queryset:
            queryset = queryset[0]
            print(True)  


        source_serial = ExemenSerializer(queryset, many = True)

        return Response(status=status.HTTP_200_OK,data=source_serial.data)
                
    
    else :
        return Response(status=status.HTTP_401_UNAUTHORIZED)