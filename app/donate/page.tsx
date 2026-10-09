import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Suspense } from 'react';
import { DonateContent } from '@/components/DonateContent';
import NewsletterForm from '@/components/NewsletterForm';
import PageHero from '@/components/PageHero';
import SectionEyebrow from '@/components/SectionEyebrow';
import Icon, { type IconName } from '@/components/icons';

export const metadata: Metadata = {
  title: 'Donate',
  description:
    'Your generous donation helps Mazi Saheli Charitable Trust empower rural women in Maharashtra through education, health, and skills development. 80G certified and FCRA registered.',
};

const IMPACT_LEVELS: { icon: IconName; title: string; desc: string }[] = [
  { icon: 'sparkles', title: 'Seed Giving (₹500–₹2,500)', desc: 'Fund stationery, nutrition support, and women circle sessions.' },
  { icon: 'target', title: 'Changemaker (₹2,500–₹25,000)', desc: 'Sponsor vocational training, health screening, and livelihood support.' },
  { icon: 'heart-pulse', title: 'Lead Giver (₹50,000+)', desc: 'Fund entire district-level interventions with measurable outcomes.' },
];

const FLOW = [
  { q: '1. Donate online', a: 'Complete a secure contribution through our payment gateway.' },
  { q: '2. Funds allocated', a: 'Funds are assigned to active field programs within 48 hours.' },
  { q: '3. Ground teams deploy', a: 'Local teams implement interventions where needs are highest.' },
  { q: '4. Impact reporting', a: 'You receive updates, reports, and stories from the field.' },
];

const MONEY_AT_WORK = [
  { label: 'Free Health Centres', image: '/field-images/health/health-outreach.png' },
  { label: 'Skill Training Sessions', image: '/field-images/education/education-session.jpg' },
  { label: 'Community Gardens', image: '/field-images/livelihood/livelihood-project.jpg' },
  { label: 'Savings Programmes', image: '/field-images/community/village-meeting.jpeg' },
];

const ALLOCATION = [
  { label: 'Health & Hygiene Programmes', pct: '35%' },
  { label: 'Education & Skill Building', pct: '25%' },
  { label: 'Livelihood & Women Empowerment', pct: '20%' },
  { label: 'Nutrition & Community Development', pct: '20%' },
];

const STORIES = [
  { name: 'Sujata Naik', role: 'Donor, Pune', text: 'MSCT reports show exactly where every rupee goes. I feel connected to the impact.' },
  { name: 'Neha Doshi', role: 'CSR Head, Mumbai', text: 'Our CSR collaboration delivered transparent, measurable field outcomes.' },
  { name: 'Anjali Kulkarni', role: 'Individual Donor', text: 'A small donation created visible change in a real community health intervention.' },
];

const OTHER_WAYS: { icon: IconName; title: string; text: string }[] = [
  { icon: 'building', title: 'Corporate CSR Partnership', text: 'Partner with MSCT for structured, reportable social impact programs.' },
  { icon: 'calendar', title: 'Fundraise for MSCT', text: 'Run campaigns, marathons, workplace drives, or social media fundraising.' },
  { icon: 'users', title: 'Volunteer Your Skills', text: 'Support programs with healthcare, education, design, legal, and technology expertise.' },
];

export default function Donate() {
  return (
    <div className="overflow-hidden">
      <PageHero
        crumbs={[{ label: 'Home', href: '/' }, { label: 'Donate' }]}
        eyebrow="Donate"
        title={
          <>
            Your Gift Changes <span className="text-[#e85d75]">Real Lives</span> in Maharashtra
          </>
        }
        subtitle="Your generous donation helps us empower rural women through education, health, and skills development."
      />

      {/* ----------------------------------------------------- DONATION CARD */}
      <section className="section">
        <div className="container-x">
          <Suspense
            fallback={<div className="h-96 animate-pulse rounded-2xl border border-[var(--border-soft)] bg-white p-6" />}
          >
            <DonateContent />
          </Suspense>
        </div>
      </section>

      {/* ----------------------------------------------------- IMPACT LEVELS */}
      <section className="section section-alt">
        <div className="container-x space-y-12">
          <div className="mx-auto max-w-3xl text-center">
            <SectionEyebrow className="mb-4">Choose Your Impact</SectionEyebrow>
            <h2 className="font-heading text-3xl font-extrabold text-[var(--navy)] md:text-4xl">
              Choose your impact level
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {IMPACT_LEVELS.map((item) => (
              <div key={item.title} className="card card-hover p-8 text-center">
                <span className="icon-badge mx-auto">
                  <Icon name={item.icon} size={24} />
                </span>
                <h3 className="mt-6 font-heading text-lg font-bold text-[var(--navy)]">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ----------------------------------------------------- HOW IT REACHES */}
      <section className="section">
        <div className="container-x space-y-12">
          <div className="mx-auto max-w-3xl text-center">
            <SectionEyebrow className="mb-4">The Journey</SectionEyebrow>
            <h2 className="font-heading text-3xl font-extrabold text-[var(--navy)] md:text-4xl">
              How your donation reaches the field
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-4">
            {FLOW.map((step, idx) => (
              <div key={step.q} className="card relative p-7">
                <span className="font-mono-eyebrow text-2xl font-bold text-[var(--border-soft)]">
                  {String(idx + 1).padStart(2, '0')}
                </span>
                <h3 className="mt-3 font-heading text-base font-bold text-[var(--navy)]">{step.q}</h3>
                <p className="mt-2 text-sm leading-relaxed">{step.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ----------------------------------------------------- MONEY AT WORK */}
      <section className="section section-alt">
        <div className="container-x space-y-12">
          <div className="mx-auto max-w-3xl text-center">
            <SectionEyebrow className="mb-4">In The Field</SectionEyebrow>
            <h2 className="font-heading text-3xl font-extrabold text-[var(--navy)] md:text-4xl">Your money at work</h2>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {MONEY_AT_WORK.map((item) => (
              <div key={item.label} className="card card-hover group overflow-hidden">
                <div className="relative h-44 w-full">
                  <Image
                    src={item.image}
                    alt={item.label}
                    fill
                    sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <p className="p-4 text-sm font-bold text-[var(--navy)]">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ----------------------------------------------------- ALLOCATION */}
      <section className="section">
        <div className="container-x grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
          <div className="space-y-6">
            <SectionEyebrow>For Every Rupee</SectionEyebrow>
            <h2 className="font-heading text-3xl font-extrabold text-[var(--navy)] md:text-4xl">
              Where every rupee goes
            </h2>
            <p className="text-sm">
              We maintain complete transparency with quarterly reports and audited allocations.
            </p>

            <div className="space-y-5 pt-2">
              {ALLOCATION.map((row) => (
                <div key={row.label} className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="font-semibold text-[var(--navy)]">{row.label}</span>
                    <span className="font-bold text-[#e85d75]">{row.pct}</span>
                  </div>
                  <div className="h-2 rounded-full bg-[var(--off-white)]">
                    <div className="h-2 rounded-full bg-[#e85d75]" style={{ width: row.pct }} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {[
              ['21000+', 'Lives Touched'],
              ['100%', 'Funds to Field'],
              ['224', 'Camps Organized'],
              ['9+', 'Years of Impact'],
            ].map(([value, label]) => (
              <div key={label} className="card p-6 text-center">
                <p className="stat-value text-3xl text-[var(--navy)] md:text-4xl">{value}</p>
                <p className="mt-2 text-[10px] font-bold uppercase tracking-[0.14em] text-[var(--text-muted)]">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ----------------------------------------------------- WHY PEOPLE GIVE */}
      <section className="section section-alt">
        <div className="container-x space-y-12">
          <div className="mx-auto max-w-3xl text-center">
            <SectionEyebrow className="mb-4">In Their Words</SectionEyebrow>
            <h2 className="font-heading text-3xl font-extrabold text-[var(--navy)] md:text-4xl">Why people give</h2>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {STORIES.map((story) => (
              <div key={story.name} className="card card-hover p-7">
                <Icon name="quote" size={26} className="text-[#e85d75]" />
                <p className="mt-4 text-sm leading-relaxed">&ldquo;{story.text}&rdquo;</p>
                <div className="mt-5 border-t border-[var(--border-soft)] pt-4">
                  <p className="font-bold text-[var(--navy)]">{story.name}</p>
                  <p className="text-xs text-[var(--text-muted)]">{story.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ----------------------------------------------------- OTHER WAYS */}
      <section className="section">
        <div className="container-x space-y-12">
          <div className="mx-auto max-w-3xl text-center">
            <SectionEyebrow className="mb-4">Other Ways</SectionEyebrow>
            <h2 className="font-heading text-3xl font-extrabold text-[var(--navy)] md:text-4xl">
              Other ways to support
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {OTHER_WAYS.map((item) => (
              <div key={item.title} className="card card-hover p-8">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-[color:rgb(232_93_117_/_0.1)] text-[#e85d75]">
                  <Icon name={item.icon} size={22} />
                </span>
                <h3 className="mt-5 font-heading text-lg font-bold text-[var(--navy)]">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ----------------------------------------------------- NEWSLETTER */}
      <section className="bg-[var(--navy)] py-16">
        <div className="container-x max-w-3xl text-center">
          <SectionEyebrow className="mb-4">Stay Updated</SectionEyebrow>
          <h2 className="font-heading text-3xl font-extrabold text-white md:text-4xl">Stay updated on our impact</h2>
          <p className="mt-4 text-white/75">
            Subscribe to receive monthly updates about programs and beneficiary stories.
          </p>
          <div className="mt-8">
            <NewsletterForm />
          </div>
          <Link href="/contact" className="link-coral mt-8 justify-center">
            Talk to our team
            <Icon name="arrow-right" size={14} />
          </Link>
        </div>
      </section>
    </div>
  );
}
