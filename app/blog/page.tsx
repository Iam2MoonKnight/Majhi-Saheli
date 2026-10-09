import { getBlogs } from '@/lib/supabase-functions';
import Link from 'next/link';
import PageHero from '@/components/PageHero';

export default async function BlogPage() {
  const blogs = await getBlogs(false); // Only published blogs

  return (
    <div className="min-h-screen overflow-hidden">
      <PageHero
        crumbs={[{ label: 'Home', href: '/' }, { label: 'Blog' }]}
        eyebrow="Our Blog"
        title="Stories of change"
        subtitle="Read the journeys, field updates, and lessons from communities building change from the ground up."
      />

      <section className="py-16">
        <div className="editorial-section">
          {blogs.length > 0 ? (
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {blogs.map((blog) => (
                <Link
                  key={blog.id}
                  href={`/blog/${blog.slug}`}
                  className="group overflow-hidden rounded-2xl border border-[var(--border-soft)] bg-[var(--surface)] shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                >
                  {blog.featured_image ? (
                    <div className="h-52 overflow-hidden bg-[color:rgb(30_58_95_/_0.1)]">
                      <img
                        src={blog.featured_image}
                        alt={blog.title}
                        className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                  ) : (
                    <div className="flex h-52 items-center justify-center bg-gradient-to-br from-[color:rgb(30_58_95_/_0.13)] to-[color:rgb(232_93_117_/_0.2)]">
                      <span className="text-6xl">📝</span>
                    </div>
                  )}

                  <div className="p-6">
                    <h2 className="mb-3 line-clamp-2 font-heading text-2xl font-bold text-[var(--navy)] transition-colors group-hover:text-[var(--accent)]">
                      {blog.title}
                    </h2>
                    {blog.excerpt && <p className="mb-4 line-clamp-3 text-[var(--text-muted)]">{blog.excerpt}</p>}
                    <div className="flex items-center justify-between text-sm text-[var(--text-muted)]">
                      <span>
                        {new Date(blog.published_at || blog.created_at).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric',
                        })}
                      </span>
                      <span className="font-medium text-[var(--accent)] transition-transform group-hover:translate-x-1">Read more →</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="py-20 text-center">
              <div className="mb-6 text-6xl">📝</div>
              <h3 className="mb-4 font-heading text-3xl font-bold text-[var(--navy)]">No blog posts yet</h3>
              <p className="text-[var(--text-muted)]">Check back soon for stories and updates.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
