import Link from 'next/link';
import { getActiveHeroContent } from '@/lib/supabase-functions';

export default async function HeroSection() {
  let heroContent = await getActiveHeroContent();

  // Default content if none is set
  if (!heroContent) {
    heroContent = {
      title: 'Empowering Women',
      subtitle: 'Enriching Communities',
      description: 'Through education, healthcare, and vocational training, we\'re building a future where every rural woman has the opportunity to thrive and lead.',
      cta_text: 'Support Our Mission',
      cta_link: '/donate',
      image_url: null,
    };
  }

  return (
    <section className="relative overflow-hidden pb-20 pt-14 lg:pt-20">
      <div className="absolute -left-16 top-10 h-52 w-52 rounded-full bg-[color:rgb(42_123_111_/_0.12)] blur-2xl" />
      <div className="absolute right-6 top-16 h-64 w-64 rounded-full bg-[color:rgb(232_131_74_/_0.2)] blur-3xl" />

      <div className="editorial-section relative z-10">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <div className="space-y-8 reveal-up">
            <div className="inline-flex items-center gap-2 rounded-full bg-[color:rgb(232_131_74_/_0.16)] px-4 py-2">
              <span className="h-2 w-2 rounded-full bg-[var(--accent)]" />
              <span className="section-eyebrow text-[var(--navy)]">Empowering Rural Maharashtra</span>
            </div>

            <h1 className="font-heading text-5xl font-bold leading-[1.02] text-[var(--navy)] md:text-6xl xl:text-7xl">
              {heroContent.title}
              <span className="mt-3 block text-4xl md:text-5xl xl:text-6xl text-outline">{heroContent.subtitle}</span>
            </h1>

            <p className="max-w-xl text-lg leading-relaxed text-[var(--text-muted)] md:text-xl">
              {heroContent.description}
            </p>

            <div className="flex flex-col gap-4 pt-1 sm:flex-row">
              <Link
                href={heroContent.cta_link}
                className="inline-flex items-center justify-center rounded-full bg-[var(--accent)] px-7 py-3.5 text-sm font-semibold text-white shadow-[0_10px_24px_rgba(232,131,74,0.33)] transition hover:bg-[var(--accent-warm)]"
              >
                {heroContent.cta_text}
              </Link>
              <Link
                href="/programs"
                className="inline-flex items-center justify-center rounded-full border border-[var(--navy)] bg-[var(--surface)] px-7 py-3.5 text-sm font-semibold text-[var(--navy)] transition hover:bg-[var(--navy)] hover:text-white"
              >
                Explore Programs
              </Link>
            </div>

            <div className="grid grid-cols-3 gap-4 border-t border-[var(--border-soft)] pt-7">
              <div>
                <p className="font-heading text-3xl font-bold text-[var(--accent)]">2,500+</p>
                <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-[var(--text-muted)]">Lives impacted</p>
              </div>
              <div>
                <p className="font-heading text-3xl font-bold text-[var(--accent)]">50+</p>
                <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-[var(--text-muted)]">Villages</p>
              </div>
              <div>
                <p className="font-heading text-3xl font-bold text-[var(--accent)]">15+</p>
                <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-[var(--text-muted)]">Programs</p>
              </div>
            </div>
          </div>

          <div className="relative h-[420px] reveal-up lg:h-[560px]">
            <div className="float-soft absolute -left-6 top-8 h-20 w-20 rounded-2xl border border-[var(--accent)]/40 bg-[color:rgb(232_131_74_/_0.16)]" />
            <div className="absolute -right-4 bottom-14 h-28 w-28 rounded-full border border-[var(--teal)]/50 bg-[color:rgb(42_123_111_/_0.14)]" />

            <div className="absolute left-8 top-10 h-full w-full rounded-[2rem] bg-[color:rgb(13_27_42_/_0.12)]" />
            <div className="relative h-full overflow-hidden rounded-[2rem] border border-[var(--border-soft)] bg-[var(--surface)] shadow-[0_24px_54px_rgba(13,27,42,0.18)]">
              {heroContent.image_url ? (
                <img src={heroContent.image_url} alt={heroContent.title} className="h-full w-full object-cover" />
              ) : (
                <div className="h-full w-full bg-gradient-to-br from-[color:rgb(30_58_95_/_0.2)] via-[color:rgb(42_123_111_/_0.2)] to-[color:rgb(232_131_74_/_0.2)]" />
              )}

              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[color:rgb(13_27_42_/_0.86)] via-[color:rgb(13_27_42_/_0.58)] to-transparent p-7 text-white">
                <p className="font-mono-eyebrow text-[11px] uppercase text-[var(--accent)]">Featured Story</p>
                <h3 className="mt-2 font-heading text-2xl font-semibold text-white">From Beneficiary to Community Leader</h3>
                <p className="mt-1 text-sm text-white/85">How Sunita transformed her village through education</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
