import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaShoppingCart, FaTrash, FaPlus, FaMinus, FaArrowLeft } from 'react-icons/fa';
import { useCart } from '../context/CartContext';
import menuData from '../data/menuData';

// Image resolver for cart page
const getImageForCartItem = (cartItem) => {
  if (!cartItem) return null;

  // First check if item already has a valid local image
  if (cartItem.image && cartItem.image.startsWith('/images/')) {
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
        return found.image;
      }
    }
  } catch (_) {}

  return null;
};


const Cart = () => {
  const { items, removeFromCart, updateQuantity, getCartTotal, clearCart } = useCart();

  const handleQuantityChange = (itemId, newQuantity) => {
    if (newQuantity <= 0) {
      removeFromCart(itemId);
    } else {
      updateQuantity(itemId, newQuantity);
    }
  };

  if (items.length === 0) {
    return (
      <div style={{ paddingTop: '100px' }}>
        <div className="container py-5">
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <FaShoppingCart size={80} className="text-muted mb-4" />
                <h2 className="mb-3">Your Cart is Empty</h2>
                <p className="text-muted mb-4">
                  Looks like you haven't added any items to your cart yet.
                </p>
                <Link
                  to="/menu"
                  className="btn btn-primary btn-lg"
                  style={{
                    backgroundColor: '#e74c3c',
                    border: 'none',
                    borderRadius: '25px',
                    padding: '12px 30px',
                    fontWeight: '600'
                  }}
                >
                  <FaArrowLeft className="me-2" />
                  Browse Menu
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div style={{ paddingTop: '100px' }}>
      <div className="container py-5">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
        <div className="row">
          <div className="col-lg-8">
            <div className="d-flex justify-content-between align-items-center mb-4">
              <h2 className="mb-0">Shopping Cart</h2>
              <button
                className="btn btn-outline-danger"
                onClick={clearCart}
                style={{ borderRadius: '20px' }}
              >
                Clear All
              </button>
            </div>

            <div className="card border-0 shadow-sm" style={{ borderRadius: '20px' }}>
              <div className="card-body p-0">
                {items.map((item, index) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className={`p-4 ${index !== items.length - 1 ? 'border-bottom' : ''}`}
                  >
                    <div className="row align-items-center">
                      <div className="col-md-2">
                        <img
                          src={getImageForCartItem(item)}
                          alt={item.name}
                          className="rounded"
                          style={{
                            width: '80px',
                            height: '80px',
                            objectFit: 'cover',
                            backgroundColor: '#f8f9fa'
                          }}
                          onError={(e) => {
                            console.error(`❌ Failed to load image for ${item.name}: ${e.target.src}`);
                            // Force reload with a different approach
                            const newSrc = getImageForCartItem(item);
                            if (newSrc && newSrc !== e.target.src) {
                              e.target.src = newSrc;
                            }
                          }}
                        />
                        />
                      </div>

                      <div className="col-md-4">
                        <h5 className="mb-1">{item.name}</h5>
                        <p className="text-muted mb-0">${item.price.toFixed(2)} each</p>
                      </div>

                      <div className="col-md-3">
                        <div className="d-flex align-items-center gap-3">
                          <button
                            className="btn btn-outline-secondary rounded-circle"
                            style={{ width: '40px', height: '40px', padding: '0' }}
                            onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                          >
                            <FaMinus style={{ fontSize: '12px' }} />
                          </button>

                          <span className="fw-bold fs-5 px-3">{item.quantity}</span>

                          <button
                            className="btn btn-outline-secondary rounded-circle"
                            style={{ width: '40px', height: '40px', padding: '0' }}
                            onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                          >
                            <FaPlus style={{ fontSize: '12px' }} />
                          </button>
                        </div>
                      </div>

                      <div className="col-md-2 text-end">
                        <div className="fw-bold fs-5 mb-2">
                          ${(item.price * item.quantity).toFixed(2)}
                        </div>
                        <button
                          className="btn btn-outline-danger rounded-circle"
                          style={{ width: '40px', height: '40px', padding: '0' }}
                          onClick={() => removeFromCart(item.id)}
                        >
                          <FaTrash style={{ fontSize: '12px' }} />
                        </button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          <div className="col-lg-4">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="card border-0 shadow-sm sticky-top"
              style={{ borderRadius: '20px', top: '128px', marginTop: '28px' }}
            >
              <div className="card-body p-4">
                <h4 className="mb-4">Order Summary</h4>

                <div className="d-flex justify-content-between mb-3">
                  <span>Subtotal:</span>
                  <span>${getCartTotal().toFixed(2)}</span>
                </div>

                <div className="d-flex justify-content-between mb-3">
                  <span>Tax (8%):</span>
                  <span>${(getCartTotal() * 0.08).toFixed(2)}</span>
                </div>

                <div className="d-flex justify-content-between mb-3">
                  <span>Delivery Fee:</span>
                  <span>$3.99</span>
                </div>

                <hr />

                <div className="d-flex justify-content-between mb-4">
                  <span className="fw-bold fs-5">Total:</span>
                  <span className="fw-bold fs-5" style={{ color: '#e74c3c' }}>
                    ${(getCartTotal() + (getCartTotal() * 0.08) + 3.99).toFixed(2)}
                  </span>
                </div>

                <div className="d-grid gap-2">
                  <Link
                    to="/online-ordering"
                    className="btn btn-primary btn-lg"
                    style={{
                      backgroundColor: '#e74c3c',
                      border: 'none',
                      borderRadius: '25px',
                      fontWeight: '600',
                      padding: '12px'
                    }}
                  >
                    Proceed to Checkout
                  </Link>

                  <Link
                    to="/menu"
                    className="btn btn-outline-secondary"
                    style={{ borderRadius: '25px', fontWeight: '600' }}
                  >
                    Continue Shopping
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
      </div>
    </div>
  );
};

export default Cart;
