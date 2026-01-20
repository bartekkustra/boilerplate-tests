import axios, { AxiosInstance } from 'axios';
import { LoginOkResponse } from '../types/api.types';

export const BASE_URL = 'https://b6f505ca86c7.ngrok.app';

/**
 * Create an axios instance with base URL
 */
export function createApiClient(): AxiosInstance {
    return axios.create({
        baseURL: BASE_URL,
        headers: { 'Content-Type': 'application/json' }
    });
}

/**
 * Login and get authentication token
 */
export async function login(
    email: string = '',
    password: string = ''
): Promise<string> {
    const response = await axios.post<LoginOkResponse>(
        `${BASE_URL}/api/login`,
        { email, password }
    );

    return response.data.token;
}

/**
 * Create an authenticated axios instance
 */
export async function createAuthenticatedClient(
    email: string = '',
    password: string = ''
): Promise<AxiosInstance> {
    const token = await login(email, password);
    return axios.create({
        baseURL: BASE_URL,
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    });
}
