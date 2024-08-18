from rest_framework import serializers

from core.models import Specialist, Address, Specialty, PhoneNumber


class AddressSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Address
        fields = [
            'id',
            'zip_code',
            'city',
            'state',
            'street',
            'number',
            'neighborhood',
            'complement',
            'latitude',
            'longitude',
        ]


class PhoneNumberSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = PhoneNumber
        fields = [
            'id',
            'phone_number',
            'whatsapp_number',
        ]


class SpecialtySerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Specialty
        fields = [
            'id',
            'name',
        ]


class SpecialistSerializer(serializers.HyperlinkedModelSerializer):
    address = AddressSerializer()
    phone_numbers = PhoneNumberSerializer(many=True)
    specialties = SpecialtySerializer(many=True)

    class Meta:
        model = Specialist
        fields = [
            'id',
            'name',
            'address',
            'phone_numbers',
            'opening_hours',
            'specialties',
        ]
