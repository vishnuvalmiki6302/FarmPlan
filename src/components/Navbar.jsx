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
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${scrolled
        ? 'bg-white/95 backdrop-blur-md shadow-sm shadow-green-900/5 border-b border-gray-100'
        : 'bg-transparent'
        }`}
    >
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 md:px-10 py-2">
        {/* Logo */}
        <button
          onClick={() => handleNavClick('#home')}
          className="flex items-center gap-2 hover:opacity-80 transition-opacity"
          id="nav-logo"
          aria-label="Rythu Margadarshi Home"
        >
          <img src="src/Assets/Logo.png" alt="Rythu Margadarshi Logo" className="h-10 w-auto" />
        </button>

        {/* Desktop Links & Socials */}
        <div className="hidden md:flex items-center gap-8">
          <div className="flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <button
                key={link.href}
                id={`nav-link-${link.label.toLowerCase()}`}
                onClick={() => handleNavClick(link.href)}
                className={`font-medium text-sm transition-all duration-200 relative group ${activeLink === link.href
                  ? 'text-green-600'
                  : 'text-gray-600 hover:text-green-600'
                  }`}
              >
                {link.label}
                <span
                  className={`absolute -bottom-1 left-0 h-0.5 bg-green-600 rounded-full transition-all duration-200 ${activeLink === link.href ? 'w-full' : 'w-0 group-hover:w-full'
                    }`}
                />
              </button>
            ))}
          </div>

          {/* Social Media Icons Div */}
          <div className="flex items-center gap-4 border-l border-gray-200 pl-8 ml-4">
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-pink-600 transition-colors transform hover:scale-110"
              aria-label="Instagram"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>
            <a
              href="https://www.youtube.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-red-600 transition-colors transform hover:scale-110"
              aria-label="YouTube"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
              </svg>
            </a>
          </div>
        </div>

        {/* CTA Button */}
        <div className="hidden md:block ml-4">
          <button
            id="nav-cta-btn"
            onClick={() => openWhatsApp('Hi, I want to know more about Rythu Margadarshi Design Services.')}
            className="bg-green-600 text-white px-5 py-2 rounded-full font-semibold text-sm
                       shadow-lg shadow-green-600/20 hover:bg-green-700 hover:shadow-green-600/30
                       active:scale-95 transition-all duration-200 flex items-center gap-2"
          >
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
        className={`md:hidden bg-white border-t border-gray-100 shadow-lg overflow-hidden transition-all duration-300 ${menuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
      >
        <div className="px-6 py-4 flex flex-col gap-4">
          {NAV_LINKS.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNavClick(link.href)}
              className={`text-left font-medium py-2 border-b border-gray-50 last:border-0 transition-colors ${activeLink === link.href ? 'text-green-600' : 'text-gray-700 hover:text-green-600'
                }`}
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => {
              openWhatsApp('Hi, I want to know more about Rythu Margadarshi Design Services.');
              setMenuOpen(false);
            }}
            className="bg-green-600 text-white py-3 rounded-xl font-semibold text-sm mt-2
                       flex items-center justify-center gap-2"
          >
            Book via WhatsApp
          </button>

          {/* Mobile Socials */}
          <div className="flex items-center justify-center gap-6 py-4 border-t border-gray-50 mt-2">
            <a href="https://www.instagram.com/crop.stories/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-pink-600">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>
            <a href="https://www.youtube.com/@cropstories99" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-red-600">
              <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
