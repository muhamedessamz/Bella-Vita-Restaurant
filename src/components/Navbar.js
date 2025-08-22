import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import CartDropdown from './CartDropdown';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav
      className={`navbar navbar-expand-lg fixed-top ${scrolled ? 'navbar-scrolled' : ''}`}
      style={{
        backgroundColor: 'rgba(26, 26, 26, 0.95)',
        backdropFilter: 'blur(10px)',
        transition: 'all 0.3s ease-in-out',
        padding: '15px 0',
        boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
        zIndex: 9999,
        margin: 0,
        border: 'none',
        position: 'fixed',
        top: 0,
        right: 0,
        left: 0,
        width: '100%'
      }}
    >
      <div className="container">
        <Link className="navbar-brand d-flex align-items-center mx-2" to="/" onClick={closeMenu}>
          <img
            src="/images/logo.png"
            alt="Bella Vita Logo"
            style={{
              height: '40px',
              marginRight: '12px',
              borderRadius: '4px'
            }}
          />
          <span className="text-white fw-bold">Bella Vita</span>
        </Link>

        {/* Mobile Cart and Menu Toggle */}
        <div className="d-flex align-items-center gap-2 d-lg-none">
          <div className="mobile-cart-container">
            <CartDropdown />
          </div>
          <button
            className="navbar-toggler"
            type="button"
            onClick={toggleMenu}
            aria-label="Toggle navigation"
            style={{
              border: 'none',
              boxShadow: 'none',
              padding: '8px 12px'
            }}
          >
            {isOpen ? (
              <FaTimes className="text-white" style={{ fontSize: '1.8rem' }} />
            ) : (
              <FaBars className="text-white" style={{ fontSize: '1.8rem' }} />
            )}
          </button>
        </div>

        {/* Desktop Menu Toggle (hidden) */}
        <button
          className="navbar-toggler d-none"
          type="button"
          onClick={toggleMenu}
          aria-label="Toggle navigation"
        >
        </button>

        <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`} id="navbarNav">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0" style={{ gap: '10px' }}>
            {[
              { to: "/", text: "Home" },
              { to: "/menu", text: "Menu" },
              { to: "/about", text: "About Us" },
              { to: "/reservations", text: "Reservations" },
              { to: "/contact", text: "Contact" }
            ].map((item) => (
              <li className="nav-item mx-1" key={item.to}>
                <NavLink
                  className="nav-link text-white px-3 py-2"
                  to={item.to}
                  onClick={closeMenu}
                  style={({ isActive }) => ({
                    transition: 'all 0.2s ease',
                    color: isActive ? '#ffffff' : 'rgba(255, 255, 255, 0.85)',
                    textDecoration: 'none',
                    '&:hover': {
                      color: '#ffffff',
                      textDecoration: 'none'
                    }
                  })}
                >
                  {item.text}
                </NavLink>
              </li>
            ))}
            {/* Desktop Cart - only visible on large screens */}
            <li className="nav-item ms-lg-3 mt-3 mt-lg-0 d-none d-lg-block">
              <CartDropdown />
            </li>
          </ul>
        </div>
      </div>
      <style jsx>{`
        .navbar {
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
        }
        .navbar-scrolled {
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
          padding: 10px 0 !important;
        }
        .nav-link {
          font-weight: 500;
          position: relative;
        }
        .nav-link.active {
          color: #fff !important;
          font-weight: 600;
        }
        .nav-link:after {
          content: '';
          position: absolute;
          width: 0;
          height: 2px;
          bottom: 4px;
          left: 50%;
          background-color: #fff;
          transition: all 0.3s ease;
          transform: translateX(-50%);
        }
        .nav-link:hover:after,
        .nav-link.active:after {
          width: 70%;
        }
        @media (max-width: 991.98px) {
          .navbar-collapse {
            background-color: rgba(26, 26, 26, 0.98);
            margin-top: 10px;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
          }
          .nav-item {
            margin: 8px 0;
          }
          .nav-link {
            padding: 12px 16px !important;
            border-radius: 6px;
            transition: all 0.3s ease;
          }
          .nav-link:hover {
            background-color: rgba(255, 255, 255, 0.1);
          }

          /* Mobile Cart Styling */
          .mobile-cart-container {
            margin-right: 8px;
          }

          /* Ensure proper spacing between cart and menu toggle */
          .navbar-toggler {
            margin-left: 8px;
          }

          /* Make sure cart dropdown works properly on mobile */
          .dropdown-menu {
            right: 0 !important;
            left: auto !important;
            margin-top: 8px !important;
          }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
