

from dataclasses import fields
from rest_framework import serializers
from .models import *





class LaboristeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Laboriste
        fields = ['id', 'first_name', 'last_name']

class LaboristeSelectSerializer(serializers.ModelSerializer):
    label = serializers.CharField(source = 'full_name') 
    class Meta:
        model = Laboriste
        fields = ['id', 'label']



class InfirmierSerializer(serializers.ModelSerializer):
    class Meta:
        model = InfPrileve
        fields = ['id', 'first_name', 'last_name']

class InfirmierSelectSerializer(serializers.ModelSerializer):
    label = serializers.CharField(source = 'full_name') 
    class Meta:
        model = InfPrileve
        fields = ['id', 'label']


class ExemenTestSerializer(serializers.ModelSerializer):
    class Meta:
        model = ExamenTestes
        fields = ['id', 'exam_test', 'exam_type', 'exam_color']


class ExemenTestSelectSerializer(serializers.ModelSerializer):
    label = serializers.CharField(source = 'exam_type') 
    class Meta:
        model = ExamenTestes
        fields = ['id', 'label']


class ExemenTestOfTypeSerializer(serializers.ModelSerializer):
    class Meta:
        model = ExamenTestes
        fields = ['id', 'exam_test']



class TestDetailsSerializer(serializers.ModelSerializer):

    examen_test = ExemenTestSerializer()
    class Meta:
        model = TestDetails
        fields = ['id', 'examen_test']



class ExemenSerializer(serializers.ModelSerializer):

    inf_prelevement = InfirmierSerializer()
    tests = TestDetailsSerializer(many=True)
    class Meta:
        model = Examen
        fields = ['id', 'no_enregistrement','patient_first_name','patient_last_name','patient_birth_day','patient_genre','doctor_send_from','date_prelevement','inf_prelevement','exm_type','tests','test_seen','result_ready']