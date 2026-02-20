export class DragDropPage {
    // TODO: Define selectors for column A and column B
    // Hints: #column-a, #column-b

    goto() {
        cy.visit('/drag_and_drop');
    }

    getColumnA() {
        // TODO: Return column A element
        return cy.get('#column-a');
    }

    getColumnB() {
        // TODO: Return column B element
        return cy.get('#column-b');
    }

    dragAtoB() {
        // TODO: Drag column A to column B
        // Note: Cypress doesn't have a built-in drag & drop.
        // Consider using cypress-real-events plugin or triggering drag events manually.
        // This is intentionally left for the candidate to solve.
    }
}
