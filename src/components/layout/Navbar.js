import React, { useState, useEffect } from 'react';
import { NavLink, Link, useNavigate } from 'react-router-dom';
import { FaBars, FaTimes, FaUser, FaSignOutAlt, FaClipboardList } from 'react-icons/fa';
import CartDropdown from '../cart/CartDropdown';
import { useAuth } from '../../context/AuthContext';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [userDropdownOpen, setUserDropdownOpen] = useState(false);
  const { user, logout } = useAuth();
  const navigate = useNavigate();

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
    setUserDropdownOpen(false);
  };

  const handleLogout = () => {
    logout();
    setUserDropdownOpen(false);
    navigate('/');
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

            {/* User Profile / Auth Buttons */}
            {user ? (
              // Logged in - show user dropdown
              <li className="nav-item dropdown ms-lg-3 mt-3 mt-lg-0">
                <button
                  className="btn btn-outline-light d-flex align-items-center gap-2"
                  style={{
                    borderRadius: '25px',
                    padding: '8px 16px',
                    fontWeight: '600',
                    fontSize: '14px',
                    border: '2px solid white',
                    backgroundColor: userDropdownOpen ? 'white' : 'transparent',
                    color: userDropdownOpen ? '#2c3e50' : 'white',
                    transition: 'all 0.3s ease'
                  }}
                  onClick={() => setUserDropdownOpen(!userDropdownOpen)}
                  type="button"
                >
                  <FaUser />
                  <span>{user.firstName || user.email}</span>
                </button>

                {userDropdownOpen && (
                  <>
                    <div
                      className="position-fixed top-0 start-0 w-100 h-100"
                      style={{ zIndex: 1050 }}
                      onClick={() => setUserDropdownOpen(false)}
                    />
                    <div
                      className="dropdown-menu show position-absolute end-0 mt-2"
                      style={{
                        minWidth: '200px',
                        borderRadius: '15px',
                        border: 'none',
                        boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
                        zIndex: 1055
                      }}
                    >
                      <div className="px-3 py-2 border-bottom">
                        <small className="text-muted">Signed in as</small>
                        <div className="fw-bold">{user.email}</div>
                      </div>
                      <Link
                        to="/profile"
                        className="dropdown-item d-flex align-items-center gap-2 py-2"
                        onClick={closeMenu}
                      >
                        <FaUser /> My Profile
                      </Link>
                      <Link
                        to="/orders"
                        className="dropdown-item d-flex align-items-center gap-2 py-2"
                        onClick={closeMenu}
                      >
                        <FaClipboardList /> My Orders
                      </Link>
                      <div className="dropdown-divider"></div>
                      <button
                        className="dropdown-item d-flex align-items-center gap-2 py-2 text-danger"
                        onClick={handleLogout}
                      >
                        <FaSignOutAlt /> Logout
                      </button>
                    </div>
                  </>
                )}
              </li>
            ) : (
              // Not logged in - show login/register buttons
              <>
                <li className="nav-item ms-lg-3 mt-3 mt-lg-0">
                  <Link
                    to="/login"
                    className="btn btn-outline-light"
                    style={{
                      borderRadius: '25px',
                      padding: '8px 20px',
                      fontWeight: '600',
                      fontSize: '14px',
                      border: '2px solid white',
                      transition: 'all 0.3s ease'
                    }}
                    onClick={closeMenu}
                  >
                    Login
                  </Link>
                </li>
                <li className="nav-item ms-lg-2 mt-3 mt-lg-0">
                  <Link
                    to="/register"
                    className="btn"
                    style={{
                      borderRadius: '25px',
                      padding: '8px 20px',
                      fontWeight: '600',
                      fontSize: '14px',
                      backgroundColor: 'white',
                      color: '#2c3e50',
                      border: '2px solid white',
                      transition: 'all 0.3s ease'
                    }}
                    onClick={closeMenu}
                  >
                    Sign Up
                  </Link>
                </li>
              </>
            )}

            {/* Desktop Cart - only visible on large screens */}
            <li className="nav-item ms-lg-3 mt-3 mt-lg-0 d-none d-lg-block">
              <CartDropdown />
            </li>
          </ul>
        </div>
      </div>
      <style>{`
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
        
        /* Auth buttons hover effects */
        .btn-outline-light:hover {
          background-color: white !important;
          color: #2c3e50 !important;
          transform: translateY(-2px);
          box-shadow: 0 4px 15px rgba(255,255,255,0.3);
        }
        
        .dropdown-item:hover {
          background-color: #f8f9fa;
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
