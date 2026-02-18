import { test, expect } from '@playwright/test';
import { DragDropPage } from './pages/drag-drop.page';

// Task 3: Drag & drop + POM
// Go to /drag_and_drop. Write a test that drags column A to column B
// and verifies they swapped. Structure it using Page Object Model.

test.describe('Drag and Drop', () => {
    test('drag column A to column B swaps them', async ({ page }) => {
        const ddPage = new DragDropPage(page);
        await ddPage.goto();

        // TODO: Assert initial state (A is in column-a, B is in column-b)
        // TODO: Drag A to B
        // TODO: Assert columns have swapped
    });
});
