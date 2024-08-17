from django.db import models
from django.utils.translation import gettext_lazy as __


class Address(models.Model):
    zip_code = models.CharField(__('Zip code'), max_length=9)
    city = models.CharField(__('City'), max_length=255)
    state = models.CharField(__('State'), max_length=255)
    street = models.CharField(__('Street'), max_length=255)
    number = models.CharField(__('Number'), max_length=10)
    neighborhood = models.CharField(__('Neighborhood'), max_length=30)
    complement = models.CharField(
        __('Complement'),
        max_length=30,
        blank=True,
        null=True,
    )
    latitude = models.FloatField()
    longitude = models.FloatField()

    class Meta:
        verbose_name = __('Address')
        verbose_name_plural = __('Addresses')

    def __str__(self) -> str:
        return (
            f'{self.street.strip()}, '
            f'{self.number.strip()} '
            f'{self.complement.strip()} - '
            f'{self.neighborhood.strip()}, '
            f'{self.city.strip()} - '
            f'{self.state.strip()}, '
            f'{self.zip_code.strip()}'
        )


class PhoneNumber(models.Model):
    specialist = models.ForeignKey(
        'core.Specialist',
        verbose_name=__('Specialist'),
        on_delete=models.CASCADE,
        related_name='phone_numbers',
    )
    phone_number = models.CharField(__('Phone number'), max_length=30)
    whatsapp_number = models.CharField(
        __('WhatsApp phone number'),
        max_length=30,
        blank=True,
        null=True,
    )

    def __str__(self) -> str:
        return self.phone_number


class Specialty(models.Model):
    name = models.CharField(__('Name'), max_length=255)

    def __str__(self) -> str:
        return self.name


class Specialist(models.Model):
    name = models.CharField(__('Name'), max_length=255)
    address = models.ForeignKey(
        'core.Address',
        verbose_name=__('Address'),
        on_delete=models.SET_NULL,
        blank=True,
        null=True,
        related_name='specialists',
    )
    opening_hours = models.CharField(__('Opening hours'), max_length=255)
    specialties = models.ManyToManyField(
        'core.Specialty',
        related_name='specialists',
        blank=True,
    )

    def __str__(self) -> str:
        return self.name


class Review(models.Model):
    specialist = models.ForeignKey(
        'core.Specialist',
        verbose_name=__('Specialist'),
        on_delete=models.CASCADE,
        related_name='reviews',
    )
    rating = models.PositiveSmallIntegerField()

    def __str__(self) -> int:
        return self.rating
