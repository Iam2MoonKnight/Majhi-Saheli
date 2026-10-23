import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';

// ─── Circuit Breaker ────────────────────────────────────────────────────────
// Stops hammering a DNS-dead host after FAILURE_THRESHOLD consecutive failures.
// Opens the circuit for CIRCUIT_RESET_MS, then resets and tries again.
let consecutiveFailures = 0;
let circuitOpenUntil = 0;
const FAILURE_THRESHOLD = 3;
const CIRCUIT_RESET_MS = 30_000; // 30 seconds

export function isSupabaseReachable(): boolean {
  if (Date.now() < circuitOpenUntil) return false;
  return true;
}

export function recordSupabaseFailure() {
  consecutiveFailures++;
  if (consecutiveFailures >= FAILURE_THRESHOLD) {
    circuitOpenUntil = Date.now() + CIRCUIT_RESET_MS;
    consecutiveFailures = 0;
    console.warn(
      `[Supabase] Circuit breaker opened for ${CIRCUIT_RESET_MS / 1000}s — ` +
      `${FAILURE_THRESHOLD} consecutive network failures. Check your Supabase project at supabase.com/dashboard.`
    );
  }
}

export function recordSupabaseSuccess() {
  consecutiveFailures = 0;
  circuitOpenUntil = 0;
}

// ─── Retry Config ───────────────────────────────────────────────────────────
const SUPABASE_MAX_RETRIES = 2;
const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

// ─── Auth Log Throttle ──────────────────────────────────────────────────────
// Logs auth failures at most once per minute — prevents console spam.
const AUTH_LOG_THROTTLE_MS = 60_000;
let lastAuthLogAt = 0;
let dnsFailureLoggedThisSession = false;

// ─── Helpers ────────────────────────────────────────────────────────────────
const getRequestMethod = (input: RequestInfo | URL, init?: RequestInit) => {
  if (init?.method) return init.method.toUpperCase();
  if (typeof Request !== 'undefined' && input instanceof Request) return input.method.toUpperCase();
  return 'GET';
};

const isDnsOrNetworkError = (error: unknown): boolean => {
  if (!(error instanceof Error)) return false;
  const details = `${error.name} ${error.message}`;
  return (
    details.includes('ERR_NAME_NOT_RESOLVED') ||
    details.includes('ENOTFOUND') ||
    details.includes('getaddrinfo') ||
    details.includes('UND_ERR_CONNECT_TIMEOUT') ||
    details.includes('ConnectTimeoutError') ||
    details.includes('UND_ERR_SOCKET') ||
    details.includes('UND_ERR_HEADERS_TIMEOUT') ||
    details.includes('ECONNRESET') ||
    details.includes('fetch failed') ||
    details.includes('Failed to fetch')
  );
};

// ─── Resilient Fetch ────────────────────────────────────────────────────────
const resilientFetch: typeof fetch = async (input, init) => {
  // Circuit open → return a synthetic 503 immediately, no network call
  if (!isSupabaseReachable()) {
    return new Response(
      JSON.stringify({ code: 'CIRCUIT_OPEN', message: 'Supabase is currently unreachable. Retrying in 30s.' }),
      { status: 503, headers: { 'content-type': 'application/json' } }
    );
  }

  const method = getRequestMethod(input, init);
  const canRetry = method === 'GET' || method === 'HEAD';

  let attempt = 0;
  let lastError: unknown;

  while (attempt <= (canRetry ? SUPABASE_MAX_RETRIES : 0)) {
    try {
      const response = await fetch(input, init);
      recordSupabaseSuccess();
      return response;
    } catch (error) {
      lastError = error;

      if (isDnsOrNetworkError(error)) {
        recordSupabaseFailure();

        // Log DNS failure once per session
        if (!dnsFailureLoggedThisSession) {
          dnsFailureLoggedThisSession = true;
          console.warn(
            '[Supabase] DNS resolution failed. Your Supabase project may be deleted or paused. ' +
            'Check supabase.com/dashboard. Further errors will be suppressed.'
          );
        }

        // Return synthetic response instead of throwing — prevents retry spam
        return new Response(
          JSON.stringify({ code: 'NETWORK_REQUEST_FAILED', message: 'Failed to fetch' }),
          { status: 503, headers: { 'content-type': 'application/json' } }
        );
      }

      if (!canRetry || attempt === SUPABASE_MAX_RETRIES || init?.signal?.aborted) {
        throw error;
      }

      await sleep((attempt + 1) * 600);
      attempt++;
    }
  }

  throw lastError;
};

// ─── Log Auth Failure (throttled) ───────────────────────────────────────────
const logAuthFetchIssue = (error: unknown) => {
  const now = Date.now();
  if (now - lastAuthLogAt < AUTH_LOG_THROTTLE_MS) return;
  lastAuthLogAt = now;

  const details = error instanceof Error ? `${error.name}: ${error.message}` : String(error);

  // If circuit is open, a one-liner is enough — don't flood the console
  if (!isSupabaseReachable()) {
    console.warn('[Supabase] Auth skipped — circuit breaker is open.');
    return;
  }

  console.warn(`[Supabase] Session check failed. Continuing as signed-out user. (${details})`);
};

// ─── Supabase Client ─────────────────────────────────────────────────────────
export const supabase = createClient(
  supabaseUrl || 'https://placeholder.supabase.co',
  supabaseAnonKey || 'placeholder-key',
  {
    global: { fetch: resilientFetch },
  }
);

// ─── Safe Session Getter ─────────────────────────────────────────────────────
// Checks circuit breaker before attempting auth to avoid pointless retries.
export const getSafeSession = async () => {
  if (!isSupabaseReachable()) {
    return null; // silently skip — circuit is open
  }

  try {
    const { data, error } = await supabase.auth.getSession();
    if (error) {
      logAuthFetchIssue(error);
      return null;
    }
    return data.session ?? null;
  } catch (error) {
    logAuthFetchIssue(error);
    return null;
  }
};

// ─── Env Validation (build-time) ─────────────────────────────────────────────
if (typeof window === 'undefined' && process.env.NODE_ENV === 'production') {
  if (!supabaseUrl || !supabaseAnonKey) {
    console.warn('[Supabase] Missing environment variables in production');
  }
}
