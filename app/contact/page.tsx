import ContactForm from '@/components/ContactForm';

export default function Contact() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-rose-50 to-pink-50 py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">Get in Touch</h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Have questions or want to collaborate? We'd love to hear from you!
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-8">Contact Information</h2>

              <div className="space-y-8">
                {/* Email */}
                <div>
                  <h3 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                    <span className="text-2xl">📧</span> Email
                  </h3>
                  <p className="text-gray-700">hello@saheli.org</p>
                  <p className="text-sm text-gray-600 mt-1">We respond within 24 hours</p>
                </div>

                {/* Phone */}
                <div>
                  <h3 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                    <span className="text-2xl">📱</span> Phone
                  </h3>
                  <p className="text-gray-700">+91 XXXX-XXXX-XX</p>
                  <p className="text-sm text-gray-600 mt-1">Monday-Friday, 10 AM - 5 PM IST</p>
                </div>

                {/* Address */}
                <div>
                  <h3 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                    <span className="text-2xl">📍</span> Office Address
                  </h3>
                  <p className="text-gray-700">Main Office</p>
                  <p className="text-gray-600 text-sm">Rural Development Block</p>
                  <p className="text-gray-600 text-sm">District, State, India</p>
                </div>

                {/* Social Media */}
                <div>
                  <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <span className="text-2xl">🌐</span> Follow Us
                  </h3>
                  <div className="flex gap-4">
                    <a href="#" className="w-10 h-10 bg-rose-100 rounded-full flex items-center justify-center text-rose-600 hover:bg-rose-600 hover:text-white transition">
                      f
                    </a>
                    <a href="#" className="w-10 h-10 bg-rose-100 rounded-full flex items-center justify-center text-rose-600 hover:bg-rose-600 hover:text-white transition">
                      𝕏
                    </a>
                    <a href="#" className="w-10 h-10 bg-rose-100 rounded-full flex items-center justify-center text-rose-600 hover:bg-rose-600 hover:text-white transition">
                      📷
                    </a>
                    <a href="#" className="w-10 h-10 bg-rose-100 rounded-full flex items-center justify-center text-rose-600 hover:bg-rose-600 hover:text-white transition">
                      in
                    </a>
                  </div>
                </div>
              </div>

              {/* Map */}
              <div className="mt-12 bg-gray-200 rounded-lg h-64 flex items-center justify-center border-2 border-gray-300">
                <div className="text-center text-gray-600">
                  <p className="text-4xl mb-2">📍</p>
                  <p>Map placeholder</p>
                  <p className="text-sm">Add your Google Map embed here</p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Office Locations */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Our Field Offices</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'Main Office',
                location: 'District, State',
                email: 'main@saheli.org',
                phone: '+91 XXXX-XXXX-XX',
              },
              {
                name: 'Northern Region',
                location: 'Region, State',
                email: 'north@saheli.org',
                phone: '+91 XXXX-XXXX-XX',
              },
              {
                name: 'Southern Region',
                location: 'Region, State',
                email: 'south@saheli.org',
                phone: '+91 XXXX-XXXX-XX',
              },
            ].map((office, idx) => (
              <div key={idx} className="bg-white rounded-lg p-8 shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-4">{office.name}</h3>
                <div className="space-y-2 text-gray-700">
                  <p>
                    <span className="font-semibold">Location:</span> {office.location}
                  </p>
                  <p>
                    <span className="font-semibold">Email:</span> {office.email}
                  </p>
                  <p>
                    <span className="font-semibold">Phone:</span> {office.phone}
                  </p>
                </div>
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
                q: 'How can I volunteer with Saheli?',
                a: 'We welcome volunteers! Please send us an email with your interests and skills, and we\'ll connect you with relevant opportunities.',
              },
              {
                q: 'Can I partner with Saheli for a project?',
                a: 'Absolutely! We\'re open to collaborations with organizations, businesses, and government agencies. Contact us to discuss partnership opportunities.',
              },
              {
                q: 'How can I sponsor a girl\'s education?',
                a: 'You can sponsor a girl\'s education through our education program. One-time or recurring sponsorships are available.',
              },
              {
                q: 'Can I visit Saheli\'s programs?',
                a: 'Yes! We welcome visitors to meet beneficiaries and see our work firsthand. Please contact us to schedule a visit.',
              },
              {
                q: 'Do you accept in-kind donations?',
                a: 'Yes! We accept educational materials, medical supplies, clothing, and other items needed for our programs.',
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

      {/* Newsletter */}
      <section className="py-16 px-4 bg-gradient-to-r from-rose-500 to-pink-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Stay Connected</h2>
          <p className="text-lg mb-8">Subscribe to receive updates about our programs, success stories, and impact reports.</p>
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
