import { type Page, type Locator } from '@playwright/test';

export class LoginPage {
    // TODO: Define locators for login page elements
    // Hints: #username, #password, button[type="submit"], #flash, a[href="/logout"]

    constructor(private page: Page) {
        // TODO: Initialize locators
    }

    async goto() {
        await this.page.goto('/login');
    }

    async login(username: string, password: string) {
        // TODO: Fill username, password and click submit
    }

    async logout() {
        // TODO: Click logout button
    }
}
