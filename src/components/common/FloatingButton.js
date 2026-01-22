import React from 'react';
import { FaPhone } from 'react-icons/fa';

const FloatingButton = () => {
    return (
        <a
            href="tel:+966123456789"
            className="position-fixed d-flex align-items-center justify-content-center bg-primary text-white shadow-lg"
            style={{
                bottom: '30px',
                right: '30px',
                width: '60px',
                height: '60px',
                borderRadius: '50%',
                zIndex: 1000,
                textDecoration: 'none',
                transition: 'transform 0.3s ease'
            }}
            onMouseEnter={(e) => e.target.style.transform = 'scale(1.1)'}
            onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
            aria-label="Call Us"
        >
            <FaPhone size={24} />
        </a>
    );
};

export default FloatingButton;
