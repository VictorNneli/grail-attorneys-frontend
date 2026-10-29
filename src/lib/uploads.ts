import { BASE_URL } from './api';

export const uploadImage = async (file: File, token: string): Promise<string> => {
  const formData = new FormData();
  formData.append('image', file);

  const response = await fetch(`${BASE_URL}/uploads/admin`, {
    method: 'POST',
    headers: { Authorization: `Bearer ${token}` },
    body: formData
  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    throw new Error(errorData.message || 'Image upload failed');
  }

  const data = (await response.json()) as { url: string };
  return data.url;
};