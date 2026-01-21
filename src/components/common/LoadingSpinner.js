import React from 'react';
import './LoadingSpinner.css';

/**
 * Loading Spinner Component
 * @param {string} size - Size of spinner (sm, md, lg)
 * @param {string} message - Optional loading message
 */
const LoadingSpinner = ({ size = 'md', message = 'Loading...' }) => {
    const sizeClass = {
        sm: 'spinner-sm',
        md: 'spinner-md',
        lg: 'spinner-lg',
    }[size];

    return (
        <div className="loading-spinner-container">
            <div className={`spinner-border text-primary ${sizeClass}`} role="status">
                <span className="visually-hidden">{message}</span>
            </div>
            {message && <p className="loading-message mt-3">{message}</p>}
        </div>
    );
};

export default LoadingSpinner;
