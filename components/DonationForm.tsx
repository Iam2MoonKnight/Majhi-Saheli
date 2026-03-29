'use client';

import { useState } from 'react';
import { submitDonation } from '@/lib/supabase-functions';
import { getSafeSession } from '@/lib/supabase';

interface DonationFormProps {
  onSuccess?: () => void;
  campaignLabel?: string | null;
  initialMessage?: string;
}

export default function DonationForm({ onSuccess, campaignLabel, initialMessage }: DonationFormProps) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  const defaultMessage = initialMessage ?? '';
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    amount: '',
    currency: 'INR',
    frequency: 'one_time',
    message: defaultMessage,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const session = await getSafeSession();
      const userId = session?.user?.id || null;

      await submitDonation({
        user_id: userId,
        name: formData.name,
        email: formData.email,
        amount: parseFloat(formData.amount),
        currency: formData.currency,
        frequency: formData.frequency as 'one_time' | 'recurring',
        message: formData.message || undefined,
      });

      setSuccess(true);
      setFormData({
        name: '',
        email: '',
        amount: '',
        currency: 'INR',
        frequency: 'one_time',
        message: defaultMessage,
      });

      setTimeout(() => {
        setSuccess(false);
        onSuccess?.();
      }, 3000);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="rounded-2xl border border-[var(--border-soft)] bg-[var(--surface)] p-8 shadow-sm">
      <h2 className="font-heading mb-6 text-3xl font-bold text-[var(--navy)]">Make a Donation</h2>

      {campaignLabel && (
        <div className="mb-6 rounded-lg border border-[color:rgb(30_58_95_/_0.28)] bg-[color:rgb(30_58_95_/_0.09)] px-4 py-3 text-sm text-[var(--blue)]">
          Supporting campaign: <span className="font-semibold">{campaignLabel}</span>
        </div>
      )}

      {success && (
        <div className="mb-6 rounded border border-emerald-300 bg-emerald-50 p-4 text-emerald-700">
          ✓ Thank you for your donation! Your support helps us empower rural women.
        </div>
      )}

      {error && (
        <div className="mb-6 rounded border border-red-300 bg-red-50 p-4 text-red-700">
          ✕ Error: {error}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Name */}
          <div>
            <label htmlFor="name" className="mb-2 block text-sm font-medium text-[var(--navy)]">
              Full Name *
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
              Email Address *
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
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Amount */}
          <div>
            <label htmlFor="amount" className="mb-2 block text-sm font-medium text-[var(--navy)]">
              Amount *
            </label>
            <input
              type="number"
              id="amount"
              name="amount"
              value={formData.amount}
              onChange={handleChange}
              required
              min="1"
              step="0.01"
              className="w-full rounded-lg border border-[var(--border-soft)] bg-white px-4 py-2 text-[var(--text)] outline-none focus:border-[var(--accent)]"
              placeholder="500"
            />
          </div>

          {/* Currency */}
          <div>
            <label htmlFor="currency" className="mb-2 block text-sm font-medium text-[var(--navy)]">
              Currency
            </label>
            <select
              id="currency"
              name="currency"
              value={formData.currency}
              onChange={handleChange}
              className="w-full rounded-lg border border-[var(--border-soft)] bg-white px-4 py-2 text-[var(--text)] outline-none focus:border-[var(--accent)]"
            >
              <option value="INR">INR</option>
              <option value="USD">USD</option>
              <option value="EUR">EUR</option>
            </select>
          </div>
        </div>

        {/* Frequency */}
        <div>
          <label htmlFor="frequency" className="mb-2 block text-sm font-medium text-[var(--navy)]">
            Donation Type
          </label>
          <div className="flex gap-6">
            <label className="flex items-center">
              <input
                type="radio"
                name="frequency"
                value="one_time"
                checked={formData.frequency === 'one_time'}
                onChange={handleChange}
                className="mr-2"
              />
              <span className="text-[var(--text)]">One-time</span>
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="frequency"
                value="recurring"
                checked={formData.frequency === 'recurring'}
                onChange={handleChange}
                className="mr-2"
              />
              <span className="text-[var(--text)]">Monthly Recurring</span>
            </label>
          </div>
        </div>

        {/* Message */}
        <div>
          <label htmlFor="message" className="mb-2 block text-sm font-medium text-[var(--navy)]">
            Message (Optional)
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={4}
            className="w-full resize-none rounded-lg border border-[var(--border-soft)] bg-white px-4 py-2 text-[var(--text)] outline-none focus:border-[var(--accent)]"
            placeholder="Share why you're supporting Saheli (optional)"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={loading}
          className="inline-flex w-full items-center justify-center rounded-lg bg-[var(--accent)] px-4 py-3 text-sm font-semibold text-white transition hover:bg-[var(--accent-warm)] disabled:cursor-not-allowed disabled:opacity-50"
        >
          {loading ? 'Processing...' : `Donate ${formData.currency} ${formData.amount || '0'}`}
        </button>

        <p className="text-center text-xs text-[var(--text-muted)]">
          💡 <strong>Note:</strong> This form stores donation records. Payment gateway integration (Razorpay, Stripe) can be added later.
        </p>
      </form>
    </div>
  );
}
