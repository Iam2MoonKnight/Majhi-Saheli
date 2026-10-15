import Link from 'next/link';
import Image from 'next/image';

export default function LivelihoodPage() {
  return (
    <div className="overflow-hidden">
      {/* Header */}
      <section className="bg-gradient-to-br from-[var(--navy)] via-[var(--blue)] to-[var(--teal)] py-16">
        <div className="editorial-section">
          <Link href="/" className="mb-4 inline-flex items-center text-white/80 hover:text-white transition-colors">
            <span className="mr-2">←</span> Back to Home
          </Link>
          <h1 className="font-heading text-5xl font-bold text-white mt-4">💼 Livelihood Development</h1>
          <p className="mt-4 text-lg text-white/85 max-w-2xl">
            Empowering communities through financial literacy, entrepreneurship, and sustainable livelihoods.
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
                  We provide comprehensive financial literacy and entrepreneurship training to enable sustainable income generation and economic independence.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="mr-3 text-[var(--accent)] font-bold">•</span>
                    <span><strong>3,000+ people</strong> trained in financial literacy in 2025-26</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 text-[var(--accent)] font-bold">•</span>
                    <span><strong>300+ women</strong> trained in employability skills in 2025-26</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 text-[var(--accent)] font-bold">•</span>
                    <span><strong>4,333 women</strong> reached through financial literacy in 2024-25</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 text-[var(--accent)] font-bold">•</span>
                    <span><strong>Farmer support</strong> with IoT-based real-time farm insights in 2025-26</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden border border-[var(--border-soft)]">
              <Image
                src="/field-images/livelihood/farmer-workshop.jpg"
                alt="Livelihood training"
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
                title: 'Financial Literacy',
                description: 'Budgeting, savings, credit awareness, and investment basics',
              },
              {
                title: 'Savings Groups',
                description: 'Community-based savings circles and micro-credit systems',
              },
              {
                title: 'Entrepreneurship Training',
                description: 'Business planning, market linkages, and microenterprise development',
              },
              {
                title: 'Skill Enhancement',
                description: 'Vocational training in traditional and modern income activities',
              },
              {
                title: 'Market Access',
                description: 'Connecting producers with markets and value chains',
              },
              {
                title: 'Social Enterprises',
                description: 'Supporting community-based sustainable business models',
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
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            <div className="rounded-2xl border border-[var(--border-soft)] bg-[var(--surface)] p-6">
              <p className="font-heading text-2xl font-bold text-[var(--navy)]">3,000+</p>
              <p className="mt-2 text-sm text-[var(--text-muted)]">Trained in financial literacy (2025-26)</p>
            </div>
            <div className="rounded-2xl border border-[var(--border-soft)] bg-[var(--surface)] p-6">
              <p className="font-heading text-2xl font-bold text-[var(--navy)]">300+</p>
              <p className="mt-2 text-sm text-[var(--text-muted)]">Women trained in employability skills (2025-26)</p>
            </div>
            <div className="rounded-2xl border border-[var(--border-soft)] bg-[var(--surface)] p-6">
              <p className="font-heading text-2xl font-bold text-[var(--navy)]">4,333</p>
              <p className="mt-2 text-sm text-[var(--text-muted)]">Women reached in financial literacy (2024-25)</p>
            </div>
          </div>
          <ul className="list-inside list-disc space-y-2 text-sm leading-relaxed text-[var(--text-muted)]">
            <li>Farmer IoT support, soil health, water conservation and sustainable farming.</li>
            <li>Community-based eco-tourism and SHG group sales training.</li>
            <li>PwD livelihood programme.</li>
          </ul>
          <div className="overflow-hidden rounded-2xl border border-[var(--border-soft)]">
            <Image
              src="/field-images/livelihood/farmer-workshop.jpg"
              alt="Community members gathered at a solar-powered rural farming project"
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
              { title: 'Education', url: '/focus-areas/education', icon: '📚' },
              { title: 'Nutrition', url: '/focus-areas/nutrition', icon: '🥗' },
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
