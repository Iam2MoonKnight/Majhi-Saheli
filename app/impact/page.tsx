import StatCard from '@/components/StatCard';

export default function Impact() {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero Section */}
      <section className="bg-white border-b border-slate-200">
        <div className="max-w-5xl mx-auto px-4 py-16 space-y-6 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-teal-100 rounded-full mx-auto">
            <div className="w-2 h-2 bg-teal-600 rounded-full"></div>
            <span className="text-xs font-semibold text-teal-900 tracking-wide">OUR IMPACT</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900">Our impact</h1>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Transforming lives and communities through our dedicated programs and initiatives.
          </p>
        </div>
      </section>

      {/* Key Metrics */}
      <section className="bg-slate-50">
        <div className="max-w-5xl mx-auto px-4 py-16 space-y-8">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 text-center">Key metrics</h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <StatCard icon="👩" number="500+" label="Women Trained" description="Direct beneficiaries of our programs" />
            <StatCard icon="👧" number="250+" label="Girls Educated" description="Enrolled in school/education" />
            <StatCard icon="🏘️" number="50+" label="Villages" description="Communities reached annually" />
            <StatCard icon="💊" number="1000+" label="Health Services" description="Medical check-ups conducted" />
          </div>
        </div>
      </section>

      {/* Program-wise Impact */}
      <section className="bg-white border-t border-slate-200">
        <div className="max-w-5xl mx-auto px-4 py-16 space-y-8">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 text-center">Program-wise impact</h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Education */}
            <div className="bg-slate-50 rounded-2xl border border-slate-200 p-8">
              <h3 className="text-xl font-bold text-teal-700 mb-6 flex items-center gap-2">
                <span className="text-3xl">📚</span> Education Program
              </h3>
              <div className="space-y-4">
                <div>
                  <p className="text-slate-700 font-semibold">Girls Enrolled in School</p>
                  <div className="text-3xl font-bold text-teal-700">250+</div>
                </div>
                <div>
                  <p className="text-slate-700 font-semibold">Adult Literacy Programs</p>
                  <div className="text-3xl font-bold text-teal-700">150+ women</div>
                </div>
                <div>
                  <p className="text-slate-700 font-semibold">School Retention Rate</p>
                  <div className="text-3xl font-bold text-teal-700">95%</div>
                </div>
                <p className="text-slate-600 mt-6">
                  Through our education programs, we've provided scholarships, learning materials, and teacher training
                  to ensure girls and women have access to quality education.
                </p>
              </div>
            </div>

            {/* Health */}
            <div className="bg-slate-50 rounded-2xl border border-slate-200 p-8">
              <h3 className="text-xl font-bold text-emerald-700 mb-6 flex items-center gap-2">
                <span className="text-3xl">💊</span> Health Program
              </h3>
              <div className="space-y-4">
                <div>
                  <p className="text-slate-700 font-semibold">Health Camps Conducted</p>
                  <div className="text-3xl font-bold text-emerald-700">50+ camps</div>
                </div>
                <div>
                  <p className="text-slate-700 font-semibold">Women Benefited</p>
                  <div className="text-3xl font-bold text-emerald-700">1000+</div>
                </div>
                <div>
                  <p className="text-slate-700 font-semibold">Awareness Sessions</p>
                  <div className="text-3xl font-bold text-emerald-700">100+</div>
                </div>
                <p className="text-slate-600 mt-6">
                  Our health initiatives have provided medical services, maternal care, and health awareness to remote
                  villages, improving community health outcomes significantly.
                </p>
              </div>
            </div>

            {/* Vocational Training */}
            <div className="bg-slate-50 rounded-2xl border border-slate-200 p-8">
              <h3 className="text-xl font-bold text-amber-700 mb-6 flex items-center gap-2">
                <span className="text-3xl">🎓</span> Vocational Training
              </h3>
              <div className="space-y-4">
                <div>
                  <p className="text-slate-700 font-semibold">Women Trained</p>
                  <div className="text-3xl font-bold text-amber-700">200+ women</div>
                </div>
                <div>
                  <p className="text-slate-700 font-semibold">Skill Categories</p>
                  <div className="text-3xl font-bold text-amber-700">8+ skills</div>
                </div>
                <div>
                  <p className="text-slate-700 font-semibold">Employment Rate</p>
                  <div className="text-3xl font-bold text-amber-700">75%</div>
                </div>
                <p className="text-slate-600 mt-6">
                  Women have learned skills in tailoring, handicrafts, digital literacy, and agriculture, with many
                  now earning independent incomes.
                </p>
              </div>
            </div>

            {/* Community Empowerment */}
            <div className="bg-slate-50 rounded-2xl border border-slate-200 p-8">
              <h3 className="text-xl font-bold text-teal-700 mb-6 flex items-center gap-2">
                <span className="text-3xl">🤝</span> Community Empowerment
              </h3>
              <div className="space-y-4">
                <div>
                  <p className="text-slate-700 font-semibold">Communities Organized</p>
                  <div className="text-3xl font-bold text-teal-700">50+ villages</div>
                </div>
                <div>
                  <p className="text-slate-700 font-semibold">Women Leaders Trained</p>
                  <div className="text-3xl font-bold text-teal-700">100+ leaders</div>
                </div>
                <div>
                  <p className="text-slate-700 font-semibold">Community Initiatives</p>
                  <div className="text-3xl font-bold text-teal-700">25+ projects</div>
                </div>
                <p className="text-slate-600 mt-6">
                  We've empowered women to take leadership roles in their communities and initiate development
                  projects that benefit their families and villages.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="bg-slate-50 border-t border-slate-200">
        <div className="max-w-5xl mx-auto px-4 py-16 space-y-8">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 text-center">Success stories</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                name: 'Radhika',
                story:
                  'Radhika dropped out of school at age 10. Through our education program, she learned to read, write, and now helps other children in her village learn too.',
                impact: 'From student to community educator',
              },
              {
                name: 'Lakshmi',
                story:
                  'Lakshmi received vocational training in tailoring. She now runs her own small business and earns enough to support her two children\'s education.',
                impact: 'Economic independence achieved',
              },
              {
                name: 'Jyoti',
                story:
                  'Jyoti was trained as a health volunteer. She now conducts health awareness sessions and assists in organizing health camps in her community.',
                impact: 'Community health champion',
              },
            ].map((story, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-6 border border-slate-200">
                <h3 className="text-xl font-bold text-slate-900 mb-4">{story.name}</h3>
                <p className="text-slate-600 mb-6">{story.story}</p>
                <div className="bg-teal-100 text-teal-700 px-4 py-2 rounded inline-block font-semibold text-xs">
                  {story.impact}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Year-on-Year Growth */}
      <section className="bg-white border-t border-slate-200">
        <div className="max-w-5xl mx-auto px-4 py-16 space-y-8">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 text-center">Growth over years</h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { year: '2020', beneficiaries: '100+', villages: '5', programs: '3' },
              { year: '2021', beneficiaries: '200+', villages: '15', programs: '5' },
              { year: '2022', beneficiaries: '350+', villages: '35', programs: '7' },
              { year: '2024', beneficiaries: '500+', villages: '50', programs: '8' },
            ].map((year, idx) => (
              <div key={idx} className="bg-slate-50 rounded-lg p-6 border border-slate-200 text-center">
                <div className="text-3xl font-bold text-teal-700 mb-4">{year.year}</div>
                <div className="space-y-3 text-sm">
                  <p className="text-slate-700">
                    <span className="font-bold">{year.beneficiaries}</span> Beneficiaries
                  </p>
                  <p className="text-slate-700">
                    <span className="font-bold">{year.villages}</span> Villages
                  </p>
                  <p className="text-slate-700">
                    <span className="font-bold">{year.programs}</span> Programs
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-slate-50 border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-4 py-16 text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Be part of this impact</h2>
          <p className="text-lg text-slate-600">Help us reach more women and communities. Every donation creates lasting change.</p>
          <a
            href="/donate"
            className="inline-flex items-center justify-center rounded-lg bg-teal-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:opacity-90"
          >
            Donate now
          </a>
        </div>
      </section>
    </div>
  );
}
