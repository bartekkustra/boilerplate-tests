import requests

def test_health_check(api_session: requests.Session, base_url: str):
    response = api_session.get(f"{base_url}/health")
    assert response.status_code == 200
