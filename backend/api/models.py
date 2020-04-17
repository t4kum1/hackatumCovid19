from . import db 
from sqlalchemy.orm import relationship
from sqlalchemy import Table, Column, Integer, ForeignKey

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    user_name = db.Column(db.String(50))
    address = db.Column(db.String(50))

class Shop(db.Model):
	id = db.Column(db.Integer, primary_key=True)
	shop_name = db.Column(db.String(50))
	address = db.Column(db.String(50))
	sells = db.Column(db.String(50))

class Product(db.Model):
	id = db.Column(db.Integer, primary_key=True)
	shop_id = db.Column(db.Integer, ForeignKey('shop.id'))
	product_name = db.Column(db.String(50))
	quantity = db.Column(db.Integer)

class Request(db.Model):
	id = db.Column(db.Integer, primary_key=True)
	shop_id = db.Column(db.Integer, ForeignKey('shop.id'))
	user_id = db.Column(db.Integer, ForeignKey('user.id'))
	product_id = db.Column(db.Integer, ForeignKey('product.id'))
	quantity = db.Column(db.Integer)
	