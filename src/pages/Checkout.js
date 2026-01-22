import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaMoneyBillWave, FaTruck, FaStore, FaUtensils, FaTag } from 'react-icons/fa';
import { useCart } from '../context/CartContext';
import { useAuth } from '../hooks';
import { orderService } from '../api/services';
import couponService from '../api/services/couponService';
import { toast } from 'react-toastify';

const Checkout = () => {
    const navigate = useNavigate();
    const { items, getCartTotal, clearCart } = useCart();
    const { isAuthenticated } = useAuth();

    const [loading, setLoading] = useState(false);
    const [couponCode, setCouponCode] = useState('');
    const [appliedCoupon, setAppliedCoupon] = useState(null);
    const [verifyingCoupon, setVerifyingCoupon] = useState(false);

    const [formData, setFormData] = useState({
        orderType: 2, // Delivery
        paymentMethod: 0, // Cash
        specialInstructions: '',
        deliveryAddress: {
            street: '',
            city: '',
            state: '',
            zipCode: '',
            phone: ''
        }
    });

    useEffect(() => {
        if (!isAuthenticated) {
            toast.info('Please login to continue with checkout');
            navigate('/login', { state: { from: { pathname: '/checkout' } } });
        }

        if (items.length === 0) {
            navigate('/cart');
        }
    }, [isAuthenticated, items, navigate]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: (name === 'orderType' || name === 'paymentMethod') ? parseInt(value) : value
        }));
    };

    const handleAddressChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            deliveryAddress: {
                ...prev.deliveryAddress,
                [name]: value
            }
        }));
    };

    const handleApplyCoupon = async () => {
        if (!couponCode.trim()) return;

        try {
            setVerifyingCoupon(true);
            const subtotal = getCartTotal();
            const response = await couponService.validateCoupon(couponCode, subtotal);

            setAppliedCoupon(response);
            toast.success(`Coupon applied! Saved: ${response.discountAmount ? '$' + response.discountAmount : response.discountPercentage + '%'}`);
        } catch (error) {
            console.error('Coupon error:', error);
            setAppliedCoupon(null);
            toast.error(error.response?.data?.message || 'Invalid or expired coupon code');
        } finally {
            setVerifyingCoupon(false);
        }
    };

    const removeCoupon = () => {
        setAppliedCoupon(null);
        setCouponCode('');
        toast.info('Coupon removed');
    };

    const calculateTotal = () => {
        const subtotal = getCartTotal();
        let discount = 0;

        if (appliedCoupon) {
            if (appliedCoupon.discountAmount) {
                discount = appliedCoupon.discountAmount;
            } else {
                discount = subtotal * (appliedCoupon.discountPercentage / 100);
            }
        }

        const tax = Math.max(0, subtotal - discount) * 0.08;
        const deliveryFee = formData.orderType === 2 ? 3.99 : 0; // Delivery fee only for delivery

        return {
            subtotal,
            discount,
            tax,
            deliveryFee,
            total: Math.max(0, subtotal + tax + deliveryFee - discount)
        };
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Validate delivery address if delivery is selected
        if (formData.orderType === 2) {
            const { street, city, state, zipCode, phone } = formData.deliveryAddress;
            if (!street || !city || !state || !zipCode || !phone) {
                toast.error('Please fill in all delivery address fields');
                return;
            }
        }

        try {
            setLoading(true);

            // Prepare order data
            const orderData = {
                orderType: parseInt(formData.orderType),
                paymentMethod: parseInt(formData.paymentMethod),
                specialInstructions: formData.specialInstructions || null,
                couponCode: appliedCoupon ? appliedCoupon.code : null,
                items: items.map(item => ({
                    menuItemId: item.id,
                    quantity: item.quantity
                }))
            };

            // Add delivery address if delivery type
            if (formData.orderType === 2) {
                const addressString = `${formData.deliveryAddress.street}, ${formData.deliveryAddress.city}, ${formData.deliveryAddress.state} ${formData.deliveryAddress.zipCode} | Phone: ${formData.deliveryAddress.phone}`;
                orderData.specialInstructions = orderData.specialInstructions
                    ? `${orderData.specialInstructions} | Address: ${addressString}`
                    : `Address: ${addressString}`;
            }

            const response = await orderService.createOrder(orderData);

            if (response.success || response.id) {
                toast.success('Order placed successfully!');
                clearCart();
                navigate('/order-confirmation', { state: { order: response } });
            }
        } catch (error) {
            console.error('Order creation error:', error);
            toast.error(error.message || 'Failed to place order. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    const totals = calculateTotal();

    if (!isAuthenticated || items.length === 0) {
        return null;
    }

    return (
        <div className="page-bg" style={{ paddingTop: '100px' }}>
            <div className="container py-5">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="mb-4">Checkout</h2>

                    <form onSubmit={handleSubmit}>
                        <div className="row">
                            {/* Left Column - Order Details */}
                            <div className="col-lg-8">
                                {/* Order Type */}
                                <div className="card glass-card border-0 mb-4">
                                    <div className="card-body p-4">
                                        <h5 className="mb-3">Order Type</h5>
                                        <div className="row g-3">
                                            <div className="col-md-4">
                                                <label className={`card border ${formData.orderType === 0 ? 'border-primary' : ''} h-100 cursor-pointer`}>
                                                    <input
                                                        type="radio"
                                                        name="orderType"
                                                        value="0"
                                                        checked={formData.orderType === 0}
                                                        onChange={handleInputChange}
                                                        className="d-none"
                                                    />
                                                    <div className="card-body text-center">
                                                        <FaUtensils size={32} className={formData.orderType === 0 ? 'text-primary' : 'text-muted'} />
                                                        <h6 className="mt-2 mb-0">Dine In</h6>
                                                    </div>
                                                </label>
                                            </div>
                                            <div className="col-md-4">
                                                <label className={`card border ${formData.orderType === 1 ? 'border-primary' : ''} h-100 cursor-pointer`}>
                                                    <input
                                                        type="radio"
                                                        name="orderType"
                                                        value="1"
                                                        checked={formData.orderType === 1}
                                                        onChange={handleInputChange}
                                                        className="d-none"
                                                    />
                                                    <div className="card-body text-center">
                                                        <FaStore size={32} className={formData.orderType === 1 ? 'text-primary' : 'text-muted'} />
                                                        <h6 className="mt-2 mb-0">Takeaway</h6>
                                                    </div>
                                                </label>
                                            </div>
                                            <div className="col-md-4">
                                                <label className={`card border ${formData.orderType === 2 ? 'border-primary' : ''} h-100 cursor-pointer`}>
                                                    <input
                                                        type="radio"
                                                        name="orderType"
                                                        value="2"
                                                        checked={formData.orderType === 2}
                                                        onChange={handleInputChange}
                                                        className="d-none"
                                                    />
                                                    <div className="card-body text-center">
                                                        <FaTruck size={32} className={formData.orderType === 2 ? 'text-primary' : 'text-muted'} />
                                                        <h6 className="mt-2 mb-0">Delivery</h6>
                                                    </div>
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Delivery Address */}
                                {formData.orderType === 2 && (
                                    <div className="card glass-card border-0 mb-4">
                                        <div className="card-body p-4">
                                            <h5 className="mb-3">Delivery Address</h5>
                                            <div className="row g-3">
                                                <div className="col-12">
                                                    <label className="form-label">Street Address</label>
                                                    <input
                                                        type="text"
                                                        name="street"
                                                        className="form-control"
                                                        value={formData.deliveryAddress.street}
                                                        onChange={handleAddressChange}
                                                        required={formData.orderType === 2}
                                                        placeholder="123 Main St, Apt 4B"
                                                    />
                                                </div>
                                                <div className="col-md-6">
                                                    <label className="form-label">City</label>
                                                    <input
                                                        type="text"
                                                        name="city"
                                                        className="form-control"
                                                        value={formData.deliveryAddress.city}
                                                        onChange={handleAddressChange}
                                                        required={formData.orderType === 2}
                                                    />
                                                </div>
                                                <div className="col-md-3">
                                                    <label className="form-label">State</label>
                                                    <input
                                                        type="text"
                                                        name="state"
                                                        className="form-control"
                                                        value={formData.deliveryAddress.state}
                                                        onChange={handleAddressChange}
                                                        required={formData.orderType === 2}
                                                        maxLength="2"
                                                        placeholder="CA"
                                                    />
                                                </div>
                                                <div className="col-md-3">
                                                    <label className="form-label">ZIP Code</label>
                                                    <input
                                                        type="text"
                                                        name="zipCode"
                                                        className="form-control"
                                                        value={formData.deliveryAddress.zipCode}
                                                        onChange={handleAddressChange}
                                                        required={formData.orderType === 2}
                                                        placeholder="12345"
                                                    />
                                                </div>
                                                <div className="col-12">
                                                    <label className="form-label">Phone Number</label>
                                                    <input
                                                        type="tel"
                                                        name="phone"
                                                        className="form-control"
                                                        value={formData.deliveryAddress.phone}
                                                        onChange={handleAddressChange}
                                                        required={formData.orderType === 2}
                                                        placeholder="+1 (234) 567-8900"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )}

                                {/* Payment Method */}
                                <div className="card glass-card border-0 mb-4">
                                    <div className="card-body p-4">
                                        <h5 className="mb-3">Payment Method</h5>
                                        <div className="row g-3">
                                            <div className="col-12">
                                                <label className={`card border ${formData.paymentMethod === 0 ? 'border-primary' : ''} h-100 cursor-pointer`}>
                                                    <input
                                                        type="radio"
                                                        name="paymentMethod"
                                                        value="0"
                                                        checked={formData.paymentMethod === 0}
                                                        onChange={handleInputChange}
                                                        className="d-none"
                                                    />
                                                    <div className="card-body text-center">
                                                        <FaMoneyBillWave size={32} className={formData.paymentMethod === 0 ? 'text-primary' : 'text-muted'} />
                                                        <h6 className="mt-2 mb-0">Cash on Delivery / Pickup</h6>
                                                        <small className="text-muted">Pay when you receive your order</small>
                                                    </div>
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Special Instructions */}
                                <div className="card glass-card border-0 mb-4">
                                    <div className="card-body p-4">
                                        <h5 className="mb-3">Special Instructions</h5>
                                        <textarea
                                            name="specialInstructions"
                                            className="form-control"
                                            rows="3"
                                            value={formData.specialInstructions}
                                            onChange={handleInputChange}
                                            placeholder="Any special requests or dietary requirements?"
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Right Column - Order Summary */}
                            <div className="col-lg-4">
                                <div className="card glass-card border-0 sticky-top" style={{ top: '120px' }}>
                                    <div className="card-body p-4">
                                        <h5 className="mb-4">Order Summary</h5>

                                        {/* Cart Items */}
                                        <div className="mb-3">
                                            {items.map(item => (
                                                <div key={item.id} className="d-flex justify-content-between mb-2">
                                                    <span className="text-muted">
                                                        {item.quantity}x {item.name}
                                                    </span>
                                                    <span>${(item.price * item.quantity).toFixed(2)}</span>
                                                </div>
                                            ))}
                                        </div>

                                        <hr />

                                        {/* Coupon Section */}
                                        <div className="mb-4">
                                            <label className="form-label d-flex align-items-center gap-2">
                                                <FaTag className="text-primary" /> Promo Code
                                            </label>
                                            <div className="input-group">
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="Enter code"
                                                    value={couponCode}
                                                    onChange={(e) => setCouponCode(e.target.value.toUpperCase())}
                                                    disabled={appliedCoupon}
                                                />
                                                {appliedCoupon ? (
                                                    <button
                                                        className="btn btn-outline-danger"
                                                        type="button"
                                                        onClick={removeCoupon}
                                                    >
                                                        Remove
                                                    </button>
                                                ) : (
                                                    <button
                                                        className="btn btn-primary"
                                                        type="button"
                                                        onClick={handleApplyCoupon}
                                                        disabled={verifyingCoupon || !couponCode}
                                                        style={{ backgroundColor: '#e74c3c', borderColor: '#e74c3c' }}
                                                    >
                                                        {verifyingCoupon ? <span className="spinner-border spinner-border-sm"></span> : 'Apply'}
                                                    </button>
                                                )}
                                            </div>
                                            {appliedCoupon && (
                                                <small className="text-success d-block mt-1">
                                                    Code {appliedCoupon.code} applied!
                                                </small>
                                            )}
                                        </div>

                                        <hr />

                                        {/* Totals */}
                                        <div className="d-flex justify-content-between mb-2">
                                            <span>Subtotal:</span>
                                            <span>${totals.subtotal.toFixed(2)}</span>
                                        </div>

                                        {totals.discount > 0 && (
                                            <div className="d-flex justify-content-between mb-2 text-success">
                                                <span>Discount:</span>
                                                <span>-${totals.discount.toFixed(2)}</span>
                                            </div>
                                        )}

                                        <div className="d-flex justify-content-between mb-2">
                                            <span>Tax (8%):</span>
                                            <span>${totals.tax.toFixed(2)}</span>
                                        </div>

                                        {formData.orderType === 2 && (
                                            <div className="d-flex justify-content-between mb-2">
                                                <span>Delivery Fee:</span>
                                                <span>${totals.deliveryFee.toFixed(2)}</span>
                                            </div>
                                        )}

                                        <hr />

                                        <div className="d-flex justify-content-between mb-4">
                                            <span className="fw-bold fs-5">Total:</span>
                                            <span className="fw-bold fs-5" style={{ color: '#e74c3c' }}>
                                                ${totals.total.toFixed(2)}
                                            </span>
                                        </div>

                                        {/* Submit Button */}
                                        <button
                                            type="submit"
                                            className="btn btn-primary w-100 btn-lg"
                                            disabled={loading}
                                            style={{
                                                backgroundColor: '#e74c3c',
                                                border: 'none',
                                                borderRadius: '25px',
                                                fontWeight: '600'
                                            }}
                                        >
                                            {loading ? (
                                                <>
                                                    <span className="spinner-border spinner-border-sm me-2"></span>
                                                    Placing Order...
                                                </>
                                            ) : (
                                                'Place Order'
                                            )}
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </motion.div>
            </div>
        </div>
    );
};

export default Checkout;
