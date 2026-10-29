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

interface UpdateAccountInput {
  currentPassword: string;
  newEmail?: string;
  newPassword?: string;
}

export const updateAccount = (data: UpdateAccountInput, token: string) => {
  return apiRequest<{ message: string }>('/auth/account', {
    method: 'PUT',
    body: data,
    token
  });
};