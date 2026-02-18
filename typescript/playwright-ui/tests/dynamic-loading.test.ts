import { test, expect } from '@playwright/test';
import { DynamicLoadingPage } from './pages/dynamic-loading.page';

// Task 2: Dynamic content + waits
// Go to /dynamic_loading/1. There's a hidden element revealed after clicking Start.
// Write a test that clicks Start, waits properly, and asserts the text is "Hello World!".
//
// Bonus: What's the difference between /dynamic_loading/1 and /dynamic_loading/2?

test.describe('Dynamic Loading', () => {
    test('hidden element is revealed after clicking Start', async ({ page }) => {
        const dynamicPage = new DynamicLoadingPage(page);
        await dynamicPage.goto(1);

        // TODO: Click Start
        // TODO: Assert the finish text is "Hello World!"
        // Think about: do you need explicit waits here? Why or why not?
    });

    test('element is rendered after clicking Start', async ({ page }) => {
        const dynamicPage = new DynamicLoadingPage(page);
        await dynamicPage.goto(2);

        // TODO: Click Start
        // TODO: Assert the finish text is "Hello World!"
        // Think about: how does this differ from example 1?
    });
});
