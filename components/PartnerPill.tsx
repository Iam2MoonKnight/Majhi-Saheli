'use client';

import Image from 'next/image';

interface PartnerPillProps {
  name: string;
  logoSrc?: string;
}

export default function PartnerPill({ name, logoSrc }: PartnerPillProps) {
  return (
    <div className="flex min-h-28 items-center justify-center rounded-2xl border border-[var(--border-soft)] bg-white p-5 text-center text-sm font-semibold text-[var(--navy)] transition-colors duration-200 hover:border-[#e85d75]">
      {logoSrc ? (
        <Image
          src={logoSrc}
          alt={`${name} logo`}
          width={200}
          height={100}
          unoptimized
          className="max-h-14 w-auto max-w-full object-contain"
        />
      ) : (
        <span>{name}</span>
      )}
    </div>
  );
}
