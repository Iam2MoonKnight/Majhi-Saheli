'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { supabase } from '@/lib/supabase';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState<string | null>(null);

  useEffect(() => {
    const checkAuth = async () => {
      const { data } = await supabase.auth.getSession();
      if (data?.session?.user) {
        setIsLoggedIn(true);
        const userData = data.session.user.user_metadata?.name || data.session.user.email;
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

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-neutral-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 bg-gradient-to-br from-violet-600 to-purple-600 rounded-lg flex items-center justify-center shadow-lg shadow-violet-600/30 group-hover:shadow-xl group-hover:shadow-violet-600/40 transition-all">
              <span className="text-white font-bold text-xl">S</span>
            </div>
            <span className="text-2xl font-bold text-neutral-900">Saheli</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-8">
            <Link href="/" className="text-neutral-700 hover:text-violet-600 transition-colors font-medium">
              Home
            </Link>
            <Link href="/about" className="text-neutral-700 hover:text-violet-600 transition-colors font-medium">
              About
            </Link>
            <Link href="/programs" className="text-neutral-700 hover:text-violet-600 transition-colors font-medium">
              Programs
            </Link>
            <Link href="/blog" className="text-neutral-700 hover:text-violet-600 transition-colors font-medium">
              Blog
            </Link>
            <Link href="/saheli-circle" className="text-neutral-700 hover:text-violet-600 transition-colors font-medium">
              Community
            </Link>
            <Link href="/impact" className="text-neutral-700 hover:text-violet-600 transition-colors font-medium">
              Impact
            </Link>
            <Link href="/contact" className="text-neutral-700 hover:text-violet-600 transition-colors font-medium">
              Contact
            </Link>

            {isLoggedIn ? (
                <div className="relative group">
                  <button
                    type="button"
                    aria-label="Open user menu"
                    className="w-10 h-10 rounded-full bg-neutral-100 text-neutral-700 flex items-center justify-center font-semibold hover:bg-neutral-200 transition-colors"
                  >
                    {userName ? userName.trim().charAt(0).toUpperCase() : 'U'}
                  </button>

                  <div className="absolute right-0 mt-2 w-48 rounded-lg border border-neutral-200 bg-white shadow-lg opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-opacity">
                    <div className="px-4 py-3 border-b border-neutral-200">
                      <p className="text-sm text-neutral-500">Signed in</p>
                      <p className="text-sm font-semibold text-neutral-900 truncate">
                        {userName || 'User'}
                      </p>
                    </div>
                    <div className="py-2">
                      <Link
                        href="/profile"
                        className="block px-4 py-2 text-sm text-neutral-700 hover:bg-neutral-50"
                      >
                        Profile
                      </Link>
                      <Link
                        href="/dashboard"
                        className="block px-4 py-2 text-sm text-neutral-700 hover:bg-neutral-50"
                      >
                        Dashboard
                      </Link>
                      <button
                        onClick={handleLogout}
                        className="w-full text-left px-4 py-2 text-sm text-neutral-700 hover:bg-neutral-50"
                      >
                        Logout
                      </button>
                    </div>
                  </div>
                </div>
              ) : (
              <Link href="/login" className="px-5 py-2 bg-violet-600 text-white font-semibold rounded-lg hover:bg-violet-700 transition-colors shadow-lg shadow-violet-600/30">
                Login
              </Link>
            )}

            <Link
              href="/donate"
              className="px-6 py-2.5 bg-gradient-to-r from-pink-500 to-pink-600 text-white font-semibold rounded-lg hover:from-pink-600 hover:to-pink-700 transition-all shadow-lg shadow-pink-600/30 hover:shadow-xl"
            >
              Donate
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 hover:bg-neutral-100 rounded-lg transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg className="w-6 h-6 text-neutral-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden pb-4 space-y-1 border-t border-neutral-200 pt-4 mt-2">
            <Link href="/" className="block px-4 py-3 text-neutral-700 hover:bg-neutral-50 hover:text-violet-600 rounded-lg transition-colors font-medium">
              Home
            </Link>
            <Link href="/about" className="block px-4 py-3 text-neutral-700 hover:bg-neutral-50 hover:text-violet-600 rounded-lg transition-colors font-medium">
              About
            </Link>
            <Link href="/programs" className="block px-4 py-3 text-neutral-700 hover:bg-neutral-50 hover:text-violet-600 rounded-lg transition-colors font-medium">
              Programs
            </Link>
            <Link href="/blog" className="block px-4 py-3 text-neutral-700 hover:bg-neutral-50 hover:text-violet-600 rounded-lg transition-colors font-medium">
              Blog
            </Link>
            <Link href="/saheli-circle" className="block px-4 py-3 text-neutral-700 hover:bg-neutral-50 hover:text-violet-600 rounded-lg transition-colors font-medium">
              Community
            </Link>
            <Link href="/impact" className="block px-4 py-3 text-neutral-700 hover:bg-neutral-50 hover:text-violet-600 rounded-lg transition-colors font-medium">
              Impact
            </Link>
            <Link href="/contact" className="block px-4 py-3 text-neutral-700 hover:bg-neutral-50 hover:text-violet-600 rounded-lg transition-colors font-medium">
              Contact
            </Link>

            {isLoggedIn ? (
              <>
                <Link href="/profile" className="block px-4 py-3 text-neutral-700 hover:bg-neutral-50 hover:text-violet-600 rounded-lg transition-colors font-medium">
                  Profile
                </Link>
                <Link href="/dashboard" className="block px-4 py-3 text-neutral-700 hover:bg-neutral-50 hover:text-violet-600 rounded-lg transition-colors font-medium">
                  Dashboard
                </Link>
                <button
                  onClick={handleLogout}
                  className="w-full text-left px-4 py-3 text-neutral-700 hover:bg-neutral-50 rounded-lg transition-colors font-medium"
                >
                  Logout
                </button>
              </>
            ) : (
              <Link href="/login" className="block px-4 py-3 bg-violet-600 text-white rounded-lg hover:bg-violet-700 transition-colors font-semibold text-center">
                Login
              </Link>
            )}

            <Link href="/donate" className="block px-4 py-3 bg-gradient-to-r from-pink-500 to-pink-600 text-white rounded-lg hover:from-pink-600 hover:to-pink-700 transition-all font-semibold text-center shadow-lg">
              Donate
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
