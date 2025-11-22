import React from 'react';
import '../styles/VideoShowcase.css';

const VideoShowcase = () => {
    return (
        <section id="video" className="video-section">
            <div className="container">
                <div className="section-header text-center">
                    <span className="subtitle">Cinematic Films</span>
                    <h2 className="section-title">Chalanachitralu</h2>
                </div>

                <div className="video-container">
                    <div className="video-wrapper">
                        <iframe
                            src="https://www.youtube.com/embed/jDGETw3YAHc?start=25"
                            title="Wedding Highlight Video"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default VideoShowcase;
