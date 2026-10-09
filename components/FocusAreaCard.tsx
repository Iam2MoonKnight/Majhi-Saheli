import Image from 'next/image';
import Link from 'next/link';
import Icon, { type IconName } from './icons';

interface FocusAreaCardProps {
  title: string;
  description: string;
  href: string;
  image: string;
  icon: IconName;
  priority?: boolean;
}

export default function FocusAreaCard({ title, description, href, image, icon, priority }: FocusAreaCardProps) {
  return (
    <Link href={href} className="card card-hover group flex flex-col overflow-hidden">
      <div className="relative h-44 w-full overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          priority={priority}
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
        />
      </div>

      <div className="relative flex flex-1 flex-col p-6 pt-9">
        <span className="icon-badge absolute -top-6 left-6">
          <Icon name={icon} size={22} />
        </span>

        <h3 className="font-heading text-xl font-bold text-[var(--navy)]">{title}</h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed">{description}</p>

        <span className="link-coral mt-5">
          Learn More
          <Icon name="arrow-right" size={14} />
        </span>
      </div>
    </Link>
  );
}
