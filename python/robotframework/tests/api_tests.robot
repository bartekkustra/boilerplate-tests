*** Settings ***
Resource    ../resources/api_keywords.resource

Suite Setup    Create API Session

*** Test Cases ***
Health Check Should Return 200
    ${response}=    Health Check
    Status Should Be    200    ${response}
