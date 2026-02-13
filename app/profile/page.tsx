'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { supabase } from '@/lib/supabase';
import { createUserProfile, getUserProfile } from '@/lib/supabase-functions';
import { User } from '@/lib/types';

export default function ProfilePage() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [profile, setProfile] = useState<User | null>(null);
  const [email, setEmail] = useState<string | null>(null);

  useEffect(() => {
    const loadProfile = async () => {
      const { data: { session } } = await supabase.auth.getSession();

      if (!session?.user) {
        router.push('/login');
        return;
      }

      setEmail(session.user.email ?? null);

      let userProfile = await getUserProfile(session.user.id);
      if (!userProfile && session.user.email) {
        const nameFromMeta =
          session.user.user_metadata?.full_name ||
          session.user.user_metadata?.name ||
          session.user.email.split('@')[0];

        try {
          userProfile = await createUserProfile({
            id: session.user.id,
            full_name: nameFromMeta,
            email: session.user.email,
            role: 'donor',
          });
        } catch (err) {
          console.error('Error creating user profile:', err);
        }
      }

      setProfile(userProfile);
      setLoading(false);
    };

    loadProfile();
  }, [router]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 bg-gradient-to-br from-rose-500 to-pink-600 rounded-full mx-auto mb-4 animate-pulse"></div>
          <p className="text-gray-600">Loading your profile...</p>
        </div>
      </div>
    );
  }

  if (!profile) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="bg-white rounded-lg shadow-lg p-8 text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Profile Unavailable</h1>
          <p className="text-gray-600">Please try again or contact support.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 px-4 py-12">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-rose-500 to-pink-600 text-white flex items-center justify-center text-2xl font-bold">
              {profile.full_name.trim().charAt(0).toUpperCase()}
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">{profile.full_name}</h1>
              <p className="text-gray-600">{email}</p>
            </div>
          </div>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
              <p className="text-sm text-gray-500">Role</p>
              <p className="text-lg font-semibold text-gray-900 capitalize">{profile.role}</p>
            </div>
            <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
              <p className="text-sm text-gray-500">Member Since</p>
              <p className="text-lg font-semibold text-gray-900">
                {new Date(profile.created_at).toLocaleDateString()}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
