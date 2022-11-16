from posixpath import basename
from django.urls import path
from .views import *
from labo import views



urlpatterns = [
    path('api/get_all_laboriste/', views.getAllLaboriste),
    path('api/get_all_laboriste_to_select/', views.getAllLaboristeToSelect),
    path('api/get_selected_laboriste/<int:id>', views.getSelectedLaboriste),
    path('api/create_new_laboriste/', views.createNewLaboriste),
    path('api/update_laboriste/<int:id>', views.updateLaboriste),
    path('api/delete_laboriste/<int:id>', views.deleteLaboriste),


]