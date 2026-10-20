'use client';

import DonationForm from '@/components/DonationForm';
import { useMemo } from 'react';
import { fallbackCampaigns } from '@/lib/campaigns';
import SectionEyebrow from '@/components/SectionEyebrow';
import Icon from '@/components/icons';

const IMPACT = [
  { amount: '₹100', impact: 'Provides educational materials for one girl' },
  { amount: '₹500', impact: 'Supports one woman in vocational training' },
  { amount: '₹1,000', impact: 'Funds a health camp for 50 women' },
  { amount: '₹5,000', impact: "Sponsors one girl's education for a year" },
  { amount: '₹10,000', impact: 'Supports 10 women entrepreneurs' },
];

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
    <div className="grid grid-cols-1 gap-10 lg:grid-cols-3">
      <div className="lg:col-span-2">
        <DonationForm campaignLabel={campaignLabel} initialMessage={initialMessage} />
      </div>

      <div className="space-y-6">
        <div>
          <SectionEyebrow className="mb-3">Your Impact</SectionEyebrow>
          <h2 className="font-heading text-2xl font-extrabold text-[var(--navy)]">Where your gift goes</h2>
        </div>

        <div className="space-y-3">
          {IMPACT.map((item) => (
            <div key={item.amount} className="card flex items-start gap-4 p-4">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[color:rgb(232_93_117_/_0.1)] text-[#e85d75]">
                <Icon name="heart" size={17} />
              </span>
              <div>
                <p className="font-heading text-base font-extrabold text-[var(--navy)]">{item.amount}</p>
                <p className="mt-0.5 text-sm leading-relaxed">{item.impact}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="rounded-2xl bg-[var(--navy)] p-6 text-white">
          <h3 className="flex items-center gap-2 font-heading text-lg font-bold text-white">
            <Icon name="shield-check" size={18} className="text-[#e85d75]" />
            100% transparent
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-white/75">
            All funds go directly to our programs. We maintain complete transparency in our operations.
          </p>
          <p className="mt-3 text-sm text-white/75">
            <strong className="text-white">80-G Certified:</strong> Your donation is tax-deductible.
          </p>
        </div>
      </div>
    </div>
  );
}
