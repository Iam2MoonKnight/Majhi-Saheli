'use client';

import { useId, useState } from 'react';
import Icon from './icons';

export interface FAQItem {
  q: string;
  a: string;
}

interface FAQAccordionProps {
  items: FAQItem[];
  /** index of the item open on first render (default: first item) */
  defaultOpen?: number | null;
}

export default function FAQAccordion({ items, defaultOpen = 0 }: FAQAccordionProps) {
  const [open, setOpen] = useState<number | null>(defaultOpen);
  const baseId = useId();

  return (
    <div className="space-y-3">
      {items.map((item, idx) => {
        const isOpen = open === idx;
        const panelId = `${baseId}-panel-${idx}`;
        return (
          <div key={item.q} className="card overflow-hidden">
            <h3>
              <button
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpen(isOpen ? null : idx)}
                className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
              >
                <span className="font-heading text-base font-bold text-[var(--navy)]">{item.q}</span>
                <Icon
                  name="chevron-down"
                  size={20}
                  className={`shrink-0 text-[#e85d75] transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                />
              </button>
            </h3>
            <div
              id={panelId}
              className={`grid transition-all duration-300 ease-out ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
            >
              <div className="overflow-hidden">
                <p className="px-6 pb-5 text-sm leading-relaxed">{item.a}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
