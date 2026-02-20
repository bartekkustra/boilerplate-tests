import { LoginOkResponse } from './api.types';

const BASE_URL = Cypress.config('baseUrl') || 'http://localhost:3000';

declare global {
    namespace Cypress {
        interface Chainable {
            /**
             * Login and get authentication token
             */
            apiLogin(email: string, password: string): Chainable<string>;
        }
    }
}

Cypress.Commands.add('apiLogin', (email: string, password: string) => {
    return cy.request({
        method: 'POST',
        url: `${BASE_URL}/api/login`,
        body: { email, password },
    }).then((response) => {
        const data = response.body as LoginOkResponse;
        return data.token;
    });
});
