import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'About Mazi Saheli Charitable Trust | Building a Stronger, More Self-Reliant Rural India',
  description:
    'Mazi Saheli Charitable Trust (MSCT) builds empowered, resilient, self-reliant rural communities across Maharashtra through community-led development in health, education, livelihood, and environmental sustainability.',
  keywords: [
    'Mazi Saheli Charitable Trust',
    'MSCT',
    'rural development NGO',
    'women empowerment',
    'health camps',
    'financial literacy',
    'sustainable livelihoods',
    'Maharashtra',
  ],
};

const wholePicture = [
  [
    '🥗',
    'Child Malnutrition & Primary Education',
    "When a young child is undernourished, staying focused in class is an uphill battle quietly closing the door on foundational learning.",
  ],
  [
    '🏥',
    'Rural Healthcare & Financial Debt',
    'When a parent falls sick without access to basic preventive healthcare, one emergency clinic visit can push the entire family into high-interest debt.',
  ],
  [
    '🌾',
    'Farmer Support & Livelihood Security',
    "When smallholder farmers don't have access to financial literacy, fair crop pricing, or climate-smart techniques, their hard work rarely translates into stable earnings.",
  ],
  [
    '🌍',
    'Environmental Vulnerability & Climate Resilience',
    'When local groundwater runs dry or topsoil washes away, the most vulnerable families bear the immediate brunt of drought and crop failure.',
  ],
];

const howWeWork = [
  [
    '01',
    'ENABLE',
    'We sit down with women, youth, and farmers to share practical knowledge and build hands-on skills through targeted skill-building workshops — giving people the confidence to say, "We can handle this."',
  ],
  [
    '02',
    'CONNECT',
    'Help often exists, but the road to get it is broken. We bridge that gap by linking rural households directly to government welfare schemes, fair banking, local clinics, schools, and honest markets.',
  ],
  [
    '03',
    'STRENGTHEN',
    'Real change needs local heroes. We invest in capacity building for frontline workers, Gram Panchayats, teachers, and local self-help groups so the people living in the village have the skills and backing to lead the way.',
  ],
  [
    '04',
    'SUSTAIN',
    "We don't measure success by how long we stay, but by how well things run after our projects wrap up. By creating active village committees and shared community know-how, the progress keeps growing long after we step back.",
  ],
];

const pathway = [
  {
    icon: '🏥',
    title: 'Health and Well-Being',
    intro:
      'A healthy home is where everything begins. When a parent falls sick or a child is in pain, work stops, schooling pauses, and family savings vanish overnight. We work to bridge the healthcare divide for vulnerable and underserved rural populations:',
    points: [
      [
        'Care That Reaches the Last Mile',
        "We organize regular community health camps, specialized eye screenings, cataract surgeries, and early breast cancer detection so treatable health issues don't turn into lifelong setbacks.",
      ],
      [
        "Open Conversations on Women's Health",
        'Through dedicated menstrual health and hygiene sessions, we dismantle longstanding stigma, creating safe spaces where adolescent girls and women receive essential knowledge, privacy, and hygiene supplies.',
      ],
      [
        'Strengthening Public Systems, Not Replacing Them',
        'We work hand-in-hand with local frontline staff, health centers, and community volunteers to nurture everyday health-seeking behaviour — ensuring families know their rights and how to navigate the public healthcare system long after our team leaves.',
      ],
    ],
  },
  {
    icon: '📚',
    title: 'Education and Human Development',
    intro:
      'Education does so much more than teach reading and writing — it helps a child look beyond the boundaries of their village and imagine an entirely different future. To help rural children not just enroll, but stay curious and finish school, MSCT invests directly in the places where they learn:',
    points: [
      [
        'Inspiring School Environments',
        'We help transform under-resourced schools by setting up modern computer labs, active libraries, and interactive learning spaces where curiosity can thrive.',
      ],
      [
        'Confidence Beyond the Classroom',
        'We partner with local teachers and parents to keep kids in school, build practical digital skills, and give the next generation the confidence to participate fully in modern society.',
      ],
    ],
  },
  {
    icon: '💼',
    title: 'Livelihood Enhancement & Economic Self-Reliance',
    intro:
      'True freedom starts when a family can cover their own expenses, save for emergencies, and stop living in constant fear of the next poor harvest. We look at sustainable livelihood programs as the foundation for lasting personal freedom:',
    points: [
      [
        'Practical Financial Literacy',
        'We break down banking, budgeting, and safe savings so families can manage their hard-earned money and steer clear of predatory local money lenders.',
      ],
      [
        'Skills for the Real World',
        'We offer hands-on vocational and employability training for rural youth and women, helping them turn emerging local opportunities into stable, dignified incomes.',
      ],
      [
        'Standing With Smallholder Farmers',
        'Through targeted farmer support initiatives, we share sustainable, climate-smart farming techniques and bridge farmers directly to fair market linkages, ensuring their relentless labour translates into fair pay.',
      ],
    ],
  },
  {
    icon: '🌿',
    title: 'Environmental Sustainability & Ecological Resilience',
    intro:
      'In rural communities, life is tied directly to the earth. If the groundwater drops or the soil erodes, families feel it immediately at the dinner table. You cannot lift a community out of poverty while ignoring the land they rely on. MSCT embeds ecological balance into every program:',
    points: [
      [
        'Protecting Water and Land',
        'We work with villages to set up practical rainwater harvesting systems and soil conservation measures, helping aquifers recharge so villages stay resilient through harsh summers.',
      ],
      [
        'Nature-Positive Incomes',
        'Through household kitchen gardens that feed families fresh produce and community-led eco tourism, we demonstrate that protecting nature and earning a steady livelihood can go hand-in-hand.',
      ],
    ],
  },
];

const selfReliantVision = [
  ['Informed Choices', 'Everyday people are armed with accurate information, enabling them to make independent and empowered choices regarding their health, education of their children, and sustainable livelihoods.'],
  ['Economic Stability', 'Families enjoy economic stability, savings for the future, and are safeguarded against economic or health-related disasters.'],
  ['Unlimited Opportunities for Children', 'Each child is able to learn in an inspirational environment with opportunities that surpass the limitations put in place before.'],
  ['Equality', 'Women and vulnerable people become active participants in decision-making and participate equally in the community.'],
  ['Self-Reliant Communities', 'Villages operate under their own champions and grassroots organisations, fully capable of solving their own problems.'],
  ['Responsive Local Governance', 'Gram Panchayat and frontline-worker systems are fully capable of meeting the requirements of the villagers.'],
  ['Last-Mile Access', 'Essential government welfare schemes and public services finally bridge the gap, seamlessly reaching the rural families who need them most.'],
  ['Protected Ecosystems', 'Natural resources like water, forests, and soil are safeguarded, helping communities build long-term ecological resilience against a changing climate.'],
];

export default function About() {
  return (
    <div className="min-h-screen overflow-hidden">
      <section className="relative border-b border-[var(--border-soft)] bg-[color:rgb(255_255_255_/_0.55)] py-16">
        <div className="editorial-section space-y-6 text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-[color:rgb(30_58_95_/_0.12)] px-4 py-2">
            <span className="h-2 w-2 rounded-full bg-[var(--blue)]" />
            <span className="section-eyebrow text-[var(--navy)]">About Mazi Saheli</span>
          </div>
          <h1 className="font-heading text-4xl font-bold text-[var(--navy)] md:text-6xl">
            Building a stronger, more self-reliant rural India
          </h1>
          <p className="mx-auto max-w-3xl text-lg text-[var(--text-muted)]">
            At Mazi Saheli Charitable Trust (MSCT), our goal is straightforward: to help build empowered, resilient, and
            self-reliant rural communities so that families don&rsquo;t have to wait on outside help to live with dignity and
            security.
          </p>
          <p className="mx-auto max-w-3xl text-[var(--text-muted)]">
            We&rsquo;ve come to learn that real sustainable rural development isn&rsquo;t about dropping off supplies and
            walking away. It&rsquo;s when village families have the knowledge, the tools, and the confidence to solve their
            own problems, take advantage of new opportunities, and shape their own futures.
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
                Mazi Saheli Charitable Trust is a grassroots organisation serving high-risk and bridge populations across
                Thane, Palghar, Ratnagiri, Raigad, Satara, and Osmanabad.
              </p>
              <p>
                We believe every person deserves access to opportunities and resources for a fulfilling life. Our mission is
                to empower rural communities through essential services in education, healthcare, livelihood, and social
                development.
              </p>
            </div>
            <div className="mt-8 grid grid-cols-2 gap-4">
              {[
                ['21,962', 'Lives Touched'],
                ['14+', 'Collaborative Partners'],
                ['6', 'Districts'],
                ['224', 'Expert Sessions'],
              ].map(([num, label]) => (
                <div
                  key={label}
                  className="rounded-xl border border-[var(--border-soft)] bg-[color:rgb(30_58_95_/_0.05)] p-4 text-center"
                >
                  <p className="font-heading text-3xl font-bold text-[var(--navy)]">{num}</p>
                  <p className="text-xs font-semibold uppercase tracking-wide text-[var(--text-muted)]">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-[var(--border-soft)] bg-[color:rgb(30_58_95_/_0.06)] py-16">
        <div className="editorial-section space-y-8">
          <div className="max-w-3xl space-y-4">
            <p className="section-eyebrow">Our Vision</p>
            <h2 className="font-heading text-3xl font-bold text-[var(--navy)] md:text-4xl">
              A self-reliant rural India
            </h2>
            <p className="text-[var(--text-muted)]">
              We believe lasting poverty alleviation happens from the inside out. We are working toward a rural landscape
              where:
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {[
              'Everyday families earn steady incomes, master essential modern skills, and feel secure against unexpected life emergencies.',
              'Villages thrive through genuine community-led development, where trusted local leaders and institutions work together for the good of everyone.',
            ].map((item, idx) => (
              <div
                key={idx}
                className="flex gap-4 rounded-2xl border border-[var(--border-soft)] bg-[var(--surface)] p-6"
              >
                <span className="font-heading text-3xl font-bold text-[var(--accent)]">0{idx + 1}</span>
                <p className="text-sm text-[var(--text-muted)]">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="editorial-section space-y-8">
          <div className="max-w-3xl space-y-4">
            <p className="section-eyebrow">The Whole Picture</p>
            <h2 className="font-heading text-3xl font-bold text-[var(--navy)] md:text-4xl">
              Why we look at the whole picture
            </h2>
            <p className="text-[var(--text-muted)]">
              When you spend time on the ground in rural villages, one thing becomes obvious: life&rsquo;s hardships are
              deeply tangled together. You cannot fix one problem without touching the others:
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {wholePicture.map(([icon, title, text]) => (
              <div key={title} className="rounded-2xl border border-[var(--border-soft)] bg-[var(--surface)] p-6">
                <p className="text-3xl" aria-hidden>{icon}</p>
                <h3 className="mt-3 font-heading text-xl font-semibold text-[var(--navy)]">{title}</h3>
                <p className="mt-2 text-sm text-[var(--text-muted)]">{text}</p>
              </div>
            ))}
          </div>
          <p className="rounded-2xl border border-[var(--border-soft)] bg-[color:rgb(42_123_111_/_0.08)] p-6 text-[var(--text-muted)]">
            Because these struggles feed on one another, our social welfare programs address them together — not as isolated
            checkboxes.
          </p>
        </div>
      </section>

      <section className="border-y border-[var(--border-soft)] bg-[color:rgb(30_58_95_/_0.06)] py-16">
        <div className="editorial-section space-y-8">
          <div className="max-w-3xl space-y-4">
            <p className="section-eyebrow">How We Work</p>
            <h2 className="font-heading text-3xl font-bold text-[var(--navy)] md:text-4xl">
              Real grassroots capability building
            </h2>
            <p className="text-[var(--text-muted)]">
              Charity can offer temporary relief, but it rarely breaks the cycle of dependency. We focus on institutional
              strengthening and grassroots leadership so that local communities can stand tall on their own feet. Across
              every community outreach initiative, MSCT walks alongside villages through four practical steps:
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {howWeWork.map(([num, title, text]) => (
              <div key={title} className="rounded-2xl border border-[var(--border-soft)] bg-[var(--surface)] p-6">
                <p className="font-mono-eyebrow text-xs text-[var(--accent)]">{num}</p>
                <h3 className="mt-2 font-heading text-xl font-bold tracking-wide text-[var(--navy)]">{title}</h3>
                <p className="mt-3 text-sm text-[var(--text-muted)]">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="editorial-section grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-center">
          <div className="space-y-5">
            <p className="section-eyebrow">Our Direction</p>
            <h2 className="font-heading text-3xl font-bold text-[var(--navy)] md:text-4xl">
              From temporary aid to lasting community empowerment
            </h2>
            <p className="text-[var(--text-muted)]">
              Real dignity isn&rsquo;t about receiving hand-outs; it&rsquo;s about having a voice and a choice. At Mazi
              Saheli Charitable Trust, that means moving:
            </p>
          </div>
          <div className="space-y-4">
            {[
              ['From basic charity drop-offs', 'to active grassroots empowerment'],
              ['From short-term fixes', 'to lifelong skills and community confidence'],
              ['From aid dependency', 'to real financial freedom and sustainable livelihoods'],
            ].map(([from, to]) => (
              <div
                key={from}
                className="flex flex-col gap-2 rounded-2xl border border-[var(--border-soft)] bg-[var(--surface)] p-5 md:flex-row md:items-center md:gap-4"
              >
                <span className="text-sm text-[var(--text-muted)] line-through decoration-[var(--accent)]">{from}</span>
                <span className="font-heading text-lg text-[var(--accent)]">→</span>
                <span className="text-sm font-semibold text-[var(--navy)]">{to}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-[var(--border-soft)] bg-[color:rgb(30_58_95_/_0.06)] py-16">
        <div className="editorial-section space-y-10">
          <div className="max-w-3xl space-y-4">
            <p className="section-eyebrow">Our Pathway</p>
            <h2 className="font-heading text-3xl font-bold text-[var(--navy)] md:text-4xl">
              Our pathway to rural community empowerment
            </h2>
            <p className="text-[var(--text-muted)]">
              Real change rarely fits into a neat template. When you spend time in a village, you quickly realize that you
              can&rsquo;t fix healthcare without talking about income, and you can&rsquo;t talk about farming without looking
              at the soil and water. Everything is connected. At MSCT, we focus our everyday, ground-level work across four
              interconnected areas to help families build lives of security and dignity:
            </p>
          </div>
          <div className="space-y-6">
            {pathway.map((area, idx) => (
              <div
                key={area.title}
                className="grid grid-cols-1 gap-6 rounded-3xl border border-[var(--border-soft)] bg-[var(--surface)] p-6 md:grid-cols-[auto_1fr] md:p-8"
              >
                <div className="flex items-start gap-4 md:w-64 md:flex-col">
                  <span className="text-4xl" aria-hidden>{area.icon}</span>
                  <div>
                    <p className="font-mono-eyebrow text-xs text-[var(--accent)]">0{idx + 1}</p>
                    <h3 className="mt-1 font-heading text-2xl font-bold text-[var(--navy)]">{area.title}</h3>
                  </div>
                </div>
                <div className="space-y-4">
                  <p className="text-[var(--text-muted)]">{area.intro}</p>
                  <div className="space-y-3">
                    {area.points.map(([pointTitle, pointText]) => (
                      <div key={pointTitle} className="rounded-xl bg-[color:rgb(30_58_95_/_0.05)] p-4">
                        <p className="text-sm font-semibold text-[var(--navy)]">{pointTitle}</p>
                        <p className="mt-1 text-sm text-[var(--text-muted)]">{pointText}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="editorial-section space-y-8 text-center">
          <div className="space-y-4">
            <p className="section-eyebrow">Explore the Work</p>
            <h2 className="font-heading text-3xl font-bold text-[var(--navy)] md:text-4xl">
              Six focus areas, one connected mission
            </h2>
            <p className="mx-auto max-w-3xl text-[var(--text-muted)]">
              The four threads above run through everything we do. On the ground, that work shows up across six focus areas,
              each with its own programmes, participants, and outcomes.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
            {[
              ['🏥', 'Health', '/focus-areas/health'],
              ['💼', 'Livelihood', '/focus-areas/livelihood'],
              ['📚', 'Education', '/focus-areas/education'],
              ['🥗', 'Nutrition', '/focus-areas/nutrition'],
              ['👩', 'Women Empowerment', '/focus-areas/women-empowerment'],
              ['🏘️', 'Community Development', '/focus-areas/community-development'],
            ].map(([icon, label, href]) => (
              <Link
                key={label}
                href={href}
                className="flex items-center gap-3 rounded-2xl border border-[var(--border-soft)] bg-[var(--surface)] px-5 py-4 text-left transition hover:shadow-lg"
              >
                <span className="text-2xl" aria-hidden>{icon}</span>
                <span className="font-semibold text-[var(--navy)]">{label}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="editorial-section space-y-10">
          <div className="max-w-3xl space-y-4">
            <p className="section-eyebrow">Community-Led Approach</p>
            <h2 className="font-heading text-3xl font-bold text-[var(--navy)] md:text-4xl">
              Beneficiaries to partners
            </h2>
            <p className="text-[var(--text-muted)]">
              At Mazi Saheli Charitable Trust, rural families are not regarded as beneficiaries but rather the creators and
              rightful owners of their development journey. Real sustainable development in rural areas starts from
              listening. Our role is to sit down with communities, understand their daily realities, identify the gaps, and
              build practical solutions side-by-side. To do this, we bring everyone to the table: village families, dedicated
              frontline workers, local government institutions, technical experts, and forward-thinking CSR partnerships.
            </p>
          </div>

          <blockquote className="rounded-3xl bg-gradient-to-r from-[var(--navy)] to-[var(--teal)] p-8 text-center text-white md:p-10">
            <p className="font-heading text-2xl font-bold md:text-3xl">&ldquo;Change happens when we walk together.&rdquo;</p>
            <p className="mx-auto mt-3 max-w-2xl text-white/85">
              This simple mantra drives everything we do. We believe the most meaningful impact occurs when communities gain
              the knowledge and confidence to make a difference — when local institutions are equipped to respond, public
              services are easily accessible, and outside resources are used to champion grassroots empowerment rather than
              replace local capabilities.
            </p>
          </blockquote>

          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            <div className="rounded-2xl border border-[var(--border-soft)] bg-[var(--surface)] p-8">
              <h3 className="font-heading text-2xl font-bold text-[var(--navy)]">
                Strengthening local systems, not building parallel ones
              </h3>
              <p className="mt-4 text-[var(--text-muted)]">
                The foundation of rural life is already there — rooted in Gram Panchayats, village schools, local health
                providers, self-help collectives, and grassroots leadership. Rather than setting up temporary, parallel
                structures that collapse the moment funding stops, our goal is institutional strengthening: improving
                coordination, upgrading local skills, and bridging the gap so families can easily access the public resources
                already meant for them.
              </p>
              <div className="mt-5 rounded-xl bg-[color:rgb(42_123_111_/_0.08)] p-5">
                <p className="text-sm font-semibold text-[var(--navy)]">Project Lohashakti in action</p>
                <p className="mt-1 text-sm text-[var(--text-muted)]">
                  Instead of creating separate clinics, we work hand-in-hand with Gram Panchayats, ASHA workers, Anganwadi
                  Workers (AWWs), local teachers, Primary Health Centres (PHCs), Community Health Centres (CHCs), and
                  Adolescent Reproductive &amp; Sexual Health (ARSH) clinics. Backed by local youth champions and smart
                  digital monitoring, we transform short-term project activities into permanent, community-owned public
                  health habits.
                </p>
              </div>
            </div>

            <div className="rounded-2xl border border-[var(--border-soft)] bg-[var(--surface)] p-8">
              <h3 className="font-heading text-2xl font-bold text-[var(--navy)]">
                Cultivating local leadership and grassroots agency
              </h3>
              <p className="mt-4 text-[var(--text-muted)]">
                Real rural community empowerment ultimately depends on the people who stay behind to carry the torch long
                after we step back. That&rsquo;s why MSCT places deep focus on discovering everyday local champions, mentoring
                frontline workers, encouraging open community dialogue, and helping local institutions take proud ownership
                of their own development priorities.
              </p>
              <div className="mt-5 space-y-3">
                {[
                  'External support must always be used to build genuine local capability.',
                  'Local capability naturally creates deep, proud community ownership.',
                  'Community ownership is the only thing that guarantees deep, lasting change.',
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-3 rounded-xl bg-[color:rgb(30_58_95_/_0.05)] p-4 text-sm text-[var(--text-muted)]">
                    <span className="text-[var(--accent)]">→</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-[var(--border-soft)] bg-[color:rgb(30_58_95_/_0.06)] py-16">
        <div className="editorial-section space-y-8">
          <div className="max-w-3xl space-y-4">
            <p className="section-eyebrow">The Vision</p>
            <h2 className="font-heading text-3xl font-bold text-[var(--navy)] md:text-4xl">
              What a self-reliant rural India looks like
            </h2>
            <p className="text-[var(--text-muted)]">
              When we look to the future, we don&rsquo;t just see projects completed — we see villages thriving on their own
              strength. We are working toward a rural India where:
            </p>
          </div>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {selfReliantVision.map(([title, text]) => (
              <div key={title} className="rounded-2xl border border-[var(--border-soft)] bg-[var(--surface)] p-5">
                <p className="font-semibold text-[var(--navy)]">{title}</p>
                <p className="mt-1 text-sm text-[var(--text-muted)]">{text}</p>
              </div>
            ))}
          </div>
          <div className="rounded-3xl border border-[var(--border-soft)] bg-[var(--surface)] p-6 md:p-8">
            <p className="section-eyebrow">Our Commitment</p>
            <h3 className="mt-2 font-heading text-2xl font-bold text-[var(--navy)]">
              The ultimate goal: lasting, dignified self-reliance
            </h3>
            <p className="mt-3 text-[var(--text-muted)]">
              We envision a day when communities are entirely capable of driving their own continued progress — standing
              strong, dignified, and completely free from perpetual dependence on outside assistance. Because of this, we
              seek CSR partnerships and collaborative funding that go far beyond sponsoring isolated, short-term projects.
              We warmly welcome institutional partners, donors, and philanthropists who share our belief in community-led
              development, ready to invest deeply in strengthening the local people, grassroots institutions, and public
              systems that make rural community empowerment a permanent reality.
            </p>
            <p className="mt-5 font-heading text-lg text-[var(--navy)]">
              Walking with communities. Building capability. Enabling self-reliance. Creating a better tomorrow.
            </p>
          </div>
        </div>
      </section>

      <section className="border-y border-[var(--border-soft)] bg-[color:rgb(30_58_95_/_0.06)] py-16">
        <div className="editorial-section grid grid-cols-1 gap-10 lg:grid-cols-2">
          <div className="space-y-4">
            <p className="section-eyebrow">Operating Across Districts</p>
            <h2 className="font-heading text-3xl font-bold text-[var(--navy)] md:text-4xl">Rooted in the community</h2>
            <p className="text-[var(--text-muted)]">
              Our ground-level presence is led by local coordinators who understand language, context, and trust-building in
              every district.
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
                <div
                  key={partner}
                  className="rounded-lg border border-[var(--border-soft)] bg-[color:rgb(30_58_95_/_0.04)] px-3 py-2 text-center text-xs font-semibold text-[var(--navy)]"
                >
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
