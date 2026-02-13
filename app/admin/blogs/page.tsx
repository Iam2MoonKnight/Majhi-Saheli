'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { supabase } from '@/lib/supabase';
import { getUserProfile, getBlogs, deleteBlog, updateBlog } from '@/lib/supabase-functions';
import Link from 'next/link';

export default function BlogsManagement() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [blogs, setBlogs] = useState<any[]>([]);
  const [filter, setFilter] = useState<'all' | 'published' | 'draft'>('all');

  useEffect(() => {
    loadBlogs();
  }, [router]);

  const loadBlogs = async () => {
    const { data: { session } } = await supabase.auth.getSession();
    
    if (!session?.user) {
      router.push('/login');
      return;
    }

    const profile = await getUserProfile(session.user.id);
    
    if (profile?.role !== 'admin') {
      router.push('/dashboard');
      return;
    }

    const blogsData = await getBlogs(true);
    setBlogs(blogsData);
    setLoading(false);
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this blog?')) return;

    try {
      await deleteBlog(id);
      setBlogs(blogs.filter(b => b.id !== id));
    } catch (error) {
      alert('Error deleting blog');
    }
  };

  const handleToggleStatus = async (blog: any) => {
    try {
      const newStatus = blog.status === 'published' ? 'draft' : 'published';
      const updates: any = { status: newStatus };
      
      if (newStatus === 'published' && !blog.published_at) {
        updates.published_at = new Date().toISOString();
      }

      await updateBlog(blog.id, updates);
      await loadBlogs();
    } catch (error) {
      alert('Error updating blog status');
    }
  };

  const filteredBlogs = blogs.filter(blog => {
    if (filter === 'all') return true;
    return blog.status === filter;
  });

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="w-16 h-16 bg-gradient-to-br from-violet-500 to-purple-600 rounded-full mx-auto mb-4 animate-pulse"></div>
          <p className="text-gray-600">Loading blogs...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            <div>
              <Link href="/admin" className="text-violet-600 hover:text-violet-700 text-sm font-medium mb-2 inline-block">
                ← Back to Dashboard
              </Link>
              <h1 className="text-3xl font-bold text-gray-900">Blog Management</h1>
            </div>
            <Link
              href="/admin/blogs/new"
              className="px-6 py-3 bg-violet-600 text-white font-semibold rounded-lg hover:bg-violet-700 transition shadow-lg"
            >
              + Create New Blog
            </Link>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Filters */}
        <div className="bg-white rounded-lg shadow-sm p-4 mb-6 border border-gray-100">
          <div className="flex items-center gap-4">
            <span className="text-sm font-medium text-gray-700">Filter:</span>
            <button
              onClick={() => setFilter('all')}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition ${
                filter === 'all' ? 'bg-violet-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              All ({blogs.length})
            </button>
            <button
              onClick={() => setFilter('published')}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition ${
                filter === 'published' ? 'bg-green-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Published ({blogs.filter(b => b.status === 'published').length})
            </button>
            <button
              onClick={() => setFilter('draft')}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition ${
                filter === 'draft' ? 'bg-yellow-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Drafts ({blogs.filter(b => b.status === 'draft').length})
            </button>
          </div>
        </div>

        {/* Blogs List */}
        {filteredBlogs.length > 0 ? (
          <div className="grid grid-cols-1 gap-6">
            {filteredBlogs.map((blog) => (
              <div key={blog.id} className="bg-white rounded-lg shadow-sm border border-gray-100 p-6 hover:shadow-md transition">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <h2 className="text-xl font-bold text-gray-900">{blog.title}</h2>
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        blog.status === 'published' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'
                      }`}>
                        {blog.status}
                      </span>
                    </div>
                    <p className="text-gray-600 mb-4 line-clamp-2">{blog.excerpt}</p>
                    <div className="flex items-center gap-4 text-sm text-gray-500">
                      <span>📅 {new Date(blog.created_at).toLocaleDateString()}</span>
                      {blog.published_at && (
                        <span>🌐 Published: {new Date(blog.published_at).toLocaleDateString()}</span>
                      )}
                      <span>🔗 /{blog.slug}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 ml-4">
                    <Link
                      href={`/admin/blogs/edit/${blog.id}`}
                      className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition text-sm font-medium"
                    >
                      Edit
                    </Link>
                    <button
                      onClick={() => handleToggleStatus(blog)}
                      className={`px-4 py-2 rounded-lg transition text-sm font-medium ${
                        blog.status === 'published'
                          ? 'bg-yellow-600 text-white hover:bg-yellow-700'
                          : 'bg-green-600 text-white hover:bg-green-700'
                      }`}
                    >
                      {blog.status === 'published' ? 'Unpublish' : 'Publish'}
                    </button>
                    <button
                      onClick={() => handleDelete(blog.id)}
                      className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition text-sm font-medium"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-12 text-center">
            <div className="text-6xl mb-4">📝</div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">No blogs found</h3>
            <p className="text-gray-600 mb-6">
              {filter === 'all' ? 'Create your first blog post to get started!' : `No ${filter} blogs yet.`}
            </p>
            <Link
              href="/admin/blogs/new"
              className="inline-block px-6 py-3 bg-violet-600 text-white font-semibold rounded-lg hover:bg-violet-700 transition"
            >
              Create New Blog
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
