import Link from 'next/link';

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
                    <span><strong>121 Training Sessions</strong> on financial skills</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 text-[var(--accent)] font-bold">•</span>
                    <span><strong>3,206 Participants</strong> trained across communities</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 text-[var(--accent)] font-bold">•</span>
                    <span><strong>Savings Groups</strong> with over 2,000 active members</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 text-[var(--accent)] font-bold">•</span>
                    <span><strong>Microentrepreneur Support</strong> for sustainable businesses</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden border border-[var(--border-soft)]">
              <img
                src="https://images.unsplash.com/photo-1509099836639-18ba1795216d?w=600&q=80"
                alt="Livelihood training"
                className="w-full h-96 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Activities */}
      <section className="py-16 bg-[color:rgb(30_58_95_/_0.05)] border-y border-[var(--border-soft)]">
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
          <div className="prose prose-sm max-w-none">
            <p className="text-[var(--text-muted)]">
              Detailed livelihood program content from the Content folder will be displayed here.
            </p>
          </div>
        </div>
      </section>

      {/* Navigation to other areas */}
      <section className="py-16 bg-[color:rgb(30_58_95_/_0.05)] border-t border-[var(--border-soft)]">
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
