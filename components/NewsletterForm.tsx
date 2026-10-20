'use client';

import { useState } from 'react';
import { subscribeNewsletter } from '@/lib/supabase-functions';

interface NewsletterFormProps {
  variant?: 'dark' | 'light';
}

export default function NewsletterForm({ variant = 'dark' }: NewsletterFormProps) {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const statusTextClass = variant === 'dark' ? 'text-white' : 'text-[var(--text-muted)]';

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setMessage(null);
    setError(null);

    try {
      await subscribeNewsletter(email);
      setMessage("Thank you for subscribing! We'll keep you updated.");
      setEmail('');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Subscription failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mx-auto max-w-md space-y-3">
      <div className="flex gap-2">
        <label htmlFor="newsletter-email" className="sr-only">
          Email address
        </label>
        <input
          type="email"
          id="newsletter-email"
          name="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          className="flex-1 rounded border border-[var(--border-soft)] bg-white px-4 py-2 text-[var(--text)] placeholder:text-[var(--text-muted)] focus:outline-none focus:border-[var(--accent)] focus-visible:ring-2 focus-visible:ring-[var(--accent)]"
        />
        <button
          type="submit"
          disabled={loading}
          className="rounded bg-[var(--navy)] px-6 py-2 font-bold text-white shadow-sm transition-all duration-200 hover:bg-[var(--navy-dark)] hover:shadow-md disabled:opacity-50"
        >
          {loading ? 'Subscribing...' : 'Subscribe'}
        </button>
      </div>
      {message && <p className={`text-sm ${statusTextClass}`}>✓ {message}</p>}
      {error && (
        <p className={`text-sm ${variant === 'dark' ? 'text-white/90' : 'text-red-700'}`}>✕ {error}</p>
      )}
    </form>
  );
}
