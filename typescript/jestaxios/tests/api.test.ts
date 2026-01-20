import axios from 'axios';

const BASE_URL = 'http://localhost:3000';

describe('Health Check', () => {
  it('should return healthy status', async () => {
    const response = await axios.get(`${BASE_URL}/health`);
    expect(response.status).toBe(200);
  });
});
