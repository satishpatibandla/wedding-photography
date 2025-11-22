import React, { useState } from 'react';
import { FaQuoteLeft, FaStar, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import '../styles/Testimonials.css';

const Testimonials = () => {
    const testimonials = [
        {
            id: 1,
            name: "Sravani & Krishna",
            location: "Vijayawada",
            image: "https://images.unsplash.com/photo-1621621667797-e06afc217fb0?q=80&w=200&auto=format&fit=crop",
            text: "Bhagi captured our wedding so beautifully! The photos bring back all the emotions from that day. Highly recommended for anyone looking for traditional Andhra style photography.",
            rating: 5
        },
        {
            id: 2,
            name: "Priya & Arjun",
            location: "Hyderabad",
            image: "https://images.unsplash.com/photo-1595535373192-fc8935bacd89?q=80&w=200&auto=format&fit=crop",
            text: "The team was very professional and patient. They knew exactly when to capture the candid moments. The album quality is top-notch!",
            rating: 5
        },
        {
            id: 3,
            name: "Deepthi & Rahul",
            location: "Visakhapatnam",
            image: "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=200&auto=format&fit=crop",
            text: "We loved how they incorporated our family traditions into the shots. The pre-wedding shoot at Araku was magical. Thank you Bhagi!",
            rating: 5
        }
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const nextTestimonial = () => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    };

    const prevTestimonial = () => {
        setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    return (
        <section id="testimonials" className="testimonials-section">
            <div className="container">
                <div className="section-header text-center">
                    <span className="subtitle">Words of Love</span>
                    <h2 className="section-title">Preminchina Maata</h2>
                </div>

                <div className="testimonial-carousel">
                    <button className="nav-btn prev" onClick={prevTestimonial}><FaChevronLeft /></button>

                    <div className="testimonial-card">
                        <div className="quote-icon"><FaQuoteLeft /></div>
                        <p className="testimonial-text">{testimonials[currentIndex].text}</p>
                        <div className="rating">
                            {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                                <FaStar key={i} className="star-icon" />
                            ))}
                        </div>
                        <div className="client-info">
                            <img src={testimonials[currentIndex].image} alt={testimonials[currentIndex].name} className="client-img" />
                            <div>
                                <h4>{testimonials[currentIndex].name}</h4>
                                <p className="location">{testimonials[currentIndex].location}</p>
                            </div>
                        </div>
                    </div>

                    <button className="nav-btn next" onClick={nextTestimonial}><FaChevronRight /></button>
                </div>

                <div className="carousel-dots">
                    {testimonials.map((_, index) => (
                        <span
                            key={index}
                            className={`dot ${index === currentIndex ? 'active' : ''}`}
                            onClick={() => setCurrentIndex(index)}
                        ></span>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
