

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