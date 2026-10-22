'use client';

import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { useEffect, useMemo, useState } from 'react';

import Icon from '@/components/icons';
import type { CashfreeVerifyOrderResponse, PaymentStatus } from '@/lib/types';

type UiState = 'verifying' | 'success' | 'pending' | 'failed';

const resolveUiState = (status: PaymentStatus): UiState => {
  if (status === 'paid') return 'success';
  if (status === 'pending') return 'pending';
  return 'failed';
};

export default function PaymentStatusContent() {
  const params = useSearchParams();
  const donationId = params.get('donation_id') || '';
  const cashfreeOrderId = params.get('order_id') || '';

  const [state, setState] = useState<UiState>('verifying');
  const [message, setMessage] = useState('Verifying your payment. Please wait...');

  useEffect(() => {
    const verifyPayment = async () => {
      if (!donationId || !cashfreeOrderId) {
        setState('failed');
        setMessage('Missing payment reference details. Please try donating again.');
        return;
      }

      try {
        const response = await fetch('/api/cashfree/verify-order', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ donationId, cashfreeOrderId }),
        });

        const payload = (await response.json()) as CashfreeVerifyOrderResponse | { error?: string };

        if (!response.ok || !('paymentStatus' in payload)) {
          setState('failed');
          setMessage(payload.error || 'We could not verify your payment right now.');
          return;
        }

        const uiState = resolveUiState(payload.paymentStatus);
        setState(uiState);
        setMessage(payload.message);
      } catch {
        setState('failed');
        setMessage('Payment verification failed due to a network issue. Please retry shortly.');
      }
    };

    void verifyPayment();
  }, [cashfreeOrderId, donationId]);

  const cardStyle = useMemo(() => {
    if (state === 'success') return 'border-emerald-200 bg-emerald-50 text-emerald-800';
    if (state === 'pending' || state === 'verifying') return 'border-amber-200 bg-amber-50 text-amber-800';
    return 'border-red-200 bg-red-50 text-red-700';
  }, [state]);

  const iconName = state === 'success' ? 'check' : state === 'failed' ? 'close' : 'clock';

  return (
    <div className="card mx-auto max-w-3xl p-7 shadow-[0_18px_44px_rgba(20,41,63,0.08)] md:p-9">
      <h2 className="font-heading text-2xl font-extrabold text-[var(--navy)] md:text-3xl">Payment status</h2>

      <div className={`mt-6 flex items-start gap-3 rounded-xl border p-4 text-sm ${cardStyle}`}>
        <Icon name={iconName} size={17} className="mt-0.5 shrink-0" />
        <span>{message}</span>
      </div>

      <div className="mt-8 flex flex-wrap gap-3">
        <Link href="/donate" className="btn btn-coral">
          Donate Again
        </Link>
        <Link href="/" className="btn btn-outline">
          Go to Homepage
        </Link>
      </div>

      <p className="mt-5 text-xs text-[var(--text-muted)]">
        Reference ID: <span className="font-mono">{cashfreeOrderId || 'N/A'}</span>
      </p>
    </div>
  );
}
