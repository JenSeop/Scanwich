# Generated by Django 4.2.5 on 2023-11-21 21:23

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('engine', '0016_customuser'),
    ]

    operations = [
        migrations.AlterField(
            model_name='customuser',
            name='email',
            field=models.EmailField(blank=True, max_length=254, verbose_name='email address'),
        ),
    ]
