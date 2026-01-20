import { test, expect } from '@playwright/test';
import { BASE_URL } from './helpers/api.helpers';

test.describe('Health Check', () => {
    test('should return healthy status', async ({ request }) => {
        const response = await request.get(`${BASE_URL}/health`);
        expect(response.status()).toBe(200);
    });
});
