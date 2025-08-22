import React from 'react';
import '../styles/ContentPagesFixes.css';

import { Link } from 'react-router-dom';
import { FaShieldAlt, FaUserShield, FaCookie, FaEnvelope, FaPhone } from 'react-icons/fa';

const PrivacyPolicy = () => {
  return (
    <div className="privacy-policy-page">
      {/* Hero Section */}
      <section className="py-5" style={{
        background: 'linear-gradient(135deg, #2c3e50 0%, #34495e 100%)',
        color: 'white'
      }}>
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-lg-8">
              <div className="mb-4">
                <FaShieldAlt size={60} className="text-white mb-3" />
              </div>
              <h1 className="display-4 fw-bold mb-3" style={{
                fontFamily: "'Playfair Display', serif"
              }}>
                Privacy Policy
              </h1>
              <p className="lead mb-4">
                Your privacy is important to us. Learn how we collect, use, and protect your information.
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
                  <FaUserShield style={{ color: '#e74c3c' }} className="me-2" />
                  Introduction
                </h2>
                <p style={{ color: '#2c3e50', fontSize: '1.1rem', lineHeight: '1.6', fontWeight: '500' }}>
                  At Bella Vita Restaurant, we are committed to protecting your privacy and ensuring the security
                  of your personal information. This Privacy Policy explains how we collect, use, disclose, and
                  safeguard your information when you visit our restaurant, use our website, or engage with our services.
                </p>
              </div>

              {/* Information We Collect */}
              <div className="mb-5">
                <h2 className="h3 fw-bold mb-3" style={{
                  fontFamily: "'Playfair Display', serif",
                  color: '#2c3e50'
                }}>
                  Information We Collect
                </h2>
                <div className="row g-4">
                  <div className="col-md-6">
                    <div className="p-4 rounded shadow-sm" style={{ backgroundColor: '#f8f9fa', border: '1px solid #e9ecef' }}>
                      <h4 className="h5 fw-bold mb-3" style={{ color: '#2c3e50' }}>Personal Information</h4>
                      <ul className="list-unstyled">
                        <li className="mb-2" style={{ color: '#2c3e50', fontWeight: '500' }}>• Name and contact details</li>
                        <li className="mb-2" style={{ color: '#2c3e50', fontWeight: '500' }}>• Email address and phone number</li>
                        <li className="mb-2" style={{ color: '#2c3e50', fontWeight: '500' }}>• Reservation preferences</li>
                        <li className="mb-2" style={{ color: '#2c3e50', fontWeight: '500' }}>• Dietary restrictions and allergies</li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="p-4 rounded shadow-sm" style={{ backgroundColor: '#f8f9fa', border: '1px solid #e9ecef' }}>
                      <h4 className="h5 fw-bold mb-3" style={{ color: '#2c3e50' }}>Usage Information</h4>
                      <ul className="list-unstyled">
                        <li className="mb-2" style={{ color: '#2c3e50', fontWeight: '500' }}>• Website usage and navigation</li>
                        <li className="mb-2" style={{ color: '#2c3e50', fontWeight: '500' }}>• Device and browser information</li>
                        <li className="mb-2" style={{ color: '#2c3e50', fontWeight: '500' }}>• IP address and location data</li>
                        <li className="mb-2" style={{ color: '#2c3e50', fontWeight: '500' }}>• Cookies and tracking technologies</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* How We Use Information */}
              <div className="mb-5">
                <h2 className="h3 fw-bold mb-3" style={{
                  fontFamily: "'Playfair Display', serif",
                  color: '#2c3e50'
                }}>
                  How We Use Your Information
                </h2>
                <div className="bg-white p-4 rounded shadow-sm border">
                  <div className="row g-3">
                    <div className="col-md-6">
                      <div>
                        <h5 className="fw-bold mb-2">Communication</h5>
                        <p className="text-muted mb-0">To respond to inquiries and send reservation confirmations</p>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div>
                        <h5 className="fw-bold mb-2">Service Improvement</h5>
                        <p className="text-muted mb-0">To enhance our services and customer experience</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Cookies */}
              <div className="mb-5">
                <h2 className="h3 fw-bold mb-3" style={{
                  fontFamily: "'Playfair Display', serif",
                  color: '#2c3e50'
                }}>
                  <FaCookie className="text-warning me-2" />
                  Cookies and Tracking
                </h2>
                <p className="text-muted mb-3">
                  We use cookies and similar tracking technologies to enhance your browsing experience,
                  analyze website traffic, and understand user preferences.
                </p>
                <div className="alert alert-info">
                  <strong>Cookie Types:</strong> Essential cookies for website functionality,
                  analytics cookies for usage statistics, and preference cookies to remember your settings.
                </div>
              </div>

              {/* Data Security */}
              <div className="mb-5">
                <h2 className="h3 fw-bold mb-3" style={{
                  fontFamily: "'Playfair Display', serif",
                  color: '#2c3e50'
                }}>
                  Data Security
                </h2>
                <p className="text-muted">
                  We implement appropriate technical and organizational security measures to protect your
                  personal information against unauthorized access, alteration, disclosure, or destruction.
                  However, no method of transmission over the internet is 100% secure.
                </p>
              </div>

              {/* Your Rights */}
              <div className="mb-5">
                <h2 className="h3 fw-bold mb-3" style={{
                  fontFamily: "'Playfair Display', serif",
                  color: '#2c3e50'
                }}>
                  Your Rights
                </h2>
                <div className="row g-3">
                  <div className="col-md-4">
                    <div className="text-center p-3 bg-light rounded">
                      <h5 className="fw-bold">Access</h5>
                      <p className="text-muted small mb-0">Request access to your personal data</p>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="text-center p-3 bg-light rounded">
                      <h5 className="fw-bold">Correction</h5>
                      <p className="text-muted small mb-0">Request correction of inaccurate data</p>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="text-center p-3 bg-light rounded">
                      <h5 className="fw-bold">Deletion</h5>
                      <p className="text-muted small mb-0">Request deletion of your data</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Information */}
              <div className="mb-5">
                <h2 className="h3 fw-bold mb-3" style={{
                  fontFamily: "'Playfair Display', serif",
                  color: '#2c3e50'
                }}>
                  Contact Us
                </h2>
                <div className="bg-primary bg-opacity-10 p-4 rounded">
                  <p className="mb-3">
                    If you have any questions about this Privacy Policy or our data practices, please contact us:
                  </p>
                  <div className="row g-3">
                    <div className="col-md-6">
                      <div className="d-flex align-items-center">
                        <FaEnvelope className="text-primary me-2" />
                        <span>privacy@bellavita.com</span>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="d-flex align-items-center">
                        <FaPhone className="text-primary me-2" />
                        <span>+966 12 345 6789</span>
                      </div>
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

export default PrivacyPolicy;
