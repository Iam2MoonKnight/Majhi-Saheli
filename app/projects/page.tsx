import Image from 'next/image';
import Link from 'next/link';
import PageHero from '@/components/PageHero';
import SectionEyebrow from '@/components/SectionEyebrow';
import Icon from '@/components/icons';
import { PROJECTS } from './project-data';
import { createPageMetadata } from '@/lib/seo';

export const metadata = createPageMetadata(
  'Projects & Field Stories',
  'Explore MSCT projects and field stories from communities across Maharashtra.',
);

export default function ProjectsPage() {
  return (
    <div className="overflow-hidden">
      <PageHero
        crumbs={[{ label: 'Home', href: '/' }, { label: 'Projects & Field Stories' }]}
        eyebrow="Our Work"
        title="Projects & Field Stories"
        subtitle="Real work, real communities, real change across rural Maharashtra."
      />

      <section className="section">
        <div className="container-x space-y-10">
          <div className="mx-auto max-w-3xl text-center">
            <SectionEyebrow className="mb-4">From the Field</SectionEyebrow>
            <h2 className="font-heading text-3xl font-extrabold text-[var(--navy)] md:text-4xl">
              Featured Field Stories
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {PROJECTS.map((project) => (
              <article key={project.slug} className="card card-hover overflow-hidden">
                {project.image ? (
                  <Image
                    src={project.image}
                    alt={project.imageAlt ?? `${project.title} field photo`}
                    width={720}
                    height={420}
                    className="h-44 w-full object-cover"
                  />
                ) : (
                  <div
                    role="img"
                    aria-label={`Placeholder: ${project.title} field photo to be provided`}
                    className="flex h-44 items-center justify-center bg-gray-200 px-6 text-center text-sm text-[var(--text-muted)]"
                  >
                    Placeholder: {project.title} field photo
                  </div>
                )}
                <div className="flex h-full flex-col p-6">
                  <p className="font-mono-eyebrow text-xs font-bold text-[var(--navy)]">{project.year}</p>
                  <h3 className="mt-2 font-heading text-xl font-bold text-[var(--navy)]">{project.title}</h3>
                  <p className="mt-2 flex items-start gap-2 text-xs font-semibold text-[var(--text-muted)]">
                    <Icon name="map-pin" size={14} className="mt-0.5 shrink-0 text-[#e85d75]" />
                    {project.location}
                  </p>
                  <p className="mt-4 flex-1 text-sm leading-relaxed text-[var(--text-muted)]">{project.summary}</p>
                  <Link href={`/projects/${project.slug}`} className="link-coral mt-5">
                    Read Field Story
                    <Icon name="arrow-right" size={14} />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-[var(--navy-dark)]">
        <div className="container-x text-center">
          <h2 className="font-heading text-3xl font-extrabold text-white md:text-4xl">Support Our Work</h2>
          <p className="mx-auto mt-4 max-w-2xl text-white/75">
            Your support helps communities access health, education, livelihood and nutrition initiatives.
          </p>
          <Link href="/donate" className="btn btn-coral mt-8">
            Support Our Work
            <Icon name="arrow-right" size={16} />
          </Link>
        </div>
      </section>
    </div>
  );
}
