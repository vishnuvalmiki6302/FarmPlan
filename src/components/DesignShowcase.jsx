import DesignCard from './DesignCard';
import { openWhatsApp } from '../utils/whatsapp';

const DESIGNS = [
  {
    id: 'banana',
    title: 'Banana Farm Layout',
    emoji: '🍌',
    image: 'https://png.pngtree.com/png-clipart/20220716/ourmid/pngtree-banana-yellow-fruit-banana-skewers-png-image_5944324.png',
    gradient: 'bg-gradient-to-br from-yellow-400 to-green-500',
    features: [
      'Optimized Tree Row Spacing',
      'Drip Irrigation System Design',
      'Sucker & Windbreak Management',
    ],
  },
  {
    id: 'guava',
    title: 'Guava Orchard Layout',
    emoji: '🍈',
    image: 'https://png.pngtree.com/png-vector/20250219/ourmid/pngtree-isolated-guava-fruit-one-whole-green-and-a-sliced-half-with-png-image_15504785.png',
    features: [
      'High-Density Planting Grid',
      'Furrow Irrigation Channels',
      'Canopy Path Access Design',
    ],
  },
  {
    id: 'dragon-fruit',
    title: 'Dragon Fruit Layout',
    emoji: '🌵',
    image: 'https://static.vecteezy.com/system/resources/previews/029/333/921/non_2x/dragon-fruit-transparent-background-png.png',
    gradient: 'bg-gradient-to-br from-pink-400 to-rose-600',
    features: [
      'Trellis Pole Placement Map',
      'Sunlight Row Orientation',
      'Drip Pipe Network Design',
    ],
  },
  {
    id: 'mango',
    title: 'Mango Orchard Layout',
    emoji: '🥭',
    image: 'https://png.pngtree.com/png-vector/20240125/ourmid/pngtree-sweet-mango-fruit-png-png-image_11495826.png',
    gradient: 'bg-gradient-to-br from-orange-400 to-amber-600',
    features: [
      'Orchard Spacing Optimization',
      'Inter-Crop Zone Planning',
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
            <h2 className="section-title">Featured Fruit Layout Designs</h2>
            <p className="text-gray-500 mt-3 text-base max-w-lg">
              Our latest fruit orchard blueprints — precision engineered for maximum yield on your land.
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
