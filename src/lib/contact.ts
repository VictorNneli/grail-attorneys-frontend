import { apiRequest } from './api';

export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
}

export const submitContactForm = (data: ContactFormData) => {
  return apiRequest<{ message: string; id: string }>('/contact', {
    method: 'POST',
    body: data
  });
};