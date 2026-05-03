import { openWhatsApp, getBookingMessage } from '../utils/whatsapp';

const CHECK_ICON = (
  <svg className="w-4 h-4 text-green-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

/**
 * Reusable DesignCard component.
 * @param {{ title: string, emoji: string, features: string[], gradient: string, id: string }} props
 */
export default function DesignCard({ title, emoji, features, gradient, accentColor, id }) {
  return (
    <article
      id={id}
      className="bg-white rounded-3xl overflow-hidden shadow-card group
                 hover:shadow-card-hover hover:-translate-y-2 transition-all duration-300
                 border border-gray-100 flex flex-col"
    >
      {/* Image Placeholder */}
      <div className={`relative h-52 overflow-hidden ${gradient} flex items-center justify-center`}>
        {/* Subtle grid pattern */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: 'linear-gradient(rgba(0,0,0,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.05) 1px, transparent 1px)',
            backgroundSize: '24px 24px',
          }}
        />
        <div className="relative z-10 text-center">
          <div className="text-6xl mb-2 group-hover:scale-110 transition-transform duration-300">{emoji}</div>
          <p className="text-sm font-semibold text-white/90 bg-black/20 rounded-full px-3 py-1 backdrop-blur-sm">
            Layout Preview
          </p>
        </div>

        {/* Corner badge */}
        <div className="absolute top-4 right-4 bg-white/90 rounded-full px-3 py-1 text-xs font-bold text-green-700 backdrop-blur-sm shadow-sm">
          ✦ Featured
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-1">
        <h3 className="text-xl font-bold text-gray-900 mb-4">{title}</h3>

        {/* Feature list */}
        <ul className="space-y-2.5 mb-6 flex-1">
          {features.map((feature, i) => (
            <li key={i} className="flex items-center gap-2.5 text-sm text-gray-600">
              {CHECK_ICON}
              {feature}
            </li>
          ))}
        </ul>

        {/* Action buttons */}
        <div className="flex flex-col gap-2.5 mt-auto">
          <button
            id={`design-card-book-${id}`}
            onClick={() => openWhatsApp(getBookingMessage(title))}
            className="w-full bg-green-600 text-white py-3 rounded-xl font-semibold text-sm
                       shadow-md shadow-green-600/20 hover:bg-green-700 hover:shadow-green-600/30
                       active:scale-95 transition-all duration-200 flex items-center justify-center gap-2"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
              <path d="M11.998 0C5.373 0 0 5.373 0 12c0 2.122.554 4.118 1.523 5.849L.057 23.404a.5.5 0 0 0 .611.612l5.665-1.475A11.948 11.948 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0h-.002z"/>
            </svg>
            Book on WhatsApp
          </button>

          <button
            id={`design-card-details-${id}`}
            onClick={() => openWhatsApp(`Hi, I want to see more details about the ${title}.`)}
            className="w-full border border-gray-200 text-gray-600 py-3 rounded-xl font-semibold text-sm
                       hover:border-green-400 hover:text-green-700 hover:bg-green-50
                       active:scale-95 transition-all duration-200"
          >
            View Details
          </button>
        </div>
      </div>
    </article>
  );
}
