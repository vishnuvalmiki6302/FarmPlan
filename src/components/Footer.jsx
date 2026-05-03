import { openWhatsApp } from '../utils/whatsapp';

const QUICK_LINKS = ['Home', 'Designs', 'About', 'Contact'];
const CROP_LINKS = ['Potato Layout', 'Banana Layout', 'Rice Layout', 'Vegetable Layout', 'Mixed Crops'];

export default function Footer() {
  const scrollTo = (id) => {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 text-gray-400" id="footer">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 py-16">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <img src="src/Assets/Logo.png" alt="Rythu Margadarshi Logo" className="h-14 w-auto brightness-0 invert" />
            </div>
            <p className="text-sm text-gray-400 leading-relaxed mb-6">
              Leading the way in precision agricultural design. We help farmers grow better,
              faster, and smarter through expert layout planning.
            </p>
            {/* Social / Contact Icons */}
            <div className="flex gap-3">
              <button
                onClick={() => openWhatsApp('Hi, I want to know about Rythu Margadarshi Design Services.')}
                className="w-9 h-9 bg-green-600 rounded-full flex items-center justify-center hover:bg-green-500 transition-colors"
                aria-label="WhatsApp"
              >
                <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                  <path d="M11.998 0C5.373 0 0 5.373 0 12c0 2.122.554 4.118 1.523 5.849L.057 23.404a.5.5 0 0 0 .611.612l5.665-1.475A11.948 11.948 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0h-.002z"/>
                </svg>
              </button>
              <a
                href="mailto:contact@rythumargadarshi.com"
                className="w-9 h-9 bg-gray-700 rounded-full flex items-center justify-center hover:bg-gray-600 transition-colors"
                aria-label="Email"
              >
                <svg className="w-4 h-4 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-5">Quick Links</h4>
            <ul className="space-y-3">
              {QUICK_LINKS.map((link) => (
                <li key={link}>
                  <button
                    onClick={() => scrollTo(`#${link.toLowerCase()}`)}
                    className="text-gray-400 text-sm hover:text-green-400 transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-green-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Crop Layouts */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-5">Crop Layouts</h4>
            <ul className="space-y-3">
              {CROP_LINKS.map((link) => (
                <li key={link}>
                  <button
                    onClick={() => openWhatsApp(`Hi, I want to know about ${link}.`)}
                    className="text-gray-400 text-sm hover:text-green-400 transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-green-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-5">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-sm text-gray-400">
                <div className="w-8 h-8 bg-green-900/50 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <p className="text-gray-500 text-xs mb-0.5">WhatsApp</p>
                  <a href="tel:+919999999999" className="text-gray-300 hover:text-green-400 transition-colors font-medium">
                    +91 99999 99999
                  </a>
                </div>
              </li>

              <li className="flex items-center gap-3 text-sm text-gray-400">
                <div className="w-8 h-8 bg-green-900/50 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="text-gray-500 text-xs mb-0.5">Email</p>
                  <a href="mailto:contact@rythumargadarshi.com" className="text-gray-300 hover:text-green-400 transition-colors font-medium">
                    contact@rythumargadarshi.com
                  </a>
                </div>
              </li>

              <li className="flex items-start gap-3 text-sm text-gray-400">
                <div className="w-8 h-8 bg-green-900/50 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-4 h-4 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-gray-500 text-xs mb-0.5">Location</p>
                  <p className="text-gray-300 font-medium">Agriculture District, Maharashtra, India</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Rythu Margadarshi Design Services. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-gray-500">
            <button className="hover:text-green-400 transition-colors">Privacy Policy</button>
            <button className="hover:text-green-400 transition-colors">Terms of Service</button>
            <button
              onClick={() => openWhatsApp('Hi, I need support with Rythu Margadarshi.')}
              className="hover:text-green-400 transition-colors"
            >
              Support
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
