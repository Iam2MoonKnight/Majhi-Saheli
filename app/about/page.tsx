export default function About() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-rose-50 to-pink-50 py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">About Saheli</h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Empowering rural women through education, health, and vocational training since our inception.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-8">Our Story</h2>
          <div className="prose prose-lg text-gray-700 space-y-6">
            <p>
              Saheli was founded with a simple vision: to transform the lives of rural women through education,
              healthcare, and skills development. We began our journey in a small village where we saw the tremendous
              potential of rural women being held back by lack of opportunities and access to resources.
            </p>

            <p>
              Today, Saheli has grown into a comprehensive NGO working across multiple villages, touching the lives of
              hundreds of women and their families. We remain committed to our core mission of empowering rural women
              to become agents of change in their communities.
            </p>

            <p>
              Our work is guided by the belief that when we invest in women, we invest in the future of entire
              communities. Every program we run, every woman we train, and every life we touch is a step towards a more
              equitable and just society.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Mission */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-bold text-rose-600 mb-4">Our Mission</h3>
              <p className="text-gray-700 leading-relaxed">
                To empower rural women through quality education, accessible healthcare, and skill development
                programs, enabling them to achieve economic independence, health security, and social dignity.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-bold text-pink-600 mb-4">Our Vision</h3>
              <p className="text-gray-700 leading-relaxed">
                A world where rural women and girls are educated, healthy, economically empowered, and respected as
                equal contributors to society and development of their communities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Our Core Values</h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                icon: '❤️',
                title: 'Compassion',
                desc: 'We deeply care about the wellbeing of the women we serve',
              },
              {
                icon: '💪',
                title: 'Empowerment',
                desc: 'We believe in building strength and agency in every woman',
              },
              {
                icon: '🤝',
                title: 'Equality',
                desc: 'We advocate for equal rights and opportunities for all',
              },
              {
                icon: '🌱',
                title: 'Sustainability',
                desc: 'We create lasting change that benefits future generations',
              },
            ].map((value, idx) => (
              <div key={idx} className="text-center">
                <div className="text-5xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Our Team</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'Priya Sharma',
                role: 'Founder & Executive Director',
                bio: 'Social entrepreneur with 15+ years of experience in rural development',
              },
              {
                name: 'Geeta Patel',
                role: 'Program Director',
                bio: 'Dedicated to creating sustainable educational programs for underserved communities',
              },
              {
                name: 'Anjali Desai',
                role: 'Health & Wellness Coordinator',
                bio: 'Healthcare professional committed to bringing quality health services to rural areas',
              },
            ].map((member, idx) => (
              <div key={idx} className="bg-white rounded-lg shadow-md p-8 text-center">
                <div className="w-24 h-24 bg-gradient-to-br from-rose-400 to-pink-500 rounded-full mx-auto mb-4 flex items-center justify-center text-4xl text-white">
                  {member.name.charAt(0)}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                <p className="text-rose-600 font-semibold mb-3">{member.role}</p>
                <p className="text-gray-600 text-sm">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Why Support Saheli?</h2>

          <div className="space-y-6">
            {[
              {
                title: 'Direct Impact',
                desc: '100% of funds go directly to programs and beneficiaries',
              },
              {
                title: 'Proven Results',
                desc: 'Our programs have helped 500+ women achieve economic empowerment',
              },
              {
                title: 'Transparency',
                desc: 'We maintain complete transparency in our operations and finances',
              },
              {
                title: 'Sustainable Change',
                desc: 'We focus on long-term solutions that create lasting impact',
              },
            ].map((item, idx) => (
              <div key={idx} className="flex gap-4">
                <div className="text-3xl text-rose-600 flex-shrink-0">✓</div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-700">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
