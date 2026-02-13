import { getBlogBySlug, getBlogs } from '@/lib/supabase-functions';
import Link from 'next/link';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  const blogs = await getBlogs(false);
  return blogs.map((blog) => ({
    slug: blog.slug,
  }));
}

export default async function BlogPost({ params }: { params: { slug: string } }) {
  const blog = await getBlogBySlug(params.slug);

  if (!blog || blog.status !== 'published') {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-6 py-12">
          <Link href="/blog" className="text-violet-600 hover:text-violet-700 font-medium mb-6 inline-block">
            ← Back to Blog
          </Link>
          
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            {blog.title}
          </h1>
          
          <div className="flex items-center gap-4 text-gray-600">
            <span>📅 {new Date(blog.published_at || blog.created_at).toLocaleDateString('en-US', { 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric' 
            })}</span>
          </div>
        </div>
      </div>

      {/* Featured Image */}
      {blog.featured_image && (
        <div className="max-w-4xl mx-auto px-6 py-8">
          <div className="rounded-xl overflow-hidden shadow-lg">
            <img
              src={blog.featured_image}
              alt={blog.title}
              className="w-full h-auto"
            />
          </div>
        </div>
      )}

      {/* Content */}
      <article className="max-w-4xl mx-auto px-6 py-12">
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 lg:p-12">
          <div className="prose prose-lg max-w-none">
            {blog.content.split('\n').map((paragraph: string, index: number) => {
              if (paragraph.trim() === '') return null;
              
              // Simple markdown-like formatting
              if (paragraph.startsWith('# ')) {
                return <h2 key={index} className="text-3xl font-bold text-gray-900 mt-8 mb-4">{paragraph.slice(2)}</h2>;
              }
              if (paragraph.startsWith('## ')) {
                return <h3 key={index} className="text-2xl font-bold text-gray-900 mt-6 mb-3">{paragraph.slice(3)}</h3>;
              }
              if (paragraph.startsWith('### ')) {
                return <h4 key={index} className="text-xl font-bold text-gray-900 mt-4 mb-2">{paragraph.slice(4)}</h4>;
              }
              
              return (
                <p key={index} className="text-gray-700 leading-relaxed mb-4">
                  {paragraph}
                </p>
              );
            })}
          </div>
        </div>

        {/* Share Section */}
        <div className="mt-12 p-8 bg-gradient-to-r from-violet-50 to-purple-50 rounded-xl border-2 border-violet-200">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Support Our Mission</h3>
          <p className="text-gray-700 mb-6">
            Every contribution helps us empower more women and transform more communities. Join us in making a difference.
          </p>
          <Link
            href="/donate"
            className="inline-flex items-center px-8 py-4 bg-violet-600 text-white font-semibold rounded-lg hover:bg-violet-700 transition shadow-lg"
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
