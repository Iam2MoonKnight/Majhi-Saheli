import LoginForm from '@/components/LoginForm';
import Link from 'next/link';

export default function Login() {
  return (
    <div className="flex min-h-screen items-center justify-center px-4 py-12">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-[var(--navy)] to-[var(--teal)]">
            <span className="text-white font-bold text-2xl">S</span>
          </div>
          <h1 className="font-heading text-4xl font-bold text-[var(--navy)]">Mazi Saheli</h1>
          <p className="mt-2 text-[var(--text-muted)]">Women empowerment community</p>
        </div>

        <LoginForm />

        <div className="mt-8 text-center">
          <p className="mb-4 text-[var(--text-muted)]">First time here?</p>
          <Link
            href="/signup"
            className="inline-block rounded-full border border-[var(--navy)] bg-transparent px-6 py-2 font-bold text-[var(--navy)] transition hover:bg-[var(--navy)] hover:text-white"
          >
            Create Account
          </Link>
        </div>
      </div>
    </div>
  );
}
