import React, { createContext, useState, useEffect, useCallback } from 'react';
import { authService } from '../api/services';
import { toast } from 'react-toastify';

export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    // Check if user is logged in on mount
    useEffect(() => {
        const checkAuth = () => {
            const token = authService.getToken();
            const currentUser = authService.getCurrentUser();

            if (token && currentUser) {
                setUser(currentUser);
                setIsAuthenticated(true);
            }

            setLoading(false);
        };

        checkAuth();
    }, []);

    /**
     * Login user
     */
    const login = useCallback(async (email, password) => {
        try {
            setLoading(true);
            const response = await authService.login(email, password);

            if (response.success && response.data.user) {
                setUser(response.data.user);
                setIsAuthenticated(true);
                toast.success('Successfully logged in!');
                return response;
            }
        } catch (error) {
            toast.error(error.message || 'Login failed');
            throw error;
        } finally {
            setLoading(false);
        }
    }, []);

    /**
     * Register new user
     */
    const register = useCallback(async (userData) => {
        try {
            setLoading(true);
            const response = await authService.register(userData);

            if (response.success && response.data.user) {
                setUser(response.data.user);
                setIsAuthenticated(true);
                toast.success('Account created successfully!');
                return response;
            }
        } catch (error) {
            toast.error(error.message || 'Registration failed');
            throw error;
        } finally {
            setLoading(false);
        }
    }, []);

    /**
     * Logout user
     */
    const logout = useCallback(async () => {
        try {
            await authService.logout();
            setUser(null);
            setIsAuthenticated(false);
            toast.success('Successfully logged out');
        } catch (error) {
            // Still logout locally even if API call fails
            setUser(null);
            setIsAuthenticated(false);
            console.error('Logout error:', error);
        }
    }, []);

    /**
     * Update user profile
     */
    const updateUser = useCallback((updatedUser) => {
        setUser(updatedUser);
        localStorage.setItem('user', JSON.stringify(updatedUser));
    }, []);

    const value = {
        user,
        loading,
        isAuthenticated,
        login,
        register,
        logout,
        updateUser,
    };

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
