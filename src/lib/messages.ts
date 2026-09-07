import { apiRequest } from './api';

export interface Message {
  _id: string;
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
  status: 'new' | 'read' | 'responded';
  createdAt: string;
}

export const getAllMessages = (token: string) => {
  return apiRequest<Message[]>('/contact/admin', { token });
};