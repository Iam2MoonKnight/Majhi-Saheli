'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { getSafeSession } from '@/lib/supabase';
import { formatCurrencyTotals, getUserProfile, getDonationStats, getBlogs, getCampaigns } from '@/lib/supabase-functions';
import Link from 'next/link';

export default function AdminDashboard() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [stats, setStats] = useState<any>(null);
  const [recentBlogs, setRecentBlogs] = useState<any[]>([]);
  const [activeCampaigns, setActiveCampaigns] = useState<any[]>([]);

  useEffect(() => {
    const checkAuth = async () => {
      const session = await getSafeSession();
      
      if (!session?.user) {
        router.push('/login');
        return;
      }

      const profile = await getUserProfile(session.user.id);
      
      if (profile?.role !== 'admin') {
        router.push('/dashboard');
        return;
      }

      // Load dashboard data
      const [donationStats, blogs, campaigns] = await Promise.all([
        getDonationStats(),
        getBlogs(true),
        getCampaigns(true)
      ]);

      setStats(donationStats);
      setRecentBlogs(blogs.slice(0, 5));
      setActiveCampaigns(campaigns.filter(c => c.status === 'active'));
      setLoading(false);
    };

    checkAuth();
  }, [router]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[color:rgb(30_58_95_/_0.05)]">
        <div className="text-center">
          <div className="mx-auto mb-4 h-16 w-16 animate-pulse rounded-full bg-gradient-to-br from-[var(--navy)] to-[var(--blue)]"></div>
          <p className="text-[var(--text-muted)]">Loading admin dashboard...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen overflow-hidden">
      <div className="border-b border-[var(--border-soft)] bg-[color:rgb(255_255_255_/_0.58)]">
        <div className="editorial-section py-8">
          <div className="flex items-center justify-between">
            <div>
              <p className="section-eyebrow text-[var(--navy)]">Control Center</p>
              <h1 className="mt-2 font-heading text-4xl font-bold text-[var(--navy)] md:text-5xl">Admin Dashboard</h1>
              <p className="mt-2 text-[var(--text-muted)]">Manage content, campaigns, and public messaging.</p>
            </div>
            <Link
              href="/dashboard"
              className="rounded-full bg-[var(--navy)] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[var(--blue)]"
            >
              User Dashboard
            </Link>
          </div>
        </div>
      </div>

      <div className="editorial-section py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <div className="rounded-2xl border border-[var(--border-soft)] bg-[var(--surface)] p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[color:rgb(30_58_95_/_0.12)]">
                <span className="text-2xl">💰</span>
              </div>
            </div>
            <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-[var(--text-muted)]">Total Donations</p>
            <p className="font-heading text-3xl font-bold text-[var(--navy)]">{stats?.totalDonations || 0}</p>
          </div>

          <div className="rounded-2xl border border-[var(--border-soft)] bg-[var(--surface)] p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[color:rgb(42_123_111_/_0.16)]">
                <span className="text-2xl">₹</span>
              </div>
            </div>
            <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-[var(--text-muted)]">Total Amount</p>
            <p className="font-heading text-3xl font-bold text-[var(--accent)]">
              {formatCurrencyTotals(stats?.totalsByCurrency)}
            </p>
          </div>

          <div className="rounded-2xl border border-[var(--border-soft)] bg-[var(--surface)] p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[color:rgb(74_118_168_/_0.15)]">
                <span className="text-2xl">📝</span>
              </div>
            </div>
            <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-[var(--text-muted)]">Total Blogs</p>
            <p className="font-heading text-3xl font-bold text-[var(--navy)]">{recentBlogs.length}</p>
          </div>

          <div className="rounded-2xl border border-[var(--border-soft)] bg-[var(--surface)] p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[color:rgb(217_119_77_/_0.15)]">
                <span className="text-2xl">🎯</span>
              </div>
            </div>
            <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-[var(--text-muted)]">Active Campaigns</p>
            <p className="font-heading text-3xl font-bold text-[var(--navy)]">{activeCampaigns.length}</p>
          </div>
        </div>

        <div className="mb-12 rounded-2xl border border-[var(--border-soft)] bg-[var(--surface)] p-8">
          <h2 className="mb-6 font-heading text-3xl font-bold text-[var(--navy)]">Quick Actions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <Link
              href="/admin/blogs/new"
              className="group rounded-xl border border-[var(--border-soft)] bg-[color:rgb(30_58_95_/_0.05)] p-6 transition-all hover:-translate-y-1 hover:shadow-md"
            >
              <div className="text-3xl mb-3">✍️</div>
              <h3 className="mb-1 font-semibold text-[var(--navy)]">Create Blog Post</h3>
              <p className="text-sm text-[var(--text-muted)]">Write and publish new content</p>
            </Link>

            <Link
              href="/admin/campaigns/new"
              className="group rounded-xl border border-[var(--border-soft)] bg-[color:rgb(217_119_77_/_0.12)] p-6 transition-all hover:-translate-y-1 hover:shadow-md"
            >
              <div className="text-3xl mb-3">🎯</div>
              <h3 className="mb-1 font-semibold text-[var(--navy)]">New Campaign</h3>
              <p className="text-sm text-[var(--text-muted)]">Launch a fundraising campaign</p>
            </Link>

            <Link
              href="/admin/hero"
              className="group rounded-xl border border-[var(--border-soft)] bg-[color:rgb(74_118_168_/_0.12)] p-6 transition-all hover:-translate-y-1 hover:shadow-md"
            >
              <div className="text-3xl mb-3">🖼️</div>
              <h3 className="mb-1 font-semibold text-[var(--navy)]">Update Hero</h3>
              <p className="text-sm text-[var(--text-muted)]">Change homepage hero section</p>
            </Link>

            <Link
              href="/dashboard"
              className="group rounded-xl border border-[var(--border-soft)] bg-[color:rgb(42_123_111_/_0.12)] p-6 transition-all hover:-translate-y-1 hover:shadow-md"
            >
              <div className="text-3xl mb-3">📊</div>
              <h3 className="mb-1 font-semibold text-[var(--navy)]">View Reports</h3>
              <p className="text-sm text-[var(--text-muted)]">Check donation analytics</p>
            </Link>
          </div>
        </div>

        {/* Content Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Recent Blogs */}
          <div className="rounded-2xl border border-[var(--border-soft)] bg-[var(--surface)]">
            <div className="flex items-center justify-between border-b border-[var(--border-soft)] p-6">
              <h2 className="font-heading text-2xl font-bold text-[var(--navy)]">Recent Blogs</h2>
              <Link href="/admin/blogs" className="text-sm font-medium text-[var(--blue)] hover:text-[var(--navy)]">
                View All →
              </Link>
            </div>
            <div className="p-6">
              {recentBlogs.length > 0 ? (
                <div className="space-y-4">
                  {recentBlogs.map((blog) => (
                    <div key={blog.id} className="flex items-start gap-4 rounded-xl border border-[var(--border-soft)] bg-[color:rgb(30_58_95_/_0.05)] p-4 transition hover:bg-[color:rgb(30_58_95_/_0.08)]">
                      <div className="flex-1">
                        <h3 className="mb-1 font-semibold text-[var(--navy)]">{blog.title}</h3>
                        <p className="mb-2 line-clamp-1 text-sm text-[var(--text-muted)]">{blog.excerpt}</p>
                        <div className="flex items-center gap-3 text-xs text-[var(--text-muted)]">
                          <span className={`rounded-full px-2 py-1 ${blog.status === 'published' ? 'bg-[color:rgb(42_123_111_/_0.16)] text-[var(--teal)]' : 'bg-[color:rgb(217_119_77_/_0.14)] text-[var(--accent)]'}`}>
                            {blog.status}
                          </span>
                          <span>{new Date(blog.created_at).toLocaleDateString()}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="py-8 text-center text-[var(--text-muted)]">No blogs yet. Create your first one.</p>
              )}
            </div>
          </div>

          {/* Active Campaigns */}
          <div className="rounded-2xl border border-[var(--border-soft)] bg-[var(--surface)]">
            <div className="flex items-center justify-between border-b border-[var(--border-soft)] p-6">
              <h2 className="font-heading text-2xl font-bold text-[var(--navy)]">Active Campaigns</h2>
              <Link href="/admin/campaigns" className="text-sm font-medium text-[var(--blue)] hover:text-[var(--navy)]">
                View All →
              </Link>
            </div>
            <div className="p-6">
              {activeCampaigns.length > 0 ? (
                <div className="space-y-4">
                  {activeCampaigns.map((campaign) => {
                    const raised = Number(campaign.raised_amount) || 0;
                    const goal = Number(campaign.goal_amount) || 0;
                    const progress = goal > 0 ? (raised / goal) * 100 : 0;

                    return (
                      <div key={campaign.id} className="rounded-xl border border-[var(--border-soft)] bg-[color:rgb(30_58_95_/_0.05)] p-4 transition hover:bg-[color:rgb(30_58_95_/_0.08)]">
                        <h3 className="mb-2 font-semibold text-[var(--navy)]">{campaign.title}</h3>
                        <div className="mb-3">
                          <div className="flex items-center justify-between text-sm mb-1">
                            <span className="text-[var(--text-muted)]">Progress</span>
                            <span className="font-semibold text-[var(--navy)]">
                              ₹{raised.toLocaleString()} / ₹{goal.toLocaleString()}
                            </span>
                          </div>
                          <div className="h-2 w-full rounded-full bg-[color:rgb(30_58_95_/_0.14)]">
                            <div
                              className="h-2 rounded-full bg-gradient-to-r from-[var(--navy)] to-[var(--blue)] transition-all"
                              style={{ width: `${Math.min(progress, 100)}%` }}
                            ></div>
                          </div>
                        </div>
                        <p className="text-xs text-[var(--text-muted)]">{Math.round(progress)}% funded</p>
                      </div>
                    );
                  })}
                </div>
              ) : (
                <p className="py-8 text-center text-[var(--text-muted)]">No active campaigns. Create one to start fundraising.</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
