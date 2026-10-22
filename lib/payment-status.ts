export const PAYMENT_STATUSES = ['pending', 'paid', 'failed', 'expired', 'refunded'] as const;

export type PaymentStatus = (typeof PAYMENT_STATUSES)[number];

export const isPaymentStatus = (value: unknown): value is PaymentStatus =>
  typeof value === 'string' && (PAYMENT_STATUSES as readonly string[]).includes(value);

export const mapCashfreeOrderStatus = (orderStatus?: string | null): PaymentStatus => {
  const status = (orderStatus || '').toUpperCase();

  if (status === 'PAID') return 'paid';
  if (status === 'EXPIRED' || status === 'TERMINATED') return 'expired';
  if (status === 'FAILED') return 'failed';
  if (status === 'REFUNDED' || status === 'PARTIALLY_REFUNDED') return 'refunded';

  return 'pending';
};

export const mapWebhookTypeToStatus = (eventType?: string | null): PaymentStatus => {
  const type = (eventType || '').toUpperCase();

  if (type.includes('PAYMENT_SUCCESS')) return 'paid';
  if (type.includes('REFUND_SUCCESS')) return 'refunded';
  if (type.includes('PAYMENT_FAILED')) return 'failed';
  if (type.includes('PAYMENT_EXPIRED')) return 'expired';

  return 'pending';
};

export const mapLegacyDonationStatus = (paymentStatus: PaymentStatus): 'pending' | 'completed' | 'failed' => {
  if (paymentStatus === 'paid' || paymentStatus === 'refunded') return 'completed';
  if (paymentStatus === 'failed' || paymentStatus === 'expired') return 'failed';
  return 'pending';
};
