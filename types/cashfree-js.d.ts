declare module '@cashfreepayments/cashfree-js' {
  export type CashfreeMode = 'sandbox' | 'production';

  export interface LoadOptions {
    mode?: CashfreeMode;
  }

  export interface CashfreeCheckoutOptions {
    paymentSessionId: string;
    redirectTarget?: '_self' | '_blank' | '_modal';
  }

  export interface CashfreeCheckoutResult {
    error?: {
      code?: string;
      message?: string;
    };
    redirect?: boolean;
    paymentDetails?: unknown;
  }

  export interface CashfreeInstance {
    checkout(options: CashfreeCheckoutOptions): Promise<CashfreeCheckoutResult | void>;
  }

  export function load(options?: LoadOptions): Promise<CashfreeInstance | null>;
}
