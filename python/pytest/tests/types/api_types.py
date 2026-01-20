"""
API types defined as dataclasses
These types match the OpenAPI spec from /api-docs.json
"""

from dataclasses import dataclass
from typing import List, Optional


@dataclass
class LoginRequest:
    email: str
    password: str


@dataclass
class UserInfo:
    id: str
    email: str
    created_at: str
    updated_at: str


@dataclass
class LoginResponse:
    token: str
    user: UserInfo


@dataclass
class GeneralErrorResponse:
    error: str


@dataclass
class ValidationError:
    type: str
    value: str
    msg: str
    path: str
    location: str


@dataclass
class ValidationErrorResponse:
    errors: List[ValidationError]


@dataclass
class CreateUserRequest:
    username: str
    email: str
    password: str


@dataclass
class User:
    id: int
    username: str
    email: str
    created_at: str
    updated_at: str


@dataclass
class UpdateUserRequest:
    username: Optional[str] = None
    email: Optional[str] = None
    password: Optional[str] = None


@dataclass
class UsersListResponse:
    users: List[User]
    total: int
    page: int
    limit: int


@dataclass
class HealthResponse:
    status: str
