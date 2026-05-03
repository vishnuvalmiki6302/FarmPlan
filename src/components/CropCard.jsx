import { openWhatsApp, getBookingMessage } from '../utils/whatsapp';

/**
 * Reusable CropCard component.
 * @param {{ emoji: string, name: string, description: string, color: string }} props
 */
export default function CropCard({ emoji, name, description, color = 'green', id }) {
  const colorMap = {
    green: 'bg-green-50 text-green-700 hover:bg-green-100 border-green-100',
    emerald: 'bg-emerald-50 text-emerald-700 hover:bg-emerald-100 border-emerald-100',
    lime: 'bg-lime-50 text-lime-700 hover:bg-lime-100 border-lime-100',
    teal: 'bg-teal-50 text-teal-700 hover:bg-teal-100 border-teal-100',
    cyan: 'bg-cyan-50 text-cyan-700 hover:bg-cyan-100 border-cyan-100',
  };

  const cardColors = colorMap[color] || colorMap.green;

  return (
    <div
      id={id}
      className={`flex flex-col items-center text-center p-6 rounded-2xl border shadow-sm
                  hover:shadow-card-hover hover:-translate-y-2 transition-all duration-300 cursor-pointer
                  bg-white ${cardColors.split(' ').filter(c => c.startsWith('border')).join(' ')}`}
      role="article"
    >
      {/* Icon circle */}
      <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-4 text-3xl
                       ${cardColors.split(' ').filter(c => c.startsWith('bg') || c.startsWith('text')).join(' ')}
                       transition-colors duration-200`}>
        {emoji}
      </div>

      <h3 className="text-lg font-bold text-gray-900 mb-2">{name}</h3>
      <p className="text-sm text-gray-500 leading-relaxed mb-5 flex-1">{description}</p>

      <button
        id={`crop-card-btn-${name.toLowerCase().replace(/\s+/g, '-')}`}
        onClick={() => openWhatsApp(getBookingMessage(`${name} Farm Layout`))}
        className="text-green-700 font-semibold text-sm hover:text-green-600 flex items-center gap-1
                   border border-green-200 rounded-full px-4 py-1.5 hover:bg-green-50 transition-all"
      >
        View Design
        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  );
}
