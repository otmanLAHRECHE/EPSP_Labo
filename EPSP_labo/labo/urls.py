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

    path('api/get_all_infirmiers/', views.getAllInfirmier),
    path('api/get_all_infirmier_to_select/', views.getAllInfirmiersToSelect),
    path('api/get_selected_infirmier/<int:id>', views.getSelectedInfirmier),
    path('api/create_new_infirmier/', views.createNewInfirmier),
    path('api/update_infirmier/<int:id>', views.updateInfirmier),
    path('api/delete_infirmier/<int:id>', views.deleteInfirmier),

    
    path('api/get_all_exmene_test/', views.getAllExameTests),
    path('api/get_all_exemen_test_types_to_select/', views.getAllExemenTestToSelect),
    path('api/get_selected_exemen_test/<int:id>', views.getSelectedExemenTest),
    path('api/create_new_exemen_test/', views.createNewExemenTest),
    path('api/update_exemen_test/<int:id>', views.updateExemenTest),
    path('api/delete_exemen_test/<int:id>', views.deleteExemenTest),
    path('api/get_all_exemen_test_of_type/<str:exm_type>', views.getExameTestsOfSelectedType),
    path('api/get_last_exemen_test/', views.getLastExemenTest),


    path('api/get_all_exmene/', views.getAllExames),
    path('api/get_selected_exemen/<int:id>', views.getSelectedExemen),
    path('api/create_new_exemen/', views.createNewExemen),
    path('api/update_exemen/<int:id>', views.updateExemen),
    path('api/delete_exemen/<int:id>', views.deleteExemen),
    path('api/get_all_exmene_of_month/<int:month>/<int:year>', views.getAllExamenOfMonth),
    
    path('api/get_all_exmene_of_month_labo/<int:month>/<int:year>', views.getAllExamenOfMonthForLaboriste),



    
    path('api/create_new_test/', views.createNewTest),
    path('api/update_test/<int:id>', views.updateTest),
    path('api/delete_test/<int:id>', views.deleteTest),
    path('api/delete_test_of_examen/<int:id>', views.deleteTestOfExamen),

    
    path('api/get_test_details_of_exam/<int:id>', views.getTestResultOfExam),
]