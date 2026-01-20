"""
Basic CRUD Operations Tests

TODO: Implement CRUD tests
Available endpoints:
- GET    /api/users      - List all users
- POST   /api/users      - Create a new user
- GET    /api/users/:id  - Get user by ID
- PUT    /api/users/:id  - Update user by ID
- DELETE /api/users/:id  - Delete user by ID
"""

import requests


def test_create_user(authenticated_session: requests.Session, base_url: str):
    """Should create a new user"""
    # TODO: Implement
    pass


def test_get_all_users(authenticated_session: requests.Session, base_url: str):
    """Should get all users"""
    # TODO: Implement
    pass


def test_get_user_by_id(authenticated_session: requests.Session, base_url: str):
    """Should get a user by ID"""
    # TODO: Implement
    pass


def test_update_user(authenticated_session: requests.Session, base_url: str):
    """Should update a user"""
    # TODO: Implement
    pass


def test_delete_user(authenticated_session: requests.Session, base_url: str):
    """Should delete a user"""
    # TODO: Implement
    pass
