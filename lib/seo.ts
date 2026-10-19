import type { Metadata } from 'next';

export const SITE_NAME = 'Mazi Saheli Charitable Trust';

export function createPageMetadata(title: string, description: string): Metadata {
  const openGraphTitle = title === SITE_NAME ? title : `${title} | ${SITE_NAME}`;

  return {
    title: title === SITE_NAME ? { absolute: SITE_NAME } : title,
    description,
    openGraph: {
      title: openGraphTitle,
      description,
      type: 'website',
      images: [{ url: '/logo.png', alt: SITE_NAME }],
    },
  };
}
