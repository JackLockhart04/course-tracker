from flask import Blueprint, request, jsonify
import json

auth_bp = Blueprint('auth', __name__, url_prefix='/auth')

print("Auth blueprint loaded")

data_route = 'data/userData.json'

# Define a route for the login
@auth_bp.route('/login', methods=['POST'])
def login():    
    data = request.get_json()
    username = data.get('loginUsername')
    password = data.get('password')

    # Mock user data
    with open(data_route, 'r') as f:
        data = json.load(f)
        users = data['userData']
    
    if(username in users and users[username]['password'] == password):
        user = users[username]
        return jsonify({"message": "Login successful", "user": {"username": user["username"], "accountID": user["accountID"]}}), 200
    else:
        print("User not found")
        user = {"username": "Guest", "accountID": 0}
        return jsonify({"message": "Invalid credentials", "user": {"username": user["username"], "accountID": user["accountID"]}}), 401

    

