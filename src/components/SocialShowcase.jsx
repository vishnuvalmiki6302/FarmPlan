import React from 'react';

const SOCIALS = [
  {
    id: 'instagram',
    name: 'Instagram',
    handle: 'crop.stories',
    description: 'Daily tips on farm layout, orchard management, and agricultural engineering.',
    color: 'from-purple-600 via-pink-600 to-orange-500',
    icon: (
      <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
      </svg>
    ),
    url: 'https://www.instagram.com/crop.stories/',
    actionText: 'Follow on Instagram',
  },
  {
    id: 'youtube',
    name: 'YouTube',
    handle: 'Crop Stories',
    description: 'In-depth farm layout walkthroughs, drone footage of completed projects, and farming vlogs.',
    color: 'from-red-600 to-red-700',
    icon: (
      <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
        <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
      </svg>
    ),
    url: 'https://www.youtube.com/@cropstories99',
    actionText: 'Subscribe on YouTube',
  },
];

export default function SocialShowcase() {
  return (
    <section className="py-20 bg-gray-50/50">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
          <div className="text-center lg:text-left max-w-lg">
            <span className="section-label !mb-2 uppercase tracking-[0.2em] text-green-600 font-bold">Video Gallery</span>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4 leading-tight">
              Watch Our Success <span className="text-green-600">Videos</span>
            </h2>
            <p className="text-gray-500 text-base leading-relaxed">
              We regularly post real-world success stories, drone walkthroughs, and 
              farm layout explanations. Check our latest posts and follow us for updates.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-5">
            {SOCIALS.map((social) => (
              <a
                key={social.id}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-5 bg-white px-7 py-5 rounded-[2rem] shadow-sm border border-gray-100 
                           hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group min-w-[280px]"
              >
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${social.color} 
                                flex items-center justify-center text-white shadow-lg
                                group-hover:scale-110 transition-transform duration-500`}>
                  {React.cloneElement(social.icon, { className: 'w-8 h-8' })}
                </div>
                <div>
                  <p className="text-[10px] font-bold text-green-600 uppercase tracking-widest leading-none mb-2 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                    New Videos
                  </p>
                  <p className="text-lg font-black text-gray-900 leading-none mb-1">
                    {social.handle}
                  </p>
                  <p className="text-xs text-gray-400 font-medium group-hover:text-green-600 transition-colors">
                    Watch Success Stories →
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
