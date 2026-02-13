import LoginForm from '@/components/LoginForm';
import Link from 'next/link';

export default function Login() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 to-pink-50 flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-gradient-to-br from-rose-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-white font-bold text-2xl">S</span>
          </div>
          <h1 className="text-3xl font-bold text-gray-900">Saheli</h1>
          <p className="text-gray-600 mt-2">Women Empowerment Community</p>
        </div>

        <LoginForm />

        <div className="mt-8 text-center">
          <p className="text-gray-600 mb-4">First time here?</p>
          <Link
            href="/signup"
            className="inline-block px-6 py-2 bg-white border-2 border-rose-600 text-rose-600 font-bold rounded-lg hover:bg-rose-50 transition"
          >
            Create Account
          </Link>
        </div>
      </div>
    </div>
  );
}
