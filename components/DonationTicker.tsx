import Link from 'next/link';
import Icon from './icons';

const WORDS = ['Donate Now', 'Fund a Health Camp', 'Sponsor a Learning Centre', 'Support Rural Livelihoods'];

function Run() {
  return (
    <>
      {WORDS.map((word) => (
        <span key={word} className="mx-5 inline-flex items-center gap-4 text-[11px] font-bold uppercase tracking-[0.3em]">
          {word}
          <span className="h-1.5 w-1.5 rounded-full bg-[#e85d75]" />
        </span>
      ))}
    </>
  );
}

/** Navy bar with a scrolling coral "Donate Now" marquee, shown above the navbar. */
export default function DonationTicker() {
  return (
    <div className="relative bg-[var(--navy-dark)] text-white">
      <Link
        href="/donate"
        aria-label="Donate now"
        className="group relative flex h-10 items-center overflow-hidden"
      >
        <div className="ticker-track flex h-10 items-center whitespace-nowrap will-change-transform">
          {/* Two identical halves → translateX(-50%) loops seamlessly */}
          <Run />
          <Run />
        </div>

        <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center bg-[var(--navy-dark)] pl-6 pr-4">
          <span className="inline-flex items-center gap-2 rounded-full bg-[var(--navy)] px-3.5 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-white shadow-[0_6px_18px_rgba(232,93,117,0.4)] transition-transform group-hover:translate-x-0.5">
            <Icon name="heart" size={12} />
            Give
          </span>
        </span>
      </Link>
    </div>
  );
}
