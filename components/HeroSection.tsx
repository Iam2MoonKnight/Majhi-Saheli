import Link from 'next/link';
import { getActiveHeroContent } from '@/lib/supabase-functions';

export default async function HeroSection() {
  let heroContent = await getActiveHeroContent();

  // Default content if none is set
  if (!heroContent) {
    heroContent = {
      title: 'Empowering Women',
      subtitle: 'Enriching Communities',
      description: 'Through education, healthcare, and vocational training, we\'re building a future where every rural woman has the opportunity to thrive and lead.',
      cta_text: 'Support Our Mission',
      cta_link: '/donate',
      image_url: null,
    };
  }

  return (
    <section className="relative bg-gradient-to-b from-slate-50 via-white to-teal-50 min-h-[70vh] py-16 lg:py-24 overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: 'radial-gradient(circle at 1px 1px, rgb(0 0 0 / 0.15) 1px, transparent 0)',
        backgroundSize: '40px 40px'
      }}></div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-teal-100 rounded-full">
              <div className="w-2 h-2 bg-teal-600 rounded-full animate-pulse"></div>
              <span className="text-sm font-semibold text-teal-900 tracking-wide">TRANSFORMING RURAL INDIA</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-900 leading-[1.1]">
              {heroContent.title}
              <span className="block text-teal-700 mt-2">{heroContent.subtitle}</span>
            </h1>
            
            <p className="text-lg md:text-xl text-neutral-600 leading-relaxed max-w-xl">
              {heroContent.description}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link
                href={heroContent.cta_link}
                className="group inline-flex items-center justify-center rounded-lg bg-teal-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:opacity-90"
              >
                {heroContent.cta_text}
                <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link
                href="/programs"
                className="inline-flex items-center justify-center rounded-lg border border-teal-200 bg-white px-6 py-3 text-sm font-semibold text-teal-700 shadow-sm transition hover:bg-teal-50"
              >
                Explore Programs
              </Link>
            </div>

            {/* Professional Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-neutral-200">
              <div>
                <div className="text-3xl font-bold text-teal-700">2,500+</div>
                <div className="text-sm text-neutral-600 font-medium mt-1">Lives Impacted</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-teal-700">50+</div>
                <div className="text-sm text-neutral-600 font-medium mt-1">Villages</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-teal-700">15+</div>
                <div className="text-sm text-neutral-600 font-medium mt-1">Programs</div>
              </div>
            </div>
          </div>

          {/* Right Visual - Professional Image */}
          <div className="relative lg:h-[600px] h-96">
            {/* Background accent */}
            <div className="absolute top-8 left-8 right-0 bottom-0 bg-gradient-to-br from-teal-600 to-rose-500 rounded-2xl opacity-10"></div>
            
            {/* Main image container */}
            <div className="relative h-full bg-gradient-to-br from-teal-100 to-rose-100 rounded-2xl shadow-2xl overflow-hidden">
              {heroContent.image_url ? (
                <img 
                  src={heroContent.image_url} 
                  alt={heroContent.title}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              ) : (
                <>
                  {/* Image placeholder with overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-teal-600/20 to-rose-500/20"></div>
                  
                  {/* Decorative pattern */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 opacity-20">
                    <div className="w-full h-full border-8 border-white rounded-full"></div>
                    <div className="absolute inset-8 border-8 border-white rounded-full"></div>
                  </div>
                </>
              )}
              
              {/* Text overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/60 to-transparent">
                <div className="text-white">
                  <p className="text-sm font-semibold mb-2 tracking-wide">FEATURED STORY</p>
                  <h3 className="text-2xl font-bold leading-tight">From Beneficiary to Community Leader</h3>
                  <p className="text-sm opacity-90 mt-2">How Sunita transformed her village through education</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
