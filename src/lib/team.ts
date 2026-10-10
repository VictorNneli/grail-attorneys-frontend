import { apiRequest } from './api';
import type { TeamMember } from '../types';

export const getTeamMembers = () => {
  return apiRequest<TeamMember[]>('/team');
};

interface TeamMemberInput {
  name: string;
  title: string;
  bio?: string;
  photo?: string;
  order?: number;
}

export const createTeamMember = (data: TeamMemberInput, token: string) => {
  return apiRequest<TeamMember>('/team/admin', {
    method: 'POST',
    body: data,
    token
  });
};

export const updateTeamMember = (id: string, data: Partial<TeamMemberInput>, token: string) => {
  return apiRequest<TeamMember>(`/team/admin/${id}`, {
    method: 'PUT',
    body: data,
    token
  });
};

export const deleteTeamMember = (id: string, token: string) => {
  return apiRequest<{ message: string }>(`/team/admin/${id}`, {
    method: 'DELETE',
    token
  });
};