'use client';

import React from 'react';
import { useCart } from '@/context/CartContext';
import { useRouter } from 'next/navigation';

export default function ProductButtons({ product }: { product: any }) {
    const { dispatch } = useCart();
    const router = useRouter();

    const handleAddToCart = () => {
        dispatch({ type: "ADD_TO_CART", payload: product });
    };

    const handleBuyNow = () => {
        dispatch({ type: "ADD_TO_CART", payload: product });
        router.push("/cart");
    };

    return (
        <div className="flex flex-col sm:flex-row gap-4 mt-4">
            <button 
                onClick={handleAddToCart}
                className="flex-1 bg-[var(--foreground)] text-[var(--background)] py-4 px-8 lg:py-4 md:py-2 md:px-4 lg:px-8 rounded-full font-bold text-lg md:text-base lg:text-lg hover:opacity-90 transition-opacity flex items-center justify-center gap-2 shadow-lg shadow-black/10"
            >
                Add to Cart
            </button>
            <button 
                onClick={handleBuyNow}
                className="flex-1 border-2 border-[var(--border)] text-[var(--foreground)] py-4 px-8 lg:py-4 md:py-2 md:px-4 lg:px-8 rounded-full font-bold text-lg md:text-base lg:text-lg hover:bg-[var(--border)] transition-colors"
            >
                Buy Now
            </button>
        </div>
    );
}


