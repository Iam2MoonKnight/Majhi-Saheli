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
        <div className="editorial-section grid grid-cols-1 gap-10 lg:grid-cols-2">
          <div className="overflow-hidden rounded-3xl border border-[var(--border-soft)] bg-[var(--surface)]">
            <img
              src="https://images.unsplash.com/photo-1617854818583-09e7f077a156?w=600&q=80"
              alt="MSCT team"
              className="h-[500px] w-full object-cover"
            />
          </div>

          <div className="rounded-3xl border border-[var(--border-soft)] bg-[var(--surface)] p-8">
            <p className="section-eyebrow">MSCT — Mazi Saheli Charitable Trust</p>
            <h2 className="font-heading text-3xl font-bold text-[var(--navy)] md:text-4xl">Who we are</h2>
            <div className="mt-6 space-y-5 text-[var(--text-muted)]">
              <p>
                Mazi Saheli Charitable Trust is a grassroots organisation serving high-risk and bridge populations across Thane,
                Palghar, Ratnagiri, Raigad, Satara, and Osmanabad.
              </p>
              <p>
                We believe every person deserves access to opportunities and resources for a fulfilling life. Our mission is to empower
                rural communities through essential services in education, healthcare, livelihood, and social development.
              </p>
            </div>
            <div className="mt-8 grid grid-cols-2 gap-4">
              {[
                ['21,962', 'Lives Touched'],
                ['14+', 'Collaborative Partners'],
                ['6', 'Districts'],
                ['224', 'Expert Sessions'],
              ].map(([num, label]) => (
                <div key={label} className="rounded-xl border border-[var(--border-soft)] bg-[color:rgb(30_58_95_/_0.05)] p-4 text-center">
                  <p className="font-heading text-3xl font-bold text-[var(--navy)]">{num}</p>
                  <p className="text-xs font-semibold uppercase tracking-wide text-[var(--text-muted)]">{label}</p>
                </div>
              ))}
            </div>
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
        <div className="editorial-section space-y-8">
          <div className="text-center">
            <p className="section-eyebrow">Five Areas of Focus</p>
            <h2 className="font-heading text-3xl font-bold text-[var(--navy)] md:text-5xl">What we work on</h2>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-5">
            {[
              ['🏥', 'Health'],
              ['💼', 'Livelihood'],
              ['📚', 'Education'],
              ['👩', 'Women Empowerment'],
              ['🏘️', 'Community Development'],
            ].map(([icon, label]) => (
              <div key={label} className="rounded-2xl border border-[var(--border-soft)] bg-[var(--surface)] p-5 text-center">
                <p className="text-3xl">{icon}</p>
                <p className="mt-2 text-sm font-semibold text-[var(--navy)]">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-[var(--border-soft)] bg-[color:rgb(30_58_95_/_0.06)] py-16">
        <div className="editorial-section grid grid-cols-1 gap-10 lg:grid-cols-2">
          <div className="space-y-4">
            <p className="section-eyebrow">Operating Across Districts</p>
            <h2 className="font-heading text-3xl font-bold text-[var(--navy)] md:text-4xl">Rooted in the community</h2>
            <p className="text-[var(--text-muted)]">
              Our ground-level presence is led by local coordinators who understand language, context, and trust-building in every district.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-xl border border-[var(--border-soft)] bg-[var(--surface)] p-4 text-center">
                <p className="font-heading text-3xl font-bold text-[var(--navy)]">6</p>
                <p className="text-xs font-semibold uppercase tracking-wide text-[var(--text-muted)]">Districts</p>
              </div>
              <div className="rounded-xl border border-[var(--border-soft)] bg-[var(--surface)] p-4 text-center">
                <p className="font-heading text-3xl font-bold text-[var(--navy)]">1+</p>
                <p className="text-xs font-semibold uppercase tracking-wide text-[var(--text-muted)]">Rural Networks</p>
              </div>
            </div>
          </div>
          <div className="overflow-hidden rounded-3xl border border-[var(--border-soft)] bg-[var(--surface)]">
            <img
              src="https://images.unsplash.com/photo-1531482615713-2afd69097998?w=560&q=80"
              alt="Field operations"
              className="h-[380px] w-full object-cover"
            />
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="editorial-section space-y-10">
          <div className="text-center">
            <p className="section-eyebrow">Our Story So Far</p>
            <h2 className="font-heading text-3xl font-bold text-[var(--navy)] md:text-5xl">Milestones</h2>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {[
              ['2015', 'MSCT established as a formal trust for grassroots rural development.'],
              ['2017', 'Strategic collaborations with NGOs, hospitals, and public institutions.'],
              ['2019', 'Expanded field chapters across districts with deep community engagement.'],
              ['2020', 'Set up digital learning labs and skill-building facilities.'],
              ['2024', '21,000+ lives touched across villages through integrated programs.'],
            ].map(([year, text]) => (
              <div key={year} className="rounded-2xl border border-[var(--border-soft)] bg-[var(--surface)] p-6">
                <p className="font-mono-eyebrow text-xs text-[var(--accent)]">{year}</p>
                <p className="mt-2 text-[var(--text-muted)]">{text}</p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {[
              ['224', 'Medical Camps'],
              ['21000+', 'Lives Touched'],
              ['152', 'Villages Reached'],
              ['223', 'Expert Sessions'],
            ].map(([num, label]) => (
              <div key={label} className="rounded-xl border border-[var(--border-soft)] bg-[var(--surface)] p-5 text-center">
                <p className="font-heading text-3xl font-bold text-[var(--navy)]">{num}</p>
                <p className="text-xs font-semibold uppercase tracking-wide text-[var(--text-muted)]">{label}</p>
              </div>
            ))}
          </div>

          <div className="rounded-2xl border border-[var(--border-soft)] bg-[var(--surface)] p-6">
            <p className="section-eyebrow">Partnerships</p>
            <div className="mt-3 grid grid-cols-2 gap-3 md:grid-cols-4">
              {['Bramhon', 'Project Roots', 'Adveno Foundation', 'Wokhard Hospital', 'Billion Rising', 'FVNSC Pune', 'Jan Sevak', 'Pragatio Welfare'].map((partner) => (
                <div key={partner} className="rounded-lg border border-[var(--border-soft)] bg-[color:rgb(30_58_95_/_0.04)] px-3 py-2 text-center text-xs font-semibold text-[var(--navy)]">
                  {partner}
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {[
              ['01', 'Expand Across Geographies', 'Scale proven programmes to new communities and demographics.'],
              ['02', 'Saheli Circle Initiative', 'Train women leaders as support and advocacy anchors.'],
              ['03', 'Multi-Specialty Hospital Venture', 'Build affordable, quality health services for rural communities.'],
            ].map(([num, title, text]) => (
              <div key={title} className="rounded-2xl border border-[var(--border-soft)] bg-[var(--surface)] p-6">
                <p className="font-mono-eyebrow text-xs text-[var(--accent)]">{num}</p>
                <h3 className="mt-2 font-heading text-2xl font-semibold text-[var(--navy)]">{title}</h3>
                <p className="mt-2 text-sm text-[var(--text-muted)]">{text}</p>
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
