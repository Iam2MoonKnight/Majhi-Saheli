import Link from 'next/link';
import Image from 'next/image';
import { createPageMetadata } from '@/lib/seo';

export const metadata = createPageMetadata(
  'Community Development',
  'Explore Mazi Saheli Charitable Trust community development programmes.',
);

export default function CommunityDevelopmentPage() {
  return (
    <div className="overflow-hidden">
      {/* Header */}
      <section className="bg-gradient-to-br from-[var(--navy)] via-[var(--blue)] to-[var(--teal)] py-16">
        <div className="editorial-section">
          <Link href="/" className="mb-4 inline-flex items-center text-white/80 hover:text-white transition-colors">
            <span className="mr-2">←</span> Back to Home
          </Link>
          <h1 className="font-heading text-5xl font-bold text-white mt-4">🏘️ Community Development</h1>
          <p className="mt-4 text-lg text-white/85 max-w-2xl">
            Building resilient, self-reliant communities through participatory development.
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
                  We facilitate community-led development initiatives that strengthen local systems and foster long-term resilience and ownership.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="mr-3 text-[var(--accent)] font-bold">•</span>
                    <span><strong>Community-Led Systems</strong> strengthening</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 text-[var(--accent)] font-bold">•</span>
                    <span><strong>Local Ownership</strong> and sustainability</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 text-[var(--accent)] font-bold">•</span>
                    <span><strong>Infrastructure Development</strong> for villages</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 text-[var(--accent)] font-bold">•</span>
                    <span><strong>Environmental Initiatives</strong> and sustainability</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden border border-[var(--border-soft)]">
              <Image
                src="/field-images/community/community-gathering.jpeg"
                alt="Community development"
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
                title: 'Community Mobilization',
                description: 'Engaging communities in participatory development planning',
              },
              {
                title: 'Water & Sanitation',
                description: 'Infrastructure for water harvesting and sanitation facilities',
              },
              {
                title: 'Environmental Conservation',
                description: 'Forest protection, ecosystem restoration, and climate adaptation',
              },
              {
                title: 'Social Infrastructure',
                description: 'Community centers, meeting spaces, and facilities',
              },
              {
                title: 'Governance Strengthening',
                description: 'Supporting local government and community institutions',
              },
              {
                title: 'Self-Help Groups',
                description: 'Organizing and strengthening community-based organizations',
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
          <ul className="list-inside list-disc space-y-3 text-sm leading-relaxed text-white/80">
            <li>Rooftop water harvesting and kitchen gardens were implemented for 11 households in 2024-25.</li>
            <li>575 household surveys were carried out for Swachh Maharashtra Abhiyan 2.0 in 2024-25.</li>
            <li>10 wheelchairs were distributed to residents of old age homes in 2024-25.</li>
            <li>&quot;Rise for Diversity, Inclusion and Dignity&quot; workshops included 300 participants in 2024-25.</li>
          </ul>
          <div className="overflow-hidden rounded-2xl border border-[var(--border-soft)]">
            <Image
              src="/field-images/community/community-gathering.jpeg"
              alt="Residents gather for a community development initiative"
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
              { title: 'Health', url: '/focus-areas/health', icon: '🏥' },
              { title: 'Livelihood', url: '/focus-areas/livelihood', icon: '💼' },
              { title: 'Education', url: '/focus-areas/education', icon: '📚' },
              { title: 'Nutrition', url: '/focus-areas/nutrition', icon: '🥗' },
              { title: 'Women Empowerment', url: '/focus-areas/women-empowerment', icon: '👩' },
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
