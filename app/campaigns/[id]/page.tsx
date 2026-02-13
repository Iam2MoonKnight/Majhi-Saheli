import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getCampaignBySlug } from '@/lib/supabase-functions';
import { getCampaignById, mapSupabaseCampaign } from '@/lib/campaigns';

const statusStyles: Record<string, string> = {
  ongoing: 'bg-teal-100 text-teal-800 border-teal-200',
  completed: 'bg-slate-200 text-slate-700 border-slate-300',
  upcoming: 'bg-amber-100 text-amber-800 border-amber-200',
};

export default async function CampaignDetailPage({ params }: { params: { id: string } }) {
  let campaign = getCampaignById(params.id);

  try {
    const supabaseCampaign = await getCampaignBySlug(params.id);
    if (supabaseCampaign) {
      campaign = mapSupabaseCampaign(supabaseCampaign);
    }
  } catch {
    // Fallback to mock data
  }

  if (!campaign) {
    notFound();
  }

  const progress = campaign.goalAmount > 0 ? (campaign.raisedAmount / campaign.goalAmount) * 100 : 0;

  return (
    <div className="min-h-screen bg-slate-50">
      <section className="bg-white border-b border-slate-200">
        <div className="max-w-5xl mx-auto px-4 py-16 space-y-6">
          <Link href="/campaigns" className="text-sm font-medium text-teal-700 hover:text-teal-800">
            ← Back to campaigns
          </Link>
          <div className="space-y-4">
            <span
              className={`inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold uppercase tracking-wide ${
                statusStyles[campaign.status]
              }`}
            >
              {campaign.status}
            </span>
            <h1 className="text-3xl md:text-4xl font-bold text-slate-900">{campaign.title}</h1>
            <p className="text-lg text-slate-600">{campaign.location}</p>
          </div>
        </div>
      </section>

      <section className="bg-slate-50">
        <div className="max-w-5xl mx-auto px-4 py-16 space-y-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2 space-y-6">
              <div className="bg-white rounded-2xl border border-slate-200 p-8 space-y-4">
                <h2 className="text-2xl font-bold text-slate-900">About this campaign</h2>
                <p className="text-slate-600 leading-relaxed">{campaign.description}</p>
              </div>

              <div className="bg-white rounded-2xl border border-slate-200 p-8 space-y-4">
                <h3 className="text-xl font-semibold text-slate-900">Campaign progress</h3>
                <div className="flex items-center justify-between text-sm">
                  <span className="font-semibold text-slate-900">
                    ₹{campaign.raisedAmount.toLocaleString()}
                  </span>
                  <span className="text-slate-600">of ₹{campaign.goalAmount.toLocaleString()}</span>
                </div>
                <div className="w-full bg-slate-200 rounded-full h-3">
                  <div
                    className="bg-gradient-to-r from-teal-500 to-emerald-500 h-3 rounded-full"
                    style={{ width: `${Math.min(progress, 100)}%` }}
                  ></div>
                </div>
                <div className="text-xs text-slate-500">{Math.round(progress)}% funded</div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-white rounded-2xl border border-slate-200 p-6 space-y-4">
                <h3 className="text-lg font-semibold text-slate-900">Support this campaign</h3>
                <p className="text-sm text-slate-600">
                  Your contribution helps us meet this campaign goal and deliver real change on the ground.
                </p>
                <Link
                  href={`/donate?campaign=${campaign.id}`}
                  className="inline-flex w-full items-center justify-center rounded-lg bg-teal-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:opacity-90"
                >
                  Donate to this campaign
                </Link>
              </div>

              <div className="bg-white rounded-2xl border border-slate-200 p-6">
                <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Category</p>
                <p className="mt-2 text-sm font-medium text-slate-900 capitalize">{campaign.category}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
