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
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-rose-50 to-pink-50 py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">Our Programs</h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Comprehensive initiatives supporting every aspect of rural women's empowerment
          </p>
        </div>
      </section>

      {/* Program Cards */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Education Programs</h2>
            <p className="text-gray-700 mb-8">Building knowledge and confidence through quality education</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {displayPrograms
                .filter(p => p.category === 'education')
                .map(program => (
                  <ProgramCard key={program.id} program={program} />
                ))}
            </div>
          </div>

          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Health Programs</h2>
            <p className="text-gray-700 mb-8">Ensuring health, wellness, and medical care for rural women</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {displayPrograms
                .filter(p => p.category === 'health')
                .map(program => (
                  <ProgramCard key={program.id} program={program} />
                ))}
            </div>
          </div>

          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Skill Development</h2>
            <p className="text-gray-700 mb-8">Vocational training for economic independence</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {displayPrograms
                .filter(p => p.category === 'training')
                .map(program => (
                  <ProgramCard key={program.id} program={program} />
                ))}
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Other Initiatives</h2>
            <p className="text-gray-700 mb-8">Additional empowerment programs and community services</p>
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
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Program Impact</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { label: 'Girls Educated', value: '250+' },
              { label: 'Women Trained', value: '300+' },
              { label: 'Health Services', value: '1000+' },
              { label: 'Communities Served', value: '50+' },
            ].map((stat, idx) => (
              <div key={idx} className="bg-white rounded-lg p-8 text-center shadow-md">
                <div className="text-4xl font-bold text-rose-600 mb-2">{stat.value}</div>
                <div className="text-gray-700 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-gradient-to-r from-rose-500 to-pink-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Support Our Programs</h2>
          <p className="text-lg mb-8">Your donation enables us to continue and expand these life-changing programs.</p>
          <button className="px-8 py-3 bg-white text-rose-600 font-bold rounded-lg hover:bg-gray-100 transition">
            Donate Now
          </button>
        </div>
      </section>
    </div>
  );
}
