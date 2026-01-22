import React from 'react';
import { Link } from 'react-router-dom';
import { FaUtensils, FaCalendarAlt } from 'react-icons/fa';

const HeroSection = () => {
  return (
    <section className="hero-section position-relative text-white">
      <div className="position-relative" style={{ height: '100vh' }}>
        {/* Background Image */}
        <div
          className="position-absolute top-0 start-0 w-100 h-100"
          style={{
            backgroundImage: 'url(/images/home.jpeg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'brightness(0.7)'
          }}
        ></div>

        {/* Content Overlay */}
        <div className="container position-relative h-100 d-flex align-items-center justify-content-center">
          <div className="row justify-content-center text-center w-100">
            <div className="col-lg-10 col-xl-8">
              <h1 className="display-1 fw-bold mb-4 text-white" style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: 'clamp(3.5rem, 10vw, 6rem)',
                letterSpacing: '-1px'
              }}>
                Bella Vita
              </h1>
              <p className="lead mb-5 text-white text-center" style={{
                fontSize: 'clamp(1.1rem, 2.5vw, 1.5rem)',
                fontFamily: "'Inter', sans-serif",
                fontWeight: '300',
                opacity: '0.9',
                maxWidth: '500px',
                margin: '0 auto 3rem'
              }}>
                Authentic Italian flavors. Unforgettable moments.
              </p>
              <div className="d-flex justify-content-center">
                <Link to="/menu" className="btn btn-lg px-5 py-3" style={{
                  backgroundColor: '#fff',
                  color: '#2c3e50',
                  borderRadius: '50px',
                  fontWeight: '600',
                  fontSize: '1rem',
                  textDecoration: 'none',
                  transition: 'all 0.3s ease',
                  border: 'none',
                  boxShadow: '0 4px 15px rgba(0,0,0,0.1)'
                }}
                  onMouseEnter={(e) => {
                    e.target.style.transform = 'translateY(-2px)';
                    e.target.style.boxShadow = '0 6px 20px rgba(0,0,0,0.15)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.transform = 'translateY(0)';
                    e.target.style.boxShadow = '0 4px 15px rgba(0,0,0,0.1)';
                  }}>
                  View Menu
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style>{`
        .hero-section {
          min-height: 100vh;
          overflow: hidden;
        }
        @media (max-width: 767.98px) {
          .hero-section .btn {
            width: 100%;
            margin-bottom: 10px;
          }
          .hero-section h1 {
            font-size: 2.5rem;
          }
          .hero-section .lead {
            font-size: 1.1rem;
          }
        }
        .btn-outline-light:hover {
          color: #000 !important;
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
