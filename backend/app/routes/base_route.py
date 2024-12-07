from flask import Blueprint, jsonify

base_route = Blueprint('base_route', __name__)

@base_route.route('/')
def hello_world():
    return jsonify(message="Hello World!")

