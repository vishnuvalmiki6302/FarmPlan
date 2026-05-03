import CropCard from './CropCard';

const CROPS = [
  {
    emoji: '🥔',
    name: 'Potato',
    description: 'Optimized ridge spacing, irrigation channels, and soil aeration layouts for maximum tuber yield.',
    color: 'lime',
  },
  {
    emoji: '🍌',
    name: 'Banana',
    description: 'Precision tree spacing, windbreak planning, and drip irrigation systems for tropical climates.',
    color: 'green',
  },
  {
    emoji: '🌾',
    name: 'Rice',
    description: 'Paddy field terracing, bund design, water management, and transplanting grid layouts.',
    color: 'emerald',
  },
  {
    emoji: '🥦',
    name: 'Vegetables',
    description: 'Multi-crop rotation zones, raised bed planning, and sunlight exposure mapping for kitchen gardens.',
    color: 'teal',
  },
  {
    emoji: '🌱',
    name: 'Mixed Crops',
    description: 'Intercropping strategies, companion planting maps, and polyculture layouts for diverse farms.',
    color: 'cyan',
  },
];

export default function CropCategories() {
  return (
    <section id="categories" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Section Header */}
        <div className="text-center mb-14">
          <span className="section-label">What We Cover</span>
          <h2 className="section-title mb-4">Our Specialized Crop Layouts</h2>
          <div className="h-1.5 w-20 bg-green-500 mx-auto rounded-full" />
          <p className="mt-5 text-gray-500 text-base max-w-xl mx-auto leading-relaxed">
            From staple grains to exotic fruits — we design precision farm layouts
            tailored to each crop's unique growth requirements.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
          {CROPS.map((crop, i) => (
            <CropCard
              key={crop.name}
              id={`crop-card-${i}`}
              emoji={crop.emoji}
              name={crop.name}
              description={crop.description}
              color={crop.color}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
