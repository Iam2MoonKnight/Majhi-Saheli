import { getBlogBySlug, getBlogs } from '@/lib/supabase-functions';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { createPageMetadata } from '@/lib/seo';

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return createPageMetadata(
    `Blog: ${slug.replaceAll('-', ' ')}`,
    'Read this story from Mazi Saheli Charitable Trust.',
  );
}

export async function generateStaticParams() {
  const blogs = await getBlogs(false);
  return blogs.map((blog) => ({
    slug: blog.slug,
  }));
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const blog = await getBlogBySlug(slug);

  if (!blog || blog.status !== 'published') {
    notFound();
  }

  return (
    <div className="min-h-screen overflow-hidden">
      <section className="border-b border-[var(--border-soft)] bg-[var(--off-white)]">
        <div className="editorial-section max-w-4xl py-12">
          <Link href="/blog" className="mb-6 inline-block text-sm font-medium text-[var(--blue)] hover:text-[var(--navy)]">
            ← Back to Blog
          </Link>

          <h1 className="mb-6 font-heading text-4xl font-bold leading-tight text-[var(--navy)] lg:text-6xl">
            {blog.title}
          </h1>

          <div className="flex items-center gap-4 text-[var(--text-muted)]">
            <span>
              📅{' '}
              {new Date(blog.published_at || blog.created_at).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </span>
          </div>
        </div>
      </section>

      {blog.featured_image && (
        <div className="editorial-section max-w-4xl py-8">
          <div className="overflow-hidden rounded-2xl border border-[var(--border-soft)] shadow-lg">
            <Image
              src={blog.featured_image}
              alt={blog.title}
              width={1200}
              height={675}
              unoptimized
              className="w-full h-auto"
            />
          </div>
        </div>
      )}

      <article className="editorial-section max-w-4xl py-12">
        <div className="rounded-2xl border border-[var(--border-soft)] bg-[var(--surface)] p-8 shadow-sm lg:p-12">
          <div className="prose prose-lg max-w-none">
            {blog.content.split('\n').map((paragraph: string, index: number) => {
              if (paragraph.trim() === '') return null;

              if (paragraph.startsWith('# ')) {
                return <h2 key={index} className="mt-8 mb-4 font-heading text-3xl font-bold text-[var(--navy)]">{paragraph.slice(2)}</h2>;
              }
              if (paragraph.startsWith('## ')) {
                return <h3 key={index} className="mt-6 mb-3 font-heading text-2xl font-bold text-[var(--navy)]">{paragraph.slice(3)}</h3>;
              }
              if (paragraph.startsWith('### ')) {
                return <h4 key={index} className="mt-4 mb-2 font-heading text-xl font-bold text-[var(--navy)]">{paragraph.slice(4)}</h4>;
              }

              return (
                <p key={index} className="mb-4 leading-relaxed text-[var(--text-muted)]">
                  {paragraph}
                </p>
              );
            })}
          </div>
        </div>

        <div className="mt-12 rounded-2xl border border-[var(--border-soft)] bg-gradient-to-r from-[var(--navy)] to-[var(--teal)] p-8 text-white">
          <h3 className="mb-4 font-heading text-3xl font-bold">Support our mission</h3>
          <p className="mb-6 text-white/85">
            Every contribution helps us empower more women and transform more communities. Join us in making a difference.
          </p>
          <Link
            href="/donate"
            className="inline-flex items-center rounded-full bg-[var(--accent)] px-8 py-3 font-semibold text-white transition hover:bg-[var(--accent-warm)]"
          >
            Donate Now
            <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </article>
    </div>
  );
}
