import Link from 'next/link';
import HeroSection from '@/components/HeroSection';

export default function Home() {
  const focusAreas = [
    {
      icon: '🏥',
      title: 'Health',
      text: '224 medical camps covering 53 communities, reaching 4,776 women across 6 districts.',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=400&q=80',
    },
    {
      icon: '💼',
      title: 'Livelihood',
      text: '121 sessions reaching 3,206 participants through savings, entrepreneurship, and finance literacy.',
      image: 'https://images.unsplash.com/photo-1509099836639-18ba1795216d?w=400&q=80',
    },
    {
      icon: '📚',
      title: 'Education',
      text: 'Learning centers, computer labs, libraries, and skill-building programs across 29 locations.',
      image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=400&q=80',
    },
    {
      icon: '🥗',
      title: 'Nutrition',
      text: 'Kitchen garden initiatives in 21 villages supporting child and maternal nutrition outcomes.',
      image: 'https://images.unsplash.com/photo-1498837167922-ddd27525d352?w=400&q=80',
    },
    {
      icon: '👩',
      title: 'Women Empowerment',
      text: 'Leadership, rights awareness, and alternative livelihood pathways for rural women.',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80',
    },
    {
      icon: '🏘️',
      title: 'Community Development',
      text: 'Community-led systems strengthening for long-term rural resilience and local ownership.',
      image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=400&q=80',
    },
  ];

  const partners = [
    'Bramhon',
    'Project Roots',
    'Adveno Foundation',
    'Wokhard Hospital',
    'Billion Rising',
    'FVNSC Pune',
    'Jan Sevak',
    'Pragatio Welfare Foundation',
    'Embibe India',
    'Rotary',
    'Genovate India',
    'IAT',
  ];

  return (
    <div className="overflow-hidden">
      <HeroSection />

      <section className="py-16">
        <div className="editorial-section grid grid-cols-1 items-center gap-10 lg:grid-cols-2">
          <div className="space-y-6">
            <p className="section-eyebrow">Who We Are</p>
            <h2 className="font-heading text-4xl font-bold text-[var(--navy)] md:text-5xl">
              Empowering communities across <span className="text-[var(--accent)]">6 districts</span>
            </h2>
            <p className="text-[var(--text-muted)]">
              MSCT works with diverse communities across Thane, Palghar, Ratnagiri, Raigad, Satara, and Osmanabad through healthcare,
              financial literacy, education, and women-led development initiatives.
            </p>
            <ul className="space-y-3 text-sm text-[var(--text-muted)]">
              <li>• Health &amp; Hygiene — 224 camps, 11,962 participants</li>
              <li>• Financial Literacy — 121 sessions, 3,206 participants</li>
              <li>• Skill Building &amp; Education — computer labs, libraries, learning centers</li>
              <li>• Self-initiated projects — water harvesting, kitchen gardens, eco-tourism</li>
            </ul>
          </div>
          <div className="overflow-hidden rounded-3xl border border-[var(--border-soft)] bg-[var(--surface)]">
            <img
              src="https://images.unsplash.com/photo-1578357078586-491adf1aa5ba?w=560&q=80"
              alt="Community gathering"
              className="h-[420px] w-full object-cover"
            />
          </div>
        </div>
      </section>

      <section className="border-y border-[var(--border-soft)] bg-[color:rgb(30_58_95_/_0.05)] py-16">
        <div className="editorial-section space-y-8">
          <div className="text-center">
            <p className="section-eyebrow">Our Reach</p>
            <h2 className="font-heading text-4xl font-bold text-[var(--navy)] md:text-5xl">Serving communities across Maharashtra</h2>
          </div>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
            {['Thane', 'Palghar', 'Raigad', 'Ratnagiri', 'Satara', 'Osmanabad'].map((district) => (
              <div key={district} className="rounded-2xl border border-[var(--border-soft)] bg-[var(--surface)] px-4 py-5 text-center text-sm font-semibold text-[var(--navy)]">
                {district}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="editorial-section space-y-8">
          <div className="text-center">
            <p className="section-eyebrow">Areas of Interest</p>
            <h2 className="font-heading text-4xl font-bold text-[var(--navy)]">Our focus areas</h2>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {focusAreas.map((item) => (
              <div key={item.title} className="overflow-hidden rounded-2xl border border-[var(--border-soft)] bg-[var(--surface)]">
                <img src={item.image} alt={item.title} className="h-44 w-full object-cover" />
                <div className="space-y-3 p-6">
                  <p className="text-2xl">{item.icon}</p>
                  <h3 className="font-heading text-2xl font-bold text-[var(--navy)]">{item.title}</h3>
                  <p className="text-sm text-[var(--text-muted)]">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-[var(--border-soft)] bg-[color:rgb(30_58_95_/_0.06)] py-16">
        <div className="editorial-section">
          <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
            {[
              ['3,212', 'Health Camp Participants'],
              ['6,086', 'Financial Literacy Participants'],
              ['3,126', 'Nutrition Programme Participants'],
              ['223', 'Expert Sessions Hosted'],
            ].map(([num, label]) => (
              <div key={label} className="rounded-2xl border border-[var(--border-soft)] bg-[var(--surface)] p-6 text-center">
                <div className="font-heading text-4xl font-bold text-[var(--navy)]">{num}</div>
                <p className="mt-2 text-xs font-semibold uppercase tracking-wide text-[var(--text-muted)]">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="editorial-section space-y-8">
          <div className="text-center">
            <p className="section-eyebrow">Partnerships</p>
            <h2 className="font-heading text-4xl font-bold text-[var(--navy)]">Our strategic partners</h2>
          </div>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
            {partners.map((partner) => (
              <div key={partner} className="rounded-xl border border-[var(--border-soft)] bg-[var(--surface)] px-4 py-4 text-center text-sm font-semibold text-[var(--navy)]">
                {partner}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[color:rgb(42_123_111_/_0.08)] py-16">
        <div className="editorial-section space-y-8 py-16">
          <div className="text-center">
            <p className="section-eyebrow">Future Plans</p>
            <h2 className="font-heading text-4xl font-bold text-[var(--navy)]">Our roadmap ahead</h2>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {[
              ['01', 'Expand across geographies & demographics', 'Scaling proven programmes to new communities and target groups.'],
              ['02', 'Saheli Circle initiative', 'Creating a network of trained women leaders and local support systems.'],
              ['03', 'MSCT Multi-Specialty Hospital venture', 'Building a permanent affordable health services complex.'],
            ].map(([num, title, text]) => (
              <div key={title} className="rounded-2xl border border-[var(--border-soft)] bg-[var(--surface)] p-6">
                <p className="font-mono-eyebrow text-xs text-[var(--accent)]">{num}</p>
                <h3 className="mt-2 font-heading text-2xl font-semibold text-[var(--navy)]">{title}</h3>
                <p className="mt-3 text-sm text-[var(--text-muted)]">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-gradient-to-br from-[var(--navy)] via-[var(--blue)] to-[var(--teal)]">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
            backgroundSize: '40px 40px',
          }}
        ></div>

        <div className="relative z-10 editorial-section py-16">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            <div className="space-y-5">
              <h2 className="font-heading text-4xl font-bold text-white md:text-5xl">Help us reach every community</h2>
              <p className="max-w-3xl text-lg text-white/85">
                Your contribution directly funds health camps, education programmes, skill training, and financial literacy that transform lives across rural India.
              </p>
              <ul className="space-y-2 text-sm text-white/85">
                <li>✓ Tax exemption under Section 80G</li>
                <li>✓ 100% funds go to field programmes</li>
                <li>✓ FCRA registered – international donations accepted</li>
                <li>✓ Transparent impact reporting to all donors</li>
              </ul>
            </div>

            <div className="rounded-3xl border border-white/20 bg-white/10 p-8 backdrop-blur-sm">
              <h3 className="font-heading text-3xl font-bold text-white">Make a donation</h3>
              <div className="mt-5 grid grid-cols-3 gap-2">
                {['₹500', '₹1,000', '₹2,500', '₹5,000', '₹10,000', '₹25,000'].map((amt, idx) => (
                  <button
                    key={amt}
                    className={`rounded-full px-3 py-2 text-xs font-semibold transition ${
                      idx === 0 ? 'bg-[var(--accent)] text-white' : 'bg-white/15 text-white hover:bg-white/25'
                    }`}
                  >
                    {amt}
                  </button>
                ))}
              </div>
              <p className="mt-4 text-xs text-white/75">Or enter a custom amount</p>
              <Link
                href="/donate"
                className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-[var(--accent)] px-6 py-3 text-sm font-semibold text-white shadow-[0_10px_28px_rgba(232,131,74,0.35)] transition hover:bg-[var(--accent-warm)]"
              >
                Donate now →
              </Link>
              <p className="mt-3 text-xs text-white/70">Secure payment powered by Razorpay</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
