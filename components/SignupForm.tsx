'use client';

import { useState } from 'react';
import { signUp, createUserProfile } from '@/lib/supabase-functions';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function SignupForm() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      setLoading(false);
      return;
    }

    try {
      const { user, session } = await signUp(formData.email, formData.password, formData.name);

      // Only create profile when a session exists (email-confirmed or confirmation disabled)
      if (user && session?.user) {
        await createUserProfile({
          id: user.id,
          full_name: formData.name,
          email: formData.email,
          role: 'donor',
        });
        // User is already confirmed, redirect to dashboard
        router.push('/dashboard?message=signup_success');
      } else {
        // User needs to confirm email
        router.push(`/login?message=check_email&email=${formData.email}`);
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Signup failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mx-auto max-w-md rounded-2xl border border-[var(--border-soft)] bg-[var(--surface)] p-8 shadow-sm">
      <h2 className="mb-6 text-center font-heading text-3xl font-bold text-[var(--navy)]">Create Account</h2>

      {error && (
        <div className="mb-6 rounded border border-red-300 bg-red-50 p-4 text-red-700">
          ✕ {error}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Name */}
        <div>
          <label htmlFor="name" className="mb-2 block text-sm font-medium text-[var(--navy)]">
            Full Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full rounded-lg border border-[var(--border-soft)] bg-white px-4 py-2 text-[var(--text)] outline-none focus:border-[var(--accent)]"
            placeholder="Your name"
          />
        </div>

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

        {/* Confirm Password */}
        <div>
          <label htmlFor="confirmPassword" className="mb-2 block text-sm font-medium text-[var(--navy)]">
            Confirm Password
          </label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            value={formData.confirmPassword}
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
          {loading ? 'Creating Account...' : 'Sign Up'}
        </button>
      </form>

      <div className="mt-6 text-center text-[var(--text-muted)]">
        Already have an account?{' '}
        <Link href="/login" className="font-bold text-[var(--accent)] hover:underline">
          Login
        </Link>
      </div>
    </div>
  );
}
