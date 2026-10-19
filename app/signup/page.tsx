import SignupForm from '@/components/SignupForm';
import Link from 'next/link';
import { createPageMetadata } from '@/lib/seo';

export const metadata = createPageMetadata(
  'Sign Up',
  'Create a Mazi Saheli community account.',
);

export default function Signup() {
  return (
    <div className="flex min-h-screen items-center justify-center px-4 py-12">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-[var(--navy)] to-[var(--teal)]">
            <span className="text-white font-bold text-2xl">S</span>
          </div>
          <h1 className="font-heading text-4xl font-bold text-[var(--navy)]">Join Mazi Saheli</h1>
          <p className="mt-2 text-[var(--text-muted)]">Create your account and be part of our community</p>
        </div>

        <SignupForm />

        <div className="mt-8 text-center">
          <p className="mb-4 text-[var(--text-muted)]">Already have an account?</p>
          <Link
            href="/login"
            className="inline-block rounded-full border border-[var(--navy)] bg-transparent px-6 py-2 font-bold text-[var(--navy)] transition hover:bg-[var(--navy)] hover:text-white"
          >
            Login
          </Link>
        </div>
      </div>
    </div>
  );
}
