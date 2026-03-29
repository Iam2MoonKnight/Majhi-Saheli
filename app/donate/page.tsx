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
          <h2 className="font-heading text-center text-3xl font-bold text-[var(--navy)] md:text-4xl">How we use your donation</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {
              [
                {
                  icon: '📚',
                  title: 'Education (35%)',
                  desc: 'Scholarships, materials, and teacher training for girls and women',
                },
                {
                  icon: '💊',
                  title: 'Health (30%)',
                  desc: 'Medical camps, health awareness, and preventive care programs',
                },
                {
                  icon: '🎓',
                  title: 'Skills Training (25%)',
                  desc: 'Vocational training, tools, and market linkages for entrepreneurs',
                },
                {
                  icon: '🏢',
                  title: 'Administration (5%)',
                  desc: 'Essential operational costs to run our programs effectively',
                },
                {
                  icon: '📊',
                  title: 'Monitoring (3%)',
                  desc: 'Evaluation and impact assessment to ensure program quality',
                },
                {
                  icon: '🎯',
                  title: 'Outreach (2%)',
                  desc: 'Community awareness and volunteer support programs',
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
          <h2 className="font-heading text-center text-3xl font-bold text-[var(--navy)] md:text-4xl">Frequently asked questions</h2>

          <div className="space-y-6">
            {
              [
                {
                  q: 'Is my donation tax-deductible?',
                  a: 'Yes. Saheli is registered under 80-G of the Income Tax Act, 1961 and donations are eligible for tax benefits.',
                },
                {
                  q: 'Can I make a recurring donation?',
                  a: 'Yes. We support recurring contributions through monthly, quarterly, and annual options.',
                },
                {
                  q: 'How is my donation used?',
                  a: 'Donations go directly into programs. We maintain transparent reporting and publish impact updates.',
                },
                {
                  q: 'Can I donate in other currencies?',
                  a: 'Yes, we accept donations in INR, USD, and EUR. Select your preferred currency in the donation form.',
                },
                {
                  q: 'How do I know my money is safe?',
                  a: 'Saheli is a registered NGO with proper governance and audit procedures. Your donation is secure and transparent.',
                },
              ].map((faq, idx) => (
                <div key={idx} className="rounded-2xl border border-[var(--border-soft)] bg-[var(--surface)] p-6">
                  <h3 className="mb-2 text-lg font-bold text-[var(--navy)]">{faq.q}</h3>
                  <p className="text-[var(--text-muted)]">{faq.a}</p>
                </div>
              ))
            }
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
