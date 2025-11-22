import React, { useState } from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa';
import '../styles/FAQ.css';

const FAQ = () => {
    const faqs = [
        {
            question: "How far in advance should we book?",
            answer: "We recommend booking at least 6-9 months in advance, especially for auspicious dates (Muhurtham) which get booked very quickly."
        },
        {
            question: "Do you travel for destination weddings?",
            answer: "Yes! We love traveling. While we are based in Hyderabad, we cover weddings across Andhra Pradesh, Telangana, and beyond. Travel and accommodation charges apply."
        },
        {
            question: "When will we get our photos?",
            answer: "We deliver a sneak peek within 1 week. The full set of edited digital photos is delivered within 4-6 weeks. Albums take an additional 2-3 weeks after selection."
        },
        {
            question: "Do you provide traditional videography?",
            answer: "Yes, our packages include both traditional videography and cinematic wedding films (teasers/highlights)."
        }
    ];

    const [activeIndex, setActiveIndex] = useState(null);

    const toggleFAQ = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <section id="faq" className="faq-section">
            <div className="container">
                <div className="section-header text-center">
                    <span className="subtitle">Common Questions</span>
                    <h2 className="section-title">Prashnalu (FAQ)</h2>
                </div>

                <div className="faq-container">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className={`faq-item ${activeIndex === index ? 'active' : ''}`}
                            onClick={() => toggleFAQ(index)}
                        >
                            <div className="faq-question">
                                <h3>{faq.question}</h3>
                                <span className="faq-icon">
                                    {activeIndex === index ? <FaMinus /> : <FaPlus />}
                                </span>
                            </div>
                            <div className="faq-answer">
                                <p>{faq.answer}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;
