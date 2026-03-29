interface StatCardProps {
  icon: string;
  number: string | number;
  label: string;
  description?: string;
}

export default function StatCard({ icon, number, label, description }: StatCardProps) {
  const labelInitial = icon?.toString().charAt(0) || 'S';

  const renderIcon = () => {
    return (
      <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full border border-[var(--accent)]/40 bg-[color:rgb(232_131_74_/_0.12)] text-xl font-semibold text-[var(--accent)]">
        {labelInitial}
      </div>
    );
  };

  return (
    <div className="group rounded-2xl border border-[var(--border-soft)] bg-[var(--surface)] p-8 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      {renderIcon()}
      <div className="mb-2 font-heading text-4xl font-bold text-[var(--navy)] transition-transform group-hover:scale-110">{number}</div>
      <div className="mb-1 text-lg font-semibold text-[var(--navy)]">{label}</div>
      {description && <div className="text-sm text-[var(--text-muted)]">{description}</div>}
    </div>
  );
}
