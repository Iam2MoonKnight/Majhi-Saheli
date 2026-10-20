import Icon from './icons';

interface DistrictCardProps {
  name: string;
  detail?: string;
  variant?: 'light' | 'navy';
}

export default function DistrictCard({ name, detail, variant = 'navy' }: DistrictCardProps) {
  const light = variant === 'light';

  return (
    <div
      className={`flex flex-col items-center gap-3 rounded-xl border px-4 py-7 text-center transition-all duration-200 hover:-translate-y-1 hover:shadow-lg ${
        light
          ? 'border-[var(--border-soft)] bg-white shadow-sm hover:border-[var(--navy)] hover:bg-[var(--off-white)]'
          : 'border-white/15 bg-white/[0.04] hover:border-[#e85d75] hover:bg-white/[0.09]'
      }`}
    >
      <span
        className={`flex h-11 w-11 items-center justify-center rounded-full ${
          light
            ? 'bg-[color:rgb(232_93_117_/_0.1)] text-[var(--navy)]'
            : 'bg-[color:rgb(232_93_117_/_0.16)] text-[#e85d75]'
        }`}
      >
        <Icon name="map-pin" size={20} />
      </span>
      <p className={`font-heading text-lg font-bold ${light ? 'text-[var(--navy)]' : 'text-white'}`}>{name}</p>
      {detail && <p className={`text-xs ${light ? 'text-[var(--text-muted)]' : 'text-white/75'}`}>{detail}</p>}
    </div>
  );
}
