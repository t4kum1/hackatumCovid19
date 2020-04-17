from flask import Blueprint, jsonify, request, request
from . import db 
from .models import User, Product, Shop, Request
from sqlalchemy import join

main = Blueprint('main', __name__)

@main.route('/users', methods=['GET', 'POST'])
def users():
    if request.method == 'GET':
        user_list = User.query.all()
        users = []

        for user in user_list:
            users.append({'user_name' : user.user_name, 'rating' : user.address})

        return jsonify({'users' : users})
    else:
        user_data = request.get_json()

        new_user = User(user_name=user_data['user_name'], address=user_data['address'])

        db.session.add(new_user)
        db.session.commit()

        return 'Done', 201

@main.route('/shops', methods=['GET', 'POST'])
def shops():
    if request.method == 'GET':
        shop_list = Shop.query.all()
        shops = []

        for shop in shop_list:
            shops.append({'shop_name' : shop.shop_name, 'address' : shop.address, 'sells': shop.sells, 'id': shop.id})

        return jsonify({'shops' : shops})
    else:
        shop_data = request.get_json()

        new_shop = Shop(shop_name=shop_data['shop_name'], address=shop_data['address'], sells=shop_data['sells'])

        db.session.add(new_shop)
        db.session.commit()

        return 'Done', 201

@main.route('/requests', methods=['GET', 'POST'])
def requests():
    if request.method == 'GET':
        request_list = db.session.query(Shop, User, Product, Request).filter(Shop.id == Request.shop_id).filter(User.id == Request.user_id).filter(Product.id == Request.user_id)
        requests = []

        for re in request_list:
            requests.append({'shop_id': re.Shop.id, 'shop_name': re.Shop.shop_name, 'shop_address': re.Shop.address, 'user_id': re.User.id, 'user_name': re.User.user_name, 'user_address': re.User.address, 'product_id': re.Product.id, 'product_name': re.Product.product_name,'product_quantity': re.Product.quantity, 'request_quantity': re.Request.quantity})
        
        return jsonify({'requests' : requests})

    else:
        request_data = request.get_json()

        new_request = Request(shop_id=request_data['shop_id'], user_id=request_data['user_id'], product_id=request_data['product_id'], quantity=request_data['quantity'])

        db.session.add(new_request)
        db.session.commit()

        return 'Done', 201

@main.route('/products', methods=['GET', 'POST'])
def products():
    if request.method == 'GET':

        product_list =  db.session.query(Shop, Product).filter(Shop.id == Product.shop_id)
        products = []

        for product in product_list:
            products.append({'product_id': product.Product.id,  'product_name': product.Product.product_name, 'quantity': product.Product.quantity, 'shop_id': product.Shop.id, 'shop_name': product.Shop.shop_name, 'addres': product.Shop.address, 'sells': product.Shop.sells})
       
        return jsonify({'products' : products})
    else:
        product_data = request.get_json()

        new_product = Product(shop_id=product_data['shop_id'], product_name=product_data['product_name'], quantity=product_data['quantity'])

        db.session.add(new_product)
        db.session.commit()

        return 'Done', 201

    