# Generated by Django 4.2.5 on 2023-10-04 09:51

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('users_origin', '0015_alter_tokenjwt_t_limit'),
    ]

    operations = [
        migrations.AlterField(
            model_name='tokenjwt',
            name='t_limit',
            field=models.DateTimeField(default=datetime.datetime(2023, 10, 4, 10, 51, 45, 99959, tzinfo=datetime.timezone.utc)),
        ),
    ]
