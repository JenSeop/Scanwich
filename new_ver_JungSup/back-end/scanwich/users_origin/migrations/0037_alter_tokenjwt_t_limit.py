# Generated by Django 4.2.5 on 2023-11-03 05:48

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('users_origin', '0036_alter_tokenjwt_t_limit'),
    ]

    operations = [
        migrations.AlterField(
            model_name='tokenjwt',
            name='t_limit',
            field=models.DateTimeField(default=datetime.datetime(2023, 11, 3, 6, 48, 7, 897772, tzinfo=datetime.timezone.utc)),
        ),
    ]
