from django.contrib import messages
from django.contrib.auth import authenticate, login
from django.contrib.auth.decorators import login_required
from django.contrib.auth.models import User
from django.shortcuts import render, redirect

from core.forms import CustomUserCreationForm, SearchSpecialistForm
from core.models import Specialist


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
    context = {}
    if request.method == 'POST':
        email = request.POST['email']
        password = request.POST['password']
        context['email'] = email
        try:
            user = authenticate(
                request,
                username=User.objects.get(email=email).username,
                password=password,
            )
            if user:
                login(request, user)
                return redirect('home')
        except User.DoesNotExist:
            pass
        messages.error(request, 'Usuário ou senha incorretos.')
    return render(request, 'login.html', context=context)


@login_required
def home(request):
    queryset = Specialist.objects.all()

    if request.path == '/home/' and request.method == 'POST':
        form = SearchSpecialistForm(request.POST)
        if form.is_valid():
            state = form.cleaned_data['state']
            if state:
                queryset = queryset.filter(address__state__icontains=state)
            city = form.cleaned_data['city']
            if city:
                queryset = queryset.filter(address__city__icontains=city)
    else:
        form = SearchSpecialistForm()

    specialists = []
    for specialist in queryset:
        data = {
            'name': specialist.name,
            'address': specialist.address,
            'opening_hours': specialist.opening_hours,
            'phone_numbers': [
                item.phone_number for item in specialist.phone_numbers.all()
            ],
            'specialties': [
                itme.name for itme in specialist.specialties.all()
            ],
            'rating': 5,
        }
        specialists.append(data)

    context = {
        'form': form,
        'specialists': specialists
    }

    return render(request, 'home.html', context)
