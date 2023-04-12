from django.db import models
from django.utils import timezone

class Client(models.Model):
    first_name = models.CharField('Nombre', max_length=100) 
    last_name = models.CharField('Apellido', max_length=100) 
    email = models.EmailField('Correo')
    phone_number = models.CharField('Celular', max_length=30)

class Product(models.Model):
    name = models.CharField('Nombre', max_length=100)
    description = models.TextField('Descripción', max_length=600, default=None, null=True, blank=True)
    unit_price = models.PositiveIntegerField('Valor unitario', default=None, null=True, blank=True)
    expiration_date = models.DateField('Fecha de caducidad', default=timezone.now().date(), null=True, blank=True)