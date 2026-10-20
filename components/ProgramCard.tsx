'use client';

import { Program } from '@/lib/types';

interface ProgramCardProps {
  program: Program;
}

const categoryConfig: Record<string, { color: string; bgColor: string; borderColor: string }> = {
  education: {
    color: 'text-[var(--blue)]',
    bgColor: 'bg-[color:rgb(30_58_95_/_0.10)]',
    borderColor: 'border-[color:rgb(30_58_95_/_0.32)]',
  },
  health: {
    color: 'text-[var(--navy)]',
    bgColor: 'bg-[color:rgb(232_93_117_/_0.12)]',
    borderColor: 'border-[color:rgb(232_93_117_/_0.35)]',
  },
  training: {
    color: 'text-[var(--gold)]',
    bgColor: 'bg-[color:rgb(212_168_67_/_0.12)]',
    borderColor: 'border-[color:rgb(212_168_67_/_0.36)]',
  },
  other: {
    color: 'text-[var(--teal)]',
    bgColor: 'bg-[color:rgb(47_90_134_/_0.12)]',
    borderColor: 'border-[color:rgb(47_90_134_/_0.32)]',
  },
};

export default function ProgramCard({ program }: ProgramCardProps) {
  const config = categoryConfig[program.category] || categoryConfig.other;

  return (
    <div className={`group overflow-hidden rounded-xl border bg-[var(--surface)] shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-lg ${config.borderColor}`}>
      {/* Category indicator bar */}
      <div className={`h-1.5 ${config.bgColor}`} />
      
      {/* Content */}
      <div className="space-y-4 p-6">
        {/* Category badge */}
        <div className="flex items-center justify-between">
          <span className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wide ${config.bgColor} ${config.color}`}>
            {program.category}
          </span>
          <div className={`flex h-10 w-10 items-center justify-center rounded-full ${config.bgColor}`}>
            <svg className={`w-5 h-5 ${config.color}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>

        {/* Title */}
        <h3 className="font-heading min-h-[3.5rem] line-clamp-2 text-xl font-bold leading-tight text-[var(--navy)]">
          {program.title}
        </h3>

        {/* Description */}
        <p className="line-clamp-3 text-sm leading-relaxed text-[var(--text-muted)]">
          {program.description}
        </p>

        {/* CTA */}
        <div className="border-t border-[var(--border-soft)] pt-4">
          <button className={`group/btn inline-flex items-center text-sm font-semibold ${config.color} hover:gap-2 transition-all`}>
            Learn More
            <svg className="w-4 h-4 ml-1 group-hover/btn:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
