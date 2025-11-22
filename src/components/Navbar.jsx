import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import '../styles/Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container container">
        <a href="#" className="logo">
          Bhagi <span>Photography</span>
        </a>

        <div className="menu-icon" onClick={toggleMenu}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>

        <ul className={`nav-menu ${isOpen ? 'active' : ''}`}>
          <li className="nav-item"><a href="#home" className="nav-link" onClick={toggleMenu}>Home</a></li>
          <li className="nav-item"><a href="#about" className="nav-link" onClick={toggleMenu}>About</a></li>
          <li className="nav-item"><a href="#portfolio" className="nav-link" onClick={toggleMenu}>Portfolio</a></li>
          <li className="nav-item"><a href="#services" className="nav-link" onClick={toggleMenu}>Services</a></li>
          <li className="nav-item"><a href="#contact" className="nav-link btn-link" onClick={toggleMenu}>Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
