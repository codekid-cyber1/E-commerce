'use client';

import React from 'react';
import { useCart } from '@/context/CartContext';
import { useRouter } from 'next/navigation';

export default function BuyNow({ product, className }: { product: any, className?: string }) {
    const { dispatch } = useCart();
    const router = useRouter();

    const handleBuyNow = () => {
        dispatch({ type: "ADD_TO_CART", payload: product });
        router.push("/cart");
    };

    return (
        <button 
            onClick={handleBuyNow}
            className={className || "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"}
        >
            Buy Now
        </button>
    );
}


