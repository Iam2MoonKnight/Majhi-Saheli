import Link from 'next/link';

export default function GalleryPage() {
  const galleryItems = [
    { category: 'health', title: 'Health Camp', place: 'Thane District, 2024', image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&q=80' },
    { category: 'education', title: 'Digital Learning', place: 'Palghar District', image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600&q=80' },
    { category: 'women', title: "Women's Circle", place: 'Satara District', image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&q=80' },
    { category: 'community', title: 'Community Gathering', place: 'Osmanabad', image: 'https://images.unsplash.com/photo-1593113598332-cd288d649433?w=900&q=80' },
    { category: 'livelihood', title: 'Livelihood Training', place: 'Raigad District', image: 'https://images.unsplash.com/photo-1509099836639-18ba1795216d?w=600&q=80' },
    { category: 'health', title: 'Medical Screening', place: 'Ratnagiri District', image: 'https://images.unsplash.com/photo-1578357078586-491adf1aa5ba?w=600&q=80' },
    { category: 'education', title: 'Library Programme', place: 'Thane District', image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=600&q=80' },
    { category: 'community', title: 'Field Team Meeting', place: 'Palghar', image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=600&q=80' },
    { category: 'women', title: 'Mazi Saheli Mahilavarga', place: 'Raigad District, 2023', image: 'https://images.unsplash.com/photo-1617854818583-09e7f077a156?w=900&q=80' },
    { category: 'livelihood', title: 'Kitchen Garden', place: 'Satara District', image: 'https://images.unsplash.com/photo-1498837167922-ddd27525d352?w=600&q=80' },
    { category: 'health', title: 'Wellness Session', place: 'Thane District', image: 'https://images.unsplash.com/photo-1576267423445-b2e0074d68a4?w=600&q=80' },
    { category: 'education', title: 'Skill Workshop', place: 'Osmanabad', image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=600&q=80' },
  ];

  return (
    <div className="min-h-screen overflow-hidden">
      <section className="border-b border-[var(--border-soft)] bg-[color:rgb(255_255_255_/_0.58)] py-16">
        <div className="editorial-section text-center space-y-6">
          <p className="section-eyebrow">From the Field</p>
          <h1 className="font-heading text-4xl font-bold text-[var(--navy)] md:text-6xl">Stories told through images</h1>
          <p className="mx-auto max-w-3xl text-lg text-[var(--text-muted)]">
            A visual journey through our work, where every photograph reflects resilience, dignity, and community action.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="editorial-section space-y-10">
          <div className="flex flex-wrap justify-center gap-2">
            {['All', 'Health Camps', 'Education', 'Livelihood', 'Women Empowerment', 'Community'].map((pill) => (
              <button key={pill} className="rounded-full border border-[var(--border-soft)] bg-[var(--surface)] px-4 py-2 text-xs font-semibold uppercase tracking-wide text-[var(--navy)]">
                {pill}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {galleryItems.map((item, idx) => (
              <div
                key={`${item.title}-${item.place}`}
                className={`group overflow-hidden rounded-2xl border border-[var(--border-soft)] bg-[var(--surface)] ${
                  idx % 5 === 0 ? 'md:row-span-2' : ''
                }`}
              >
                <img
                  src={item.image}
                  alt={item.title}
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

      <section className="border-y border-[var(--border-soft)] bg-[color:rgb(30_58_95_/_0.06)] py-16">
        <div className="editorial-section space-y-8">
          <div className="text-center">
            <p className="section-eyebrow">Field Stories</p>
            <h2 className="font-heading text-4xl font-bold text-[var(--navy)]">From the field</h2>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {[
              ['Health Camp – Thane 2024', 'https://images.unsplash.com/photo-1593113598332-cd288d649433?w=600&q=80'],
              ['Women Empowerment Stories', 'https://images.unsplash.com/photo-1617854818583-09e7f077a156?w=600&q=80'],
              ['Annual Impact Report 2023', 'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=600&q=80'],
            ].map(([title, image]) => (
              <div key={title} className="group relative overflow-hidden rounded-2xl border border-[var(--border-soft)] bg-[var(--surface)]">
                <img src={image} alt={title} className="h-56 w-full object-cover" />
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
            <Link href="/donate" className="inline-flex items-center justify-center rounded-full bg-[var(--accent)] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[var(--accent-warm)]">
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
