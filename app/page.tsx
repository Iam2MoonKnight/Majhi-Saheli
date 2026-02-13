import HeroSection from '@/components/HeroSection';
import ProgramCard from '@/components/ProgramCard';
import StatCard from '@/components/StatCard';
import TestimonialCard from '@/components/TestimonialCard';
import Link from 'next/link';
import { getPrograms } from '@/lib/supabase-functions';

export default async function Home() {
  let programs = [];
  
  try {
    programs = await getPrograms();
  } catch (error) {
    console.error('Error fetching programs:', error);
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

  return (
    <div>
      {/* Hero Section */}
      <HeroSection />

      {/* Programs Section */}
      <section className="bg-neutral-50">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-16 lg:mb-20 space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-violet-100 rounded-full">
              <div className="w-2 h-2 bg-violet-600 rounded-full"></div>
              <span className="text-sm font-semibold text-violet-900 tracking-wide">OUR PROGRAMS</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-neutral-900">Making Impact Together</h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto leading-relaxed">Comprehensive initiatives supporting rural women's growth and sustainable community development</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {displayPrograms.map((program) => (
              <ProgramCard key={program.id} program={program} />
            ))}
          </div>

          <div className="flex items-center justify-center">
            <Link
              href="/programs"
              className="group inline-flex items-center justify-center px-8 py-4 bg-violet-600 text-white font-semibold rounded-lg hover:bg-violet-700 transition-all duration-200 shadow-lg shadow-violet-600/30 hover:shadow-xl hover:-translate-y-0.5"
            >
              Explore All Programs
              <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-16 lg:mb-20 space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-violet-100 rounded-full">
              <div className="w-2 h-2 bg-violet-600 rounded-full"></div>
              <span className="text-sm font-semibold text-violet-900 tracking-wide">OUR IMPACT</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-neutral-900">Creating Lasting Change</h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto leading-relaxed">Transforming lives in rural communities through education, health, and empowerment</p>
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
      <section className="bg-neutral-50">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-16 lg:mb-20 space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-violet-100 rounded-full">
              <div className="w-2 h-2 bg-violet-600 rounded-full"></div>
              <span className="text-sm font-semibold text-violet-900 tracking-wide">SUCCESS STORIES</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-neutral-900">Voices of Change</h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto leading-relaxed">Real stories from women whose lives have been transformed</p>
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
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-16 space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-violet-100 rounded-full">
              <div className="w-2 h-2 bg-violet-600 rounded-full"></div>
              <span className="text-sm font-semibold text-violet-900 tracking-wide">PARTNERSHIPS</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-neutral-900">Trusted Partners</h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto leading-relaxed">Collaborating for sustainable social impact</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="bg-neutral-50 rounded-lg p-8 flex items-center justify-center h-32 border border-neutral-200 hover:border-neutral-300 hover:shadow-md transition-all"
              >
                <div className="text-center">
                  <div className="text-3xl font-bold text-neutral-300">Partner</div>
                  <p className="text-xs text-neutral-400 mt-1">Logo</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative bg-gradient-to-br from-violet-600 via-violet-700 to-purple-800 overflow-hidden">
        {/* Subtle pattern overlay */}
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }}></div>
        
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 text-center relative z-10">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">Be Part of the Change</h2>
          <p className="text-lg lg:text-xl text-violet-100 mb-10 leading-relaxed max-w-2xl mx-auto">
            Every contribution helps transform the lives of rural women. Join us in creating lasting impact in communities across rural India.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/donate"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-violet-600 font-semibold rounded-lg hover:bg-neutral-50 transition-all duration-200 shadow-xl hover:-translate-y-0.5"
            >
              Support Our Mission
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-violet-600 transition-all duration-200"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
