import type { Metadata } from 'next';
import { createPageMetadata } from '@/lib/seo';

export const metadata: Metadata = createPageMetadata(
  'Dashboard',
  'Manage your Mazi Saheli Charitable Trust account and donation activity.',
);

export default function DashboardLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
