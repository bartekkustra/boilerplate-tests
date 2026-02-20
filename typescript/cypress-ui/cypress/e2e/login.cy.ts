import { LoginPage } from '../support/pages/login.page';

// Task 1: Login + Assertions
// Go to /login. Write a test that logs in with tomsmith / SuperSecretPassword!,
// verifies the success flash message, then logs out and verifies you're back on login.

describe('Login Page', () => {
    it('login and logout flow', () => {
        const loginPage = new LoginPage();
        loginPage.goto();

        // TODO: Log in with valid credentials
        // TODO: Assert success flash message contains "You logged into a secure area"
        // TODO: Log out
        // TODO: Assert URL is back to /login
    });
});
