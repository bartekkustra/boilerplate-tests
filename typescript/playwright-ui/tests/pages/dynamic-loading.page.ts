import { type Page, type Locator } from '@playwright/test';

export class DynamicLoadingPage {
    // TODO: Define locators for dynamic loading page elements
    // Hints: #start button, #finish h4

    constructor(private page: Page) {
        // TODO: Initialize locators
    }

    async goto(example: 1 | 2) {
        await this.page.goto(`/dynamic_loading/${example}`);
    }

    async clickStart() {
        // TODO: Click the start button
    }
}
