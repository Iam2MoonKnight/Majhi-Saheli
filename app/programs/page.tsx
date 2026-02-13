import ProgramCard from '@/components/ProgramCard';
import { getPrograms } from '@/lib/supabase-functions';

export default async function Programs() {
  let programs = [];

  try {
    programs = await getPrograms();
  } catch (error) {
    console.error('Error fetching programs:', error);
  }

  // Dummy data if fetch fails
  const dummyPrograms = [
    {
      id: '1',
      title: 'Girl Child Education',
      category: 'education' as const,
      description:
        'Providing quality primary and secondary education to girls in remote rural areas. Includes literacy programs, numeracy skills, and STEM education to prepare girls for higher education and employment.',
      created_at: new Date().toISOString(),
    },
    {
      id: '2',
      title: 'Women Literacy Program',
      category: 'education' as const,
      description:
        'Adult literacy programs for women who missed formal education. Focus on reading, writing, and basic math skills to enable economic and social participation.',
      created_at: new Date().toISOString(),
    },
    {
      id: '3',
      title: 'Health Camps',
      category: 'health' as const,
      description:
        'Regular health check-ups, maternal health awareness, immunization programs, and nutrition counseling for women and children in rural communities.',
      created_at: new Date().toISOString(),
    },
    {
      id: '4',
      title: 'Reproductive Health',
      category: 'health' as const,
      description:
        'Comprehensive reproductive health education and services including family planning, prenatal care, and safe delivery assistance.',
      created_at: new Date().toISOString(),
    },
    {
      id: '5',
      title: 'Vocational Training',
      category: 'training' as const,
      description:
        'Skill development programs including tailoring, handicrafts, agriculture, and food processing to enable women to start their own enterprises.',
      created_at: new Date().toISOString(),
    },
    {
      id: '6',
      title: 'Digital Literacy',
      category: 'training' as const,
      description:
        'Training women in basic computer skills, internet usage, and digital platforms to bridge the digital divide and create employment opportunities.',
      created_at: new Date().toISOString(),
    },
    {
      id: '7',
      title: 'Community Leadership',
      category: 'other' as const,
      description:
        'Empowering women to take leadership roles in their communities, including training in governance and community organization.',
      created_at: new Date().toISOString(),
    },
    {
      id: '8',
      title: 'Economic Empowerment',
      category: 'other' as const,
      description:
        'Support for women entrepreneurs including business training, microfinance, and market linkages to create sustainable livelihoods.',
      created_at: new Date().toISOString(),
    },
  ];

  const displayPrograms = programs.length > 0 ? programs : dummyPrograms;

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero Section */}
      <section className="bg-white border-b border-slate-200">
        <div className="max-w-5xl mx-auto px-4 py-16 space-y-6 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-teal-100 rounded-full mx-auto">
            <div className="w-2 h-2 bg-teal-600 rounded-full"></div>
            <span className="text-xs font-semibold text-teal-900 tracking-wide">OUR PROGRAMS</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900">Our programs</h1>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Comprehensive initiatives supporting every aspect of rural women's empowerment.
          </p>
        </div>
      </section>

      {/* Program Cards */}
      <section className="bg-slate-50">
        <div className="max-w-5xl mx-auto px-4 py-16 space-y-12">
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900">Education programs</h2>
              <p className="text-slate-600 mt-2">Building knowledge and confidence through quality education.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {displayPrograms
                .filter(p => p.category === 'education')
                .map(program => (
                  <ProgramCard key={program.id} program={program} />
                ))}
            </div>
          </div>

          <div className="border-t border-slate-200 pt-12 space-y-6">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900">Health programs</h2>
              <p className="text-slate-600 mt-2">Ensuring health, wellness, and medical care for rural women.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {displayPrograms
                .filter(p => p.category === 'health')
                .map(program => (
                  <ProgramCard key={program.id} program={program} />
                ))}
            </div>
          </div>

          <div className="border-t border-slate-200 pt-12 space-y-6">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900">Skill development</h2>
              <p className="text-slate-600 mt-2">Vocational training for economic independence.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {displayPrograms
                .filter(p => p.category === 'training')
                .map(program => (
                  <ProgramCard key={program.id} program={program} />
                ))}
            </div>
          </div>

          <div className="border-t border-slate-200 pt-12 space-y-6">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900">Other initiatives</h2>
              <p className="text-slate-600 mt-2">Additional empowerment programs and community services.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {displayPrograms
                .filter(p => p.category === 'other')
                .map(program => (
                  <ProgramCard key={program.id} program={program} />
                ))}
            </div>
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="bg-white border-t border-slate-200">
        <div className="max-w-5xl mx-auto px-4 py-16 space-y-8">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 text-center">Program impact</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { label: 'Girls Educated', value: '250+' },
              { label: 'Women Trained', value: '300+' },
              { label: 'Health Services', value: '1000+' },
              { label: 'Communities Served', value: '50+' },
            ].map((stat, idx) => (
              <div key={idx} className="bg-slate-50 rounded-lg p-6 text-center border border-slate-200">
                <div className="text-3xl font-bold text-teal-700 mb-2">{stat.value}</div>
                <div className="text-slate-700 font-medium text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-slate-50 border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-4 py-16 text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Support our programs</h2>
          <p className="text-lg text-slate-600">
            Your donation enables us to continue and expand these life-changing programs.
          </p>
          <a
            href="/donate"
            className="inline-flex items-center justify-center rounded-lg bg-teal-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:opacity-90"
          >
            Donate now
          </a>
        </div>
      </section>
    </div>
  );
}
