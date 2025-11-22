import React from 'react';
import '../styles/Services.css';

const Services = () => {
    const services = [
        {
            title: "Pre-Wedding",
            price: "Starts at ₹50,000",
            features: ["4 Hour Session", "2 Locations", "20 Edited Photos", "Digital Album"],
            icon: "✨"
        },
        {
            title: "Wedding Day",
            price: "Starts at ₹1,50,000",
            features: ["Full Day Coverage", "Candid & Traditional", "Cinematic Teaser", "Premium Photo Album"],
            icon: "💍"
        },
        {
            title: "Post-Wedding",
            price: "Starts at ₹40,000",
            features: ["3 Hour Session", "Outdoor Shoot", "15 Edited Photos", "Canvas Print"],
            icon: "🌸"
        }
    ];

    return (
        <section id="services" className="services-section">
            <div className="container">
                <div className="section-header text-center">
                    <span className="subtitle">Our Services</span>
                    <h2 className="section-title">సేవలు (Photography Packages)</h2>
                </div>

                <div className="services-grid">
                    {services.map((service, index) => (
                        <div key={index} className="service-card">
                            <div className="service-icon">{service.icon}</div>
                            <h3>{service.title}</h3>
                            <div className="price">{service.price}</div>
                            <ul className="features-list">
                                {service.features.map((feature, idx) => (
                                    <li key={idx}>{feature}</li>
                                ))}
                            </ul>
                            <button className="btn btn-card">Inquire Now</button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
