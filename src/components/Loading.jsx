import React from 'react';
import '../styles/Loading.css';

const Loading = () => {
    return (
        <div className="loading-screen">
            <div className="rangoli-spinner">
                <div className="spinner-circle"></div>
                <div className="spinner-circle inner"></div>
                <div className="spinner-dot"></div>
            </div>
            <h2 className="loading-text">Bhagi Photography</h2>
        </div>
    );
};

export default Loading;
