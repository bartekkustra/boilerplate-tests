import { AxiosInstance } from 'axios';
import { createAuthenticatedClient } from './helpers/api.helpers';
import { CreateUserRequest, User } from './types/api.types';

describe('Basic CRUD Operations', () => {
    let api: AxiosInstance;

    beforeAll(async () => {
        // TODO: Provide valid credentials
        api = await createAuthenticatedClient('', '');
    });

    // TODO: Implement CRUD tests
    // Available endpoints:
    // - GET    /api/users      - List all users
    // - POST   /api/users      - Create a new user
    // - GET    /api/users/:id  - Get user by ID
    // - PUT    /api/users/:id  - Update user by ID
    // - DELETE /api/users/:id  - Delete user by ID

    it('should create a new user', async () => {
        // TODO: Implement
    });

    it('should get all users', async () => {
        // TODO: Implement
    });

    it('should get a user by ID', async () => {
        // TODO: Implement
    });

    it('should update a user', async () => {
        // TODO: Implement
    });

    it('should delete a user', async () => {
        // TODO: Implement
    });
});
