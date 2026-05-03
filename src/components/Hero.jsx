import { openWhatsApp } from '../utils/whatsapp';

const HERO_STATS = [
  { value: '500+', label: 'Farm Layouts Designed' },
  { value: '15+', label: 'Years of Experience' },
  { value: '98%', label: 'Farmer Satisfaction' },
];

export default function Hero() {
  const handleScroll = (id) => {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden hero-gradient-animated"
    >
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Large soft blobs */}
        <div className="absolute -top-32 -right-32 w-96 h-96 bg-green-300/30 rounded-full blur-3xl" />
        <div className="absolute bottom-0 -left-16 w-80 h-80 bg-green-400/20 rounded-full blur-3xl" />
        <div className="absolute top-1/2 right-1/4 w-64 h-64 bg-green-200/40 rounded-full blur-2xl" />

        {/* Dot grid overlay */}
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: 'radial-gradient(circle, #86efac 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 py-24 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left — Text Content */}
          <div className="flex flex-col gap-6">
            <span className="section-label">Professional Agricultural Design</span>

            <h1 className="text-5xl md:text-6xl font-black text-gray-900 leading-tight tracking-tight text-balance">
              Smart Farming{' '}
              <span className="text-green-600 relative">
                Layout
                <svg
                  className="absolute -bottom-1 left-0 w-full"
                  viewBox="0 0 200 8"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0,4 Q50,0 100,4 Q150,8 200,4"
                    fill="none"
                    stroke="#4ade80"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                </svg>
              </span>{' '}
              Designs
            </h1>

            <p className="text-lg text-gray-600 leading-relaxed max-w-lg">
              Custom-engineered layouts optimized for maximum yield, efficient resource management,
              and sustainable land utilization. We bring architectural precision to every acre.
            </p>

            <div className="flex flex-wrap gap-4 mt-2">
              <button
                id="hero-whatsapp-btn"
                onClick={() => openWhatsApp('Hi, I want to book a Farm Layout Design. Please share details.')}
                className="bg-green-600 text-white px-8 py-4 rounded-2xl font-bold text-base
                           shadow-xl shadow-green-600/25 hover:bg-green-700 hover:shadow-green-600/35
                           hover:-translate-y-0.5 active:scale-95 transition-all duration-200
                           flex items-center gap-3"
              >
                <svg className="w-5 h-5 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                  <path d="M11.998 0C5.373 0 0 5.373 0 12c0 2.122.554 4.118 1.523 5.849L.057 23.404a.5.5 0 0 0 .611.612l5.665-1.475A11.948 11.948 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0h-.002z" />
                </svg>
                Book via WhatsApp
              </button>

              <button
                id="hero-portfolio-btn"
                onClick={() => handleScroll('#showcase')}
                className="border-2 border-green-600 text-green-700 px-8 py-4 rounded-2xl font-bold text-base
                           hover:bg-green-600 hover:text-white hover:-translate-y-0.5
                           active:scale-95 transition-all duration-200"
              >
                View Portfolio
              </button>
            </div>

            {/* Trust badges */}
            <div className="flex items-center gap-3 mt-2">
              <div className="flex -space-x-2">
                {['🧑‍🌾', '👨‍🌾', '👩‍🌾'].map((emoji, i) => (
                  <div
                    key={i}
                    className="w-9 h-9 rounded-full bg-green-100 border-2 border-white flex items-center justify-center text-sm"
                  >
                    {emoji}
                  </div>
                ))}
              </div>
              <p className="text-sm text-gray-600">
                <span className="font-bold text-green-700">500+ farmers</span> trust our designs
              </p>
            </div>
          </div>

          {/* Right — Stats & Visual Card */}
          <div className="hidden lg:flex flex-col gap-6">
            {/* Main Visual Card */}
            <div className="glass-card rounded-3xl p-6 border border-green-100 shadow-card-hover">
              <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-6 mb-5 flex items-center justify-center min-h-48">
                <div className="text-center">
                  <div className="text-6xl mb-3">
                    <img src="src/Assets/Layout.jpeg" alt="" />
                  </div>
                  <p className="font-bold text-green-800 text-lg">Farm Blueprint</p>
                  <p className="text-green-600 text-sm mt-1">Precision. Yield. Sustainability.</p>
                </div>
              </div>

              {/* Mini stats row inside card */}
              <div className="grid grid-cols-3 gap-3">
                {HERO_STATS.map((stat, i) => (
                  <div key={i} className="bg-green-50 rounded-xl p-3 text-center border border-green-100">
                    <p className="text-xl font-black text-green-700">{stat.value}</p>
                    <p className="text-[10px] text-gray-500 font-medium leading-tight mt-0.5">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Floating success badge */}
            <div className="flex items-center gap-3 bg-white rounded-2xl px-5 py-3 shadow-lg border border-green-100 self-start ml-8 animate-float">
              <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                <span className="text-xl">✅</span>
              </div>
              <div>
                <p className="font-bold text-gray-800 text-sm">Layout Approved!</p>
                <p className="text-xs text-gray-500">Just now · Potato Farm, 12 Acres</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0 pointer-events-none">
        <svg viewBox="0 0 1440 60" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full h-12">
          <path d="M0,40 Q360,0 720,30 Q1080,60 1440,20 L1440,60 L0,60 Z" fill="#f8faf8" />
        </svg>
      </div>
    </section>
  );
}
