*** Settings ***
Library    RequestsLibrary

*** Variables ***
${BASE_URL}    http://localhost:3000

*** Keywords ***
Create API Session
    Create Session    api    ${BASE_URL}

Health Check
    ${response}=    GET On Session    api    /health
    RETURN    ${response}
