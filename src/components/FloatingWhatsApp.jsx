import { openWhatsApp } from '../utils/whatsapp';

export default function FloatingWhatsApp() {
  return (
    <a
      id="floating-whatsapp-btn"
      href="#"
      onClick={(e) => {
        e.preventDefault();
        openWhatsApp('Hi, I want to book a Farm Layout Design. Please help me!');
      }}
      className="fixed bottom-6 right-6 z-50 w-16 h-16 bg-green-500 text-white rounded-full
                 flex items-center justify-center shadow-2xl shadow-green-500/40
                 hover:bg-green-600 hover:scale-110 active:scale-95
                 transition-all duration-200 wa-float"
      aria-label="Chat on WhatsApp"
    >
      {/* WhatsApp SVG Icon */}
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
        <path d="M11.998 0C5.373 0 0 5.373 0 12c0 2.122.554 4.118 1.523 5.849L.057 23.404a.5.5 0 0 0 .611.612l5.665-1.475A11.948 11.948 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0h-.002z"/>
      </svg>

      {/* Tooltip */}
      <div className="absolute right-full mr-3 bg-gray-900 text-white text-xs font-semibold
                      px-3 py-2 rounded-xl whitespace-nowrap opacity-0 pointer-events-none
                      group-hover:opacity-100 transition-opacity shadow-xl">
        Chat with us!
        <div className="absolute left-full top-1/2 -translate-y-1/2 border-4 border-transparent border-l-gray-900" />
      </div>
    </a>
  );
}
