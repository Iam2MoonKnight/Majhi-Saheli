export interface Donation {
  id: string;
  user_id: string | null;
  name: string;
  email: string;
  amount: number;
  currency: string;
  frequency: 'one_time' | 'recurring';
  message?: string;
  created_at: string;
}

export interface User {
  id: string;
  full_name: string;
  email: string;
  role: 'donor' | 'admin';
  created_at: string;
}

export interface Program {
  id: string;
  title: string;
  category: 'education' | 'health' | 'training' | 'other';
  description: string;
  created_at: string;
}

export interface SaheliPost {
  id: string;
  title: string;
  content: string;
  category: 'event' | 'story' | 'resource';
  created_at: string;
}

export interface Blog {
  id: string;
  title: string;
  slug: string;
  excerpt?: string;
  content: string;
  featured_image?: string;
  author_id?: string;
  status: 'draft' | 'published';
  published_at?: string;
  created_at: string;
  updated_at: string;
}

export interface Campaign {
  id: string;
  title: string;
  slug: string;
  description: string;
  goal_amount: number;
  raised_amount: number;
  currency: string;
  featured_image?: string;
  status: 'active' | 'completed' | 'paused';
  start_date: string;
  end_date?: string;
  created_by?: string;
  created_at: string;
  updated_at: string;
}

export interface HeroContent {
  id: string;
  title: string;
  subtitle: string;
  description?: string;
  cta_text: string;
  cta_link: string;
  image_url?: string;
  is_active: boolean;
  created_by?: string;
  created_at: string;
  updated_at: string;
}
