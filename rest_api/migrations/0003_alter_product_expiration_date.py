# Generated by Django 4.2 on 2023-04-12 16:16

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('rest_api', '0002_alter_product_expiration_date'),
    ]

    operations = [
        migrations.AlterField(
            model_name='product',
            name='expiration_date',
            field=models.DateField(blank=True, default=datetime.date(2023, 4, 12), null=True, verbose_name='Fecha de caducidad'),
        ),
    ]
