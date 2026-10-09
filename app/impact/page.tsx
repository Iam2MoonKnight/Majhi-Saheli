import StatCard from '@/components/StatCard';
import PageHero from '@/components/PageHero';

export default function Impact() {
  const impactPrograms = [
    {
      icon: '📚',
      title: 'Education Program',
      points: [
        { label: 'Girls Enrolled in School', value: '250+' },
        { label: 'Adult Literacy Programs', value: '150+ women' },
        { label: 'School Retention Rate', value: '95%' },
      ],
      summary:
        'Through our education initiatives, we provide scholarships, learning materials, and mentoring to keep girls and women in school.',
    },
    {
      icon: '💊',
      title: 'Health Program',
      points: [
        { label: 'Health Camps Conducted', value: '50+ camps' },
        { label: 'Women Benefited', value: '1000+' },
        { label: 'Awareness Sessions', value: '100+' },
      ],
      summary:
        'Our health work expands access to preventive care, maternal support, and practical awareness in villages with limited facilities.',
    },
    {
      icon: '🎓',
      title: 'Vocational Training',
      points: [
        { label: 'Women Trained', value: '200+ women' },
        { label: 'Skill Categories', value: '8+ skills' },
        { label: 'Employment Rate', value: '75%' },
      ],
      summary:
        'Women gain practical livelihood skills including tailoring, crafts, digital literacy, and agriculture-based micro-enterprise training.',
    },
    {
      icon: '🤝',
      title: 'Community Empowerment',
      points: [
        { label: 'Communities Organized', value: '50+ villages' },
        { label: 'Women Leaders Trained', value: '100+ leaders' },
        { label: 'Community Initiatives', value: '25+ projects' },
      ],
      summary:
        'We support women to take visible leadership roles and launch local projects that improve daily life for families and neighborhoods.',
    },
  ];

  const stories = [
    {
      name: 'Radhika',
      story:
        'Radhika dropped out at age 10. Through our literacy circles, she learned to read and now supports younger girls in her village.',
      impact: 'From student to community educator',
    },
    {
      name: 'Lakshmi',
      story:
        'After tailoring training, Lakshmi started a home-based enterprise and now funds her children’s school expenses independently.',
      impact: 'Economic independence achieved',
    },
    {
      name: 'Jyoti',
      story:
        'Jyoti became a local health volunteer and now leads awareness sessions while helping coordinate village health camps.',
      impact: 'Community health champion',
    },
  ];

  const growth = [
    { year: '2020', beneficiaries: '100+', villages: '5', programs: '3' },
    { year: '2021', beneficiaries: '200+', villages: '15', programs: '5' },
    { year: '2022', beneficiaries: '350+', villages: '35', programs: '7' },
    { year: '2024', beneficiaries: '500+', villages: '50', programs: '8' },
  ];

  return (
    <div className="min-h-screen overflow-hidden">
      <PageHero
        crumbs={[{ label: 'Home', href: '/' }, { label: 'Impact' }]}
        eyebrow="Our Impact"
        title="Measured progress, human stories"
        subtitle="We track outcomes rigorously and stay centered on real change in education, health, livelihoods, and women-led community action."
      />

      <section className="py-16">
        <div className="editorial-section space-y-8">
          <h2 className="font-heading text-center text-3xl font-bold text-[var(--navy)] md:text-4xl">Key metrics</h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <StatCard icon="👩" number="500+" label="Women Trained" description="Direct beneficiaries of our programs" />
            <StatCard icon="👧" number="250+" label="Girls Educated" description="Enrolled in school/education" />
            <StatCard icon="🏘️" number="50+" label="Villages" description="Communities reached annually" />
            <StatCard icon="💊" number="1000+" label="Health Services" description="Medical check-ups conducted" />
          </div>
        </div>
      </section>

      <section className="border-y border-[var(--border-soft)] bg-[var(--off-white)] py-16">
        <div className="editorial-section space-y-8">
          <h2 className="font-heading text-center text-3xl font-bold text-[var(--navy)] md:text-4xl">Program-wise impact</h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {impactPrograms.map((program) => (
              <div key={program.title} className="space-y-5 rounded-2xl border border-[var(--border-soft)] bg-[var(--surface)] p-8">
                <h3 className="flex items-center gap-3 font-heading text-2xl font-semibold text-[var(--navy)]">
                  <span className="text-3xl">{program.icon}</span>
                  {program.title}
                </h3>
                <div className="space-y-4">
                  {program.points.map((point) => (
                    <div key={point.label} className="rounded-xl border border-[var(--border-soft)] bg-white px-4 py-3">
                      <p className="text-xs font-semibold uppercase tracking-wide text-[var(--text-muted)]">{point.label}</p>
                      <p className="mt-1 text-2xl font-bold text-[var(--blue)]">{point.value}</p>
                    </div>
                  ))}
                </div>
                <p className="text-sm leading-relaxed text-[var(--text-muted)]">{program.summary}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="editorial-section space-y-8">
          <h2 className="font-heading text-center text-3xl font-bold text-[var(--navy)] md:text-4xl">Success stories</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {stories.map((story) => (
              <div key={story.name} className="space-y-4 rounded-2xl border border-[var(--border-soft)] bg-[var(--surface)] p-6">
                <h3 className="font-heading text-2xl font-semibold text-[var(--navy)]">{story.name}</h3>
                <p className="leading-relaxed text-[var(--text-muted)]">{story.story}</p>
                <div className="inline-flex rounded-full bg-[color:rgb(232_93_117_/_0.15)] px-3 py-1 text-xs font-semibold uppercase tracking-wide text-[var(--accent)]">
                  {story.impact}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-[var(--border-soft)] bg-[var(--off-white)] py-16">
        <div className="editorial-section space-y-8">
          <h2 className="font-heading text-center text-3xl font-bold text-[var(--navy)] md:text-4xl">Growth over years</h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {growth.map((year) => (
              <div key={year.year} className="rounded-2xl border border-[var(--border-soft)] bg-[var(--surface)] p-6 text-center">
                <div className="font-heading text-4xl font-bold text-[var(--navy)]">{year.year}</div>
                <div className="mt-4 space-y-3 text-sm">
                  <p className="text-[var(--text-muted)]">
                    <span className="font-bold text-[var(--blue)]">{year.beneficiaries}</span> Beneficiaries
                  </p>
                  <p className="text-[var(--text-muted)]">
                    <span className="font-bold text-[var(--blue)]">{year.villages}</span> Villages
                  </p>
                  <p className="text-[var(--text-muted)]">
                    <span className="font-bold text-[var(--blue)]">{year.programs}</span> Programs
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="editorial-section text-center space-y-6">
          <h2 className="font-heading text-4xl font-bold text-[var(--navy)] md:text-5xl">Be part of this impact</h2>
          <p className="mx-auto max-w-2xl text-lg text-[var(--text-muted)]">
            Help us reach more women and communities. Every contribution fuels long-term, measurable change.
          </p>
          <a
            href="/donate"
            className="inline-flex items-center justify-center rounded-full bg-[var(--accent)] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[var(--accent-warm)]"
          >
            Donate now
          </a>
        </div>
      </section>
    </div>
  );
}
