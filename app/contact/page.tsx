import ContactForm from '@/components/ContactForm';

export default function Contact() {
  return (
    <div className="min-h-screen overflow-hidden">
      <section className="border-b border-[var(--border-soft)] bg-[color:rgb(255_255_255_/_0.58)] py-16">
        <div className="editorial-section text-center space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full bg-[color:rgb(232_131_74_/_0.14)] px-4 py-2">
            <span className="h-2 w-2 rounded-full bg-[var(--accent)]" />
            <span className="section-eyebrow text-[var(--navy)]">Contact</span>
          </div>
          <h1 className="font-heading text-4xl font-bold text-[var(--navy)] md:text-6xl">Get in touch</h1>
          <p className="mx-auto max-w-3xl text-lg text-[var(--text-muted)]">
            Have questions or want to collaborate? We'd love to hear from you!
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="editorial-section">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div>
              <h2 className="font-heading text-2xl font-bold text-[var(--navy)] mb-8">Contact Information</h2>

              <div className="space-y-8">
                <div>
                  <h3 className="font-bold text-[var(--navy)] mb-2 flex items-center gap-2">
                    <span className="text-2xl">📧</span> Email
                  </h3>
                  <p className="text-[var(--text)]">hello@saheli.org</p>
                  <p className="text-sm text-[var(--text-muted)] mt-1">We respond within 24 hours</p>
                </div>

                <div>
                  <h3 className="font-bold text-[var(--navy)] mb-2 flex items-center gap-2">
                    <span className="text-2xl">📱</span> Phone
                  </h3>
                  <p className="text-[var(--text)]">+91 XXXX-XXXX-XX</p>
                  <p className="text-sm text-[var(--text-muted)] mt-1">Monday-Friday, 10 AM - 5 PM IST</p>
                </div>

                <div>
                  <h3 className="font-bold text-[var(--navy)] mb-2 flex items-center gap-2">
                    <span className="text-2xl">📍</span> Office Address
                  </h3>
                  <p className="text-[var(--text)]">Main Office</p>
                  <p className="text-sm text-[var(--text-muted)]">Rural Development Block</p>
                  <p className="text-sm text-[var(--text-muted)]">District, State, India</p>
                </div>

                <div>
                  <h3 className="font-bold text-[var(--navy)] mb-4 flex items-center gap-2">
                    <span className="text-2xl">🌐</span> Follow Us
                  </h3>
                  <div className="flex gap-4">
                    <a href="#" className="flex h-10 w-10 items-center justify-center rounded-full bg-[color:rgb(232_131_74_/_0.14)] text-[var(--accent)] transition hover:bg-[var(--accent)] hover:text-white">
                      f
                    </a>
                    <a href="#" className="flex h-10 w-10 items-center justify-center rounded-full bg-[color:rgb(232_131_74_/_0.14)] text-[var(--accent)] transition hover:bg-[var(--accent)] hover:text-white">
                      𝕏
                    </a>
                    <a href="#" className="flex h-10 w-10 items-center justify-center rounded-full bg-[color:rgb(232_131_74_/_0.14)] text-[var(--accent)] transition hover:bg-[var(--accent)] hover:text-white">
                      📷
                    </a>
                    <a href="#" className="flex h-10 w-10 items-center justify-center rounded-full bg-[color:rgb(232_131_74_/_0.14)] text-[var(--accent)] transition hover:bg-[var(--accent)] hover:text-white">
                      in
                    </a>
                  </div>
                </div>
              </div>

              <div className="mt-12 flex h-64 items-center justify-center rounded-2xl border border-[var(--border-soft)] bg-[var(--surface)]">
                <div className="text-center text-[var(--text-muted)]">
                  <p className="text-4xl mb-2">📍</p>
                  <p>Map placeholder</p>
                  <p className="text-sm">Add your Google Map embed here</p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-2">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[color:rgb(30_58_95_/_0.06)] py-16">
        <div className="editorial-section">
          <h2 className="font-heading text-center text-3xl font-bold text-[var(--navy)] md:text-5xl mb-12">Our field offices</h2>

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
              <div key={idx} className="rounded-2xl border border-[var(--border-soft)] bg-[var(--surface)] p-8">
                <h3 className="font-heading text-xl font-bold text-[var(--navy)] mb-4">{office.name}</h3>
                <div className="space-y-2 text-[var(--text)]">
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

      <section className="py-16">
        <div className="editorial-section max-w-4xl">
          <h2 className="font-heading text-center text-3xl font-bold text-[var(--navy)] md:text-5xl mb-12">Frequently asked questions</h2>

          <div className="space-y-6">
            {[
              {
                q: 'How can I volunteer with Saheli?',
                a: 'We welcome volunteers. Email your interests and skills, and our team will connect you to relevant opportunities.',
              },
              {
                q: 'Can I partner with Saheli for a project?',
                a: 'Yes. We collaborate with institutions, companies, and public agencies. Contact us to explore partnerships.',
              },
              {
                q: 'How can I sponsor a girl\'s education?',
                a: 'You can support education through one-time or recurring sponsorships in our program pipeline.',
              },
              {
                q: 'Can I visit Saheli\'s programs?',
                a: 'Yes, program visits can be scheduled in advance to ensure smooth coordination with field teams.',
              },
              {
                q: 'Do you accept in-kind donations?',
                a: 'Yes. We accept relevant educational and health-related materials based on current field requirements.',
              },
            ].map((faq, idx) => (
              <div key={idx} className="rounded-xl border border-[var(--border-soft)] bg-[var(--surface)] p-6">
                <h3 className="text-lg font-bold text-[var(--navy)] mb-2">{faq.q}</h3>
                <p className="text-[var(--text-muted)]">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-r from-[var(--navy)] to-[var(--teal)] py-16 text-white">
        <div className="editorial-section max-w-4xl text-center">
          <h2 className="font-heading text-4xl font-bold mb-6">Stay connected</h2>
          <p className="mb-8 text-lg text-white/85">Subscribe to receive updates about our programs, impact, and stories from the field.</p>
          <div className="flex gap-2 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 rounded px-4 py-2 text-[var(--text)] focus:outline-none"
            />
            <button className="rounded bg-[var(--accent)] px-6 py-2 font-bold text-white transition hover:bg-[var(--accent-warm)]">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
