import ProgramCard from '@/components/ProgramCard';
import { getPrograms } from '@/lib/supabase-functions';
import Link from 'next/link';
import PageHero from '@/components/PageHero';

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
    <div className="min-h-screen overflow-hidden">
      <PageHero
        crumbs={[{ label: 'Home', href: '/' }, { label: 'Programs' }]}
        eyebrow="Our Programs"
        title="Programs that convert intent into impact"
        subtitle="Integrated interventions spanning education, healthcare, livelihoods, and community leadership."
      />

      <section className="py-16">
        <div className="editorial-section space-y-12">
          <div className="space-y-6">
            <div>
              <h2 className="font-heading text-3xl font-bold text-[var(--navy)] md:text-4xl">Education programs</h2>
              <p className="mt-2 text-[var(--text-muted)]">Building knowledge, confidence, and pathways to long-term opportunity.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {displayPrograms
                .filter(p => p.category === 'education')
                .map(program => (
                  <ProgramCard key={program.id} program={program} />
                ))}
            </div>
          </div>

          <div className="border-t border-[var(--border-soft)] pt-12 space-y-6">
            <div>
              <h2 className="font-heading text-3xl font-bold text-[var(--navy)] md:text-4xl">Health programs</h2>
              <p className="mt-2 text-[var(--text-muted)]">Preventive care, maternal health, and access to essential services.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {displayPrograms
                .filter(p => p.category === 'health')
                .map(program => (
                  <ProgramCard key={program.id} program={program} />
                ))}
            </div>
          </div>

          <div className="border-t border-[var(--border-soft)] pt-12 space-y-6">
            <div>
              <h2 className="font-heading text-3xl font-bold text-[var(--navy)] md:text-4xl">Skill development</h2>
              <p className="mt-2 text-[var(--text-muted)]">Vocational and digital capability-building for financial resilience.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {displayPrograms
                .filter(p => p.category === 'training')
                .map(program => (
                  <ProgramCard key={program.id} program={program} />
                ))}
            </div>
          </div>

          <div className="border-t border-[var(--border-soft)] pt-12 space-y-6">
            <div>
              <h2 className="font-heading text-3xl font-bold text-[var(--navy)] md:text-4xl">Other initiatives</h2>
              <p className="mt-2 text-[var(--text-muted)]">Leadership, collectives, and community-first support models.</p>
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

      <section className="border-y border-[var(--border-soft)] bg-[var(--off-white)] py-16">
        <div className="editorial-section space-y-8">
          <h2 className="font-heading text-center text-3xl font-bold text-[var(--navy)] md:text-4xl">Program impact</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { label: 'Girls Educated', value: '250+' },
              { label: 'Women Trained', value: '300+' },
              { label: 'Health Services', value: '1000+' },
              { label: 'Communities Served', value: '50+' },
            ].map((stat, idx) => (
              <div key={idx} className="rounded-2xl border border-[var(--border-soft)] bg-[var(--surface)] p-6 text-center">
                <div className="font-heading mb-2 text-4xl font-bold text-[var(--navy)]">{stat.value}</div>
                <div className="text-sm font-medium text-[var(--text-muted)]">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="editorial-section text-center space-y-6">
          <h2 className="font-heading text-3xl font-bold text-[var(--navy)] md:text-5xl">Support our programs</h2>
          <p className="text-lg text-[var(--text-muted)]">
            Your donation enables us to continue and expand these life-changing programs.
          </p>
          <Link
            href="/donate"
            className="inline-flex items-center justify-center rounded-full bg-[var(--accent)] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[var(--accent-warm)]"
          >
            Donate now
          </Link>
        </div>
      </section>
    </div>
  );
}
