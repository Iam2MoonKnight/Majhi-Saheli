'use client';

import { Program } from '@/lib/types';

interface ProgramCardProps {
  program: Program;
}

const categoryConfig: Record<string, { color: string; bgColor: string; borderColor: string }> = {
  education: {
    color: 'text-blue-600',
    bgColor: 'bg-blue-50',
    borderColor: 'border-blue-200',
  },
  health: {
    color: 'text-emerald-600',
    bgColor: 'bg-emerald-50',
    borderColor: 'border-emerald-200',
  },
  training: {
    color: 'text-amber-600',
    bgColor: 'bg-amber-50',
    borderColor: 'border-amber-200',
  },
  other: {
    color: 'text-violet-600',
    bgColor: 'bg-violet-50',
    borderColor: 'border-violet-200',
  },
};

export default function ProgramCard({ program }: ProgramCardProps) {
  const config = categoryConfig[program.category] || categoryConfig.other;

  return (
    <div className="group bg-white rounded-xl border border-neutral-200 hover:border-neutral-300 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden">
      {/* Category indicator bar */}
      <div className={`h-1.5 ${config.bgColor}`}></div>
      
      {/* Content */}
      <div className="p-6 space-y-4">
        {/* Category badge */}
        <div className="flex items-center justify-between">
          <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold ${config.bgColor} ${config.color} uppercase tracking-wide`}>
            {program.category}
          </span>
          <div className={`w-10 h-10 rounded-full ${config.bgColor} flex items-center justify-center`}>
            <svg className={`w-5 h-5 ${config.color}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-neutral-900 leading-tight line-clamp-2 min-h-[3.5rem]">
          {program.title}
        </h3>

        {/* Description */}
        <p className="text-neutral-600 text-sm leading-relaxed line-clamp-3">
          {program.description}
        </p>

        {/* CTA */}
        <div className="pt-4 border-t border-neutral-100">
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
