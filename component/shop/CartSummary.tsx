import { useCart } from "@/context/CartContext";

export default function CartSummary() {
    const { state } = useCart();
    const { cartItems } = state;

    const totalItems = cartItems.reduce((sum, item) => sum + (item.quantity || 1), 0);
    const subTotal = cartItems.reduce((sum, item) => sum + item.price * (item.quantity || 1), 0);

    const discount = subTotal > 0 ? subTotal * 0.2 : 0;
    const deliveryFee = subTotal > 0 ? 15000 : 0;
    const total = subTotal - discount + deliveryFee;

    return (
        <div className="bg-[var(--background)] p-6 sm:p-8 rounded-3xl shadow-sm border border-[var(--border)] flex flex-col gap-6">
            <h2 className="text-2xl font-extrabold text-[var(--foreground)]">Order Summary</h2>
            
            <div className="flex flex-col gap-4 text-sm sm:text-base">
                <div className="flex justify-between items-center text-[var(--muted)]">
                    <p>Subtotal ({totalItems} items)</p>
                    <p className="font-bold text-[var(--foreground)]">₦{subTotal.toLocaleString()}</p>
                </div>
                {discount > 0 && (
                    <div className="flex justify-between items-center text-green-600">
                        <p>Discount (20%)</p>
                        <p className="font-bold">-₦{discount.toLocaleString()}</p>
                    </div>
                )}
                <div className="flex justify-between items-center text-[var(--muted)]">
                    <p>Delivery Fee</p>
                    <p className="font-bold text-[var(--foreground)]">₦{deliveryFee.toLocaleString()}</p>
                </div>
            </div>

            <div className="h-px w-full bg-[var(--border)]"></div>

            <div className="flex flex-col gap-1">
                <div className="flex justify-between items-center">
                    <p className="text-lg font-semibold text-[var(--foreground)]">Total</p>
                    <p className="text-2xl font-extrabold text-[var(--foreground)]">₦{total.toLocaleString()}</p>
                </div>
                <p className="text-xs text-[var(--muted)] text-right">Including VAT</p>
            </div>

            <button className="w-full bg-[var(--foreground)] text-[var(--background)] py-4 rounded-full font-bold text-lg hover:opacity-90 transition-opacity mt-4 flex justify-center items-center gap-2 shadow-lg shadow-black/10">
                Proceed to Checkout
            </button>
        </div>
    );
}