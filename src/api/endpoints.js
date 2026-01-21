// API Endpoints Configuration
// Centralized location for all API endpoints

export const ENDPOINTS = {
    // Authentication
    AUTH: {
        REGISTER: '/auth/register',
        LOGIN: '/auth/login',
        LOGOUT: '/auth/logout',
        REFRESH: '/auth/refresh',
        FORGOT_PASSWORD: '/auth/forgot-password',
        RESET_PASSWORD: '/auth/reset-password',
        VERIFY_EMAIL: '/auth/verify-email',
    },

    // User Management
    USER: {
        PROFILE: '/users/me',
        UPDATE_PROFILE: '/users/me',
        CHANGE_PASSWORD: '/users/me/password',
        ADDRESSES: '/users/me/addresses',
        ADD_ADDRESS: '/users/me/addresses',
        UPDATE_ADDRESS: (id) => `/users/me/addresses/${id}`,
        DELETE_ADDRESS: (id) => `/users/me/addresses/${id}`,
    },

    // Menu Management
    MENU: {
        ITEMS: '/menu/items',
        ITEM_BY_ID: (id) => `/menu/items/${id}`,
        CATEGORIES: '/menu/categories',
        CATEGORY_BY_ID: (id) => `/menu/categories/${id}`,
        SEARCH: '/menu/search',
    },

    // Cart Management
    CART: {
        GET: '/cart',
        ADD_ITEM: '/cart/items',
        UPDATE_ITEM: (id) => `/cart/items/${id}`,
        REMOVE_ITEM: (id) => `/cart/items/${id}`,
        CLEAR: '/cart',
        APPLY_COUPON: '/cart/coupon',
    },

    // Order Management
    ORDERS: {
        CREATE: '/orders',
        LIST: '/orders',
        BY_ID: (id) => `/orders/${id}`,
        CANCEL: (id) => `/orders/${id}/cancel`,
        TRACK: (id) => `/orders/${id}/track`,
        REORDER: (id) => `/orders/${id}/reorder`,
    },

    // Reservation Management
    RESERVATIONS: {
        CREATE: '/reservations',
        LIST: '/reservations',
        BY_ID: (id) => `/reservations/${id}`,
        UPDATE: (id) => `/reservations/${id}`,
        CANCEL: (id) => `/reservations/${id}`,
        CHECK_AVAILABILITY: '/reservations/availability',
    },

    // Contact
    CONTACT: {
        SUBMIT: '/contact',
        NEWSLETTER: '/newsletter/subscribe',
    },

    // Reviews & Ratings
    REVIEWS: {
        CREATE: '/reviews',
        BY_ITEM: (itemId) => `/reviews/item/${itemId}`,
        BY_USER: '/reviews/user',
    },
};

export default ENDPOINTS;
