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
              <h1 className="display-2 fw-bold mb-4 text-white" style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: 'clamp(3rem, 8vw, 5rem)',
                textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
                letterSpacing: '2px'
              }}>
                Bella Vita
              </h1>
              <div className="divider mx-auto mb-4" style={{
                width: '100px',
                height: '4px',
                background: 'linear-gradient(90deg, transparent, #e74c3c, transparent)',
                borderRadius: '2px'
              }}></div>
              <p className="lead mb-5 text-white text-center" style={{
                fontSize: 'clamp(1.2rem, 3vw, 1.8rem)',
                fontFamily: "'Inter', sans-serif",
                fontWeight: '300',
                textShadow: '1px 1px 2px rgba(0,0,0,0.7)',
                lineHeight: '1.4',
                maxWidth: '600px',
                margin: '0 auto 3rem'
              }}>
                Experience the <span style={{ color: '#e74c3c', fontWeight: '500' }}>Authentic Taste</span> of Italy
                <br />
                <small style={{ fontSize: '0.9em', opacity: '0.9', color: 'white' }}>
                  Where tradition meets culinary excellence
                </small>
              </p>
              <div className="d-flex gap-3 justify-content-center flex-column flex-md-row align-items-center">
                <Link to="/menu" className="btn btn-lg px-5 py-3" style={{
                  backgroundColor: '#e74c3c',
                  borderColor: '#e74c3c',
                  color: 'white',
                  borderRadius: '50px',
                  fontWeight: '600',
                  fontSize: '1.1rem',
                  textDecoration: 'none',
                  transition: 'all 0.3s ease',
                  boxShadow: '0 4px 15px rgba(231, 76, 60, 0.3)'
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = '#c0392b';
                  e.target.style.transform = 'translateY(-2px)';
                  e.target.style.boxShadow = '0 8px 25px rgba(231, 76, 60, 0.4)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = '#e74c3c';
                  e.target.style.transform = 'translateY(0)';
                  e.target.style.boxShadow = '0 4px 15px rgba(231, 76, 60, 0.3)';
                }}>
                  <FaUtensils className="me-2" /> View Menu
                </Link>
                <Link to="/reservations" className="btn btn-outline-light btn-lg px-5 py-3" style={{
                  borderColor: 'rgba(255,255,255,0.8)',
                  color: 'white',
                  borderRadius: '50px',
                  fontWeight: '600',
                  fontSize: '1.1rem',
                  textDecoration: 'none',
                  transition: 'all 0.3s ease',
                  borderWidth: '2px'
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = 'white';
                  e.target.style.color = '#2c3e50';
                  e.target.style.transform = 'translateY(-2px)';
                  e.target.style.boxShadow = '0 8px 25px rgba(255,255,255,0.3)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = 'transparent';
                  e.target.style.color = 'white';
                  e.target.style.transform = 'translateY(0)';
                  e.target.style.boxShadow = 'none';
                }}>
                  <FaCalendarAlt className="me-2" /> Make a Reservation
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
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
