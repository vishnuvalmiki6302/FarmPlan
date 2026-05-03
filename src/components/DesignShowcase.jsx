import DesignCard from './DesignCard';
import { openWhatsApp } from '../utils/whatsapp';

const DESIGNS = [
  {
    id: 'potato',
    title: 'Potato Farm Layout',
    emoji: '🥔',
    gradient: 'bg-gradient-to-br from-amber-400 to-amber-600',
    features: [
      'Water-Efficient Ridge Irrigation',
      'Proper Row & Plant Spacing',
      'Easy Harvest Path Access',
    ],
  },
  {
    id: 'banana',
    title: 'Banana Farm Layout',
    emoji: '🍌',
    gradient: 'bg-gradient-to-br from-yellow-400 to-green-500',
    features: [
      'Wind-Resistant Tree Spacing',
      'Drip Irrigation System',
      'Sucker Management Zones',
    ],
  },
  {
    id: 'rice',
    title: 'Rice Field Layout',
    emoji: '🌾',
    gradient: 'bg-gradient-to-br from-green-400 to-teal-600',
    features: [
      'Precision Drainage Channels',
      'Bund & Terrace Optimization',
      'Transplanting Grid Layout',
    ],
  },
  {
    id: 'vegetable',
    title: 'Vegetable Farm Layout',
    emoji: '🥦',
    gradient: 'bg-gradient-to-br from-emerald-500 to-green-700',
    features: [
      'Multi-Crop Rotation Zones',
      'Raised Bed Configuration',
      'Sunlight & Shade Mapping',
    ],
  },
];

export default function DesignShowcase() {
  return (
    <section id="showcase" className="py-24 bg-gray-50/80 farm-grid-bg">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-5 mb-14">
          <div>
            <span className="section-label">Design Gallery</span>
            <h2 className="section-title">Featured Layout Designs</h2>
            <p className="text-gray-500 mt-3 text-base max-w-lg">
              Our latest blueprints for high-efficiency agriculture — precision engineered for your land.
            </p>
          </div>
          <button
            id="showcase-view-all-btn"
            onClick={() => openWhatsApp('Hi, I want to see all available farm layout designs.')}
            className="flex items-center gap-2 text-green-700 font-semibold text-sm
                       border border-green-200 rounded-full px-5 py-2.5 hover:bg-green-50
                       hover:border-green-400 transition-all self-start md:self-end"
          >
            View All Layouts
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {DESIGNS.map((design) => (
            <DesignCard key={design.id} {...design} />
          ))}
        </div>
      </div>
    </section>
  );
}
