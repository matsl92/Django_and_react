# Generated by Django 4.2 on 2023-05-01 23:53

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('rest_api', '0004_remove_product_unit_price_product_colors_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='product',
            name='expiration_date',
            field=models.DateField(blank=True, default=datetime.date.today, null=True, verbose_name='Fecha de caducidad'),
        ),
    ]
