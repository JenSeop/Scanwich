# Generated by Django 4.2.5 on 2023-10-11 01:50

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('users_origin', '0034_alter_tokenjwt_t_limit'),
    ]

    operations = [
        migrations.AlterField(
            model_name='tokenjwt',
            name='t_limit',
            field=models.DateTimeField(default=datetime.datetime(2023, 10, 11, 2, 50, 38, 921143, tzinfo=datetime.timezone.utc)),
        ),
    ]