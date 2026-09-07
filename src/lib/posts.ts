import { apiRequest } from './api';
import type { Post } from '../types';

export const getPublishedPosts = () => {
  return apiRequest<Post[]>('/posts');
};

export const getPublishedPostBySlug = (slug: string) => {
  return apiRequest<Post>(`/posts/${slug}`);
};

export const getAllPostsAdmin = (token: string) => {
  return apiRequest<Post[]>('/posts/admin/all', { token });
};

export const deletePost = (id: string, token: string) => {
  return apiRequest<{ message: string }>(`/posts/admin/${id}`, {
    method: 'DELETE',
    token
  });
};

interface PostInput {
  title: string;
  body: string;
  coverImage?: string;
  status: 'draft' | 'published';
}

export const getPostByIdAdmin = (id: string, token: string) => {
  return apiRequest<Post>(`/posts/admin/all`, { token }).then((posts) =>
    (posts as unknown as Post[]).find((p) => p._id === id) as Post
  );
};

export const createPost = (data: PostInput, token: string) => {
  return apiRequest<Post>('/posts/admin', {
    method: 'POST',
    body: data,
    token
  });
};

export const updatePost = (id: string, data: Partial<PostInput>, token: string) => {
  return apiRequest<Post>(`/posts/admin/${id}`, {
    method: 'PUT',
    body: data,
    token
  });
};