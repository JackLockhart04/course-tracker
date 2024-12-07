import json
from flask import jsonify
def init_db():
    print("Creating tables")

class Course_db:
    def __init__(self):
        print("DB created")
        
    @staticmethod
    def get_course(id):
        with open('courses.json') as f:
            data = json.load(f)
            course = data.get(str(id).zfill(5), None)
            if course:
                return course
            else:
                return None
        return jsonify(error="Serverside error"), 500
    
    @staticmethod        
    def get_all_courses():
        with open('courses.json') as f:
            data = json.load(f)
            return data
        return jsonify(error="Serverside error"), 500