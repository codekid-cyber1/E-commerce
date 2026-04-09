import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import {CartProvider} from "@/context/CartContext";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "E-Commerce | Premium Electronics & Gadgets",
    template: "%s | E-Commerce",
  },
  description: "High-end electronics and gadgets with a minimalist touch.",
  openGraph: {
    title: "E-Commerce | Premium Electronics & Gadgets",
    description: "High-end electronics and gadgets with a minimalist touch.",
    url: "https://e-commerce-ao92.vercel.app/",
    siteName: "E-Commerce",
    images: [
      {
        url: "https://e-commerce-ao92.vercel.app/e-commerce_logo.png",
        width: 1200,
        height: 630,
        alt: "E-Commerce Presentation",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "E-Commerce | Premium Electronics & Gadgets",
    description: "High-end electronics and gadgets with a minimalist touch.",
    images: ["https://e-commerce-ao92.vercel.app/e-commerce_logo.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased `}
      >
        <CartProvider>
          {children}
        </CartProvider>
      </body>
    </html>
  );
}
