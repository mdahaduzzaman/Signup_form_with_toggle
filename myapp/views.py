from django.shortcuts import render
from .forms import Signupform

# Create your views here.
def home(request):
    if request.method == "POST":
        print("Form submitted")
    return render(request, 'index.html')