import Image from 'next/image';
import Link from 'next/link';
import type { ReactNode } from 'react';
import Icon from './icons';

interface Crumb {
  label: string;
  href?: string;
}

interface PageHeroProps {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: string;
  crumbs?: Crumb[];
  image?: string;
  children?: ReactNode;
}

/** Shared navy page hero with optional breadcrumb, background image and CTAs. */
export default function PageHero({ eyebrow, title, subtitle, crumbs, image, children }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-[var(--navy)]">
      {image && (
        <Image
          src={image}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-25"
        />
      )}
      <div className="absolute inset-0 bg-gradient-to-br from-[color:rgb(20_41_63_/_0.97)] via-[color:rgb(27_58_92_/_0.9)] to-[color:rgb(47_90_134_/_0.82)]" />

      <div className="container-x relative py-16 md:py-24">
        {crumbs && crumbs.length > 0 && (
          <nav aria-label="Breadcrumb" className="mb-7">
            <ol className="flex flex-wrap items-center gap-2 text-xs font-medium text-white/60">
              {crumbs.map((crumb, idx) => (
                <li key={crumb.label} className="flex items-center gap-2">
                  {crumb.href ? (
                    <Link href={crumb.href} className="transition-colors hover:text-white">
                      {crumb.label}
                    </Link>
                  ) : (
                    <span className="text-white">{crumb.label}</span>
                  )}
                  {idx < crumbs.length - 1 && <Icon name="chevron-right" size={13} className="text-white/35" />}
                </li>
              ))}
            </ol>
          </nav>
        )}

        {eyebrow && <p className="eyebrow mb-4 text-white">{eyebrow}</p>}

        <h1 className="max-w-4xl font-heading text-4xl font-extrabold leading-[1.08] text-white md:text-6xl">
          {title}
        </h1>

        {subtitle && <p className="mt-5 max-w-2xl text-lg leading-relaxed text-white/80">{subtitle}</p>}

        {children && <div className="mt-8">{children}</div>}
      </div>
    </section>
  );
}
