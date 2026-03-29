import HeroSection from '@/components/HeroSection';
import ProgramCard from '@/components/ProgramCard';
import StatCard from '@/components/StatCard';
import TestimonialCard from '@/components/TestimonialCard';
import Link from 'next/link';
import { getCampaigns, getPrograms } from '@/lib/supabase-functions';
import { fallbackCampaigns, getFeaturedCampaign, mapSupabaseCampaigns } from '@/lib/campaigns';

export default async function Home() {
  let programs = [];
  let campaigns = fallbackCampaigns;

  try {
    programs = await getPrograms();
  } catch (error) {
    console.error('Error fetching programs:', error);
  }

  try {
    const supabaseCampaigns = await getCampaigns(true);
    if (supabaseCampaigns.length > 0) {
      campaigns = mapSupabaseCampaigns(supabaseCampaigns);
    }
  } catch (error) {
    console.error('Error fetching campaigns:', error);
  }

  // Dummy programs data if fetch fails
  const dummyPrograms = [
    {
      id: '1',
      title: 'Girl Child Education',
      category: 'education' as const,
      description: 'Providing quality education to girls in rural areas, focusing on literacy and numeracy.',
      created_at: new Date().toISOString(),
    },
    {
      id: '2',
      title: 'Women Health Camps',
      category: 'health' as const,
      description: 'Regular health check-ups, maternal health awareness, and nutrition programs for women.',
      created_at: new Date().toISOString(),
    },
    {
      id: '3',
      title: 'Vocational Training',
      category: 'training' as const,
      description: 'Skill development programs including tailoring, handicrafts, and digital literacy.',
      created_at: new Date().toISOString(),
    },
    {
      id: '4',
      title: 'Community Leadership',
      category: 'other' as const,
      description: 'Empowering women to take leadership roles in their communities.',
      created_at: new Date().toISOString(),
    },
  ];

  const displayPrograms = programs.length > 0 ? programs : dummyPrograms;
  const featuredCampaign = getFeaturedCampaign(campaigns);
  const progress = featuredCampaign.goalAmount > 0 ? (featuredCampaign.raisedAmount / featuredCampaign.goalAmount) * 100 : 0;

  return (
    <div className="overflow-hidden">
      <HeroSection />

      {/* Featured Campaign */}
      <section className="bg-transparent">
        <div className="editorial-section space-y-8 py-16">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 rounded-full bg-[color:rgb(30_58_95_/_0.12)] px-4 py-2">
                <div className="h-2 w-2 rounded-full bg-[var(--blue)]"></div>
                <span className="section-eyebrow text-[var(--navy)]">Latest Campaign</span>
              </div>
              <h2 className="font-heading text-3xl font-bold text-[var(--navy)] md:text-5xl">Featured campaign</h2>
              <p className="max-w-2xl text-[var(--text-muted)]">
                Direct, time-bound initiatives that bring immediate support to women and communities.
              </p>
            </div>
            <Link
              href="/campaigns"
              className="inline-flex items-center justify-center rounded-full border border-[var(--navy)] bg-[var(--surface)] px-5 py-2.5 text-sm font-medium text-[var(--navy)] transition hover:bg-[var(--navy)] hover:text-white"
            >
              View all campaigns
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-8 rounded-3xl border border-[var(--border-soft)] bg-[var(--surface)] p-8 lg:grid-cols-3">
            <div className="lg:col-span-2 space-y-4">
              <h3 className="font-heading text-2xl font-bold text-[var(--navy)]">{featuredCampaign.title}</h3>
              <p className="leading-relaxed text-[var(--text-muted)]">{featuredCampaign.description}</p>
              <p className="text-sm font-medium text-[var(--text-muted)]">{featuredCampaign.location}</p>
            </div>
            <div className="space-y-4">
              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="font-semibold text-[var(--navy)]">
                    ₹{featuredCampaign.raisedAmount.toLocaleString()}
                  </span>
                  <span className="text-[var(--text-muted)]">
                    of ₹{featuredCampaign.goalAmount.toLocaleString()}
                  </span>
                </div>
                <div className="h-3 w-full rounded-full bg-[color:rgb(30_58_95_/_0.12)]">
                  <div
                    className="h-3 rounded-full bg-gradient-to-r from-[var(--blue)] to-[var(--accent)]"
                    style={{ width: `${Math.min(progress, 100)}%` }}
                  ></div>
                </div>
                <div className="text-xs text-[var(--text-muted)]">{Math.round(progress)}% funded</div>
              </div>
              <Link
                href={`/campaigns/${featuredCampaign.id}`}
                className="inline-flex w-full items-center justify-center rounded-full bg-[var(--accent)] px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-[var(--accent-warm)]"
              >
                Support this campaign
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="bg-[color:rgb(255_255_255_/_0.5)]">
        <div className="editorial-section space-y-8 py-16">
          <div className="text-center space-y-4">
            <div className="inline-flex items-center gap-2 rounded-full bg-[color:rgb(42_123_111_/_0.12)] px-4 py-2">
              <div className="h-2 w-2 rounded-full bg-[var(--teal)]"></div>
              <span className="section-eyebrow text-[var(--navy)]">Our Programs</span>
            </div>
            <h2 className="font-heading text-3xl font-bold text-[var(--navy)] md:text-5xl">Making impact together</h2>
            <p className="mx-auto max-w-2xl text-[var(--text-muted)]">
              Comprehensive initiatives supporting rural women's growth and sustainable community development.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {displayPrograms.map((program) => (
              <ProgramCard key={program.id} program={program} />
            ))}
          </div>

          <div className="flex items-center justify-center">
            <Link
              href="/programs"
              className="inline-flex items-center justify-center rounded-full bg-[var(--accent)] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[var(--accent-warm)]"
            >
              Explore all programs
            </Link>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="bg-[color:rgb(30_58_95_/_0.06)]">
        <div className="editorial-section space-y-8 py-16">
          <div className="text-center space-y-4">
            <div className="inline-flex items-center gap-2 rounded-full bg-[color:rgb(232_131_74_/_0.12)] px-4 py-2">
              <div className="h-2 w-2 rounded-full bg-[var(--accent)]"></div>
              <span className="section-eyebrow text-[var(--navy)]">Our Impact</span>
            </div>
            <h2 className="font-heading text-3xl font-bold text-[var(--navy)] md:text-5xl">Creating lasting change</h2>
            <p className="mx-auto max-w-2xl text-[var(--text-muted)]">
              Transforming lives in rural communities through education, health, and empowerment.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <StatCard icon="👩" number="2,500+" label="Lives Impacted" description="Direct beneficiaries" />
            <StatCard icon="🏘️" number="50+" label="Villages Reached" description="Across Maharashtra" />
            <StatCard icon="💊" number="100+" label="Health Camps" description="Medical services" />
            <StatCard icon="🎓" number="15+" label="Active Programs" description="Ongoing initiatives" />
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-transparent">
        <div className="editorial-section space-y-8 py-16">
          <div className="text-center space-y-4">
            <div className="inline-flex items-center gap-2 rounded-full bg-[color:rgb(212_168_67_/_0.16)] px-4 py-2">
              <div className="h-2 w-2 rounded-full bg-[var(--gold)]"></div>
              <span className="section-eyebrow text-[var(--navy)]">Success Stories</span>
            </div>
            <h2 className="font-heading text-3xl font-bold text-[var(--navy)] md:text-5xl">Voices of change</h2>
            <p className="mx-auto max-w-2xl text-[var(--text-muted)]">
              Real stories from women whose lives have been transformed.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <TestimonialCard
              name="Meera Patil"
              role="Education Program Graduate"
              content="Saheli gave me the confidence to educate my children. They taught me how important education is for our family's future and breaking generational poverty."
            />
            <TestimonialCard
              name="Priya Sharma"
              role="Vocational Training Participant"
              content="I learned tailoring through Saheli and now I earn a sustainable living from home. It has provided economic independence for my family."
            />
            <TestimonialCard
              name="Anjali Deshmukh"
              role="Health Program Beneficiary"
              content="Thanks to the health camps, I received proper medical guidance. I'm now a health volunteer helping other women in my village."
            />
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="bg-[color:rgb(42_123_111_/_0.06)]">
        <div className="editorial-section space-y-8 py-16">
          <div className="text-center space-y-4">
            <div className="inline-flex items-center gap-2 rounded-full bg-[color:rgb(30_58_95_/_0.12)] px-4 py-2">
              <div className="h-2 w-2 rounded-full bg-[var(--blue)]"></div>
              <span className="section-eyebrow text-[var(--navy)]">Partnerships</span>
            </div>
            <h2 className="font-heading text-3xl font-bold text-[var(--navy)] md:text-5xl">Trusted partners</h2>
            <p className="mx-auto max-w-2xl text-[var(--text-muted)]">Collaborating for sustainable social impact.</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="flex h-32 items-center justify-center rounded-2xl border border-[var(--border-soft)] bg-[var(--surface)] p-8 transition-all hover:-translate-y-1 hover:shadow-md"
              >
                <div className="text-center">
                  <div className="font-heading text-3xl font-bold text-[color:rgb(26_26_46_/_0.38)]">Partner</div>
                  <p className="mt-1 text-xs text-[color:rgb(26_26_46_/_0.45)]">Logo</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[var(--navy)] via-[var(--blue)] to-[var(--teal)]">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
            backgroundSize: '40px 40px',
          }}
        ></div>

        <div className="relative z-10 mx-auto max-w-4xl space-y-6 px-4 py-16 text-center">
          <h2 className="font-heading text-4xl font-bold text-white md:text-5xl">Be part of the change</h2>
          <p className="mx-auto max-w-2xl text-lg text-white/85">
            Every contribution helps transform the lives of rural women. Join us in creating lasting impact in
            communities across rural India.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/donate"
              className="inline-flex items-center justify-center rounded-full bg-[var(--accent)] px-6 py-3 text-sm font-semibold text-white shadow-[0_10px_28px_rgba(232,131,74,0.35)] transition hover:bg-[var(--accent-warm)]"
            >
              Support our mission
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full border border-white px-6 py-3 text-sm font-semibold text-white transition hover:bg-white hover:text-[var(--navy)]"
            >
              Get in touch
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
