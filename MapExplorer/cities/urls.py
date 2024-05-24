from django.urls import path
from . import views

urlpatterns = [
    path('', views.city_home, name='city_home'),  # Home view for each city
]
