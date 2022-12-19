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
        Exemen_Test_to_update = ExamenTestes.objects.get(id=id)
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
        queryset = Examen.objects.all()

        if queryset:
            queryset = Examen.objects.all().order_by("-no_enregistrement")
            queryset = queryset[0]
            print(True) 
            source_serial = ExemenSerializer(queryset)
        else:
            print(False) 
            source_serial = ExemenSerializer(queryset, many=True)


        return Response(status=status.HTTP_200_OK,data=source_serial.data)
                
    
    else :
        return Response(status=status.HTTP_401_UNAUTHORIZED)






@api_view(['GET'])
def getAllExames(request):
    if request.method == 'GET' and request.user.is_authenticated:
        queryset = Examen.objects.all()

        source_serial = ExemenSerializer(queryset, many=True)

        return Response(status=status.HTTP_200_OK,data=source_serial.data)
                
    else :
        return Response(status=status.HTTP_401_UNAUTHORIZED) 


@api_view(['GET'])
def getSelectedExemen(request, id):
    if request.method == 'GET' and request.user.is_authenticated:
        queryset = Examen.objects.get(id = id)

        source_serial = ExemenSerializer(queryset)

        return Response(status=status.HTTP_200_OK,data=source_serial.data)
                
    
    else :
        return Response(status=status.HTTP_401_UNAUTHORIZED)




@api_view(['POST'])
def createNewExemen(request):
    if request.method == 'POST' and request.user.is_authenticated:

        no_enregistrement = request.data.pop('no_enregistrement')
        patient_first_name = request.data.pop('patient_first_name')
        patient_last_name = request.data.pop('patient_last_name')
        date_p = request.data.pop('date_prelevement')
        date_ns = request.data.pop('patient_birth_day')
        patient_genre = request.data.pop('patient_genre')
        doctor_send_from = request.data.pop('doctor_send_from')
        inf_prelevement_id = request.data.pop('inf_prelevement_id')
        exm_type = request.data.pop('exm_type')
        test_seen = request.data.pop('test_seen')
        result_ready = request.data.pop('result_ready')

        inf_prelevement = InfPrileve.objects.get(id=inf_prelevement_id)

        date_prelevement = date_p.split("/")
        patient_birth_day = date_ns.split("/")

        d_p = date_prelevement[0]
        m_p = date_prelevement[1]

        d_ns = patient_birth_day[0]
        m_ns = patient_birth_day[1]

        if d_p[0] == '0':
            d_p.replace('0','',1)
        if m_p[0] == '0':
            m_p.replace('0','',1)
        if d_ns[0] == '0':
            d_ns.replace('0','',1)
        if m_ns[0] == '0':
            m_ns.replace('0','',1)

        date_prelevement[0] = d_p
        date_prelevement[1] = m_p
        patient_birth_day[0] = d_ns
        patient_birth_day[1] = m_ns

        
        date_prelevement = datetime.date(int(date_prelevement[2]), int(date_prelevement[1]), int(date_prelevement[0]))
        patient_birth_day = datetime.date(int(patient_birth_day[2]), int(patient_birth_day[1]), int(patient_birth_day[0]))


        source = Examen.objects.create(no_enregistrement = no_enregistrement, patient_first_name = patient_first_name, patient_last_name=patient_last_name, patient_birth_day=patient_birth_day, patient_genre=patient_genre, doctor_send_from=doctor_send_from, date_prelevement=date_prelevement, inf_prelevement=inf_prelevement, exm_type=exm_type, test_seen=test_seen, result_ready=result_ready)

        if source.id is not None:
            return Response(status=status.HTTP_201_CREATED, data = {"id_examen":source.id})
        else:
            return Response(status=status.HTTP_500_INTERNAL_SERVER_ERROR)



@api_view(['POST'])
def updateExemen(request, id):
    if request.method == 'POST' and request.user.is_authenticated:
        no_enregistrement = request.data.pop('no_enregistrement')
        patient_first_name = request.data.pop('patient_first_name')
        patient_last_name = request.data.pop('patient_last_name')
        date_p = request.data.pop('date_prelevement')
        date_ns = request.data.pop('patient_birth_day')
        patient_genre = request.data.pop('patient_genre')
        doctor_send_from = request.data.pop('doctor_send_from')
        inf_prelevement_id = request.data.pop('inf_prelevement_id')
        exm_type = request.data.pop('exm_type')

        inf_prelevement = InfPrileve.objects.get(id=inf_prelevement_id)

        date_prelevement = date_p.split("/")
        patient_birth_day = date_ns.split("/")

        d_p = date_prelevement[0]
        m_p = date_prelevement[1]

        d_ns = patient_birth_day[0]
        m_ns = patient_birth_day[1]

        if d_p[0] == '0':
            d_p.replace('0','',1)
        if m_p[0] == '0':
            m_p.replace('0','',1)
        if d_ns[0] == '0':
            d_ns.replace('0','',1)
        if m_ns[0] == '0':
            m_ns.replace('0','',1)

        date_prelevement[0] = d_p
        date_prelevement[1] = m_p
        patient_birth_day[0] = d_ns
        patient_birth_day[1] = m_ns

        
        date_prelevement = datetime.date(int(date_prelevement[2]), int(date_prelevement[1]), int(date_prelevement[0]))
        patient_birth_day = datetime.date(int(patient_birth_day[2]), int(patient_birth_day[1]), int(patient_birth_day[0]))

        examen_to_update = Examen.objects.get(id = id)

        if not examen_to_update.no_enregistrement == no_enregistrement:
            examen_to_update.no_enregistrement = no_enregistrement
        if not examen_to_update.patient_first_name == patient_first_name:
            examen_to_update.patient_first_name = patient_first_name
        if not examen_to_update.patient_last_name == patient_last_name:
            examen_to_update.patient_last_name = patient_last_name
        
        if not examen_to_update.patient_genre == patient_genre:
            examen_to_update.patient_genre = patient_genre
        
        if not examen_to_update.doctor_send_from == doctor_send_from:
            examen_to_update.doctor_send_from = doctor_send_from
        
        if not examen_to_update.exm_type == exm_type:
            examen_to_update.exm_type = exm_type
        
        if not examen_to_update.inf_prelevement.full_name == inf_prelevement.full_name:
            examen_to_update.inf_prelevement = inf_prelevement
        
        if not examen_to_update.date_prelevement == date_prelevement:
            examen_to_update.date_prelevement = date_prelevement
            
        if not examen_to_update.patient_birth_day == patient_birth_day:
            examen_to_update.patient_birth_day = patient_birth_day
        
        examen_to_update.save()
        
        return Response(status=status.HTTP_200_OK, data = {"status":"Exemen updated"})


@api_view(['DELETE'])
def deleteExemen(request, id):
    if request.method == 'DELETE' and request.user.is_authenticated:
        Examen.objects.filter(id=id).delete()
        return Response(status=status.HTTP_200_OK, data = {"status":"Exemen deleted"})



@api_view(['GET'])
def getAllExamenOfMonth(request, month, year):
    if request.method == 'GET' and request.user.is_authenticated:

        range = monthrange(year, month)

        date_start = datetime.date(year , month, 1)
        date_end = datetime.date( year, month, range[1])

        queryset = Examen.objects.filter(date_prelevement__gte=date_start, date_prelevement__lte=date_end).order_by("-date_prelevement")

        source_serial = ExemenSerializer(queryset, many=True)

        return Response(status=status.HTTP_200_OK,data=source_serial.data)
                
    else :
        return Response(status=status.HTTP_401_UNAUTHORIZED) 



@api_view(['POST'])
def createNewTest(request):
    if request.method == 'POST' and request.user.is_authenticated:
        examen_test_id = request.data.pop('exam_test_id')
        exam_id = request.data.pop('exam_id')

        examen_test = ExamenTestes.objects.get(id = examen_test_id)
        examen = Examen.objects.get(id = exam_id)

        source = TestDetails.objects.create(examen_test=examen_test, examen=examen)

        if source.id is not None:
            return Response(status=status.HTTP_201_CREATED, data = {"status":"Test created"})
        else:
            return Response(status=status.HTTP_500_INTERNAL_SERVER_ERROR)



@api_view(['POST'])
def updateTest(request, id):
    if request.method == 'POST' and request.user.is_authenticated:
        

        resultat_test = request.data.pop('resultat_test')
        id = request.data.pop('id')


        Test_to_update = TestDetails.objects.get(id = id)
        
        if not Test_to_update.resultat_test == resultat_test:
            Test_to_update.resultat_test = resultat_test
        
        
        Test_to_update.save()
        
        return Response(status=status.HTTP_200_OK, data = {"status":"Test updated"})


@api_view(['DELETE'])
def deleteTest(request, id):
    if request.method == 'DELETE' and request.user.is_authenticated:
        TestDetails.objects.filter(id=id).delete()
        return Response(status=status.HTTP_200_OK, data = {"status":"Test deleted"})


@api_view(['DELETE'])
def deleteTestOfExamen(request, id):
    if request.method == 'DELETE' and request.user.is_authenticated:

        examen = Examen.objects.get(id= id)
        TestDetails.objects.filter(examen = examen).delete()
        return Response(status=status.HTTP_200_OK, data = {"status":"Test deleted"})



@api_view(['GET'])
def getTestResultOfExam(request, id):
    if request.method == 'GET' and request.user.is_authenticated:
        examen = Examen.objects.get(id = id)

        queryset = TestDetails.objects.filter(examen = examen)

        source_serial = TestDetailsForShowingSerializer(queryset, many=True)

        return Response(status=status.HTTP_200_OK,data=source_serial.data)
                
    
    else :
        return Response(status=status.HTTP_401_UNAUTHORIZED)




@api_view(['GET'])
def getAllResults(request):
    if request.method == 'GET' and request.user.is_authenticated:
        queryset = Resultat.objects.all()

        source_serial = ResultSerializer(queryset, many=True)

        return Response(status=status.HTTP_200_OK,data=source_serial.data)
                
    else :
        return Response(status=status.HTTP_401_UNAUTHORIZED) 


@api_view(['GET'])
def getSelectedResult(request, id):
    if request.method == 'GET' and request.user.is_authenticated:
        queryset = Resultat.objects.get(id = id)

        source_serial = ResultSerializer(queryset)

        return Response(status=status.HTTP_200_OK,data=source_serial.data)
                
    
    else :
        return Response(status=status.HTTP_401_UNAUTHORIZED)




@api_view(['POST'])
def createNewResult(request):
    if request.method == 'POST' and request.user.is_authenticated:

        id_exemen = request.data.pop('id_exemen')
        id_laboriste = request.data.pop('id_laboriste')
        date_r = request.data.pop('date_result')
        result_tests = request.data.pop('result_note')
        

        laboriste_worker = Laboriste.objects.get(id=id_laboriste)
        examen = Examen.objects.get(id= id_exemen)

        date_result = date_r.split("/")

        d_r = date_result[0]
        m_r = date_result[1]


        if d_r[0] == '0':
            d_r.replace('0','',1)
        if m_r[0] == '0':
            m_r.replace('0','',1)

        date_result[0] = d_r
        date_result[1] = m_r

        
        date_result = datetime.date(int(date_result[2]), int(date_result[1]), int(date_result[0]))
        

        source = Resultat.objects.create(examen = examen, laboriste_worker = laboriste_worker, date_result = date_result, result_tests = result_tests)

        if source.id is not None:
            examen.result_ready = "true"
            examen.save()
            return Response(status=status.HTTP_201_CREATED, data = {"Result created succesfully for examen"})
        else:
            return Response(status=status.HTTP_500_INTERNAL_SERVER_ERROR)



@api_view(['POST'])
def updateResult(request, id):
    if request.method == 'POST' and request.user.is_authenticated:

        date_r = request.data.pop('date_result')
        result_tests = request.data.pop('result_note')
        id_laboriste = request.data.pop('id_laboriste')

        laboriste_worker = Laboriste.objects.get(id=id_laboriste)

        date_result = date_r.split("/")

        d_r = date_result[0]
        m_r = date_result[1]


        if d_r[0] == '0':
            d_r.replace('0','',1)
        if m_r[0] == '0':
            m_r.replace('0','',1)

        date_result[0] = d_r
        date_result[1] = m_r

        
        date_result = datetime.date(int(date_result[2]), int(date_result[1]), int(date_result[0]))
        
       
        result_to_update = Resultat.objects.get(id = id)

        if not result_to_update.laboriste_worker == laboriste_worker:
            result_to_update.laboriste_worker = laboriste_worker
        if not result_to_update.date_result == date_result:
            result_to_update.date_result = date_result
        if not result_to_update.result_tests == result_tests:
            result_to_update.result_tests = result_tests
        
        
        result_to_update.save()
        
        return Response(status=status.HTTP_200_OK, data = {"status":"Result updated succesfully"})



@api_view(['GET'])
def getAllExamenOfMonthForLaboriste(request, month, year):
    if request.method == 'GET' and request.user.is_authenticated:

        range = monthrange(year, month)

        date_start = datetime.date(year , month, 1)
        date_end = datetime.date( year, month, range[1])

        queryset = Examen.objects.filter(date_prelevement__gte=date_start, date_prelevement__lte=date_end, result_ready="false").order_by("-date_prelevement")

        source_serial = ExemenSerializer(queryset, many=True)

        return Response(status=status.HTTP_200_OK,data=source_serial.data)
                
    else :
        return Response(status=status.HTTP_401_UNAUTHORIZED) 

@api_view(['GET'])
def getAllResultOfMonth(request, month, year):
    if request.method == 'GET' and request.user.is_authenticated:

        range = monthrange(year, month)

        date_start = datetime.date(year , month, 1)
        date_end = datetime.date( year, month, range[1])

        queryset = Examen.objects.filter(date_prelevement__gte=date_start, date_prelevement__lte=date_end, result_ready="false").order_by("-date_prelevement")

        source_serial = ExemenSerializer(queryset, many=True)

        return Response(status=status.HTTP_200_OK,data=source_serial.data)
                
    else :
        return Response(status=status.HTTP_401_UNAUTHORIZED) 
