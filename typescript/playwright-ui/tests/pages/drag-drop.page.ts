import { type Page, type Locator } from '@playwright/test';

export class DragDropPage {
    // TODO: Define locators for column A and column B
    // Hints: #column-a, #column-b

    constructor(private page: Page) {
        // TODO: Initialize locators
    }

    async goto() {
        await this.page.goto('/drag_and_drop');
    }

    async dragAtoB() {
        // TODO: Drag column A to column B
    }
}
