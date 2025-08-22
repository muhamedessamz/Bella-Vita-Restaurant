import React from 'react';
import { Link } from 'react-router-dom';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaArrowRight } from 'react-icons/fa';

const ContactCTA = () => {
  return (
    <section className="contact-cta py-5" style={{
      background: 'linear-gradient(135deg, #2c3e50 0%, #34495e 30%, #e74c3c 100%)',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Background Pattern */}
      <div className="position-absolute top-0 start-0 w-100 h-100" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        backgroundSize: '60px 60px'
      }}></div>

      <div className="container position-relative">
        <div className="row justify-content-center">
          <div className="col-lg-8 col-xl-6">
            <div className="text-center text-white">
              {/* Logo */}
              <div className="mb-4">
                <div className="bg-white rounded-circle d-inline-flex align-items-center justify-content-center shadow-lg"
                     style={{
                       width: '100px',
                       height: '100px',
                       border: '3px solid rgba(255,255,255,0.9)'
                     }}>
                  <img
                    src="/images/logo.png"
                    alt="Bella Vita Logo"
                    style={{
                      width: '60px',
                      height: '60px',
                      objectFit: 'contain'
                    }}
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'block';
                    }}
                  />
                  <FaEnvelope
                    className="text-primary"
                    size={40}
                    style={{ display: 'none' }}
                  />
                </div>
              </div>

              {/* Content */}
              <h2 className="h2 fw-bold mb-3" style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: '2.5rem',
                textShadow: '0 2px 4px rgba(0,0,0,0.3)'
              }}>
                Get in Touch with Us
              </h2>

              <p className="lead mb-4 opacity-90" style={{
                fontSize: '1.2rem',
                lineHeight: '1.6',
                maxWidth: '500px',
                margin: '0 auto 2rem'
              }}>
                Have questions about our menu, want to make a reservation, or need directions?
                We're here to help make your dining experience unforgettable.
              </p>

              {/* CTA Button */}
              <Link
                to="/contact"
                className="btn btn-light btn-lg px-5 py-3 d-inline-flex align-items-center gap-3 shadow-lg"
                style={{
                  borderRadius: '50px',
                  fontWeight: '600',
                  fontSize: '1.1rem',
                  textDecoration: 'none',
                  transition: 'all 0.3s ease',
                  color: '#2c3e50',
                  border: '2px solid rgba(255,255,255,0.8)'
                }}
                onMouseEnter={(e) => {
                  e.target.style.transform = 'translateY(-3px) scale(1.05)';
                  e.target.style.boxShadow = '0 15px 35px rgba(0,0,0,0.2)';
                  e.target.style.backgroundColor = '#ffffff';
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = 'translateY(0) scale(1)';
                  e.target.style.boxShadow = '0 8px 25px rgba(0,0,0,0.15)';
                  e.target.style.backgroundColor = '#f8f9fa';
                }}
              >
                <FaEnvelope size={20} />
                Contact Us Now
                <FaArrowRight size={18} />
              </Link>


            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;
