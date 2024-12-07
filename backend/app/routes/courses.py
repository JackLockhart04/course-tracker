import json
from flask import Blueprint, jsonify

from app.models import Course_db

courses = Blueprint('courses', __name__)

@courses.route('/')
def base():
    return jsonify(message = "courses base route")

@courses.route('/<int:id>')
def course(id):
    course = Course_db.get_course(id)
    
    if course:
        return jsonify(course)
    else:
        return jsonify(message="Course not found"), 404

@courses.route('/all')
def all_courses():
    courses = Course_db.get_all_courses()
 
    return jsonify(courses)