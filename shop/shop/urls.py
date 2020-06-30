from django.contrib import admin
from django.urls import path
from django.conf.urls import url
from myshop import views
from rest_framework_jwt.views import obtain_jwt_token
from django.conf.urls.static import static

urlpatterns = [
    path('admin/', admin.site.urls),
    url(r'^api/realestate/$', views.RS_ViewSet.as_view(), name="RealEstate"),
    url(r'^api/category/$', views.CateViewSet.as_view(), name="Category"),
    url(r'^api-token-auth/', obtain_jwt_token),
    url(r'^api/realestate/Uniform/$', views.Uniform.as_view(), name="Uniform"),
    url(r'^api/realestate/Wear/$', views.Wear.as_view(), name="Wear"),
    url(r'^api/realestate/Accessory/$', views.Accessory.as_view(), name="Accessory"),
] + static(settings.MEDIA_URL, document_root= settings.MEDIA_ROOT)



    
