import apiClient from '../client';
import { ENDPOINTS } from '../endpoints';

/**
 * Reservation Service
 * Handles all reservation-related API calls
 */
const reservationService = {
    /**
     * Create a new reservation
     * @param {Object} reservationData - Reservation details
     * @returns {Promise} Created reservation
     */
    createReservation: async (reservationData) => {
        try {
            const response = await apiClient.post(
                ENDPOINTS.RESERVATIONS.CREATE,
                reservationData
            );
            return response;
        } catch (error) {
            throw error;
        }
    },

    /**
     * Get user's reservations
     * @param {Object} params - Query parameters (status, upcoming)
     * @returns {Promise} List of reservations
     */
    getUserReservations: async (params = {}) => {
        try {
            const response = await apiClient.get(ENDPOINTS.RESERVATIONS.LIST, {
                params,
            });
            return response;
        } catch (error) {
            throw error;
        }
    },

    /**
     * Get reservation by ID
     * @param {string} reservationId - Reservation ID
     * @returns {Promise} Reservation details
     */
    getReservationById: async (reservationId) => {
        try {
            const response = await apiClient.get(
                ENDPOINTS.RESERVATIONS.BY_ID(reservationId)
            );
            return response;
        } catch (error) {
            throw error;
        }
    },

    /**
     * Update a reservation
     * @param {string} reservationId - Reservation ID
     * @param {Object} updateData - Updated reservation data
     * @returns {Promise} Updated reservation
     */
    updateReservation: async (reservationId, updateData) => {
        try {
            const response = await apiClient.put(
                ENDPOINTS.RESERVATIONS.UPDATE(reservationId),
                updateData
            );
            return response;
        } catch (error) {
            throw error;
        }
    },

    /**
     * Cancel a reservation
     * @param {string} reservationId - Reservation ID
     * @returns {Promise}
     */
    cancelReservation: async (reservationId) => {
        try {
            const response = await apiClient.delete(
                ENDPOINTS.RESERVATIONS.CANCEL(reservationId)
            );
            return response;
        } catch (error) {
            throw error;
        }
    },

    /**
     * Check availability for a reservation
     * @param {Object} params - Date, time, and party size
     * @returns {Promise} Availability information
     */
    checkAvailability: async (params) => {
        try {
            const response = await apiClient.get(
                ENDPOINTS.RESERVATIONS.CHECK_AVAILABILITY,
                { params }
            );
            return response;
        } catch (error) {
            throw error;
        }
    },
};

export default reservationService;
