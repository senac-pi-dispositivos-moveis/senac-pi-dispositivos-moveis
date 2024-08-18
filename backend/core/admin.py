from django.contrib import admin
from django.utils.translation import gettext_lazy as __

from core.models import (
    Address,
    PhoneNumber,
    Specialty,
    Specialist,
    Review,
)


@admin.register(Address)
class AddressAdmin(admin.ModelAdmin):
    # List
    list_display = (
        'zip_code',
        'city',
        'state',
        'street',
        'neighborhood',
    )
    search_fields = (
        'zip_code',
        'city',
        'state',
        'street',
        'number',
    )


@admin.register(PhoneNumber)
class PhoneNumberAdmin(admin.ModelAdmin):
    # List
    list_display = (
        'phone_number',
    )
    search_fields = (
        'phone_number',
    )


@admin.register(Specialty)
class SpecialtyAdmin(admin.ModelAdmin):
    # List
    list_display = (
        'name',
    )
    search_fields = (
        'name',
    )


@admin.register(Specialist)
class SpecialistAdmin(admin.ModelAdmin):
    # List
    list_display = (
        'name',
        'address',
        'opening_hours',
        '_specialties',
    )
    search_fields = (
        'address',
        'opening_hours',
        'specialties',
    )

    @staticmethod
    @admin.display(description=__('Specialties'))
    def _specialties(obj: Specialist):
        if obj.specialties:
            specialties = [
                speciality.name for speciality in obj.specialties.all()
            ]
            return ', '.join(specialties)
        return None


@admin.register(Review)
class ReviewAdmin(admin.ModelAdmin):
    # List
    list_display = (
        'specialist',
        'rating',
    )
    search_fields = (
        'specialist',
    )
