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
      title: 'Health & Menstrual Health (3 years)',
      points: [
        { label: 'Health camps over 3 years', value: '306+' },
        { label: 'Eye screenings over 3 years', value: '2,900+' },
        { label: 'Eye surgeries over 3 years', value: '228+' },
        { label: 'Breast cancer screenings over 3 years', value: '1,821+' },
        { label: 'Reusable pads distributed since 2023', value: '10,900+' },
        { label: 'Women reached via menstrual health over 3 years', value: '5,725+' },
        { label: 'Adolescent girls reached via menstrual comics over 3 years', value: '13,200+' },
      ],
      summary: 'Totals are aggregated across the three annual reports, except reusable pads, which are cumulative since 2023.',
    },
    {
      icon: '🎓',
      title: 'Education & Livelihood (3 years)',
      points: [
        { label: 'Women reached via financial literacy over 3 years', value: '14,143+' },
        { label: 'Women trained in employability skills over 3 years', value: '300+' },
        { label: 'Children served at the learning centre since 2023', value: '118' },
      ],
      summary: 'Financial-literacy and employability totals cover all three annual reports; learning-centre service is cumulative since 2023.',
    },
    {
      icon: '🥗',
      title: 'Nutrition & Food Support (3 years)',
      points: [
        { label: 'Nutrition packets distributed over 3 years', value: '2,800+' },
      ],
      summary: 'Total across the three annual reports.',
    },
    {
      icon: '🤝',
      title: 'Community Development (3 years)',
      points: [
        { label: 'Wheelchairs distributed over 3 years', value: '10' },
        { label: 'Household surveys completed over 3 years', value: '575' },
        { label: 'Diversity & Inclusion workshop participants over 3 years', value: '300' },
        { label: 'Kitchen gardens established since 2023', value: '11' },
      ],
      summary: 'Totals are aggregated across the three annual reports, except kitchen gardens, which are cumulative since 2023.',
    },
  ];

  const stories = [
    {
      name: 'Gyaan ka Sagar',
      story: 'Libraries and books were provided across Barhanpur and two neighbouring villages in Palghar.',
      impact: 'Libraries supported learning in Palghar communities',
    },
    {
      name: 'Swaasthya Mela',
      story: 'Free medicines and health check-ups were provided during health campaigns across eight villages.',
      impact: 'Free medicines, health checks and cataract care provided',
    },
    {
      name: 'Dapoli Learning Centre',
      story: 'The learning centre in Dapoli was maintained to serve children in the community.',
      impact: '118 children served since 2023',
    },
  ];

  const growth = [
    { year: '2024-25', beneficiaries: '21,962', asOf: 'March 2025' },
    { year: '2025-26', beneficiaries: '32,000+', asOf: 'March 2026' },
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
            Verified cumulative impact
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <StatCard icon="👥" number="32,000+" label="Lives Impacted" description="Cumulative since 2023" />
            <StatCard icon="💊" number="306+" label="Health Camps" description="Over 3 years" />
            <StatCard icon="🩺" number="1,821+" label="Breast Cancer Screenings" description="Over 3 years" />
            <StatCard icon="📊" number="14,143+" label="Women Reached via Financial Literacy" description="Over 3 years" />
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
            Year-wise Lives Impacted (Cumulative)
          </h2>
          <p className="text-center text-[var(--text-muted)]">Figures are cumulative since 2023; they are not added together.</p>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {growth.map((year) => (
              <div key={year.year} className="rounded-2xl border border-[var(--border-soft)] bg-[var(--surface)] p-6 text-center">
                <div className="font-heading text-4xl font-bold text-[var(--navy)]">{year.year}</div>
                <p className="mt-4 text-[var(--text-muted)]">
                  <span className="font-bold text-[var(--blue)]">{year.beneficiaries}</span>{' '}
                  lives impacted cumulatively as of {year.asOf}
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
              Operating communities span {OPERATING_DISTRICTS.join(', ')}.
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
