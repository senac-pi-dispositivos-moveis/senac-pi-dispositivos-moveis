from datetime import datetime
from tempfile import template

from django.shortcuts import render, redirect
from django.contrib.auth.decorators import login_required
from django.contrib.auth import authenticate, login
from .forms import CustomUserCreationForm
from django.contrib import messages

def register(request):
    if request.method == 'POST':
        form = CustomUserCreationForm(request.POST)
        if form.is_valid():
            form.save()
            messages.success(request, 'Registro bem-sucedido! Faça login para continuar.')
            return redirect('home')
    else:
        form = CustomUserCreationForm()
    return render(request, 'autismo/register.html', {'form': form})

def logins(request):
    if request.method == 'POST':
        username = request.POST['username']
        password = request.POST['password']
        user = authenticate(request, username=username, password=password)
        if user is not None:
            login(request, user)
            return redirect('home')
        else:
            messages.error(request, 'Usuário ou senha incorretos.')
    return render(request, 'autismo/logins.html')

@login_required
def home(request):
    context = {}
    return render(request, 'autismo/home.html', context)
