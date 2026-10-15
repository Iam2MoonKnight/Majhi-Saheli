'use client';

interface PartnerPillProps {
  name: string;
  slug?: string;
}

export default function PartnerPill({ name, slug }: PartnerPillProps) {
  const hasLogo = Boolean(slug);

  return (
    <div className="flex h-16 items-center justify-center rounded-full border border-[var(--border-soft)] bg-white px-3 text-center text-sm font-semibold text-[var(--navy)] transition-colors duration-200 hover:border-[#e85d75] hover:text-[#e85d75]">
      {hasLogo ? (
        <>
          <img
            src={`/images/partners/${slug}.png`}
            alt={`${name} logo`}
            className="max-h-10 w-auto max-w-[90%] object-contain"
            onError={(event) => {
              const target = event.currentTarget as HTMLImageElement;
              target.style.display = 'none';
              const fallback = target.nextElementSibling as HTMLElement | null;
              if (fallback) {
                fallback.style.display = 'inline-flex';
              }
            }}
          />
          <span className="hidden items-center justify-center">{name}</span>
        </>
      ) : (
        <span className="inline-flex items-center justify-center">{name}</span>
      )}
    </div>
  );
}
