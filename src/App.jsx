import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Stats from './components/Stats';
import Gallery from './components/Gallery';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import VideoShowcase from './components/VideoShowcase';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Loading from './components/Loading';
import WhatsAppButton from './components/WhatsAppButton';
import BackToTop from './components/BackToTop';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './App.css';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });

    // Simulate loading time
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="app">
      {loading ? <Loading /> : (
        <>
          <Navbar />
          <Hero />
          <About />
          <Stats />
          <VideoShowcase />
          <Gallery />
          <Services />
          <Testimonials />
          <FAQ />
          <Contact />
          <Footer />
          <WhatsAppButton />
          <BackToTop />
        </>
      )}
    </div>
  );
}

export default App;
