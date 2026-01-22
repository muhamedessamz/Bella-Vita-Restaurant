import apiClient from '../client';
import { ENDPOINTS } from '../endpoints';

/**
 * Authentication Service
 * Handles all authentication-related API calls
 */
const authService = {
    /**
     * Register a new user
     * @param {Object} userData - User registration data
     * @returns {Promise} User data and token
     */
    register: async (userData) => {
        try {
            const response = await apiClient.post(ENDPOINTS.AUTH.REGISTER, userData);

            // Store token and user data
            if (response.token) {
                localStorage.setItem('authToken', response.token);
                localStorage.setItem('user', JSON.stringify(response.user));
            }

            return response;
        } catch (error) {
            throw error;
        }
    },

    /**
     * Login user
     * @param {string} email - User email
     * @param {string} password - User password
     * @returns {Promise} User data and token
     */
    login: async (email, password) => {
        try {
            const response = await apiClient.post(ENDPOINTS.AUTH.LOGIN, {
                email,
                password,
            });

            // Store token and user data
            if (response.token) {
                localStorage.setItem('authToken', response.token);
                localStorage.setItem('user', JSON.stringify(response.user));
            }

            return response;
        } catch (error) {
            throw error;
        }
    },

    /**
     * Logout user
     * @returns {Promise}
     */
    logout: async () => {
        try {
            await apiClient.post(ENDPOINTS.AUTH.LOGOUT);

            // Clear local storage
            localStorage.removeItem('authToken');
            localStorage.removeItem('user');

            return { success: true };
        } catch (error) {
            // Clear local storage even if API call fails
            localStorage.removeItem('authToken');
            localStorage.removeItem('user');
            throw error;
        }
    },

    /**
     * Refresh authentication token
     * @param {string} refreshToken - Refresh token
     * @returns {Promise} New token
     */
    refreshToken: async (refreshToken) => {
        try {
            const response = await apiClient.post(ENDPOINTS.AUTH.REFRESH, {
                refreshToken,
            });

            if (response.data.token) {
                localStorage.setItem('authToken', response.data.token);
            }

            return response;
        } catch (error) {
            throw error;
        }
    },

    /**
     * Request password reset
     * @param {string} email - User email
     * @returns {Promise}
     */
    forgotPassword: async (email) => {
        try {
            const response = await apiClient.post(ENDPOINTS.AUTH.FORGOT_PASSWORD, {
                email,
            });
            return response;
        } catch (error) {
            throw error;
        }
    },

    /**
     * Reset password with token
     * @param {string} token - Reset token
     * @param {string} newPassword - New password
     * @returns {Promise}
     */
    resetPassword: async (token, newPassword) => {
        try {
            const response = await apiClient.post(ENDPOINTS.AUTH.RESET_PASSWORD, {
                token,
                newPassword,
            });
            return response;
        } catch (error) {
            throw error;
        }
    },

    /**
     * Verify email with token
     * @param {string} token - Verification token
     * @returns {Promise}
     */
    verifyEmail: async (token) => {
        try {
            const response = await apiClient.get(`${ENDPOINTS.AUTH.VERIFY_EMAIL}/${token}`);
            return response;
        } catch (error) {
            throw error;
        }
    },

    /**
     * Get current user from localStorage
     * @returns {Object|null} User object or null
     */
    getCurrentUser: () => {
        const userStr = localStorage.getItem('user');
        return userStr ? JSON.parse(userStr) : null;
    },

    /**
     * Update user profile
     * @param {Object} profileData - New profile data
     * @returns {Promise} Updated user data
     */
    updateProfile: async (profileData) => {
        try {
            const response = await apiClient.put(ENDPOINTS.USER.UPDATE_PROFILE, profileData);

            // Update stored user data if successful
            if (response.user) {
                localStorage.setItem('user', JSON.stringify(response.user));
            }

            return response;
        } catch (error) {
            throw error;
        }
    },

    /**
     * Change user password
     * @param {Object} passwordData - Current and new passwords
     * @returns {Promise}
     */
    changePassword: async (passwordData) => {
        try {
            const response = await apiClient.put(ENDPOINTS.USER.CHANGE_PASSWORD, passwordData);
            return response;
        } catch (error) {
            throw error;
        }
    },

    /**
     * Check if user is authenticated
     * @returns {boolean}
     */
    isAuthenticated: () => {
        return !!localStorage.getItem('authToken');
    },

    /**
     * Get auth token
     * @returns {string|null}
     */
    getToken: () => {
        return localStorage.getItem('authToken');
    },
};

export default authService;
