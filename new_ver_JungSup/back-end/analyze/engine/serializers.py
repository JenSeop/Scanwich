from rest_framework import serializers
from .models import UploadedFile

class FileSerializer(serializers.ModelSerializer):
    class Meta:
        model = UploadedFile
        fields = ['r_id', 'r_data', 'r_date', 'r_status', 'u_id', 'f_path']
