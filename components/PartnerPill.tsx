interface PartnerPillProps {
  name: string;
}

export default function PartnerPill({ name }: PartnerPillProps) {
  return (
    <div className="flex h-16 items-center justify-center rounded-full border border-[var(--border-soft)] bg-white px-5 text-center text-sm font-semibold text-[var(--navy)] transition-colors duration-200 hover:border-[#e85d75] hover:text-[#e85d75]">
      {name}
    </div>
  );
}
