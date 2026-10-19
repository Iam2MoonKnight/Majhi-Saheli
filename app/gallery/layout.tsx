import type { Metadata } from 'next';
import { createPageMetadata } from '@/lib/seo';

export const metadata: Metadata = createPageMetadata(
  'Gallery',
  'View photographs from Mazi Saheli Charitable Trust programmes and community activities.',
);

export default function GalleryLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
