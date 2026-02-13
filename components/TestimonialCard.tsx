interface TestimonialCardProps {
  name: string;
  role: string;
  content: string;
  image?: string;
}

export default function TestimonialCard({ name, role, content, image }: TestimonialCardProps) {
  return (
    <div className="bg-white rounded-xl border border-neutral-200 hover:border-neutral-300 shadow-sm hover:shadow-lg transition-all duration-300 p-8 space-y-6">
      {/* Quote decoration */}
      <div className="flex items-start gap-2">
        <svg className="w-8 h-8 text-violet-400 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
        </svg>
      </div>
      
      {/* Testimonial text */}
      <p className="text-neutral-700 text-base leading-relaxed">
        {content}
      </p>

      {/* Rating */}
      <div className="flex gap-1">
        {[...Array(5)].map((_, i) => (
          <svg key={i} className="w-5 h-5 text-amber-400 fill-current" viewBox="0 0 24 24">
            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
          </svg>
        ))}
      </div>

      {/* Author info */}
      <div className="flex items-center gap-4 pt-4 border-t border-neutral-100">
        {/* Avatar */}
        <div className="relative flex-shrink-0">
          <div className="w-12 h-12 bg-gradient-to-br from-violet-500 to-pink-500 rounded-full flex items-center justify-center text-white text-lg font-semibold shadow-md">
            {name.charAt(0).toUpperCase()}
          </div>
          <div className="absolute -bottom-0.5 -right-0.5 w-4 h-4 bg-emerald-400 rounded-full border-2 border-white"></div>
        </div>
        
        {/* Name and role */}
        <div className="flex-1 min-w-0">
          <div className="font-semibold text-neutral-900 text-base truncate">{name}</div>
          <div className="text-sm text-neutral-600 truncate">{role}</div>
        </div>
      </div>
    </div>
  );
}
