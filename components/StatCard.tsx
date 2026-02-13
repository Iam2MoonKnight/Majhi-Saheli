interface StatCardProps {
  icon: string;
  number: string | number;
  label: string;
  description?: string;
}

export default function StatCard({ icon, number, label, description }: StatCardProps) {
  // Map emojis to SVG icons or keep minimal design
  const renderIcon = () => {
    return (
      <div className="w-14 h-14 rounded-full bg-violet-100 text-violet-600 flex items-center justify-center mb-4">
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      </div>
    );
  };

  return (
    <div className="bg-white rounded-xl border border-neutral-200 shadow-sm hover:shadow-lg transition-all duration-300 p-8 text-center group hover:-translate-y-1">
      {renderIcon()}
      <div className="text-4xl font-bold text-violet-600 mb-2 group-hover:scale-110 transition-transform">{number}</div>
      <div className="text-lg font-semibold text-neutral-900 mb-1">{label}</div>
      {description && <div className="text-sm text-neutral-600">{description}</div>}
    </div>
  );
}
