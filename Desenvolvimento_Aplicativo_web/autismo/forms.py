# autismo/forms.py
from django import forms
from django.contrib.auth.forms import UserCreationForm, UserChangeForm
from .models import CustomUser

class CustomUserCreationForm(UserCreationForm):
    error_messages = {
        'password_mismatch': "As senhas não coincidem.",
    }
    class Meta:
        model = CustomUser
        fields = ('username', 'email', 'password1', 'password2')
        labels = {
            'username': 'Nome de usuário',
            'email': 'Email',
            'password1': 'Senha',
            'password2': 'Confirme a senha',
        }
        help_texts = {
            'username': None,
        }

class CustomUserChangeForm(UserChangeForm):
    class Meta:
        model = CustomUser
        fields = ('username', 'email')
        labels = {
            'username': 'Nome de usuário',
            'email': 'Email',
        }
