import type { Metadata } from 'next';
import { createPageMetadata } from '@/lib/seo';

export const metadata: Metadata = createPageMetadata(
  'Profile',
  'View and manage your Mazi Saheli Charitable Trust account profile.',
);

export default function ProfileLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
