import React from 'react';
import '../styles/About.css';
import photographerImg from '../assets/images/photographer.png';

const About = () => {
    return (
        <section id="about" className="about-section">
            <div className="container about-container">
                <div className="about-image">
                    <img src={photographerImg} alt="Photographer" loading="lazy" />
                    <div className="frame-border"></div>
                </div>
                <div className="about-content">
                    <div className="section-header">
                        <span className="subtitle">About</span>
                        <h2 className="section-title">మన గురించి (About us)</h2>
                        <p className="about-subtitle">Capturing Your Precious Moments</p>
                    </div>
                    <p>
                        Namaskaram! I am Bhagi, a photographer with a soul rooted in the rich soil of Andhra Pradesh.
                        For over a decade, I have been documenting the vibrant tapestry of Telugu weddings.
                    </p>
                    <p>
                        From the auspicious <em>Snathakam</em> to the emotional <em>Appagintalu</em>, I understand the significance of every ritual.
                        My style blends candid storytelling with the regal elegance of our heritage, ensuring your memories are as timeless as the traditions themselves.
                    </p>
                    <div className="signature">Bhagi</div>
                </div>
            </div>
        </section>
    );
};

export default About;
