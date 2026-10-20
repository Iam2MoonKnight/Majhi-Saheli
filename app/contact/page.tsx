import type { Metadata } from 'next';
import Link from 'next/link';
import ContactForm from '@/components/ContactForm';
import NewsletterForm from '@/components/NewsletterForm';
import PageHero from '@/components/PageHero';
import SectionEyebrow from '@/components/SectionEyebrow';
import FAQAccordion from '@/components/FAQAccordion';
import Icon, { type IconName } from '@/components/icons';
import { OPERATING_DISTRICTS } from '@/lib/organization';
import { createPageMetadata } from '@/lib/seo';

export const metadata: Metadata = createPageMetadata(
  'Contact Us',
  'Get in touch with Mazi Saheli Charitable Trust — headquartered in Maharashtra, with programmes across eight districts.',
);

const districtOffices = OPERATING_DISTRICTS;

const FAQS = [
  {
    q: 'How can I volunteer with Saheli?',
    a: 'We welcome volunteers. Email your interests and skills, and our team will connect you to relevant opportunities.',
  },
  {
    q: 'Can I partner with Saheli for a project?',
    a: 'Yes. We collaborate with institutions, companies, and public agencies. Contact us to explore partnerships.',
  },
  {
    q: "How can I sponsor a girl's education?",
    a: 'You can support education through one-time or recurring sponsorships in our program pipeline.',
  },
  {
    q: "Can I visit Saheli's programs?",
    a: 'Yes, program visits can be scheduled in advance to ensure smooth coordination with field teams.',
  },
  {
    q: 'Do you accept in-kind donations?',
    a: 'Yes. We accept relevant educational and health-related materials based on current field requirements.',
  },
];

const CONTACT_DETAILS: { icon: IconName; label: string; lines: string[] }[] = [
  {
    icon: 'map-pin',
    label: 'Head Office',
    lines: ['B/307 Girija Bhavan CHS, Narmada Nagar, Cabin Road, Bhayander East, Thane – 401105'],
  },
  {
    icon: 'map-pin',
    label: 'Field Office',
    lines: ['At Post Savarpada Village, Taluka Jawhar, District Palghar – 401603'],
  },
  { icon: 'phone', label: 'Phone', lines: ['+91 79776 69173'] },
  { icon: 'mail', label: 'Email', lines: ['connect@msct.org.in'] },
  { icon: 'home', label: 'Website', lines: ['www.msct.org.in'] },
];

export default function Contact() {
  return (
    <div className="overflow-hidden">
      <PageHero
        crumbs={[{ label: 'Home', href: '/' }, { label: 'Contact' }]}
        eyebrow="Contact"
        title={
          <>
            Let&rsquo;s Connect &amp; <span className="text-[#e85d75]">Work Together</span>
          </>
        }
        subtitle="Have questions or want to collaborate? We'd love to hear from you!"
      />

      {/* ---------------------------------------------------------- INFO + FORM */}
      <section className="section">
        <div className="container-x grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div className="rounded-2xl bg-[var(--navy)] p-8 text-white lg:col-span-1">
            <SectionEyebrow className="mb-4 text-white/80">Reach Us</SectionEyebrow>
            <h2 className="font-heading text-2xl font-bold text-white">We&rsquo;d love to hear from you</h2>

            <ul className="mt-8 space-y-7">
              {CONTACT_DETAILS.map((detail) => (
                <li key={detail.label} className="flex gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[color:rgb(232_93_117_/_0.18)] text-[#e85d75]">
                    <Icon name={detail.icon} size={18} />
                  </span>
                  <div>
                    <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-white/50">{detail.label}</p>
                    {detail.lines.map((line) => (
                      <p key={line} className="mt-0.5 text-sm text-white/85">
                        {line}
                      </p>
                    ))}
                  </div>
                </li>
              ))}
            </ul>

            <div className="mt-8 border-t border-white/12 pt-6">
              <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-white/50">Follow Us</p>
              <div className="mt-3 flex flex-wrap gap-2.5">
                {(['facebook', 'twitter', 'instagram', 'linkedin'] as IconName[]).map((social) => {
                  // TODO: Replace the placeholder with a verified profile URL when supplied.
                  return (
                    <a
                      key={social}
                      href="#"
                      aria-label={social}
                      aria-disabled="true"
                      tabIndex={-1}
                      title="Coming soon"
                      className="pointer-events-none flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-white/70 opacity-60"
                    >
                      <Icon name={social} size={16} />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="lg:col-span-2">
            <ContactForm />
            <div className="mt-8">
              <h2 className="font-heading text-xl font-bold text-[var(--navy)]">Get Involved</h2>
              <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-3">
                {[
                  { href: '/donate', label: 'Donate' },
                  { href: '/contact?purpose=volunteer', label: 'Volunteer' },
                  { href: '/contact?purpose=csr', label: 'CSR Partnership' },
                ].map((item) => (
                  <Link key={item.href} href={item.href} className="card card-hover p-4 text-center text-sm font-bold text-[var(--navy)]">
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------- DISTRICTS */}
      <section className="section section-alt">
        <div className="container-x space-y-12">
          <div className="mx-auto max-w-3xl text-center">
            <SectionEyebrow className="mb-4">Our Presence</SectionEyebrow>
            <h2 className="font-heading text-3xl font-extrabold text-[var(--navy)] md:text-4xl">
              Our district presence
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {districtOffices.map((office) => (
              <div key={office} className="card card-hover overflow-hidden">
                <div
                  role="img"
                  aria-label={`Placeholder: ${office} district field photo to be provided`}
                  className="flex h-44 items-center justify-center bg-gray-200 p-6 text-center text-sm text-[var(--text-muted)]"
                >
                  Placeholder: {office} district field photo
                </div>
                <div className="p-6">
                  <h3 className="font-heading text-lg font-bold text-[var(--navy)]">{office}</h3>
                  <p className="mt-2 text-sm text-[var(--text-muted)]">Operating district listed in the 2025-26 annual report.</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------- MAP */}
      <section className="section bg-[var(--navy)]">
        <div className="container-x space-y-10">
          <div className="mx-auto max-w-3xl text-center">
            <SectionEyebrow className="mb-4 text-white">Geographic Reach</SectionEyebrow>
            <h2 className="font-heading text-3xl font-extrabold text-white md:text-4xl">
              Find us across Maharashtra
            </h2>
          </div>

          <div className="card relative mx-auto h-[360px] max-w-4xl overflow-hidden p-0 md:h-[440px]">
            <div className="absolute inset-0 bg-gradient-to-br from-[color:rgb(27_58_92_/_0.06)] via-transparent to-[color:rgb(232_93_117_/_0.08)]" />
            <div
              className="absolute inset-0 opacity-[0.5]"
              style={{
                backgroundImage:
                  'linear-gradient(to right, #e5e9f0 1px, transparent 1px), linear-gradient(to bottom, #e5e9f0 1px, transparent 1px)',
                backgroundSize: '48px 48px',
              }}
            />

            <div
              role="img"
              aria-label="Placeholder: Maharashtra district map to be provided"
              className="absolute inset-8 flex items-center justify-center rounded-2xl bg-gray-200 p-6 text-center text-sm text-[var(--text-muted)]"
            >
              Placeholder: Maharashtra district map to be provided
            </div>

            <p className="absolute bottom-5 left-0 right-0 text-center text-[11px] font-bold uppercase tracking-[0.18em] text-[var(--text-muted)]">
              MSCT Network — 8 Districts
            </p>
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------- FAQ */}
      <section className="section">
        <div className="container-x grid grid-cols-1 gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <SectionEyebrow className="mb-4">Frequently Asked</SectionEyebrow>
            <h2 className="font-heading text-3xl font-extrabold text-[var(--navy)] md:text-4xl">
              Questions people ask us
            </h2>
            <p className="mt-4">
              Can&rsquo;t find what you&rsquo;re looking for? Write to us and a member of the team will follow up.
            </p>
            <Link href="/donate" className="btn btn-coral mt-6">
              <Icon name="heart" size={16} />
              Support Our Work
            </Link>
          </div>

          <FAQAccordion items={FAQS} />
        </div>
      </section>

      {/* ---------------------------------------------------------- NEWSLETTER */}
      <section className="section section-alt">
        <div className="container-x max-w-3xl text-center">
          <SectionEyebrow className="mb-4">Stay Connected</SectionEyebrow>
          <h2 className="font-heading text-3xl font-extrabold text-[var(--navy)] md:text-4xl">
            Updates from the field
          </h2>
          <p className="mt-4 text-[var(--text-muted)]">
            Subscribe to receive updates about our programs, impact, and stories from the field.
          </p>
          <div className="mt-8">
            <NewsletterForm variant="light" />
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------- CTA */}
      <section className="bg-[var(--navy-dark)] py-16">
        <div className="container-x max-w-3xl text-center">
          <h2 className="font-heading text-3xl font-extrabold text-white md:text-4xl">Ready to make a difference?</h2>
          <p className="mt-4 text-white/75">
            Every contribution supports health camps, education, and livelihood programs across underserved communities.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link href="/donate" className="btn btn-coral">
              <Icon name="heart" size={16} />
              Donate Now
            </Link>
            <Link href="/contact" className="btn btn-outline-light">
              Become a Partner
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
