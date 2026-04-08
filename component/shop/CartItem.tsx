import { useCart } from "@/context/CartContext";
import { CartItemType } from "@/context/CartReducer";
import { Minus, Plus, Trash2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function CartItem({ item }: { item: CartItemType }) {
  const dispatch = useCart().dispatch;
  
  const quantity = item.quantity || 1;
  const totalPrice = item.price * quantity;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 sm:gap-6 py-6 sm:py-0 items-center bg-[var(--background)] sm:bg-transparent rounded-2xl sm:rounded-none p-4 sm:p-0 shadow-sm sm:shadow-none border border-[var(--border)] sm:border-none">
      
      {/* Product Info */}
      <div className="col-span-1 sm:col-span-6 flex gap-4 sm:gap-6 items-center">
        <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-xl overflow-hidden bg-gray-100 flex-shrink-0">
          <img 
            src={item.image || item.img} 
            alt={item.name} 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex flex-col justify-center gap-1 sm:gap-2">
          {item.brand && <p className="text-xs font-semibold tracking-wider text-[var(--muted)] uppercase">{item.brand}</p>}
          <Link href={`/products/${item.id}`}>
            <h3 className="text-base sm:text-lg font-bold text-[var(--foreground)] hover:underline leading-tight">{item.name || "Product Name"}</h3>
          </Link>
          <button 
            onClick={() => dispatch({ type: "REMOVE_FROM_CART", payload: item.id })}
            className="flex items-center text-sm text-red-500 hover:text-red-600 transition-colors mt-1 w-fit gap-1 group font-medium"
          >
            <Trash2 className="w-4 h-4 group-hover:scale-110 transition-transform" /> 
            Remove
          </button>
        </div>
      </div>

      {/* Quantity & Mobile Price */}
      <div className="col-span-1 sm:col-span-3 flex items-center justify-between sm:justify-center w-full mt-2 sm:mt-0">
        <span className="sm:hidden text-sm font-semibold text-[var(--muted)]">Quantity</span>
        <div className="flex items-center border-2 border-[var(--border)] rounded-full px-3 py-1 sm:px-4 sm:py-2 w-max">
          <button 
            onClick={() => dispatch({ type: "DECREMENT", payload: item.id })}
            className="p-1 text-[var(--muted)] hover:text-[var(--foreground)] transition-colors disabled:opacity-50"
            disabled={quantity <= 1}
          >
            <Minus className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
          <span className="w-8 sm:w-12 text-center font-bold text-[var(--foreground)]">{quantity}</span>
          <button 
            onClick={() => dispatch({ type: "INCREMENT", payload: item.id })}
            className="p-1 text-[var(--muted)] hover:text-[var(--foreground)] transition-colors"
          >
            <Plus className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
        </div>
      </div>

      {/* Total Price */}
      <div className="col-span-1 sm:col-span-3 flex justify-between sm:justify-end items-center mt-2 sm:mt-0 pt-4 sm:pt-0 border-t border-[var(--border)] sm:border-none">
        <span className="sm:hidden text-sm font-semibold text-[var(--muted)]">Total</span>
        <span className="text-xl sm:text-lg font-bold text-[var(--foreground)]">₦{totalPrice.toLocaleString()}</span>
      </div>

    </div>
  );
}
