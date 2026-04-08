'use client';
import React from 'react';
import { LucideShoppingCart } from 'lucide-react';
import { useCart } from '@/context/CartContext';

export default function AddToCartIcon({ product }: { product: any }) {
    const { dispatch } = useCart();

    const handleAddToCart = (e: React.MouseEvent) => {
        e.preventDefault(); // In case it's placed inside a Link, prevent navigation
        dispatch({ type: "ADD_TO_CART", payload: product });
    };

    return (
        <button 
            onClick={handleAddToCart}
            className="flex items-center p-2 relative w-8 h-8 rounded-full justify-center group bg-[var(--border)] cursor-pointer">
            <LucideShoppingCart className="w-4 h-4 text-[var(--muted)] group-hover:text-[var(--foreground)]" />
        </button>
    );
}
