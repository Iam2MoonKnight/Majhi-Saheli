import ContactForm from '@/components/ContactForm';
import NewsletterForm from '@/components/NewsletterForm';

export default function Contact() {
  const districtOffices = [
    {
      name: 'Thane District Office',
      district: 'Thane',
      image: 'https://images.unsplash.com/photo-1599059813005-11265ba4b4ce?w=400&q=80',
      details: ['Thane, Maharashtra — 400001', 'Health, Well-Being, Financial Literacy', '+91 90745 42211'],
    },
    {
      name: 'Palghar District Office',
      district: 'Palghar',
      image: 'https://images.unsplash.com/photo-1576267423445-b2e0074d68a4?w=400&q=80',
      details: ['Palghar, Maharashtra — 40149', 'Nutrition, Women Empowerment, Health', '+91 90745 42212'],
    },
    {
      name: 'Ratnagiri District Office',
      district: 'Ratnagiri',
      image: 'https://images.unsplash.com/photo-1552084162-8a4f3c9e7f2d?w=400&q=80',
      details: ['Ratnagiri, Maharashtra — 41562', 'Skill Building, Water Harvesting, Health', '+91 90745 42213'],
    },
    {
      name: 'Raigad District Office',
      district: 'Raigad',
      image: 'https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?w=400&q=80',
      details: ['Raigad, Maharashtra', 'Education, Financial Literacy, Community', '+91 90745 42214'],
    },
    {
      name: 'Satara District Office',
      district: 'Satara',
      image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=400&q=80',
      details: ['Satara, Maharashtra', 'Skill Building, Nutrition, Health Camps', '+91 90745 42215'],
    },
    {
      name: 'Osmanabad District Office',
      district: 'Osmanabad',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80',
      details: ['Osmanabad, Maharashtra — 41390', 'Women Empowerment, Education, Health', '+91 90745 42216'],
    },
  ];

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
            Have questions or want to collaborate? We&rsquo;d love to hear from you!
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="editorial-section">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div>
              <h2 className="font-heading text-2xl font-bold text-[var(--navy)] mb-8">We&rsquo;d love to hear from you</h2>

              <div className="space-y-8">
                <div>
                  <h3 className="font-bold text-[var(--navy)] mb-2 flex items-center gap-2">
                    <span className="text-2xl">📍</span> Registered Office
                  </h3>
                  <p className="text-[var(--text)]">Mazi Saheli Charitable Trust</p>
                  <p className="text-sm text-[var(--text-muted)] mt-1">Thane, Maharashtra — 400001</p>
                </div>

                <div>
                  <h3 className="font-bold text-[var(--navy)] mb-2 flex items-center gap-2">
                    <span className="text-2xl">📞</span> Phone
                  </h3>
                  <p className="text-[var(--text)]">+91 90745 42210</p>
                  <p className="text-sm text-[var(--text-muted)] mt-1">Mon–Sat, 9 AM to 6 PM IST</p>
                </div>

                <div>
                  <h3 className="font-bold text-[var(--navy)] mb-2 flex items-center gap-2">
                    <span className="text-2xl">✉️</span> Email
                  </h3>
                  <p className="text-[var(--text)]">info@mazisaheli.org</p>
                  <p className="text-sm text-[var(--text-muted)]">partnerships@mazisaheli.org</p>
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
            </div>

            <div className="lg:col-span-2">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[color:rgb(30_58_95_/_0.06)] py-16">
        <div className="editorial-section">
          <h2 className="font-heading text-center text-3xl font-bold text-[var(--navy)] md:text-5xl mb-12">Our district presence</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {districtOffices.map((office) => (
              <div key={office.name} className="overflow-hidden rounded-2xl border border-[var(--border-soft)] bg-[var(--surface)]">
                <img src={office.image} alt={office.district} className="h-44 w-full object-cover" />
                <div className="p-6">
                  <p className="font-mono-eyebrow text-xs text-[var(--accent)]">{office.district}</p>
                  <h3 className="font-heading text-xl font-bold text-[var(--navy)] mt-1">{office.name}</h3>
                  <div className="mt-3 space-y-1 text-sm text-[var(--text-muted)]">
                    {office.details.map((detail) => (
                      <p key={detail}>• {detail}</p>
                    ))}
                  </div>
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

      <section className="border-y border-[var(--border-soft)] bg-[color:rgb(30_58_95_/_0.06)] py-16">
        <div className="editorial-section space-y-6 text-center">
          <p className="section-eyebrow">Geographic Reach</p>
          <h2 className="font-heading text-4xl font-bold text-[var(--navy)] md:text-5xl">Find us across Maharashtra</h2>
          <div className="mx-auto max-w-4xl rounded-2xl border border-[var(--border-soft)] bg-[var(--surface)] p-8">
            <div className="relative h-72 rounded-xl bg-gradient-to-br from-[color:rgb(30_58_95_/_0.08)] to-[color:rgb(42_123_111_/_0.08)]">
              <div className="absolute left-[22%] top-[35%] rounded-full bg-[var(--accent)] px-2 py-1 text-[10px] font-semibold text-white">Thane</div>
              <div className="absolute left-[17%] top-[22%] rounded-full bg-[var(--accent)] px-2 py-1 text-[10px] font-semibold text-white">Palghar</div>
              <div className="absolute left-[21%] top-[58%] rounded-full bg-[var(--accent)] px-2 py-1 text-[10px] font-semibold text-white">Ratnagiri</div>
              <div className="absolute left-[30%] top-[45%] rounded-full bg-[var(--accent)] px-2 py-1 text-[10px] font-semibold text-white">Raigad</div>
              <div className="absolute left-[38%] top-[63%] rounded-full bg-[var(--accent)] px-2 py-1 text-[10px] font-semibold text-white">Satara</div>
              <div className="absolute left-[65%] top-[56%] rounded-full bg-[var(--accent)] px-2 py-1 text-[10px] font-semibold text-white">Osmanabad</div>
              <p className="absolute bottom-4 left-0 right-0 text-center text-xs font-semibold uppercase tracking-wide text-[var(--text-muted)]">MSCT Network — 6 Districts</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-r from-[var(--navy)] to-[var(--teal)] py-16 text-white">
        <div className="editorial-section max-w-4xl text-center">
          <h2 className="font-heading text-4xl font-bold mb-6">Stay connected</h2>
          <p className="mb-8 text-lg text-white/85">Subscribe to receive updates about our programs, impact, and stories from the field.</p>
          <NewsletterForm />
        </div>
      </section>

      <section className="bg-[color:rgb(13_27_42_/_0.96)] py-16 text-white">
        <div className="editorial-section max-w-4xl text-center space-y-5">
          <h2 className="font-heading text-4xl font-bold">Ready to make a difference?</h2>
          <p className="text-white/80">Every contribution supports health camps, education, and livelihood programs across underserved communities.</p>
          <div className="flex flex-col justify-center gap-3 sm:flex-row">
            <a href="/donate" className="inline-flex items-center justify-center rounded-full bg-[var(--accent)] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[var(--accent-warm)]">
              Donate now
            </a>
            <a href="/contact" className="inline-flex items-center justify-center rounded-full border border-white px-6 py-3 text-sm font-semibold text-white transition hover:bg-white hover:text-[var(--navy)]">
              Become a partner
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
