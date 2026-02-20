/**
 * Auto-generated types from OpenAPI spec
 * Regenerate with: npm run generate:types
 */

export interface LoginRequest {
    email: string;
    password: string;
}

export interface LoginOkResponse {
    token: string;
    user: {
        id: string;
        email: string;
        created_at: string;
        updated_at: string;
    };
}

export interface GeneralErrorResponse {
    error: string;
}

export interface ValidationErrorResponse {
    errors: Array<{
        type: string;
        value: string;
        msg: string;
        path: string;
        location: string;
    }>;
}

export interface CreateUserRequest {
    username: string;
    email: string;
    password: string;
}

export interface User {
    id: number;
    username: string;
    email: string;
    created_at: string;
    updated_at: string;
}

export interface UpdateUserRequest {
    username?: string;
    email?: string;
    password?: string;
}

export interface UsersListResponse {
    users: User[];
    total: number;
    page: number;
    limit: number;
}

export interface HealthResponse {
    status: string;
}
