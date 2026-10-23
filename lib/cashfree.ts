import 'server-only';

import { Cashfree, CFEnvironment, type CreateOrderRequest, type OrderEntity, type PGWebhookEvent } from 'cashfree-pg';
import axios from 'axios';

const CASHFREE_API_VERSION = '2026-01-01'; // matches cashfree-pg v6 SDK default

// ─── Environment resolver ────────────────────────────────────────────────────
const resolveCashfreeEnvironment = (): { cfEnv: CFEnvironment; label: string; rawValue: string } => {
  const rawValue = (
    process.env.NEXT_PUBLIC_CASHFREE_ENV ||
    process.env.NEXT_PRIVATE_CASHFREE_ENV ||
    process.env.CASHFREE_ENV ||
    'production'
  ).trim();

  const normalized = rawValue.toLowerCase();
  const cfEnv = normalized === 'production' ? CFEnvironment.PRODUCTION : CFEnvironment.SANDBOX;
  const label = cfEnv === CFEnvironment.PRODUCTION ? 'PRODUCTION' : 'SANDBOX';

  return { cfEnv, label, rawValue };
};

// ─── Extract Cashfree error details from Axios error ────────────────────────
const extractCashfreeError = (err: unknown): Record<string, unknown> => {
  if (!axios.isAxiosError(err)) return { raw: String(err) };

  const res = err.response;
  return {
    httpStatus: res?.status,
    httpStatusText: res?.statusText,
    cashfreeErrorBody: res?.data,          // ← the actual Cashfree error JSON
    requestUrl: err.config?.url,
    requestMethod: err.config?.method?.toUpperCase(),
    requestHeaders: {
      'x-client-id': err.config?.headers?.['x-client-id'],
      'x-api-version': err.config?.headers?.['x-api-version'],
      'x-cf-signature': err.config?.headers?.['x-cf-signature'] ? '[PRESENT]' : '[MISSING]',
    },
  };
};

// ─── Client factory ──────────────────────────────────────────────────────────
export const getCashfreeClient = () => {
  const appId = process.env.CASHFREE_APP_ID;
  const secretKey = process.env.CASHFREE_SECRET_KEY;

  if (!appId || !secretKey) {
    console.error('[Cashfree] ❌ Missing credentials — CASHFREE_APP_ID or CASHFREE_SECRET_KEY is not set');
    throw new Error('Cashfree credentials are not configured. Please check CASHFREE_APP_ID and CASHFREE_SECRET_KEY.');
  }

  const { cfEnv, label, rawValue } = resolveCashfreeEnvironment();

  const isProdKey = secretKey.includes('_prod_');
  const isSandboxKey = secretKey.includes('_test_') || secretKey.includes('_sandbox_');
  const isProdEnv = cfEnv === CFEnvironment.PRODUCTION;

  console.log('[Cashfree] ─── Client Init ───────────────────────────────');
  console.log('[Cashfree] NEXT_PUBLIC_CASHFREE_ENV (raw)  :', `"${rawValue}"`);
  console.log('[Cashfree] Resolved SDK environment        :', label);
  console.log('[Cashfree] App ID (first 12 chars)         :', appId.slice(0, 12) + '...');
  console.log('[Cashfree] App ID length                   :', appId.length);
  console.log('[Cashfree] Secret key prefix (first 16)    :', secretKey.slice(0, 16) + '...');
  console.log('[Cashfree] Secret key length               :', secretKey.length);
  console.log('[Cashfree] Key looks like production key?  :', isProdKey ? 'YES (contains _prod_)' : isSandboxKey ? 'NO (sandbox/test key)' : 'UNKNOWN (no recognizable prefix)');
  console.log('[Cashfree] SDK mode matches key?           :', (isProdKey && isProdEnv) || (isSandboxKey && !isProdEnv) ? '✅ YES' : '⚠️  MISMATCH or unknown');
  console.log('[Cashfree] API version                     :', CASHFREE_API_VERSION);
  console.log('[Cashfree] ────────────────────────────────────────────────');

  const client = new Cashfree(
    cfEnv,
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

// ─── Create order ────────────────────────────────────────────────────────────
export const createCashfreeOrder = async (payload: CreateOrderRequest, idempotencyKey: string) => {
  console.log('[Cashfree] → createCashfreeOrder called');
  console.log('[Cashfree]   order_id        :', payload.order_id);
  console.log('[Cashfree]   order_amount    :', payload.order_amount);
  console.log('[Cashfree]   order_currency  :', payload.order_currency);
  console.log('[Cashfree]   customer_id     :', payload.customer_details?.customer_id);
  console.log('[Cashfree]   customer_email  :', payload.customer_details?.customer_email);
  console.log('[Cashfree]   customer_phone  :', payload.customer_details?.customer_phone?.replace(/\d(?=\d{4})/g, '*'));
  console.log('[Cashfree]   idempotency_key :', idempotencyKey);

  const client = getCashfreeClient();

  try {
    const response = await client.PGCreateOrder(payload, undefined, idempotencyKey);
    console.log('[Cashfree] ✅ PGCreateOrder succeeded');
    console.log('[Cashfree]   response.status          :', response.status);
    console.log('[Cashfree]   order_id in response     :', response.data?.order_id);
    console.log('[Cashfree]   order_status             :', response.data?.order_status);
    console.log('[Cashfree]   payment_session_id       :', response.data?.payment_session_id ? '[PRESENT]' : '[MISSING]');
    return response.data;
  } catch (err: unknown) {
    console.error('[Cashfree] ❌ PGCreateOrder FAILED');
    const details = extractCashfreeError(err);
    console.error('[Cashfree]   HTTP status    :', details.httpStatus);
    console.error('[Cashfree]   Status text    :', details.httpStatusText);
    console.error('[Cashfree]   Cashfree body  :', JSON.stringify(details.cashfreeErrorBody, null, 2));
    console.error('[Cashfree]   Request URL    :', details.requestUrl);
    console.error('[Cashfree]   Request method :', details.requestMethod);
    console.error('[Cashfree]   Request headers:', JSON.stringify(details.requestHeaders, null, 2));
    throw err;
  }
};

// ─── Fetch order ─────────────────────────────────────────────────────────────
export const fetchCashfreeOrder = async (orderId: string) => {
  console.log('[Cashfree] → fetchCashfreeOrder:', orderId);
  const client = getCashfreeClient();

  try {
    const response = await client.PGFetchOrder(orderId);
    console.log('[Cashfree] ✅ PGFetchOrder succeeded — status:', response.data?.order_status);
    return response.data as OrderEntity;
  } catch (err: unknown) {
    console.error('[Cashfree] ❌ PGFetchOrder FAILED');
    const details = extractCashfreeError(err);
    console.error('[Cashfree]   HTTP status   :', details.httpStatus);
    console.error('[Cashfree]   Cashfree body :', JSON.stringify(details.cashfreeErrorBody, null, 2));
    throw err;
  }
};

// ─── Verify webhook ──────────────────────────────────────────────────────────
export const verifyCashfreeWebhookSignature = (
  signature: string,
  rawBody: string,
  timestamp: string
): PGWebhookEvent => {
  const client = getCashfreeClient();
  return client.PGVerifyWebhookSignature(signature, rawBody, timestamp);
};
