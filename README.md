# Premium E-Commerce Platform 🛒

A modern, highly responsive e-commerce web application built with **Next.js** (App Router), **React Context API**, and **Tailwind CSS**. This platform provides a seamless premium shopping experience mimicking real-world digital storefronts.

## ✨ Key Features

- **Dynamic Interactive UI:** A premium, modern aesthetic with smooth hovers, clean spacing, and highly legible text layouts.
- **Robust Cart Management:** Handled fully via React Context's `useReducer`. 
  - Live cart item tally integrated directly into the Top Navbar badge.
  - Cart Item dashboard supporting precise quantity incrementation/decrementation and quick localized removal.
  - Fully calculated Subtotal/Discount/Delivery summaries.
- **Instant "Buy Now" Mechanics:** Rapid add-to-cart-and-checkout routing leveraging Next.js `useRouter`.
- **Product Details & Galleries:** Dedicated product detail pages `/products/[id]` supporting dynamic Next.js routing, multi-angle image galleries, and interactive "Complete the Set" accessories.
- **Responsive Carousels:** A beautiful Homepage trending spotlight slider powered by `react-slick`.
- **Localized Currency:** Fully formatted `.toLocaleString()` Nigerian Naira (₦) pricing across all product cards, order summaries, and subtotal fields.

## 🛠️ Technology Stack

- **Framework:** [Next.js](https://nextjs.org/) (React 18)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Icons:** [Lucide React](https://lucide.dev/)
- **State Management:** React Context API & `useReducer`
- **Sliders:** [React Slick](https://react-slick.neostack.com/)

## 🚀 Getting Started

First, install the dependencies if you haven't already:
```bash
npm install
```

Then, run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to explore the active digital storefront.

## 📁 Project Structure

- `app/(shop)/` - Contains core shop routes including the Homepage, generic Products directory, Cart page, and individual Product Details.
- `component/shop/` - Houses isolated modular UI components including `BuyNow`, `CartItem`, `CartSummary`, and the main `Navbar`.
- `context/` - Contains our `CartContext.tsx` and `CartReducer.tsx` files which dictate globally accessible shopping cart state arrays and actions.
- `lib/constants.ts` - Hosts all of our detailed dummy/mock array data (e.g. `AllProducts`, `show` slider items, `trending` selections, and `related` sets) to orchestrate local, rapid-fire store population.
