from django.db import models
from email.headerregistry import Address
from tkinter import CASCADE
# Create your models here.



class InfPrileve(models.Model):
    id = models.AutoField(primary_key=True)
    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)

    def __str__(self):
        return self.first_name
    def full_name(self):
        return str(self.first_name) +" "+ str(self.last_name)


class Laboriste(models.Model):
    id = models.AutoField(primary_key=True)
    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)

    def __str__(self):
        return self.first_name
    def full_name(self):
        return str(self.first_name) +" "+ str(self.last_name)


class ExamenTestes(models.Model):
    id = models.AutoField(primary_key=True)
    exam_test = models.CharField(max_length=50)
    exam_type = models.CharField(max_length=100)
    exam_color = models.CharField(max_length=100)

    def __str__(self):
        return self.exam_test
    


class Examen(models.Model):
    id = models.AutoField(primary_key=True)
    no_enregistrement = models.IntegerField()
    patient_first_name = models.CharField(max_length=100)
    patient_last_name = models.CharField(max_length=100)
    patient_birth_day = models.DateField()
    patient_genre = models.CharField(max_length=50)
    doctor_send_from = models.CharField(max_length=100)
    date_prelevement = models.DateField()
    inf_prelevement = models.ForeignKey(InfPrileve, on_delete=models.CASCADE)
    exm_type = models.CharField(max_length=100)
    test_seen = models.CharField(max_length=50)
    result_ready = models.CharField(max_length=50)

    def __str__(self):
        return self.no_enregistrement


class Resultat(models.Model):
    id = models.AutoField(primary_key=True)
    examen = models.ForeignKey(Examen, on_delete=models.CASCADE)
    laboriste_worker = models.ForeignKey(Laboriste, on_delete=models.CASCADE)
    date_result = models.DateField()
    result_tests = models.CharField(max_length=50)

    def __str__(self):
        return self.id



class TestDetails(models.Model):
    id = models.AutoField(primary_key=True)
    examen_test = models.ForeignKey(ExamenTestes, on_delete=models.CASCADE)
    examen = models.ForeignKey(Examen, on_delete=models.CASCADE, related_name="test_details")
    resultat_test = models.CharField(max_length=100)

    def __str__(self):
        return self.id





