
export interface Game {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  categoryIds: string[];
  featured: boolean;
  new: boolean;
  popular: boolean;
  provider: string;
  rtp?: number;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  description?: string;
  featured?: boolean;
}

export interface Promotion {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  ctaText: string;
  ctaLink: string;
  endDate?: string;
}

export interface User {
  id: string;
  username: string;
  email: string;
  role: 'user' | 'admin';
}
