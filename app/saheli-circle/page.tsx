export default function SaheliCircle() {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero Section */}
      <section className="bg-white border-b border-slate-200">
        <div className="max-w-5xl mx-auto px-4 py-16 space-y-6 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-teal-100 rounded-full mx-auto">
            <div className="w-2 h-2 bg-teal-600 rounded-full"></div>
            <span className="text-xs font-semibold text-teal-900 tracking-wide">COMMUNITY</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900">Saheli Circle</h1>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            A community initiative creating peer support, mutual learning, and collective empowerment for rural women.
          </p>
        </div>
      </section>

      {/* What is Saheli Circle */}
      <section className="bg-slate-50">
        <div className="max-w-5xl mx-auto px-4 py-16 space-y-8">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900">What is Saheli Circle?</h2>

          <div className="prose prose-lg text-slate-700 space-y-6 max-w-none">
            <p>
              Saheli Circle is our community initiative that creates spaces for rural women to come together, support
              each other, and learn collectively. It's more than a program—it's a movement of women supporting women.
            </p>

            <div className="bg-white border border-slate-200 p-6 rounded-2xl">
              <p className="font-semibold text-slate-900 mb-2">Core Concept</p>
              <p>
                Saheli Circle brings women together in small groups (10-15 members) to share experiences, solve
                problems collectively, and work towards individual and community goals. Each circle meets regularly and
                is facilitated by trained community coordinators.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              {[
                {
                  icon: '🤝',
                  title: 'Peer Support',
                  desc: 'Women support each other emotionally and practically',
                },
                {
                  icon: '📚',
                  title: 'Collective Learning',
                  desc: 'Share knowledge and learn from each other\'s experiences',
                },
                {
                  icon: '💪',
                  title: 'Collective Action',
                  desc: 'Work together to solve community problems',
                },
              ].map((item, idx) => (
                <div key={idx} className="bg-white rounded-2xl p-6 text-center border border-slate-200">
                  <div className="text-4xl mb-3">{item.icon}</div>
                  <h3 className="font-bold text-slate-900 mb-2">{item.title}</h3>
                  <p className="text-slate-600 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Activities */}
      <section className="bg-white border-t border-slate-200">
        <div className="max-w-5xl mx-auto px-4 py-16 space-y-8">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 text-center">Upcoming activities</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                date: 'March 15, 2024',
                title: 'Women\'s Skill-Sharing Workshop',
                location: 'Village Community Center',
                desc: 'Women from different circles will share skills and techniques in traditional crafts, cooking, and agriculture.',
                attendees: '50+ women',
              },
              {
                date: 'March 22, 2024',
                title: 'Health Awareness Session',
                location: 'Outdoor community gathering',
                desc: 'Learn about reproductive health, nutrition, and preventive care from our health team.',
                attendees: '30+ women',
              },
              {
                date: 'April 5, 2024',
                title: 'Circle Leaders Training',
                location: 'Main Office',
                desc: 'Training session for circle coordinators to improve facilitation and group management skills.',
                attendees: '20+ coordinators',
              },
              {
                date: 'April 20, 2024',
                title: 'Annual Saheli Circle Festival',
                location: 'District Grounds',
                desc: 'Celebration of all circles! Food, music, craft exhibitions, and woman-led performances.',
                attendees: '500+ women',
              },
            ].map((activity, idx) => (
              <div key={idx} className="bg-slate-50 rounded-2xl border border-slate-200 overflow-hidden hover:shadow-lg transition">
                <div className="bg-gradient-to-r from-teal-600 to-emerald-600 p-4 text-white">
                  <div className="text-sm font-semibold">{activity.date}</div>
                  <h3 className="text-xl font-bold mt-2">{activity.title}</h3>
                </div>
                <div className="p-6">
                  <p className="text-slate-700 mb-4">{activity.desc}</p>
                  <div className="space-y-2 text-sm text-slate-600">
                    <p>
                      <span className="font-semibold">📍</span> {activity.location}
                    </p>
                    <p>
                      <span className="font-semibold">👥</span> {activity.attendees}
                    </p>
                  </div>
                  <button className="mt-4 w-full inline-flex items-center justify-center rounded-lg bg-teal-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:opacity-90">
                    Learn More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Resources */}
      <section className="bg-slate-50 border-t border-slate-200">
        <div className="max-w-5xl mx-auto px-4 py-16 space-y-8">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 text-center">Resources</h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
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
            ].map((resource, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-6 border border-slate-200">
                <div className="text-4xl mb-4">{resource.icon}</div>
                <h3 className="text-lg font-bold text-slate-900 mb-4">{resource.title}</h3>
                <ul className="space-y-2">
                  {resource.items.map((item, i) => (
                    <li key={i} className="text-slate-700 flex items-center gap-2">
                      <span className="text-teal-600">→</span>
                      <a href="#" className="hover:text-teal-700 transition">
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

      {/* Circle Stories */}
      <section className="bg-white border-t border-slate-200">
        <div className="max-w-5xl mx-auto px-4 py-16 space-y-8">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 text-center">Circle stories</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Gram Vikas Circle',
                location: 'Village A',
                story:
                  'Started with 10 women who met weekly to discuss their problems. Now they run a collective vegetable farming project that generates ₹50,000 annually.',
                impact: 'Economic independence',
              },
              {
                title: 'Nari Shakti Circle',
                location: 'Village B',
                story:
                  'A group of young mothers came together to discuss childcare and health. They now conduct health camps and have educated 5 girls on health hygiene.',
                impact: 'Community health leaders',
              },
              {
                title: 'Mahila Vichar Circle',
                location: 'Village C',
                story:
                  'Women gathered to discuss education for their daughters. Their advocacy led to a new school in the village. 50+ girls now attend school.',
                impact: 'Educational access',
              },
            ].map((circle, idx) => (
              <div key={idx} className="bg-slate-50 rounded-2xl border border-slate-200 p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-2">{circle.title}</h3>
                <p className="text-sm text-slate-500 mb-4">📍 {circle.location}</p>
                <p className="text-slate-700 mb-6 leading-relaxed">{circle.story}</p>
                <div className="bg-teal-100 text-teal-700 px-4 py-2 rounded inline-block font-semibold text-xs">
                  {circle.impact}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Saheli Circle */}
      <section className="bg-slate-50 border-t border-slate-200">
        <div className="max-w-5xl mx-auto px-4 py-16 space-y-10">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 text-center">How to join Saheli Circle</h2>

          <div className="space-y-8">
            {[
              {
                step: '1',
                title: 'Connect with Us',
                desc: 'Contact your nearest Saheli office or reach out through our website to express interest in joining.',
              },
              {
                step: '2',
                title: 'Find Your Circle',
                desc: 'We\'ll connect you with an existing circle in your village or help form a new one if needed.',
              },
              {
                step: '3',
                title: 'Attend Regular Meetings',
                desc: 'Participate in weekly or bi-weekly circle meetings in your community. Each meeting lasts 1-2 hours.',
              },
              {
                step: '4',
                title: 'Grow Together',
                desc: 'Learn, share, and grow alongside 10-15 women from your community. Access resources and training.',
              },
            ].map((step, idx) => (
              <div key={idx} className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-full bg-gradient-to-r from-teal-600 to-emerald-600 text-white font-bold text-lg">
                    {step.step}
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{step.title}</h3>
                  <p className="text-slate-600">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-white border border-teal-200 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Ready to join?</h3>
            <p className="text-slate-600 mb-6">
              Reach out to us today to find a circle near you or form a new one in your community.
            </p>
            <button className="inline-flex items-center justify-center rounded-lg bg-teal-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:opacity-90">
              Contact Us Now
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
