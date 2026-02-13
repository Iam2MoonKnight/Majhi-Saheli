import { supabase } from './supabase';
import { Donation, User } from './types';

// Helper to check if Supabase is properly configured
const isSupabaseConfigured = () => {
  return process.env.NEXT_PUBLIC_SUPABASE_URL && process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
};

// Authentication functions
export const signUp = async (email: string, password: string, name: string) => {
  if (!isSupabaseConfigured()) {
    throw new Error('Supabase is not configured');
  }

  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        name,
      },
    },
  });

  if (error) throw error;
  return data;
};

export const signIn = async (email: string, password: string) => {
  if (!isSupabaseConfigured()) {
    throw new Error('Supabase is not configured');
  }

  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) throw error;
  return data;
};

export const signOut = async () => {
  const { error } = await supabase.auth.signOut();
  if (error) throw error;
};

export const getCurrentUser = async () => {
  const { data, error } = await supabase.auth.getUser();
  if (error) throw error;
  return data.user;
};

export const getSession = async () => {
  const { data, error } = await supabase.auth.getSession();
  if (error) throw error;
  return data.session;
};

// Donation functions
export const submitDonation = async (donation: Omit<Donation, 'id' | 'created_at'>) => {
  if (!isSupabaseConfigured()) {
    throw new Error('Supabase is not configured');
  }

  const { data, error } = await supabase
    .from('donations')
    .insert([donation])
    .select()
    .single();

  if (error) throw error;
  return data;
};

export const getUserDonations = async (userId: string) => {
  if (!isSupabaseConfigured()) {
    return [];
  }

  try {
    const { data, error } = await supabase
      .from('donations')
      .select('*')
      .eq('user_id', userId)
      .order('created_at', { ascending: false });

    if (error) throw error;
    return data || [];
  } catch (err) {
    console.error('Error fetching user donations:', err);
    return [];
  }
};

export const getAllDonations = async () => {
  if (!isSupabaseConfigured()) {
    return [];
  }

  try {
    const { data, error } = await supabase
      .from('donations')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) throw error;
    return data || [];
  } catch (err) {
    console.error('Error fetching all donations:', err);
    return [];
  }
};

export const getDonationStats = async () => {
  if (!isSupabaseConfigured()) {
    return {
      totalDonations: 0,
      totalAmount: 0,
      recurringCount: 0,
      oneTimeCount: 0,
    };
  }

  try {
    const { data, error } = await supabase
      .from('donations')
      .select('amount, currency, frequency');

    if (error) throw error;

    const stats = {
      totalDonations: data?.length || 0,
      totalAmount: data?.reduce((sum, d) => sum + (d.amount || 0), 0) || 0,
      recurringCount: data?.filter(d => d.frequency === 'recurring').length || 0,
      oneTimeCount: data?.filter(d => d.frequency === 'one_time').length || 0,
    };

    return stats;
  } catch (err) {
    console.error('Error fetching donation stats:', err);
    return {
      totalDonations: 0,
      totalAmount: 0,
      recurringCount: 0,
      oneTimeCount: 0,
    };
  }
};

// Program functions
export const getPrograms = async () => {
  if (!isSupabaseConfigured()) {
    return [];
  }

  try {
    const { data, error } = await supabase
      .from('programs')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) throw error;
    return data || [];
  } catch (err) {
    // Silently return empty array - this is expected if tables aren't created yet
    return [];
  }
};

export const getProgramsByCategory = async (category: string) => {
  if (!isSupabaseConfigured()) {
    return [];
  }

  try {
    const { data, error } = await supabase
      .from('programs')
      .select('*')
      .eq('category', category);

    if (error) throw error;
    return data || [];
  } catch (err) {
    // Silently return empty array - this is expected if tables aren't created yet
    return [];
  }
};

// User profile functions
export const getUserProfile = async (userId: string) => {
  if (!isSupabaseConfigured()) {
    return null;
  }

  try {
    const { data, error } = await supabase
      .from('users')
      .select('*')
      .eq('id', userId)
      .single();

    if (error && error.code !== 'PGRST116') throw error;
    return data || null;
  } catch (err) {
    console.error('Error fetching user profile:', err);
    return null;
  }
};

export const createUserProfile = async (user: Omit<User, 'created_at'>) => {
  if (!isSupabaseConfigured()) {
    throw new Error('Supabase is not configured');
  }

  const { data, error } = await supabase
    .from('users')
    .insert([user])
    .select()
    .single();

  if (error) throw error;
  return data;
};

// Saheli posts
export const getSaheliPosts = async () => {
  if (!isSupabaseConfigured()) {
    return [];
  }

  try {
    const { data, error } = await supabase
      .from('saheli_posts')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) throw error;
    return data || [];
  } catch (err) {
    console.error('Error fetching saheli posts:', err);
    return [];
  }
};

export const getSaheliPostsByCategory = async (category: string) => {
  if (!isSupabaseConfigured()) {
    return [];
  }

  try {
    const { data, error } = await supabase
      .from('saheli_posts')
      .select('*')
      .eq('category', category)
      .order('created_at', { ascending: false });

    if (error) throw error;
    return data || [];
  } catch (err) {
    console.error('Error fetching saheli posts by category:', err);
    return [];
  }
};

// Blog functions
export const getBlogs = async (includeUnpublished = false) => {
  if (!isSupabaseConfigured()) {
    return [];
  }

  try {
    let query = supabase.from('blogs').select('*').order('created_at', { ascending: false });
    
    if (!includeUnpublished) {
      query = query.eq('status', 'published');
    }

    const { data, error } = await query;
    if (error) throw error;
    return data || [];
  } catch (err) {
    console.error('Error fetching blogs:', err);
    return [];
  }
};

export const getBlogBySlug = async (slug: string) => {
  if (!isSupabaseConfigured()) {
    return null;
  }

  try {
    const { data, error } = await supabase
      .from('blogs')
      .select('*')
      .eq('slug', slug)
      .single();

    if (error && error.code !== 'PGRST116') throw error;
    return data || null;
  } catch (err) {
    console.error('Error fetching blog:', err);
    return null;
  }
};

export const createBlog = async (blog: any) => {
  if (!isSupabaseConfigured()) {
    throw new Error('Supabase is not configured');
  }

  const { data, error } = await supabase
    .from('blogs')
    .insert([blog])
    .select()
    .single();

  if (error) throw error;
  return data;
};

export const updateBlog = async (id: string, updates: any) => {
  if (!isSupabaseConfigured()) {
    throw new Error('Supabase is not configured');
  }

  const { data, error } = await supabase
    .from('blogs')
    .update({ ...updates, updated_at: new Date().toISOString() })
    .eq('id', id)
    .select()
    .single();

  if (error) throw error;
  return data;
};

export const deleteBlog = async (id: string) => {
  if (!isSupabaseConfigured()) {
    throw new Error('Supabase is not configured');
  }

  const { error } = await supabase
    .from('blogs')
    .delete()
    .eq('id', id);

  if (error) throw error;
};

// Campaign functions
export const getCampaigns = async (includeInactive = false) => {
  if (!isSupabaseConfigured()) {
    return [];
  }

  try {
    let query = supabase.from('campaigns').select('*').order('created_at', { ascending: false });
    
    if (!includeInactive) {
      query = query.eq('status', 'active');
    }

    const { data, error } = await query;
    if (error) throw error;
    return data || [];
  } catch (err) {
    console.error('Error fetching campaigns:', err);
    return [];
  }
};

export const getCampaignBySlug = async (slug: string) => {
  if (!isSupabaseConfigured()) {
    return null;
  }

  try {
    const { data, error } = await supabase
      .from('campaigns')
      .select('*')
      .eq('slug', slug)
      .single();

    if (error && error.code !== 'PGRST116') throw error;
    return data || null;
  } catch (err) {
    console.error('Error fetching campaign:', err);
    return null;
  }
};

export const createCampaign = async (campaign: any) => {
  if (!isSupabaseConfigured()) {
    throw new Error('Supabase is not configured');
  }

  const { data, error } = await supabase
    .from('campaigns')
    .insert([campaign])
    .select()
    .single();

  if (error) throw error;
  return data;
};

export const updateCampaign = async (id: string, updates: any) => {
  if (!isSupabaseConfigured()) {
    throw new Error('Supabase is not configured');
  }

  const { data, error } = await supabase
    .from('campaigns')
    .update({ ...updates, updated_at: new Date().toISOString() })
    .eq('id', id)
    .select()
    .single();

  if (error) throw error;
  return data;
};

export const deleteCampaign = async (id: string) => {
  if (!isSupabaseConfigured()) {
    throw new Error('Supabase is not configured');
  }

  const { error } = await supabase
    .from('campaigns')
    .delete()
    .eq('id', id);

  if (error) throw error;
};

// Hero Content functions
export const getActiveHeroContent = async () => {
  if (!isSupabaseConfigured()) {
    return null;
  }

  try {
    const { data, error } = await supabase
      .from('hero_content')
      .select('*')
      .eq('is_active', true)
      .order('created_at', { ascending: false })
      .limit(1)
      .single();

    if (error && error.code !== 'PGRST116') throw error;
    return data || null;
  } catch (err) {
    console.error('Error fetching active hero content:', err);
    return null;
  }
};

export const getAllHeroContent = async () => {
  if (!isSupabaseConfigured()) {
    return [];
  }

  try {
    const { data, error } = await supabase
      .from('hero_content')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) throw error;
    return data || [];
  } catch (err) {
    console.error('Error fetching hero content:', err);
    return [];
  }
};

export const createHeroContent = async (content: any) => {
  if (!isSupabaseConfigured()) {
    throw new Error('Supabase is not configured');
  }

  const { data, error } = await supabase
    .from('hero_content')
    .insert([content])
    .select()
    .single();

  if (error) throw error;
  return data;
};

export const updateHeroContent = async (id: string, updates: any) => {
  if (!isSupabaseConfigured()) {
    throw new Error('Supabase is not configured');
  }

  const { data, error } = await supabase
    .from('hero_content')
    .update({ ...updates, updated_at: new Date().toISOString() })
    .eq('id', id)
    .select()
    .single();

  if (error) throw error;
  return data;
};

export const setActiveHeroContent = async (id: string) => {
  if (!isSupabaseConfigured()) {
    throw new Error('Supabase is not configured');
  }

  // First, deactivate all hero content
  await supabase
    .from('hero_content')
    .update({ is_active: false })
    .neq('id', '00000000-0000-0000-0000-000000000000');

  // Then activate the selected one
  const { data, error } = await supabase
    .from('hero_content')
    .update({ is_active: true, updated_at: new Date().toISOString() })
    .eq('id', id)
    .select()
    .single();

  if (error) throw error;
  return data;
};

export const deleteHeroContent = async (id: string) => {
  if (!isSupabaseConfigured()) {
    throw new Error('Supabase is not configured');
  }

  const { error } = await supabase
    .from('hero_content')
    .delete()
    .eq('id', id);

  if (error) throw error;
};
