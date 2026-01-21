import { useState, useEffect } from 'react';

/**
 * Custom hook for debouncing values
 * @param {*} value - Value to debounce
 * @param {number} delay - Delay in milliseconds
 * @returns {*} Debounced value
 */
function useDebounce(value, delay = 500) {
    const [debouncedValue, setDebouncedValue] = useState(value);

    useEffect(() => {
        // Set up the timeout
        const handler = setTimeout(() => {
            setDebouncedValue(value);
        }, delay);

        // Clean up the timeout if value changes before delay
        return () => {
            clearTimeout(handler);
        };
    }, [value, delay]);

    return debouncedValue;
}

export default useDebounce;
