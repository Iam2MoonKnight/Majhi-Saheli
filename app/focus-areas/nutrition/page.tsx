import Link from 'next/link';
import Image from 'next/image';
import { createPageMetadata } from '@/lib/seo';

export const metadata = createPageMetadata(
  'Nutrition & Food Security',
  'Explore Mazi Saheli Charitable Trust nutrition and food security programmes.',
);

export default function NutritionPage() {
  return (
    <div className="overflow-hidden">
      {/* Header */}
      <section className="bg-gradient-to-br from-[var(--navy)] via-[var(--blue)] to-[var(--teal)] py-16">
        <div className="editorial-section">
          <Link href="/" className="mb-4 inline-flex items-center text-white/80 hover:text-white transition-colors">
            <span className="mr-2">←</span> Back to Home
          </Link>
          <h1 className="font-heading text-5xl font-bold text-white mt-4">🥗 Nutrition & Food Security</h1>
          <p className="mt-4 text-lg text-white/85 max-w-2xl">
            Promoting nutrition, food security, and sustainable agriculture in rural communities.
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
                  Our nutrition programs focus on improving food security and dietary diversity, particularly for children and mothers in rural areas.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="mr-3 text-[var(--accent)] font-bold">•</span>
                    <span><strong>2,800+ food packets</strong> and nutrition support distributed in 2025-26</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 text-[var(--accent)] font-bold">•</span>
                    <span><strong>Kitchen gardens and rooftop water harvesting</strong> for 11 households in 2024-25</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 text-[var(--accent)] font-bold">•</span>
                    <span><strong>Child & Maternal Health</strong> outcomes improved</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 text-[var(--accent)] font-bold">•</span>
                    <span><strong>Nutrition Education</strong> and awareness</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden border border-[var(--border-soft)]">
              <Image
                src="/field-images/nutrition/nutrition-outreach.jpg"
                alt="Nutrition program"
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
                title: 'Kitchen Gardens',
                description: 'Household vegetable gardens for nutritious food production',
              },
              {
                title: 'Nutrition Education',
                description: 'Training on balanced diets, health, and food safety',
              },
              {
                title: 'Water & Sanitation',
                description: 'Clean water access and sanitation infrastructure',
              },
              {
                title: 'Food Fortification',
                description: 'Supporting nutrient-enriched food production and consumption',
              },
              {
                title: 'Maternal Health',
                description: 'Nutrition support for pregnant women and lactating mothers',
              },
              {
                title: 'Child Nutrition',
                description: 'Programs for early childhood development and nutrition',
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
          <div className="rounded-2xl border border-[var(--border-soft)] bg-[var(--surface)] p-6">
            <p className="font-heading text-3xl font-bold text-[var(--navy)]">2,800+</p>
            <p className="mt-2 text-sm text-[var(--text-muted)]">
              Food packets and nutrition support distributed in 2025-26.
            </p>
          </div>
          <div className="overflow-hidden rounded-2xl border border-[var(--border-soft)]">
            <Image
              src="/field-images/nutrition/nutrition-support.jpg"
              alt="Women hold nutrition support packets distributed through a community programme"
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
              { title: 'Women Empowerment', url: '/focus-areas/women-empowerment', icon: '👩' },
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
