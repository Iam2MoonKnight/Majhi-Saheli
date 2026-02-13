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
    <div>
      <HeroSection />

      {/* Featured Campaign */}
      <section className="bg-slate-50">
        <div className="max-w-5xl mx-auto px-4 py-16 space-y-8">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-teal-100 rounded-full">
                <div className="w-2 h-2 bg-teal-600 rounded-full"></div>
                <span className="text-xs font-semibold text-teal-900 tracking-wide">LATEST CAMPAIGN</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Featured campaign</h2>
              <p className="text-slate-600 max-w-2xl">
                Direct, time-bound initiatives that bring immediate support to women and communities.
              </p>
            </div>
            <Link
              href="/campaigns"
              className="inline-flex items-center justify-center rounded-lg border border-teal-200 bg-white px-4 py-2 text-sm font-medium text-teal-700 shadow-sm transition hover:bg-teal-50"
            >
              View all campaigns
            </Link>
          </div>

          <div className="bg-white rounded-2xl border border-slate-200 p-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-4">
              <h3 className="text-2xl font-bold text-slate-900">{featuredCampaign.title}</h3>
              <p className="text-slate-600 leading-relaxed">{featuredCampaign.description}</p>
              <p className="text-sm font-medium text-slate-500">{featuredCampaign.location}</p>
            </div>
            <div className="space-y-4">
              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="font-semibold text-slate-900">
                    ₹{featuredCampaign.raisedAmount.toLocaleString()}
                  </span>
                  <span className="text-slate-600">
                    of ₹{featuredCampaign.goalAmount.toLocaleString()}
                  </span>
                </div>
                <div className="w-full bg-slate-200 rounded-full h-3">
                  <div
                    className="bg-gradient-to-r from-teal-500 to-emerald-500 h-3 rounded-full"
                    style={{ width: `${Math.min(progress, 100)}%` }}
                  ></div>
                </div>
                <div className="text-xs text-slate-500">{Math.round(progress)}% funded</div>
              </div>
              <Link
                href={`/campaigns/${featuredCampaign.id}`}
                className="inline-flex w-full items-center justify-center rounded-lg bg-teal-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:opacity-90"
              >
                Support this campaign
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="bg-white">
        <div className="max-w-5xl mx-auto px-4 py-16 space-y-8">
          <div className="text-center space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-teal-100 rounded-full">
              <div className="w-2 h-2 bg-teal-600 rounded-full"></div>
              <span className="text-xs font-semibold text-teal-900 tracking-wide">OUR PROGRAMS</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Making impact together</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
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
              className="inline-flex items-center justify-center rounded-lg bg-teal-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:opacity-90"
            >
              Explore all programs
            </Link>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="bg-slate-50">
        <div className="max-w-5xl mx-auto px-4 py-16 space-y-8">
          <div className="text-center space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-teal-100 rounded-full">
              <div className="w-2 h-2 bg-teal-600 rounded-full"></div>
              <span className="text-xs font-semibold text-teal-900 tracking-wide">OUR IMPACT</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Creating lasting change</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
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
      <section className="bg-white">
        <div className="max-w-5xl mx-auto px-4 py-16 space-y-8">
          <div className="text-center space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-teal-100 rounded-full">
              <div className="w-2 h-2 bg-teal-600 rounded-full"></div>
              <span className="text-xs font-semibold text-teal-900 tracking-wide">SUCCESS STORIES</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Voices of change</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
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
      <section className="bg-slate-50">
        <div className="max-w-5xl mx-auto px-4 py-16 space-y-8">
          <div className="text-center space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-teal-100 rounded-full">
              <div className="w-2 h-2 bg-teal-600 rounded-full"></div>
              <span className="text-xs font-semibold text-teal-900 tracking-wide">PARTNERSHIPS</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Trusted partners</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">Collaborating for sustainable social impact.</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="bg-white rounded-lg p-8 flex items-center justify-center h-32 border border-slate-200 hover:border-slate-300 hover:shadow-md transition-all"
              >
                <div className="text-center">
                  <div className="text-3xl font-bold text-slate-300">Partner</div>
                  <p className="text-xs text-slate-400 mt-1">Logo</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative bg-gradient-to-br from-teal-600 via-teal-700 to-emerald-800 overflow-hidden">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
            backgroundSize: '40px 40px',
          }}
        ></div>

        <div className="max-w-4xl mx-auto px-4 py-16 text-center relative z-10 space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Be part of the change</h2>
          <p className="text-lg text-teal-100 max-w-2xl mx-auto">
            Every contribution helps transform the lives of rural women. Join us in creating lasting impact in
            communities across rural India.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/donate"
              className="inline-flex items-center justify-center rounded-lg bg-white px-4 py-2 text-sm font-semibold text-teal-700 shadow-sm transition hover:opacity-90"
            >
              Support our mission
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-lg border border-white px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-white hover:text-teal-700"
            >
              Get in touch
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
