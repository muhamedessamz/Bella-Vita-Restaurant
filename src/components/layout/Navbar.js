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
      const isScrolled = window.scrollY > 20;
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
    <nav className={`navbar navbar-expand-lg fixed-top ${scrolled ? 'navbar-scrolled' : ''}`}>
      <div className="container">
        <Link className="navbar-brand d-flex align-items-center me-4" to="/" onClick={closeMenu}>
          <img
            src="/images/logo.png"
            alt="Bella Vita Logo"
            style={{
              height: '45px',
              marginRight: '12px',
              borderRadius: '4px'
            }}
          />
          <span className={`fw-bold ${scrolled ? 'text-white' : 'text-white'}`} style={{ fontSize: '1.4rem', fontFamily: "'Playfair Display', serif" }}>
            Bella Vita
          </span>
        </Link>

        {/* Mobile Cart and Menu Toggle */}
        <div className="d-flex align-items-center gap-2 d-lg-none">
          <div className="mobile-cart-container">
            <CartDropdown />
          </div>
          <button
            className="navbar-toggler border-0 p-2"
            type="button"
            onClick={toggleMenu}
            aria-label="Toggle navigation"
          >
            {isOpen ? (
              <FaTimes className="text-white" style={{ fontSize: '1.5rem' }} />
            ) : (
              <FaBars className="text-white" style={{ fontSize: '1.5rem' }} />
            )}
          </button>
        </div>

        <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`} id="navbarNav">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0 align-items-center">
            {[
              { to: "/", text: "Home" },
              { to: "/menu", text: "Menu" },
              { to: "/reservations", text: "Reservations" },
              { to: "/contact", text: "Contact" }
            ].map((item) => (
              <li className="nav-item" key={item.to}>
                <NavLink
                  className="nav-link text-white text-uppercase"
                  to={item.to}
                  onClick={closeMenu}
                >
                  {item.text}
                </NavLink>
              </li>
            ))}
          </ul>

          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 align-items-center gap-2">
            {/* User Profile / Auth Buttons */}
            {user ? (
              <li className="nav-item dropdown position-relative">
                <button
                  className={`btn user-dropdown-btn d-flex align-items-center gap-2 text-white rounded-pill px-3 py-2 ${userDropdownOpen ? 'active' : ''}`}
                  onClick={() => setUserDropdownOpen(!userDropdownOpen)}
                  type="button"
                >
                  <FaUser size={14} />
                  <span style={{ fontSize: '0.9rem' }}>{user.firstName || 'Account'}</span>
                </button>

                {userDropdownOpen && (
                  <>
                    <div
                      className="position-fixed top-0 start-0 w-100 h-100"
                      style={{ zIndex: 1050, cursor: 'default' }}
                      onClick={() => setUserDropdownOpen(false)}
                    />
                    <div
                      className="dropdown-menu show position-absolute end-0 mt-3 p-2 border-0 shadow-lg"
                      style={{
                        minWidth: '220px',
                        borderRadius: '12px',
                        zIndex: 1055,
                        backgroundColor: 'white',
                        top: '100%'
                      }}
                    >
                      <div className="px-3 py-2 border-bottom mb-2">
                        <small className="text-muted d-block mb-1">Signed in as</small>
                        <div className="fw-bold text-truncate" style={{ maxWidth: '180px' }}>{user.email}</div>
                      </div>
                      <Link to="/profile" className="dropdown-item rounded py-2 d-flex align-items-center gap-2" onClick={closeMenu}>
                        <FaUser className="text-muted" /> My Profile
                      </Link>
                      <Link to="/orders" className="dropdown-item rounded py-2 d-flex align-items-center gap-2" onClick={closeMenu}>
                        <FaClipboardList className="text-muted" /> My Orders
                      </Link>
                      <div className="dropdown-divider my-2"></div>
                      <button className="dropdown-item rounded py-2 d-flex align-items-center gap-2 text-danger hover-bg-danger-light" onClick={handleLogout}>
                        <FaSignOutAlt /> Logout
                      </button>
                    </div>
                  </>
                )}
              </li>
            ) : (
              <>
                <li className="nav-item">
                  <Link to="/login" className="btn-auth-login" onClick={closeMenu}>
                    Log In
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/register" className="btn-auth-signup" onClick={closeMenu}>
                    Sign Up
                  </Link>
                </li>
              </>
            )}

            {/* Desktop Cart */}
            <li className="nav-item d-none d-lg-block ms-2">
              <CartDropdown />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
