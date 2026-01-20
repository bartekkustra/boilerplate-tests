import { LoginOkResponse } from '../types/api.types';

export const BASE_URL = 'https://b6f505ca86c7.ngrok.app';

/**
 * Login and get authentication token
 */
export async function login(
    email: string = '',
    password: string = ''
): Promise<string> {
    const response = await fetch(`${BASE_URL}/api/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
    });

    if (!response.ok) {
        throw new Error(`Login failed with status ${response.status}`);
    }

    const data = await response.json() as LoginOkResponse;
    return data.token;
}

/**
 * Create authorization headers with Bearer token
 */
export function authHeaders(token: string): Record<string, string> {
    return {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
    };
}
