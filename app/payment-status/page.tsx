import { Suspense } from 'react';

import PaymentStatusContent from '@/components/PaymentStatusContent';
import PageHero from '@/components/PageHero';
import { createPageMetadata } from '@/lib/seo';

export const metadata = createPageMetadata(
  'Payment Status',
  'Verify and track your donation payment status securely.'
);

export default function PaymentStatusPage() {
  return (
    <div className="overflow-hidden">
      <PageHero
        crumbs={[{ label: 'Home', href: '/' }, { label: 'Payment Status' }]}
        eyebrow="Donation"
        title={<>Payment <span className="text-[#e85d75]">Status</span></>}
        subtitle="We are checking the latest status for your donation payment."
      />

      <section className="section">
        <div className="container-x">
          <Suspense
            fallback={<div className="h-80 animate-pulse rounded-2xl border border-[var(--border-soft)] bg-white p-6" />}
          >
            <PaymentStatusContent />
          </Suspense>
        </div>
      </section>
    </div>
  );
}
