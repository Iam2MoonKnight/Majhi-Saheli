import { Suspense } from 'react';
import { DonateContent } from '@/components/DonateContent';

export default function Donate() {
  return (
    <div className="min-h-screen overflow-hidden">
      <section className="border-b border-[var(--border-soft)] bg-[color:rgb(255_255_255_/_0.58)]">
        <div className="editorial-section py-16 text-center space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full bg-[color:rgb(232_131_74_/_0.14)] px-4 py-2">
            <div className="h-2 w-2 rounded-full bg-[var(--accent)]"></div>
            <span className="section-eyebrow text-[var(--navy)]">Donate</span>
          </div>
          <h1 className="font-heading text-4xl font-bold text-[var(--navy)] md:text-6xl">Make a difference</h1>
          <p className="mx-auto max-w-3xl text-lg text-[var(--text-muted)]">
            Your generous donation helps us empower rural women through education, health, and skills development.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="editorial-section space-y-8">
          <Suspense fallback={<div className="h-96 animate-pulse rounded-2xl border border-[var(--border-soft)] bg-[var(--surface)] p-6" />}>
            <DonateContent />
          </Suspense>
        </div>
      </section>

      <section className="border-y border-[var(--border-soft)] bg-[color:rgb(30_58_95_/_0.06)] py-16">
        <div className="editorial-section space-y-8">
          <h2 className="font-heading text-center text-3xl font-bold text-[var(--navy)] md:text-4xl">Choose your impact level</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {
              [
                {
                  icon: '🌱',
                  title: 'Seed Giving (₹500–₹2,500)',
                  desc: 'Fund stationery, nutrition support, and women circle sessions.',
                },
                {
                  icon: '🎯',
                  title: 'Changemaker (₹2,500–₹25,000)',
                  desc: 'Sponsor vocational training, health screening, and livelihood support.',
                },
                {
                  icon: '🏥',
                  title: 'Lead Giver (₹50,000+)',
                  desc: 'Fund entire district-level interventions with measurable outcomes.',
                },
              ].map((item, idx) => (
                <div key={idx} className="rounded-2xl border border-[var(--border-soft)] bg-[var(--surface)] p-6 text-center">
                  <div className="text-4xl mb-4">{item.icon}</div>
                  <h3 className="mb-2 text-lg font-bold text-[var(--navy)]">{item.title}</h3>
                  <p className="text-sm text-[var(--text-muted)]">{item.desc}</p>
                </div>
              ))
            }
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="editorial-section space-y-8">
          <h2 className="font-heading text-center text-3xl font-bold text-[var(--navy)] md:text-4xl">How your donation reaches the field</h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {
              [
                {
                  q: '1. Donate online',
                  a: 'Complete a secure contribution through our payment gateway.',
                },
                {
                  q: '2. Funds allocated',
                  a: 'Funds are assigned to active field programs within 48 hours.',
                },
                {
                  q: '3. Ground teams deploy',
                  a: 'Local teams implement interventions where needs are highest.',
                },
                {
                  q: '4. Impact reporting',
                  a: 'You receive updates, reports, and stories from the field.',
                },
              ].map((faq, idx) => (
                <div key={idx} className="rounded-2xl border border-[var(--border-soft)] bg-[var(--surface)] p-6 text-center">
                  <h3 className="mb-2 text-lg font-bold text-[var(--navy)]">{faq.q}</h3>
                  <p className="text-sm text-[var(--text-muted)]">{faq.a}</p>
                </div>
              ))
            }
          </div>
        </div>
      </section>

      <section className="border-y border-[var(--border-soft)] bg-[color:rgb(30_58_95_/_0.06)] py-16">
        <div className="editorial-section space-y-8">
          <h2 className="font-heading text-center text-3xl font-bold text-[var(--navy)] md:text-4xl">Your money at work</h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              ['Free Health Centres', 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=500&q=80'],
              ['Skill Training Sessions', 'https://images.unsplash.com/photo-1593113598332-cd288d649433?w=500&q=80'],
              ['Community Gardens', 'https://images.unsplash.com/photo-1498837167922-ddd27525d352?w=500&q=80'],
              ['Savings Programmes', 'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=500&q=80'],
            ].map(([label, image]) => (
              <div key={label} className="overflow-hidden rounded-2xl border border-[var(--border-soft)] bg-[var(--surface)]">
                <img src={image} alt={label} className="h-44 w-full object-cover" />
                <p className="p-4 text-sm font-semibold text-[var(--navy)]">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="editorial-section grid grid-cols-1 gap-8 lg:grid-cols-2">
          <div className="space-y-4">
            <p className="section-eyebrow">For Every Rupee</p>
            <h2 className="font-heading text-3xl font-bold text-[var(--navy)] md:text-4xl">Where every rupee goes</h2>
            <p className="text-[var(--text-muted)]">We maintain complete transparency with quarterly reports and audited allocations.</p>
            {[
              ['Health & Hygiene Programmes', '35%'],
              ['Education & Skill Building', '25%'],
              ['Livelihood & Women Empowerment', '20%'],
              ['Nutrition & Community Development', '20%'],
            ].map(([label, pct]) => (
              <div key={label} className="space-y-1">
                <div className="flex items-center justify-between text-sm">
                  <span className="font-medium text-[var(--navy)]">{label}</span>
                  <span className="text-[var(--text-muted)]">{pct}</span>
                </div>
                <div className="h-2 rounded-full bg-[color:rgb(30_58_95_/_0.12)]">
                  <div className="h-2 rounded-full bg-gradient-to-r from-[var(--blue)] to-[var(--accent)]" style={{ width: pct }}></div>
                </div>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              ['21000+', 'Lives Touched'],
              ['100%', 'Funds to Field'],
              ['224', 'Camps Organized'],
              ['9+', 'Years of Impact'],
            ].map(([num, label]) => (
              <div key={label} className="rounded-xl border border-[var(--border-soft)] bg-[var(--surface)] p-5 text-center">
                <p className="font-heading text-4xl font-bold text-[var(--navy)]">{num}</p>
                <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-[var(--text-muted)]">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-[var(--border-soft)] bg-[color:rgb(30_58_95_/_0.06)] py-16">
        <div className="editorial-section space-y-8">
          <div className="text-center">
            <p className="section-eyebrow">Why People Give</p>
            <h2 className="font-heading text-4xl font-bold text-[var(--navy)]">Why people give</h2>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {[
              ['Sujata Naik', 'Donor, Pune', 'MSCT reports show exactly where every rupee goes. I feel connected to the impact.'],
              ['Neha Doshi', 'CSR Head, Mumbai', 'Our CSR collaboration delivered transparent, measurable field outcomes.'],
              ['Anjali Kulkarni', 'Individual Donor', 'A small donation created visible change in a real community health intervention.'],
            ].map(([name, role, text]) => (
              <div key={name} className="rounded-2xl border border-[var(--border-soft)] bg-[var(--surface)] p-6">
                <p className="text-[var(--text-muted)]">"{text}"</p>
                <p className="mt-4 font-semibold text-[var(--navy)]">{name}</p>
                <p className="text-xs text-[var(--text-muted)]">{role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="editorial-section space-y-8">
          <div className="text-center">
            <p className="section-eyebrow">Other Ways</p>
            <h2 className="font-heading text-4xl font-bold text-[var(--navy)]">Other ways to support</h2>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {[
              ['🏢', 'Corporate CSR Partnership', 'Partner with MSCT for structured, reportable social impact programs.'],
              ['🎉', 'Fundraise for MSCT', 'Run campaigns, marathons, workplace drives, or social media fundraising.'],
              ['🙌', 'Volunteer Your Skills', 'Support programs with healthcare, education, design, legal, and technology expertise.'],
            ].map(([icon, title, text]) => (
              <div key={title} className="rounded-2xl border border-[var(--border-soft)] bg-[var(--surface)] p-6 text-center">
                <p className="text-3xl">{icon}</p>
                <h3 className="mt-3 font-heading text-2xl font-semibold text-[var(--navy)]">{title}</h3>
                <p className="mt-2 text-sm text-[var(--text-muted)]">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-r from-[var(--navy)] to-[var(--teal)] py-16 text-white">
        <div className="editorial-section max-w-4xl text-center space-y-6">
          <h2 className="font-heading text-3xl font-bold md:text-5xl">Stay updated on our impact</h2>
          <p className="text-lg text-white/85">Subscribe to receive monthly updates about programs and beneficiary stories.</p>
          <div className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 rounded-lg px-4 py-2 text-[var(--text)] focus:outline-none"
            />
            <button className="inline-flex items-center justify-center rounded-lg bg-[var(--accent)] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[var(--accent-warm)]">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
