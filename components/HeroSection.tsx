import Link from 'next/link';
import { getActiveHeroContent } from '@/lib/supabase-functions';
import Icon from './icons';

export default async function HeroSection() {
  let heroContent = await getActiveHeroContent();

  // Default content if none is set
  if (!heroContent) {
    heroContent = {
      title: 'Empowering Women',
      subtitle: 'Enriching Communities',
      description:
        "Through education, healthcare, and vocational training, we're building a future where every rural woman has the opportunity to thrive and lead.",
      cta_text: 'Donate Now',
      cta_link: '/donate',
      image_url: null,
    };
  }

  const heroImage =
    heroContent.image_url ??
    '/field-images/community/community-farmers.jpg';

  return (
    <section className="relative overflow-hidden bg-[var(--navy)]">
      {/* Base wash + dot texture */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#14293f] via-[#1b3a5c] to-[#2f5a86]" />
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, #ffffff 1px, transparent 0)',
          backgroundSize: '34px 34px',
        }}
      />
      <div className="absolute -right-24 -top-24 h-80 w-80 rounded-full bg-[color:rgb(232_93_117_/_0.18)] blur-3xl" />

      <div className="container-x relative grid gap-12 py-16 md:py-24 lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
        <div className="space-y-7">
          <span className="inline-flex items-center gap-2.5 rounded-full border border-white/15 bg-white/[0.06] px-4 py-2">
            <span className="h-2 w-2 rounded-full bg-[#e85d75] pulse-dot" />
            <span className="eyebrow">Empowering Rural Maharashtra</span>
          </span>

          <h1 className="font-heading text-[2.4rem] font-extrabold leading-[1.05] text-white sm:text-5xl lg:text-6xl xl:text-[4.25rem]">
            Building a Resilient &amp; Self&nbsp;Sufficient <span className="text-[#e85d75]">Rural India</span>
          </h1>

          <p className="max-w-xl text-base leading-relaxed text-white/80 md:text-lg">{heroContent.description}</p>

          <div className="flex flex-col gap-3 sm:flex-row">
            <Link href={heroContent.cta_link} className="btn btn-coral">
              <Icon name="heart" size={16} />
              {heroContent.cta_text}
            </Link>
            <Link href="/about" className="btn btn-outline-light">
              Learn More
              <Icon name="arrow-right" size={16} />
            </Link>
          </div>

          <div className="grid max-w-lg grid-cols-3 gap-6 border-t border-white/15 pt-7">
            {[
              ['32,000+', 'Lives impacted (2025-26)'],
              ['8', 'Operating districts'],
              ['80+', 'Health camps (2025-26)'],
            ].map(([value, label]) => (
              <div key={label}>
                <p className="stat-value text-3xl text-white md:text-4xl">{value}</p>
                <p className="mt-1.5 text-[10px] font-bold uppercase tracking-[0.16em] text-white/55">{label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="relative h-[340px] overflow-hidden rounded-3xl border border-white/15 shadow-[0_28px_60px_rgba(10,22,36,0.5)] lg:h-[500px]">
            {/* DB-driven URL → plain img (arbitrary hosts would break the optimizer) */}
            <img src={heroImage} alt={heroContent.title} className="h-full w-full object-cover" />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#14293f] via-[#14293f]/55 to-transparent p-6">
              <div className="inline-flex items-center gap-2.5 rounded-full bg-[#e85d75] px-4 py-2.5 shadow-[0_10px_24px_rgba(232,93,117,0.4)]">
                <span className="font-heading text-2xl font-extrabold leading-none text-white">8</span>
                <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-white">Districts Served</span>
              </div>
            </div>
          </div>

          <div className="float-soft absolute -bottom-6 -left-6 hidden h-24 w-24 rounded-2xl border border-[color:rgb(232_93_117_/_0.45)] bg-[color:rgb(232_93_117_/_0.18)] backdrop-blur-sm lg:block" />
        </div>
      </div>
    </section>
  );
}
