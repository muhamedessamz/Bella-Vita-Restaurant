import React, { useState } from 'react';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock, FaFacebook, FaInstagram, FaTwitter, FaArrowRight } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setError('Please fill in all required fields');
      return;
    }
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setError('');
  };

  const workingHours = [
    { day: 'Monday - Thursday', hours: '11:00 AM - 11:00 PM' },
    { day: 'Friday', hours: '10:00 AM - 12:00 AM' },
    { day: 'Saturday', hours: '10:00 AM - 10:00 PM' },
    { day: 'Sunday', hours: '12:00 PM - 10:00 PM' }
  ];

  return (
    <div className="contact-page" style={{ paddingTop: '100px' }}>
      {/* Hero Section */}
      <section className="py-5" style={{
        background: 'linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%)',
        borderBottom: '1px solid #e9ecef'
      }}>
        <div className="container">
          <div className="text-center">
            <h1 className="display-4 fw-bold mb-3" style={{
              fontFamily: "'Playfair Display', serif",
              color: '#2c3e50',
              letterSpacing: '-0.01em'
            }}>
              Contact Us
            </h1>
            <div className="mx-auto mb-4" style={{
              width: '60px',
              height: '3px',
              background: 'linear-gradient(90deg, #e74c3c, #c0392b)',
              borderRadius: '2px'
            }}></div>
            <p className="lead text-muted mb-0" style={{
              fontSize: '1.2rem',
              maxWidth: '500px',
              margin: '0 auto'
            }}>
              We'd love to hear from you. Get in touch and we'll respond as soon as possible.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-5">
        <div className="container">
          <div className="row g-4">
            <div className="col-lg-4">
              <div className="bg-light p-4 rounded">
                <h3 className="h4 fw-bold mb-4 text-center section-title" style={{
                  fontFamily: "'Playfair Display', serif",
                  color: '#2c3e50'
                }}>
                  Get in Touch
                </h3>

                {/* Contact Details */}
                <div className="mb-4">
                  <div className="text-center mb-4 p-3 bg-white rounded shadow-sm">
                    <FaMapMarkerAlt className="text-primary mb-2" size={24} />
                    <h6 className="fw-semibold mb-2 text-primary">Address</h6>
                    <p className="text-muted mb-0 small">123 Restaurant Street<br/>Riyadh, Saudi Arabia</p>
                  </div>

                  <div className="text-center mb-4 p-3 bg-white rounded shadow-sm">
                    <FaPhone className="text-primary mb-2" size={24} />
                    <h6 className="fw-semibold mb-2 text-primary">Phone</h6>
                    <p className="text-muted mb-0">+966 12 345 6789</p>
                  </div>

                  <div className="text-center mb-4 p-3 bg-white rounded shadow-sm">
                    <FaEnvelope className="text-primary mb-2" size={24} />
                    <h6 className="fw-semibold mb-2 text-primary">Email</h6>
                    <p className="text-muted mb-0">info@bellavita.com</p>
                  </div>
                </div>

                {/* Opening Hours */}
                <div className="mb-4">
                  <div className="text-center p-3 bg-white rounded shadow-sm">
                    <FaClock className="text-primary mb-2" size={24} />
                    <h6 className="fw-semibold mb-3 text-primary">Opening Hours</h6>
                    <div className="text-start">
                      {workingHours.map((item, index) => (
                        <div key={index} className="d-flex justify-content-between py-1 border-bottom border-light">
                          <span className="text-muted small">{item.day}</span>
                          <span className="fw-medium text-dark small">{item.hours}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Social Media */}
                <div className="text-center p-3 bg-white rounded shadow-sm">
                  <h6 className="fw-semibold mb-3 text-primary">Follow Us</h6>
                  <div className="d-flex justify-content-center gap-2">
                    <a href="#" className="btn btn-outline-primary btn-sm rounded-circle p-2"
                       style={{ width: '40px', height: '40px' }}
                       aria-label="Facebook">
                      <FaFacebook size={16} />
                    </a>
                    <a href="#" className="btn btn-outline-danger btn-sm rounded-circle p-2"
                       style={{ width: '40px', height: '40px' }}
                       aria-label="Instagram">
                      <FaInstagram size={16} />
                    </a>
                    <a href="#" className="btn btn-outline-info btn-sm rounded-circle p-2"
                       style={{ width: '40px', height: '40px' }}
                       aria-label="Twitter">
                      <FaTwitter size={16} />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-8">
              <div className="bg-white p-4 rounded shadow-sm border">
                <h3 className="h4 fw-bold mb-4 section-title" style={{
                  fontFamily: "'Playfair Display', serif",
                  color: '#2c3e50'
                }}>Send Us a Message</h3>
                
                {submitted ? (
                  <div className="text-center py-4">
                    <div className="text-success mb-3">
                      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20 6L9 17L4 12" stroke="#28a745" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <h4 className="text-success mb-2">Message Sent!</h4>
                    <p className="text-muted mb-3">Thank you for contacting us. We'll get back to you soon.</p>
                    <button
                      className="btn btn-outline-primary"
                      onClick={() => setSubmitted(false)}
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit}>
                    {error && (
                      <div className="alert alert-danger" role="alert">
                        {error}
                      </div>
                    )}

                    <div className="row g-4">
                      <div className="col-md-6">
                        <label htmlFor="name" className="form-label fw-bold text-start">
                          Full Name <span className="text-danger">*</span>
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          placeholder="Enter your full name"
                        />
                      </div>

                      <div className="col-md-6">
                        <label htmlFor="email" className="form-label fw-bold text-start">
                          Email Address <span className="text-danger">*</span>
                        </label>
                        <input
                          type="email"
                          className="form-control"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          placeholder="Enter your email address"
                        />
                      </div>

                      <div className="col-12">
                        <label htmlFor="subject" className="form-label fw-bold text-start">Subject</label>
                        <select
                          className="form-select"
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                        >
                          <option value="">Select a subject</option>
                          <option value="reservation">Reservation Inquiry</option>
                          <option value="menu">Menu Questions</option>
                          <option value="catering">Catering Services</option>
                          <option value="feedback">Feedback</option>
                          <option value="other">Other</option>
                        </select>
                      </div>

                      <div className="col-12">
                        <label htmlFor="message" className="form-label fw-bold text-start">
                          Message <span className="text-danger">*</span>
                        </label>
                        <textarea
                          className="form-control"
                          id="message"
                          name="message"
                          rows="5"
                          value={formData.message}
                          onChange={handleChange}
                          required
                          placeholder="Tell us how we can help you..."
                        ></textarea>
                      </div>

                      <div className="col-12">
                        <div className="text-center">
                          <button
                            type="submit"
                            className="btn btn-primary px-5 py-3"
                            style={{
                              borderRadius: '50px',
                              fontWeight: '600',
                              fontSize: '1.1rem'
                            }}
                          >
                            <FaArrowRight className="me-2" />
                            Send Message
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                )}

                {/* Map Section inside the same container */}
                <div className="mt-4 pt-4 border-top">
                  <h5 className="fw-bold mb-3" style={{
                    fontFamily: "'Playfair Display', serif",
                    color: '#2c3e50'
                  }}>
                    <FaMapMarkerAlt className="text-primary me-2" />
                    Find Us Here
                  </h5>
                  <div className="map-container" style={{ height: '300px', position: 'relative' }}>
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3624.1234567890123!2d46.6753!3d24.7136!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjTCsDQyJzQ5LjAiTiA0NsKwNDAnMzEuMSJF!5e0!3m2!1sen!2ssa!4v1234567890123!5m2!1sen!2ssa"
                      width="100%"
                      height="300"
                      style={{ border: 0, borderRadius: '8px' }}
                      allowFullScreen=""
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Bella Vita Restaurant Location"
                    ></iframe>

                    {/* Map Overlay with Quick Actions */}
                    <div className="position-absolute top-0 end-0 m-2">
                      <div className="bg-white rounded shadow-sm p-2">
                        <div className="d-flex flex-column gap-1">
                          <button
                            className="btn btn-sm btn-outline-primary d-flex align-items-center gap-1"
                            onClick={() => window.open('https://maps.google.com/?q=24.7136,46.6753', '_blank')}
                            style={{ fontSize: '11px', padding: '4px 8px' }}
                          >
                            <FaMapMarkerAlt size={10} />
                            Open
                          </button>
                          <button
                            className="btn btn-sm btn-outline-success d-flex align-items-center gap-1"
                            onClick={() => window.open('https://maps.google.com/directions/?api=1&destination=24.7136,46.6753', '_blank')}
                            style={{ fontSize: '11px', padding: '4px 8px' }}
                          >
                            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M12 2L13.09 8.26L22 9L13.09 9.74L12 16L10.91 9.74L2 9L10.91 8.26L12 2Z" fill="currentColor"/>
                            </svg>
                            Route
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <p className="text-muted mt-2 mb-0" style={{ fontSize: '14px' }}>
                    📍 123 Restaurant Street, Riyadh, Saudi Arabia
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

// Simple custom styles
const contactStyles = `
  .contact-page {
    font-family: 'Inter', sans-serif;
  }

  .contact-page .form-control:focus,
  .contact-page .form-select:focus {
    border-color: #e74c3c;
    box-shadow: 0 0 0 0.2rem rgba(231, 76, 60, 0.25);
  }

  .contact-page .btn-primary {
    background-color: #e74c3c;
    border-color: #e74c3c;
  }

  .contact-page .btn-primary:hover {
    background-color: #c0392b;
    border-color: #c0392b;
  }

  .contact-page .section-title {
    line-height: 1.2;
    margin-bottom: 1.5rem;
    padding-top: 0;
    margin-top: 0;
  }

  .contact-page .row.g-4 > div {
    display: flex;
    flex-direction: column;
  }

  .contact-page .row.g-4 > div > div {
    flex: 1;
  }

  .contact-page .map-container {
    transition: all 0.3s ease;
  }

  .contact-page .map-container:hover {
    box-shadow: 0 4px 15px rgba(0,0,0,0.1);
  }

  .contact-page .map-container iframe {
    filter: grayscale(20%);
    transition: filter 0.3s ease;
  }

  .contact-page .map-container:hover iframe {
    filter: grayscale(0%);
  }
`;

// Inject styles
if (typeof document !== 'undefined') {
  const existingStyle = document.getElementById('contact-custom-styles');
  if (existingStyle) {
    existingStyle.remove();
  }

  const styleSheet = document.createElement('style');
  styleSheet.id = 'contact-custom-styles';
  styleSheet.type = 'text/css';
  styleSheet.innerText = contactStyles;
  document.head.appendChild(styleSheet);
}

export default Contact;
