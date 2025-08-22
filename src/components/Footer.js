import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaTwitter, FaYelp } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark text-white py-5">
      <style jsx>{`
        .hover-effect {
          transition: all 0.3s ease;
        }
        .hover-effect:hover {
          color: #e74c3c !important;
          transform: translateY(-2px);
        }
        .hover-link {
          transition: all 0.3s ease;
          position: relative;
        }
        .hover-link:hover {
          color: #e74c3c !important;
          padding-left: 5px;
        }
        .hover-link::before {
          content: '';
          position: absolute;
          width: 0;
          height: 2px;
          bottom: -2px;
          left: 0;
          background-color: #e74c3c;
          transition: width 0.3s ease;
        }
        .hover-link:hover::before {
          width: 100%;
        }
        .g-2 > * {
          padding-right: 0.5rem !important;
          padding-left: 0.5rem !important;
        }
        @media (max-width: 768px) {
          .g-2 > * {
            padding-right: 0.25rem !important;
            padding-left: 0.25rem !important;
          }
        }
      `}</style>
      <div className="container">
        <div className="row g-4">
          {/* About Section */}
          <div className="col-lg-6 col-md-6">
            <h5 className="text-uppercase mb-4 text-white">Bella Vita</h5>
            <p className="mb-4">Experience authentic Italian cuisine with international influences in a warm and welcoming atmosphere.</p>
            <div className="mt-4">
              <a href="#!" className="text-white me-3 hover-effect">
                <FaFacebook size={24} />
              </a>
              <a href="#!" className="text-white me-3 hover-effect">
                <FaInstagram size={24} />
              </a>
              <a href="#!" className="text-white me-3 hover-effect">
                <FaTwitter size={24} />
              </a>
              <a href="#!" className="text-white hover-effect">
                <FaYelp size={24} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-lg-6 col-md-6">
            <h5 className="text-uppercase mb-4 text-white">Quick Links</h5>
            <div className="row g-2">
              <div className="col-6">
                <ul className="list-unstyled">
                  <li className="mb-2">
                    <Link to="/" className="text-white text-decoration-none hover-link">Home</Link>
                  </li>
                  <li className="mb-2">
                    <Link to="/menu" className="text-white text-decoration-none hover-link">Menu</Link>
                  </li>
                  <li className="mb-2">
                    <Link to="/cart" className="text-white text-decoration-none hover-link">Cart</Link>
                  </li>
                </ul>
              </div>
              <div className="col-6">
                <ul className="list-unstyled">
                  <li className="mb-2">
                    <Link to="/reservations" className="text-white text-decoration-none hover-link">Reservations</Link>
                  </li>
                  <li className="mb-2">
                    <Link to="/about" className="text-white text-decoration-none hover-link">About Us</Link>
                  </li>
                  <li className="mb-2">
                    <Link to="/contact" className="text-white text-decoration-none hover-link">Contact</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>


        </div>

        <hr className="my-4" />

        {/* Copyright */}
        <div className="row">
          <div className="col-md-6 text-center text-md-start">
            <p className="mb-0">&copy; {currentYear} Bella Vita. All rights reserved.</p>
          </div>
          <div className="col-md-6 text-center text-md-end">
            <Link to="/privacy-policy" className="text-white text-decoration-none me-3">
              Privacy Policy
            </Link>
            <Link to="/terms-of-service" className="text-white text-decoration-none">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
