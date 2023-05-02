from django.db import models
from django.utils import timezone
from datetime import date
from django.core.validators import MinValueValidator, MaxValueValidator

class Client(models.Model):
    first_name = models.CharField('Nombre', max_length=100) 
    last_name = models.CharField('Apellido', max_length=100) 
    email = models.EmailField('Correo')
    phone_number = models.CharField('Celular', max_length=30)
    
    def __str__(self):
        return self.first_name

class Product(models.Model):
    name = models.CharField(
        'Nombre', 
        max_length=100,
        default='product'
    )
    
    description = models.TextField(
        'Descripción', 
        max_length=600, 
        default="""
        The colorful leaves rustled beneath my feet as I walked through the tranquil 
        forest. The gentle breeze carried the scent of pine and fresh air, and the 
        sound of a nearby stream provided a soothing soundtrack. As I gazed up at the 
        clear blue sky, I felt grateful for this moment of peace and serenity.""", 
        null=True, 
        blank=True
    )
    
    price = models.PositiveIntegerField(
        'Precio', 
        default=129900, 
        null=True, 
        blank=True
    )
    
    previous_price = models.PositiveIntegerField(
        'Precio anterior', 
        default=149900, 
        null=True, 
        blank=True
    )
    
    expiration_date = models.DateField(
        'Fecha de caducidad', 
        default=date.today, 
        null=True, 
        blank=True
    )
    
    features =  models.TextField(
        'Características', 
        max_length=600, 
        default='7 velocidades', 
        null=True, 
        blank=True
    )
    
    colors = models.CharField(
        verbose_name='Colores', 
        max_length=50, 
        default='Black', 
        null=True, 
        blank=True
    )
    
    discount = models.DecimalField(
        'Descuento', 
        default=20, 
        null=True, 
        blank=True, 
        validators=[MinValueValidator(0), MaxValueValidator(100)], 
        decimal_places=2, 
        max_digits=4
    )
    
    star_rate = models.DecimalField(
        'Calificación', 
        default=4.2, 
        null=True, 
        blank=True,
        validators=[MinValueValidator(0), MaxValueValidator(5)],
        decimal_places=1, 
        max_digits=3
    )
    
    out_of_stock = models.BooleanField(
        'Agotado',
        default=False, 
        null=True, 
        blank=True
    )
    
    stock_quantity = models.PositiveIntegerField(
        'Unidades disponibles',
        default=30, 
        null=True, 
        blank=True
    )
    
    image = models.ImageField(
        'Imagen',
        upload_to='product_images',
        default=None, 
        null=True, 
        blank=True
    )