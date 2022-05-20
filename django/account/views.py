import json

# from django.contrib.auth import authenticate, login
from django.http import JsonResponse
from django.middleware.csrf import get_token
from django.views.decorators.http import require_POST
# from rest_framework.authentication import SessionAuthentication
# from rest_framework.permissions import IsAuthenticated
# from rest_framework.views import APIView


def get_csrf(request):
    response = JsonResponse({"Info": "Success - Set CSRF cookie"})
    response["X-CSRFToken"] = get_token(request)
    return response

