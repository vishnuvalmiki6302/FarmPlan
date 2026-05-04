import { openWhatsApp } from '../utils/whatsapp';

const FEATURES = [
  { emoji: '⚡', text: 'Fast Turnaround' },
  { emoji: '📐', text: 'Precision Design' },
  { emoji: '💧', text: 'Water Efficient' },
];

export default function CTASection() {
  return (
    <section id="contact" className="py-24 bg-green-600 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-24 -left-12 w-80 h-80 bg-green-500/50 rounded-full blur-3xl" />
        <div className="absolute -bottom-12 -right-12 w-64 h-64 bg-green-700/40 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-green-500/20 rounded-full blur-2xl" />
        {/* Dot pattern */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
            backgroundSize: '30px 30px',
          }}
        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 md:px-10 text-center">
        <span className="inline-block bg-white/20 text-white text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-6 backdrop-blur-sm">
          Get Started Today
        </span>

        <h2 className="text-4xl md:text-5xl font-black text-white leading-tight mb-5 text-balance">
          Start Planning Your Farm Today 🌱
        </h2>

        <p className="text-green-100 text-lg mb-10 leading-relaxed max-w-xl mx-auto">
          Get a customized layout design that boosts efficiency and maximizes your land's potential.
          Connect directly via WhatsApp for a free consultation.
        </p>

        {/* Feature pills */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {FEATURES.map((f, i) => (
            <div key={i} className="bg-white/20 text-white rounded-full px-4 py-2 text-sm font-medium backdrop-blur-sm flex items-center gap-2">
              <span>{f.emoji}</span>
              {f.text}
            </div>
          ))}
        </div>

        <button
          id="cta-whatsapp-btn"
          onClick={() => openWhatsApp('Hi, I want to start planning my farm layout. Please help me get started.')}
          className="bg-white text-green-700 px-10 py-5 rounded-2xl font-black text-lg
                     shadow-2xl shadow-black/20 hover:bg-green-50 hover:shadow-black/30
                     hover:-translate-y-1 active:scale-95 transition-all duration-200
                     inline-flex items-center gap-3"
        >
          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
            <path d="M11.998 0C5.373 0 0 5.373 0 12c0 2.122.554 4.118 1.523 5.849L.057 23.404a.5.5 0 0 0 .611.612l5.665-1.475A11.948 11.948 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0h-.002z"/>
          </svg>
          Chat on WhatsApp
        </button>

        <p className="text-green-200 text-sm mt-5">
          Free consultation · No commitment required
        </p>
      </div>
    </section>
  );
}
