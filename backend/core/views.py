from rest_framework import viewsets, filters

from core.models import Specialist
from core.serializers import SpecialistSerializer


class SpecialistViewSet(viewsets.ModelViewSet):
    queryset = Specialist.objects.all()
    serializer_class = SpecialistSerializer
    filter_backends = [filters.OrderingFilter]
    ordering_fields = ['name']
