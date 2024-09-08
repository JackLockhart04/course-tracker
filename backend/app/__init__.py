from flask import Flask

def create_app():
    app = Flask(__name__)

    # Import and register the blueprint
    from .auth import auth_bp
    app.register_blueprint(auth_bp)
    
    from .courses import courses_bp
    app.register_blueprint(courses_bp)

    return app