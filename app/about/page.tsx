import Link from 'next/link';

export default function About() {
  return (
    <div className="min-h-screen overflow-hidden">
      <section className="relative border-b border-[var(--border-soft)] bg-[color:rgb(255_255_255_/_0.55)] py-16">
        <div className="editorial-section space-y-6 text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-[color:rgb(30_58_95_/_0.12)] px-4 py-2">
            <span className="h-2 w-2 rounded-full bg-[var(--blue)]" />
            <span className="section-eyebrow text-[var(--navy)]">About Mazi Saheli</span>
          </div>
          <h1 className="font-heading text-4xl font-bold text-[var(--navy)] md:text-6xl">Empowering women, strengthening communities</h1>
          <p className="mx-auto max-w-3xl text-lg text-[var(--text-muted)]">
            We work across rural Maharashtra to improve education, health access, and economic opportunity for women and girls.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="editorial-section grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div className="rounded-3xl border border-[var(--border-soft)] bg-[var(--surface)] p-8 lg:col-span-2">
            <p className="section-eyebrow">Our Story</p>
            <h2 className="font-heading text-3xl font-bold text-[var(--navy)] md:text-4xl">From local action to regional impact</h2>
            <div className="mt-6 space-y-5 text-[var(--text-muted)]">
              <p>
                Mazi Saheli began with a clear purpose: rural women deserve equal access to opportunity, dignity, and decision-making.
                What started with small education and health interventions has grown into an integrated empowerment movement.
              </p>
              <p>
                Today, we partner with local leaders, schools, healthcare workers, and volunteers to deliver practical, measurable impact.
                Every initiative is designed to help women become confident earners, informed caregivers, and community leaders.
              </p>
              <p>
                Our long-term approach focuses on sustainability, local ownership, and transparent implementation so progress lasts across generations.
              </p>
            </div>
          </div>

          <div className="rounded-3xl border border-[var(--border-soft)] bg-gradient-to-b from-[var(--navy)] to-[var(--blue)] p-8 text-white">
            <p className="font-mono-eyebrow text-xs uppercase text-[var(--accent)]">Coverage</p>
            <h3 className="mt-3 font-heading text-2xl font-semibold">Where we work</h3>
            <ul className="mt-5 space-y-2 text-sm text-white/85">
              <li>Thane</li>
              <li>Palghar</li>
              <li>Raigad</li>
              <li>Ratnagiri</li>
              <li>Satara</li>
              <li>Osmanabad</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-[color:rgb(30_58_95_/_0.06)] py-16">
        <div className="editorial-section grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-[var(--border-soft)] bg-[var(--surface)] p-8">
            <p className="section-eyebrow">Mission</p>
            <h3 className="font-heading text-2xl font-bold text-[var(--navy)]">Our Mission</h3>
            <p className="mt-4 text-[var(--text-muted)]">
              To equip rural women with education, healthcare support, and livelihood skills so they can build secure, self-directed lives.
            </p>
          </div>
          <div className="rounded-2xl border border-[var(--border-soft)] bg-[var(--surface)] p-8">
            <p className="section-eyebrow">Vision</p>
            <h3 className="font-heading text-2xl font-bold text-[var(--navy)]">Our Vision</h3>
            <p className="mt-4 text-[var(--text-muted)]">
              A just future where every rural woman and girl is educated, healthy, economically independent, and heard.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="editorial-section space-y-10">
          <div className="text-center">
            <p className="section-eyebrow">Core Values</p>
            <h2 className="font-heading text-3xl font-bold text-[var(--navy)] md:text-5xl">How we lead our work</h2>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              { title: 'Compassion', desc: 'Human dignity and empathy at every touchpoint.' },
              { title: 'Equity', desc: 'Equal opportunities regardless of geography or income.' },
              { title: 'Agency', desc: 'Women leading decisions for their own future.' },
              { title: 'Sustainability', desc: 'Solutions designed to outlast short-term funding.' },
            ].map((value) => (
              <div key={value.title} className="rounded-2xl border border-[var(--border-soft)] bg-[var(--surface)] p-6">
                <h3 className="font-heading text-xl font-bold text-[var(--navy)]">{value.title}</h3>
                <p className="mt-2 text-sm text-[var(--text-muted)]">{value.desc}</p>
              </div>
            ))}
          </div>

          <div className="rounded-3xl bg-gradient-to-r from-[var(--navy)] to-[var(--teal)] p-10 text-center">
            <h3 className="font-heading text-3xl font-bold text-white">Join the mission</h3>
            <p className="mx-auto mt-3 max-w-2xl text-white/85">
              Every contribution helps us reach more villages with education support, health services, and skills training.
            </p>
            <Link
              href="/donate"
              className="mt-6 inline-flex items-center justify-center rounded-full bg-[var(--accent)] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[var(--accent-warm)]"
            >
              Support our work
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
