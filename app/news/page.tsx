import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import PageHero from '@/components/PageHero';
import SectionEyebrow from '@/components/SectionEyebrow';
import Icon from '@/components/icons';
import { createPageMetadata } from '@/lib/seo';

export const metadata: Metadata = createPageMetadata(
  'News & Events',
  'Recent milestones, awards and media features from Mazi Saheli Charitable Trust.',
);

const MILESTONES = [
  {
    title: 'Aakar 2025 Celebration',
    year: '2025-26',
    description:
      "MSCT's annual flagship celebration brought together community partners, beneficiaries, volunteers, board members and well-wishers.",
    image: '/images/events/aakar-2025.jpg',
    imageAlt: 'Community partners and volunteers at the Aakar 2025 celebration',
  },
  {
    title: 'Best Social Work Award',
    year: '2025-26',
    description:
      "Presented by Mumbai Ki Pukar Newspaper and awarded by Maharashtra's former Deputy Director General of Police, Mr. Tayade.",
  },
  {
    title: 'Visionary Leadership Award for Social Impact',
    year: '2025-26',
    description:
      'Recognition for visionary leadership and transformative social impact across underserved communities.',
  },
  {
    title: 'Selected for Project Baala Cohort 2025',
    year: '2024-25',
    description: 'MSCT was selected for Project Baala Cohort 2025.',
  },
  {
    title: 'Field Assessments',
    year: '2024-25',
    description: 'Field assessments were conducted by Enable India Foundation and Rise Against Hunger India Foundation.',
  },
  {
    title: 'Advanced to the Second Round with Glenmark Foundation',
    year: '2024-25',
    description: 'MSCT advanced to the second round with Glenmark Foundation for the Nutrition Awards 2025.',
  },
];

const MEDIA = [
  'India Prime Time',
  'Dainik Bhaskar (Hindi)',
  'Free Press Journal',
  'Dainik Lokparivar Samachar',
  'Podcast feature with RJ Dilip Singh',
];

export default function NewsPage() {
  return (
    <div className="overflow-hidden">
      <PageHero
        crumbs={[{ label: 'Home', href: '/' }, { label: 'News & Events' }]}
        eyebrow="News & Events"
        title="News & Events"
        subtitle="Recent activities, milestones, and media recognition."
      />

      <section className="section">
        <div className="container-x space-y-10">
          <div className="mx-auto max-w-3xl text-center">
            <SectionEyebrow className="mb-4">Milestones</SectionEyebrow>
            <h2 className="font-heading text-3xl font-extrabold text-[var(--navy)] md:text-4xl">Recent Milestones</h2>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {MILESTONES.map((milestone) => (
              <article key={milestone.title} className="card card-hover overflow-hidden">
                {'image' in milestone && milestone.image && (
                  <Image
                    src={milestone.image}
                    alt={milestone.imageAlt}
                    width={720}
                    height={420}
                    className="h-44 w-full object-cover"
                  />
                )}
                <div className="p-7">
                  <p className="font-mono-eyebrow text-xs font-bold text-[#e85d75]">{milestone.year}</p>
                  <h3 className="mt-3 font-heading text-xl font-bold text-[var(--navy)]">{milestone.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-[var(--text-muted)]">{milestone.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container-x space-y-10">
          <div className="mx-auto max-w-3xl text-center">
            <SectionEyebrow className="mb-4">Recognition</SectionEyebrow>
            <h2 className="font-heading text-3xl font-extrabold text-[var(--navy)] md:text-4xl">In the Media</h2>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {MEDIA.map((outlet) => (
              <div key={outlet} className="card flex items-center gap-4 p-6">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[color:rgb(232_93_117_/_0.1)] text-[#e85d75]">
                  <Icon name="star" size={18} />
                </span>
                <h3 className="font-heading text-lg font-bold text-[var(--navy)]">{outlet}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-x">
          <div className="rounded-2xl border border-[var(--border-soft)] bg-[var(--off-white)] p-8 text-center md:p-10">
            <SectionEyebrow className="mb-4">Updates</SectionEyebrow>
            <h2 className="font-heading text-2xl font-extrabold text-[var(--navy)] md:text-3xl">Upcoming &amp; Ongoing</h2>
            <p className="mt-3 text-[var(--text-muted)]">
              New updates coming soon. Follow us on social media for the latest.
            </p>
          </div>
        </div>
      </section>

      <section className="section bg-[var(--navy-dark)]">
        <div className="container-x text-center">
          <h2 className="font-heading text-3xl font-extrabold text-white md:text-4xl">Partner With Us</h2>
          <p className="mx-auto mt-4 max-w-2xl text-white/75">
            Connect with MSCT to explore opportunities to work alongside communities.
          </p>
          <Link href="/contact" className="btn btn-coral mt-8">
            Partner With Us
            <Icon name="arrow-right" size={16} />
          </Link>
        </div>
      </section>
    </div>
  );
}
