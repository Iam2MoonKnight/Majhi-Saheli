'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { supabase } from '@/lib/supabase';

export default function AuthCallback() {
  const router = useRouter();

  useEffect(() => {
    const handleEmailConfirmation = async () => {
      try {
        const query = new URLSearchParams(window.location.search);
        const code = query.get('code');
        const next = query.get('next') || '/login';

        if (!code) {
          router.push('/login?message=error_no_code');
          return;
        }

        // Exchange the code for a session
        const { data, error } = await supabase.auth.exchangeCodeForSession(code);

        if (error) {
          console.error('Auth error:', error);
          router.push(`/login?message=error_${error.code}`);
          return;
        }

        if (data?.user) {
          // User email is now confirmed
          router.push(`${next}?message=email_confirmed&user=${data.user.id}`);
        } else {
          router.push('/login?message=error_no_user');
        }
      } catch (error) {
        console.error('Callback error:', error);
        router.push('/login?message=error_callback');
      }
    };

    handleEmailConfirmation();
  }, [router]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 to-pink-50 flex items-center justify-center">
      <div className="text-center">
        <div className="w-16 h-16 bg-gradient-to-br from-rose-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
          <span className="text-white font-bold text-2xl">S</span>
        </div>
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Confirming your email...</h1>
        <p className="text-gray-600">Please wait while we verify your email address.</p>
      </div>
    </div>
  );
}
