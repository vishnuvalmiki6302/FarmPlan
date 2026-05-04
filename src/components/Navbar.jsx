import { useState, useEffect } from 'react';
import { openWhatsApp } from '../utils/whatsapp';
import logo from '../Assets/Logo.png';
import whatsappIcon from '../Assets/WhatsApp_icon.png';

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

    // Auto-update active link based on scroll position
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -70% 0px', // Focus on the top-middle part of the viewport
      threshold: 0
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveLink(`#${entry.target.id}`);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    NAV_LINKS.forEach((link) => {
      const section = document.querySelector(link.href);
      if (section) observer.observe(section);
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  const handleNavClick = (href) => {
    setActiveLink(href);
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <header
        className={`fixed left-1/2 -translate-x-1/2 z-50 transition-all duration-300 flex items-center justify-center ${scrolled
          ? 'top-4 w-[90%] md:w-[700px]'
          : 'top-6 w-[95%] md:w-[800px]'
          }`}
      >
        <div className={`w-full rounded-full transition-all duration-300 ${scrolled ? 'bg-white/80 backdrop-blur-md shadow-lg shadow-green-900/5 border border-green-100' : 'bg-white/20 backdrop-blur-md shadow-lg border border-white/30'}`}>
          <nav className="flex items-center justify-between p-2">
            {/* Logo */}
            <button
              onClick={() => handleNavClick('#home')}
              className="flex items-center justify-center bg-white rounded-full h-12 w-12 hover:scale-105 transition-transform shrink-0 shadow-sm border border-green-50"
              id="nav-logo"
              aria-label="Rythu Margadarshi Home"
            >
              <img src={logo} alt="Rythu Margadarshi Logo" className="h-6 w-auto object-contain" />
            </button>

            {/* Desktop Links */}
            <div className="hidden md:flex items-center gap-6 px-4">
              {NAV_LINKS.map((link) => (
                <button
                  key={link.href}
                  id={`nav-link-${link.label.toLowerCase()}`}
                  onClick={() => handleNavClick(link.href)}
                  className={`font-medium text-sm transition-all duration-200 relative group px-2 py-1 ${activeLink === link.href
                    ? 'text-green-700'
                    : 'text-gray-600 hover:text-green-700'
                    }`}
                >
                  {link.label}
                  <span
                    className={`absolute -bottom-1 left-1/2 -translate-x-1/2 h-0.5 bg-green-600 rounded-full transition-all duration-200 ${activeLink === link.href ? 'w-4' : 'w-0 group-hover:w-4'
                      }`}
                  />
                </button>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden md:block shrink-0">
              <button
                id="nav-cta-btn"
                onClick={() => openWhatsApp('Hi, I want to know more about Rythu Margadarshi Design Services.')}
                className="bg-green-600 text-white px-6 py-2 rounded-full font-semibold text-sm
                           hover:bg-green-700 hover:scale-105 active:scale-95 transition-all duration-200 flex items-center justify-center gap-2 h-12 shadow-md shadow-green-600/20"
              >
                <img src={whatsappIcon} alt="WhatsApp" className="w-6 h-6 rounded-full" />
                Book via WhatsApp
              </button>
            </div>

            {/* Mobile Hamburger */}
            <button
              id="nav-mobile-menu-btn"
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden p-3 rounded-full text-gray-600 hover:bg-green-50 transition-colors mr-2 shrink-0"
              aria-label="Toggle menu"
            >
              <div className="w-5 flex flex-col gap-1.5">
                <span className={`h-0.5 bg-current rounded transition-all ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
                <span className={`h-0.5 bg-current rounded transition-all ${menuOpen ? 'opacity-0' : ''}`} />
                <span className={`h-0.5 bg-current rounded transition-all ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
              </div>
            </button>
          </nav>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-green-950/20 backdrop-blur-sm transition-opacity duration-300 md:hidden ${menuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
          }`}
        onClick={() => setMenuOpen(false)}
      />

      {/* Mobile Menu Content */}
      <div
        className={`fixed top-24 left-1/2 -translate-x-1/2 w-[90%] z-40 bg-white rounded-3xl border border-green-100 shadow-2xl overflow-hidden transition-all duration-300 md:hidden ${menuOpen ? 'opacity-100 translate-y-0 visible' : 'opacity-0 -translate-y-4 invisible'
          }`}
      >
        <div className="px-6 py-6 flex flex-col gap-4">
          {NAV_LINKS.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNavClick(link.href)}
              className={`text-left font-medium py-3 text-lg transition-colors border-b border-gray-50 last:border-0 ${activeLink === link.href ? 'text-green-600' : 'text-gray-600 hover:text-green-600'
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
            className="bg-green-600 text-white py-4 rounded-2xl font-semibold text-base mt-4
                       flex items-center justify-center gap-3 w-full hover:bg-green-700 transition-colors shadow-lg shadow-green-600/20"
          >
            <img src={whatsappIcon} alt="WhatsApp" className="w-7 h-7 rounded-full" />
            Book via WhatsApp
          </button>
          
          <div className="flex justify-center gap-6 mt-4 pt-4 border-t border-gray-50">
            <a href="https://www.instagram.com/crop.stories/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-pink-600 transition-colors">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>
            <a href="https://www.youtube.com/@cropstories99" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-red-600 transition-colors">
              <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
