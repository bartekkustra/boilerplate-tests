import pytest
import requests

BASE_URL = "http://localhost:3000"

@pytest.fixture(scope="session")
def base_url() -> str:
    return BASE_URL

@pytest.fixture(scope="session")
def api_session() -> requests.Session:
    session = requests.Session()
    yield session
    session.close()
