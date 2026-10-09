import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import ContactForm from '@/components/ContactForm';
import NewsletterForm from '@/components/NewsletterForm';
import PageHero from '@/components/PageHero';
import SectionEyebrow from '@/components/SectionEyebrow';
import FAQAccordion from '@/components/FAQAccordion';
import Icon, { type IconName } from '@/components/icons';

export const metadata: Metadata = {
  title: 'Contact Us',
  description:
    'Get in touch with Mazi Saheli Charitable Trust — registered office in Thane, Maharashtra, with district presence across Thane, Palghar, Ratnagiri, Raigad, Satara and Osmanabad.',
};

const districtOffices = [
  {
    name: 'Thane District Office',
    district: 'Thane',
    image: '/field-images/health/health-camp.jpg',
    address: 'Thane, Maharashtra — 400001',
    focus: 'Health, Well-Being, Financial Literacy',
    phone: '+91 90745 42211',
  },
  {
    name: 'Palghar District Office',
    district: 'Palghar',
    image: '/field-images/nutrition/nutrition-session.jpg',
    address: 'Palghar, Maharashtra — 40149',
    focus: 'Nutrition, Women Empowerment, Health',
    phone: '+91 90745 42212',
  },
  {
    name: 'Ratnagiri District Office',
    district: 'Ratnagiri',
    image: '/field-images/community/community-gathering.jpeg',
    address: 'Ratnagiri, Maharashtra — 41562',
    focus: 'Skill Building, Water Harvesting, Health',
    phone: '+91 90745 42213',
  },
  {
    name: 'Raigad District Office',
    district: 'Raigad',
    image: '/field-images/education/education-session.jpg',
    address: 'Raigad, Maharashtra',
    focus: 'Education, Financial Literacy, Community',
    phone: '+91 90745 42214',
  },
  {
    name: 'Satara District Office',
    district: 'Satara',
    image: '/field-images/livelihood/skills-training.png',
    address: 'Satara, Maharashtra',
    focus: 'Skill Building, Nutrition, Health Camps',
    phone: '+91 90745 42215',
  },
  {
    name: 'Osmanabad District Office',
    district: 'Osmanabad',
    image: '/field-images/women/womens-circle.jpg',
    address: 'Osmanabad, Maharashtra — 41390',
    focus: 'Women Empowerment, Education, Health',
    phone: '+91 90745 42216',
  },
];

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

const MAP_DOTS: { name: string; left: string; top: string }[] = [
  { name: 'Palghar', left: '15%', top: '20%' },
  { name: 'Thane', left: '24%', top: '34%' },
  { name: 'Raigad', left: '30%', top: '46%' },
  { name: 'Ratnagiri', left: '20%', top: '60%' },
  { name: 'Satara', left: '41%', top: '64%' },
  { name: 'Osmanabad', left: '64%', top: '52%' },
];

const CONTACT_DETAILS: { icon: IconName; label: string; lines: string[] }[] = [
  { icon: 'map-pin', label: 'Registered Office', lines: ['Mazi Saheli Charitable Trust', 'Thane, Maharashtra — 400001'] },
  { icon: 'phone', label: 'Phone', lines: ['+91 90745 42210', 'Mon–Sat, 9 AM to 6 PM IST'] },
  { icon: 'mail', label: 'Email', lines: ['info@mazisaheli.org', 'partnerships@mazisaheli.org'] },
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
            <SectionEyebrow className="mb-4">Reach Us</SectionEyebrow>
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
                {(['facebook', 'twitter', 'instagram', 'linkedin'] as IconName[]).map((social) => (
                  <a
                    key={social}
                    href="#"
                    aria-label={social}
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-white/70 transition-colors hover:border-[#e85d75] hover:bg-[#e85d75] hover:text-white"
                  >
                    <Icon name={social} size={16} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-2">
            <ContactForm />
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
              <div key={office.name} className="card card-hover overflow-hidden">
                <div className="relative h-44 w-full">
                  <Image
                    src={office.image}
                    alt={office.district}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                    className="object-cover"
                  />
                  <span className="absolute left-4 top-4 rounded-full bg-[#e85d75] px-3 py-1 text-[10px] font-bold uppercase tracking-[0.14em] text-white">
                    {office.district}
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="font-heading text-lg font-bold text-[var(--navy)]">{office.name}</h3>
                  <p className="mt-2 flex items-start gap-2 text-sm">
                    <Icon name="map-pin" size={15} className="mt-0.5 shrink-0 text-[#e85d75]" />
                    {office.address}
                  </p>
                  <p className="mt-1.5 text-sm text-[var(--text-muted)]">{office.focus}</p>
                  <a
                    href={`tel:${office.phone.replace(/[^+\d]/g, '')}`}
                    className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-[var(--navy)] transition-colors hover:text-[#e85d75]"
                  >
                    <Icon name="phone" size={14} className="text-[#e85d75]" />
                    {office.phone}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------- MAP */}
      <section className="section">
        <div className="container-x space-y-10">
          <div className="mx-auto max-w-3xl text-center">
            <SectionEyebrow className="mb-4">Geographic Reach</SectionEyebrow>
            <h2 className="font-heading text-3xl font-extrabold text-[var(--navy)] md:text-4xl">
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

            {MAP_DOTS.map((dot) => (
              <div key={dot.name} className="absolute -translate-x-1/2 -translate-y-1/2" style={{ left: dot.left, top: dot.top }}>
                <span className="relative flex items-center gap-2">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#e85d75] text-white shadow-[0_8px_18px_rgba(232,93,117,0.4)]">
                    <Icon name="map-pin" size={15} />
                  </span>
                  <span className="whitespace-nowrap rounded-full bg-white px-3 py-1 text-[11px] font-bold text-[var(--navy)] shadow">
                    {dot.name}
                  </span>
                </span>
              </div>
            ))}

            <p className="absolute bottom-5 left-0 right-0 text-center text-[11px] font-bold uppercase tracking-[0.18em] text-[var(--text-muted)]">
              MSCT Network — 6 Districts
            </p>
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------- FAQ */}
      <section className="section section-alt">
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
      <section className="bg-[var(--navy)] py-16">
        <div className="container-x max-w-3xl text-center">
          <SectionEyebrow className="mb-4">Stay Connected</SectionEyebrow>
          <h2 className="font-heading text-3xl font-extrabold text-white md:text-4xl">
            Updates from the field
          </h2>
          <p className="mt-4 text-white/75">
            Subscribe to receive updates about our programs, impact, and stories from the field.
          </p>
          <div className="mt-8">
            <NewsletterForm />
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
