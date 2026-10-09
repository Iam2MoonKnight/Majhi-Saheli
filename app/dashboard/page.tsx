'use client';

import { useEffect, useState } from 'react';
import { getSafeSession } from '@/lib/supabase';
import {
  createUserProfile,
  formatCurrencyTotals,
  getAllDonations,
  getDonationStats,
  getUserDonations,
  getUserProfile,
} from '@/lib/supabase-functions';
import { Donation, User } from '@/lib/types';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function Dashboard() {
  const router = useRouter();
  const [user, setUser] = useState<any>(null);
  const [userProfile, setUserProfile] = useState<User | null>(null);
  const [donations, setDonations] = useState<Donation[]>([]);
  const [stats, setStats] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkAuth = async () => {
      const session = await getSafeSession();
      
      if (!session?.user) {
        router.push('/login');
        return;
      }

      setUser(session.user);

      try {
        // Get user profile (create it on first login if missing)
        let profile = await getUserProfile(session.user.id);

        if (!profile && session.user.email) {
          const nameFromMeta =
            session.user.user_metadata?.full_name ||
            session.user.user_metadata?.name ||
            session.user.email.split('@')[0];

          try {
            profile = await createUserProfile({
              id: session.user.id,
              full_name: nameFromMeta,
              email: session.user.email,
              role: 'donor',
            });
          } catch (err) {
            console.error('Error creating user profile:', err);
          }
        }

        setUserProfile(profile);

        // Get donations based on role
        if (profile?.role === 'admin') {
          const allDonations = await getAllDonations();
          setDonations(allDonations || []);
          const donationStats = await getDonationStats();
          setStats(donationStats);
        } else {
          const userDonations = await getUserDonations(session.user.id);
          setDonations(userDonations || []);
        }
      } catch (error) {
        console.error('Error loading dashboard:', error);
      } finally {
        setLoading(false);
      }
    };

    checkAuth();
  }, [router]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[var(--off-white)]">
        <div className="text-center">
          <div className="mx-auto mb-4 h-16 w-16 animate-pulse rounded-full bg-gradient-to-br from-[var(--navy)] to-[var(--blue)]"></div>
          <p className="text-[var(--text-muted)]">Loading your dashboard...</p>
        </div>
      </div>
    );
  }

  if (!user) {
    return null;
  }

  const isAdmin = userProfile?.role === 'admin';
  const donationTotals = donations.reduce<Record<string, number>>((acc, donation) => {
    const currency = donation.currency || 'INR';
    acc[currency] = (acc[currency] || 0) + donation.amount;
    return acc;
  }, {});

  return (
    <div className="min-h-screen overflow-hidden">
      <div className="border-b border-[var(--border-soft)] bg-[var(--off-white)]">
        <div className="editorial-section py-8">
          <div className="flex items-center justify-between">
            <div>
              <p className="section-eyebrow text-[var(--navy)]">Account</p>
              <h1 className="mt-2 font-heading text-4xl font-bold text-[var(--navy)] md:text-5xl">Dashboard</h1>
              <p className="mt-2 text-[var(--text-muted)]">
                Welcome back, {userProfile?.full_name || user.email}!
              </p>
            </div>
            <div className="flex items-center gap-4">
              {isAdmin && (
                <Link
                  href="/admin"
                  className="rounded-full bg-[var(--navy)] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[var(--blue)]"
                >
                  Admin Panel
                </Link>
              )}
              <div className="rounded-full bg-gradient-to-r from-[var(--navy)] to-[var(--blue)] px-5 py-2 text-sm font-semibold text-white">
                {isAdmin ? '👑 Admin' : '💚 Donor'}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="editorial-section py-12">
        {isAdmin && (
          <div className="space-y-8">
            {stats && (
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="rounded-2xl border border-[var(--border-soft)] bg-[var(--surface)] p-6">
                  <p className="text-xs font-semibold uppercase tracking-wide text-[var(--text-muted)]">Total Donations</p>
                  <p className="mt-2 font-heading text-4xl font-bold text-[var(--navy)]">{stats.totalDonations}</p>
                </div>
                <div className="rounded-2xl border border-[var(--border-soft)] bg-[var(--surface)] p-6">
                  <p className="text-xs font-semibold uppercase tracking-wide text-[var(--text-muted)]">Total Amount</p>
                  <p className="mt-2 font-heading text-4xl font-bold text-[var(--accent)]">
                    {formatCurrencyTotals(stats.totalsByCurrency)}
                  </p>
                </div>
                <div className="rounded-2xl border border-[var(--border-soft)] bg-[var(--surface)] p-6">
                  <p className="text-xs font-semibold uppercase tracking-wide text-[var(--text-muted)]">One-time Donations</p>
                  <p className="mt-2 font-heading text-4xl font-bold text-[var(--blue)]">{stats.oneTimeCount}</p>
                </div>
                <div className="rounded-2xl border border-[var(--border-soft)] bg-[var(--surface)] p-6">
                  <p className="text-xs font-semibold uppercase tracking-wide text-[var(--text-muted)]">Recurring Donations</p>
                  <p className="mt-2 font-heading text-4xl font-bold text-[var(--teal)]">{stats.recurringCount}</p>
                </div>
              </div>
            )}

            <div className="overflow-hidden rounded-2xl border border-[var(--border-soft)] bg-[var(--surface)]">
              <div className="border-b border-[var(--border-soft)] px-6 py-4">
                <h2 className="font-heading text-3xl font-bold text-[var(--navy)]">All Donations</h2>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="border-b border-[var(--border-soft)] bg-[var(--off-white)]">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wide text-[var(--text-muted)]">Name</th>
                      <th className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wide text-[var(--text-muted)]">Email</th>
                      <th className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wide text-[var(--text-muted)]">Amount</th>
                      <th className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wide text-[var(--text-muted)]">Type</th>
                      <th className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wide text-[var(--text-muted)]">Date</th>
                    </tr>
                  </thead>
                  <tbody>
                    {donations.length > 0 ? (
                      donations.map((donation) => (
                        <tr key={donation.id} className="border-b border-[var(--border-soft)] transition hover:bg-[var(--off-white)]">
                          <td className="px-6 py-4 text-sm text-[var(--navy)]">{donation.name}</td>
                          <td className="px-6 py-4 text-sm text-[var(--text-muted)]">{donation.email}</td>
                          <td className="px-6 py-4 text-sm font-semibold text-[var(--navy)]">
                            {donation.currency} {donation.amount.toLocaleString()}
                          </td>
                          <td className="px-6 py-4 text-sm">
                            <span
                              className={`px-3 py-1 rounded-full text-xs font-semibold ${
                                donation.frequency === 'one_time'
                                  ? 'bg-[color:rgb(47_90_134_/_0.15)] text-[var(--blue)]'
                                  : 'bg-[color:rgb(47_90_134_/_0.18)] text-[var(--teal)]'
                              }`}
                            >
                              {donation.frequency === 'one_time' ? 'One-time' : 'Recurring'}
                            </span>
                          </td>
                          <td className="px-6 py-4 text-sm text-[var(--text-muted)]">
                            {new Date(donation.created_at).toLocaleDateString()}
                          </td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan={5} className="px-6 py-8 text-center text-[var(--text-muted)]">
                          No donations yet
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {!isAdmin && (
          <div className="space-y-8">
            <div className="overflow-hidden rounded-2xl border border-[var(--border-soft)] bg-[var(--surface)]">
              <div className="border-b border-[var(--border-soft)] px-6 py-4">
                <h2 className="font-heading text-3xl font-bold text-[var(--navy)]">My Donations</h2>
              </div>

              {donations.length > 0 ? (
                <div className="space-y-4 p-6">
                  {donations.map((donation) => (
                    <div key={donation.id} className="rounded-2xl border border-[var(--border-soft)] bg-white p-6 transition hover:-translate-y-1 hover:shadow-md">
                      <div className="flex items-center justify-between mb-4">
                        <div>
                          <p className="font-heading text-3xl font-bold text-[var(--navy)]">
                            {donation.currency} {donation.amount.toLocaleString()}
                          </p>
                          <p className="text-sm text-[var(--text-muted)]">
                            {new Date(donation.created_at).toLocaleDateString()} •{' '}
                            {donation.frequency === 'one_time' ? 'One-time' : 'Monthly Recurring'}
                          </p>
                        </div>
                        <span
                          className={`px-4 py-2 rounded-full text-sm font-semibold ${
                            donation.frequency === 'one_time'
                              ? 'bg-[color:rgb(47_90_134_/_0.15)] text-[var(--blue)]'
                              : 'bg-[color:rgb(47_90_134_/_0.18)] text-[var(--teal)]'
                          }`}
                        >
                          {donation.frequency === 'one_time' ? 'One-time' : 'Recurring'}
                        </span>
                      </div>

                      {donation.message && (
                        <div className="rounded-xl border border-[var(--border-soft)] bg-[var(--off-white)] p-4 italic text-[var(--text-muted)]">
                          &ldquo;{donation.message}&rdquo;
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              ) : (
                <div className="p-12 text-center">
                  <p className="mb-6 text-[var(--text-muted)]">You haven&rsquo;t made any donations yet.</p>
                  <Link
                    href="/donate"
                    className="inline-block rounded-full bg-[var(--accent)] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[var(--accent-warm)]"
                  >
                    Make a Donation
                  </Link>
                </div>
              )}
            </div>

            <div className="rounded-2xl border border-[var(--border-soft)] bg-[var(--off-white)] p-8">
              <h3 className="font-heading text-3xl font-bold text-[var(--navy)]">Your Impact</h3>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <p className="mt-4 text-xs font-semibold uppercase tracking-wide text-[var(--text-muted)]">Total Contributed</p>
                  <p className="mt-2 font-heading text-4xl font-bold text-[var(--accent)]">
                    {formatCurrencyTotals(donationTotals)}
                  </p>
                </div>
                <div>
                  <p className="mt-4 text-xs font-semibold uppercase tracking-wide text-[var(--text-muted)]">Number of Donations</p>
                  <p className="mt-2 font-heading text-4xl font-bold text-[var(--blue)]">{donations.length}</p>
                </div>
              </div>
              <p className="mt-6 text-[var(--text-muted)]">Thank you for your generous support in empowering rural women.</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
