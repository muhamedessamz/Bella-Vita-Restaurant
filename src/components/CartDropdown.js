import React, { useState } from 'react';
import { FaShoppingCart, FaTrash, FaPlus, FaMinus } from 'react-icons/fa';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';

import menuData from '../data/menuData';

// Helper to find a reliable image for a cart item from menu data
const getImageForCartItem = (cartItem) => {
  if (!cartItem) return null;

  // Special handling for custom pizza
  if (cartItem.id && cartItem.id.startsWith('custom-pizza-')) {
    console.log(`🍕 Using custom pizza image for ${cartItem.name}`);
    return '/images/Build-Your-Perfect-Pizza.jpg';
  }

  // First check if item already has a valid local image
  if (cartItem.image && cartItem.image.startsWith('/images/')) {
    console.log(`✅ Using existing image for ${cartItem.name}: ${cartItem.image}`);
    return cartItem.image;
  }

  // Search in menu data for image by ID first, then by name
  try {
    for (const cat of menuData?.categories || []) {
      // Try to find by ID first
      let found = (cat.items || []).find(i => i.id === cartItem.id);
      if (!found) {
        // Try to find by name if ID doesn't match
        found = (cat.items || []).find(i => i.name === cartItem.name);
      }

      if (found?.image) {
        console.log(`🔍 Found image for ${cartItem.name}: ${found.image}`);
        return found.image;
      }
    }
    console.log(`⚠️ No image found for cart item: ${cartItem.name} (id: ${cartItem.id})`);
  } catch (e) {
    console.error('❌ Error finding cart item image:', e);
  }

  // Fallback for custom pizza if not caught above
  if (cartItem.name && cartItem.name.includes('Custom') && cartItem.name.includes('Pizza')) {
    console.log(`🍕 Using fallback custom pizza image for ${cartItem.name}`);
    return '/images/Build-Your-Perfect-Pizza.jpg';
  }

  return null;
};

const CartDropdown = () => {
  const { items, removeFromCart, updateQuantity, getCartTotal, getCartItemsCount, clearCart } = useCart();
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = React.useState(window.innerWidth <= 991);

  const handleQuantityChange = (itemId, newQuantity) => {
    if (newQuantity <= 0) {
      removeFromCart(itemId);
    } else {
      updateQuantity(itemId, newQuantity);
    }
  };

  const toggleDropdown = (e) => {
    e.preventDefault();
    e.stopPropagation();

    // Prevent rapid clicking that might cause state issues
    if (e.detail > 1) return;

    setIsOpen(prevState => !prevState);
  };

  const closeDropdown = () => {
    setIsOpen(false);
  };

  // Debounce function to prevent rapid state changes
  const [isToggling, setIsToggling] = React.useState(false);

  const debouncedToggle = React.useCallback((e) => {
    if (isToggling) return;

    setIsToggling(true);
    toggleDropdown(e);

    setTimeout(() => {
      setIsToggling(false);
    }, 300);
  }, [isToggling]);

  // Close dropdown when clicking outside
  React.useEffect(() => {
    const handleClickOutside = (event) => {
      if (isOpen && !event.target.closest('.dropdown')) {
        setIsOpen(false);
      }
    };

    const handleEscape = (event) => {
      if (event.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleEscape);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen]);

  // Force close dropdown if it gets stuck
  React.useEffect(() => {
    const forceCloseTimer = setTimeout(() => {
      if (isOpen) {
        // Check if dropdown is actually visible
        const dropdown = document.querySelector('.dropdown-menu.show');
        if (!dropdown) {
          setIsOpen(false);
        }
      }
    }, 100);

    return () => clearTimeout(forceCloseTimer);
  }, [isOpen]);

  // Track screen size changes
  React.useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 991);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="dropdown">
      <style jsx>{`
        .cart-button {
          user-select: none;
          -webkit-user-select: none;
          -moz-user-select: none;
          -ms-user-select: none;
        }

        .cart-button:hover:not(.active) {
          background-color: white !important;
          color: #2c3e50 !important;
          transform: translateY(-1px);
          box-shadow: 0 4px 15px rgba(0,0,0,0.2) !important;
        }

        .cart-button:active,
        .cart-button:focus {
          outline: none !important;
          box-shadow: none !important;
        }

        .cart-button.active {
          background-color: white !important;
          color: #2c3e50 !important;
        }

        .cart-button:not(.active) {
          background-color: transparent !important;
          color: white !important;
        }

        /* Prevent button from getting stuck in weird states */
        .cart-button {
          -webkit-appearance: none;
          -moz-appearance: none;
          appearance: none;
          border-style: solid !important;
          background-clip: padding-box;
        }

        .cart-button:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }

        .dropdown-menu {
          border: none;
          box-shadow: 0 10px 30px rgba(0,0,0,0.3);
          border-radius: 15px;
          overflow: hidden;
          animation: slideDown 0.3s ease;
          z-index: 1055 !important;
          background: white;
        }

        /* Mobile specific styles */
        @media (max-width: 991.98px) {
          .dropdown-menu {
            right: 0 !important;
            left: auto !important;
            margin-top: 8px !important;
            width: 320px !important;
            max-width: calc(100vw - 40px) !important;
          }

          .cart-button {
            padding: 6px 12px !important;
            font-size: 13px !important;
          }
        }

        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
      <button
        className={`btn position-relative d-flex align-items-center gap-2 cart-button ${isOpen ? 'active' : ''}`}
        style={{
          borderRadius: '25px',
          padding: isMobile ? '6px 12px' : '8px 16px',
          fontWeight: '600',
          fontSize: isMobile ? '13px' : '14px',
          border: '2px solid white',
          backgroundColor: isOpen ? 'white' : 'transparent',
          color: isOpen ? '#2c3e50' : 'white',
          transition: 'all 0.3s ease',
          outline: 'none',
          boxShadow: 'none',
          cursor: 'pointer'
        }}
        onClick={debouncedToggle}
        onMouseDown={(e) => e.preventDefault()}
        type="button"
        aria-label="Shopping Cart"
        aria-expanded={isOpen}
        disabled={isToggling}
      >
        <FaShoppingCart />
        <span>Cart</span>
        {getCartItemsCount() > 0 && (
          <span
            className="position-absolute top-0 start-100 translate-middle badge rounded-pill"
            style={{ backgroundColor: '#e74c3c', fontSize: '10px' }}
          >
            {getCartItemsCount()}
          </span>
        )}
      </button>

      {isOpen && (
        <>
          {/* Backdrop */}
          <div
            className="position-fixed top-0 start-0 w-100 h-100"
            style={{ zIndex: 1050, backgroundColor: 'rgba(0,0,0,0.1)' }}
            onClick={closeDropdown}
          ></div>

          {/* Dropdown Menu */}
          <div
            className="dropdown-menu show position-absolute end-0 mt-2 p-0"
            style={{
              width: isMobile ? '320px' : '400px',
              maxWidth: isMobile ? 'calc(100vw - 40px)' : '400px',
              maxHeight: '80vh',
              overflowY: 'auto',
              zIndex: 1055,
              borderRadius: '15px',
              border: 'none',
              boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
              right: '0',
              left: 'auto'
            }}
          >
            <div className="p-3 border-bottom">
              <div className="d-flex justify-content-between align-items-center">
                <h6 className="mb-0 fw-bold">Shopping Cart</h6>
                {items.length > 0 && (
                  <button
                    className="btn btn-sm btn-outline-danger"
                    onClick={clearCart}
                    style={{ borderRadius: '15px' }}
                  >
                    Clear All
                  </button>
                )}
              </div>
            </div>

            <div style={{ overflowY: 'visible' }}>
              {items.length === 0 ? (
                <div className="text-center py-4">
                  <FaShoppingCart className="text-muted mb-2" size={40} />
                  <p className="text-muted mb-0">Your cart is empty</p>
                </div>
              ) : (
                items.map((item) => (
                  <div key={item.id} className="p-3 border-bottom">
                    <div className="d-flex align-items-center gap-3">
                      <div style={{ width: '60px', height: '60px' }}>
                        <img
                          src={getImageForCartItem(item)}
                          alt={item.name}
                          className="rounded"
                          style={{
                            width: '60px',
                            height: '60px',
                            objectFit: 'cover',
                            backgroundColor: '#f8f9fa'
                          }}
                          onLoad={(e) => {
                            console.log(`✅ Successfully loaded image for ${item.name}: ${e.target.src}`);
                          }}
                          onError={(e) => {
                            console.error(`❌ Failed to load image for ${item.name}: ${e.target.src}`);
                            console.log(`Item details:`, item);
                            // Try to get image again
                            const newSrc = getImageForCartItem(item);
                            console.log(`Retry with: ${newSrc}`);
                            if (newSrc && newSrc !== e.target.src) {
                              e.target.src = newSrc;
                            } else if (item.id && item.id.startsWith('custom-pizza-')) {
                              // Ensure custom pizza always gets the right image
                              e.target.src = '/images/Build-Your-Perfect-Pizza.jpg';
                            } else {
                              // Hide the broken image
                              e.target.style.display = 'none';
                            }
                          }}
                        />
                      </div>

                      <div className="flex-grow-1">
                        <h6 className="mb-1" style={{ fontSize: '14px' }}>{item.name}</h6>
                        <p className="text-muted mb-2" style={{ fontSize: '12px' }}>
                          ${item.price.toFixed(2)} each
                        </p>

                        <div className="d-flex align-items-center gap-2">
                          <button
                            className="btn btn-sm btn-outline-secondary rounded-circle"
                            style={{ width: '30px', height: '30px', padding: '0' }}
                            onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                          >
                            <FaMinus style={{ fontSize: '10px' }} />
                          </button>

                          <span className="fw-bold px-2">{item.quantity}</span>

                          <button
                            className="btn btn-sm btn-outline-secondary rounded-circle"
                            style={{ width: '30px', height: '30px', padding: '0' }}
                            onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                          >
                            <FaPlus style={{ fontSize: '10px' }} />
                          </button>
                        </div>
                      </div>

                      <div className="text-center">
                        <div className="fw-bold mb-2">
                          ${(item.price * item.quantity).toFixed(2)}
                        </div>
                        <div className="d-flex justify-content-center">
                          <button
                            className="btn btn-sm btn-outline-danger rounded-circle"
                            style={{ width: '30px', height: '30px', padding: '0' }}
                            onClick={() => removeFromCart(item.id)}
                          >
                            <FaTrash style={{ fontSize: '10px' }} />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            {items.length > 0 && (
              <div className="p-3">
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <span className="fw-bold">Total:</span>
                  <span className="fw-bold fs-5" style={{ color: '#e74c3c' }}>
                    ${getCartTotal().toFixed(2)}
                  </span>
                </div>

                <div className="d-grid gap-2">
                  <Link
                    to="/cart"
                    className="btn btn-primary"
                    style={{
                      backgroundColor: '#e74c3c',
                      border: 'none',
                      borderRadius: '25px',
                      fontWeight: '600'
                    }}
                    onClick={closeDropdown}
                  >
                    View Cart
                  </Link>
                  <Link
                    to="/online-ordering"
                    className="btn btn-outline-primary"
                    style={{
                      borderColor: '#e74c3c',
                      color: '#e74c3c',
                      borderRadius: '25px',
                      fontWeight: '600'
                    }}
                    onClick={closeDropdown}
                  >
                    Checkout
                  </Link>
                </div>
              </div>
            )}
          </div>
        </>
      )}

      <style jsx>{`
        .cart-button:hover {
          background-color: white !important;
          color: #2c3e50 !important;
        }
        .cart-button:hover span,
        .cart-button:hover svg {
          color: #2c3e50 !important;
        }
        .dropdown-menu .btn:hover,
        .dropdown-menu .btn:focus {
          color: #fff !important;
        }
      `}</style>
    </div>
  );
};

export default CartDropdown;
