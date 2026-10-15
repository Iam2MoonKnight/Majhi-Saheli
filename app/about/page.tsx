import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import PageHero from '@/components/PageHero';
import SectionEyebrow from '@/components/SectionEyebrow';
import StatBlock from '@/components/StatBlock';
import DistrictCard from '@/components/DistrictCard';
import PartnerPill from '@/components/PartnerPill';
import RoadmapCard from '@/components/RoadmapCard';
import Icon, { type IconName } from '@/components/icons';
import { OPERATING_DISTRICTS, PARTNER_GROUPS } from '@/lib/organization';

export const metadata: Metadata = {
  title: 'About Us',
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

const FOCUS_AREAS: { icon: IconName; label: string; href: string }[] = [
  { icon: 'heart-pulse', label: 'Health', href: '/focus-areas/health' },
  { icon: 'briefcase', label: 'Livelihood', href: '/focus-areas/livelihood' },
  { icon: 'graduation-cap', label: 'Education', href: '/focus-areas/education' },
  { icon: 'apple', label: 'Nutrition', href: '/focus-areas/nutrition' },
  { icon: 'users', label: 'Women Empowerment', href: '/focus-areas/women-empowerment' },
  { icon: 'home', label: 'Community Development', href: '/focus-areas/community-development' },
];

const CORE_VALUES: { icon: IconName; title: string; text: string }[] = [
  {
    icon: 'users',
    title: 'Grassroots First',
    text: 'Communities lead. We listen first, build alongside village families, and design every programme around local realities.',
  },
  {
    icon: 'shield-check',
    title: 'Gender Justice',
    text: 'Women and vulnerable groups are partners and decision-makers — not passive beneficiaries of aid.',
  },
  {
    icon: 'check',
    title: 'Accountability',
    text: 'Every rupee is reported, every programme is measured, and every partner sees exactly where the funds went.',
  },
  {
    icon: 'leaf',
    title: 'Sustainability',
    text: 'We build capability that outlives our projects — local institutions strong enough to carry the work forward.',
  },
];

const FIELD_GALLERY = [
  { src: '/field-images/health/health-camp.jpg', alt: 'Health camp in a village' },
  { src: '/field-images/education/education-session.jpg', alt: 'Learning centre session' },
  { src: '/field-images/women/womens-circle.jpg', alt: 'Women leadership workshop' },
  { src: '/field-images/nutrition/nutrition-outreach.jpg', alt: 'Nutrition programme' },
  { src: '/field-images/community/community-gathering.jpeg', alt: 'Community gathering' },
  { src: '/field-images/livelihood/skills-training.png', alt: 'Livelihood training' },
];

const ROADMAP: { index: string; title: string; text: string; icon: IconName }[] = [
  {
    index: '01',
    title: 'Expand Across Geographies',
    text: 'Scale proven programmes to new communities and demographics.',
    icon: 'target',
  },
  {
    index: '02',
    title: 'Saheli Circle Initiative',
    text: 'Train women leaders as support and advocacy anchors.',
    icon: 'sparkles',
  },
  {
    index: '03',
    title: 'Multi-Specialty Hospital Venture',
    text: 'Build affordable, quality health services for rural communities.',
    icon: 'building',
  },
];

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
  [
    'Informed Choices',
    'Everyday people are armed with accurate information, enabling them to make independent and empowered choices regarding their health, education of their children, and sustainable livelihoods.',
  ],
  [
    'Economic Stability',
    'Families enjoy economic stability, savings for the future, and are safeguarded against economic or health-related disasters.',
  ],
  [
    'Unlimited Opportunities for Children',
    'Each child is able to learn in an inspirational environment with opportunities that surpass the limitations put in place before.',
  ],
  [
    'Equality',
    'Women and vulnerable people become active participants in decision-making and participate equally in the community.',
  ],
  [
    'Self-Reliant Communities',
    'Villages operate under their own champions and grassroots organisations, fully capable of solving their own problems.',
  ],
  [
    'Responsive Local Governance',
    'Gram Panchayat and frontline-worker systems are fully capable of meeting the requirements of the villagers.',
  ],
  [
    'Last-Mile Access',
    'Essential government welfare schemes and public services finally bridge the gap, seamlessly reaching the rural families who need them most.',
  ],
  [
    'Protected Ecosystems',
    'Natural resources like water, forests, and soil are safeguarded, helping communities build long-term ecological resilience against a changing climate.',
  ],
];

const milestones: [string, string][] = [
  ['24.08.2023', 'Mazi Saheli Charitable Trust was registered under Registration No. E-0013446(THN).'],
  ['2024-25', 'The annual report records 21,962 lives reached.'],
  ['2025-26', 'The annual report records 32,000+ lives impacted across communities.'],
];

const BOARD_MEMBERS = [
  { name: 'Mr. Avinash Chauhan — Founder', image: '/images/board/avinash-chauhan.jpg' },
  { name: 'Mr. Sunil Desai', image: '/images/board/sunil-desai.jpg' },
  { name: 'Ms. Ruchita Zodge', image: '/images/board/ruchita-zodge.jpg' },
  { name: 'Ms. Jyoti Anantharaman', image: '/images/board/jyoti-anantharaman.jpg' },
  { name: 'Mr. Neeraj Gupta', image: '/images/board/neeraj-gupta.jpg' },
  { name: 'Ms. Trusha Nilesh Chittal', image: '/images/board/trusha-nilesh-chittal.jpg' },
  { name: 'Dr. Damayanti Gupte', image: '/images/board/damayanti-gupte.jpg' },
];

export default function About() {
  return (
    <div className="overflow-hidden">
      <PageHero
        crumbs={[{ label: 'Home', href: '/' }, { label: 'About Us' }]}
        eyebrow="About Mazi Saheli"
        title={
          <>
            Building a stronger, more <span className="text-[#e85d75]">self-reliant</span> rural India
          </>
        }
      >
        <div className="max-w-3xl space-y-4 text-white/80">
          <p className="text-white/80">
            At Mazi Saheli Charitable Trust (MSCT), our goal is straightforward: to help build empowered, resilient, and
            self-reliant rural communities so that families don&rsquo;t have to wait on outside help to live with dignity and
            security.
          </p>
          <p className="text-white/70">
            We&rsquo;ve come to learn that real sustainable rural development isn&rsquo;t about dropping off supplies and
            walking away. It&rsquo;s when village families have the knowledge, the tools, and the confidence to solve their
            own problems, take advantage of new opportunities, and shape their own futures.
          </p>
        </div>
      </PageHero>

      {/* ------------------------------------------------------------- WHO WE ARE */}
      <section className="section">
        <div className="container-x grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <div className="grid grid-cols-2 gap-4">
            <div className="relative h-52 overflow-hidden rounded-2xl border border-[var(--border-soft)] shadow-lg sm:h-64">
              <Image
                src="/field-images/women/women-leadership.jpg"
                alt="MSCT team in the field"
                fill
                sizes="(min-width: 1024px) 25vw, 50vw"
                className="object-cover"
              />
            </div>
            <div className="relative mt-8 h-52 overflow-hidden rounded-2xl border border-[var(--border-soft)] shadow-lg sm:h-64">
              <Image
                src="/field-images/community/village-meeting.jpeg"
                alt="Field operations"
                fill
                sizes="(min-width: 1024px) 25vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>

          <div className="space-y-6">
            <SectionEyebrow>Who We Are</SectionEyebrow>
            <h2 className="font-heading text-3xl font-extrabold text-[var(--navy)] md:text-4xl">
              Empowering communities across <span className="text-[#e85d75]">8 districts</span>
            </h2>
            <p className="leading-relaxed">
              Mazi Saheli Charitable Trust is a grassroots organisation serving high-risk and bridge populations across
              Thane, Palghar, Mumbai, Pune, Raigad, Ratnagiri, Solapur, and Dharashiv.
            </p>
            <p className="leading-relaxed">
              We believe every person deserves access to opportunities and resources for a fulfilling life. Our mission is
              to empower rural communities through essential services in education, healthcare, livelihood, and social
              development.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-2 sm:grid-cols-4">
              {[
                ['32,000+', 'Lives Impacted (2025-26)'],
                ['22', 'Partners'],
                ['8', 'Districts'],
                ['80+', 'Health Camps (2025-26)'],
              ].map(([value, label]) => (
                <div key={label} className="rounded-xl bg-[var(--off-white)] p-4">
                  <p className="stat-value text-2xl text-[var(--navy)]">{value}</p>
                  <p className="mt-1 text-[10px] font-bold uppercase tracking-[0.14em] text-[var(--text-muted)]">
                    {label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------- FOUNDING STORY */}
      <section className="section section-alt">
        <div className="container-x grid grid-cols-1 gap-8 lg:grid-cols-2">
          <div className="space-y-5">
            <SectionEyebrow>Our Founding Story</SectionEyebrow>
            <h2 className="font-heading text-3xl font-extrabold text-[var(--navy)] md:text-4xl">
              Bridging urban and rural development gaps
            </h2>
            <p className="leading-relaxed">
              Mazi Saheli Charitable Trust was registered on 24.08.2023 under Registration No. E-0013446(THN).
              Headquartered in Mumbai, MSCT was founded to bridge urban-rural development gaps across Maharashtra.
            </p>
          </div>
          <div className="card flex flex-col justify-center p-8">
            <p className="text-xs font-bold uppercase tracking-[0.14em] text-[#e85d75]">Registration</p>
            <p className="mt-3 font-heading text-2xl font-bold text-[var(--navy)]">E-0013446(THN)</p>
            <p className="mt-2 text-sm text-[var(--text-muted)]">24.08.2023 | Headquartered in Mumbai</p>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------- FOUNDER'S MESSAGE */}
      <section className="section">
        <div className="container-x grid grid-cols-1 items-center gap-10 lg:grid-cols-[0.7fr_1.3fr]">
          <div className="flex justify-center">
            <Image
              src="/images/board/avinash-chauhan.jpg"
              alt="Mr. Avinash Chauhan, Founder of Mazi Saheli Charitable Trust"
              width={340}
              height={340}
              className="h-64 w-64 rounded-full object-cover"
            />
          </div>
          <div className="space-y-5">
            <SectionEyebrow>Founder&apos;s Message</SectionEyebrow>
            <h2 className="font-heading text-3xl font-extrabold text-[var(--navy)] md:text-4xl">Let&apos;s build a better tomorrow, together</h2>
            <blockquote className="space-y-4 leading-relaxed text-[var(--text-muted)]">
              <p>
                At MSCT, we believe that real change begins with empowerment, not charity. Our mission is to walk
                alongside communities-equipping them with knowledge, resources, and opportunities so they can shape
                their own future with dignity and confidence.
              </p>
              <p>Development is not given, it is grown.</p>
              <p>
                Whether it&apos;s better health, quality education, sustainable livelihoods, or care for our environment -
                our effort are rooted in listening, learning, and working together.
              </p>
              <p>
                We believe in partnership, not dependency. By building trust and encouraging participation, we create
                solutions that are local, lasting, and led by the people themselves.
              </p>
              <p>
                This year, with the support of our partners, volunteers, and well-wishers, we crossed a significant
                milestone-impacting 32,000+ lives across communities.
              </p>
              <p>
                Thank you for being a part. Together, let&apos;s continue to build a more inclusive, sustainable, and
                compassionate tomorrow.
              </p>
            </blockquote>
            <p className="font-heading text-lg font-bold text-[var(--navy)]">
              Mr. Avinash Chauhan <span className="block text-sm font-medium text-[var(--text-muted)]">Founder, Mazi Saheli Charitable Trust</span>
            </p>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------- VISION & MISSION */}
      <section className="section section-alt">
        <div className="container-x space-y-10">
          <div className="mx-auto max-w-3xl text-center">
            <SectionEyebrow className="mb-4">Our Vision &amp; Mission</SectionEyebrow>
            <h2 className="font-heading text-3xl font-extrabold text-[var(--navy)] md:text-4xl">
              A self-reliant rural India
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            <div className="rounded-2xl bg-[var(--navy)] p-8 text-white md:p-10">
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-[color:rgb(232_93_117_/_0.18)] text-[#e85d75]">
                <Icon name="target" size={24} />
              </span>
              <h3 className="mt-6 font-heading text-2xl font-bold text-white">Our Vision</h3>
              <p className="mt-4 text-sm leading-relaxed text-white/75">
                Rural communities flourishing with resilience, dignity, and opportunity-where every individual,
                especially women, children, and marginalized groups, have equitable access to quality education,
                healthcare, sustainable livelihoods, and a healthy environment to lead a fulfilling and empowered life.
              </p>
            </div>

            <div className="rounded-2xl bg-[var(--navy)] p-8 text-white md:p-10">
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-[color:rgb(232_93_117_/_0.18)] text-[#e85d75]">
                <Icon name="heart" size={24} />
              </span>
              <h3 className="mt-6 font-heading text-2xl font-bold text-white">Our Mission</h3>
              <p className="mt-4 text-sm leading-relaxed text-white/75">
                To empower rural communities by providing access to quality education, holistic healthcare, and resources
                that promote women&apos;s empowerment and economic independence. We design need-based programs, build local
                capacity, and collaborate with partners to create sustainable solutions that uplift lives and strengthen
                communities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------- FOCUS AREAS */}
      <section className="section">
        <div className="container-x space-y-10">
          <div className="mx-auto max-w-3xl text-center">
            <SectionEyebrow className="mb-4">Area of Interest</SectionEyebrow>
            <h2 className="font-heading text-3xl font-extrabold text-[var(--navy)] md:text-4xl">
              Six focus areas, one connected mission
            </h2>
            <p className="mt-4">
              The four threads of our pathway run through everything we do. On the ground, that work shows up across six
              focus areas, each with its own programmes, participants, and outcomes.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
            {FOCUS_AREAS.map((area) => (
              <Link
                key={area.label}
                href={area.href}
                className="card card-hover flex flex-col items-center gap-3 p-5 text-center"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[color:rgb(232_93_117_/_0.1)] text-[#e85d75]">
                  <Icon name={area.icon} size={20} />
                </span>
                <span className="text-xs font-bold leading-snug text-[var(--navy)]">{area.label}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------- DISTRICTS */}
      <section className="section bg-[var(--navy)]">
        <div className="container-x space-y-12">
          <div className="mx-auto max-w-3xl text-center">
            <SectionEyebrow className="mb-4">Operating Across Districts</SectionEyebrow>
            <h2 className="font-heading text-3xl font-extrabold text-white md:text-4xl">
              Rooted in the <span className="text-[#e85d75]">community</span>
            </h2>
            <p className="mt-4 text-white/70">
              Our ground-level presence is led by local coordinators who understand language, context, and trust-building in
              every district.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
            {OPERATING_DISTRICTS.map((district) => (
              <DistrictCard key={district} name={district} />
            ))}
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------- WHOLE PICTURE */}
      <section className="section">
        <div className="container-x space-y-10">
          <div className="max-w-3xl space-y-4">
            <SectionEyebrow>The Whole Picture</SectionEyebrow>
            <h2 className="font-heading text-3xl font-extrabold text-[var(--navy)] md:text-4xl">
              Why we look at the whole picture
            </h2>
            <p>
              When you spend time on the ground in rural villages, one thing becomes obvious: life&rsquo;s hardships are
              deeply tangled together. You cannot fix one problem without touching the others:
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {wholePicture.map(([icon, title, text]) => (
              <div key={title} className="card card-hover p-7">
                <p className="text-3xl" aria-hidden>
                  {icon}
                </p>
                <h3 className="mt-4 font-heading text-lg font-bold text-[var(--navy)]">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed">{text}</p>
              </div>
            ))}
          </div>

          <p className="rounded-2xl border-l-4 border-[#e85d75] bg-[var(--off-white)] p-6 text-sm">
            Because these struggles feed on one another, our social welfare programs address them together — not as isolated
            checkboxes.
          </p>
        </div>
      </section>

      {/* ------------------------------------------------------------- HOW WE WORK */}
      <section className="section section-alt">
        <div className="container-x space-y-10">
          <div className="max-w-3xl space-y-4">
            <SectionEyebrow>How We Work</SectionEyebrow>
            <h2 className="font-heading text-3xl font-extrabold text-[var(--navy)] md:text-4xl">
              Real grassroots capability building
            </h2>
            <p>
              Charity can offer temporary relief, but it rarely breaks the cycle of dependency. We focus on institutional
              strengthening and grassroots leadership so that local communities can stand tall on their own feet. Across
              every community outreach initiative, MSCT walks alongside villages through four practical steps:
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {howWeWork.map(([num, title, text]) => (
              <div key={title} className="card card-hover p-7">
                <p className="font-mono-eyebrow text-xs font-bold text-[#e85d75]">{num}</p>
                <h3 className="mt-3 font-heading text-lg font-extrabold tracking-wide text-[var(--navy)]">{title}</h3>
                <p className="mt-3 text-sm leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------- AID → EMPOWERMENT */}
      <section className="section">
        <div className="container-x grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-center">
          <div className="space-y-5">
            <SectionEyebrow>Our Direction</SectionEyebrow>
            <h2 className="font-heading text-3xl font-extrabold text-[var(--navy)] md:text-4xl">
              From temporary aid to lasting community empowerment
            </h2>
            <p>
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
                className="card flex flex-col gap-2 p-5 md:flex-row md:items-center md:gap-4"
              >
                <span className="text-sm text-[var(--text-muted)] line-through decoration-[#e85d75]">{from}</span>
                <Icon name="arrow-right" size={18} className="text-[#e85d75]" />
                <span className="text-sm font-bold text-[var(--navy)]">{to}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------- PATHWAY */}
      <section className="section section-alt">
        <div className="container-x space-y-10">
          <div className="max-w-3xl space-y-4">
            <SectionEyebrow>Our Pathway</SectionEyebrow>
            <h2 className="font-heading text-3xl font-extrabold text-[var(--navy)] md:text-4xl">
              Our pathway to rural community empowerment
            </h2>
            <p>
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
                className="grid grid-cols-1 gap-6 rounded-2xl border border-[var(--border-soft)] bg-white p-6 md:grid-cols-[auto_1fr] md:p-8"
              >
                <div className="flex items-start gap-4 md:w-64 md:flex-col">
                  <span className="text-4xl" aria-hidden>
                    {area.icon}
                  </span>
                  <div>
                    <p className="font-mono-eyebrow text-xs font-bold text-[#e85d75]">0{idx + 1}</p>
                    <h3 className="mt-1.5 font-heading text-xl font-bold text-[var(--navy)]">{area.title}</h3>
                  </div>
                </div>

                <div className="space-y-4">
                  <p className="text-sm leading-relaxed">{area.intro}</p>
                  <div className="space-y-3">
                    {area.points.map(([pointTitle, pointText]) => (
                      <div key={pointTitle} className="rounded-xl bg-[var(--off-white)] p-4">
                        <p className="text-sm font-bold text-[var(--navy)]">{pointTitle}</p>
                        <p className="mt-1 text-sm leading-relaxed">{pointText}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------- STORY / TIMELINE */}
      <section className="section">
        <div className="container-x space-y-12">
          <div className="mx-auto max-w-3xl text-center">
            <SectionEyebrow className="mb-4">Our Story So Far</SectionEyebrow>
            <h2 className="font-heading text-3xl font-extrabold text-[var(--navy)] md:text-4xl">Milestones</h2>
          </div>

          <div className="relative mx-auto max-w-4xl">
            <div className="absolute left-2 top-0 h-full w-px bg-[var(--border-soft)] md:left-1/2" />
            {milestones.map(([year, text], idx) => (
              <div
                key={year}
                className={`relative mb-6 md:flex ${idx % 2 === 0 ? 'md:justify-end' : 'md:justify-start'}`}
              >
                <div className="card ml-10 p-6 md:ml-0 md:w-[calc(50%-2.5rem)]">
                  <p className="font-mono-eyebrow text-xs font-bold text-[#e85d75]">{year}</p>
                  <p className="mt-2 text-sm leading-relaxed">{text}</p>
                </div>
                <span className="absolute left-2 top-7 h-3.5 w-3.5 -translate-x-1/2 rounded-full border-2 border-white bg-[#e85d75] shadow md:left-1/2" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------- FROM THE FIELD */}
      <section className="section section-alt">
        <div className="container-x space-y-10">
          <div className="mx-auto max-w-3xl text-center">
            <SectionEyebrow className="mb-4">From the Field</SectionEyebrow>
            <h2 className="font-heading text-3xl font-extrabold text-[var(--navy)] md:text-4xl">
              Moments from our programmes
            </h2>
          </div>

          <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
            {FIELD_GALLERY.map((shot) => (
              <div
                key={shot.src}
                className="group relative h-40 overflow-hidden rounded-2xl border border-[var(--border-soft)] md:h-52"
              >
                <Image
                  src={shot.src}
                  alt={shot.alt}
                  fill
                  sizes="(min-width: 768px) 33vw, 50vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link href="/gallery" className="link-coral justify-center">
              View Full Gallery
              <Icon name="arrow-right" size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------- CORE VALUES */}
      <section className="section">
        <div className="container-x space-y-10">
          <div className="mx-auto max-w-3xl text-center">
            <SectionEyebrow className="mb-4">What Guides Us</SectionEyebrow>
            <h2 className="font-heading text-3xl font-extrabold text-[var(--navy)] md:text-4xl">Our Core Values</h2>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {CORE_VALUES.map((value) => (
              <div key={value.title} className="card card-hover p-7">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-[color:rgb(232_93_117_/_0.1)] text-[#e85d75]">
                  <Icon name={value.icon} size={22} />
                </span>
                <h3 className="mt-5 font-heading text-lg font-bold text-[var(--navy)]">{value.title}</h3>
                <p className="mt-2 text-sm leading-relaxed">{value.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------- BOARD MEMBERS */}
      <section className="section section-alt">
        <div className="container-x space-y-10">
          <div className="mx-auto max-w-3xl text-center">
            <SectionEyebrow className="mb-4">Governance</SectionEyebrow>
            <h2 className="font-heading text-3xl font-extrabold text-[var(--navy)] md:text-4xl">Board Members</h2>
          </div>
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-4">
            {BOARD_MEMBERS.map((member) => (
              <article key={member.name} className="card flex flex-col items-center p-6 text-center">
                <Image
                  src={member.image}
                  alt={`Portrait of ${member.name.replace(' — Founder', '')}`}
                  width={96}
                  height={96}
                  className="h-24 w-24 rounded-full object-cover"
                />
                <h3 className="mt-4 font-heading text-base font-bold text-[var(--navy)]">{member.name}</h3>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------- REGISTRATION & GOVERNANCE */}
      <section className="section">
        <div className="container-x space-y-8">
          <div className="mx-auto max-w-3xl text-center">
            <SectionEyebrow className="mb-4">Registration &amp; Governance</SectionEyebrow>
            <h2 className="font-heading text-3xl font-extrabold text-[var(--navy)] md:text-4xl">
              Organisation details
            </h2>
          </div>
          <dl className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {[
              ['Registration No.', 'E-0013446(THN)'],
              ['Date of Registration', '24.08.2023'],
              [
                'Head Office',
                'B/307 Girija Bhavan CHS, Narmada Nagar, Cabin Road, Bhayander East, Thane – 401105',
              ],
              ['Field Office', 'At Post Savarpada Village, Taluka Jawhar, District Palghar – 401603'],
              ['Target Group', 'Tribal communities, women, children, rural communities, orphans'],
              ['Registrations', '80G and FCRA registered'],
            ].map(([label, value]) => (
              <div key={label} className="card p-6">
                <dt className="text-xs font-bold uppercase tracking-[0.14em] text-[#e85d75]">{label}</dt>
                <dd className="mt-2 text-sm leading-relaxed text-[var(--navy)]">{value}</dd>
              </div>
            ))}
            <div className="card p-6 md:col-span-2">
              <dt className="text-xs font-bold uppercase tracking-[0.14em] text-[#e85d75]">Operating Districts</dt>
              <dd className="mt-2 text-sm leading-relaxed text-[var(--navy)]">{OPERATING_DISTRICTS.join(', ')}</dd>
            </div>
          </dl>
        </div>
      </section>

      {/* ------------------------------------------------------------- COMMUNITY-LED */}
      <section className="section section-alt">
        <div className="container-x space-y-10">
          <div className="max-w-3xl space-y-4">
            <SectionEyebrow>Community-Led Approach</SectionEyebrow>
            <h2 className="font-heading text-3xl font-extrabold text-[var(--navy)] md:text-4xl">
              Beneficiaries to partners
            </h2>
            <p>
              At Mazi Saheli Charitable Trust, rural families are not regarded as beneficiaries but rather the creators and
              rightful owners of their development journey. Real sustainable development in rural areas starts from
              listening. Our role is to sit down with communities, understand their daily realities, identify the gaps, and
              build practical solutions side-by-side. To do this, we bring everyone to the table: village families, dedicated
              frontline workers, local government institutions, technical experts, and forward-thinking CSR partnerships.
            </p>
          </div>

          <blockquote className="rounded-2xl bg-[var(--navy)] p-8 text-center md:p-12">
            <Icon name="quote" size={32} className="mx-auto text-[#e85d75]" />
            <p className="mt-4 font-heading text-2xl font-extrabold text-white md:text-3xl">
              &ldquo;Change happens when we walk together.&rdquo;
            </p>
            <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-white/75">
              This simple mantra drives everything we do. We believe the most meaningful impact occurs when communities gain
              the knowledge and confidence to make a difference — when local institutions are equipped to respond, public
              services are easily accessible, and outside resources are used to champion grassroots empowerment rather than
              replace local capabilities.
            </p>
          </blockquote>

          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            <div className="card p-8">
              <h3 className="font-heading text-xl font-bold text-[var(--navy)]">
                Strengthening local systems, not building parallel ones
              </h3>
              <p className="mt-4 text-sm leading-relaxed">
                The foundation of rural life is already there — rooted in Gram Panchayats, village schools, local health
                providers, self-help collectives, and grassroots leadership. Rather than setting up temporary, parallel
                structures that collapse the moment funding stops, our goal is institutional strengthening: improving
                coordination, upgrading local skills, and bridging the gap so families can easily access the public resources
                already meant for them.
              </p>
              <div className="mt-5 rounded-xl bg-[var(--off-white)] p-5">
                <p className="text-sm font-bold text-[var(--navy)]">Project Lohashakti in action</p>
                <p className="mt-1.5 text-sm leading-relaxed">
                  Instead of creating separate clinics, we work hand-in-hand with Gram Panchayats, ASHA workers, Anganwadi
                  Workers (AWWs), local teachers, Primary Health Centres (PHCs), Community Health Centres (CHCs), and
                  Adolescent Reproductive &amp; Sexual Health (ARSH) clinics. Backed by local youth champions and smart
                  digital monitoring, we transform short-term project activities into permanent, community-owned public
                  health habits.
                </p>
              </div>
            </div>

            <div className="card p-8">
              <h3 className="font-heading text-xl font-bold text-[var(--navy)]">
                Cultivating local leadership and grassroots agency
              </h3>
              <p className="mt-4 text-sm leading-relaxed">
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
                  <div key={idx} className="flex gap-3 rounded-xl bg-[var(--off-white)] p-4 text-sm">
                    <Icon name="arrow-right" size={16} className="mt-0.5 shrink-0 text-[#e85d75]" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------- SELF-RELIANT VISION */}
      <section className="section">
        <div className="container-x space-y-10">
          <div className="max-w-3xl space-y-4">
            <SectionEyebrow>The Vision</SectionEyebrow>
            <h2 className="font-heading text-3xl font-extrabold text-[var(--navy)] md:text-4xl">
              What a self-reliant rural India looks like
            </h2>
            <p>
              When we look to the future, we don&rsquo;t just see projects completed — we see villages thriving on their own
              strength. We are working toward a rural India where:
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {selfReliantVision.map(([title, text]) => (
              <div key={title} className="card p-5">
                <p className="font-bold text-[var(--navy)]">{title}</p>
                <p className="mt-1.5 text-sm leading-relaxed">{text}</p>
              </div>
            ))}
          </div>

          <div className="card p-8">
            <SectionEyebrow>Our Commitment</SectionEyebrow>
            <h3 className="mt-3 font-heading text-2xl font-bold text-[var(--navy)]">
              The ultimate goal: lasting, dignified self-reliance
            </h3>
            <p className="mt-3 leading-relaxed">
              We envision a day when communities are entirely capable of driving their own continued progress — standing
              strong, dignified, and completely free from perpetual dependence on outside assistance. Because of this, we
              seek CSR partnerships and collaborative funding that go far beyond sponsoring isolated, short-term projects.
              We warmly welcome institutional partners, donors, and philanthropists who share our belief in community-led
              development, ready to invest deeply in strengthening the local people, grassroots institutions, and public
              systems that make rural community empowerment a permanent reality.
            </p>
            <p className="mt-6 font-heading text-lg font-bold text-[var(--navy)]">
              Walking with communities. Building capability. Enabling self-reliance. Creating a better tomorrow.
            </p>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------- IMPACT */}
      <section className="section bg-[var(--navy)]">
        <div className="container-x space-y-12">
          <div className="mx-auto max-w-3xl text-center">
            <SectionEyebrow className="mb-4">Impact</SectionEyebrow>
            <h2 className="font-heading text-3xl font-extrabold text-white md:text-4xl">
              Impact That <span className="text-[#e85d75]">Speaks</span> for Itself
            </h2>
          </div>

          <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
            {[
              ['224', 'Medical Camps'],
              ['21K+', 'Lives Touched'],
              ['152', 'Villages Reached'],
              ['223', 'Expert Sessions'],
            ].map(([value, label]) => (
              <StatBlock key={label} value={value} label={label} variant="navy" />
            ))}
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------- PARTNERS */}
      <section className="section section-alt">
        <div className="container-x space-y-10">
          <div className="mx-auto max-w-3xl text-center">
            <SectionEyebrow className="mb-4">Partnerships</SectionEyebrow>
            <h2 className="font-heading text-3xl font-extrabold text-[var(--navy)] md:text-4xl">
              Our Strategic Partners
            </h2>
          </div>

          <div className="space-y-8">
            {PARTNER_GROUPS.map((group) => (
              <div key={group.title}>
                <h3 className="mb-4 text-center text-sm font-bold uppercase tracking-[0.14em] text-[var(--text-muted)]">
                  {group.title}
                </h3>
                <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
                  {group.partners.map((partner) => (
                    <PartnerPill key={partner.slug} name={partner.name} slug={partner.slug} />
                  ))}
                </div>
              </div>
            ))}
          </div>
          <p className="text-center text-sm">
            The 2025-26 annual report records 22 partners, including four dedicated CSR partners.
          </p>
        </div>
      </section>

      {/* ------------------------------------------------------------- ROADMAP */}
      <section className="section">
        <div className="container-x space-y-12">
          <div className="mx-auto max-w-3xl text-center">
            <SectionEyebrow className="mb-4">Future Plans</SectionEyebrow>
            <h2 className="font-heading text-3xl font-extrabold text-[var(--navy)] md:text-4xl">Our Roadmap Ahead</h2>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {ROADMAP.map((item) => (
              <RoadmapCard key={item.title} index={item.index} title={item.title} text={item.text} icon={item.icon} />
            ))}
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------- CTA */}
      <section className="section bg-[var(--navy-dark)]">
        <div className="container-x text-center">
          <SectionEyebrow className="mb-4">Join The Mission</SectionEyebrow>
          <h2 className="font-heading text-3xl font-extrabold text-white md:text-4xl">
            Help us reach <span className="text-[#e85d75]">every community</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-white/75">
            Every contribution helps us reach more villages with education support, health services, and skills training.
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
