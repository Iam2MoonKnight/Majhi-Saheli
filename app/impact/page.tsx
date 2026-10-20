import Link from 'next/link';
import StatCard from '@/components/StatCard';
import PageHero from '@/components/PageHero';
import SectionEyebrow from '@/components/SectionEyebrow';
import { OPERATING_DISTRICTS } from '@/lib/organization';
import { createPageMetadata } from '@/lib/seo';

export const metadata = createPageMetadata(
  'Our Impact',
  'Review Mazi Saheli Charitable Trust programme outcomes, operating districts, and annual reports.',
);

export default function Impact() {
  const impactPrograms = [
    {
      icon: '📚',
      title: 'Health Achievements (2025-26)',
      points: [
        { label: 'Health Camps Conducted', value: '80+' },
        { label: 'General Health Beneficiaries', value: '2,500+' },
        { label: 'Eye Screenings & Cataract Surgeries', value: '800+ & 70+' },
        { label: 'Women Screened for Breast Cancer', value: '1,821+' },
        { label: 'Reusable Pads Distributed', value: '10,000+' },
        { label: 'Menstrupedia Comics Distributed', value: '13,000+' },
      ],
      summary:
        'The 2025-26 report records health camps, screenings, surgeries, reusable pads and Menstrupedia comics.',
    },
    {
      icon: '🎓',
      title: 'Education & Livelihood Achievements (2025-26)',
      points: [
        { label: 'Trained in Financial Literacy', value: '3,000+' },
        { label: 'Women Trained in Employability Skills', value: '300+' },
      ],
      summary:
        'The 2025-26 report records financial-literacy training and employability-skills training for women.',
    },
    {
      icon: '🥗',
      title: 'Nutrition & Food Support (2025-26)',
      points: [
        { label: 'Food Packets & Nutrition Support Distributed', value: '2,800+' },
      ],
      summary: 'The annual report records food packets and nutrition support distribution.',
    },
    {
      icon: '🤝',
      title: 'Financial Literacy (2024-25)',
      points: [
        { label: 'Women Reached', value: '4,333' },
      ],
      summary: 'The 2024-25 annual report records women reached through the financial-literacy programme.',
    },
  ];

  const stories = [
    {
      name: 'Gyaan ka Sagar',
      story: 'Libraries and books were provided across Barhanpur and two neighbouring villages in Palghar.',
      impact: '88 students catered to',
    },
    {
      name: 'Swaasthya Mela',
      story: 'Free medicines and health check-ups were provided during health campaigns across eight villages.',
      impact: '762 medicine recipients; 12 cataract operations',
    },
    {
      name: 'Dapoli Learning Centre',
      story: 'The learning centre in Dapoli was maintained to serve children in the community.',
      impact: '30 children served daily',
    },
  ];

  const growth = [
    { year: '2024-25', beneficiaries: '21,962' },
    { year: '2025-26', beneficiaries: '32,000+' },
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
          <h2 className="font-heading text-center text-3xl font-bold text-[var(--navy)] md:text-4xl">
            Verified 2025-26 metrics
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <StatCard icon="👥" number="32,000+" label="Lives Impacted" description="Across communities in 2025-26" />
            <StatCard icon="💊" number="80+" label="Health Camps" description="Conducted in 2025-26" />
            <StatCard icon="🩺" number="1,821+" label="Women Screened" description="For breast cancer in 2025-26" />
            <StatCard icon="📍" number="8" label="Districts" description="Operating districts listed for 2025-26" />
          </div>
        </div>
      </section>

      <section className="bg-[var(--navy)] py-16">
        <div className="editorial-section space-y-8">
          <h2 className="font-heading text-center text-3xl font-bold text-white md:text-4xl">
            Programme achievements
          </h2>

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
          <h2 className="font-heading text-center text-3xl font-bold text-[var(--navy)] md:text-4xl">
            Reported Field Outcomes
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {stories.map((story) => (
              <div key={story.name} className="space-y-4 rounded-2xl border border-[var(--border-soft)] bg-[var(--surface)] p-6">
                <h3 className="font-heading text-2xl font-semibold text-[var(--navy)]">{story.name}</h3>
                <p className="leading-relaxed text-[var(--text-muted)]">{story.story}</p>
                <div className="inline-flex rounded-full bg-[color:rgb(232_93_117_/_0.15)] px-3 py-1 text-xs font-semibold uppercase tracking-wide text-[var(--navy)]">
                  {story.impact}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-[var(--border-soft)] bg-[var(--off-white)] py-16">
        <div className="editorial-section space-y-8">
          <h2 className="font-heading text-center text-3xl font-bold text-[var(--navy)] md:text-4xl">
            Year-wise Impact Progression
          </h2>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {growth.map((year) => (
              <div key={year.year} className="rounded-2xl border border-[var(--border-soft)] bg-[var(--surface)] p-6 text-center">
                <div className="font-heading text-4xl font-bold text-[var(--navy)]">{year.year}</div>
                <p className="mt-4 text-[var(--text-muted)]">
                  <span className="font-bold text-[var(--blue)]">{year.beneficiaries}</span>{' '}
                  {year.year === '2024-25' ? 'lives reached' : 'lives impacted'}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-[var(--navy)]">
        <div className="container-x grid grid-cols-1 gap-10 lg:grid-cols-2">
          <div className="space-y-6">
            <h2 className="font-heading text-3xl font-extrabold text-white md:text-4xl">Geographic Reach</h2>
            <p className="text-sm leading-relaxed text-white/80">
              The 2025-26 operating districts are {OPERATING_DISTRICTS.join(', ')}.
            </p>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
              {OPERATING_DISTRICTS.map((district) => (
                <div key={district} className="card p-4 text-center text-sm font-semibold text-[var(--navy)]">
                  {district}
                </div>
              ))}
            </div>
          </div>
          <div
            role="img"
            aria-label="Placeholder: Maharashtra map to be provided"
            className="flex min-h-64 items-center justify-center rounded-2xl bg-gray-200 p-6 text-center text-sm text-[var(--text-muted)]"
          >
            Placeholder: Maharashtra map to be provided
          </div>
        </div>
      </section>

      <section id="annual-reports" className="section">
        <div className="container-x space-y-8">
          <div className="mx-auto max-w-3xl text-center">
            <SectionEyebrow className="mb-4">Transparency</SectionEyebrow>
            <h2 className="font-heading text-3xl font-bold text-[var(--navy)] md:text-4xl">Annual Reports</h2>
            <p className="mx-auto mt-4 max-w-[65ch] text-base text-[var(--text-muted)] md:text-lg">
              Download the annual reports.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {[
              { year: '2023-24', description: 'Aug 2023 – Mar 2024', file: 'msct-annual-report-2023-24.pdf' },
              { year: '2024-25', description: '', file: 'msct-annual-report-2024-25.pdf' },
              { year: '2025-26', description: '', file: 'msct-annual-report-2025-26.pdf' },
            ].map((report) => (
              <Link
                key={report.file}
                href={`/reports/${report.file}`}
                className="card card-hover flex flex-col items-start gap-5 rounded-xl p-6 shadow-sm"
              >
                <div>
                  <p className="inline-flex rounded-full bg-[color:rgb(232_93_117_/_0.12)] px-3 py-1 text-sm font-semibold uppercase tracking-wide text-[var(--navy)]">
                    {report.year}
                  </p>
                  <h3 className="mt-2 font-heading text-xl font-semibold text-[var(--navy)]">Annual Report</h3>
                  {report.description && <p className="mt-2 text-sm text-[var(--text-muted)]">{report.description}</p>}
                </div>
                <span className="inline-flex items-center rounded-full bg-[var(--navy)] px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-[var(--navy-dark)]">
                  PDF
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container-x max-w-3xl text-center">
          <h2 className="font-heading text-2xl font-extrabold text-[var(--navy)]">Methodology</h2>
          <p className="mt-3 text-sm leading-relaxed text-[var(--text-muted)]">
            Metrics are aggregated from verified field reports, camps, and partner-collaborated initiatives.
          </p>
        </div>
      </section>

      <section className="bg-[var(--navy)] py-16">
        <div className="editorial-section text-center space-y-6">
          <h2 className="font-heading text-4xl font-bold text-white md:text-5xl">Be part of this impact</h2>
          <p className="mx-auto max-w-2xl text-lg text-white/80">
            Help us reach more women and communities. Every contribution fuels long-term, measurable change.
          </p>
          <a
            href="/donate"
            className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-[var(--navy)] transition hover:bg-[var(--off-white)]"
          >
            Donate now
          </a>
        </div>
      </section>
    </div>
  );
}
