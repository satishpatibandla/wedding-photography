import React from 'react';
import { FaInstagram } from 'react-icons/fa';
import '../styles/InstagramFeed.css';

const InstagramFeed = () => {
    // Placeholder images for Instagram feed
    const posts = [
        { id: 1, img: "https://images.unsplash.com/photo-1583934555026-17a11f6393c2?q=80&w=300&auto=format&fit=crop", link: "#" },
        { id: 2, img: "https://images.unsplash.com/photo-1606216794074-735e91aa2c92?q=80&w=300&auto=format&fit=crop", link: "#" },
        { id: 3, img: "https://images.unsplash.com/photo-1549417229-aa67d3263c09?q=80&w=300&auto=format&fit=crop", link: "#" },
        { id: 4, img: "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?q=80&w=300&auto=format&fit=crop", link: "#" },
        { id: 5, img: "https://images.unsplash.com/photo-1621621667797-e06afc217fb0?q=80&w=300&auto=format&fit=crop", link: "#" },
        { id: 6, img: "https://images.unsplash.com/photo-1595535373192-fc8935bacd89?q=80&w=300&auto=format&fit=crop", link: "#" }
    ];

    return (
        <section className="instagram-section">
            <div className="container">
                <div className="section-header text-center">
                    <span className="subtitle">Follow Us</span>
                    <h2 className="section-title">@BhagiPhotography</h2>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="insta-link">
                        <FaInstagram /> Follow on Instagram
                    </a>
                </div>

                <div className="instagram-grid">
                    {posts.map(post => (
                        <a key={post.id} href={post.link} className="insta-item" target="_blank" rel="noopener noreferrer">
                            <img src={post.img} alt="Instagram Post" />
                            <div className="insta-overlay">
                                <FaInstagram />
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default InstagramFeed;
