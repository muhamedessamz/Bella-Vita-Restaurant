import apiClient from '../client';
import { ENDPOINTS } from '../endpoints';

/**
 * Menu Service
 * Handles all menu-related API calls
 */
const menuService = {
    /**
     * Get all menu items with optional filters
     * @param {Object} params - Query parameters (category, dietary, search, page, limit)
     * @returns {Promise} Menu items and pagination
     */
    getAllItems: async (params = {}) => {
        try {
            const response = await apiClient.get(ENDPOINTS.MENU.ITEMS, { params });
            return response;
        } catch (error) {
            throw error;
        }
    },

    /**
     * Get menu item by ID
     * @param {string} itemId - Menu item ID
     * @returns {Promise} Menu item details
     */
    getItemById: async (itemId) => {
        try {
            const response = await apiClient.get(ENDPOINTS.MENU.ITEM_BY_ID(itemId));
            return response;
        } catch (error) {
            throw error;
        }
    },

    /**
     * Get all menu categories
     * @returns {Promise} List of categories
     */
    getCategories: async () => {
        try {
            const response = await apiClient.get(ENDPOINTS.MENU.CATEGORIES);
            return response;
        } catch (error) {
            throw error;
        }
    },

    /**
     * Get category by ID
     * @param {string} categoryId - Category ID
     * @returns {Promise} Category details
     */
    getCategoryById: async (categoryId) => {
        try {
            const response = await apiClient.get(ENDPOINTS.MENU.CATEGORY_BY_ID(categoryId));
            return response;
        } catch (error) {
            throw error;
        }
    },

    /**
     * Search menu items
     * @param {string} query - Search query
     * @returns {Promise} Search results
     */
    searchItems: async (query) => {
        try {
            const response = await apiClient.get(ENDPOINTS.MENU.SEARCH, {
                params: { q: query },
            });
            return response;
        } catch (error) {
            throw error;
        }
    },

    // Admin functions (will be used in dashboard)

    /**
     * Create new menu item (Admin only)
     * @param {Object} itemData - Menu item data
     * @returns {Promise} Created item
     */
    createItem: async (itemData) => {
        try {
            const response = await apiClient.post(ENDPOINTS.MENU.ITEMS, itemData);
            return response;
        } catch (error) {
            throw error;
        }
    },

    /**
     * Update menu item (Admin only)
     * @param {string} itemId - Menu item ID
     * @param {Object} itemData - Updated data
     * @returns {Promise} Updated item
     */
    updateItem: async (itemId, itemData) => {
        try {
            const response = await apiClient.put(ENDPOINTS.MENU.ITEM_BY_ID(itemId), itemData);
            return response;
        } catch (error) {
            throw error;
        }
    },

    /**
     * Delete menu item (Admin only)
     * @param {string} itemId - Menu item ID
     * @returns {Promise}
     */
    deleteItem: async (itemId) => {
        try {
            const response = await apiClient.delete(ENDPOINTS.MENU.ITEM_BY_ID(itemId));
            return response;
        } catch (error) {
            throw error;
        }
    },
};

export default menuService;
