import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CropCategories from './components/CropCategories';
import DesignShowcase from './components/DesignShowcase';
import AboutFounder from './components/AboutFounder';
import SocialShowcase from './components/SocialShowcase';
import CTASection from './components/CTASection';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';

export default function App() {
  return (
    <div className="min-h-screen font-sans antialiased overflow-x-hidden">
      {/* Sticky Navbar */}
      <Navbar />

      {/* Page Sections */}
      <main>
        <Hero />
        <DesignShowcase />
        <CropCategories />
        <AboutFounder />
        <SocialShowcase />
        <CTASection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating WhatsApp Button */}
      <FloatingWhatsApp />
    </div>
  );
}
