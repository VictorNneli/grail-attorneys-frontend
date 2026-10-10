import type { LucideIcon } from 'lucide-react';

export type DetailBlock = string | { intro?: string; items: string[] };

export interface PracticeArea {
  slug: string;
  title: string;
  description: string;
  details?: DetailBlock[];
  image: string;
  icon: LucideIcon;
}

export interface TeamMember {
  _id: string;
  name: string;
  title: string;
  bio?: string;
  photo?: string;
  order: number;
  createdAt: string;
}

export interface Post {
  _id: string;
  title: string;
  slug: string;
  coverImage?: string;
  body: string;
  status: 'draft' | 'published';
  createdAt: string;
}