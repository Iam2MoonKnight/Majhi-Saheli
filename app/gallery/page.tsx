'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import PageHero from '@/components/PageHero';

const filters = [
  { label: 'All', key: 'all' },
  { label: 'Health Camps', key: 'health' },
  { label: 'Education', key: 'education' },
  { label: 'Livelihood', key: 'livelihood' },
  { label: 'Women Empowerment', key: 'women' },
  { label: 'Community', key: 'community' },
];

export default function GalleryPage() {
  const [activeFilter, setActiveFilter] = useState('all');

  const galleryItems = [
    { category: 'health', title: 'Health Camp', place: 'Thane District, 2024', image: '/field-images/health/health-camp.jpg' },
    { category: 'education', title: 'Digital Learning', place: 'Palghar District', image: '/field-images/education/digital-learning.jpg' },
    { category: 'women', title: "Women's Circle", place: 'Satara District', image: '/field-images/women/women-leadership.jpg' },
    { category: 'community', title: 'Community Gathering', place: 'Osmanabad', image: '/field-images/community/community-gathering.jpeg' },
    { category: 'livelihood', title: 'Livelihood Training', place: 'Raigad District', image: '/field-images/livelihood/skills-training.png' },
    { category: 'health', title: 'Medical Screening', place: 'Ratnagiri District', image: '/field-images/health/community-screening.png' },
    { category: 'education', title: 'Library Programme', place: 'Thane District', image: '/field-images/education/education-session.jpg' },
    { category: 'community', title: 'Field Team Meeting', place: 'Palghar', image: '/field-images/community/village-meeting.jpeg' },
    { category: 'women', title: 'Mazi Saheli Mahilavarga', place: 'Raigad District, 2023', image: '/field-images/women/womens-circle.jpg' },
    { category: 'livelihood', title: 'Kitchen Garden', place: 'Satara District', image: '/field-images/livelihood/livelihood-project.jpg' },
    { category: 'health', title: 'Wellness Session', place: 'Thane District', image: '/field-images/health/health-outreach.png' },
    { category: 'education', title: 'Skill Workshop', place: 'Osmanabad', image: '/field-images/education/learning-space.jpg' },
  ];

  const visibleItems =
    activeFilter === 'all' ? galleryItems : galleryItems.filter((item) => item.category === activeFilter);

  return (
    <div className="min-h-screen overflow-hidden">
      <PageHero
        crumbs={[{ label: 'Home', href: '/' }, { label: 'Gallery' }]}
        eyebrow="From the Field"
        title="Stories told through images"
        subtitle="A visual journey through our work, where every photograph reflects resilience, dignity, and community action."
      />

      <section className="py-16">
        <div className="editorial-section space-y-10">
          <div className="flex flex-wrap justify-center gap-2">
            {filters.map((filter) => (
              <button
                key={filter.key}
                type="button"
                onClick={() => setActiveFilter(filter.key)}
                aria-pressed={activeFilter === filter.key}
                className={`rounded-full border px-4 py-2 text-xs font-semibold uppercase tracking-wide transition ${
                  activeFilter === filter.key
                    ? 'border-[var(--navy)] bg-[var(--navy)] text-white'
                    : 'border-[var(--border-soft)] bg-[var(--surface)] text-[var(--navy)] hover:border-[var(--accent)]'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {visibleItems.map((item, idx) => (
              <div
                key={`${item.title}-${item.place}`}
                className={`group overflow-hidden rounded-2xl border border-[var(--border-soft)] bg-[var(--surface)] ${
                  idx % 5 === 0 ? 'md:row-span-2' : ''
                }`}
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  width={1200}
                  height={800}
                  unoptimized
                  className={`w-full object-cover transition duration-300 group-hover:scale-105 ${
                    idx % 5 === 0 ? 'h-[360px]' : idx % 3 === 0 ? 'h-72' : 'h-64'
                  }`}
                />
                <div className="space-y-1 p-5">
                  <p className="font-heading text-2xl font-semibold text-[var(--navy)]">{item.title}</p>
                  <p className="text-sm text-[var(--text-muted)]">{item.place}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-[var(--border-soft)] bg-[var(--off-white)] py-16">
        <div className="editorial-section space-y-8">
          <div className="text-center">
            <p className="section-eyebrow">Field Stories</p>
            <h2 className="font-heading text-4xl font-bold text-[var(--navy)]">From the field</h2>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {[
              ['Health Camp – Thane 2024', '/field-images/health/health-camp.jpg'],
              ['Women Empowerment Stories', '/field-images/women/women-leadership.jpg'],
              ['Annual Impact Report 2023', '/field-images/community/community-farmers.jpg'],
            ].map(([title, image]) => (
              <div key={title} className="group relative overflow-hidden rounded-2xl border border-[var(--border-soft)] bg-[var(--surface)]">
                <Image src={image} alt={title} width={1200} height={600} unoptimized className="h-56 w-full object-cover" />
                <div className="absolute inset-0 flex items-center justify-center bg-[color:rgb(13_27_42_/_0.35)]">
                  <div className="rounded-full border border-white/70 bg-white/15 px-4 py-2 text-sm font-semibold text-white">▶ Play</div>
                </div>
                <p className="p-4 text-sm font-semibold text-[var(--navy)]">{title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-r from-[var(--navy)] to-[var(--teal)] py-16 text-white">
        <div className="editorial-section max-w-4xl text-center space-y-5">
          <h2 className="font-heading text-4xl font-bold">Ready to make a difference?</h2>
          <p className="text-white/85">Every contribution supports programmes you just saw in action across Maharashtra.</p>
          <div className="flex flex-col justify-center gap-3 sm:flex-row">
            <Link href="/donate" className="inline-flex items-center justify-center rounded-full bg-[var(--navy)] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[var(--navy-dark)]">
              Donate now
            </Link>
            <Link href="/contact" className="inline-flex items-center justify-center rounded-full border border-white px-6 py-3 text-sm font-semibold text-white transition hover:bg-white hover:text-[var(--navy)]">
              Become a partner
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
