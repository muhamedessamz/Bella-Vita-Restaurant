import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaClock, FaBox, FaCheckCircle, FaTimesCircle, FaMapMarkerAlt, FaReceipt, FaSpinner, FaMotorcycle, FaUtensils } from 'react-icons/fa'; // Added icons
import orderService from '../../api/services/orderService';

const Orders = () => {
    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const statusMap = {
        0: 'Pending',
        1: 'Confirmed',
        2: 'Preparing',
        3: 'Ready',
        4: 'OutForDelivery',
        5: 'Delivered',
        6: 'Cancelled',
        7: 'Rejected'
    };

    useEffect(() => {
        const fetchOrders = async () => {
            try {
                const response = await orderService.getUserOrders();
                const ordersData = Array.isArray(response) ? response : (response.data || []);

                // Sort by date descending
                ordersData.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

                setOrders(ordersData);
                setLoading(false);
            } catch (err) {
                console.error("Failed to fetch orders:", err);
                setError("Failed to load orders. Please try again later.");
                setLoading(false);
            }
        };

        fetchOrders();
    }, []);

    const getStatusBadge = (statusEnum) => {
        const status = statusMap[statusEnum] || 'Unknown';

        switch (status) { // Match against string values
            case 'Delivered':
                return <span className="badge bg-success bg-opacity-10 text-success rounded-pill px-3 py-2"><FaCheckCircle className="me-2" />Delivered</span>;
            case 'Pending':
            case 'Confirmed':
                return <span className="badge bg-warning bg-opacity-10 text-warning rounded-pill px-3 py-2"><FaClock className="me-2" />{status}</span>;
            case 'Preparing':
            case 'Ready':
                return <span className="badge bg-info bg-opacity-10 text-info rounded-pill px-3 py-2"><FaUtensils className="me-2" />{status}</span>;
            case 'OutForDelivery':
                return <span className="badge bg-primary bg-opacity-10 text-primary rounded-pill px-3 py-2"><FaMotorcycle className="me-2" />Out For Delivery</span>;
            case 'Cancelled':
            case 'Rejected':
                return <span className="badge bg-danger bg-opacity-10 text-danger rounded-pill px-3 py-2"><FaTimesCircle className="me-2" />{status}</span>;
            default:
                return <span className="badge bg-secondary bg-opacity-10 text-secondary rounded-pill px-3 py-2">{status}</span>;
        }
    };

    if (loading) {
        return (
            <div className="container py-5 mt-5 text-center">
                <div className="spinner-border text-primary" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
                <p className="mt-3 text-muted">Loading your orders...</p>
            </div>
        );
    }

    if (error) {
        return (
            <div className="container py-5 mt-5 text-center">
                <div className="alert alert-danger" role="alert">
                    {error}
                </div>
                <button
                    onClick={() => window.location.reload()}
                    className="btn btn-outline-primary mt-3"
                >
                    Try Again
                </button>
            </div>
        );
    }

    return (
        <div className="container py-5 mt-5">
            <div className="row justify-content-center">
                <div className="col-lg-10">
                    <div className="d-flex justify-content-between align-items-center mb-5">
                        <h2 className="fw-bold mb-0">My Orders</h2>
                        <Link to="/menu" className="btn btn-primary rounded-pill px-4">Order Now</Link>
                    </div>

                    {orders.length === 0 ? (
                        <div className="text-center py-5 bg-light rounded-4">
                            <FaBox className="text-secondary mb-3 opacity-25" size={60} />
                            <h4>No orders yet</h4>
                            <p className="text-muted">Looks like you haven't placed an order yet.</p>
                            <Link to="/menu" className="btn btn-outline-dark mt-2">Browse Menu</Link>
                        </div>
                    ) : (
                        <div className="d-flex flex-column gap-4">
                            {orders.map((order) => (
                                <div key={order.id} className="card shadow-sm border-0 rounded-4 overflow-hidden order-card">
                                    <div className="card-header bg-white p-4 border-bottom-0">
                                        <div className="d-flex flex-wrap justify-content-between align-items-center gap-3">
                                            <div>
                                                <div className="d-flex align-items-center gap-3 mb-1">
                                                    <h5 className="mb-0 fw-bold">#{order.id}</h5>
                                                    {getStatusBadge(order.orderStatus)}
                                                </div>
                                                <small className="text-muted">
                                                    {new Date(order.createdAt).toLocaleDateString('en-US', {
                                                        weekday: 'long',
                                                        year: 'numeric',
                                                        month: 'long',
                                                        day: 'numeric',
                                                        hour: '2-digit',
                                                        minute: '2-digit'
                                                    })}
                                                </small>
                                            </div>
                                            <div className="text-end">
                                                <div className="h4 mb-0 fw-bold text-primary">${order.totalAmount?.toFixed(2)}</div>
                                                <small className="text-muted">{order.orderItems?.reduce((acc, item) => acc + item.quantity, 0) || 0} items</small>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card-body px-4 py-3 bg-light bg-opacity-25">
                                        <div className="row g-4">
                                            <div className="col-md-8">
                                                <h6 className="text-muted small fw-bold text-uppercase mb-3">Order Items</h6>
                                                <ul className="list-unstyled mb-0">
                                                    {order.orderItems?.map((item, index) => (
                                                        <li key={index} className="d-flex justify-content-between align-items-center mb-2 pb-2 border-bottom border-light">
                                                            <div className="d-flex align-items-center gap-2">
                                                                <span className="badge bg-dark rounded-circle" style={{ width: '24px', height: '24px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '12px' }}>{item.quantity}</span>
                                                                <span>{item.productName || item.name}</span>
                                                            </div>
                                                            <span className="fw-semibold">${item.price?.toFixed(2)}</span>
                                                        </li>
                                                    )) || <li className="text-muted">No items found</li>}
                                                </ul>
                                            </div>
                                            <div className="col-md-4">
                                                <h6 className="text-muted small fw-bold text-uppercase mb-3">Delivery Details</h6>
                                                <div className="d-flex align-items-start gap-2 text-muted">
                                                    <FaMapMarkerAlt className="mt-1" />
                                                    <span>{order.address || 'Standard Delivery'}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card-footer bg-white p-3 border-top-0 d-flex justify-content-end gap-2">
                                        <button className="btn btn-outline-secondary btn-sm rounded-pill px-3">
                                            <FaReceipt className="me-2" />View Receipt
                                        </button>
                                        <button className="btn btn-outline-primary btn-sm rounded-pill px-3">
                                            Reorder
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
            <style>{`
                .order-card {
                    transition: transform 0.2s ease, box-shadow 0.2s ease;
                }
                .order-card:hover {
                    box-shadow: 0 10px 20px rgba(0,0,0,0.08) !important;
                    transform: translateY(-2px);
                }
            `}</style>
        </div>
    );
};

export default Orders;
