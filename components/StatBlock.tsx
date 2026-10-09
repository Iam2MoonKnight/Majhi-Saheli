interface StatBlockProps {
  value: string;
  label: string;
  description?: string;
  /** `card` = white bordered card · `navy` = for use on navy surfaces · `bare` = no chrome */
  variant?: 'card' | 'navy' | 'bare';
  className?: string;
}

export default function StatBlock({ value, label, description, variant = 'card', className = '' }: StatBlockProps) {
  if (variant === 'navy') {
    return (
      <div className={`text-center ${className}`}>
        <p className="stat-value text-4xl text-white md:text-5xl">{value}</p>
        <p className="mt-2 text-[11px] font-bold uppercase tracking-[0.18em] text-[#e85d75]">{label}</p>
        {description && <p className="mt-1 text-xs text-white/60">{description}</p>}
      </div>
    );
  }

  if (variant === 'bare') {
    return (
      <div className={className}>
        <p className="stat-value text-3xl text-[var(--navy)]">{value}</p>
        <p className="mt-1 text-[11px] font-bold uppercase tracking-[0.16em] text-[var(--text-muted)]">{label}</p>
        {description && <p className="mt-1 text-xs text-[var(--text-muted)]">{description}</p>}
      </div>
    );
  }

  return (
    <div className={`card card-hover p-6 text-center ${className}`}>
      <p className="stat-value text-4xl text-[var(--navy)]">{value}</p>
      <p className="mt-2 text-[11px] font-bold uppercase tracking-[0.16em] text-[var(--text-muted)]">{label}</p>
      {description && <p className="mt-2 text-xs text-[var(--text-muted)]">{description}</p>}
    </div>
  );
}
