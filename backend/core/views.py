from django.contrib import messages
from django.contrib.auth import authenticate, login
from django.contrib.auth.decorators import login_required
from django.shortcuts import render, redirect

from core.forms import CustomUserCreationForm


def register(request):
    if request.method == 'POST':
        form = CustomUserCreationForm(request.POST)
        if form.is_valid():
            form.save()
            messages.success(
                request,
                'Registro bem-sucedido! Faça login para continuar.',
            )
            return redirect('home')
    else:
        form = CustomUserCreationForm()
    return render(
        request,
        'register.html',
        {'form': form},
    )


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
    return render(request, 'login.html')


@login_required
def home(request):
    context = {}
    return render(request, 'home.html', context)
