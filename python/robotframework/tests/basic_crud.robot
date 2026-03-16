*** Settings ***
Resource    ../resources/api_keywords.resource

Suite Setup    Create Authenticated Session

*** Comments ***
TODO: Implement CRUD tests
Available endpoints:
- GET    /api/users      - List all users
- POST   /api/users      - Create a new user
- GET    /api/users/:id  - Get user by ID
- PUT    /api/users/:id  - Update user by ID
- DELETE /api/users/:id  - Delete user by ID

*** Test Cases ***
Should Create A New User
    ${response}=    Create User    testuser    testuser@example.com    password123
    Status Should Be    201    ${response}
    Set Suite Variable    ${CREATED_USER_ID}    ${response.json()}[id]

Should Get All Users
    ${response}=    Get All Users
    Status Should Be    200    ${response}

Should Get A User By ID
    ${response}=    Get User    ${CREATED_USER_ID}
    Status Should Be    200    ${response}
    Should Be Equal    ${response.json()}[username]    testuser

Should Update A User
    ${data}=    Create Dictionary    username=updateduser
    ${response}=    Update User    ${CREATED_USER_ID}    ${data}
    Status Should Be    200    ${response}

Should Delete A User
    ${response}=    Delete User    ${CREATED_USER_ID}
    Status Should Be    200    ${response}
