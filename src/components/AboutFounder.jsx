const ACHIEVEMENTS = [
  { icon: '🏅', label: 'Licensed Agricultural Engineer' },
  { icon: '🎓', label: 'BSc. Agricultural Science, Lovely Professional University' },
  { icon: '🌍', label: 'Served 500+ Farmers Across India' },
];

export default function AboutFounder() {
  return (
    <section id="about" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left — Visual */}
          <div className="relative">
            {/* Background decoration */}
            <div className="absolute -top-8 -left-8 w-48 h-48 bg-green-100 rounded-3xl -rotate-6 z-0" />
            <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-green-200 rounded-2xl rotate-12 z-0" />

            {/* Image card */}
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl shadow-green-900/10 border-4 border-white">
              <img src="src/Assets/Ranjith.webp" alt="Ranjith" className="w-full h-96 object-cover object-[center_30%]" />
            </div>

            {/* Experience badge */}
            <div className="absolute -bottom-5 left-8 z-20 bg-green-600 text-white rounded-2xl px-6 py-4 shadow-xl">
              <p className="text-3xl font-black leading-none">2+</p>
              <p className="text-xs font-bold uppercase tracking-wider opacity-90 mt-0.5">Years Experience</p>
            </div>
          </div>

          {/* Right — Content */}
          <div className="flex flex-col gap-6">
            <div>
              <span className="section-label">Meet the Founder</span>
              <h2 className="section-title mb-1">Ranjith</h2>
              <p className="text-green-600 font-semibold text-base italic">Agricultural Architicultur Management</p>
            </div>

            <p className="text-gray-600 leading-relaxed text-base">
              Passionate about modern farming and efficient land design, Ranjith has spent over 2 years
              in agricultural engineering and land management. His methodology combines traditional
              Indian farming wisdom with cutting-edge spatial data analytics to design layouts that
              genuinely transform farm productivity.
            </p>

            {/* Blockquote */}
            <blockquote className="bg-green-50 border-l-4 border-green-500 rounded-r-2xl px-6 py-5">
              <p className="text-gray-700 italic text-base leading-relaxed">
                "Our mission is to empower every farmer through data-driven land optimization,
                ensuring that every square meter of your property works for your future."
              </p>
            </blockquote>

            {/* Achievements */}
            <div className="flex flex-col gap-3 mt-2">
              {ACHIEVEMENTS.map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-9 h-9 bg-green-100 rounded-full flex items-center justify-center text-base flex-shrink-0">
                    {item.icon}
                  </div>
                  <p className="text-gray-700 font-medium text-sm">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
