import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaUtensils, FaPhoneAlt } from 'react-icons/fa';

const NotFound = () => {
  return (
    <div className="min-vh-100 d-flex align-items-center">
      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-lg-8 text-center">
            <h1 className="display-1 fw-bold text-primary">404</h1>
            <h2 className="h1 mb-4">Page Not Found</h2>
            <p className="lead mb-5">
              Oops! The page you're looking for doesn't exist or has been moved.
              Let's get you back on track.
            </p>
            
            <div className="d-flex flex-wrap justify-content-center gap-3 mb-5">
              <Link to="/" className="btn btn-primary btn-lg px-4">
                <FaHome className="me-2" />
                Back to Home
              </Link>
              <Link to="/menu" className="btn btn-outline-primary btn-lg px-4">
                <FaUtensils className="me-2" />
                View Our Menu
              </Link>
            </div>
            
            <div className="card border-0 shadow-sm p-4">
              <h3 className="h5 mb-3">Looking for something specific?</h3>
              <p className="text-muted mb-4">
                Try our search or check out these popular pages:
              </p>
              <div className="d-flex flex-wrap justify-content-center gap-3">
                <Link to="/menu" className="btn btn-sm btn-outline-secondary">Pizza</Link>
                <Link to="/menu" className="btn btn-sm btn-outline-secondary">Pasta</Link>
                <Link to="/menu" className="btn btn-sm btn-outline-secondary">Desserts</Link>
                <Link to="/reservations" className="btn btn-sm btn-outline-secondary">Reservations</Link>
                <Link to="/contact" className="btn btn-sm btn-outline-secondary">Contact Us</Link>
              </div>
            </div>
            
            <div className="mt-5">
              <p className="text-muted">
                Still can't find what you're looking for? 
                <Link to="/contact" className="text-decoration-none">Contact our team</Link> for assistance.
              </p>
              <a href="tel:+1234567890" className="d-inline-flex align-items-center text-decoration-none text-dark mt-2">
                <FaPhoneAlt className="me-2 text-primary" />
                (123) 456-7890
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
