export default function SaheliCircle() {
  const values = [
    {
      icon: '🤝',
      title: 'Peer Support',
      desc: 'Women support each other emotionally and practically through trusted community circles.',
    },
    {
      icon: '📚',
      title: 'Collective Learning',
      desc: 'Every meeting becomes a place for practical knowledge-sharing and confidence building.',
    },
    {
      icon: '💪',
      title: 'Collective Action',
      desc: 'Circles move from discussion to local action on education, health, and livelihoods.',
    },
  ];

  const activities = [
    {
      date: 'March 15, 2024',
      title: 'Women\'s Skill-Sharing Workshop',
      location: 'Village Community Center',
      desc: 'Women from different circles share techniques in traditional crafts, food processing, and agriculture.',
      attendees: '50+ women',
    },
    {
      date: 'March 22, 2024',
      title: 'Health Awareness Session',
      location: 'Outdoor community gathering',
      desc: 'A practical session on reproductive health, nutrition, and preventive care with our field health team.',
      attendees: '30+ women',
    },
    {
      date: 'April 5, 2024',
      title: 'Circle Leaders Training',
      location: 'Main Office',
      desc: 'Facilitation and group leadership training for coordinators to improve circle quality and continuity.',
      attendees: '20+ coordinators',
    },
    {
      date: 'April 20, 2024',
      title: 'Annual Saheli Circle Festival',
      location: 'District Grounds',
      desc: 'A district-wide gathering celebrating women-led initiatives through showcases, performances, and dialogue.',
      attendees: '500+ women',
    },
  ];

  const resources = [
    {
      icon: '📖',
      title: 'Guides & Manuals',
      items: ['Circle Formation Guide', 'Facilitation Manual', 'Resource Handbook'],
    },
    {
      icon: '🎥',
      title: 'Videos & Webinars',
      items: ['Leadership Development', 'Financial Literacy', 'Health & Wellness'],
    },
    {
      icon: '📊',
      title: 'Tools & Templates',
      items: ['Meeting Agenda', 'Action Plans', 'Feedback Forms'],
    },
    {
      icon: '📚',
      title: 'Learning Materials',
      items: ['Stories & Case Studies', 'Success Examples', 'FAQs'],
    },
  ];

  const stories = [
    {
      title: 'Gram Vikas Circle',
      location: 'Village A',
      story:
        'Started with 10 women who met weekly to discuss local challenges. Today they run a collective farm project that generates reliable annual income.',
      impact: 'Economic independence',
    },
    {
      title: 'Nari Shakti Circle',
      location: 'Village B',
      story:
        'Young mothers began by discussing childcare and nutrition. They now host village health sessions and support girls with hygiene education.',
      impact: 'Community health leaders',
    },
    {
      title: 'Mahila Vichar Circle',
      location: 'Village C',
      story:
        'Women organized around girls\' education and pushed for local schooling access. Their efforts helped establish a school serving 50+ girls.',
      impact: 'Educational access',
    },
  ];

  const steps = [
    {
      step: '1',
      title: 'Connect with Us',
      desc: 'Contact your nearest Saheli office or submit a request through our website.',
    },
    {
      step: '2',
      title: 'Find Your Circle',
      desc: 'We connect you to an existing circle or help form one in your village when needed.',
    },
    {
      step: '3',
      title: 'Attend Regular Meetings',
      desc: 'Participate in weekly or bi-weekly meetings designed around shared needs and goals.',
    },
    {
      step: '4',
      title: 'Grow Together',
      desc: 'Access mentoring, learning resources, and pathways to leadership through your circle.',
    },
  ];

  return (
    <div className="min-h-screen overflow-hidden">
      <section className="border-b border-[var(--border-soft)] bg-[color:rgb(255_255_255_/_0.58)]">
        <div className="editorial-section space-y-6 py-16 text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-[color:rgb(42_123_111_/_0.12)] px-4 py-2">
            <div className="h-2 w-2 rounded-full bg-[var(--teal)]"></div>
            <span className="section-eyebrow text-[var(--navy)]">Community</span>
          </div>
          <h1 className="font-heading text-4xl font-bold text-[var(--navy)] md:text-6xl">Saheli Circle</h1>
          <p className="mx-auto max-w-3xl text-lg text-[var(--text-muted)]">
            A community initiative creating peer support, mutual learning, and collective empowerment for rural women.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="editorial-section space-y-8">
          <h2 className="font-heading text-3xl font-bold text-[var(--navy)] md:text-4xl">What is Saheli Circle?</h2>

          <div className="space-y-6 text-[var(--text-muted)]">
            <p className="text-lg leading-relaxed">
              Saheli Circle is our community initiative that creates spaces for rural women to come together, support
              each other, and learn collectively. It's more than a program—it's a movement of women supporting women.
            </p>

            <div className="rounded-2xl border border-[var(--border-soft)] bg-[var(--surface)] p-6">
              <p className="mb-2 font-heading text-2xl font-semibold text-[var(--navy)]">Core concept</p>
              <p className="leading-relaxed">
                Saheli Circle brings women together in small groups (10-15 members) to share experiences, solve
                problems collectively, and work towards individual and community goals. Each circle meets regularly and
                is facilitated by trained community coordinators.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              {values.map((item) => (
                <div key={item.title} className="rounded-2xl border border-[var(--border-soft)] bg-[var(--surface)] p-6 text-center">
                  <div className="text-4xl mb-3">{item.icon}</div>
                  <h3 className="font-heading text-xl font-semibold text-[var(--navy)]">{item.title}</h3>
                  <p className="mt-2 text-sm text-[var(--text-muted)]">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-[var(--border-soft)] bg-[color:rgb(30_58_95_/_0.05)] py-16">
        <div className="editorial-section space-y-8">
          <h2 className="font-heading text-center text-3xl font-bold text-[var(--navy)] md:text-4xl">Upcoming activities</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {activities.map((activity) => (
              <div key={activity.title} className="overflow-hidden rounded-2xl border border-[var(--border-soft)] bg-[var(--surface)] transition hover:-translate-y-1 hover:shadow-lg">
                <div className="bg-gradient-to-r from-[var(--navy)] to-[var(--blue)] p-4 text-white">
                  <div className="text-sm font-semibold">{activity.date}</div>
                  <h3 className="text-xl font-bold mt-2">{activity.title}</h3>
                </div>
                <div className="p-6">
                  <p className="mb-4 text-[var(--text-muted)]">{activity.desc}</p>
                  <div className="space-y-2 text-sm text-[var(--text-muted)]">
                    <p>
                      <span className="font-semibold">📍</span> {activity.location}
                    </p>
                    <p>
                      <span className="font-semibold">👥</span> {activity.attendees}
                    </p>
                  </div>
                  <button className="mt-4 inline-flex w-full items-center justify-center rounded-full bg-[var(--accent)] px-4 py-3 text-sm font-semibold text-white transition hover:bg-[var(--accent-warm)]">
                    Learn More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="editorial-section space-y-8">
          <h2 className="font-heading text-center text-3xl font-bold text-[var(--navy)] md:text-4xl">Resources</h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {resources.map((resource) => (
              <div key={resource.title} className="rounded-2xl border border-[var(--border-soft)] bg-[var(--surface)] p-6">
                <div className="text-4xl mb-4">{resource.icon}</div>
                <h3 className="font-heading text-xl font-semibold text-[var(--navy)]">{resource.title}</h3>
                <ul className="space-y-2">
                  {resource.items.map((item, i) => (
                    <li key={i} className="mt-2 flex items-center gap-2 text-sm text-[var(--text-muted)]">
                      <span className="text-[var(--accent)]">→</span>
                      <a href="#" className="transition hover:text-[var(--blue)]">
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-[var(--border-soft)] bg-[color:rgb(30_58_95_/_0.05)] py-16">
        <div className="editorial-section space-y-8">
          <h2 className="font-heading text-center text-3xl font-bold text-[var(--navy)] md:text-4xl">Circle stories</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stories.map((circle) => (
              <div key={circle.title} className="rounded-2xl border border-[var(--border-soft)] bg-[var(--surface)] p-6">
                <h3 className="font-heading text-2xl font-semibold text-[var(--navy)]">{circle.title}</h3>
                <p className="mb-4 mt-2 text-sm text-[var(--text-muted)]">📍 {circle.location}</p>
                <p className="mb-6 leading-relaxed text-[var(--text-muted)]">{circle.story}</p>
                <div className="inline-flex rounded-full bg-[color:rgb(217_119_77_/_0.15)] px-3 py-1 text-xs font-semibold uppercase tracking-wide text-[var(--accent)]">
                  {circle.impact}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="editorial-section space-y-10">
          <h2 className="font-heading text-center text-3xl font-bold text-[var(--navy)] md:text-4xl">How to join Saheli Circle</h2>

          <div className="space-y-8">
            {steps.map((step) => (
              <div key={step.step} className="flex gap-6 rounded-2xl border border-[var(--border-soft)] bg-[var(--surface)] p-5">
                <div className="flex-shrink-0">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-[var(--navy)] to-[var(--blue)] text-lg font-bold text-white">
                    {step.step}
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="font-heading text-2xl font-semibold text-[var(--navy)]">{step.title}</h3>
                  <p className="mt-2 text-[var(--text-muted)]">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="rounded-2xl border border-[var(--border-soft)] bg-[color:rgb(30_58_95_/_0.07)] p-8 text-center">
            <h3 className="font-heading text-4xl font-bold text-[var(--navy)]">Ready to join?</h3>
            <p className="mx-auto mb-6 mt-4 max-w-2xl text-[var(--text-muted)]">
              Reach out to us today to find a circle near you or form a new one in your community.
            </p>
            <button className="inline-flex items-center justify-center rounded-full bg-[var(--accent)] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[var(--accent-warm)]">
              Contact Us Now
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
