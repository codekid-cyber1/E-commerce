'use client';

import React from 'react';
import Link from 'next/link';
import { ShoppingCart } from 'lucide-react';
import { useCart } from '@/context/CartContext';

export default function NavbarCartIcon() {
    const { state } = useCart();
    
    // Calculate total items in the cart, similar to CartSummary
    const totalItems = state.cartItems.reduce((sum, item) => sum + (item.quantity || 1), 0);

    return (
        <Link href="/cart" className="relative cursor-pointer">
            {totalItems > 0 && (
                <div className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                    {totalItems}
                </div>
            )}
            <ShoppingCart className="text-black w-6 h-6" />
        </Link>
    );
}
