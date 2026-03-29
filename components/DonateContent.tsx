'use client';

import DonationForm from '@/components/DonationForm';
import { useMemo } from 'react';
import { fallbackCampaigns } from '@/lib/campaigns';

export function DonateContent() {
  const campaignId = useMemo(() => {
    if (typeof window === 'undefined') {
      return null;
    }

    return new URLSearchParams(window.location.search).get('campaign');
  }, []);

  const campaignLabel = useMemo(() => {
    if (!campaignId) return null;
    const matched = fallbackCampaigns.find((campaign) => campaign.id === campaignId);
    return matched ? matched.title : campaignId;
  }, [campaignId]);

  const initialMessage = campaignLabel ? `Supporting campaign: ${campaignLabel}` : undefined;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
      <div className="lg:col-span-2">
        <DonationForm campaignLabel={campaignLabel} initialMessage={initialMessage} />
      </div>

      <div className="space-y-6">
        <h2 className="font-heading text-3xl font-bold text-[var(--navy)]">Your impact</h2>

        <div className="space-y-4">
          {
            [
              { amount: '₹100', impact: 'Provides educational materials for one girl' },
              { amount: '₹500', impact: 'Supports one woman in vocational training' },
              { amount: '₹1,000', impact: 'Funds a health camp for 50 women' },
              { amount: '₹5,000', impact: 'Sponsors one girl\'s education for a year' },
              { amount: '₹10,000', impact: 'Supports 10 women entrepreneurs' },
            ].map((item, idx) => (
              <div key={idx} className="rounded-xl border border-[var(--border-soft)] bg-[var(--surface)] p-4">
                <div className="mb-2 text-lg font-bold text-[var(--accent)]">{item.amount}</div>
                <p className="text-sm text-[var(--text-muted)]">{item.impact}</p>
              </div>
            ))
          }
        </div>

        <div className="rounded-xl border border-[color:rgb(30_58_95_/_0.28)] bg-[color:rgb(30_58_95_/_0.09)] p-6">
          <h3 className="mb-3 font-bold text-[var(--navy)]">100% transparent</h3>
          <p className="mb-4 text-sm text-[var(--text-muted)]">
            All funds go directly to our programs. We maintain complete transparency in our operations.
          </p>
          <p className="text-sm text-[var(--text-muted)]">
            <strong>80-G Certified:</strong> Your donation is tax-deductible.
          </p>
        </div>
      </div>
    </div>
  );
}
