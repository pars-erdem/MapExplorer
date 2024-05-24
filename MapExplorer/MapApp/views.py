from django.shortcuts import render
from django.http import HttpResponse
from django.shortcuts import render, redirect
from django.urls import reverse
from django.http import Http404
# Create your views here.
def index(request):
    return render(request, 'index.html')
