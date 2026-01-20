import { BASE_URL, login, authHeaders } from './helpers/api.helpers';
import { CreateUserRequest, User } from './types/api.types';

describe('Basic CRUD Operations', () => {
    let authToken: string;

    beforeAll(async () => {
        // TODO: Provide valid credentials
        authToken = await login('', '');
        expect(authToken).toBeDefined();
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
