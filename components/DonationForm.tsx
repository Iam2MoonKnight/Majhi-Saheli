'use client';

import { useState } from 'react';
import { submitDonation } from '@/lib/supabase-functions';
import { getSafeSession } from '@/lib/supabase';
import Icon from './icons';

interface DonationFormProps {
  onSuccess?: () => void;
  campaignLabel?: string | null;
  initialMessage?: string;
}

const AMOUNTS = [
  { value: '500', label: '₹500', note: 'Eye camp for 10' },
  { value: '1000', label: '₹1,000', note: 'Monthly learning centre' },
  { value: '2500', label: '₹2,500', note: 'Full health camp' },
  { value: '5000', label: '₹5,000', note: 'Skill training for 5 women' },
  { value: '10000', label: '₹10,000', note: 'Support 10 women entrepreneurs' },
  { value: '25000', label: '₹25,000', note: 'District-level intervention' },
];

const PAYMENT_METHODS = ['Card', 'UPI', 'Net Banking', 'Bank Transfer'];

export default function DonationForm({ onSuccess, campaignLabel, initialMessage }: DonationFormProps) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  const [dedicate, setDedicate] = useState(false);
  const [dedication, setDedication] = useState('');
  const defaultMessage = initialMessage ?? '';
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    amount: '',
    currency: 'INR',
    frequency: 'one_time' as 'one_time' | 'recurring',
    message: defaultMessage,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const currencySymbol = formData.currency === 'INR' ? '₹' : '';
  const displayAmount = formData.amount
    ? `${currencySymbol}${formData.amount}${currencySymbol ? '' : ` ${formData.currency}`}`
    : '';

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);

    const amount = parseFloat(formData.amount);
    if (!formData.amount || Number.isNaN(amount) || amount <= 0) {
      setError('Please choose an amount or enter a custom amount.');
      return;
    }

    setLoading(true);

    try {
      const session = await getSafeSession();
      const userId = session?.user?.id || null;

      const message = [
        formData.message || null,
        dedicate && dedication.trim() ? `Dedicated: ${dedication.trim()}` : null,
      ]
        .filter(Boolean)
        .join('\n');

      await submitDonation({
        user_id: userId,
        name: formData.name,
        email: formData.email,
        amount,
        currency: formData.currency,
        frequency: formData.frequency,
        message: message || undefined,
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
      setDedicate(false);
      setDedication('');

      setTimeout(() => {
        setSuccess(false);
        onSuccess?.();
      }, 4000);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="card p-7 shadow-[0_18px_44px_rgba(20,41,63,0.08)] md:p-9">
      <h2 className="font-heading text-2xl font-extrabold text-[var(--navy)] md:text-3xl">Make a Donation</h2>

      {campaignLabel && (
        <div className="mt-5 flex items-center gap-3 rounded-xl bg-[var(--off-white)] px-4 py-3 text-sm">
          <Icon name="target" size={16} className="text-[#e85d75]" />
          <span>
            Supporting campaign: <span className="font-bold text-[var(--navy)]">{campaignLabel}</span>
          </span>
        </div>
      )}

      {success && (
        <div className="mt-6 flex items-start gap-3 rounded-xl border border-emerald-200 bg-emerald-50 p-4 text-sm text-emerald-800">
          <Icon name="check" size={17} className="mt-0.5 shrink-0" />
          <span>Thank you for your donation! Your support helps us empower rural women.</span>
        </div>
      )}

      {error && (
        <div className="mt-6 flex items-start gap-3 rounded-xl border border-red-200 bg-red-50 p-4 text-sm text-red-700">
          <Icon name="close" size={17} className="mt-0.5 shrink-0" />
          <span>{error}</span>
        </div>
      )}

      <form onSubmit={handleSubmit} className="mt-6 space-y-6">
        {/* Frequency toggle */}
        <div className="grid grid-cols-2 gap-2 rounded-full bg-[var(--off-white)] p-1.5">
          {([
            ['one_time', 'One-time'],
            ['recurring', 'Monthly'],
          ] as const).map(([value, label]) => {
            const active = formData.frequency === value;
            return (
              <button
                key={value}
                type="button"
                aria-pressed={active}
                onClick={() => setFormData((prev) => ({ ...prev, frequency: value }))}
                className={`rounded-full px-4 py-2.5 text-sm font-bold transition-colors ${
                  active ? 'bg-[var(--navy)] text-white shadow' : 'text-[var(--navy)] hover:text-[var(--navy-dark)]'
                }`}
              >
                {label}
              </button>
            );
          })}
        </div>

        {/* Amount */}
        <div>
          <p className="field-label">Select Amount</p>
          <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-3">
            {AMOUNTS.map((amount) => {
              const active = formData.amount === amount.value;
              return (
                <button
                  key={amount.value}
                  type="button"
                  aria-pressed={active}
                  onClick={() => setFormData((prev) => ({ ...prev, amount: amount.value }))}
                  className={`rounded-xl border p-3 text-left transition-colors ${
                    active
                      ? 'border-[#e85d75] bg-[color:rgb(232_93_117_/_0.08)]'
                      : 'border-[var(--border-soft)] hover:border-[#e85d75]'
                  }`}
                >
                  <span className="block font-heading text-base font-extrabold text-[var(--navy)]">
                    {amount.label}
                  </span>
                  <span className="mt-0.5 block text-[11px] leading-tight text-[var(--text-muted)]">{amount.note}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Custom amount + currency */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-[1fr_auto]">
          <div>
            <label htmlFor="amount" className="field-label">
              Or enter a custom amount
            </label>
            <input
              type="number"
              id="amount"
              name="amount"
              value={formData.amount}
              onChange={handleChange}
              min="1"
              step="1"
              className="field"
              placeholder="Enter amount"
            />
          </div>
          <div>
            <label htmlFor="currency" className="field-label">
              Currency
            </label>
            <select id="currency" name="currency" value={formData.currency} onChange={handleChange} className="field sm:w-32">
              <option value="INR">INR</option>
              <option value="USD">USD</option>
              <option value="EUR">EUR</option>
            </select>
          </div>
        </div>

        {/* Donor details */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div>
            <label htmlFor="name" className="field-label">
              Full Name *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="field"
              placeholder="Your name"
            />
          </div>
          <div>
            <label htmlFor="email" className="field-label">
              Email Address *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="field"
              placeholder="your@email.com"
            />
          </div>
        </div>

        {/* Payment methods (informational) */}
        <div>
          <p className="field-label">Payment options</p>
          <div className="flex flex-wrap gap-2">
            {PAYMENT_METHODS.map((method) => (
              <span
                key={method}
                className="inline-flex items-center gap-2 rounded-full border border-[var(--border-soft)] px-3.5 py-2 text-xs font-semibold text-[var(--navy)]"
              >
                <Icon name="shield-check" size={13} className="text-[#e85d75]" />
                {method}
              </span>
            ))}
          </div>
        </div>

        {/* Dedication */}
        <div className="rounded-xl bg-[var(--off-white)] p-4">
          <label className="flex cursor-pointer items-center gap-3">
            <input
              type="checkbox"
              checked={dedicate}
              onChange={(e) => setDedicate(e.target.checked)}
              className="h-4 w-4 accent-[#e85d75]"
            />
            <span className="text-sm font-semibold text-[var(--navy)]">Dedicate this donation</span>
          </label>
          <p className="mt-1 pl-7 text-xs text-[var(--text-muted)]">
            In honour or memory of someone special.
          </p>
          {dedicate && (
            <>
              <label htmlFor="dedication" className="sr-only">
                Name to dedicate this donation to
              </label>
              <input
                id="dedication"
                type="text"
                value={dedication}
                onChange={(e) => setDedication(e.target.value)}
                className="field mt-3"
                placeholder="In honour / memory of…"
              />
            </>
          )}
        </div>

        {/* Message */}
        <div>
          <label htmlFor="message" className="field-label">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={3}
            className="field resize-none"
            placeholder="Share why you're supporting Saheli (optional)"
          />
        </div>

        <button type="submit" disabled={loading} className="btn btn-coral w-full">
          <Icon name="heart" size={16} />
          {loading ? 'Processing…' : `Donate ${displayAmount || 'Now'}${displayAmount ? ' Now' : ''}`}
        </button>

        <p className="text-center text-xs text-[var(--text-muted)]">
          This form stores donation records securely. Payment gateway integration (Razorpay, Stripe) can be added later.
        </p>
      </form>
    </div>
  );
}
