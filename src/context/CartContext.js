import React, { createContext, useContext, useReducer, useEffect } from 'react';
import menuData from '../data/menuData';

const CartContext = createContext();

// Helper to normalize cart items with updated images
const normalizeCartItem = (item) => {
  if (!item) return item;

  // Special handling for custom pizza
  if (item.id && item.id.startsWith('custom-pizza-')) {
    return { ...item, image: '/images/Build-Your-Perfect-Pizza.jpg' };
  }

  // Fallback for custom pizza by name
  if (item.name && item.name.includes('Custom') && item.name.includes('Pizza')) {
    return { ...item, image: '/images/Build-Your-Perfect-Pizza.jpg' };
  }

  // Always try to get the latest image from menu data
  try {
    for (const cat of menuData?.categories || []) {
      const found = (cat.items || []).find(i => i.id === item.id || i.name === item.name);
      if (found?.image) {
        if (item.image !== found.image) {
          console.log(`🔄 Normalizing image for ${item.name}: ${item.image || 'none'} → ${found.image}`);
        }
        return { ...item, image: found.image };
      }
    }
  } catch (e) {
    console.error('Error normalizing cart item:', e);
  }

  return item;
};

const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      const existingItem = state.items.find(item => item.id === action.payload.id);
      
      if (existingItem) {
        return {
          ...state,
          items: state.items.map(item =>
            item.id === action.payload.id
              ? { ...item, quantity: item.quantity + action.payload.quantity }
              : item
          )
        };
      } else {
        return {
          ...state,
          items: [...state.items, action.payload]
        };
      }

    case 'REMOVE_FROM_CART':
      return {
        ...state,
        items: state.items.filter(item => item.id !== action.payload)
      };

    case 'UPDATE_QUANTITY':
      return {
        ...state,
        items: state.items.map(item =>
          item.id === action.payload.id
            ? { ...item, quantity: action.payload.quantity }
            : item
        ).filter(item => item.quantity > 0)
      };

    case 'CLEAR_CART':
      return {
        ...state,
        items: []
      };

    case 'LOAD_CART':
      return {
        ...state,
        items: (action.payload || []).map(normalizeCartItem)
      };

    default:
      return state;
  }
};

const initialState = {
  items: []
};

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  // Load cart from localStorage on mount
  useEffect(() => {
    const savedCart = localStorage.getItem('restaurant-cart');
    if (savedCart) {
      try {
        const cartData = JSON.parse(savedCart);
        dispatch({ type: 'LOAD_CART', payload: cartData });
      } catch (error) {
        console.error('Error loading cart from localStorage:', error);
      }
    }
  }, []);

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('restaurant-cart', JSON.stringify(state.items));
  }, [state.items]);

  const addToCart = (item, quantity = 1) => {
    const normalizedItem = normalizeCartItem(item);
    dispatch({
      type: 'ADD_TO_CART',
      payload: { ...normalizedItem, quantity }
    });
  };

  const removeFromCart = (itemId) => {
    dispatch({
      type: 'REMOVE_FROM_CART',
      payload: itemId
    });
  };

  const updateQuantity = (itemId, quantity) => {
    dispatch({
      type: 'UPDATE_QUANTITY',
      payload: { id: itemId, quantity }
    });
  };

  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' });
  };

  const getCartTotal = () => {
    return state.items.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const getCartItemsCount = () => {
    return state.items.reduce((total, item) => total + item.quantity, 0);
  };

  const value = {
    items: state.items,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    getCartTotal,
    getCartItemsCount
  };

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

export default CartContext;
