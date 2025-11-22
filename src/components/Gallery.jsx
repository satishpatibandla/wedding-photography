import React, { useState } from 'react';
import '../styles/Gallery.css';
import ritualImg from '../assets/images/ritual.png';
import brideImg from '../assets/images/bride.png';
import decorImg from '../assets/images/decor.png';

const Gallery = () => {
    const [filter, setFilter] = useState('All');

    const images = [
        { src: ritualImg, category: 'Wedding', title: 'Wedding Ritual' },
        { src: brideImg, category: 'Wedding', title: 'Bride' },
        { src: "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1200&auto=format&fit=crop", category: 'Pre-Wedding', title: 'Couple' },
        { src: "https://images.unsplash.com/photo-1595535373192-fc8935bacd89?q=80&w=1200&auto=format&fit=crop", category: 'Wedding', title: 'Jewelry' },
        { src: decorImg, category: 'Decor', title: 'Decor' },
        { src: "https://images.unsplash.com/photo-1545232979-8bf68ee9b1af?q=80&w=1200&auto=format&fit=crop", category: 'Candid', title: 'Candid' },
    ];

    const filteredImages = filter === 'All' ? images : images.filter(img => img.category === filter);
    const categories = ['All', 'Wedding', 'Pre-Wedding', 'Decor', 'Candid'];

    return (
        <section id="portfolio" className="gallery-section">
            <div className="container">
                <div className="section-header text-center">
                    <span className="subtitle">Our Work</span>
                    <h2 className="section-title">Chitralu (Moments)</h2>
                </div>

                <div className="gallery-filters">
                    {categories.map(cat => (
                        <button
                            key={cat}
                            className={`filter-btn ${filter === cat ? 'active' : ''}`}
                            onClick={() => setFilter(cat)}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                <div className="gallery-grid">
                    {filteredImages.map((img, index) => (
                        <div key={index} className="gallery-item">
                            <img
                                src={img.src}
                                alt={img.title}
                                loading="lazy"
                            />
                            <div className="gallery-overlay">
                                <div className="overlay-content">
                                    <h3>{img.title}</h3>
                                    <p>{img.category}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-lg">
                    <a href="#contact" className="btn btn-primary">View Full Portfolio</a>
                </div>
            </div>
        </section>
    );
};

export default Gallery;
