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
    [Documentation]    TODO: Implement
    Skip    Not implemented

Should Get All Users
    [Documentation]    TODO: Implement
    Skip    Not implemented

Should Get A User By ID
    [Documentation]    TODO: Implement
    Skip    Not implemented

Should Update A User
    [Documentation]    TODO: Implement
    Skip    Not implemented

Should Delete A User
    [Documentation]    TODO: Implement
    Skip    Not implemented
