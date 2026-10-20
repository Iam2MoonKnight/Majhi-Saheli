import Link from 'next/link';
import { getCampaigns } from '@/lib/supabase-functions';
import { fallbackCampaigns, mapSupabaseCampaigns } from '@/lib/campaigns';
import PageHero from '@/components/PageHero';
import { createPageMetadata } from '@/lib/seo';

export const metadata = createPageMetadata(
  'Campaigns',
  'Explore fundraising campaigns from Mazi Saheli Charitable Trust.',
);

const statusStyles: Record<string, string> = {
  ongoing: 'bg-brand-100 text-brand-800 border-brand-200',
  completed: 'bg-accent-100 text-accent-800 border-accent-200',
  upcoming: 'bg-slate-100 text-slate-800 border-slate-200',
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
    <div className="min-h-screen overflow-hidden">
      <PageHero
        crumbs={[{ label: 'Home', href: '/' }, { label: 'Campaigns' }]}
        eyebrow="Campaigns"
        title="Support our campaigns"
        subtitle="Targeted fundraising efforts to meet urgent needs in education, health, and training for rural women."
      />

      <section className="py-16">
        <div className="editorial-section space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {campaigns.map((campaign) => {
              const progress = campaign.goalAmount > 0 ? (campaign.raisedAmount / campaign.goalAmount) * 100 : 0;

              return (
                <div
                  key={campaign.id}
                  className="rounded-2xl border border-[var(--border-soft)] bg-[var(--surface)] shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg"
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
                      <span className="text-xs capitalize text-[var(--text-muted)]">{campaign.category}</span>
                    </div>
                    <h2 className="font-heading text-2xl font-bold text-[var(--navy)]">{campaign.title}</h2>
                    <p className="line-clamp-3 text-sm text-[var(--text-muted)]">{campaign.description}</p>
                    <p className="text-xs text-[var(--text-muted)]">{campaign.location}</p>

                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <span className="font-semibold text-[var(--navy)]">
                          ₹{campaign.raisedAmount.toLocaleString()}
                        </span>
                        <span className="text-[var(--text-muted)]">
                          of ₹{campaign.goalAmount.toLocaleString()}
                        </span>
                      </div>
                      <div className="h-2 w-full rounded-full bg-[color:rgb(30_58_95_/_0.12)]">
                        <div
                          className="h-2 rounded-full bg-gradient-to-r from-[var(--blue)] to-[var(--accent)]"
                          style={{ width: `${Math.min(progress, 100)}%` }}
                        ></div>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 pt-2">
                      <Link
                        href={`/campaigns/${campaign.id}`}
                        className="inline-flex items-center justify-center rounded-full border border-[var(--navy)] bg-transparent px-3 py-2 text-xs font-semibold text-[var(--navy)] transition hover:bg-[var(--navy)] hover:text-white"
                      >
                        View details
                      </Link>
                      <Link
                        href={`/donate?campaign=${campaign.id}`}
                        className="inline-flex items-center justify-center rounded-full bg-[var(--navy)] px-3 py-2 text-xs font-semibold text-white transition hover:bg-[var(--navy-dark)]"
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

      <section className="border-t border-[var(--border-soft)] bg-[var(--off-white)]">
        <div className="editorial-section space-y-6 py-16 text-center">
          <h2 className="font-heading text-3xl font-bold text-[var(--navy)] md:text-5xl">Want to create your own campaign?</h2>
          <p className="text-lg text-[var(--text-muted)]">
            Partner with us to launch a targeted campaign for a specific cause or community.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-full bg-[var(--navy)] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[var(--navy-dark)]"
          >
            Get in touch
          </Link>
        </div>
      </section>
    </div>
  );
}
