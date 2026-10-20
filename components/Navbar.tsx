'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useState, useEffect, useSyncExternalStore } from 'react';
import { supabase, getSafeSession } from '@/lib/supabase';
import DonationTicker from './DonationTicker';
import Icon from './icons';

const NAV_ITEMS = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/contact', label: 'Contact Us' },
];

const subscribeToHydration = () => () => {};
const getClientHydrationSnapshot = () => true;
const getServerHydrationSnapshot = () => false;

export default function Navbar() {
  const pathname = usePathname();
  const [openMenuPath, setOpenMenuPath] = useState<string | null>(null);
  const isOpen = openMenuPath === pathname;
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState<string | null>(null);
  const mounted = useSyncExternalStore(
    subscribeToHydration,
    getClientHydrationSnapshot,
    getServerHydrationSnapshot,
  );

  useEffect(() => {
    const checkAuth = async () => {
      const session = await getSafeSession();
      if (session?.user) {
        setIsLoggedIn(true);
        setUserName(session.user.user_metadata?.name || session.user.email);
      }
    };

    checkAuth();

    const { data: authListener } = supabase.auth.onAuthStateChange((event, session) => {
      if (session?.user) {
        setIsLoggedIn(true);
        setUserName(session.user.user_metadata?.name || session.user.email);
      } else {
        setIsLoggedIn(false);
        setUserName(null);
      }
    });

    return () => {
      authListener?.subscription?.unsubscribe();
    };
  }, []);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    setIsLoggedIn(false);
    setUserName(null);
  };

  const isActive = (href: string) => (href === '/' ? pathname === '/' : pathname.startsWith(href));

  return (
    <header className="sticky top-0 z-50">
      <DonationTicker />

      <div className="border-b border-[var(--border-soft)] bg-white/95 backdrop-blur-md">
        <div className="container-x flex h-[88px] items-center gap-2 px-3 sm:px-5 lg:px-12">
          <Link href="/" className="flex shrink-0 items-center gap-3" aria-label="Mazi Saheli Charitable Trust — home">
            <Image src="/logo.png" alt="Mazi Saheli Charitable Trust" width={1600} height={604} className="h-[60px] w-auto object-contain" priority />
          </Link>

          {/* Desktop nav */}
          <nav className="ml-auto hidden items-center gap-1 lg:flex" aria-label="Primary">
            {NAV_ITEMS.map((item) => {
              const active = isActive(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={active ? 'page' : undefined}
                  className={`relative px-3.5 py-2 text-[13px] font-bold uppercase tracking-[0.1em] transition-colors ${
                    active ? 'text-[var(--navy)]' : 'text-[var(--navy)] hover:text-[var(--navy-dark)]'
                  }`}
                >
                  {item.label}
                  <span
                    className={`absolute inset-x-3.5 -bottom-0.5 h-0.5 rounded-full bg-[#e85d75] transition-transform duration-200 ${
                      active ? 'scale-x-100' : 'scale-x-0'
                    }`}
                  />
                </Link>
              );
            })}

            <Link href="/donate" className="btn btn-coral btn-sm ml-2">
              <Icon name="heart" size={14} />
              Donate
            </Link>

            <Link
              href="tel:+917977669173"
              aria-label="Call us at +91 79776 69173"
              title="+91 79776 69173"
              className="ml-1 inline-flex h-10 w-10 items-center justify-center rounded-full border border-[var(--border-soft)] text-[var(--navy)] transition-colors hover:bg-[var(--off-white)]"
            >
              <Icon name="phone" size={16} />
            </Link>

            {mounted && isLoggedIn && (
              <div className="group relative ml-1">
                <button
                  type="button"
                  aria-label="Open user menu"
                  aria-haspopup="menu"
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-[var(--navy)] text-sm font-bold text-white transition-colors hover:bg-[var(--navy-dark)]"
                >
                  {userName ? userName.trim().charAt(0).toUpperCase() : 'U'}
                </button>

                <div className="pointer-events-none absolute right-0 mt-2 w-52 translate-y-1 rounded-xl border border-[var(--border-soft)] bg-white py-2 opacity-0 shadow-xl transition-all group-hover:pointer-events-auto group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:pointer-events-auto group-focus-within:translate-y-0 group-focus-within:opacity-100">
                  <div className="border-b border-[var(--border-soft)] px-4 py-3">
                    <p className="text-[11px] uppercase tracking-wide text-[var(--text-muted)]">Signed in</p>
                    <p className="truncate text-sm font-semibold text-[var(--navy)]">{userName || 'User'}</p>
                  </div>
                  <Link href="/profile" className="block px-4 py-2 text-sm text-[var(--navy)] hover:bg-[var(--off-white)]">
                    Profile
                  </Link>
                  <Link href="/dashboard" className="block px-4 py-2 text-sm text-[var(--navy)] hover:bg-[var(--off-white)]">
                    Dashboard
                  </Link>
                  <button onClick={handleLogout} className="w-full px-4 py-2 text-left text-sm text-[var(--navy)] hover:bg-[var(--off-white)]">
                    Logout
                  </button>
                </div>
              </div>
            )}

            {mounted && !isLoggedIn && (
              <Link
                href="/login"
                className="ml-1 rounded-full px-3 py-2 text-sm font-semibold text-[var(--navy)] transition-colors hover:text-[var(--navy-dark)]"
              >
                Login
              </Link>
            )}
          </nav>

          <div className="ml-auto flex shrink-0 items-center gap-1 lg:hidden">
            <Link href="/donate" className="btn btn-coral btn-sm px-2.5 py-2">
              <Icon name="heart" size={14} />
              Donate
            </Link>
            <Link
              href="tel:+917977669173"
              aria-label="Call us at +91 79776 69173"
              title="+91 79776 69173"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[var(--border-soft)] text-[var(--navy)] transition-colors hover:bg-[var(--off-white)]"
            >
              <Icon name="phone" size={16} />
            </Link>
            <button
              className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-[var(--border-soft)] text-[var(--navy)] transition-colors hover:bg-[var(--off-white)]"
              onClick={() => setOpenMenuPath(isOpen ? null : pathname)}
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isOpen}
            >
              <Icon name={isOpen ? 'close' : 'menu'} size={22} />
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="border-t border-[var(--border-soft)] bg-white px-6 pb-6 pt-4 lg:hidden">
            <nav className="space-y-1" aria-label="Mobile">
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`block rounded-lg px-4 py-3 text-sm font-semibold transition-colors ${
                    isActive(item.href)
                      ? 'bg-[color:rgb(232_93_117_/_0.08)] text-[var(--navy)]'
                      : 'text-[var(--navy)] hover:bg-[var(--off-white)]'
                  }`}
                >
                  {item.label}
                </Link>
              ))}

              {mounted &&
                (isLoggedIn ? (
                  <>
                    <Link href="/profile" className="block rounded-lg px-4 py-3 text-sm font-semibold text-[var(--navy)] hover:bg-[var(--off-white)]">
                      Profile
                    </Link>
                    <Link href="/dashboard" className="block rounded-lg px-4 py-3 text-sm font-semibold text-[var(--navy)] hover:bg-[var(--off-white)]">
                      Dashboard
                    </Link>
                    <button
                      onClick={handleLogout}
                      className="w-full rounded-lg px-4 py-3 text-left text-sm font-semibold text-[var(--navy)] hover:bg-[var(--off-white)]"
                    >
                      Logout
                    </button>
                  </>
                ) : (
                  <Link
                    href="/login"
                    className="block rounded-lg border border-[var(--border-soft)] px-4 py-3 text-center text-sm font-semibold text-[var(--navy)]"
                  >
                    Login
                  </Link>
                ))}

            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
