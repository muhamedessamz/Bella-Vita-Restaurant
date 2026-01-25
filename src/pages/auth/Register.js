import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks';
import { toast } from 'react-toastify';
import './Auth.css';

const Register = () => {
    const navigate = useNavigate();
    const { register, loading } = useAuth();

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        password: '',
        confirmPassword: '',
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Validate passwords match
        if (formData.password !== formData.confirmPassword) {
            toast.error('Passwords do not match');
            return;
        }

        // Validate password strength
        if (formData.password.length < 8) {
            toast.error('Password must be at least 8 characters');
            return;
        }

        try {
            const { confirmPassword, phone, ...rest } = formData;
            const userData = {
                ...rest,
                phoneNumber: phone
            };
            await register(userData);
            navigate('/');
        } catch (error) {
            // Error is already handled in AuthContext with toast
            console.error('Registration error:', error);
        }
    };

    return (
        <div className="auth-page">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-8 col-lg-6">
                        <div className="auth-card text-start">
                            <div className="auth-header text-center mb-4">
                                <h2>Create Account</h2>
                                <p className="text-muted">Join the Bella Vita family</p>
                            </div>

                            <form onSubmit={handleSubmit}>
                                <div className="row">
                                    <div className="col-md-6 mb-3">
                                        <label htmlFor="firstName" className="form-label">
                                            First Name
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="firstName"
                                            name="firstName"
                                            value={formData.firstName}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>

                                    <div className="col-md-6 mb-3">
                                        <label htmlFor="lastName" className="form-label">
                                            Last Name
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="lastName"
                                            name="lastName"
                                            value={formData.lastName}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label">
                                        Email Address
                                    </label>
                                    <input
                                        type="email"
                                        className="form-control"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        placeholder="example@email.com"
                                    />
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="phone" className="form-label">
                                        Phone Number
                                    </label>
                                    <input
                                        type="tel"
                                        className="form-control"
                                        id="phone"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        required
                                        placeholder="+1234567890"
                                    />
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="password" className="form-label">
                                        Password
                                    </label>
                                    <input
                                        type="password"
                                        className="form-control"
                                        id="password"
                                        name="password"
                                        value={formData.password}
                                        onChange={handleChange}
                                        required
                                        placeholder="At least 8 characters"
                                    />
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="confirmPassword" className="form-label">
                                        Confirm Password
                                    </label>
                                    <input
                                        type="password"
                                        className="form-control"
                                        id="confirmPassword"
                                        name="confirmPassword"
                                        value={formData.confirmPassword}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>

                                <div className="mb-3 form-check">
                                    <input
                                        type="checkbox"
                                        className="form-check-input"
                                        id="terms"
                                        required
                                    />
                                    <label className="form-check-label" htmlFor="terms">
                                        I agree to the{' '}
                                        <Link to="/terms-of-service" target="_blank">
                                            Terms of Service
                                        </Link>{' '}
                                        and{' '}
                                        <Link to="/privacy-policy" target="_blank">
                                            Privacy Policy
                                        </Link>
                                    </label>
                                </div>

                                <button
                                    type="submit"
                                    className="btn btn-primary w-100 mb-3"
                                    disabled={loading}
                                >
                                    {loading ? (
                                        <>
                                            <span className="spinner-border spinner-border-sm me-2"></span>
                                            Creating account...
                                        </>
                                    ) : (
                                        'Create Account'
                                    )}
                                </button>

                                <div className="text-center">
                                    <p className="mb-0">
                                        Already have an account?{' '}
                                        <Link to="/login" className="text-decoration-none fw-bold">
                                            Sign in
                                        </Link>
                                    </p>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;
