
'use client';

import DonationForm from '@/components/DonationForm';
import { useMemo } from 'react';
import { useSearchParams } from 'next/navigation';
import { fallbackCampaigns } from '@/lib/campaigns';

export default function Donate() {
  const searchParams = useSearchParams();
  const campaignId = searchParams.get('campaign');

  const campaignLabel = useMemo(() => {
    if (!campaignId) return null;
    const matched = fallbackCampaigns.find((campaign) => campaign.id === campaignId);
    return matched ? matched.title : campaignId;
  }, [campaignId]);

  const initialMessage = campaignLabel ? `Supporting campaign: ${campaignLabel}` : undefined;

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero Section */}
      <section className="bg-white border-b border-slate-200">
        <div className="max-w-5xl mx-auto px-4 py-16 space-y-6 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-teal-100 rounded-full mx-auto">
            <div className="w-2 h-2 bg-teal-600 rounded-full"></div>
            <span className="text-xs font-semibold text-teal-900 tracking-wide">DONATE</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900">Make a difference</h1>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Your generous donation helps us empower rural women through education, health, and skills development.
          </p>
        </div>
      </section>

      {/* Donation Section */}
      <section className="bg-slate-50">
        <div className="max-w-5xl mx-auto px-4 py-16 space-y-8">
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
        </div>
      </section>

      {/* How We Use Donations */}
      <section className="bg-white border-t border-slate-200">
        <div className="max-w-5xl mx-auto px-4 py-16 space-y-8">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 text-center">How we use your donation</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {
              [
                {
                  icon: '📚',
                  title: 'Education (35%)',
                  desc: 'Scholarships, materials, and teacher training for girls and women',
                },
                {
                  icon: '💊',
                  title: 'Health (30%)',
                  desc: 'Medical camps, health awareness, and preventive care programs',
                },
                {
                  icon: '🎓',
                  title: 'Skills Training (25%)',
                  desc: 'Vocational training, tools, and market linkages for entrepreneurs',
                },
                {
                  icon: '🏢',
                  title: 'Administration (5%)',
                  desc: 'Essential operational costs to run our programs effectively',
                },
                {
                  icon: '📊',
                  title: 'Monitoring (3%)',
                  desc: 'Evaluation and impact assessment to ensure program quality',
                },
                {
                  icon: '🎯',
                  title: 'Outreach (2%)',
                  desc: 'Community awareness and volunteer support programs',
                },
              ].map((item, idx) => (
                <div key={idx} className="bg-slate-50 rounded-lg p-6 text-center border border-slate-200">
                  <div className="text-4xl mb-4">{item.icon}</div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">{item.title}</h3>
                  <p className="text-slate-600 text-sm">{item.desc}</p>
                </div>
              ))
            }
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-slate-50 border-t border-slate-200">
        <div className="max-w-5xl mx-auto px-4 py-16 space-y-8">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 text-center">Frequently asked questions</h2>

          <div className="space-y-6">
            {
              [
                {
                  q: 'Is my donation tax-deductible?',
                  a: 'Yes! Saheli is registered under 80-G of the Income Tax Act, 1961. You can claim tax benefits on your donations.',
                },
                {
                  q: 'Can I make a recurring donation?',
                  a: 'Yes! We offer flexible monthly, quarterly, and annual donation options through our form.',
                },
                {
                  q: 'How is my donation used?',
                  a: 'Each donation goes directly to our programs. We maintain complete transparency and share detailed impact reports annually.',
                },
                {
                  q: 'Can I donate in other currencies?',
                  a: 'Yes, we accept donations in INR, USD, and EUR. Select your preferred currency in the donation form.',
                },
                {
                  q: 'How do I know my money is safe?',
                  a: 'Saheli is a registered NGO with proper governance and audit procedures. Your donation is secure and transparent.',
                },
              ].map((faq, idx) => (
                <div key={idx} className="border-l-4 border-teal-500 bg-white rounded-lg p-6">
                  <h3 className="font-bold text-lg text-slate-900 mb-2">{faq.q}</h3>
                  <p className="text-slate-600">{faq.a}</p>
                </div>
              ))
            }
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="bg-white border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-4 py-16 text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Stay updated on our impact</h2>
          <p className="text-lg text-slate-600">Subscribe to receive monthly updates about our programs and beneficiary stories.</p>
          <div className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 rounded-lg border border-slate-200 text-slate-900 focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
            <button className="inline-flex items-center justify-center rounded-lg bg-teal-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:opacity-90">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
