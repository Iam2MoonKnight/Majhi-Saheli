'use client';

import DonationForm from '@/components/DonationForm';
import { useMemo } from 'react';
import { useSearchParams } from 'next/navigation';
import { fallbackCampaigns } from '@/lib/campaigns';

export function DonateContent() {
  const searchParams = useSearchParams();
  const campaignId = searchParams.get('campaign');

  const campaignLabel = useMemo(() => {
    if (!campaignId) return null;
    const matched = fallbackCampaigns.find((campaign) => campaign.id === campaignId);
    return matched ? matched.title : campaignId;
  }, [campaignId]);

  const initialMessage = campaignLabel ? `Supporting campaign: ${campaignLabel}` : undefined;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
      {/* Form */}
      <div className="lg:col-span-2">
        <DonationForm campaignLabel={campaignLabel} initialMessage={initialMessage} />
      </div>

      {/* Impact Info */}
      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-slate-900">Your impact</h2>

        <div className="space-y-4">
          {
            [
              { amount: '₹100', impact: 'Provides educational materials for one girl' },
              { amount: '₹500', impact: 'Supports one woman in vocational training' },
              { amount: '₹1,000', impact: 'Funds a health camp for 50 women' },
              { amount: '₹5,000', impact: 'Sponsors one girl\'s education for a year' },
              { amount: '₹10,000', impact: 'Supports 10 women entrepreneurs' },
            ].map((item, idx) => (
              <div key={idx} className="bg-white rounded-lg p-4 border border-slate-200">
                <div className="font-bold text-teal-700 text-lg mb-2">{item.amount}</div>
                <p className="text-slate-600 text-sm">{item.impact}</p>
              </div>
            ))
          }
        </div>

        <div className="bg-white rounded-lg p-6 border border-teal-200">
          <h3 className="font-bold text-slate-900 mb-3">100% transparent</h3>
          <p className="text-slate-600 text-sm mb-4">
            All funds go directly to our programs. We maintain complete transparency in our operations.
          </p>
          <p className="text-slate-600 text-sm">
            <strong>80-G Certified:</strong> Your donation is tax-deductible.
          </p>
        </div>
      </div>
    </div>
  );
}
