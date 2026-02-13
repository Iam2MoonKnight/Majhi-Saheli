import { getBlogs } from '@/lib/supabase-functions';
import Link from 'next/link';

export default async function BlogPage() {
  const blogs = await getBlogs(false); // Only published blogs

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-violet-600 to-purple-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 rounded-full mb-6">
              <span className="text-sm font-semibold tracking-wide">OUR BLOG</span>
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">Stories of Change</h1>
            <p className="text-xl text-violet-100 max-w-2xl mx-auto">
              Read about the inspiring journeys, impactful programs, and transformative work happening in rural communities
            </p>
          </div>
        </div>
      </div>

      {/* Blog Grid */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        {blogs.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogs.map((blog) => (
              <Link
                key={blog.id}
                href={`/blog/${blog.slug}`}
                className="group bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                {blog.featured_image ? (
                  <div className="h-48 overflow-hidden bg-gray-200">
                    <img
                      src={blog.featured_image}
                      alt={blog.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                ) : (
                  <div className="h-48 bg-gradient-to-br from-violet-100 to-purple-100 flex items-center justify-center">
                    <span className="text-6xl">📝</span>
                  </div>
                )}
                
                <div className="p-6">
                  <h2 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-violet-600 transition-colors line-clamp-2">
                    {blog.title}
                  </h2>
                  {blog.excerpt && (
                    <p className="text-gray-600 mb-4 line-clamp-3">{blog.excerpt}</p>
                  )}
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <span>{new Date(blog.published_at || blog.created_at).toLocaleDateString('en-US', { 
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric' 
                    })}</span>
                    <span className="text-violet-600 font-medium group-hover:translate-x-1 transition-transform">
                      Read more →
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <div className="text-6xl mb-6">📝</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">No blog posts yet</h3>
            <p className="text-gray-600">Check back soon for inspiring stories and updates!</p>
          </div>
        )}
      </div>
    </div>
  );
}
