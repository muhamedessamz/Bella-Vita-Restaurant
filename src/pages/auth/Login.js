import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../../hooks';
import { toast } from 'react-toastify';
import './Auth.css';

const Login = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { login, loading } = useAuth();

    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const from = location.state?.from?.pathname || '/';

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await login(formData.email, formData.password);
            navigate(from, { replace: true });
        } catch (error) {
            // Error is already handled in AuthContext with toast
            console.error('Login error:', error);
        }
    };

    return (
        <div className="auth-page">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-6 col-lg-5">
                        <div className="auth-card">
                            <div className="auth-header text-center mb-4">
                                <h2>Welcome Back</h2>
                                <p className="text-muted">Sign in to your Bella Vita account</p>
                            </div>

                            <form onSubmit={handleSubmit}>
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
                                        placeholder="••••••••"
                                    />
                                </div>

                                <div className="mb-3 d-flex justify-content-between align-items-center">
                                    <div className="form-check">
                                        <input
                                            type="checkbox"
                                            className="form-check-input"
                                            id="remember"
                                        />
                                        <label className="form-check-label" htmlFor="remember">
                                            Remember me
                                        </label>
                                    </div>
                                    <Link to="/forgot-password" className="text-decoration-none">
                                        Forgot password?
                                    </Link>
                                </div>

                                <button
                                    type="submit"
                                    className="btn btn-primary w-100 mb-3"
                                    disabled={loading}
                                >
                                    {loading ? (
                                        <>
                                            <span className="spinner-border spinner-border-sm me-2"></span>
                                            Signing in...
                                        </>
                                    ) : (
                                        'Sign In'
                                    )}
                                </button>

                                <div className="text-center">
                                    <p className="mb-0">
                                        Don't have an account?{' '}
                                        <Link to="/register" className="text-decoration-none fw-bold">
                                            Sign up now
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

export default Login;
