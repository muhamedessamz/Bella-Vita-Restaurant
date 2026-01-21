import apiClient from '../client';
import { ENDPOINTS } from '../endpoints';

/**
 * Order Service
 * Handles all order-related API calls
 */
const orderService = {
    /**
     * Create a new order
     * @param {Object} orderData - Order details
     * @returns {Promise} Created order
     */
    createOrder: async (orderData) => {
        try {
            const response = await apiClient.post(ENDPOINTS.ORDERS.CREATE, orderData);
            return response;
        } catch (error) {
            throw error;
        }
    },

    /**
     * Get user's orders
     * @param {Object} params - Query parameters (status, page, limit)
     * @returns {Promise} List of orders
     */
    getUserOrders: async (params = {}) => {
        try {
            const response = await apiClient.get(ENDPOINTS.ORDERS.LIST, { params });
            return response;
        } catch (error) {
            throw error;
        }
    },

    /**
     * Get order by ID
     * @param {string} orderId - Order ID
     * @returns {Promise} Order details
     */
    getOrderById: async (orderId) => {
        try {
            const response = await apiClient.get(ENDPOINTS.ORDERS.BY_ID(orderId));
            return response;
        } catch (error) {
            throw error;
        }
    },

    /**
     * Cancel an order
     * @param {string} orderId - Order ID
     * @param {string} reason - Cancellation reason
     * @returns {Promise}
     */
    cancelOrder: async (orderId, reason) => {
        try {
            const response = await apiClient.post(ENDPOINTS.ORDERS.CANCEL(orderId), {
                reason,
            });
            return response;
        } catch (error) {
            throw error;
        }
    },

    /**
     * Track order status
     * @param {string} orderId - Order ID
     * @returns {Promise} Order tracking information
     */
    trackOrder: async (orderId) => {
        try {
            const response = await apiClient.get(ENDPOINTS.ORDERS.TRACK(orderId));
            return response;
        } catch (error) {
            throw error;
        }
    },

    /**
     * Reorder a previous order
     * @param {string} orderId - Order ID to reorder
     * @returns {Promise} New order
     */
    reorder: async (orderId) => {
        try {
            const response = await apiClient.post(ENDPOINTS.ORDERS.REORDER(orderId));
            return response;
        } catch (error) {
            throw error;
        }
    },
};

export default orderService;
