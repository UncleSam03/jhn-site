import React, { useState } from 'react';
import { Phone, Mail, CheckCircle2, Home, Hammer, Droplets, MapPin, ArrowRight, Instagram, Facebook, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import BeforeAfterSlider from './components/BeforeAfterSlider';

// Import images (Vite will handle these)
import before1 from './assets/images/WhatsApp Image 2026-02-11 at 09.22.07.jpeg';
import after1 from './assets/images/WhatsApp Image 2026-02-11 at 09.22.08.jpeg';
import before2 from './assets/images/WhatsApp Image 2026-02-11 at 09.22.04.jpeg';
import after2 from './assets/images/WhatsApp Image 2026-02-11 at 09.22.05.jpeg';
import heroImg from './assets/images/h.jpeg';

// Import new batch of images
import before3 from './assets/images/1000954432.jpg';
import after3 from './assets/images/1000954433.jpg';
import before4 from './assets/images/1000954434.jpg';
import after4 from './assets/images/1000954435.jpg';
import before5 from './assets/images/1000954503.jpg';
import after5 from './assets/images/1000954504.jpg';
import before6 from './assets/images/1000954514.jpg';
import after6 from './assets/images/1000954512.jpg';
import before7 from './assets/images/1000954515.jpg';
import after7 from './assets/images/1000954516.jpg';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showMoreShowcase, setShowMoreShowcase] = useState(false);

  const softServices = [
    "Garden Maintenance", "Grass Planting", "Grass Cutting",
    "Grass Treatment", "Artificial Grass", "Hedge Planting",
    "Hedge Cutting", "Tree Planting", "Tree Cutting"
  ];

  const hardServices = [
    "Asphalt", "Tarmac", "Patio", "Paving",
    "Gravel Driveways", "Restoration & Jet Washing",
    "Fencing & Brickwork", "Natural Stone Walls", "Porcelain"
  ];


  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className="app">
      {/* Navigation */}
      <nav className="glass-nav">
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '80px' }}>
          <div className="logo" style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'var(--primary)', zIndex: 1001 }}>
            JHN <span style={{ color: 'var(--accent)' }}>CONSTRUCTION</span>
          </div>

          {/* Desktop Nav */}
          <div className="nav-links desktop-only" style={{ display: 'flex', gap: '2rem' }}>
            <a href="#home">Home</a>
            <a href="#services">Services</a>
            <a href="#showcase">Showcase</a>
            <a href="#contact">Contact</a>
          </div>

          <div className="desktop-only nav-cta">
            <a href="tel:0870558733" className="btn btn-primary" style={{ padding: '0.6rem 1.5rem' }}>Call Now</a>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="mobile-only menu-toggle" onClick={toggleMenu} style={{ zIndex: 1001 }}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        <div className={`mobile-menu mobile-only ${isMenuOpen ? 'open' : ''}`}>
          <a href="#home" onClick={toggleMenu}>Home</a>
          <a href="#services" onClick={toggleMenu}>Services</a>
          <a href="#showcase" onClick={toggleMenu}>Showcase</a>
          <a href="#contact" onClick={toggleMenu}>Contact</a>
          <a href="tel:0870558733" className="btn btn-primary" style={{ textAlign: 'center' }}>Call Now</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero" style={{
        position: 'relative',
        minHeight: '90vh',
        display: 'flex',
        alignItems: 'center',
        background: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${heroImg}) center/cover`
      }}>
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            style={{ maxWidth: '700px', color: 'var(--white)' }}
          >
            <h1 style={{ fontSize: '4.5rem', marginBottom: '1rem' }}>Paving JHN Construction</h1>
            <p style={{ fontSize: '1.2rem', marginBottom: '2rem', opacity: 0.9 }}>
              Premium Landscaping & Construction Services. Transforming your outdoor spaces into masterpieces with Irish craftmanship.
            </p>
            <div className="hero-buttons" style={{ display: 'flex', gap: '1rem' }}>
              <a href="#contact" className="btn btn-accent">Explore Services</a>
              <a href="#showcase" className="btn btn-primary" style={{ border: '1px solid var(--white)' }}>View Our Work</a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="services">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 style={{ fontSize: '3rem', color: 'var(--primary)' }}>Our Expertise</h2>
            <div style={{ width: '80px', height: '4px', background: 'var(--accent)', margin: '1rem auto' }}></div>
          </div>

          <div className="services-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '3rem' }}>
            {/* Soft Landscaping */}
            <motion.div
              whileHover={{ y: -10 }}
              style={{ background: 'var(--white)', padding: '3rem', borderRadius: '20px', boxShadow: 'var(--shadow-lg)' }}
            >
              <div style={{ background: '#E7F2EE', width: '60px', height: '60px', borderRadius: '15px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem' }}>
                <Droplets color="var(--primary)" size={32} />
              </div>
              <h3 style={{ fontSize: '1.8rem', marginBottom: '1.5rem' }}>Soft Landscaping</h3>
              <ul style={{ display: 'grid', gap: '0.8rem' }}>
                {softServices.map((s, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                    <CheckCircle2 size={18} color="var(--primary)" />
                    <span>{s}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Hard Landscaping */}
            <motion.div
              whileHover={{ y: -10 }}
              style={{ background: 'var(--white)', padding: '3rem', borderRadius: '20px', boxShadow: 'var(--shadow-lg)' }}
            >
              <div style={{ background: '#FDF7E7', width: '60px', height: '60px', borderRadius: '15px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem' }}>
                <Hammer color="var(--accent)" size={32} />
              </div>
              <h3 style={{ fontSize: '1.8rem', marginBottom: '1.5rem' }}>Hard Landscaping</h3>
              <ul style={{ display: 'grid', gap: '0.8rem' }}>
                {hardServices.map((s, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                    <CheckCircle2 size={18} color="var(--accent)" />
                    <span>{s}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Showcase Section */}
      <section id="showcase" style={{ background: 'var(--secondary)', color: 'var(--white)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 style={{ fontSize: '3rem' }}>Work Showcase</h2>
            <p style={{ opacity: 0.7, marginTop: '1rem' }}>Slide to see the transformation of our recent projects</p>
          </div>

          <div className="showcase-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '4rem' }}>
            <div style={{ display: 'grid', gap: '1.5rem' }}>
              <BeforeAfterSlider before={before1} after={after1} />
              <h4 style={{ fontSize: '1.4rem' }}>Garden Transformation</h4>
              <p style={{ opacity: 0.8 }}>Complete overhaul including lawn restoration and patio integration.</p>
            </div>
            <div style={{ display: 'grid', gap: '1.5rem' }}>
              <BeforeAfterSlider before={before2} after={after2} />
              <h4 style={{ fontSize: '1.4rem' }}>Landscape Structural Work</h4>
              <p style={{ opacity: 0.8 }}>New drainage, retaining walls, and premium porcelain paving.</p>
            </div>
          </div>

          <AnimatePresence>
            {showMoreShowcase && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                style={{ overflow: 'hidden' }}
              >
                <div className="showcase-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '4rem', marginTop: '4rem' }}>
                  <div style={{ display: 'grid', gap: '1.5rem' }}>
                    <BeforeAfterSlider before={before3} after={after3} />
                    <h4 style={{ fontSize: '1.4rem' }}>Driveway Restoration</h4>
                    <p style={{ opacity: 0.8 }}>Complete cleaning and re-sanding of paving blocks.</p>
                  </div>
                  <div style={{ display: 'grid', gap: '1.5rem' }}>
                    <BeforeAfterSlider before={before4} after={after4} />
                    <h4 style={{ fontSize: '1.4rem' }}>Kerbing & Edging</h4>
                    <p style={{ opacity: 0.8 }}>Precision kerbing for a clean, professional finish.</p>
                  </div>
                  <div style={{ display: 'grid', gap: '1.5rem' }}>
                    <BeforeAfterSlider before={before5} after={after5} />
                    <h4 style={{ fontSize: '1.4rem' }}>Patio Excellence</h4>
                    <p style={{ opacity: 0.8 }}>High-gloss porcelain finish with integrated drainage.</p>
                  </div>
                  <div style={{ display: 'grid', gap: '1.5rem' }}>
                    <BeforeAfterSlider before={before6} after={after6} />
                    <h4 style={{ fontSize: '1.4rem' }}>Commercial Paving</h4>
                    <p style={{ opacity: 0.8 }}>Large scale paving projects with industrial durability.</p>
                  </div>
                  <div style={{ display: 'grid', gap: '1.5rem' }}>
                    <BeforeAfterSlider before={before7} after={after7} />
                    <h4 style={{ fontSize: '1.4rem' }}>Custom Stonework</h4>
                    <p style={{ opacity: 0.8 }}>Hand-laid patterns using premium natural materials.</p>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <div style={{ textAlign: 'center', marginTop: '4rem' }}>
            <button
              onClick={() => setShowMoreShowcase(!showMoreShowcase)}
              className="btn btn-accent"
              style={{ padding: '1rem 3rem', fontSize: '1.1rem' }}
            >
              {showMoreShowcase ? 'Show Less' : 'See More Projects'}
            </button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact">
        <div className="container">
          <div className="contact-card-split" style={{ background: 'var(--white)', borderRadius: '30px', overflow: 'hidden', boxShadow: 'var(--shadow-lg)', maxWidth: '600px', margin: '0 auto' }}>
            <div className="contact-info-panel" style={{ background: 'var(--primary)', color: 'var(--white)', padding: '4rem' }}>
              <h2 style={{ marginBottom: '2rem', textAlign: 'center' }}>Get in Touch</h2>
              <div style={{ display: 'grid', gap: '2rem' }}>
                <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                  <Phone color="var(--accent)" />
                  <div>
                    <p style={{ fontSize: '0.9rem', opacity: 0.7 }}>Call Us</p>
                    <a href="tel:0870558733" style={{ fontSize: '1.2rem', fontWeight: '600' }}>087 055 8733</a>
                    <br />
                    <a href="tel:0873245693" style={{ fontSize: '1.2rem', fontWeight: '600' }}>087 324 5693</a>
                  </div>
                </div>
                <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                  <Mail color="var(--accent)" />
                  <div>
                    <p style={{ fontSize: '0.9rem', opacity: 0.7 }}>Email Us</p>
                    <a href="mailto:info@jhnconstruction.com" style={{ fontSize: '1.2rem', fontWeight: '600' }}>info@jhnconstruction.com</a>
                  </div>
                </div>
                <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                  <MapPin color="var(--accent)" />
                  <div>
                    <p style={{ fontSize: '0.9rem', opacity: 0.7 }}>Location</p>
                    <p style={{ fontSize: '1.2rem', fontWeight: '600' }}>Serving Dublin & Surrounding Areas</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ background: '#0D2018', color: 'var(--white)', padding: '4rem 0 2rem' }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '2rem', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '2rem', marginBottom: '2rem' }}>
            <div className="logo" style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>
              JHN <span style={{ color: 'var(--accent)' }}>CONSTRUCTION</span>
            </div>
            <div style={{ display: 'flex', gap: '1.5rem' }}>
              <a href="#" style={{ background: 'rgba(255,255,255,0.1)', width: '40px', height: '40px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><Instagram size={20} /></a>
              <a href="#" style={{ background: 'rgba(255,255,255,0.1)', width: '40px', height: '40px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><Facebook size={20} /></a>
            </div>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem', fontSize: '0.9rem', opacity: 0.6 }}>
            <p>© 2026 JHN Construction. All rights reserved.</p>
            <div style={{ display: 'flex', gap: '2rem' }}>
              <a href="#">Privacy Policy</a>
              <a href="#">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
