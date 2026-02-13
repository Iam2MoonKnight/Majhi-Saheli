import Link from 'next/link';
import { getCampaigns } from '@/lib/supabase-functions';
import { fallbackCampaigns, mapSupabaseCampaigns } from '@/lib/campaigns';

const statusStyles: Record<string, string> = {
  ongoing: 'bg-teal-100 text-teal-800 border-teal-200',
  completed: 'bg-slate-200 text-slate-700 border-slate-300',
  upcoming: 'bg-amber-100 text-amber-800 border-amber-200',
};

export default async function CampaignsPage() {
  let campaigns = fallbackCampaigns;

  try {
    const supabaseCampaigns = await getCampaigns(true);
    if (supabaseCampaigns.length > 0) {
      campaigns = mapSupabaseCampaigns(supabaseCampaigns);
    }
  } catch (error) {
    console.error('Error fetching campaigns:', error);
  }

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Intro */}
      <section className="bg-white border-b border-slate-200">
        <div className="max-w-5xl mx-auto px-4 py-16 space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-teal-100 rounded-full">
            <div className="w-2 h-2 bg-teal-600 rounded-full"></div>
            <span className="text-xs font-semibold text-teal-900 tracking-wide">CAMPAIGNS</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900">Support our campaigns</h1>
          <p className="text-lg text-slate-600 max-w-2xl">
            Targeted fundraising efforts to meet urgent needs in education, health, and training for rural women.
          </p>
        </div>
      </section>

      {/* Campaigns Grid */}
      <section className="bg-slate-50">
        <div className="max-w-5xl mx-auto px-4 py-16 space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {campaigns.map((campaign) => {
              const progress = campaign.goalAmount > 0 ? (campaign.raisedAmount / campaign.goalAmount) * 100 : 0;

              return (
                <div
                  key={campaign.id}
                  className="bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-lg transition-all"
                >
                  <div className="p-6 space-y-4">
                    <div className="flex items-center justify-between">
                      <span
                        className={`inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold uppercase tracking-wide ${
                          statusStyles[campaign.status]
                        }`}
                      >
                        {campaign.status}
                      </span>
                      <span className="text-xs text-slate-500 capitalize">{campaign.category}</span>
                    </div>
                    <h2 className="text-xl font-bold text-slate-900">{campaign.title}</h2>
                    <p className="text-sm text-slate-600 line-clamp-3">{campaign.description}</p>
                    <p className="text-xs text-slate-500">{campaign.location}</p>

                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <span className="font-semibold text-slate-900">
                          ₹{campaign.raisedAmount.toLocaleString()}
                        </span>
                        <span className="text-slate-600">
                          of ₹{campaign.goalAmount.toLocaleString()}
                        </span>
                      </div>
                      <div className="w-full bg-slate-200 rounded-full h-2">
                        <div
                          className="bg-gradient-to-r from-teal-500 to-emerald-500 h-2 rounded-full"
                          style={{ width: `${Math.min(progress, 100)}%` }}
                        ></div>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 pt-2">
                      <Link
                        href={`/campaigns/${campaign.id}`}
                        className="inline-flex items-center justify-center rounded-lg border border-slate-200 bg-white px-3 py-2 text-xs font-semibold text-slate-700 shadow-sm transition hover:bg-slate-50"
                      >
                        View details
                      </Link>
                      <Link
                        href={`/donate?campaign=${campaign.id}`}
                        className="inline-flex items-center justify-center rounded-lg bg-teal-600 px-3 py-2 text-xs font-semibold text-white shadow-sm transition hover:opacity-90"
                      >
                        Donate
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-white border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-4 py-16 text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Want to create your own campaign?</h2>
          <p className="text-lg text-slate-600">
            Partner with us to launch a targeted campaign for a specific cause or community.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-lg bg-teal-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:opacity-90"
          >
            Get in touch
          </Link>
        </div>
      </section>
    </div>
  );
}
