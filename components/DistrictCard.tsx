import Icon from './icons';

interface DistrictCardProps {
  name: string;
  detail?: string;
}

/** Transparent light-bordered card used inside the navy "Our Reach" section. */
export default function DistrictCard({ name, detail }: DistrictCardProps) {
  return (
    <div className="flex flex-col items-center gap-3 rounded-2xl border border-white/15 bg-white/[0.04] px-4 py-7 text-center transition-colors duration-200 hover:border-[#e85d75] hover:bg-white/[0.09]">
      <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[color:rgb(232_93_117_/_0.16)] text-[#e85d75]">
        <Icon name="map-pin" size={20} />
      </span>
      <p className="font-heading text-lg font-bold text-white">{name}</p>
      {detail && <p className="text-xs text-white/60">{detail}</p>}
    </div>
  );
}
