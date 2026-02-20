export class LoginPage {
    // TODO: Define selectors for login page elements
    // Hints: #username, #password, button[type="submit"], #flash, a[href="/logout"]

    goto() {
        cy.visit('/login');
    }

    login(username: string, password: string) {
        // TODO: Type username, password and click submit
    }

    logout() {
        // TODO: Click logout link
    }

    getFlashMessage() {
        // TODO: Return the flash message element
        return cy.get('#flash');
    }
}
