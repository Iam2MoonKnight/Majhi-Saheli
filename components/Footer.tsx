import Link from 'next/link';
import Icon, { type IconName } from './icons';
import { OPERATING_DISTRICTS } from '@/lib/organization';

const NAVIGATE = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About Us' },
  { href: '/programs', label: 'Programs' },
  { href: '/impact', label: 'Our Impact' },
  { href: '/projects', label: 'Projects & Field Stories' },
  { href: '/news', label: 'News & Events' },
  { href: '/blog', label: 'Blog' },
];

const FOCUS_AREAS = [
  { href: '/focus-areas/health', label: 'Health' },
  { href: '/focus-areas/education', label: 'Education' },
  { href: '/focus-areas/livelihood', label: 'Livelihood' },
  { href: '/focus-areas/nutrition', label: 'Nutrition' },
  { href: '/focus-areas/women-empowerment', label: 'Women Empowerment' },
  { href: '/focus-areas/community-development', label: 'Community Development' },
];

const SOCIALS: { label: string; icon: IconName }[] = [
  { label: 'Facebook', icon: 'facebook' },
  { label: 'LinkedIn', icon: 'linkedin' },
  { label: 'X (Twitter)', icon: 'twitter' },
  { label: 'Instagram', icon: 'instagram' },
  { label: 'YouTube', icon: 'youtube' },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-[var(--border-soft)] bg-white text-[var(--text-muted)]">
      <div className="container-x py-16">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="space-y-5">
            <div className="flex items-center gap-3">
              <div className="flex h-[66px] w-[66px] items-center justify-center rounded-xl bg-[var(--navy)] font-heading text-lg font-extrabold text-white shadow-[0_10px_24px_rgba(232,93,117,0.35)]">
                MS
              </div>
              <span className="leading-tight">
                <span className="block font-heading text-lg font-extrabold text-[var(--navy)]">Mazi Saheli</span>
                <span className="block text-[10px] font-semibold uppercase tracking-[0.16em] text-[var(--text-muted)]">
                  Charitable Trust
                </span>
              </span>
            </div>

            <p className="text-sm leading-relaxed text-[var(--text-muted)]">
              Let&rsquo;s build a better tomorrow. Empowering rural women and communities across Maharashtra through
              education, health, livelihood and community-led development.
            </p>

            <div className="flex flex-wrap gap-2.5 pt-1">
              {SOCIALS.map((social) => {
                // TODO: Replace the placeholder with a verified profile URL when supplied.
                return (
                  <a
                    key={social.label}
                    href="#"
                    aria-label={social.label}
                    aria-disabled="true"
                    tabIndex={-1}
                    title="Coming soon"
                    className="pointer-events-none flex h-9 w-9 items-center justify-center rounded-full border border-[var(--border-soft)] text-[var(--text-muted)] opacity-60"
                  >
                    <Icon name={social.icon} size={16} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Navigate */}
          <div>
            <h3 className="mb-6 text-xs font-bold uppercase tracking-[0.18em] text-[var(--navy)]">Navigate</h3>
            <ul className="space-y-3 text-sm">
              {NAVIGATE.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="inline-flex items-center gap-2 text-[var(--text)] transition-colors hover:text-[var(--navy)]">
                    <span className="h-px w-3 bg-[#e85d75]" aria-hidden="true" />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Focus areas */}
          <div>
            <h3 className="mb-6 text-xs font-bold uppercase tracking-[0.18em] text-[var(--navy)]">Focus Areas</h3>
            <ul className="space-y-3 text-sm">
              {FOCUS_AREAS.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="inline-flex items-center gap-2 text-[var(--text)] transition-colors hover:text-[var(--navy)]">
                    <span className="h-px w-3 bg-[#e85d75]" aria-hidden="true" />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-6 text-xs font-bold uppercase tracking-[0.18em] text-[var(--navy)]">Contact</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <Icon name="map-pin" size={17} className="mt-0.5 shrink-0 text-[#e85d75]" />
                <span className="text-[var(--text)]">
                  B/307 Girija Bhavan CHS, Narmada Nagar, Cabin Road, Bhayander East, Thane – 401105
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Icon name="map-pin" size={17} className="mt-0.5 shrink-0 text-[#e85d75]" />
                <span className="text-[var(--text)]">At Post Savarpada Village, Taluka Jawhar, District Palghar – 401603</span>
              </li>
              <li className="flex items-start gap-3">
                <Icon name="mail" size={17} className="mt-0.5 shrink-0 text-[#e85d75]" />
                <a href="mailto:connect@msct.org.in" className="text-[var(--text)] transition-colors hover:text-[var(--navy)]">
                  connect@msct.org.in
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Icon name="phone" size={17} className="mt-0.5 shrink-0 text-[#e85d75]" />
                <a href="tel:+917977669173" className="text-[var(--text)] transition-colors hover:text-[var(--navy)]">
                  +91 79776 69173
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Icon name="home" size={17} className="mt-0.5 shrink-0 text-[#e85d75]" />
                <a href="https://www.msct.org.in" className="text-[var(--text)] transition-colors hover:text-[var(--navy)]">
                  www.msct.org.in
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Icon name="map-pin" size={17} className="mt-0.5 shrink-0 text-[#e85d75]" />
                <span className="text-[var(--text)]">Operating districts: {OPERATING_DISTRICTS.join(', ')}</span>
              </li>
            </ul>

            <Link href="/donate" className="btn btn-coral btn-sm mt-6">
              Donate Now
            </Link>
          </div>
        </div>

        <div className="mt-14 border-t border-[var(--border-soft)] pt-8">
          <div className="flex flex-col items-center justify-between gap-4 text-xs text-[var(--text-muted)] md:flex-row">
            <p>&copy; {currentYear} Mazi Saheli Charitable Trust. All rights reserved.</p>
            <div className="flex flex-wrap items-center gap-6">
              <a href="#" aria-disabled="true" tabIndex={-1} title="Link coming soon" className="pointer-events-none opacity-60">
                Privacy Policy
              </a>
              <a href="#" aria-disabled="true" tabIndex={-1} title="Link coming soon" className="pointer-events-none opacity-60">
                Terms of Service
              </a>
              <Link href="/impact#annual-reports" className="transition-colors hover:text-[var(--navy)]">
                Annual Report
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
