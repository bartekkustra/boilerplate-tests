"""
API helper functions for authentication and common operations
"""

import requests

BASE_URL = "https://b6f505ca86c7.ngrok.app"


def login(
    email: str = "",
    password: str = "",
    base_url: str = BASE_URL
) -> str:
    """
    Login and get authentication token

    Args:
        email: User email
        password: User password
        base_url: API base URL

    Returns:
        Authentication token string
    """
    response = requests.post(
        f"{base_url}/api/login",
        json={"email": email, "password": password}
    )
    response.raise_for_status()
    return response.json()["token"]


def create_authenticated_session(
    email: str = "",
    password: str = "",
    base_url: str = BASE_URL
) -> requests.Session:
    """
    Create a requests session with authentication headers

    Args:
        email: User email
        password: User password
        base_url: API base URL

    Returns:
        Authenticated requests.Session
    """
    token = login(email, password, base_url)
    session = requests.Session()
    session.headers.update({
        "Authorization": f"Bearer {token}",
        "Content-Type": "application/json"
    })
    return session
