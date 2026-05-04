import { openWhatsApp } from '../utils/whatsapp';
import whatsappIcon from '../Assets/WhatsApp_icon.png';

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
      {/* WhatsApp Image Icon */}
      <img src={whatsappIcon} alt="WhatsApp" className="w-10 h-10 rounded-full" />

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
