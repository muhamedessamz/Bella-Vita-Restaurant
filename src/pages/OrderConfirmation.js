import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaCheckCircle, FaReceipt, FaClock, FaHome } from 'react-icons/fa';

const OrderConfirmation = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const order = location.state?.order;

    // Redirect if no order data
    React.useEffect(() => {
        if (!order) {
            navigate('/');
        }
    }, [order, navigate]);

    if (!order) {
        return null;
    }

    const getOrderTypeText = (type) => {
        switch (type) {
            case 0: return 'Dine In';
            case 1: return 'Takeaway';
            case 2: return 'Delivery';
            default: return 'Unknown';
        }
    };

    const getPaymentMethodText = (method) => {
        switch (method) {
            case 0: return 'Cash';
            case 1: return 'Credit Card';
            case 2: return 'Debit Card';
            case 3: return 'Online Payment';
            default: return 'Unknown';
        }
    };

    return (
        <div style={{ paddingTop: '100px', minHeight: '100vh', backgroundColor: '#f8f9fa' }}>
            <div className="container py-5">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="row justify-content-center"
                >
                    <div className="col-lg-8">
                        <div className="card border-0 shadow-sm" style={{ borderRadius: '20px' }}>
                            <div className="card-body p-5 text-center">
                                {/* Success Icon */}
                                <motion.div
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
                                >
                                    <FaCheckCircle size={80} className="text-success mb-4" />
                                </motion.div>

                                <h2 className="mb-3">Order Placed Successfully!</h2>
                                <p className="text-muted mb-4">
                                    Thank you for your order. We've received it and will start preparing it shortly.
                                </p>

                                {/* Order Number */}
                                <div className="bg-light rounded p-4 mb-4">
                                    <div className="d-flex align-items-center justify-content-center gap-3">
                                        <FaReceipt size={24} className="text-primary" />
                                        <div>
                                            <small className="text-muted d-block">Order Number</small>
                                            <h4 className="mb-0">{order.orderNumber || order.id}</h4>
                                        </div>
                                    </div>
                                </div>

                                {/* Order Details */}
                                <div className="text-start mb-4">
                                    <h5 className="mb-3">Order Details</h5>

                                    <div className="row g-3">
                                        <div className="col-md-6">
                                            <div className="p-3 bg-light rounded">
                                                <small className="text-muted d-block mb-1">Order Type</small>
                                                <strong>{getOrderTypeText(order.orderType)}</strong>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="p-3 bg-light rounded">
                                                <small className="text-muted d-block mb-1">Payment Method</small>
                                                <strong>{getPaymentMethodText(order.paymentMethod)}</strong>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Items */}
                                    {order.items && order.items.length > 0 && (
                                        <div className="mt-4">
                                            <h6 className="mb-3">Items Ordered</h6>
                                            {order.items.map((item, index) => (
                                                <div key={index} className="d-flex justify-content-between mb-2 pb-2 border-bottom">
                                                    <span>
                                                        {item.quantity}x {item.menuItemName}
                                                    </span>
                                                    <span className="fw-bold">${item.totalPrice?.toFixed(2) || '0.00'}</span>
                                                </div>
                                            ))}
                                        </div>
                                    )}

                                    {/* Total */}
                                    <div className="mt-4 pt-3 border-top">
                                        <div className="d-flex justify-content-between mb-2">
                                            <span>Subtotal:</span>
                                            <span>${order.subTotal?.toFixed(2) || '0.00'}</span>
                                        </div>
                                        <div className="d-flex justify-content-between mb-2">
                                            <span>Tax:</span>
                                            <span>${order.tax?.toFixed(2) || '0.00'}</span>
                                        </div>
                                        {order.deliveryFee > 0 && (
                                            <div className="d-flex justify-content-between mb-2">
                                                <span>Delivery Fee:</span>
                                                <span>${order.deliveryFee?.toFixed(2)}</span>
                                            </div>
                                        )}
                                        <div className="d-flex justify-content-between mt-3 pt-3 border-top">
                                            <strong className="fs-5">Total:</strong>
                                            <strong className="fs-5" style={{ color: '#e74c3c' }}>
                                                ${order.total?.toFixed(2) || '0.00'}
                                            </strong>
                                        </div>
                                    </div>
                                </div>

                                {/* Estimated Time */}
                                <div className="alert alert-info d-flex align-items-center gap-3 mb-4">
                                    <FaClock size={24} />
                                    <div className="text-start">
                                        <strong>Estimated Time</strong>
                                        <p className="mb-0 small">
                                            {order.orderType === 2
                                                ? 'Your order will be delivered in 30-45 minutes'
                                                : order.orderType === 1
                                                    ? 'Your order will be ready for pickup in 20-30 minutes'
                                                    : 'Your table will be ready shortly'}
                                        </p>
                                    </div>
                                </div>

                                {/* Action Buttons */}
                                <div className="d-grid gap-3">
                                    <Link
                                        to="/"
                                        className="btn btn-primary btn-lg"
                                        style={{
                                            backgroundColor: '#e74c3c',
                                            border: 'none',
                                            borderRadius: '25px',
                                            fontWeight: '600'
                                        }}
                                    >
                                        <FaHome className="me-2" />
                                        Back to Home
                                    </Link>
                                    <Link
                                        to="/menu"
                                        className="btn btn-outline-secondary btn-lg"
                                        style={{
                                            borderRadius: '25px',
                                            fontWeight: '600'
                                        }}
                                    >
                                        Continue Shopping
                                    </Link>
                                </div>

                                {/* Contact Info */}
                                <div className="mt-4 pt-4 border-top">
                                    <p className="text-muted small mb-0">
                                        Questions about your order? Call us at{' '}
                                        <a href="tel:+1234567890" className="text-decoration-none">
                                            (123) 456-7890
                                        </a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default OrderConfirmation;
