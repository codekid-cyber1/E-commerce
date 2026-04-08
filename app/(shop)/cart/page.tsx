"use client";
import React from "react";
import { useCart } from "@/context/CartContext";
import CartItem from "@/component/shop/CartItem";
import CartSummary from "@/component/shop/CartSummary";
import Link from "next/link";

export default function CartPage() {
  const { state } = useCart();
  const { cartItems } = state;

  if (cartItems.length === 0) {
    return (
      <div className="flex flex-col mt-16 items-center justify-center min-h-[50vh] text-center px-4">
        <h2 className="text-3xl font-extrabold mb-4 text-[var(--foreground)] tracking-tight">Your cart is empty</h2>
        <p className="text-[var(--muted)] mb-8 max-w-md">
          Looks like you haven&apos;t added anything to your cart yet. Browse our premium collections to find something you'll love.
        </p>
        <Link href="/products" className="bg-[var(--foreground)] text-[var(--background)] px-8 py-4 rounded-full font-bold hover:opacity-90 transition-opacity flex items-center justify-center shadow-lg shadow-black/10">
          Start Shopping
        </Link>
      </div>
    );
  }
  
  return (
    <div className="max-w-7xl mx-auto mt-6 px-4 sm:px-6 lg:px-8 py-12 md:py-16">
      <div className="mb-10">
        <div className="flex text-sm text-[var(--muted)] mb-3 gap-2">
          <Link href="/" className="hover:text-[var(--foreground)] transition-colors">
            Home
          </Link>
          <span>/</span>
          <span className="text-[var(--foreground)] font-medium">Cart</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-extrabold text-[var(--foreground)] tracking-tight">
          Your Cart
        </h1>
      </div>

      <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
        <div className="w-full lg:w-2/3 flex flex-col gap-6">
          <div className="hidden sm:grid grid-cols-12 gap-4 pb-4 border-b border-[var(--border)] text-sm font-semibold text-[var(--muted)] uppercase tracking-wider">
            <div className="col-span-6">Product</div>
            <div className="col-span-3 text-center">Quantity</div>
            <div className="col-span-3 text-right">Total</div>
          </div>
          <div className="flex flex-col gap-6 divide-y divide-[var(--border)] sm:divide-none">
            {cartItems.map((item) => (
              <CartItem key={item.id} item={item} />
            ))}
          </div>
        </div>
        
        <div className="w-full lg:w-1/3 sticky top-32">
          <CartSummary />
        </div>
      </div>
    </div>
  );
}
