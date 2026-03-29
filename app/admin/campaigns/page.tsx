'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { getSafeSession } from '@/lib/supabase';
import { getUserProfile, getCampaigns, deleteCampaign, updateCampaign } from '@/lib/supabase-functions';
import Link from 'next/link';

export default function CampaignsManagement() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [campaigns, setCampaigns] = useState<any[]>([]);

  useEffect(() => {
    loadCampaigns();
  }, [router]);

  const loadCampaigns = async () => {
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

    const campaignsData = await getCampaigns(true);
    setCampaigns(campaignsData);
    setLoading(false);
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this campaign?')) return;

    try {
      await deleteCampaign(id);
      setCampaigns(campaigns.filter(c => c.id !== id));
    } catch (error) {
      alert('Error deleting campaign');
    }
  };

  const handleToggleStatus = async (campaign: any) => {
    try {
      const newStatus = campaign.status === 'active' ? 'paused' : 'active';
      await updateCampaign(campaign.id, { status: newStatus });
      await loadCampaigns();
    } catch (error) {
      alert('Error updating campaign status');
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[color:rgb(30_58_95_/_0.05)]">
        <div className="text-center">
          <div className="mx-auto mb-4 h-16 w-16 animate-pulse rounded-full bg-gradient-to-br from-[var(--navy)] to-[var(--blue)]"></div>
          <p className="text-[var(--text-muted)]">Loading campaigns...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen overflow-hidden">
      <div className="border-b border-[var(--border-soft)] bg-[color:rgb(255_255_255_/_0.58)]">
        <div className="editorial-section py-6">
          <div className="flex items-center justify-between">
            <div>
              <Link href="/admin" className="mb-2 inline-block text-sm font-medium text-[var(--blue)] hover:text-[var(--navy)]">
                ← Back to Dashboard
              </Link>
              <h1 className="font-heading text-4xl font-bold text-[var(--navy)]">Campaign Management</h1>
            </div>
            <Link
              href="/admin/campaigns/new"
              className="rounded-full bg-[var(--navy)] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[var(--blue)]"
            >
              + Create New Campaign
            </Link>
          </div>
        </div>
      </div>

      <div className="editorial-section py-12">
        {campaigns.length > 0 ? (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {campaigns.map((campaign) => {
              const progress = (campaign.raised_amount / campaign.goal_amount) * 100;
              return (
                <div key={campaign.id} className="overflow-hidden rounded-2xl border border-[var(--border-soft)] bg-[var(--surface)] transition hover:-translate-y-1 hover:shadow-md">
                  {campaign.featured_image && (
                    <div className="h-48 overflow-hidden bg-[color:rgb(30_58_95_/_0.1)]">
                      <img src={campaign.featured_image} alt={campaign.title} className="w-full h-full object-cover" />
                    </div>
                  )}
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <h2 className="flex-1 font-heading text-2xl font-bold text-[var(--navy)]">{campaign.title}</h2>
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ml-2 ${
                        campaign.status === 'active' ? 'bg-[color:rgb(42_123_111_/_0.16)] text-[var(--teal)]' :
                        campaign.status === 'completed' ? 'bg-[color:rgb(74_118_168_/_0.15)] text-[var(--blue)]' :
                        'bg-[color:rgb(217_119_77_/_0.14)] text-[var(--accent)]'
                      }`}>
                        {campaign.status}
                      </span>
                    </div>
                    <p className="mb-4 line-clamp-2 text-[var(--text-muted)]">{campaign.description}</p>
                    
                    <div className="mb-4">
                      <div className="flex items-center justify-between text-sm mb-2">
                        <span className="text-[var(--text-muted)]">Progress</span>
                        <span className="font-semibold text-[var(--navy)]">
                          ₹{campaign.raised_amount?.toLocaleString() || 0} / ₹{campaign.goal_amount?.toLocaleString()}
                        </span>
                      </div>
                      <div className="h-3 w-full rounded-full bg-[color:rgb(30_58_95_/_0.14)]">
                        <div
                          className="h-3 rounded-full bg-gradient-to-r from-[var(--navy)] to-[var(--blue)] transition-all"
                          style={{ width: `${Math.min(progress, 100)}%` }}
                        ></div>
                      </div>
                      <p className="mt-1 text-xs text-[var(--text-muted)]">{Math.round(progress)}% funded</p>
                    </div>

                    <div className="flex items-center gap-2 border-t border-[var(--border-soft)] pt-4">
                      <Link
                        href={`/admin/campaigns/edit/${campaign.id}`}
                        className="flex-1 rounded-full bg-[var(--blue)] px-4 py-2 text-center text-sm font-medium text-white transition hover:bg-[var(--navy)]"
                      >
                        Edit
                      </Link>
                      <button
                        onClick={() => handleToggleStatus(campaign)}
                        className={`flex-1 rounded-full px-4 py-2 text-sm font-medium transition ${
                          campaign.status === 'active'
                            ? 'bg-[var(--accent)] text-white hover:bg-[var(--accent-warm)]'
                            : 'bg-[var(--teal)] text-white hover:opacity-90'
                        }`}
                      >
                        {campaign.status === 'active' ? 'Pause' : 'Activate'}
                      </button>
                      <button
                        onClick={() => handleDelete(campaign.id)}
                        className="rounded-full bg-red-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-red-700"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="rounded-2xl border border-[var(--border-soft)] bg-[var(--surface)] p-12 text-center">
            <div className="text-6xl mb-4">🎯</div>
            <h3 className="font-heading text-3xl font-bold text-[var(--navy)]">No campaigns yet</h3>
            <p className="mb-6 mt-2 text-[var(--text-muted)]">Create your first fundraising campaign to get started.</p>
            <Link
              href="/admin/campaigns/new"
              className="inline-block rounded-full bg-[var(--navy)] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[var(--blue)]"
            >
              Create New Campaign
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
