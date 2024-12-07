from flask import Flask

def create_app():
    app = Flask(__name__)

    from app.routes import base_route
    app.register_blueprint(base_route)
    
    from app.routes import courses
    app.register_blueprint(courses, url_prefix='/courses')

    return app