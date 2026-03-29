'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { supabase, getSafeSession } from '@/lib/supabase';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState<string | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    
    const checkAuth = async () => {
      const session = await getSafeSession();
      if (session?.user) {
        setIsLoggedIn(true);
        const userData = session.user.user_metadata?.name || session.user.email;
        setUserName(userData);
      }
    };

    checkAuth();

    const { data: authListener } = supabase.auth.onAuthStateChange(
      (event, session) => {
        if (session?.user) {
          setIsLoggedIn(true);
          setUserName(session.user.user_metadata?.name || session.user.email);
        } else {
          setIsLoggedIn(false);
          setUserName(null);
        }
      }
    );

    return () => {
      authListener?.subscription?.unsubscribe();
    };
  }, []);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    setIsLoggedIn(false);
    setUserName(null);
  };

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/gallery', label: 'Gallery' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <nav className="sticky top-0 z-50">
      <div className="h-9 overflow-hidden bg-[var(--accent)] text-white">
        <div className="ticker-track flex whitespace-nowrap font-mono-eyebrow text-[11px] leading-9">
          <span className="pr-10">DONATE NOW * DONATE NOW * DONATE NOW * DONATE NOW * DONATE NOW *</span>
          <span className="pr-10">DONATE NOW * DONATE NOW * DONATE NOW * DONATE NOW * DONATE NOW *</span>
          <span className="pr-10">DONATE NOW * DONATE NOW * DONATE NOW * DONATE NOW * DONATE NOW *</span>
        </div>
      </div>

      <div className="border-b border-white/10 bg-[color:rgb(13_27_42_/_0.95)] backdrop-blur-xl shadow-[0_10px_24px_rgba(13,27,42,0.22)]">
        <div className="mx-auto flex h-[72px] max-w-7xl items-center gap-6 px-6 sm:px-8 lg:px-12">
          <Link href="/" className="group flex items-center gap-3">
            <Image src="/logo.png" alt="Mazi Saheli Logo" width={145} height={60} className="drop-shadow-md" />
          </Link>

          <div className="ml-auto hidden items-center gap-1 lg:flex">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-md px-3 py-2 text-sm font-medium text-white/75 transition hover:bg-white/10 hover:text-white"
              >
                {item.label}
              </Link>
            ))}

            <Link
              href="tel:+910000000000"
              className="ml-2 rounded-full border border-[var(--accent)] px-3 py-1.5 text-[11px] font-mono-eyebrow text-[var(--accent)] transition hover:bg-[var(--accent)] hover:text-white"
            >
              +91 0000000000
            </Link>

            {mounted && (isLoggedIn ? (
              <div className="relative ml-2 group">
                <button
                  type="button"
                  aria-label="Open user menu"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/10 font-semibold text-white"
                >
                  {userName ? userName.trim().charAt(0).toUpperCase() : 'U'}
                </button>

                <div className="pointer-events-none absolute right-0 mt-2 w-52 rounded-xl border border-white/15 bg-[var(--navy-mid)] py-2 opacity-0 shadow-xl transition-opacity group-hover:pointer-events-auto group-hover:opacity-100">
                  <div className="border-b border-white/10 px-4 py-3">
                    <p className="text-xs text-white/65">Signed in</p>
                    <p className="truncate text-sm font-semibold text-white">{userName || 'User'}</p>
                  </div>
                  <Link href="/profile" className="block px-4 py-2 text-sm text-white/80 hover:bg-white/10">
                    Profile
                  </Link>
                  <Link href="/dashboard" className="block px-4 py-2 text-sm text-white/80 hover:bg-white/10">
                    Dashboard
                  </Link>
                  <button onClick={handleLogout} className="w-full px-4 py-2 text-left text-sm text-white/80 hover:bg-white/10">
                    Logout
                  </button>
                </div>
              </div>
            ) : (
              <Link
                href="/login"
                className="ml-2 rounded-full border border-white/25 bg-white/10 px-4 py-2 text-sm font-semibold text-white transition hover:bg-white/20"
              >
                Login
              </Link>
            ))}

            <Link
              href="/donate"
              className="ml-2 inline-flex items-center justify-center rounded-full bg-[var(--accent)] px-4 py-2 text-sm font-semibold text-white shadow-[0_8px_20px_rgba(232,131,74,0.35)] transition hover:bg-[var(--accent-warm)]"
            >
              Donate
            </Link>
          </div>

          <button
            className="ml-auto rounded-lg p-2 text-white transition hover:bg-white/10 lg:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'} />
            </svg>
          </button>
        </div>

        {isOpen && (
          <div className="border-t border-white/10 bg-[var(--navy)] px-6 pb-5 pt-4 lg:hidden">
            <div className="space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block rounded-lg px-4 py-3 text-sm font-medium text-white/80 transition hover:bg-white/10 hover:text-white"
                >
                  {item.label}
                </Link>
              ))}

              {mounted && (isLoggedIn ? (
                <>
                  <Link href="/profile" className="block rounded-lg px-4 py-3 text-sm font-medium text-white/80 hover:bg-white/10">
                    Profile
                  </Link>
                  <Link href="/dashboard" className="block rounded-lg px-4 py-3 text-sm font-medium text-white/80 hover:bg-white/10">
                    Dashboard
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="w-full rounded-lg px-4 py-3 text-left text-sm font-medium text-white/80 hover:bg-white/10"
                  >
                    Logout
                  </button>
                </>
              ) : (
                <Link
                  href="/login"
                  className="block rounded-lg border border-white/20 bg-white/10 px-4 py-3 text-center text-sm font-semibold text-white"
                >
                  Login
                </Link>
              ))}

              <Link
                href="/donate"
                className="block rounded-lg bg-[var(--accent)] px-4 py-3 text-center text-sm font-semibold text-white"
              >
                Donate
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
