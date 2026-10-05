'use client';

import { useState, useEffect } from 'react';
import { getUserProfile, signIn } from '@/lib/supabase-functions';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function LoginForm() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const message = params.get('message');
    const email = params.get('email');
    
    if (message === 'check_email') {
      setSuccessMessage(
        `Confirmation email sent to ${email || 'your email'}. Please check your inbox and click the link to confirm your account.`
      );
      if (email) setFormData(prev => ({ ...prev, email }));
    } else if (message === 'email_confirmed') {
      setSuccessMessage('Email confirmed successfully! You can now log in.');
    } else if (message === 'signup_success') {
      setSuccessMessage('Account created! You are now logged in.');
    } else if (message?.startsWith('error_')) {
      setError(`Error: ${message.replace('error_', '').replace(/_/g, ' ')}`);
    }
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccessMessage(null);

    try {
      const { user } = await signIn(formData.email, formData.password);

      if (user) {
        const profile = await getUserProfile(user.id);
        if (profile?.role === 'admin') {
          router.push('/admin');
          return;
        }
      }

      router.push('/dashboard');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Login failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mx-auto max-w-md rounded-2xl border border-[var(--border-soft)] bg-[var(--surface)] p-8 shadow-sm">
      <h2 className="mb-6 text-center font-heading text-3xl font-bold text-[var(--navy)]">Login</h2>

      {error && (
        <div className="mb-6 rounded border border-red-300 bg-red-50 p-4 text-red-700">
          ✕ {error}
        </div>
      )}

      {successMessage && (
        <div className="mb-6 rounded border border-emerald-300 bg-emerald-50 p-4 text-emerald-700">
          ✓ {successMessage}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Email */}
        <div>
          <label htmlFor="email" className="mb-2 block text-sm font-medium text-[var(--navy)]">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full rounded-lg border border-[var(--border-soft)] bg-white px-4 py-2 text-[var(--text)] outline-none focus:border-[var(--accent)]"
            placeholder="your@email.com"
          />
        </div>

        {/* Password */}
        <div>
          <label htmlFor="password" className="mb-2 block text-sm font-medium text-[var(--navy)]">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
            className="w-full rounded-lg border border-[var(--border-soft)] bg-white px-4 py-2 text-[var(--text)] outline-none focus:border-[var(--accent)]"
            placeholder="••••••••"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={loading}
          className="w-full rounded-lg bg-[var(--accent)] px-6 py-2.5 font-bold text-white transition hover:bg-[var(--accent-warm)] disabled:cursor-not-allowed disabled:opacity-50"
        >
          {loading ? 'Logging in...' : 'Login'}
        </button>
      </form>

      <div className="mt-6 text-center text-[var(--text-muted)]">
        Don&rsquo;t have an account?{' '}
        <Link href="/signup" className="font-bold text-[var(--accent)] hover:underline">
          Sign up
        </Link>
      </div>
    </div>
  );
}
