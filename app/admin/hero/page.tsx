'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { getSafeSession } from '@/lib/supabase';
import { getUserProfile, getAllHeroContent, createHeroContent, updateHeroContent, setActiveHeroContent, deleteHeroContent } from '@/lib/supabase-functions';
import { uploadImage, validateImageFile } from '@/lib/upload-image';
import Link from 'next/link';

export default function HeroManagement() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [uploading, setUploading] = useState(false);
  const [heroContents, setHeroContents] = useState<any[]>([]);
  const [showForm, setShowForm] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [userId, setUserId] = useState<string | null>(null);
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string>('');
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

    setUserId(session.user.id);
    const contents = await getAllHeroContent();
    setHeroContents(contents);
    setLoading(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const validation = validateImageFile(file);
    if (!validation.valid) {
      alert(validation.error || 'Invalid image file');
      return;
    }

    setImageFile(file);

    const reader = new FileReader();
    reader.onloadend = () => {
      setImagePreview(reader.result as string);
    };
    reader.readAsDataURL(file);
  };

  const handleRemoveImage = () => {
    setImageFile(null);
    setImagePreview('');
    setFormData(prev => ({ ...prev, image_url: '' }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      let imageUrl = formData.image_url;

      // Upload new image if file is selected
      if (imageFile) {
        setUploading(true);
        imageUrl = await uploadImage(imageFile);
        setUploading(false);
      }

      if (editingId) {
        await updateHeroContent(editingId, { ...formData, image_url: imageUrl });
      } else {
        await createHeroContent({
          ...formData,
          image_url: imageUrl,
          created_by: userId,
          is_active: false,
        });
      }
      
      resetForm();
      await loadHeroContent();
    } catch (error) {
      alert('Error saving hero content');
      setUploading(false);
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
    
    // Set existing image as preview
    if (content.image_url) {
      setImagePreview(content.image_url);
    }
    
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
    setImageFile(null);
    setImagePreview('');
    setEditingId(null);
    setShowForm(false);
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[color:rgb(30_58_95_/_0.05)]">
        <div className="text-center">
          <div className="mx-auto mb-4 h-16 w-16 animate-pulse rounded-full bg-gradient-to-br from-[var(--navy)] to-[var(--blue)]"></div>
          <p className="text-[var(--text-muted)]">Loading hero content...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen overflow-hidden">
      <div className="border-b border-[var(--border-soft)] bg-[color:rgb(255_255_255_/_0.58)]">
        <div className="editorial-section py-6">
          <div className="flex items-center justify-between">
            <div>
              <Link href="/admin" className="mb-2 inline-block text-sm font-medium text-[var(--blue)] hover:text-[var(--navy)]">
                ← Back to Dashboard
              </Link>
              <h1 className="font-heading text-4xl font-bold text-[var(--navy)]">Hero Section Management</h1>
              <p className="mt-1 text-[var(--text-muted)]">Manage homepage hero content and images</p>
            </div>
            <button
              onClick={() => setShowForm(!showForm)}
              className="rounded-full bg-[var(--navy)] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[var(--blue)]"
            >
              {showForm ? 'Cancel' : '+ Create New Hero'}
            </button>
          </div>
        </div>
      </div>

      <div className="editorial-section py-12">
        {showForm && (
          <div className="mb-8 rounded-2xl border border-[var(--border-soft)] bg-[var(--surface)] p-8">
            <h2 className="mb-6 font-heading text-3xl font-bold text-[var(--navy)]">
              {editingId ? 'Edit Hero Content' : 'Create New Hero Content'}
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="title" className="mb-2 block text-sm font-semibold text-[var(--navy)]">
                    Title *
                  </label>
                  <input
                    type="text"
                    id="title"
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                    required
                    className="w-full rounded-xl border border-[var(--border-soft)] px-4 py-3 outline-none transition focus:border-[var(--blue)] focus:ring-2 focus:ring-[color:rgb(74_118_168_/_0.2)]"
                    placeholder="Empowering Women"
                  />
                </div>

                <div>
                  <label htmlFor="subtitle" className="mb-2 block text-sm font-semibold text-[var(--navy)]">
                    Subtitle *
                  </label>
                  <input
                    type="text"
                    id="subtitle"
                    name="subtitle"
                    value={formData.subtitle}
                    onChange={handleChange}
                    required
                    className="w-full rounded-xl border border-[var(--border-soft)] px-4 py-3 outline-none transition focus:border-[var(--blue)] focus:ring-2 focus:ring-[color:rgb(74_118_168_/_0.2)]"
                    placeholder="Enriching Communities"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="description" className="mb-2 block text-sm font-semibold text-[var(--navy)]">
                  Description
                </label>
                <textarea
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  rows={3}
                  className="w-full resize-none rounded-xl border border-[var(--border-soft)] px-4 py-3 outline-none transition focus:border-[var(--blue)] focus:ring-2 focus:ring-[color:rgb(74_118_168_/_0.2)]"
                  placeholder="Brief description of your mission..."
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="cta_text" className="mb-2 block text-sm font-semibold text-[var(--navy)]">
                    Button Text
                  </label>
                  <input
                    type="text"
                    id="cta_text"
                    name="cta_text"
                    value={formData.cta_text}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-[var(--border-soft)] px-4 py-3 outline-none transition focus:border-[var(--blue)] focus:ring-2 focus:ring-[color:rgb(74_118_168_/_0.2)]"
                    placeholder="Support Our Mission"
                  />
                </div>

                <div>
                  <label htmlFor="cta_link" className="mb-2 block text-sm font-semibold text-[var(--navy)]">
                    Button Link
                  </label>
                  <input
                    type="text"
                    id="cta_link"
                    name="cta_link"
                    value={formData.cta_link}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-[var(--border-soft)] px-4 py-3 outline-none transition focus:border-[var(--blue)] focus:ring-2 focus:ring-[color:rgb(74_118_168_/_0.2)]"
                    placeholder="/donate"
                  />
                </div>
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold text-[var(--navy)]">
                  Hero Image
                </label>
                
                {imagePreview ? (
                  <div className="space-y-3">
                    <div className="relative h-64 w-full overflow-hidden rounded-xl bg-[color:rgb(30_58_95_/_0.08)]">
                      <img src={imagePreview} alt="Preview" className="w-full h-full object-cover" />
                      <button
                        type="button"
                        onClick={handleRemoveImage}
                        className="absolute right-2 top-2 rounded-full bg-red-600 p-2 text-white transition hover:bg-red-700"
                      >
                        ✕
                      </button>
                    </div>
                    <p className="text-xs text-[var(--text-muted)]">Click the X to remove and upload a new image</p>
                  </div>
                ) : (
                  <div className="rounded-xl border-2 border-dashed border-[var(--border-soft)] p-8 text-center transition hover:border-[var(--blue)]">
                    <input
                      type="file"
                      id="image_url"
                      accept="image/*"
                      onChange={handleImageChange}
                      className="hidden"
                    />
                    <label htmlFor="image_url" className="cursor-pointer">
                      <div className="text-4xl mb-2">📷</div>
                      <p className="mb-1 text-sm font-medium text-[var(--navy)]">Click to upload image</p>
                      <p className="text-xs text-[var(--text-muted)]">PNG, JPG, WebP or GIF (max 5MB)</p>
                    </label>
                  </div>
                )}
              </div>

              <div className="flex items-center gap-4 border-t border-[var(--border-soft)] pt-6">
                <button
                  type="submit"
                  disabled={uploading}
                  className="flex-1 rounded-full bg-[var(--navy)] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[var(--blue)] disabled:opacity-50"
                >
                  {uploading ? 'Uploading Image...' : editingId ? 'Update Hero Content' : 'Create Hero Content'}
                </button>
                <button
                  type="button"
                  onClick={resetForm}
                  className="rounded-full bg-[color:rgb(30_58_95_/_0.1)] px-6 py-3 text-sm font-semibold text-[var(--navy)] transition hover:bg-[color:rgb(30_58_95_/_0.16)]"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        )}

        <div className="space-y-6">
          {heroContents.length > 0 ? (
            heroContents.map((content) => (
              <div key={content.id} className={`overflow-hidden rounded-2xl border-2 bg-[var(--surface)] ${
                content.is_active ? 'border-[var(--teal)]' : 'border-[var(--border-soft)]'
              }`}>
                <div className="p-6">
                  {content.is_active && (
                    <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-[color:rgb(42_123_111_/_0.16)] px-3 py-1 text-sm font-semibold text-[var(--teal)]">
                      <span className="h-2 w-2 animate-pulse rounded-full bg-[var(--teal)]"></span>
                      Currently Active
                    </div>
                  )}
                  
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <div>
                      <h2 className="mb-2 font-heading text-3xl font-bold text-[var(--navy)]">{content.title}</h2>
                      <p className="mb-3 text-xl text-[var(--blue)]">{content.subtitle}</p>
                      {content.description && (
                        <p className="mb-4 text-[var(--text-muted)]">{content.description}</p>
                      )}
                      <div className="flex items-center gap-4 text-sm text-[var(--text-muted)]">
                        <span>🔗 Button: "{content.cta_text}"</span>
                        <span>→ {content.cta_link}</span>
                      </div>
                    </div>

                    {content.image_url && (
                      <div className="h-48 overflow-hidden rounded-xl bg-[color:rgb(30_58_95_/_0.08)]">
                        <img src={content.image_url} alt={content.title} className="w-full h-full object-cover" />
                      </div>
                    )}
                  </div>

                  <div className="mt-6 flex items-center gap-2 border-t border-[var(--border-soft)] pt-6">
                    {!content.is_active && (
                      <button
                        onClick={() => handleSetActive(content.id)}
                        className="rounded-full bg-[var(--teal)] px-4 py-2 text-sm font-medium text-white transition hover:opacity-90"
                      >
                        Set as Active
                      </button>
                    )}
                    <button
                      onClick={() => handleEdit(content)}
                      className="rounded-full bg-[var(--blue)] px-4 py-2 text-sm font-medium text-white transition hover:bg-[var(--navy)]"
                    >
                      Edit
                    </button>
                    {!content.is_active && (
                      <button
                        onClick={() => handleDelete(content.id)}
                        className="rounded-full bg-red-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-red-700"
                      >
                        Delete
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="rounded-2xl border border-[var(--border-soft)] bg-[var(--surface)] p-12 text-center">
              <div className="text-6xl mb-4">🖼️</div>
              <h3 className="font-heading text-3xl font-bold text-[var(--navy)]">No hero content yet</h3>
              <p className="mb-6 mt-2 text-[var(--text-muted)]">Create your first hero section to customize your homepage.</p>
              <button
                onClick={() => setShowForm(true)}
                className="inline-block rounded-full bg-[var(--navy)] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[var(--blue)]"
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
