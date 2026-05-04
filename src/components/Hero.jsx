import { useState, useEffect } from 'react';
import { openWhatsApp } from '../utils/whatsapp';
import layoutImage from '../Assets/Layout.jpeg';
import layout2Image from '../Assets/Layout2.jpeg';
import layout3Image from '../Assets/Layout3.jpeg';
import logo from '../Assets/Logo.png';
import whatsappIcon from '../Assets/WhatsApp_icon.png';

const GALLERY_IMAGES = [layoutImage, layout2Image, layout3Image];

const HERO_STATS = [
  { value: '1050+', label: 'Farm Layouts Designed' },
  { value: '2+', label: 'Years of Experience' },
  { value: '98%', label: 'Farmer Satisfaction' },
];

export default function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % GALLERY_IMAGES.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleNextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % GALLERY_IMAGES.length);
  };

  const handleScroll = (id) => {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-green-200"
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
          <div className="flex flex-col gap-6 mt-20 md:mt-0">
            {/* Minimal Weather Pill */}
            <div className="inline-flex items-center gap-3 bg-white/30 backdrop-blur-md border border-white/50 rounded-full px-4 py-2 self-start shadow-sm">
              <span className="text-xl drop-shadow-sm">🌤️</span>
              <div className="flex flex-col">
                <span className="text-sm font-bold text-gray-800 leading-none">28°C · Sunny</span>
                <span className="text-[10px] text-green-700 font-semibold mt-0.5 uppercase tracking-wider">Perfect for planting</span>
              </div>
            </div>

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
                <img src={whatsappIcon} alt="WhatsApp" className="w-6 h-6 rounded-full" />
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
          <div className="flex flex-col gap-5 mt-12 lg:mt-0 max-w-lg mx-auto w-full">
            {/* Main Visual Card */}
            <div className="glass-card rounded-3xl p-4 border border-green-100 shadow-card-hover">
              <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-4 mb-4 flex items-center justify-center min-h-48 relative overflow-hidden">
                {/* Logo Badge */}
                <div className="absolute top-3 left-3 bg-white rounded-full p-1.5 h-12 w-12 shadow-lg flex items-center justify-center border border-green-50 z-20">
                  <img src={logo} alt="Logo" className="h-6 w-auto object-contain" />
                </div>

                <div className="text-center relative z-10 w-full">
                  <div className="mb-3 relative group w-full">
                    <img 
                      src={GALLERY_IMAGES[currentImageIndex]} 
                      alt={`Farm Layout Design ${currentImageIndex + 1}`} 
                      className="rounded-xl shadow-sm w-full h-auto object-cover transition-opacity duration-300 aspect-video" 
                    />
                    
                    {/* Next Image Button */}
                    <button 
                      onClick={handleNextImage}
                      className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-md w-10 h-10 flex items-center justify-center rounded-full shadow-lg border border-green-100 text-green-800 hover:bg-green-50 hover:scale-110 active:scale-95 transition-all duration-200 opacity-0 group-hover:opacity-100"
                      aria-label="Next Image"
                    >
                      ▶
                    </button>

                    {/* Image Indicators */}
                    <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 bg-black/20 px-2 py-1 rounded-full backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                      {GALLERY_IMAGES.map((_, idx) => (
                        <div 
                          key={idx} 
                          className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${idx === currentImageIndex ? 'bg-white scale-125' : 'bg-white/50'}`}
                        />
                      ))}
                    </div>
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
