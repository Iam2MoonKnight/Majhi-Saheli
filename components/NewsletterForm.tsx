'use client';

import { useState } from 'react';
import { subscribeNewsletter } from '@/lib/supabase-functions';

export default function NewsletterForm() {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

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
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          className="flex-1 rounded px-4 py-2 text-[var(--text)] focus:outline-none"
        />
        <button
          type="submit"
          disabled={loading}
          className="rounded bg-[var(--accent)] px-6 py-2 font-bold text-white transition hover:bg-[var(--accent-warm)] disabled:opacity-50"
        >
          {loading ? 'Subscribing...' : 'Subscribe'}
        </button>
      </div>
      {message && <p className="text-sm text-white">✓ {message}</p>}
      {error && <p className="text-sm text-white/90">✕ {error}</p>}
    </form>
  );
}
