from django.contrib.auth.forms import UserCreationForm, UserChangeForm
from django.contrib.auth.models import User


class CustomUserCreationForm(UserCreationForm):
    error_messages = {
        'password_mismatch': "As senhas não coincidem.",
    }

    class Meta:
        model = User
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
        model = User
        fields = ('username', 'email')
        labels = {
            'username': 'Nome de usuário',
            'email': 'Email',
        }
