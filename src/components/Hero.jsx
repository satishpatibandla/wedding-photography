import React from 'react';
import '../styles/Hero.css';

const Hero = () => {
    return (
        <section id="home" className="hero">
            <div className="hero-overlay"></div>
            <div className="hero-content container">
                <span className="subtitle">Capturing Timeless Moments</span>
                <h1 className="title">Traditional Andhra Weddings</h1>
                <p className="description">
                    Celebrating love with the grandeur of Telugu traditions.
                    From Pellikuthuru to Jeelakarra Bellam, we preserve every emotion.
                </p>
                <a href="#contact" className="btn btn-primary">Book Your Date</a>
            </div>
        </section>
    );
};

export default Hero;
