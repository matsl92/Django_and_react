from django.urls import path
from . import views

urlpatterns = [
    # Client model (table)
    path('client/list', views.list_clients), 
    path('client/create', views.create_client), 
    path('client/read/<int:id>', views.read_client), 
    path('client/update/<int:id>', views.update_client), 
    path('client/delete/<int:id>', views.delete_client), 
    
    #Product model (Table)
    path('product/list', views.list_products), 
    path('product/create', views.create_product), 
    path('product/read/<int:id>', views.read_product), 
    path('product/update/<int:id>', views.update_product), 
    path('product/delete/<int:id>', views.delete_product),
    
    path('get_token', views.get_token_view), 
    path('product/<int:id>', views.product_detail)
]
