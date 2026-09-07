import { apiRequest } from './api';

interface LoginResponse {
  token: string;
  user: { id: string; email: string; role: string };
}

export const login = (email: string, password: string) => {
  return apiRequest<LoginResponse>('/auth/login', {
    method: 'POST',
    body: { email, password }
  });
};