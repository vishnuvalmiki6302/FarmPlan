import { openWhatsApp } from '../utils/whatsapp';
import whatsappIcon from '../Assets/WhatsApp_icon.png';

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
          <img src={whatsappIcon} alt="WhatsApp" className="w-8 h-8 rounded-full" />
          Chat on WhatsApp
        </button>

        <p className="text-green-200 text-sm mt-5">
          Free consultation · No commitment required
        </p>
      </div>
    </section>
  );
}
