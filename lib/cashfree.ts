import 'server-only';

import { Cashfree, CFEnvironment, type CreateOrderRequest, type OrderEntity, type PGWebhookEvent } from 'cashfree-pg';

const CASHFREE_API_VERSION = '2026-01-01'; // matches cashfree-pg v6 SDK default

const resolveCashfreeEnvironment = (): CFEnvironment => {
  const raw = (
    process.env.NEXT_PUBLIC_CASHFREE_ENV ||
    process.env.NEXT_PRIVATE_CASHFREE_ENV ||
    process.env.CASHFREE_ENV ||
    'production'
  ).trim().toLowerCase();
  return raw === 'production' ? CFEnvironment.PRODUCTION : CFEnvironment.SANDBOX;
};

export const getCashfreeClient = () => {
  const appId = process.env.CASHFREE_APP_ID;
  const secretKey = process.env.CASHFREE_SECRET_KEY;

  if (!appId || !secretKey) {
    throw new Error('Cashfree credentials are not configured. Check CASHFREE_APP_ID and CASHFREE_SECRET_KEY.');
  }

  const client = new Cashfree(
    resolveCashfreeEnvironment(),
    appId,
    secretKey,
    undefined,
    undefined,
    undefined,
    false
  );
  client.XApiVersion = CASHFREE_API_VERSION;
  return client;
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

export const verifyCashfreeWebhookSignature = (
  signature: string,
  rawBody: string,
  timestamp: string
): PGWebhookEvent => {
  const client = getCashfreeClient();
  return client.PGVerifyWebhookSignature(signature, rawBody, timestamp);
};
