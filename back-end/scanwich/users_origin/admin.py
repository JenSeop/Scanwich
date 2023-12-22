from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from .models import CustomUser
from django.utils.translation import gettext_lazy as _

class CustomUserAdmin(UserAdmin):
    list_display = ('u_id', 'u_email', 'is_staff', 'u_verif')
    search_fields = ('u_id', 'u_email')
    ordering = ('u_id',)

    fieldsets = (
        (None, {'fields': ('u_email', 'password')}),
        (_('Personal info'), {'fields': ('u_id',)}),
        (_('Permissions'), {
            'fields': ('is_active', 'is_staff', 'is_superuser', 'groups', 'user_permissions'),
        }),
    )
    add_fieldsets = (
        (None, {
            'classes': ('wide',),
            'fields': ('u_id', 'u_email', 'password1', 'password2'),
        }),
    )


admin.site.register(CustomUser, CustomUserAdmin)
