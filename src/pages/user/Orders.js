import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaClock, FaBox, FaCheckCircle, FaTimesCircle, FaMapMarkerAlt, FaReceipt } from 'react-icons/fa';

const Orders = () => {
    // This would eventually be fetched from the backend API
    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Simulating API fetch
        setTimeout(() => {
            const mockOrders = [
                {
                    id: 'ORD-7829',
                    date: '2023-11-15T19:30:00',
                    status: 'Delivered',
                    total: 45.50,
                    items: [
                        { name: 'Pizza Margherita', quantity: 1, price: 14.99 },
                        { name: 'Spaghetti Carbonara', quantity: 2, price: 15.25 }
                    ],
                    address: '123 Main St, Apt 4B'
                },
                {
                    id: 'ORD-7810',
                    date: '2023-11-02T13:15:00',
                    status: 'Processing',
                    total: 32.00,
                    items: [
                        { name: 'Caesar Salad', quantity: 1, price: 12.00 },
                        { name: 'Grilled Salmon', quantity: 1, price: 20.00 }
                    ],
                    address: 'Pickup'
                },
                {
                    id: 'ORD-7755',
                    date: '2023-10-25T20:00:00',
                    status: 'Cancelled',
                    total: 28.50,
                    items: [
                        { name: 'Mushroom Risotto', quantity: 2, price: 14.25 }
                    ],
                    address: '456 Oak Ave'
                }
            ];
            setOrders(mockOrders);
            setLoading(false);
        }, 1000);
    }, []);

    const getStatusBadge = (status) => {
        switch (status) {
            case 'Delivered':
                return <span className="badge bg-success bg-opacity-10 text-success rounded-pill px-3 py-2"><FaCheckCircle className="me-2" />Delivered</span>;
            case 'Processing':
                return <span className="badge bg-primary bg-opacity-10 text-primary rounded-pill px-3 py-2"><FaClock className="me-2" />In Progress</span>;
            case 'Cancelled':
                return <span className="badge bg-danger bg-opacity-10 text-danger rounded-pill px-3 py-2"><FaTimesCircle className="me-2" />Cancelled</span>;
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
                                                    {getStatusBadge(order.status)}
                                                </div>
                                                <small className="text-muted">
                                                    {new Date(order.date).toLocaleDateString('en-US', {
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
                                                <div className="h4 mb-0 fw-bold text-primary">${order.total.toFixed(2)}</div>
                                                <small className="text-muted">{order.items.reduce((acc, item) => acc + item.quantity, 0)} items</small>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card-body px-4 py-3 bg-light bg-opacity-25">
                                        <div className="row g-4">
                                            <div className="col-md-8">
                                                <h6 className="text-muted small fw-bold text-uppercase mb-3">Order Items</h6>
                                                <ul className="list-unstyled mb-0">
                                                    {order.items.map((item, index) => (
                                                        <li key={index} className="d-flex justify-content-between align-items-center mb-2 pb-2 border-bottom border-light">
                                                            <div className="d-flex align-items-center gap-2">
                                                                <span className="badge bg-dark rounded-circle" style={{ width: '24px', height: '24px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '12px' }}>{item.quantity}</span>
                                                                <span>{item.name}</span>
                                                            </div>
                                                            <span className="fw-semibold">${item.price.toFixed(2)}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                            <div className="col-md-4">
                                                <h6 className="text-muted small fw-bold text-uppercase mb-3">Delivery Details</h6>
                                                <div className="d-flex align-items-start gap-2 text-muted">
                                                    <FaMapMarkerAlt className="mt-1" />
                                                    <span>{order.address}</span>
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
