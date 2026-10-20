import type { ReactNode } from 'react';

interface SectionEyebrowProps {
  children: ReactNode;
  className?: string;
}

/**
 * Small uppercase, letter-spaced label that sits above a section heading.
 * Colour defaults to navy via the `.eyebrow` component class; pass a
 * `text-*` utility in `className` to override on dark surfaces.
 */
export default function SectionEyebrow({ children, className = '' }: SectionEyebrowProps) {
  return <p className={`eyebrow ${className}`}>{children}</p>;
}
