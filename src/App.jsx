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

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formStatus, setFormStatus] = useState('idle'); // idle, submitting, success, error
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

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

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus('submitting');

    // REPLACE WITH YOUR FORMSPREE ID
    const FORMSPREE_ID = 'PLACEHOLDER';

    try {
      const response = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setFormStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setFormStatus('error');
      }
    } catch (error) {
      setFormStatus('error');
    }
  };

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
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact">
        <div className="container">
          <div className="contact-card-split" style={{ background: 'var(--white)', borderRadius: '30px', overflow: 'hidden', boxShadow: 'var(--shadow-lg)', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
            <div className="contact-info-panel" style={{ background: 'var(--primary)', color: 'var(--white)', padding: '4rem' }}>
              <h2 style={{ marginBottom: '2rem' }}>Get in Touch</h2>
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
            <div className="contact-form-panel" style={{ padding: '4rem' }}>
              <h3 style={{ marginBottom: '2rem' }}>Send a Message</h3>

              {formStatus === 'success' ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  style={{ textAlign: 'center', padding: '2rem', background: '#E7F2EE', borderRadius: '15px' }}
                >
                  <CheckCircle2 color="var(--primary)" size={48} style={{ marginBottom: '1rem' }} />
                  <h4 style={{ color: 'var(--primary)' }}>Message Sent!</h4>
                  <p>We'll get back to you as soon as possible.</p>
                  <button onClick={() => setFormStatus('idle')} className="btn btn-primary" style={{ marginTop: '1.5rem' }}>Send Another</button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: 'grid', gap: '1.5rem' }}>
                  <input
                    name="name"
                    type="text"
                    placeholder="Full Name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    style={{ width: '100%', padding: '1rem', borderRadius: '10px', border: '1px solid #ddd' }}
                  />
                  <input
                    name="email"
                    type="email"
                    placeholder="Email Address"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    style={{ width: '100%', padding: '1rem', borderRadius: '10px', border: '1px solid #ddd' }}
                  />
                  <textarea
                    name="message"
                    placeholder="Tell us about your project"
                    rows="4"
                    required
                    value={formData.message}
                    onChange={handleInputChange}
                    style={{ width: '100%', padding: '1rem', borderRadius: '10px', border: '1px solid #ddd', resize: 'none' }}
                  ></textarea>

                  {formStatus === 'error' && (
                    <p style={{ color: '#e74c3c', fontSize: '0.9rem' }}>Something went wrong. Please try again or call us.</p>
                  )}

                  <button
                    type="submit"
                    className="btn btn-primary"
                    disabled={formStatus === 'submitting'}
                    style={{ width: '100%', position: 'relative' }}
                  >
                    {formStatus === 'submitting' ? 'Sending...' : 'Send Message'}
                  </button>
                </form>
              )}
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
