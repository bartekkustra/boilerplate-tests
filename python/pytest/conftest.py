import pytest
import requests
from helpers.api_helpers import BASE_URL, login, create_authenticated_session


@pytest.fixture(scope="session")
def base_url() -> str:
    return BASE_URL


@pytest.fixture(scope="session")
def api_session() -> requests.Session:
    session = requests.Session()
    yield session
    session.close()


@pytest.fixture(scope="session")
def auth_token(base_url: str) -> str:
    """Get authentication token for API requests"""
    # TODO: Provide valid credentials
    return login(email="", password="", base_url=base_url)


@pytest.fixture(scope="session")
def authenticated_session(base_url: str) -> requests.Session:
    """Create an authenticated session for API requests"""
    # TODO: Provide valid credentials
    session = create_authenticated_session(email="", password="", base_url=base_url)
    yield session
    session.close()
