import React, { useState, useEffect, useRef } from 'react';
import '../styles/Stats.css';

const Stats = () => {
    const [counts, setCounts] = useState({ weddings: 0, clients: 0, years: 0, awards: 0 });
    const [hasAnimated, setHasAnimated] = useState(false);
    const statsRef = useRef(null);

    const finalCounts = {
        weddings: 500,
        clients: 450,
        years: 10,
        awards: 15
    };

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting && !hasAnimated) {
                    setHasAnimated(true);
                    animateCounters();
                }
            },
            { threshold: 0.3 }
        );

        if (statsRef.current) {
            observer.observe(statsRef.current);
        }

        return () => observer.disconnect();
    }, [hasAnimated]);

    const animateCounters = () => {
        const duration = 2000;
        const steps = 60;
        const stepDuration = duration / steps;

        let currentStep = 0;

        const interval = setInterval(() => {
            currentStep++;
            const progress = currentStep / steps;

            setCounts({
                weddings: Math.floor(finalCounts.weddings * progress),
                clients: Math.floor(finalCounts.clients * progress),
                years: Math.floor(finalCounts.years * progress),
                awards: Math.floor(finalCounts.awards * progress)
            });

            if (currentStep >= steps) {
                clearInterval(interval);
                setCounts(finalCounts);
            }
        }, stepDuration);
    };

    return (
        <section className="stats-section" ref={statsRef}>
            <div className="traditional-border-top"></div>
            <div className="container">
                <div className="stats-grid">
                    <div className="stat-item" data-aos="fade-up" data-aos-delay="0">
                        <div className="stat-number">{counts.weddings}+</div>
                        <div className="stat-label">Weddings Captured</div>
                        <div className="stat-label-telugu">వివాహాలు</div>
                    </div>
                    <div className="stat-item" data-aos="fade-up" data-aos-delay="100">
                        <div className="stat-number">{counts.clients}+</div>
                        <div className="stat-label">Happy Clients</div>
                        <div className="stat-label-telugu">సంతోషకరమైన క్లయింట్లు</div>
                    </div>
                    <div className="stat-item" data-aos="fade-up" data-aos-delay="200">
                        <div className="stat-number">{counts.years}+</div>
                        <div className="stat-label">Years Experience</div>
                        <div className="stat-label-telugu">సంవత్సరాల అనుభవం</div>
                    </div>
                    <div className="stat-item" data-aos="fade-up" data-aos-delay="300">
                        <div className="stat-number">{counts.awards}+</div>
                        <div className="stat-label">Awards Won</div>
                        <div className="stat-label-telugu">అవార్డులు</div>
                    </div>
                </div>
            </div>
            <div className="traditional-border-bottom"></div>
        </section>
    );
};

export default Stats;
