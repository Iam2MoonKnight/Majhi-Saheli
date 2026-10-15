import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import PageHero from '@/components/PageHero';
import Icon from '@/components/icons';
import { PROJECTS } from '../project-data';

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return PROJECTS.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = PROJECTS.find((item) => item.slug === slug);

  return {
    title: project ? `${project.title} | Projects & Field Stories` : 'Project not found',
    description: project?.summary,
  };
}

export default async function ProjectStoryPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = PROJECTS.find((item) => item.slug === slug);

  if (!project) {
    notFound();
  }

  const details = [
    ['Location', project.location],
    ['Problem', project.problem],
    ['Intervention', project.intervention],
    ['Partners', project.partners],
    ['Results', project.results],
  ];

  return (
    <div className="overflow-hidden">
      <PageHero
        crumbs={[
          { label: 'Home', href: '/' },
          { label: 'Projects', href: '/projects' },
          { label: project.title },
        ]}
        eyebrow={`Field Story | ${project.year}`}
        title={project.title}
        subtitle={project.summary}
      />

      <section className="section">
        <div className="container-x grid grid-cols-1 gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          {project.image ? (
            <Image
              src={project.image}
              alt={project.imageAlt ?? `${project.title} field photo`}
              width={960}
              height={720}
              className="h-full min-h-64 w-full rounded-2xl object-cover"
            />
          ) : (
            <div
              role="img"
              aria-label={`Placeholder: ${project.title} field photo to be provided`}
              className="flex min-h-64 items-center justify-center rounded-2xl bg-gray-200 p-6 text-center text-sm text-[var(--text-muted)]"
            >
              Placeholder: {project.title} field photo to be provided
            </div>
          )}

          <div className="space-y-6">
            {details.map(([label, value]) => (
              <section key={label} className="border-b border-[var(--border-soft)] pb-5 last:border-0">
                <h2 className="font-heading text-xl font-bold text-[var(--navy)]">{label}</h2>
                <p className="mt-2 text-sm leading-relaxed text-[var(--text-muted)]">{value}</p>
              </section>
            ))}
            <Link href="/projects" className="link-coral">
              <Icon name="arrow-left" size={14} />
              Back to Projects
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
