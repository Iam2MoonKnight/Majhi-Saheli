interface TestimonialCardProps {
  name: string;
  role: string;
  content: string;
  image?: string;
}

export default function TestimonialCard({ name, role, content }: TestimonialCardProps) {
  return (
    <div className="space-y-6 rounded-2xl border border-[var(--border-soft)] bg-[var(--surface)] p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      {/* Quote decoration */}
      <div className="flex items-start gap-2">
        <svg className="h-8 w-8 flex-shrink-0 text-[var(--accent)]" fill="currentColor" viewBox="0 0 24 24">
          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
        </svg>
      </div>
      
      {/* Testimonial text */}
      <p className="text-base leading-relaxed text-[var(--text-muted)]">
        {content}
      </p>

      {/* Rating */}
      <div className="flex gap-1">
        {[...Array(5)].map((_, i) => (
          <svg key={i} className="h-5 w-5 fill-current text-[var(--gold)]" viewBox="0 0 24 24">
            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
          </svg>
        ))}
      </div>

      {/* Author info */}
      <div className="flex items-center gap-4 border-t border-[var(--border-soft)] pt-4">
        {/* Avatar */}
        <div className="relative flex-shrink-0">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-[var(--navy)] to-[var(--blue)] text-lg font-semibold text-white shadow-md">
            {name.charAt(0).toUpperCase()}
          </div>
          <div className="absolute -bottom-0.5 -right-0.5 h-4 w-4 rounded-full border-2 border-white bg-[var(--teal)]"></div>
        </div>
        
        {/* Name and role */}
        <div className="flex-1 min-w-0">
          <div className="truncate text-base font-semibold text-[var(--navy)]">{name}</div>
          <div className="truncate text-sm text-[var(--text-muted)]">{role}</div>
        </div>
      </div>
    </div>
  );
}
