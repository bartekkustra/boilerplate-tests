import { DragDropPage } from '../support/pages/drag-drop.page';

// Task 3: Drag & drop + POM
// Go to /drag_and_drop. Write a test that drags column A to column B
// and verifies they swapped. Structure it using Page Object Model.
//
// Note: Cypress has no built-in drag & drop support like Playwright's dragTo().
// The candidate needs to find a solution — this is intentional.
// Options: cypress-real-events plugin, manual trigger() of drag events, or dataTransfer API.

describe('Drag and Drop', () => {
    it('drag column A to column B swaps them', () => {
        const ddPage = new DragDropPage();
        ddPage.goto();

        // TODO: Assert initial state (A is in column-a, B is in column-b)
        // TODO: Drag A to B
        // TODO: Assert columns have swapped
    });
});
