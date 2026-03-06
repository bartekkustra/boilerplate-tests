package com.boilerplate.tests;

import com.boilerplate.tests.helpers.ApiHelpers;
import io.restassured.specification.RequestSpecification;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.Disabled;
import org.junit.jupiter.api.Test;

/**
 * Basic CRUD Operations Tests
 *
 * <p>TODO: Implement CRUD tests
 * <p>Available endpoints:
 * <ul>
 *   <li>GET    /api/users      - List all users</li>
 *   <li>POST   /api/users      - Create a new user</li>
 *   <li>GET    /api/users/:id  - Get user by ID</li>
 *   <li>PUT    /api/users/:id  - Update user by ID</li>
 *   <li>DELETE /api/users/:id  - Delete user by ID</li>
 * </ul>
 */
class BasicCrudTest {

    private static RequestSpecification requestSpec;

    @BeforeAll
    static void setUp() {
        requestSpec = ApiHelpers.createAuthenticatedRequest("", "");
    }

    @Test
    @Disabled("TODO: Implement")
    void createUser() {
    }

    @Test
    @Disabled("TODO: Implement")
    void getAllUsers() {
    }

    @Test
    @Disabled("TODO: Implement")
    void getUserById() {
    }

    @Test
    @Disabled("TODO: Implement")
    void updateUser() {
    }

    @Test
    @Disabled("TODO: Implement")
    void deleteUser() {
    }
}
