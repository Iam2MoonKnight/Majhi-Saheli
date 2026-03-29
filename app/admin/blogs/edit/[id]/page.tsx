'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { supabase, getSafeSession } from '@/lib/supabase';
import { getUserProfile, updateBlog } from '@/lib/supabase-functions';
import { uploadImage, validateImageFile } from '@/lib/upload-image';
import Link from 'next/link';

export default function EditBlog({ params }: { params: { id: string } }) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [fetchLoading, setFetchLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string>('');
  const [formData, setFormData] = useState({
    title: '',
    slug: '',
    excerpt: '',
    content: '',
    featured_image: '',
    status: 'draft' as 'draft' | 'published',
  });

  useEffect(() => {
    loadBlog();
  }, [params.id]);

  const loadBlog = async () => {
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

    // Fetch blog data
    const { data: blog, error } = await supabase
      .from('blogs')
      .select('*')
      .eq('id', params.id)
      .single();

    if (error || !blog) {
      setError('Blog not found');
      setFetchLoading(false);
      return;
    }

    setFormData({
      title: blog.title,
      slug: blog.slug,
      excerpt: blog.excerpt || '',
      content: blog.content,
      featured_image: blog.featured_image || '',
      status: blog.status,
    });
    
    // Set existing image as preview
    if (blog.featured_image) {
      setImagePreview(blog.featured_image);
    }
    
    setFetchLoading(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const validation = validateImageFile(file);
    if (!validation.valid) {
      setError(validation.error || 'Invalid image file');
      return;
    }

    setImageFile(file);
    setError(null);

    const reader = new FileReader();
    reader.onloadend = () => {
      setImagePreview(reader.result as string);
    };
    reader.readAsDataURL(file);
  };

  const handleRemoveImage = () => {
    setImageFile(null);
    setImagePreview('');
    setFormData(prev => ({ ...prev, featured_image: '' }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      let imageUrl = formData.featured_image;

      // Upload new image if file is selected
      if (imageFile) {
        setUploading(true);
        imageUrl = await uploadImage(imageFile);
        setUploading(false);
      }

      const updates: any = { 
        ...formData,
        featured_image: imageUrl,
      };

      if (formData.status === 'published' && !updates.published_at) {
        updates.published_at = new Date().toISOString();
      }

      await updateBlog(params.id, updates);
      router.push('/admin/blogs');
    } catch (err: any) {
      setError(err.message || 'Failed to update blog');
      setUploading(false);
    } finally {
      setLoading(false);
    }
  };

  if (fetchLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="w-16 h-16 bg-gradient-to-br from-violet-500 to-purple-600 rounded-full mx-auto mb-4 animate-pulse"></div>
          <p className="text-gray-600">Loading blog...</p>
        </div>
      </div>
    );
  }

  if (error && fetchLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="text-6xl mb-4">❌</div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Blog Not Found</h2>
          <p className="text-gray-600 mb-6">{error}</p>
          <Link
            href="/admin/blogs"
            className="inline-block px-6 py-3 bg-violet-600 text-white font-semibold rounded-lg hover:bg-violet-700 transition"
          >
            Back to Blogs
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-6 py-6">
          <Link href="/admin/blogs" className="text-violet-600 hover:text-violet-700 text-sm font-medium mb-2 inline-block">
            ← Back to Blogs
          </Link>
          <h1 className="text-3xl font-bold text-gray-900">Edit Blog Post</h1>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-12">
        {error && (
          <div className="mb-6 p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg">
            ✕ {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-sm border border-gray-100 p-8 space-y-6">
          {/* Title */}
          <div>
            <label htmlFor="title" className="block text-sm font-semibold text-gray-900 mb-2">
              Title *
            </label>
            <input
              type="text"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-transparent outline-none text-lg"
              placeholder="Enter blog title"
            />
          </div>

          {/* Slug */}
          <div>
            <label htmlFor="slug" className="block text-sm font-semibold text-gray-900 mb-2">
              URL Slug *
            </label>
            <input
              type="text"
              id="slug"
              name="slug"
              value={formData.slug}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-transparent outline-none font-mono text-sm"
              placeholder="url-friendly-slug"
            />
            <p className="text-xs text-gray-500 mt-1">URL: /blog/{formData.slug || 'your-slug'}</p>
          </div>

          {/* Excerpt */}
          <div>
            <label htmlFor="excerpt" className="block text-sm font-semibold text-gray-900 mb-2">
              Excerpt
            </label>
            <textarea
              id="excerpt"
              name="excerpt"
              value={formData.excerpt}
              onChange={handleChange}
              rows={3}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-transparent outline-none resize-none"
              placeholder="Brief summary of the blog post (optional)"
            />
          </div>

          {/* Content */}
          <div>
            <label htmlFor="content" className="block text-sm font-semibold text-gray-900 mb-2">
              Content *
            </label>
            <textarea
              id="content"
              name="content"
              value={formData.content}
              onChange={handleChange}
              required
              rows={15}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-transparent outline-none resize-none font-mono text-sm"
              placeholder="Write your blog content here... (Markdown supported)"
            />
            <p className="text-xs text-gray-500 mt-1">Tip: You can use Markdown formatting</p>
          </div>

          {/* Featured Image */}
          <div>
            <label className="block text-sm font-semibold text-gray-900 mb-2">
              Featured Image
            </label>
            
            {imagePreview ? (
              <div className="space-y-3">
                <div className="relative w-full h-64 bg-gray-100 rounded-lg overflow-hidden">
                  <img src={imagePreview} alt="Preview" className="w-full h-full object-cover" />
                  <button
                    type="button"
                    onClick={handleRemoveImage}
                    className="absolute top-2 right-2 p-2 bg-red-600 text-white rounded-full hover:bg-red-700 transition"
                  >
                    ✕
                  </button>
                </div>
                <p className="text-xs text-gray-500">Click the X to remove and upload a new image</p>
              </div>
            ) : (
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-violet-500 transition">
                <input
                  type="file"
                  id="featured_image"
                  accept="image/*"
                  onChange={handleImageChange}
                  className="hidden"
                />
                <label htmlFor="featured_image" className="cursor-pointer">
                  <div className="text-4xl mb-2">📷</div>
                  <p className="text-sm font-medium text-gray-700 mb-1">Click to upload image</p>
                  <p className="text-xs text-gray-500">PNG, JPG, WebP or GIF (max 5MB)</p>
                </label>
              </div>
            )}
          </div>

          {/* Status */}
          <div>
            <label htmlFor="status" className="block text-sm font-semibold text-gray-900 mb-2">
              Status
            </label>
            <select
              id="status"
              name="status"
              value={formData.status}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-transparent outline-none"
            >
              <option value="draft">Draft</option>
              <option value="published">Published</option>
            </select>
          </div>

          {/* Submit Buttons */}
          <div className="flex items-center gap-4 pt-6 border-t border-gray-200">
            <button
              type="submit"
              disabled={loading || uploading}
              className="flex-1 px-6 py-3 bg-violet-600 text-white font-semibold rounded-lg hover:bg-violet-700 transition disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {uploading ? 'Uploading Image...' : loading ? 'Updating...' : 'Update Blog Post'}
            </button>
            <Link
              href="/admin/blogs"
              className="px-6 py-3 bg-gray-200 text-gray-700 font-semibold rounded-lg hover:bg-gray-300 transition"
            >
              Cancel
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
