from django.contrib import admin
from django.contrib.auth import views as auth_views
from django.urls import path

from core.views import home, logins, register

urlpatterns = [
    path('admin/', admin.site.urls),
    path('home/', home, name='home'),
    path('', logins, name='login'),
    path('logout/', auth_views.logout_then_login, name='logout'),
    path('register/', register, name='register'),
]
