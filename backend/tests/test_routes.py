import unittest
from app import create_app

class TestBaseRoutes(unittest.TestCase):
    def setUp(self):
        self.app = create_app()
        self.client = self.app.test_client()
        self.app.testing = True

    def test_base_route(self):
        response = self.client.get('/')
        self.assertEqual(response.status_code, 200)
        self.assertIn(b'Hello World!', response.data)

    def test_courses_base_route(self):
        response = self.client.get('/courses/')
        self.assertEqual(response.status_code, 200)
        self.assertIn(b'courses base route', response.data)

if __name__ == '__main__':
    unittest.main()