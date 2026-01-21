import { useState, useCallback } from 'react';

/**
 * Custom hook for API calls with loading and error states
 * @returns {Object} { data, loading, error, execute }
 */
function useApi() {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    /**
     * Execute an API call
     * @param {Function} apiFunction - The API function to call
     * @param {Array} args - Arguments to pass to the API function
     * @returns {Promise} The API response
     */
    const execute = useCallback(async (apiFunction, ...args) => {
        try {
            setLoading(true);
            setError(null);

            const response = await apiFunction(...args);

            setData(response);
            setLoading(false);

            return response;
        } catch (err) {
            setError(err.message || 'An error occurred');
            setLoading(false);
            throw err;
        }
    }, []);

    /**
     * Reset the hook state
     */
    const reset = useCallback(() => {
        setData(null);
        setError(null);
        setLoading(false);
    }, []);

    return {
        data,
        loading,
        error,
        execute,
        reset,
    };
}

export default useApi;
