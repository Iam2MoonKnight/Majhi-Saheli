'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { supabase } from '@/lib/supabase';
import { getUserProfile, getDonationStats, getBlogs, getCampaigns } from '@/lib/supabase-functions';
import Link from 'next/link';

export default function AdminDashboard() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [stats, setStats] = useState<any>(null);
  const [recentBlogs, setRecentBlogs] = useState<any[]>([]);
  const [activeCampaigns, setActiveCampaigns] = useState<any[]>([]);

  useEffect(() => {
    const checkAuth = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      
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
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="w-16 h-16 bg-gradient-to-br from-violet-500 to-purple-600 rounded-full mx-auto mb-4 animate-pulse"></div>
          <p className="text-gray-600">Loading admin dashboard...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-violet-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-4xl font-bold mb-2">Admin Dashboard</h1>
              <p className="text-violet-100">Manage your NGO website content and campaigns</p>
            </div>
            <Link
              href="/dashboard"
              className="px-6 py-3 bg-white text-violet-600 font-semibold rounded-lg hover:bg-violet-50 transition"
            >
              User Dashboard
            </Link>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-violet-100 rounded-lg flex items-center justify-center">
                <span className="text-2xl">💰</span>
              </div>
            </div>
            <p className="text-gray-600 text-sm font-medium mb-1">Total Donations</p>
            <p className="text-3xl font-bold text-gray-900">{stats?.totalDonations || 0}</p>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                <span className="text-2xl">₹</span>
              </div>
            </div>
            <p className="text-gray-600 text-sm font-medium mb-1">Total Amount</p>
            <p className="text-3xl font-bold text-gray-900">₹{stats?.totalAmount?.toLocaleString() || 0}</p>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <span className="text-2xl">📝</span>
              </div>
            </div>
            <p className="text-gray-600 text-sm font-medium mb-1">Total Blogs</p>
            <p className="text-3xl font-bold text-gray-900">{recentBlogs.length}</p>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center">
                <span className="text-2xl">🎯</span>
              </div>
            </div>
            <p className="text-gray-600 text-sm font-medium mb-1">Active Campaigns</p>
            <p className="text-3xl font-bold text-gray-900">{activeCampaigns.length}</p>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-white rounded-xl shadow-sm p-8 mb-12 border border-gray-100">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Quick Actions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <Link
              href="/admin/blogs/new"
              className="group p-6 bg-gradient-to-br from-violet-50 to-purple-50 rounded-lg border-2 border-violet-200 hover:border-violet-400 transition-all hover:shadow-md"
            >
              <div className="text-3xl mb-3">✍️</div>
              <h3 className="font-semibold text-gray-900 mb-1">Create Blog Post</h3>
              <p className="text-sm text-gray-600">Write and publish new content</p>
            </Link>

            <Link
              href="/admin/campaigns/new"
              className="group p-6 bg-gradient-to-br from-pink-50 to-rose-50 rounded-lg border-2 border-pink-200 hover:border-pink-400 transition-all hover:shadow-md"
            >
              <div className="text-3xl mb-3">🎯</div>
              <h3 className="font-semibold text-gray-900 mb-1">New Campaign</h3>
              <p className="text-sm text-gray-600">Launch a fundraising campaign</p>
            </Link>

            <Link
              href="/admin/hero"
              className="group p-6 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-lg border-2 border-blue-200 hover:border-blue-400 transition-all hover:shadow-md"
            >
              <div className="text-3xl mb-3">🖼️</div>
              <h3 className="font-semibold text-gray-900 mb-1">Update Hero</h3>
              <p className="text-sm text-gray-600">Change homepage hero section</p>
            </Link>

            <Link
              href="/dashboard"
              className="group p-6 bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg border-2 border-green-200 hover:border-green-400 transition-all hover:shadow-md"
            >
              <div className="text-3xl mb-3">📊</div>
              <h3 className="font-semibold text-gray-900 mb-1">View Reports</h3>
              <p className="text-sm text-gray-600">Check donation analytics</p>
            </Link>
          </div>
        </div>

        {/* Content Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Recent Blogs */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100">
            <div className="p-6 border-b border-gray-100 flex items-center justify-between">
              <h2 className="text-xl font-bold text-gray-900">Recent Blogs</h2>
              <Link href="/admin/blogs" className="text-violet-600 hover:text-violet-700 font-medium text-sm">
                View All →
              </Link>
            </div>
            <div className="p-6">
              {recentBlogs.length > 0 ? (
                <div className="space-y-4">
                  {recentBlogs.map((blog) => (
                    <div key={blog.id} className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition">
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-900 mb-1">{blog.title}</h3>
                        <p className="text-sm text-gray-600 mb-2 line-clamp-1">{blog.excerpt}</p>
                        <div className="flex items-center gap-3 text-xs text-gray-500">
                          <span className={`px-2 py-1 rounded-full ${blog.status === 'published' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'}`}>
                            {blog.status}
                          </span>
                          <span>{new Date(blog.created_at).toLocaleDateString()}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-gray-500 text-center py-8">No blogs yet. Create your first one!</p>
              )}
            </div>
          </div>

          {/* Active Campaigns */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100">
            <div className="p-6 border-b border-gray-100 flex items-center justify-between">
              <h2 className="text-xl font-bold text-gray-900">Active Campaigns</h2>
              <Link href="/admin/campaigns" className="text-violet-600 hover:text-violet-700 font-medium text-sm">
                View All →
              </Link>
            </div>
            <div className="p-6">
              {activeCampaigns.length > 0 ? (
                <div className="space-y-4">
                  {activeCampaigns.map((campaign) => (
                    <div key={campaign.id} className="p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition">
                      <h3 className="font-semibold text-gray-900 mb-2">{campaign.title}</h3>
                      <div className="mb-3">
                        <div className="flex items-center justify-between text-sm mb-1">
                          <span className="text-gray-600">Progress</span>
                          <span className="font-semibold text-gray-900">
                            ₹{campaign.raised_amount?.toLocaleString() || 0} / ₹{campaign.goal_amount?.toLocaleString()}
                          </span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div
                            className="bg-gradient-to-r from-violet-600 to-purple-600 h-2 rounded-full transition-all"
                            style={{ width: `${Math.min((campaign.raised_amount / campaign.goal_amount) * 100, 100)}%` }}
                          ></div>
                        </div>
                      </div>
                      <p className="text-xs text-gray-500">
                        {Math.round((campaign.raised_amount / campaign.goal_amount) * 100)}% funded
                      </p>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-gray-500 text-center py-8">No active campaigns. Create one to start fundraising!</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
