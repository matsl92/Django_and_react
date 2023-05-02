from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .serializers import ClientSerializer, ProductSerializer
from .models import Client, Product
from django.middleware.csrf import get_token
from django.views.decorators.csrf import csrf_exempt

# client

@api_view(['GET'])
def list_clients(request):
    clients = Client.objects.all()
    serializer = ClientSerializer(clients, many=True)
    return Response(serializer.data)

@api_view(['POST', 'GET'])
def create_client(request):
    serializer = ClientSerializer(data = request.data)
    if serializer.is_valid():
        serializer.save()
        
    return Response(serializer.data)

@api_view(['GET'])
def read_client(request, id):
    client = Client.objects.get(id=id)
    serializer = ClientSerializer(client)
    return Response(serializer.data)

@api_view(['PUT'])
def update_client(request, id):
    client = Client.objects.get(id=id)
    serializer = ClientSerializer(instance=client, data=request.data)
    if serializer.is_valid():
        serializer.save()
        
    return Response(serializer.data)

@api_view(['DELETE'])
def delete_client(request, id):
    client = Client.objects.get(id=id)
    client.delete()
    
    return Response('Client successfully deleted.')
    

# Product

@api_view(['GET'])
def list_products(request):
    products = Product.objects.all()
    serializer = ProductSerializer(products, many=True)
    return Response(serializer.data)

@api_view(['POST', 'GET'])
def create_product(request):
    serializer = ProductSerializer(data = request.data)
    if serializer.is_valid():
        serializer.save()
        
    return Response(serializer.data)

@api_view(['GET'])
def read_product(request, id):
    product = Product.objects.get(id=id)
    serializer = ProductSerializer(product)
    return Response(serializer.data)

@api_view(['PUT'])
def update_product(request, id):
    product = Product.objects.get(id=id)
    serializer = ProductSerializer(instance=product, data=request.data)
    if serializer.is_valid():
        serializer.save()
        
    return Response(serializer.data)

@api_view(['DELETE'])
def delete_product(request, id):
    product = Product.objects.get(id=id)
    product.delete()
    
    return Response('Client successfully deleted.')


@api_view(['GET'])
def get_token_view(request):
    token = get_token(request)
    return Response({'token': token})

def product_detail(request, id):
    product = Product.objects.get(id=id)
    return render(request, 'rest_api/product.html', {'product': product})