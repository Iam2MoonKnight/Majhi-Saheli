import Image from 'next/image';
import Link from 'next/link';
import HeroSection from '@/components/HeroSection';
import SectionEyebrow from '@/components/SectionEyebrow';
import FocusAreaCard from '@/components/FocusAreaCard';
import DistrictCard from '@/components/DistrictCard';
import PartnerPill from '@/components/PartnerPill';
import RoadmapCard from '@/components/RoadmapCard';
import StatBlock from '@/components/StatBlock';
import Icon, { type IconName } from '@/components/icons';
import { OPERATING_DISTRICTS, PARTNER_GROUPS } from '@/lib/organization';
import { createPageMetadata, SITE_NAME } from '@/lib/seo';

export const metadata = createPageMetadata(
  SITE_NAME,
  'Empowering rural women and communities across Maharashtra through education, health, livelihood and sustainable community leadership.',
);

const FOCUS_AREAS: { icon: IconName; title: string; text: string; image: string }[] = [
  {
    icon: 'heart-pulse',
    title: 'Health',
    text: '80+ health camps, breast cancer screening, eye care and menstrual health support.',
    image: '/field-images/health/health-camp.jpg',
  },
  {
    icon: 'briefcase',
    title: 'Livelihood',
    text: 'Financial literacy, employability skills, farmer support and sustainable rural tourism.',
    image: '/field-images/livelihood/farmer-workshop.jpg',
  },
  {
    icon: 'graduation-cap',
    title: 'Education',
    text: 'Digital classrooms, school infrastructure support, libraries and learning centres.',
    image: '/field-images/education/digital-learning.jpg',
  },
  {
    icon: 'apple',
    title: 'Nutrition',
    text: '2,800+ food packets and nutrition support distributed in 2025-26.',
    image: '/field-images/nutrition/nutrition-session.jpg',
  },
  {
    icon: 'users',
    title: 'Women Empowerment',
    text: 'Financial literacy, employability skills, menstrual health and hygiene awareness.',
    image: '/field-images/women/women-leadership.jpg',
  },
  {
    icon: 'home',
    title: 'Community Development',
    text: 'Water conservation, kitchen gardens, inclusion workshops and community support.',
    image: '/field-images/community/community-gathering.jpeg',
  },
];

const WHO_ROWS: { icon: IconName; label: string }[] = [
  { icon: 'heart-pulse', label: 'Health — 80+ camps, screenings, surgeries and menstrual health support' },
  { icon: 'briefcase', label: 'Livelihood — financial literacy, employability and farmer support' },
  { icon: 'graduation-cap', label: 'Education — digital classrooms, libraries and learning centres' },
  { icon: 'sparkles', label: 'Community support — water conservation, nutrition and sustainable tourism' },
];

const ROADMAP: { index: string; title: string; text: string; icon: IconName }[] = [
  {
    index: '01',
    title: 'Expand across geographies & demographics',
    text: 'Scaling proven programmes to new communities and target groups.',
    icon: 'target',
  },
  {
    index: '02',
    title: 'Saheli Circle initiative',
    text: 'Creating a network of trained women leaders and local support systems.',
    icon: 'sparkles',
  },
  {
    index: '03',
    title: 'MSCT Multi-Specialty Hospital venture',
    text: 'Building a permanent affordable health services complex.',
    icon: 'building',
  },
];

const COLLABORATIVE = [
  'Health and Hygiene',
  'Nutrition',
  'Financial Literacy',
  'Skill Building & Education',
  'Community Development',
];

const SELF_INITIATED = ['Rainwater Harvesting & Kitchen Gardens', 'Eco-Tourism'];

const DONATION_AMOUNTS = ['₹500', '₹1,000', '₹2,500', '₹5,000', '₹10,000', '₹25,000'];

const EXPLORE_MORE: { icon: IconName; title: string; description: string; href: string }[] = [
  {
    icon: 'users',
    title: 'Projects & Field Stories',
    description:
      'Real stories from the field — health camps, eye surgeries, learning centres, farmer support, and community-led change across rural Maharashtra.',
    href: '/projects',
  },
  {
    icon: 'calendar',
    title: 'News & Events',
    description: 'Milestones, awards, media recognition, and upcoming activities from the MSCT family.',
    href: '/news',
  },
  {
    icon: 'star',
    title: 'Our Impact',
    description: 'Year-wise impact, verified metrics, and downloadable annual reports.',
    href: '/impact#annual-reports',
  },
];

export default function Home() {
  return (
    <div className="overflow-hidden">
      <HeroSection />

      {/* ---------------------------------------------------------------- WHO WE ARE */}
      <section className="section">
        <div className="container-x grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <div className="relative h-[380px] overflow-hidden rounded-3xl border border-[var(--border-soft)] shadow-[0_24px_54px_rgba(20,41,63,0.14)] lg:h-[480px]">
            <Image
              src="/field-images/community/village-meeting.jpeg"
              alt="Community gathering"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>

          <div className="space-y-6">
            <SectionEyebrow>Who We Are</SectionEyebrow>
            <h2 className="font-heading text-3xl font-extrabold text-[var(--navy)] md:text-4xl">
              Empowering communities across <span className="text-[#e85d75]">8 districts</span>
            </h2>
            <p className="leading-relaxed">
              MSCT works across Thane, Palghar, Mumbai, Pune, Raigad, Ratnagiri, Solapur and Dharashiv through healthcare,
              financial literacy, education and community-led development initiatives.
            </p>

            <ul className="space-y-3 pt-1">
              {WHO_ROWS.map((row) => (
                <li key={row.label} className="flex items-start gap-3.5">
                  <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[color:rgb(232_93_117_/_0.1)] text-[#e85d75]">
                    <Icon name={row.icon} size={17} />
                  </span>
                  <span className="text-sm leading-relaxed text-[var(--text-muted)]">{row.label}</span>
                </li>
              ))}
            </ul>

            <Link href="/about" className="link-coral pt-2">
              More About MSCT
              <Icon name="arrow-right" size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------------- OUR REACH */}
      <section className="section bg-[var(--navy)]">
        <div className="container-x space-y-12">
          <div className="mx-auto max-w-3xl text-center">
            <SectionEyebrow className="mb-4 text-white">Our Reach</SectionEyebrow>
            <h2 className="font-heading text-3xl font-extrabold text-white md:text-4xl">
              Serving communities across <span className="text-[#e85d75]">Maharashtra</span>
            </h2>
            <p className="mt-4 text-white/70">
              On-ground presence led by local coordinators who understand the language, context, and trust of every
              district we serve.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
            {OPERATING_DISTRICTS.map((district) => (
              <DistrictCard key={district} name={district} />
            ))}
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------------- FOCUS AREAS */}
      <section className="section section-alt">
        <div className="container-x space-y-12">
          <div className="mx-auto max-w-3xl text-center">
            <SectionEyebrow className="mb-4">Area of Interest</SectionEyebrow>
            <h2 className="font-heading text-3xl font-extrabold text-[var(--navy)] md:text-4xl">
              Our focus areas
            </h2>
            <p className="mt-4">
              Six connected programmes working together so families can build lives of security, dignity and independence.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 pt-4 sm:grid-cols-2 lg:grid-cols-3">
            {FOCUS_AREAS.map((item, idx) => (
              <FocusAreaCard
                key={item.title}
                title={item.title}
                description={item.text}
                image={item.image}
                icon={item.icon}
                href={`/focus-areas/${item.title.toLowerCase().replace(/\s+/g, '-')}`}
                priority={idx < 3}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------------- COLLABORATIVE WORK */}
      <section className="section bg-[var(--navy)]">
        <div className="container-x space-y-14">
          <div className="mx-auto max-w-3xl text-center">
            <SectionEyebrow className="mb-4 text-white">How The Work Happens</SectionEyebrow>
            <h2 className="font-heading text-3xl font-extrabold text-white md:text-4xl">
              Collaborative &amp; <span className="text-[#e85d75]">Self-Initiated</span> Work
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            <div className="rounded-2xl border border-white/12 bg-white/[0.04] p-8">
              <h3 className="font-heading text-xl font-bold text-white">Collaborative Programmes</h3>
              <ul className="mt-6 space-y-3.5">
                {COLLABORATIVE.map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm text-white/80">
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[color:rgb(232_93_117_/_0.2)] text-[#e85d75]">
                      <Icon name="check" size={12} />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl border border-white/12 bg-white/[0.04] p-8">
              <h3 className="font-heading text-xl font-bold text-white">Self-Initiated Programmes</h3>
              <ul className="mt-6 space-y-3.5">
                {SELF_INITIATED.map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm text-white/80">
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[color:rgb(232_93_117_/_0.2)] text-[#e85d75]">
                      <Icon name="check" size={12} />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>

              <div className="relative mt-7 h-44 overflow-hidden rounded-xl border border-white/12">
                <Image
                  src="/field-images/livelihood/livelihood-project.jpg"
                  alt="Self-initiated rural projects"
                  fill
                  sizes="(min-width: 1024px) 45vw, 100vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6 border-t border-white/12 pt-10 lg:grid-cols-4">
            {[
              ['80+', 'Health Camps Conducted'],
              ['3,000+', 'Financial Literacy Training'],
              ['2,800+', 'Food Packets Distributed'],
              ['300+', 'Women Trained in Employability Skills'],
            ].map(([value, label]) => (
              <StatBlock key={label} value={value} label={label} variant="navy" />
            ))}
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------------- PARTNERS */}
      <section className="section section-alt">
        <div className="container-x space-y-10">
          <div className="mx-auto max-w-3xl text-center">
            <SectionEyebrow className="mb-4">Partnerships</SectionEyebrow>
            <h2 className="font-heading text-3xl font-extrabold text-[var(--navy)] md:text-4xl">
              Our Strategic Partners
            </h2>
          </div>

          <div className="space-y-8">
            {PARTNER_GROUPS.map((group) => (
              <div key={group.title}>
                <h3 className="mb-4 text-center text-sm font-bold uppercase tracking-[0.14em] text-[var(--text-muted)]">
                  {group.title}
                </h3>
                <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
                  {group.partners.map((partner) => (
                    <PartnerPill key={partner.slug} name={partner.name} logoSrc={partner.logoSrc} />
                  ))}
                </div>
              </div>
            ))}
          </div>

          <p className="text-center text-sm">
            Working together with <span className="font-semibold text-[var(--navy)]">14+ organisations</span> across
            Maharashtra and beyond.
          </p>
        </div>
      </section>

      {/* ---------------------------------------------------------------- ROADMAP */}
      <section className="section">
        <div className="container-x space-y-12">
          <div className="mx-auto max-w-3xl text-center">
            <SectionEyebrow className="mb-4">Future Plans</SectionEyebrow>
            <h2 className="font-heading text-3xl font-extrabold text-[var(--navy)] md:text-4xl">Our Roadmap Ahead</h2>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {ROADMAP.map((item) => (
              <RoadmapCard key={item.title} index={item.index} title={item.title} text={item.text} icon={item.icon} />
            ))}
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------------- EXPLORE MORE */}
      <section className="section section-alt">
        <div className="container-x space-y-10">
          <div className="mx-auto max-w-3xl text-center">
            <SectionEyebrow className="mb-4">Explore More</SectionEyebrow>
            <h2 className="font-heading text-3xl font-extrabold text-[var(--navy)] md:text-4xl">Explore More</h2>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {EXPLORE_MORE.map((item) => (
              <article key={item.href} className="card card-hover flex flex-col p-7">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-[color:rgb(232_93_117_/_0.1)] text-[#e85d75]">
                  <Icon name={item.icon} size={22} />
                </span>
                <h3 className="mt-5 font-heading text-xl font-bold text-[var(--navy)]">{item.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-[var(--text-muted)]">{item.description}</p>
                <Link href={item.href} className="link-coral mt-5">
                  Learn More
                  <Icon name="arrow-right" size={14} />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------------- DONATE */}
      <section className="section bg-[var(--navy-dark)]">
        <div className="container-x grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <div className="space-y-6">
            <SectionEyebrow className="mb-1 text-white">Support The Mission</SectionEyebrow>
            <h2 className="font-heading text-3xl font-extrabold text-white md:text-4xl">
              Help us reach <span className="text-[#e85d75]">every community</span>
            </h2>
            <p className="text-white/75">
              Your contribution directly funds health camps, education programmes, skill training, and financial literacy
              that transform lives across rural India.
            </p>

            <ul className="space-y-3 pt-1">
              {[
                'Tax exemption under Section 80G',
                '100% funds go to field programmes',
                'FCRA registered – international donations accepted',
                'Transparent impact reporting to all donors',
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm text-white/85">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#e85d75] text-white">
                    <Icon name="check" size={12} />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-white/12 bg-white p-8 shadow-[0_28px_60px_rgba(10,22,36,0.35)]">
            <h3 className="font-heading text-2xl font-extrabold text-[var(--navy)]">Make a Donation</h3>
            <p className="mt-2 text-sm">
              Choose an amount to fund health camps, learning centres and livelihood training.
            </p>

            <div className="mt-6 grid grid-cols-3 gap-2.5">
              {DONATION_AMOUNTS.map((amount, idx) => (
                <Link
                  key={amount}
                  href="/donate"
                  className={`rounded-full border px-3 py-2.5 text-center text-xs font-bold transition-colors ${
                    idx === 0
                      ? 'border-[var(--navy)] bg-[var(--navy)] text-white'
                      : 'border-[var(--border-soft)] text-[var(--navy)] hover:border-[var(--navy)] hover:text-[var(--navy)]'
                  }`}
                >
                  {amount}
                </Link>
              ))}
            </div>

            <Link href="/donate" className="btn btn-coral mt-6 w-full">
              Donate Now
              <Icon name="arrow-right" size={16} />
            </Link>

            <p className="mt-3 flex items-center justify-center gap-1.5 text-center text-xs text-[var(--text-muted)]">
              <Icon name="shield-check" size={13} className="text-[#e85d75]" />
              Secure payment powered by Razorpay
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
