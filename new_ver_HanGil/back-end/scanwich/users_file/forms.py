# forms.py
from django import forms
from .models import UploadedFile

class FileUploadForm(forms.ModelForm):
    class Meta:
        model = UploadedFile
        fields = ('f_path',)

    def clean_f_path(self):
        uploaded_file = self.cleaned_data.get('f_path')
        if uploaded_file:
            file_extension = uploaded_file.name.split('.')[-1].lower()
            if file_extension != 'apk':
                raise forms.ValidationError("APK 파일만 업로드 가능합니다.")
        return uploaded_file