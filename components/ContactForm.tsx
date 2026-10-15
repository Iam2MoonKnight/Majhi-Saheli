'use client';

import { useState } from 'react';
import { submitContactMessage } from '@/lib/supabase-functions';
import Icon from './icons';

const ROLES = ['Donor', 'Volunteer', 'Corporate Partner', 'NGO/Collaborator', 'Media', 'Community Member'];

const REASONS = [
  'General enquiry',
  'Donation & giving',
  'Volunteering',
  'Partnership / CSR',
  'Media & press',
  'Programme information',
  'Other',
];

export default function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [role, setRole] = useState<string>('Donor');
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    reason: REASONS[0],
    organisation: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      // The contact table stores a single message column, so the extra fields
      // are folded into the message body rather than changing the schema.
      const meta = [
        role ? `Reaching out as: ${role}` : null,
        formData.reason ? `Reason for contact: ${formData.reason}` : null,
        formData.organisation ? `Organisation: ${formData.organisation}` : null,
      ]
        .filter(Boolean)
        .join('\n');

      await submitContactMessage({
        name: `${formData.firstName} ${formData.lastName}`.trim(),
        email: formData.email,
        phone: formData.phone || undefined,
        message: meta ? `${meta}\n\n${formData.message}` : formData.message,
      });

      setSuccess(true);
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        reason: REASONS[0],
        organisation: '',
        message: '',
      });
      setTimeout(() => setSuccess(false), 6000);
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : 'Could not send your message right now. Please email us at connect@msct.org.in.'
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="card p-7 shadow-[0_18px_44px_rgba(20,41,63,0.08)] md:p-9">
      <h2 className="font-heading text-2xl font-extrabold text-[var(--navy)] md:text-3xl">Send Us a Message</h2>
      <p className="mt-2 text-sm">
        Fill in the form below and our team will get back to you within two working days.
      </p>

      {success && (
        <div className="mt-6 flex items-start gap-3 rounded-xl border border-emerald-200 bg-emerald-50 p-4 text-sm text-emerald-800">
          <Icon name="check" size={17} className="mt-0.5 shrink-0" />
          <span>Thank you for your message! We&rsquo;ll get back to you soon.</span>
        </div>
      )}

      {error && (
        <div className="mt-6 flex items-start gap-3 rounded-xl border border-red-200 bg-red-50 p-4 text-sm text-red-700">
          <Icon name="close" size={17} className="mt-0.5 shrink-0" />
          <span>{error}</span>
        </div>
      )}

      <form onSubmit={handleSubmit} className="mt-6 space-y-5">
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          <div>
            <label htmlFor="firstName" className="field-label">
              First Name *
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
              className="field"
              placeholder="Your first name"
            />
          </div>
          <div>
            <label htmlFor="lastName" className="field-label">
              Last Name *
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
              className="field"
              placeholder="Your last name"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
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
          <div>
            <label htmlFor="phone" className="field-label">
              Phone
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="field"
              placeholder="+91 79776 69173"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          <div>
            <label htmlFor="reason" className="field-label">
              Reason for Contact
            </label>
            <select id="reason" name="reason" value={formData.reason} onChange={handleChange} className="field">
              {REASONS.map((reason) => (
                <option key={reason} value={reason}>
                  {reason}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="organisation" className="field-label">
              Organisation / NGO
            </label>
            <input
              type="text"
              id="organisation"
              name="organisation"
              value={formData.organisation}
              onChange={handleChange}
              className="field"
              placeholder="Optional"
            />
          </div>
        </div>

        <fieldset>
          <legend className="field-label">I am reaching out as a:</legend>
          <div className="flex flex-wrap gap-2">
            {ROLES.map((option) => {
              const active = role === option;
              return (
                <button
                  key={option}
                  type="button"
                  aria-pressed={active}
                  onClick={() => setRole(option)}
                  className={`rounded-full border px-3.5 py-2 text-xs font-semibold transition-colors ${
                    active
                      ? 'border-[#e85d75] bg-[#e85d75] text-white'
                      : 'border-[var(--border-soft)] text-[var(--navy)] hover:border-[#e85d75] hover:text-[#e85d75]'
                  }`}
                >
                  {option}
                </button>
              );
            })}
          </div>
        </fieldset>

        <div>
          <label htmlFor="message" className="field-label">
            Your Message *
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={5}
            className="field resize-none"
            placeholder="Tell us how we can help…"
          />
        </div>

        <button type="submit" disabled={loading} className="btn btn-coral w-full">
          {loading ? 'Sending…' : 'Send Message'}
          {!loading && <Icon name="arrow-right" size={16} />}
        </button>
      </form>
    </div>
  );
}
