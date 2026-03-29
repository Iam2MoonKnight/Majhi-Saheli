import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';

const SUPABASE_MAX_RETRIES = 2;
const AUTH_LOG_THROTTLE_MS = 60000;
let lastAuthLogAt = 0;

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

const getRequestMethod = (input: RequestInfo | URL, init?: RequestInit) => {
  if (init?.method) {
    return init.method.toUpperCase();
  }

  if (typeof Request !== 'undefined' && input instanceof Request) {
    return input.method.toUpperCase();
  }

  return 'GET';
};

const isRetryableFetchError = (error: unknown) => {
  if (!(error instanceof Error)) {
    return false;
  }

  const details = `${error.name} ${error.message}`;
  return (
    details.includes('UND_ERR_CONNECT_TIMEOUT') ||
    details.includes('ConnectTimeoutError') ||
    details.includes('UND_ERR_SOCKET') ||
    details.includes('UND_ERR_HEADERS_TIMEOUT') ||
    details.includes('ECONNRESET') ||
    details.includes('ENOTFOUND') ||
    details.includes('fetch failed') ||
    details.includes('Failed to fetch')
  );
};

const resilientFetch: typeof fetch = async (input, init) => {
  const method = getRequestMethod(input, init);
  const canRetry = method === 'GET' || method === 'HEAD';

  const executeFetch = async () => {
    if (!canRetry) {
      return fetch(input, init);
    }

    let attempt = 0;
    let lastError: unknown;

    while (attempt <= SUPABASE_MAX_RETRIES) {
      try {
        return await fetch(input, init);
      } catch (error) {
        lastError = error;

        if (
          !isRetryableFetchError(error) ||
          attempt === SUPABASE_MAX_RETRIES ||
          init?.signal?.aborted
        ) {
          throw error;
        }

        const backoffMs = (attempt + 1) * 600;
        await sleep(backoffMs);
        attempt += 1;
      }
    }

    throw lastError;
  };

  try {
    return await executeFetch();
  } catch (error) {
    if (typeof window !== 'undefined' && isRetryableFetchError(error)) {
      return new Response(
        JSON.stringify({
          code: 'NETWORK_REQUEST_FAILED',
          message: 'Failed to fetch',
        }),
        {
          status: 503,
          headers: {
            'content-type': 'application/json',
          },
        }
      );
    }

    throw error;
  }
};

const logAuthFetchIssue = (error: unknown) => {
  const now = Date.now();
  if (now - lastAuthLogAt < AUTH_LOG_THROTTLE_MS) {
    return;
  }

  lastAuthLogAt = now;

  const details = error instanceof Error ? `${error.name}: ${error.message}` : String(error);
  console.warn(`Supabase session check failed. Continuing as signed-out user. (${details})`);
};

// Create client with default values during build time
export const supabase = createClient(
  supabaseUrl || 'https://placeholder.supabase.co',
  supabaseAnonKey || 'placeholder-key',
  {
    global: {
      fetch: resilientFetch,
    },
  }
);

export const getSafeSession = async () => {
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

// Validate environment variables at runtime
if (typeof window === 'undefined' && process.env.NODE_ENV === 'production') {
  if (!supabaseUrl || !supabaseAnonKey) {
    console.warn('Missing Supabase environment variables in production');
  }
}
