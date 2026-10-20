import Icon, { type IconName } from './icons';

interface RoadmapCardProps {
  index: string;
  title: string;
  text: string;
  icon?: IconName;
}

export default function RoadmapCard({ index, title, text, icon = 'target' }: RoadmapCardProps) {
  return (
    <div className="card card-hover flex flex-col rounded-xl p-8">
      <div className="flex items-center justify-between">
        <span className="icon-badge">
          <Icon name={icon} size={22} />
        </span>
        <span className="font-mono-eyebrow text-3xl font-bold text-[var(--border-soft)]">{index}</span>
      </div>

      <h3 className="mt-6 font-heading text-xl font-bold text-[var(--navy)]">{title}</h3>
      <p className="mt-3 text-sm leading-relaxed">{text}</p>
    </div>
  );
}
