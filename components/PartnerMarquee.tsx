import Image from 'next/image';
import SectionEyebrow from './SectionEyebrow';
import { PARTNERS } from '@/lib/organization';

function PartnerLogos({ duplicate = false }: { duplicate?: boolean }) {
  return (
    <ul className="partner-marquee-group" aria-hidden="true">
      {PARTNERS.map((partner) => (
        <li
          key={`${partner.slug}${duplicate ? '-duplicate' : ''}`}
          className="group flex h-20 w-36 shrink-0 items-center justify-center rounded-xl border border-[var(--border-soft)] bg-white px-4 md:h-24 md:w-48"
        >
          <Image
            src={partner.logoSrc}
            alt=""
            width={240}
            height={120}
            loading="eager"
            unoptimized
            className="h-10 w-auto max-w-full object-contain grayscale transition duration-200 group-hover:grayscale-0 md:h-14"
          />
        </li>
      ))}
    </ul>
  );
}

export default function PartnerMarquee() {
  return (
    <div className="space-y-10">
      <div className="mx-auto max-w-3xl text-center">
        <SectionEyebrow className="mb-4">Partnerships</SectionEyebrow>
        <h2 className="font-heading text-3xl font-extrabold text-[var(--navy)] md:text-4xl">
          Our Associate Partners
        </h2>
      </div>

      <div className="partner-marquee" role="region" aria-label="Our Associate Partners">
        <div className="partner-marquee-viewport">
          <div className="partner-marquee-track">
            <PartnerLogos />
            <PartnerLogos duplicate />
          </div>
        </div>
        <ul className="sr-only">
          {PARTNERS.map((partner) => (
            <li key={partner.slug}>{partner.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
