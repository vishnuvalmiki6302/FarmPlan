import CropCard from './CropCard';

const CROPS = [
  {
    emoji: '🏝️',
    name: 'Tropical Fruits',
    description: 'Precision layouts for Mango, Banana, Pineapple, Sapota, and Jackfruit.',
    color: 'lime',
  },
  {
    emoji: '☀️',
    name: 'Sub-tropical',
    description: 'Expert designs for Guava, Fig, Citrus, Pomegranate, Bael, and Date-palm.',
    color: 'green',
  },
  {
    emoji: '❄️',
    name: 'Temperate Fruits',
    description: 'Specialized spacing for Apple, Pear, Peach, Plum, and Cherry.',
    color: 'emerald',
  },
  {
    emoji: '🥜',
    name: 'Nut Crops',
    description: 'Blueprint planning for Almond, Walnut, Pecan, and Hazelnut.',
    color: 'teal',
  },
  {
    emoji: '🥥',
    name: 'Plantation Crops',
    description: 'Orchard-style layouts for Coconut, Cashew, and Cocoa.',
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
          <h2 className="section-title mb-4">Our Fruit Crop Layout Specializations</h2>
          <div className="h-1.5 w-20 bg-green-500 mx-auto rounded-full" />
          <p className="mt-5 text-gray-500 text-base max-w-xl mx-auto leading-relaxed">
            From tropical bananas to exotic dragon fruit — we design precision orchard layouts
            tailored to each fruit crop's unique growth and spacing requirements.
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
