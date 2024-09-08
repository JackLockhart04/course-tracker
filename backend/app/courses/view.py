from flask import Blueprint, request, jsonify
import json

courses_bp = Blueprint('courses', __name__, url_prefix='/courses')

print("Courses blueprint loaded")

data_route = 'data/courseData.json'

# Define a route for the login
@courses_bp.route('/get', methods=['GET'])
def get_course_data():
    username = request.args.get('username')
    if not username:
        return jsonify({"error": "username is required"}), 400

    with open(data_route, 'r') as f:
        data = json.load(f)
        courses = data.get(username, [])
        return jsonify(courses), 200