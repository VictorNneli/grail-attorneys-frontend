export interface PracticeArea {
  slug: string;
  title: string;
  description: string;
  image: string;
}

export interface TeamMember {
  name: string;
  title: string;
  bio: string;
  photo: string;
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