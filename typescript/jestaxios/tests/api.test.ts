import axios from 'axios';
import { BASE_URL } from './helpers/api.helpers';

describe('Health Check', () => {
    it('should return healthy status', async () => {
        const response = await axios.get(`${BASE_URL}/health`);
        expect(response.status).toBe(200);
    });
});
