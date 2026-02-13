'use client';

import DonationForm from '@/components/DonationForm';

export default function Donate() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-rose-50 to-pink-50 py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">Make a Difference</h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Your generous donation helps us empower rural women through education, health, and skills development.
          </p>
        </div>
      </section>

      {/* Donation Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Form */}
            <div className="lg:col-span-2">
              <DonationForm />
            </div>

            {/* Impact Info */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Your Impact</h2>

              <div className="space-y-6">
                {[
                  { amount: '₹100', impact: 'Provides educational materials for one girl' },
                  { amount: '₹500', impact: 'Supports one woman in vocational training' },
                  { amount: '₹1,000', impact: 'Funds a health camp for 50 women' },
                  { amount: '₹5,000', impact: 'Sponsors one girl\'s education for a year' },
                  { amount: '₹10,000', impact: 'Supports 10 women entrepreneurs' },
                ].map((item, idx) => (
                  <div key={idx} className="bg-gray-50 rounded-lg p-4">
                    <div className="font-bold text-rose-600 text-lg mb-2">{item.amount}</div>
                    <p className="text-gray-700 text-sm">{item.impact}</p>
                  </div>
                ))}
              </div>

              <div className="mt-8 bg-rose-50 rounded-lg p-6 border-l-4 border-rose-600">
                <h3 className="font-bold text-gray-900 mb-3">100% Transparent</h3>
                <p className="text-gray-700 text-sm mb-4">
                  All funds go directly to our programs. We maintain complete transparency in our operations.
                </p>
                <p className="text-gray-700 text-sm">
                  <strong>80-G Certified:</strong> Your donation is tax-deductible.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How We Use Donations */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">How We Use Your Donation</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: '📚',
                title: 'Education (35%)',
                desc: 'Scholarships, materials, and teacher training for girls and women',
              },
              {
                icon: '💊',
                title: 'Health (30%)',
                desc: 'Medical camps, health awareness, and preventive care programs',
              },
              {
                icon: '🎓',
                title: 'Skills Training (25%)',
                desc: 'Vocational training, tools, and market linkages for entrepreneurs',
              },
              {
                icon: '🏢',
                title: 'Administration (5%)',
                desc: 'Essential operational costs to run our programs effectively',
              },
              {
                icon: '📊',
                title: 'Monitoring (3%)',
                desc: 'Evaluation and impact assessment to ensure program quality',
              },
              {
                icon: '🎯',
                title: 'Outreach (2%)',
                desc: 'Community awareness and volunteer support programs',
              },
            ].map((item, idx) => (
              <div key={idx} className="bg-white rounded-lg p-8 text-center shadow-md hover:shadow-lg transition">
                <div className="text-5xl mb-4">{item.icon}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Frequently Asked Questions</h2>

          <div className="space-y-6">
            {[
              {
                q: 'Is my donation tax-deductible?',
                a: 'Yes! Saheli is registered under 80-G of the Income Tax Act, 1961. You can claim tax benefits on your donations.',
              },
              {
                q: 'Can I make a recurring donation?',
                a: 'Yes! We offer flexible monthly, quarterly, and annual donation options through our form.',
              },
              {
                q: 'How is my donation used?',
                a: 'Each donation goes directly to our programs. We maintain complete transparency and share detailed impact reports annually.',
              },
              {
                q: 'Can I donate in other currencies?',
                a: 'Yes, we accept donations in INR, USD, and EUR. Select your preferred currency in the donation form.',
              },
              {
                q: 'How do I know my money is safe?',
                a: 'Saheli is a registered NGO with proper governance and audit procedures. Your donation is secure and transparent.',
              },
            ].map((faq, idx) => (
              <div key={idx} className="border-l-4 border-rose-500 pl-6">
                <h3 className="font-bold text-lg text-gray-900 mb-2">{faq.q}</h3>
                <p className="text-gray-700">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16 px-4 bg-gradient-to-r from-rose-500 to-pink-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Stay Updated on Our Impact</h2>
          <p className="text-lg mb-8">Subscribe to receive monthly updates about our programs and beneficiary stories.</p>
          <div className="flex gap-2 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 rounded text-gray-900 focus:outline-none"
            />
            <button className="px-6 py-2 bg-white text-rose-600 font-bold rounded hover:bg-gray-100 transition">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
