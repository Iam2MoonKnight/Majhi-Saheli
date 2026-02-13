import StatCard from '@/components/StatCard';

export default function Impact() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-rose-50 to-pink-50 py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">Our Impact</h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Transforming lives and communities through our dedicated programs and initiatives
          </p>
        </div>
      </section>

      {/* Key Metrics */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Key Metrics</h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <StatCard icon="👩" number="500+" label="Women Trained" description="Direct beneficiaries of our programs" />
            <StatCard icon="👧" number="250+" label="Girls Educated" description="Enrolled in school/education" />
            <StatCard icon="🏘️" number="50+" label="Villages" description="Communities reached annually" />
            <StatCard icon="💊" number="1000+" label="Health Services" description="Medical check-ups conducted" />
          </div>
        </div>
      </section>

      {/* Program-wise Impact */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Program-wise Impact</h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Education */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-bold text-blue-600 mb-6 flex items-center gap-2">
                <span className="text-3xl">📚</span> Education Program
              </h3>
              <div className="space-y-4">
                <div>
                  <p className="text-gray-700 font-semibold">Girls Enrolled in School</p>
                  <div className="text-3xl font-bold text-blue-600">250+</div>
                </div>
                <div>
                  <p className="text-gray-700 font-semibold">Adult Literacy Programs</p>
                  <div className="text-3xl font-bold text-blue-600">150+ women</div>
                </div>
                <div>
                  <p className="text-gray-700 font-semibold">School Retention Rate</p>
                  <div className="text-3xl font-bold text-blue-600">95%</div>
                </div>
                <p className="text-gray-600 mt-6">
                  Through our education programs, we've provided scholarships, learning materials, and teacher training
                  to ensure girls and women have access to quality education.
                </p>
              </div>
            </div>

            {/* Health */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-bold text-green-600 mb-6 flex items-center gap-2">
                <span className="text-3xl">💊</span> Health Program
              </h3>
              <div className="space-y-4">
                <div>
                  <p className="text-gray-700 font-semibold">Health Camps Conducted</p>
                  <div className="text-3xl font-bold text-green-600">50+ camps</div>
                </div>
                <div>
                  <p className="text-gray-700 font-semibold">Women Benefited</p>
                  <div className="text-3xl font-bold text-green-600">1000+</div>
                </div>
                <div>
                  <p className="text-gray-700 font-semibold">Awareness Sessions</p>
                  <div className="text-3xl font-bold text-green-600">100+</div>
                </div>
                <p className="text-gray-600 mt-6">
                  Our health initiatives have provided medical services, maternal care, and health awareness to remote
                  villages, improving community health outcomes significantly.
                </p>
              </div>
            </div>

            {/* Vocational Training */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-bold text-yellow-600 mb-6 flex items-center gap-2">
                <span className="text-3xl">🎓</span> Vocational Training
              </h3>
              <div className="space-y-4">
                <div>
                  <p className="text-gray-700 font-semibold">Women Trained</p>
                  <div className="text-3xl font-bold text-yellow-600">200+ women</div>
                </div>
                <div>
                  <p className="text-gray-700 font-semibold">Skill Categories</p>
                  <div className="text-3xl font-bold text-yellow-600">8+ skills</div>
                </div>
                <div>
                  <p className="text-gray-700 font-semibold">Employment Rate</p>
                  <div className="text-3xl font-bold text-yellow-600">75%</div>
                </div>
                <p className="text-gray-600 mt-6">
                  Women have learned skills in tailoring, handicrafts, digital literacy, and agriculture, with many
                  now earning independent incomes.
                </p>
              </div>
            </div>

            {/* Community Empowerment */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-bold text-purple-600 mb-6 flex items-center gap-2">
                <span className="text-3xl">🤝</span> Community Empowerment
              </h3>
              <div className="space-y-4">
                <div>
                  <p className="text-gray-700 font-semibold">Communities Organized</p>
                  <div className="text-3xl font-bold text-purple-600">50+ villages</div>
                </div>
                <div>
                  <p className="text-gray-700 font-semibold">Women Leaders Trained</p>
                  <div className="text-3xl font-bold text-purple-600">100+ leaders</div>
                </div>
                <div>
                  <p className="text-gray-700 font-semibold">Community Initiatives</p>
                  <div className="text-3xl font-bold text-purple-606">25+ projects</div>
                </div>
                <p className="text-gray-600 mt-6">
                  We've empowered women to take leadership roles in their communities and initiate development
                  projects that benefit their families and villages.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Success Stories</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
              <div key={idx} className="bg-gradient-to-br from-rose-50 to-pink-50 rounded-lg p-8 border-l-4 border-rose-500">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{story.name}</h3>
                <p className="text-gray-700 mb-6">{story.story}</p>
                <div className="bg-rose-100 text-rose-700 px-4 py-2 rounded inline-block font-semibold text-sm">
                  {story.impact}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Year-on-Year Growth */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Growth Over Years</h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { year: '2020', beneficiaries: '100+', villages: '5', programs: '3' },
              { year: '2021', beneficiaries: '200+', villages: '15', programs: '5' },
              { year: '2022', beneficiaries: '350+', villages: '35', programs: '7' },
              { year: '2024', beneficiaries: '500+', villages: '50', programs: '8' },
            ].map((year, idx) => (
              <div key={idx} className="bg-white rounded-lg p-8 shadow-md text-center">
                <div className="text-4xl font-bold text-rose-600 mb-4">{year.year}</div>
                <div className="space-y-3 text-sm">
                  <p className="text-gray-700">
                    <span className="font-bold">{year.beneficiaries}</span> Beneficiaries
                  </p>
                  <p className="text-gray-700">
                    <span className="font-bold">{year.villages}</span> Villages
                  </p>
                  <p className="text-gray-700">
                    <span className="font-bold">{year.programs}</span> Programs
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-gradient-to-r from-rose-500 to-pink-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Be Part of This Impact</h2>
          <p className="text-lg mb-8">Help us reach more women and communities. Every donation creates lasting change.</p>
          <button className="px-8 py-3 bg-white text-rose-600 font-bold rounded-lg hover:bg-gray-100 transition">
            Donate Now
          </button>
        </div>
      </section>
    </div>
  );
}
