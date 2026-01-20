const BASE_URL = 'http://localhost:3000';

describe('Health Check', () => {
  it('should return healthy status', async () => {
    const response = await fetch(`${BASE_URL}/health`);
    expect(response.status).toBe(200);
  });
});
