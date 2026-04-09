'use client'
import React, { createContext, useContext, useReducer, ReactNode, useEffect, useState } from 'react'
import { CartReducer, initialState, CartState, CartAction } from './CartReducer'

interface CartContextProps {
  state: CartState;
  dispatch: React.Dispatch<CartAction>;
}

const CartContext = createContext<CartContextProps | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
    const [state, dispatch] = useReducer(CartReducer, initialState);
    const [isMounted, setIsMounted] = useState(false);

    // Initialize cart from localStorage on page load
    useEffect(() => {
        setIsMounted(true);
        const storedCart = localStorage.getItem('ecommerce-cart');
        if (storedCart) {
            try {
                const parsed = JSON.parse(storedCart);
                if (parsed && parsed.length > 0) {
                    dispatch({ type: "INITIALIZE_CART", payload: parsed });
                }
            } catch (error) {
                console.error("Error parsing cart from storage", error);
            }
        }
    }, []);

    // Save cart to localStorage whenever it changes
    useEffect(() => {
        if (isMounted) {
            localStorage.setItem('ecommerce-cart', JSON.stringify(state.cartItems));
        }
    }, [state.cartItems, isMounted]);

    return (
        <CartContext.Provider value={{state, dispatch}}>
            {children}
        </CartContext.Provider>
    )
}

export function useCart() {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error("useCart must be used within a CartProvider");
    }
    return context;
}