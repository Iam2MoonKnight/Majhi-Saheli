import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getCampaignBySlug } from '@/lib/supabase-functions';
import { getCampaignById, mapSupabaseCampaign } from '@/lib/campaigns';
import { createPageMetadata } from '@/lib/seo';

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const campaign = getCampaignById(id);
  return createPageMetadata(
    campaign ? `Campaign: ${campaign.title}` : 'Fundraising Campaign',
    campaign?.description ?? 'Learn more about a Mazi Saheli Charitable Trust fundraising campaign.',
  );
}

const statusStyles: Record<string, string> = {
  ongoing: 'bg-brand-100 text-brand-800 border-brand-200',
  completed: 'bg-accent-100 text-accent-800 border-accent-200',
  upcoming: 'bg-slate-100 text-slate-800 border-slate-200',
};

export default async function CampaignDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  let campaign = getCampaignById(id);

  try {
    const supabaseCampaign = await getCampaignBySlug(id);
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
    <div className="min-h-screen overflow-hidden">
      <section className="border-b border-white/10 bg-[var(--navy)]">
        <div className="editorial-section space-y-6 py-16">
          <Link href="/campaigns" className="text-sm font-medium text-white/80 hover:text-white">
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
            <h1 className="font-heading text-4xl font-bold text-white md:text-6xl">{campaign.title}</h1>
            <p className="text-lg text-white/80">{campaign.location}</p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="editorial-section space-y-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2 space-y-6">
              <div className="space-y-4 rounded-2xl border border-[var(--border-soft)] bg-[var(--surface)] p-8">
                <h2 className="font-heading text-2xl font-bold text-[var(--navy)]">About this campaign</h2>
                <p className="leading-relaxed text-[var(--text-muted)]">{campaign.description}</p>
              </div>

              <div className="space-y-4 rounded-2xl border border-[var(--border-soft)] bg-[var(--surface)] p-8">
                <h3 className="font-heading text-xl font-semibold text-[var(--navy)]">Campaign progress</h3>
                <div className="flex items-center justify-between text-sm">
                  <span className="font-semibold text-[var(--navy)]">
                    ₹{campaign.raisedAmount.toLocaleString()}
                  </span>
                  <span className="text-[var(--text-muted)]">of ₹{campaign.goalAmount.toLocaleString()}</span>
                </div>
                <div className="h-3 w-full rounded-full bg-[color:rgb(30_58_95_/_0.12)]">
                  <div
                    className="h-3 rounded-full bg-gradient-to-r from-[var(--blue)] to-[var(--accent)]"
                    style={{ width: `${Math.min(progress, 100)}%` }}
                  ></div>
                </div>
                <div className="text-xs text-[var(--text-muted)]">{Math.round(progress)}% funded</div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="space-y-4 rounded-2xl border border-[var(--border-soft)] bg-[var(--surface)] p-6">
                <h3 className="font-heading text-lg font-semibold text-[var(--navy)]">Support this campaign</h3>
                <p className="text-sm text-[var(--text-muted)]">
                  Your contribution helps us meet this campaign goal and deliver real change on the ground.
                </p>
                <Link
                  href={`/donate?campaign=${campaign.id}`}
                  className="inline-flex w-full items-center justify-center rounded-full bg-[var(--navy)] px-4 py-3 text-sm font-semibold text-white transition hover:bg-[var(--navy-dark)]"
                >
                  Donate to this campaign
                </Link>
              </div>

              <div className="rounded-2xl border border-[var(--border-soft)] bg-[var(--surface)] p-6">
                <p className="text-xs font-semibold uppercase tracking-wide text-[var(--text-muted)]">Category</p>
                <p className="mt-2 text-sm font-medium capitalize text-[var(--navy)]">{campaign.category}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
