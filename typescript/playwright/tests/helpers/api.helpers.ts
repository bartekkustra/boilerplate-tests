import { APIRequestContext } from '@playwright/test';
import { LoginOkResponse } from '../types/api.types';

export const BASE_URL = 'http://localhost:3000';

/**
 * Login and get authentication token
 */
export async function login(
    request: APIRequestContext,
    email: string = '',
    password: string = ''
): Promise<string> {
    const response = await request.post(`${BASE_URL}/api/login`, {
        data: { email, password }
    });

    if (!response.ok()) {
        throw new Error(`Login failed with status ${response.status()}`);
    }

    const data = await response.json() as LoginOkResponse;
    return data.token;
}

/**
 * Create authorization headers with Bearer token
 */
export function authHeaders(token: string): Record<string, string> {
    return {
        'Authorization': `Bearer ${token}`
    };
}
