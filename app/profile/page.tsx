'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { getSafeSession } from '@/lib/supabase';
import { createUserProfile, getUserProfile } from '@/lib/supabase-functions';
import { User } from '@/lib/types';

export default function ProfilePage() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [profile, setProfile] = useState<User | null>(null);
  const [email, setEmail] = useState<string | null>(null);

  useEffect(() => {
    const loadProfile = async () => {
      const session = await getSafeSession();

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
      <div className="min-h-screen flex items-center justify-center bg-[color:rgb(30_58_95_/_0.05)]">
        <div className="text-center">
          <div className="mx-auto mb-4 h-16 w-16 animate-pulse rounded-full bg-gradient-to-br from-[var(--navy)] to-[var(--blue)]"></div>
          <p className="text-[var(--text-muted)]">Loading your profile...</p>
        </div>
      </div>
    );
  }

  if (!profile) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[color:rgb(30_58_95_/_0.05)]">
        <div className="rounded-2xl border border-[var(--border-soft)] bg-[var(--surface)] p-8 text-center">
          <h1 className="font-heading text-3xl font-bold text-[var(--navy)]">Profile Unavailable</h1>
          <p className="mt-2 text-[var(--text-muted)]">Please try again or contact support.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen overflow-hidden px-4 py-12">
      <div className="mx-auto max-w-3xl">
        <div className="rounded-2xl border border-[var(--border-soft)] bg-[var(--surface)] p-8">
          <div className="flex items-center gap-4">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-[var(--navy)] to-[var(--blue)] text-2xl font-bold text-white">
              {profile.full_name.trim().charAt(0).toUpperCase()}
            </div>
            <div>
              <p className="section-eyebrow text-[var(--navy)]">Profile</p>
              <h1 className="mt-1 font-heading text-4xl font-bold text-[var(--navy)]">{profile.full_name}</h1>
              <p className="text-[var(--text-muted)]">{email}</p>
            </div>
          </div>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-xl border border-[var(--border-soft)] bg-[color:rgb(30_58_95_/_0.05)] p-6">
              <p className="text-xs font-semibold uppercase tracking-wide text-[var(--text-muted)]">Role</p>
              <p className="mt-2 text-lg font-semibold capitalize text-[var(--navy)]">{profile.role}</p>
            </div>
            <div className="rounded-xl border border-[var(--border-soft)] bg-[color:rgb(30_58_95_/_0.05)] p-6">
              <p className="text-xs font-semibold uppercase tracking-wide text-[var(--text-muted)]">Member Since</p>
              <p className="mt-2 text-lg font-semibold text-[var(--navy)]">
                {new Date(profile.created_at).toLocaleDateString()}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
