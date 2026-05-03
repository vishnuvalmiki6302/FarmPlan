import { useState, useEffect } from 'react';
import { openWhatsApp } from '../utils/whatsapp';

const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'Designs', href: '#showcase' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('#home');

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href) => {
    setActiveLink(href);
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm shadow-green-900/5 border-b border-gray-100'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 md:px-10 py-4">
        {/* Logo */}
        <button
          onClick={() => handleNavClick('#home')}
          className="text-2xl font-black text-green-700 tracking-tight flex items-center gap-2 hover:text-green-600 transition-colors"
          id="nav-logo"
          aria-label="FarmLayout Home"
        >
          <span className="text-2xl">🌿</span>
          FarmLayout
        </button>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <button
              key={link.href}
              id={`nav-link-${link.label.toLowerCase()}`}
              onClick={() => handleNavClick(link.href)}
              className={`font-medium text-sm transition-all duration-200 relative group ${
                activeLink === link.href
                  ? 'text-green-600'
                  : 'text-gray-600 hover:text-green-600'
              }`}
            >
              {link.label}
              <span
                className={`absolute -bottom-1 left-0 h-0.5 bg-green-600 rounded-full transition-all duration-200 ${
                  activeLink === link.href ? 'w-full' : 'w-0 group-hover:w-full'
                }`}
              />
            </button>
          ))}
        </div>

        {/* CTA Button */}
        <div className="hidden md:block">
          <button
            id="nav-cta-btn"
            onClick={() => openWhatsApp('Hi, I want to know more about FarmLayout Design Services.')}
            className="bg-green-600 text-white px-6 py-2.5 rounded-full font-semibold text-sm
                       shadow-lg shadow-green-600/20 hover:bg-green-700 hover:shadow-green-600/30
                       active:scale-95 transition-all duration-200 flex items-center gap-2"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
              <path d="M11.998 0C5.373 0 0 5.373 0 12c0 2.122.554 4.118 1.523 5.849L.057 23.404a.5.5 0 0 0 .611.612l5.665-1.475A11.948 11.948 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0h-.002z"/>
            </svg>
            Book via WhatsApp
          </button>
        </div>

        {/* Mobile Hamburger */}
        <button
          id="nav-mobile-menu-btn"
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden p-2 rounded-lg text-gray-600 hover:text-green-600 hover:bg-green-50 transition-colors"
          aria-label="Toggle menu"
        >
          <div className="w-5 flex flex-col gap-1">
            <span className={`h-0.5 bg-current rounded transition-all ${menuOpen ? 'rotate-45 translate-y-1.5' : ''}`} />
            <span className={`h-0.5 bg-current rounded transition-all ${menuOpen ? 'opacity-0' : ''}`} />
            <span className={`h-0.5 bg-current rounded transition-all ${menuOpen ? '-rotate-45 -translate-y-1.5' : ''}`} />
          </div>
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-white border-t border-gray-100 shadow-lg overflow-hidden transition-all duration-300 ${
          menuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-6 py-4 flex flex-col gap-4">
          {NAV_LINKS.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNavClick(link.href)}
              className={`text-left font-medium py-2 border-b border-gray-50 last:border-0 transition-colors ${
                activeLink === link.href ? 'text-green-600' : 'text-gray-700 hover:text-green-600'
              }`}
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => {
              openWhatsApp('Hi, I want to know more about FarmLayout Design Services.');
              setMenuOpen(false);
            }}
            className="bg-green-600 text-white py-3 rounded-xl font-semibold text-sm mt-2
                       flex items-center justify-center gap-2"
          >
            Book via WhatsApp
          </button>
        </div>
      </div>
    </header>
  );
}
