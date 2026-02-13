'use client';

import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';
import {
  createUserProfile,
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
      const { data: { session } } = await supabase.auth.getSession();
      
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
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 bg-gradient-to-br from-rose-500 to-pink-600 rounded-full mx-auto mb-4 animate-pulse"></div>
          <p className="text-gray-600">Loading your dashboard...</p>
        </div>
      </div>
    );
  }

  if (!user) {
    return null;
  }

  const isAdmin = userProfile?.role === 'admin';

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-4xl font-bold text-gray-900">Dashboard</h1>
              <p className="text-gray-600 mt-2">
                Welcome back, {userProfile?.full_name || user.email}!
              </p>
            </div>
            <div className="flex items-center gap-4">
              {isAdmin && (
                <Link
                  href="/admin"
                  className="px-6 py-3 bg-violet-600 text-white font-semibold rounded-lg hover:bg-violet-700 transition shadow-lg"
                >
                  Admin Panel
                </Link>
              )}
              <div className="bg-gradient-to-br from-rose-500 to-pink-600 px-6 py-2 rounded-full text-white font-semibold">
                {isAdmin ? '👑 Admin' : '💚 Donor'}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Admin View */}
        {isAdmin && (
          <div className="space-y-8">
            {/* Stats */}
            {stats && (
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="bg-white rounded-lg shadow p-6">
                  <p className="text-gray-600 text-sm font-medium">Total Donations</p>
                  <p className="text-4xl font-bold text-rose-600 mt-2">{stats.totalDonations}</p>
                </div>
                <div className="bg-white rounded-lg shadow p-6">
                  <p className="text-gray-600 text-sm font-medium">Total Amount</p>
                  <p className="text-4xl font-bold text-rose-600 mt-2">₹{stats.totalAmount.toLocaleString()}</p>
                </div>
                <div className="bg-white rounded-lg shadow p-6">
                  <p className="text-gray-600 text-sm font-medium">One-time Donations</p>
                  <p className="text-4xl font-bold text-blue-600 mt-2">{stats.oneTimeCount}</p>
                </div>
                <div className="bg-white rounded-lg shadow p-6">
                  <p className="text-gray-600 text-sm font-medium">Recurring Donations</p>
                  <p className="text-4xl font-bold text-green-600 mt-2">{stats.recurringCount}</p>
                </div>
              </div>
            )}

            {/* All Donations */}
            <div className="bg-white rounded-lg shadow">
              <div className="px-6 py-4 border-b border-gray-200">
                <h2 className="text-2xl font-bold text-gray-900">All Donations</h2>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50 border-b border-gray-200">
                    <tr>
                      <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Name</th>
                      <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Email</th>
                      <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Amount</th>
                      <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Type</th>
                      <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Date</th>
                    </tr>
                  </thead>
                  <tbody>
                    {donations.length > 0 ? (
                      donations.map((donation) => (
                        <tr key={donation.id} className="border-b border-gray-200 hover:bg-gray-50 transition">
                          <td className="px-6 py-4 text-sm text-gray-900">{donation.name}</td>
                          <td className="px-6 py-4 text-sm text-gray-600">{donation.email}</td>
                          <td className="px-6 py-4 text-sm font-semibold text-gray-900">
                            {donation.currency} {donation.amount.toLocaleString()}
                          </td>
                          <td className="px-6 py-4 text-sm">
                            <span
                              className={`px-3 py-1 rounded-full text-xs font-semibold ${
                                donation.frequency === 'one_time'
                                  ? 'bg-blue-100 text-blue-700'
                                  : 'bg-green-100 text-green-700'
                              }`}
                            >
                              {donation.frequency === 'one_time' ? 'One-time' : 'Recurring'}
                            </span>
                          </td>
                          <td className="px-6 py-4 text-sm text-gray-600">
                            {new Date(donation.created_at).toLocaleDateString()}
                          </td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan={5} className="px-6 py-8 text-center text-gray-600">
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

        {/* Donor View */}
        {!isAdmin && (
          <div className="space-y-8">
            {/* My Donations */}
            <div className="bg-white rounded-lg shadow">
              <div className="px-6 py-4 border-b border-gray-200">
                <h2 className="text-2xl font-bold text-gray-900">My Donations</h2>
              </div>

              {donations.length > 0 ? (
                <div className="space-y-4 p-6">
                  {donations.map((donation) => (
                    <div key={donation.id} className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition">
                      <div className="flex items-center justify-between mb-4">
                        <div>
                          <p className="text-xl font-bold text-gray-900">
                            {donation.currency} {donation.amount.toLocaleString()}
                          </p>
                          <p className="text-sm text-gray-600">
                            {new Date(donation.created_at).toLocaleDateString()} •{' '}
                            {donation.frequency === 'one_time' ? 'One-time' : 'Monthly Recurring'}
                          </p>
                        </div>
                        <span
                          className={`px-4 py-2 rounded-full text-sm font-semibold ${
                            donation.frequency === 'one_time'
                              ? 'bg-blue-100 text-blue-700'
                              : 'bg-green-100 text-green-700'
                          }`}
                        >
                          {donation.frequency === 'one_time' ? 'One-time' : 'Recurring'}
                        </span>
                      </div>

                      {donation.message && (
                        <div className="bg-gray-50 rounded p-4 text-gray-700 italic">
                          "{donation.message}"
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              ) : (
                <div className="p-12 text-center">
                  <p className="text-gray-600 mb-6">You haven't made any donations yet.</p>
                  <Link
                    href="/donate"
                    className="inline-block px-6 py-2 bg-rose-600 text-white font-bold rounded-lg hover:bg-rose-700 transition"
                  >
                    Make a Donation
                  </Link>
                </div>
              )}
            </div>

            {/* Impact Summary */}
            <div className="bg-gradient-to-r from-rose-50 to-pink-50 rounded-lg p-8 border-2 border-rose-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Your Impact</h3>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <p className="text-gray-600 text-sm">Total Contributed</p>
                  <p className="text-3xl font-bold text-rose-600 mt-2">
                    ₹{donations.reduce((sum, d) => sum + d.amount, 0).toLocaleString()}
                  </p>
                </div>
                <div>
                  <p className="text-gray-600 text-sm">Number of Donations</p>
                  <p className="text-3xl font-bold text-rose-600 mt-2">{donations.length}</p>
                </div>
              </div>
              <p className="text-gray-700 mt-6">Thank you for your generous support in empowering rural women!</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
