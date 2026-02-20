export class DynamicLoadingPage {
    // TODO: Define selectors for dynamic loading page elements
    // Hints: #start button, #finish h4

    goto(example: 1 | 2) {
        cy.visit(`/dynamic_loading/${example}`);
    }

    clickStart() {
        // TODO: Click the start button
    }

    getFinishText() {
        // TODO: Return the finish text element
        // Think about: how to handle waiting for the element to appear?
        return cy.get('#finish h4');
    }
}
