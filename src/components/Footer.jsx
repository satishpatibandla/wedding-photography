import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container footer-container">
                <div className="footer-logo">
                    <h2>Bhagi Photography</h2>
                    <p>Capturing the soul of Andhra traditions.</p>
                </div>
                <div className="footer-links">
                    <h3>Quick Links</h3>
                    <ul>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#portfolio">Portfolio</a></li>
                        <li><a href="#services">Services</a></li>
                    </ul>
                </div>
                <div className="footer-contact">
                    <h3>Contact</h3>
                    <p>Hyderabad, Telangana</p>
                    <p>+91 8197997246</p>
                    <p>hello@bhagiphotography.com</p>
                </div>
            </div>
            <div className="footer-bottom text-center">
                <p>&copy; {new Date().getFullYear()} Bhagi Photography. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
