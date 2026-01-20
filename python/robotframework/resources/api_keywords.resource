*** Settings ***
Library    RequestsLibrary
Library    Collections
Resource   variables.resource

*** Keywords ***
Create API Session
    [Documentation]    Create a session to the API
    Create Session    api    ${BASE_URL}

Login And Get Token
    [Documentation]    Login with credentials and return the auth token
    [Arguments]    ${email}=${ADMIN_EMAIL}    ${password}=${ADMIN_PASSWORD}
    ${body}=    Create Dictionary    email=${email}    password=${password}
    ${response}=    POST On Session    api    /api/login    json=${body}
    Should Be Equal As Integers    ${response.status_code}    200
    ${token}=    Set Variable    ${response.json()}[token]
    RETURN    ${token}

Create Authenticated Session
    [Documentation]    Create a session with authentication headers
    [Arguments]    ${email}=${ADMIN_EMAIL}    ${password}=${ADMIN_PASSWORD}
    Create API Session
    ${token}=    Login And Get Token    ${email}    ${password}
    ${headers}=    Create Dictionary    Authorization=Bearer ${token}    Content-Type=application/json
    Create Session    auth_api    ${BASE_URL}    headers=${headers}

Health Check
    [Documentation]    Check the health endpoint
    ${response}=    GET On Session    api    /health
    RETURN    ${response}

Create User
    [Documentation]    Create a new user
    [Arguments]    ${username}    ${email}    ${password}
    ${body}=    Create Dictionary    username=${username}    email=${email}    password=${password}
    ${response}=    POST On Session    auth_api    /api/users    json=${body}
    RETURN    ${response}

Get User
    [Documentation]    Get a user by ID
    [Arguments]    ${user_id}
    ${response}=    GET On Session    auth_api    /api/users/${user_id}
    RETURN    ${response}

Update User
    [Documentation]    Update a user by ID
    [Arguments]    ${user_id}    ${data}
    ${response}=    PUT On Session    auth_api    /api/users/${user_id}    json=${data}
    RETURN    ${response}

Delete User
    [Documentation]    Delete a user by ID
    [Arguments]    ${user_id}
    ${response}=    DELETE On Session    auth_api    /api/users/${user_id}
    RETURN    ${response}

Get All Users
    [Documentation]    Get all users
    ${response}=    GET On Session    auth_api    /api/users
    RETURN    ${response}
