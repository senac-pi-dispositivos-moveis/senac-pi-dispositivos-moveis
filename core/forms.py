from django import forms
from django.contrib.auth.forms import (
    UserCreationForm,
    UserChangeForm,
    UsernameField,
)
from django.contrib.auth.models import User


class CustomUserCreationForm(UserCreationForm):
    username = UsernameField(required=False)
    error_messages = {
        'password_mismatch': 'As senhas não coincidem.',
    }

    class Meta:
        model = User
        fields = (
            'username',
            'email',
            'password1',
            'password2',
        )
        labels = {
            'email': 'Email',
            'password1': 'Senha',
            'password2': 'Confirme a senha',
        }

    def clean_username(self) -> str:
        return forms.EmailField().clean(self.data['email'])


class CustomUserChangeForm(UserChangeForm):
    class Meta:
        model = User
        fields = ('username', 'email')
        labels = {
            'username': 'Nome de usuário',
            'email': 'Email',
        }


class SearchSpecialistForm(forms.Form):
    state = forms.CharField(
        label='Estado',
        min_length=3,
        max_length=100,
        required=False,
    )
    city = forms.CharField(
        label='Cidade',
        min_length=3,
        max_length=100,
        required = False,
    )
