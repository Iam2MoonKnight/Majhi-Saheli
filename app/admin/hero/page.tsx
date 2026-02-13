'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { supabase } from '@/lib/supabase';
import { getUserProfile, getAllHeroContent, createHeroContent, updateHeroContent, setActiveHeroContent, deleteHeroContent } from '@/lib/supabase-functions';
import Link from 'next/link';

export default function HeroManagement() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [heroContents, setHeroContents] = useState<any[]>([]);
  const [showForm, setShowForm] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [userId, setUserId] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    title: '',
    subtitle: '',
    description: '',
    cta_text: 'Support Our Mission',
    cta_link: '/donate',
    image_url: '',
  });

  useEffect(() => {
    loadHeroContent();
  }, [router]);

  const loadHeroContent = async () => {
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

    setUserId(session.user.id);
    const contents = await getAllHeroContent();
    setHeroContents(contents);
    setLoading(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      if (editingId) {
        await updateHeroContent(editingId, formData);
      } else {
        await createHeroContent({
          ...formData,
          created_by: userId,
          is_active: false,
        });
      }
      
      resetForm();
      await loadHeroContent();
    } catch (error) {
      alert('Error saving hero content');
    }
  };

  const handleSetActive = async (id: string) => {
    try {
      await setActiveHeroContent(id);
      await loadHeroContent();
    } catch (error) {
      alert('Error setting active hero content');
    }
  };

  const handleEdit = (content: any) => {
    setFormData({
      title: content.title,
      subtitle: content.subtitle,
      description: content.description || '',
      cta_text: content.cta_text,
      cta_link: content.cta_link,
      image_url: content.image_url || '',
    });
    setEditingId(content.id);
    setShowForm(true);
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this hero content?')) return;

    try {
      await deleteHeroContent(id);
      await loadHeroContent();
    } catch (error) {
      alert('Error deleting hero content');
    }
  };

  const resetForm = () => {
    setFormData({
      title: '',
      subtitle: '',
      description: '',
      cta_text: 'Support Our Mission',
      cta_link: '/donate',
      image_url: '',
    });
    setEditingId(null);
    setShowForm(false);
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="w-16 h-16 bg-gradient-to-br from-violet-500 to-purple-600 rounded-full mx-auto mb-4 animate-pulse"></div>
          <p className="text-gray-600">Loading hero content...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            <div>
              <Link href="/admin" className="text-violet-600 hover:text-violet-700 text-sm font-medium mb-2 inline-block">
                ← Back to Dashboard
              </Link>
              <h1 className="text-3xl font-bold text-gray-900">Hero Section Management</h1>
              <p className="text-gray-600 mt-1">Manage homepage hero content and images</p>
            </div>
            <button
              onClick={() => setShowForm(!showForm)}
              className="px-6 py-3 bg-violet-600 text-white font-semibold rounded-lg hover:bg-violet-700 transition shadow-lg"
            >
              {showForm ? 'Cancel' : '+ Create New Hero'}
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Form */}
        {showForm && (
          <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              {editingId ? 'Edit Hero Content' : 'Create New Hero Content'}
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-transparent outline-none"
                    placeholder="Empowering Women"
                  />
                </div>

                <div>
                  <label htmlFor="subtitle" className="block text-sm font-semibold text-gray-900 mb-2">
                    Subtitle *
                  </label>
                  <input
                    type="text"
                    id="subtitle"
                    name="subtitle"
                    value={formData.subtitle}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-transparent outline-none"
                    placeholder="Enriching Communities"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="description" className="block text-sm font-semibold text-gray-900 mb-2">
                  Description
                </label>
                <textarea
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  rows={3}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-transparent outline-none resize-none"
                  placeholder="Brief description of your mission..."
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="cta_text" className="block text-sm font-semibold text-gray-900 mb-2">
                    Button Text
                  </label>
                  <input
                    type="text"
                    id="cta_text"
                    name="cta_text"
                    value={formData.cta_text}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-transparent outline-none"
                    placeholder="Support Our Mission"
                  />
                </div>

                <div>
                  <label htmlFor="cta_link" className="block text-sm font-semibold text-gray-900 mb-2">
                    Button Link
                  </label>
                  <input
                    type="text"
                    id="cta_link"
                    name="cta_link"
                    value={formData.cta_link}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-transparent outline-none"
                    placeholder="/donate"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="image_url" className="block text-sm font-semibold text-gray-900 mb-2">
                  Hero Image URL
                </label>
                <input
                  type="url"
                  id="image_url"
                  name="image_url"
                  value={formData.image_url}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-transparent outline-none"
                  placeholder="https://example.com/hero-image.jpg"
                />
              </div>

              <div className="flex items-center gap-4 pt-6 border-t border-gray-200">
                <button
                  type="submit"
                  className="flex-1 px-6 py-3 bg-violet-600 text-white font-semibold rounded-lg hover:bg-violet-700 transition"
                >
                  {editingId ? 'Update Hero Content' : 'Create Hero Content'}
                </button>
                <button
                  type="button"
                  onClick={resetForm}
                  className="px-6 py-3 bg-gray-200 text-gray-700 font-semibold rounded-lg hover:bg-gray-300 transition"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        )}

        {/* Hero Content List */}
        <div className="space-y-6">
          {heroContents.length > 0 ? (
            heroContents.map((content) => (
              <div key={content.id} className={`bg-white rounded-lg shadow-sm border-2 overflow-hidden ${
                content.is_active ? 'border-green-500' : 'border-gray-100'
              }`}>
                <div className="p-6">
                  {content.is_active && (
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-semibold mb-4">
                      <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                      Currently Active
                    </div>
                  )}
                  
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <div>
                      <h2 className="text-2xl font-bold text-gray-900 mb-2">{content.title}</h2>
                      <p className="text-xl text-violet-600 mb-3">{content.subtitle}</p>
                      {content.description && (
                        <p className="text-gray-600 mb-4">{content.description}</p>
                      )}
                      <div className="flex items-center gap-4 text-sm text-gray-500">
                        <span>🔗 Button: "{content.cta_text}"</span>
                        <span>→ {content.cta_link}</span>
                      </div>
                    </div>

                    {content.image_url && (
                      <div className="h-48 bg-gray-100 rounded-lg overflow-hidden">
                        <img src={content.image_url} alt={content.title} className="w-full h-full object-cover" />
                      </div>
                    )}
                  </div>

                  <div className="flex items-center gap-2 mt-6 pt-6 border-t border-gray-100">
                    {!content.is_active && (
                      <button
                        onClick={() => handleSetActive(content.id)}
                        className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition text-sm font-medium"
                      >
                        Set as Active
                      </button>
                    )}
                    <button
                      onClick={() => handleEdit(content)}
                      className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition text-sm font-medium"
                    >
                      Edit
                    </button>
                    {!content.is_active && (
                      <button
                        onClick={() => handleDelete(content.id)}
                        className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition text-sm font-medium"
                      >
                        Delete
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-12 text-center">
              <div className="text-6xl mb-4">🖼️</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">No hero content yet</h3>
              <p className="text-gray-600 mb-6">Create your first hero section to customize your homepage!</p>
              <button
                onClick={() => setShowForm(true)}
                className="inline-block px-6 py-3 bg-violet-600 text-white font-semibold rounded-lg hover:bg-violet-700 transition"
              >
                Create Hero Content
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
