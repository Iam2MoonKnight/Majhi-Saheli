import Link from 'next/link';
import Image from 'next/image';

export default function EducationPage() {
  return (
    <div className="overflow-hidden">
      {/* Header */}
      <section className="bg-gradient-to-br from-[var(--navy)] via-[var(--blue)] to-[var(--teal)] py-16">
        <div className="editorial-section">
          <Link href="/" className="mb-4 inline-flex items-center text-white/80 hover:text-white transition-colors">
            <span className="mr-2">←</span> Back to Home
          </Link>
          <h1 className="font-heading text-5xl font-bold text-white mt-4">📚 Education & Skill Building</h1>
          <p className="mt-4 text-lg text-white/85 max-w-2xl">
            Fostering learning and skill development across rural communities.
          </p>
        </div>
      </section>

      {/* Overview */}
      <section className="py-16">
        <div className="editorial-section space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h2 className="font-heading text-4xl font-bold text-[var(--navy)]">Our Impact</h2>
              <div className="space-y-4 text-[var(--text-muted)]">
                <p>
                  Our education initiatives create pathways for learning and skill development, building stronger communities through knowledge and capability.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="mr-3 text-[var(--accent)] font-bold">•</span>
                    <span><strong>Dapoli Learning Centre</strong> served 30 children daily in 2024-25</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 text-[var(--accent)] font-bold">•</span>
                    <span><strong>Gyaan ka Sagar libraries</strong> catered to 88 students in 2023-24</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 text-[var(--accent)] font-bold">•</span>
                    <span><strong>Skill-Building Programs</strong> for youth and adults</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 text-[var(--accent)] font-bold">•</span>
                    <span><strong>Digital Literacy</strong> and technology access</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden border border-[var(--border-soft)]">
              <Image
                src="/field-images/education/digital-learning.jpg"
                alt="Education program"
                width={1200}
                height={900}
                className="w-full h-96 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Activities */}
      <section className="py-16 bg-[var(--off-white)] border-y border-[var(--border-soft)]">
        <div className="editorial-section space-y-8">
          <h2 className="font-heading text-4xl font-bold text-[var(--navy)] text-center">Key Activities</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: 'Learning Centers',
                description: 'Community learning spaces with structured educational programs',
              },
              {
                title: 'Digital Access',
                description: 'Computer labs providing technology education and internet access',
              },
              {
                title: 'Libraries',
                description: 'Resource centers with books, materials, and learning resources',
              },
              {
                title: 'Skill Programs',
                description: 'Training in vocational and life skills for youth employment',
              },
              {
                title: 'Teacher Training',
                description: 'Capacity building for educators in rural schools',
              },
              {
                title: 'Scholarship Support',
                description: 'Enabling education access for economically disadvantaged students',
              },
            ].map((activity, idx) => (
              <div key={idx} className="rounded-2xl border border-[var(--border-soft)] bg-[var(--surface)] p-6 hover:shadow-lg transition-shadow">
                <h3 className="font-heading text-xl font-bold text-[var(--navy)] mb-3">{activity.title}</h3>
                <p className="text-sm text-[var(--text-muted)]">{activity.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Content Placeholder */}
      <section className="py-16">
        <div className="editorial-section space-y-8">
          <h2 className="font-heading text-4xl font-bold text-[var(--navy)]">Detailed Content</h2>
          <ul className="list-inside list-disc space-y-3 text-sm leading-relaxed text-[var(--text-muted)]">
            <li>Digital classrooms, computer labs and rural school infrastructure repair.</li>
            <li>Baala painting, and toys and game box distribution to Anganwadi centres.</li>
            <li>The Dapoli learning centre served 30 children daily in 2024-25.</li>
            <li>Gyaan ka Sagar libraries in Barhanpur and two neighbouring Palghar villages catered to 88 students in 2023-24.</li>
          </ul>
          <div className="overflow-hidden rounded-2xl border border-[var(--border-soft)]">
            <Image
              src="/field-images/education/digital-learning.jpg"
              alt="Students learning in a rural computer classroom"
              width={1600}
              height={900}
              className="min-h-48 w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Navigation to other areas */}
      <section className="py-16 bg-[var(--off-white)] border-t border-[var(--border-soft)]">
        <div className="editorial-section space-y-8">
          <h2 className="font-heading text-2xl font-bold text-[var(--navy)] text-center">Explore Other Focus Areas</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
              { title: 'Health', url: '/focus-areas/health', icon: '🏥' },
              { title: 'Livelihood', url: '/focus-areas/livelihood', icon: '💼' },
              { title: 'Nutrition', url: '/focus-areas/nutrition', icon: '🥗' },
              { title: 'Women Empowerment', url: '/focus-areas/women-empowerment', icon: '👩' },
              { title: 'Community Development', url: '/focus-areas/community-development', icon: '🏘️' },
            ].map((area) => (
              <Link key={area.url} href={area.url} className="rounded-lg border border-[var(--border-soft)] bg-[var(--surface)] p-4 text-center hover:shadow-md transition-shadow">
                <p className="text-3xl mb-2">{area.icon}</p>
                <p className="font-semibold text-[var(--navy)] text-sm">{area.title}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
