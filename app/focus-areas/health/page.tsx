import Link from 'next/link';
import Image from 'next/image';
import { createPageMetadata } from '@/lib/seo';

export const metadata = createPageMetadata(
  'Health & Hygiene',
  'Explore Mazi Saheli Charitable Trust health and hygiene programmes.',
);

export default function HealthPage() {
  return (
    <div className="overflow-hidden">
      {/* Header */}
      <section className="bg-gradient-to-br from-[var(--navy)] via-[var(--blue)] to-[var(--teal)] py-16">
        <div className="editorial-section">
          <Link href="/" className="mb-4 inline-flex items-center text-white/80 hover:text-white transition-colors">
            <span className="mr-2">←</span> Back to Home
          </Link>
          <h1 className="font-heading text-5xl font-bold text-white mt-4">🏥 Health & Hygiene</h1>
          <p className="mt-4 text-lg text-white/85 max-w-2xl">
            Providing accessible healthcare and hygiene education to underserved communities.
          </p>
        </div>
      </section>

      {/* Overview */}
      <section className="py-16">
        <div className="editorial-section space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h2 className="font-heading text-4xl font-bold text-[var(--navy)]">Our Impact</h2>
              <div className="space-y-4 text-[var(--text-muted)]">
                <p>
                  Our health initiatives reach vulnerable communities through medical camps, wellness programs, and health education.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="mr-3 text-[var(--accent)] font-bold">•</span>
                    <span><strong>80+ health camps</strong> conducted in 2025-26</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 text-[var(--accent)] font-bold">•</span>
                    <span><strong>1,821+ women</strong> screened for breast cancer in 2025-26</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 text-[var(--accent)] font-bold">•</span>
                    <span><strong>2,500+ general health beneficiaries</strong> in 2025-26</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 text-[var(--accent)] font-bold">•</span>
                    <span><strong>800+ eye screenings</strong> and <strong>70+ cataract surgeries</strong> in 2025-26</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden border border-[var(--border-soft)]">
              <Image
                src="/field-images/health/health-camp.jpg"
                alt="Health camp"
                width={1200}
                height={900}
                className="w-full h-96 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Activities */}
      <section className="py-16 bg-[var(--off-white)] border-y border-[var(--border-soft)]">
        <div className="editorial-section space-y-8">
          <h2 className="font-heading text-4xl font-bold text-[var(--navy)] text-center">Key Activities</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: 'Medical Camps',
                description: 'Free health check-ups, screening, and basic treatment in rural areas',
              },
              {
                title: 'Maternal Health',
                description: 'Pre and post-natal care programs for pregnant women and new mothers',
              },
              {
                title: 'Child Health',
                description: 'Immunization drives, nutrition programs, and developmental monitoring',
              },
              {
                title: 'Disease Prevention',
                description: 'Awareness on hygiene, sanitation, and communicable disease prevention',
              },
              {
                title: 'Health Literacy',
                description: 'Training on basic health practices, nutrition, and healthy living',
              },
              {
                title: 'Partnerships',
                description: 'Collaboration with healthcare providers for sustainable health solutions',
              },
            ].map((activity, idx) => (
              <div key={idx} className="rounded-xl border border-[var(--border-soft)] bg-[var(--surface)] p-6 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-lg">
                <h3 className="font-heading text-xl font-bold text-[var(--navy)] mb-3">{activity.title}</h3>
                <p className="text-sm text-[var(--text-muted)]">{activity.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Content Placeholder */}
      <section className="py-16 bg-[var(--navy)]">
        <div className="editorial-section space-y-8">
          <h2 className="font-heading text-4xl font-bold text-white">Detailed Content</h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              ['80+', 'Health camps conducted'],
              ['1,821+', 'Women screened for breast cancer'],
              ['2,500+', 'General health beneficiaries'],
              ['10,000+', 'Reusable pads distributed'],
              ['800+ / 70+', 'Eye screenings / cataract surgeries'],
              ['13,000+', 'Menstrupedia comics distributed'],
            ].map(([value, label]) => (
              <div key={label} className="rounded-xl border border-[var(--border-soft)] bg-[var(--surface)] p-6 shadow-sm">
                <p className="font-heading text-2xl font-bold text-[var(--navy)]">{value}</p>
                <p className="mt-2 text-sm text-[var(--text-muted)]">{label}</p>
              </div>
            ))}
          </div>
          <p className="text-sm leading-relaxed text-white/80">
            Health work includes eye camps, breast cancer screening, menstrual health and hygiene, and general health
            check-ups.
          </p>
          <div className="overflow-hidden rounded-2xl border border-[var(--border-soft)]">
            <Image
              src="/field-images/health/health-camp.jpg"
              alt="Community members gathered at a village health camp"
              width={1600}
              height={900}
              className="min-h-48 w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Navigation to other areas */}
      <section className="py-16 bg-white border-t border-[var(--border-soft)]">
        <div className="editorial-section space-y-8">
          <h2 className="font-heading text-2xl font-bold text-[var(--navy)] text-center">Explore Other Focus Areas</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
              { title: 'Livelihood', url: '/focus-areas/livelihood', icon: '💼' },
              { title: 'Education', url: '/focus-areas/education', icon: '📚' },
              { title: 'Nutrition', url: '/focus-areas/nutrition', icon: '🥗' },
              { title: 'Women Empowerment', url: '/focus-areas/women-empowerment', icon: '👩' },
              { title: 'Community Development', url: '/focus-areas/community-development', icon: '🏘️' },
            ].map((area) => (
              <Link key={area.url} href={area.url} className="rounded-xl border border-[var(--border-soft)] bg-[var(--surface)] p-4 text-center shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-lg">
                <p className="text-3xl mb-2">{area.icon}</p>
                <p className="font-semibold text-[var(--navy)] text-sm">{area.title}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
