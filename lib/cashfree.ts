import 'server-only';

import { Cashfree, CFEnvironment, type CreateOrderRequest, type OrderEntity, type PGWebhookEvent } from 'cashfree-pg';

const CASHFREE_API_VERSION = '2023-08-01';

let cashfreeClient: Cashfree | null = null;

const resolveCashfreeEnvironment = () => {
  const env = (process.env.NEXT_PUBLIC_CASHFREE_ENV || 'sandbox').toLowerCase();
  return env === 'production' ? CFEnvironment.PRODUCTION : CFEnvironment.SANDBOX;
};

export const getCashfreeClient = () => {
  if (cashfreeClient) return cashfreeClient;

  const appId = process.env.CASHFREE_APP_ID;
  const secretKey = process.env.CASHFREE_SECRET_KEY;

  if (!appId || !secretKey) {
    throw new Error('Cashfree credentials are not configured.');
  }

  cashfreeClient = new Cashfree(
    resolveCashfreeEnvironment(),
    appId,
    secretKey,
    undefined,
    undefined,
    undefined,
    false
  );
  cashfreeClient.XApiVersion = CASHFREE_API_VERSION;
  return cashfreeClient;
};

export const createCashfreeOrder = async (payload: CreateOrderRequest, idempotencyKey: string) => {
  const client = getCashfreeClient();
  const response = await client.PGCreateOrder(payload, undefined, idempotencyKey);
  return response.data;
};

export const fetchCashfreeOrder = async (orderId: string) => {
  const client = getCashfreeClient();
  const response = await client.PGFetchOrder(orderId);
  return response.data as OrderEntity;
};

export const verifyCashfreeWebhookSignature = (signature: string, rawBody: string, timestamp: string): PGWebhookEvent => {
  const client = getCashfreeClient();
  return client.PGVerifyWebhookSignature(signature, rawBody, timestamp);
};
