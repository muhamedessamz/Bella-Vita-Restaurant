import React from 'react';
import '../styles/ContentPagesFixes.css';

import { Link } from 'react-router-dom';
import { FaFileContract, FaUtensils, FaCalendarAlt, FaCreditCard, FaExclamationTriangle } from 'react-icons/fa';

const TermsOfService = () => {
  return (
    <div className="terms-of-service-page">
      {/* Hero Section */}
      <section className="py-5" style={{
        background: 'linear-gradient(135deg, #2c3e50 0%, #34495e 100%)',
        color: 'white'
      }}>
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-lg-8">
              <div className="mb-4">
                <FaFileContract size={60} className="text-white mb-3" />
              </div>
              <h1 className="display-4 fw-bold mb-3" style={{
                fontFamily: "'Playfair Display', serif"
              }}>
                Terms of Service
              </h1>
              <p className="lead mb-4">
                Please read these terms carefully before using our services or visiting our restaurant.
              </p>
              <p className="text-white-50">
                Last updated: {new Date().toLocaleDateString()}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">

              {/* Introduction */}
              <div className="mb-5">
                <h2 className="h3 fw-bold mb-3" style={{
                  fontFamily: "'Playfair Display', serif",
                  color: '#2c3e50'
                }}>
                  Welcome to Bella Vita
                </h2>
                <p style={{ color: '#2c3e50', fontSize: '1.1rem', lineHeight: '1.6', fontWeight: '500' }}>
                  These Terms of Service ("Terms") govern your use of Bella Vita Restaurant's services,
                  including dining at our restaurant, making reservations, ordering food, and using our website.
                  By using our services, you agree to these terms.
                </p>
              </div>

              {/* Restaurant Services */}
              <div className="mb-5">
                <h2 className="h3 fw-bold mb-3" style={{
                  fontFamily: "'Playfair Display', serif",
                  color: '#2c3e50'
                }}>
                  <FaUtensils style={{ color: '#e74c3c' }} className="me-2" />
                  Restaurant Services
                </h2>
                <div className="p-4 rounded shadow-sm" style={{ backgroundColor: '#f8f9fa', border: '1px solid #e9ecef' }}>
                  <h4 className="h5 fw-bold mb-3" style={{ color: '#2c3e50' }}>Dining Experience</h4>
                  <ul className="list-unstyled">
                    <li className="mb-2" style={{ color: '#2c3e50', fontWeight: '500' }}>• We strive to provide authentic Italian cuisine and exceptional service</li>
                    <li className="mb-2" style={{ color: '#2c3e50', fontWeight: '500' }}>• Menu items and prices are subject to change without notice</li>
                    <li className="mb-2" style={{ color: '#2c3e50', fontWeight: '500' }}>• We accommodate dietary restrictions when possible with advance notice</li>
                    <li className="mb-2" style={{ color: '#2c3e50', fontWeight: '500' }}>• Outside food and beverages are not permitted</li>
                  </ul>
                </div>
              </div>

              {/* Reservations */}
              <div className="mb-5">
                <h2 className="h3 fw-bold mb-3" style={{
                  fontFamily: "'Playfair Display', serif",
                  color: '#2c3e50'
                }}>
                  <FaCalendarAlt style={{ color: '#e74c3c' }} className="me-2" />
                  Reservation Policy
                </h2>
                <div className="row g-4">
                  <div className="col-md-6">
                    <div className="bg-white p-4 rounded shadow-sm" style={{ border: '2px solid #28a745' }}>
                      <h4 className="h5 fw-bold mb-3" style={{ color: '#28a745' }}>Booking Terms</h4>
                      <ul className="list-unstyled">
                        <li className="mb-2" style={{ color: '#2c3e50', fontWeight: '500' }}>• Reservations are held for 15 minutes past the reserved time</li>
                        <li className="mb-2" style={{ color: '#2c3e50', fontWeight: '500' }}>• Large parties (8+ people) may require a deposit</li>
                        <li className="mb-2" style={{ color: '#2c3e50', fontWeight: '500' }}>• Special occasions can be accommodated with advance notice</li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="bg-white p-4 rounded shadow-sm" style={{ border: '2px solid #ffc107' }}>
                      <h4 className="h5 fw-bold mb-3" style={{ color: '#e67e22' }}>Cancellation Policy</h4>
                      <ul className="list-unstyled">
                        <li className="mb-2" style={{ color: '#2c3e50', fontWeight: '500' }}>• Cancel at least 2 hours before your reservation</li>
                        <li className="mb-2" style={{ color: '#2c3e50', fontWeight: '500' }}>• No-shows may be charged a cancellation fee</li>
                        <li className="mb-2" style={{ color: '#2c3e50', fontWeight: '500' }}>• Same-day cancellations may incur charges</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Payment Terms */}
              <div className="mb-5">
                <h2 className="h3 fw-bold mb-3" style={{
                  fontFamily: "'Playfair Display', serif",
                  color: '#2c3e50'
                }}>
                  <FaCreditCard style={{ color: '#e74c3c' }} className="me-2" />
                  Payment Terms
                </h2>
                <div className="bg-info bg-opacity-10 p-4 rounded">
                  <div className="row g-3">
                    <div className="col-md-6">
                      <h5 className="fw-bold">Accepted Payments</h5>
                      <p className="text-muted mb-0">We accept cash, all major credit cards, and digital payments</p>
                    </div>
                    <div className="col-md-6">
                      <h5 className="fw-bold">Service Charge</h5>
                      <p className="text-muted mb-0">A 15% service charge may be added to parties of 6 or more</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Liability */}
              <div className="mb-5">
                <h2 className="h3 fw-bold mb-3" style={{
                  fontFamily: "'Playfair Display', serif",
                  color: '#2c3e50'
                }}>
                  <FaExclamationTriangle style={{ color: '#e74c3c' }} className="me-2" />
                  Liability and Disclaimers
                </h2>
                <div className="alert alert-warning">
                  <h5 className="fw-bold">Important Notice</h5>
                  <p className="mb-2">
                    Please inform us of any food allergies or dietary restrictions. While we take precautions,
                    we cannot guarantee that our food is completely free from allergens.
                  </p>
                  <p className="mb-0">
                    Bella Vita Restaurant is not liable for any allergic reactions or dietary-related incidents.
                  </p>
                </div>
              </div>

              {/* Conduct */}
              <div className="mb-5">
                <h2 className="h3 fw-bold mb-3" style={{
                  fontFamily: "'Playfair Display', serif",
                  color: '#2c3e50'
                }}>
                  Guest Conduct
                </h2>
                <div className="bg-light p-4 rounded">
                  <p className="text-muted mb-3">
                    We maintain a family-friendly environment and reserve the right to refuse service to anyone who:
                  </p>
                  <ul className="list-unstyled">
                    <li className="mb-2">• Displays disruptive or inappropriate behavior</li>
                    <li className="mb-2">• Is under the influence of alcohol or substances</li>
                    <li className="mb-2">• Violates our dress code or restaurant policies</li>
                    <li className="mb-2">• Engages in discriminatory or offensive conduct</li>
                  </ul>
                </div>
              </div>

              {/* Intellectual Property */}
              <div className="mb-5">
                <h2 className="h3 fw-bold mb-3" style={{
                  fontFamily: "'Playfair Display', serif",
                  color: '#2c3e50'
                }}>
                  Intellectual Property
                </h2>
                <p className="text-muted">
                  All content on our website, including text, images, logos, and recipes, is the property of
                  Bella Vita Restaurant and is protected by copyright and trademark laws. Unauthorized use is prohibited.
                </p>
              </div>

              {/* Changes to Terms */}
              <div className="mb-5">
                <h2 className="h3 fw-bold mb-3" style={{
                  fontFamily: "'Playfair Display', serif",
                  color: '#2c3e50'
                }}>
                  Changes to Terms
                </h2>
                <div className="bg-primary bg-opacity-10 p-4 rounded">
                  <p className="mb-0">
                    We reserve the right to modify these Terms of Service at any time. Changes will be effective
                    immediately upon posting on our website. Your continued use of our services constitutes
                    acceptance of the modified terms.
                  </p>
                </div>
              </div>

              {/* Contact Information */}
              <div className="mb-5">
                <h2 className="h3 fw-bold mb-3" style={{
                  fontFamily: "'Playfair Display', serif",
                  color: '#2c3e50'
                }}>
                  Questions About These Terms
                </h2>
                <div className="bg-light p-4 rounded">
                  <p className="mb-3">
                    If you have any questions about these Terms of Service, please contact us:
                  </p>
                  <div className="row g-3">
                    <div className="col-md-6">
                      <strong>Email:</strong> legal@bellavita.com
                    </div>
                    <div className="col-md-6">
                      <strong>Phone:</strong> +966 12 345 6789
                    </div>
                  </div>
                </div>
              </div>

              {/* Back to Home */}
              <div className="text-center">
                <Link to="/" className="btn btn-primary btn-lg px-5 py-3" style={{
                  backgroundColor: '#e74c3c',
                  borderColor: '#e74c3c',
                  borderRadius: '50px',
                  fontWeight: '600',
                  textDecoration: 'none'
                }}>
                  Back to Home
                </Link>
              </div>

            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TermsOfService;
