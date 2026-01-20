import { test, expect, APIRequestContext } from '@playwright/test';
import { BASE_URL, login, authHeaders } from './helpers/api.helpers';
import { CreateUserRequest, User } from './types/api.types';

test.describe('Basic CRUD Operations', () => {
    let authToken: string;

    test.beforeAll(async ({ request }) => {
        // TODO: Provide valid credentials
        authToken = await login(request, '', '');
        expect(authToken).toBeDefined();
    });

    // TODO: Implement CRUD tests
    // Available endpoints:
    // - GET    /api/users      - List all users
    // - POST   /api/users      - Create a new user
    // - GET    /api/users/:id  - Get user by ID
    // - PUT    /api/users/:id  - Update user by ID
    // - DELETE /api/users/:id  - Delete user by ID

    test('should create a new user', async ({ request }) => {
        // TODO: Implement
    });

    test('should get all users', async ({ request }) => {
        // TODO: Implement
    });

    test('should get a user by ID', async ({ request }) => {
        // TODO: Implement
    });

    test('should update a user', async ({ request }) => {
        // TODO: Implement
    });

    test('should delete a user', async ({ request }) => {
        // TODO: Implement
    });
});
