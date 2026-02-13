import SignupForm from '@/components/SignupForm';
import Link from 'next/link';

export default function Signup() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 to-pink-50 flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-gradient-to-br from-rose-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-white font-bold text-2xl">S</span>
          </div>
          <h1 className="text-3xl font-bold text-gray-900">Join Saheli</h1>
          <p className="text-gray-600 mt-2">Create your account and be part of our community</p>
        </div>

        <SignupForm />

        <div className="mt-8 text-center">
          <p className="text-gray-600 mb-4">Already have an account?</p>
          <Link
            href="/login"
            className="inline-block px-6 py-2 bg-white border-2 border-rose-600 text-rose-600 font-bold rounded-lg hover:bg-rose-50 transition"
          >
            Login
          </Link>
        </div>
      </div>
    </div>
  );
}
