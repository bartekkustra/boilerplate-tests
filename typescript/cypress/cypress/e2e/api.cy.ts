describe('Health Check', () => {
    it('should return healthy status', () => {
        cy.request('/health').then((response) => {
            expect(response.status).to.eq(200);
        });
    });
});
