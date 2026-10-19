import Link from 'next/link';
import Image from 'next/image';
import { createPageMetadata } from '@/lib/seo';

export const metadata = createPageMetadata(
  'Women Empowerment',
  'Explore Mazi Saheli Charitable Trust programmes supporting women and community leadership.',
);

export default function WomenEmpowermentPage() {
  return (
    <div className="overflow-hidden">
      {/* Header */}
      <section className="bg-gradient-to-br from-[var(--navy)] via-[var(--blue)] to-[var(--teal)] py-16">
        <div className="editorial-section">
          <Link href="/" className="mb-4 inline-flex items-center text-white/80 hover:text-white transition-colors">
            <span className="mr-2">←</span> Back to Home
          </Link>
          <h1 className="font-heading text-5xl font-bold text-white mt-4">👩 Women Empowerment</h1>
          <p className="mt-4 text-lg text-white/85 max-w-2xl">
            Empowering women through leadership, rights awareness, and economic opportunities.
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
                  We work towards comprehensive women empowerment by building leadership capacity, protecting rights, and creating economic pathways for rural women.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="mr-3 text-[var(--accent)] font-bold">•</span>
                    <span><strong>Leadership Development</strong> programs for women</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 text-[var(--accent)] font-bold">•</span>
                    <span><strong>Rights Awareness</strong> training and advocacy</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 text-[var(--accent)] font-bold">•</span>
                    <span><strong>Economic Empowerment</strong> through livelihood programs</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 text-[var(--accent)] font-bold">•</span>
                    <span><strong>Saheli Circle Initiative</strong> building women leaders</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden border border-[var(--border-soft)]">
              <Image
                src="/field-images/women/women-leadership.jpg"
                alt="Women empowerment"
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
                title: 'Leadership Training',
                description: 'Building confidence and leadership skills for community roles',
              },
              {
                title: 'Rights Education',
                description: 'Awareness on womens rights, legal protection, and entitlements',
              },
              {
                title: 'Economic Opportunities',
                description: 'Livelihood programs and income-generating activities',
              },
              {
                title: 'Health & Wellness',
                description: 'Maternal health, nutrition, and reproductive health programs',
              },
              {
                title: 'Digital Skills',
                description: 'Technology and digital literacy for women',
              },
              {
                title: 'Saheli Circle',
                description: 'Network of women leaders supporting community initiatives',
              },
            ].map((activity, idx) => (
              <div key={idx} className="rounded-2xl border border-[var(--border-soft)] bg-[var(--surface)] p-6 hover:shadow-lg transition-shadow">
                <h3 className="font-heading text-xl font-bold text-[var(--navy)] mb-3">{activity.title}</h3>
                <p className="text-sm text-[var(--text-muted)]">{activity.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Content Placeholder */}
      <section className="py-16">
        <div className="editorial-section space-y-8">
          <h2 className="font-heading text-4xl font-bold text-[var(--navy)]">Detailed Content</h2>
          <ul className="list-inside list-disc space-y-3 text-sm leading-relaxed text-[var(--text-muted)]">
            <li>Saheli Circle supports women-led local action and collective learning.</li>
            <li>Financial literacy reached 4,333 women in 2024-25; 3,000+ people were trained in 2025-26.</li>
            <li>300+ women were trained in employability skills in 2025-26.</li>
            <li>Activities include SHG group sales training and menstrual health and hygiene awareness.</li>
          </ul>
          <div className="overflow-hidden rounded-2xl border border-[var(--border-soft)]">
            <Image
              src="/field-images/women/womens-circle.jpg"
              alt="Women gathered for a community-led programme"
              width={1600}
              height={900}
              className="min-h-48 w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Navigation to other areas */}
      <section className="py-16 bg-[var(--off-white)] border-t border-[var(--border-soft)]">
        <div className="editorial-section space-y-8">
          <h2 className="font-heading text-2xl font-bold text-[var(--navy)] text-center">Explore Other Focus Areas</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
              { title: 'Health', url: '/focus-areas/health', icon: '🏥' },
              { title: 'Livelihood', url: '/focus-areas/livelihood', icon: '💼' },
              { title: 'Education', url: '/focus-areas/education', icon: '📚' },
              { title: 'Nutrition', url: '/focus-areas/nutrition', icon: '🥗' },
              { title: 'Community Development', url: '/focus-areas/community-development', icon: '🏘️' },
            ].map((area) => (
              <Link key={area.url} href={area.url} className="rounded-lg border border-[var(--border-soft)] bg-[var(--surface)] p-4 text-center hover:shadow-md transition-shadow">
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
