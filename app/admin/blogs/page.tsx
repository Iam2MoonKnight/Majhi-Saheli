'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { getSafeSession } from '@/lib/supabase';
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
    const session = await getSafeSession();
    
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
      <div className="min-h-screen flex items-center justify-center bg-[var(--off-white)]">
        <div className="text-center">
          <div className="mx-auto mb-4 h-16 w-16 animate-pulse rounded-full bg-gradient-to-br from-[var(--navy)] to-[var(--blue)]"></div>
          <p className="text-[var(--text-muted)]">Loading blogs...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen overflow-hidden">
      <div className="border-b border-[var(--border-soft)] bg-[var(--off-white)]">
        <div className="editorial-section py-6">
          <div className="flex items-center justify-between">
            <div>
              <Link href="/admin" className="mb-2 inline-block text-sm font-medium text-[var(--blue)] hover:text-[var(--navy)]">
                ← Back to Dashboard
              </Link>
              <h1 className="font-heading text-4xl font-bold text-[var(--navy)]">Blog Management</h1>
            </div>
            <Link
              href="/admin/blogs/new"
              className="rounded-full bg-[var(--navy)] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[var(--blue)]"
            >
              + Create New Blog
            </Link>
          </div>
        </div>
      </div>

      <div className="editorial-section py-12">
        <div className="mb-6 rounded-2xl border border-[var(--border-soft)] bg-[var(--surface)] p-4">
          <div className="flex items-center gap-4">
            <span className="text-sm font-medium text-[var(--text-muted)]">Filter:</span>
            <button
              onClick={() => setFilter('all')}
              className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                filter === 'all' ? 'bg-[var(--navy)] text-white' : 'bg-[color:rgb(30_58_95_/_0.08)] text-[var(--text-muted)] hover:bg-[color:rgb(30_58_95_/_0.14)]'
              }`}
            >
              All ({blogs.length})
            </button>
            <button
              onClick={() => setFilter('published')}
              className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                filter === 'published' ? 'bg-[var(--teal)] text-white' : 'bg-[color:rgb(30_58_95_/_0.08)] text-[var(--text-muted)] hover:bg-[color:rgb(30_58_95_/_0.14)]'
              }`}
            >
              Published ({blogs.filter(b => b.status === 'published').length})
            </button>
            <button
              onClick={() => setFilter('draft')}
              className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                filter === 'draft' ? 'bg-[var(--accent)] text-white' : 'bg-[color:rgb(30_58_95_/_0.08)] text-[var(--text-muted)] hover:bg-[color:rgb(30_58_95_/_0.14)]'
              }`}
            >
              Drafts ({blogs.filter(b => b.status === 'draft').length})
            </button>
          </div>
        </div>

        {filteredBlogs.length > 0 ? (
          <div className="grid grid-cols-1 gap-6">
            {filteredBlogs.map((blog) => (
              <div key={blog.id} className="rounded-2xl border border-[var(--border-soft)] bg-[var(--surface)] p-6 transition hover:-translate-y-1 hover:shadow-md">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <h2 className="font-heading text-2xl font-bold text-[var(--navy)]">{blog.title}</h2>
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        blog.status === 'published' ? 'bg-[color:rgb(47_90_134_/_0.16)] text-[var(--teal)]' : 'bg-[color:rgb(232_93_117_/_0.14)] text-[var(--accent)]'
                      }`}>
                        {blog.status}
                      </span>
                    </div>
                    <p className="mb-4 line-clamp-2 text-[var(--text-muted)]">{blog.excerpt}</p>
                    <div className="flex items-center gap-4 text-sm text-[var(--text-muted)]">
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
                      className="rounded-full bg-[var(--blue)] px-4 py-2 text-sm font-medium text-white transition hover:bg-[var(--navy)]"
                    >
                      Edit
                    </Link>
                    <button
                      onClick={() => handleToggleStatus(blog)}
                      className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                        blog.status === 'published'
                          ? 'bg-[var(--accent)] text-white hover:bg-[var(--accent-warm)]'
                          : 'bg-[var(--teal)] text-white hover:opacity-90'
                      }`}
                    >
                      {blog.status === 'published' ? 'Unpublish' : 'Publish'}
                    </button>
                    <button
                      onClick={() => handleDelete(blog.id)}
                      className="rounded-full bg-red-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-red-700"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="rounded-2xl border border-[var(--border-soft)] bg-[var(--surface)] p-12 text-center">
            <div className="text-6xl mb-4">📝</div>
            <h3 className="font-heading text-3xl font-bold text-[var(--navy)]">No blogs found</h3>
            <p className="mb-6 mt-2 text-[var(--text-muted)]">
              {filter === 'all' ? 'Create your first blog post to get started!' : `No ${filter} blogs yet.`}
            </p>
            <Link
              href="/admin/blogs/new"
              className="inline-block rounded-full bg-[var(--navy)] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[var(--blue)]"
            >
              Create New Blog
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
