import Image from "next/image";
import React from "react";
import logo from "@/public/e-commerce_logo.png";
import Link from "next/link";
import { Globe2,Share2 } from "lucide-react";

const Footer = () => {
  return (
    <div className="w-full  border-t bottom-0 left-0 border-[var(--border)] relative tracking-tighter">
      <div className="flex flex-col gap-7 w-full px-6 pt-20">
        <div className="flex gap-4 relative ">
          <div className="container relative items-start flex flex-col">
            <Link href="/">
              <Image src={logo} alt="My E-Commerce logo" className="w-20 scale-130 translate-y-[-7px]" />
            </Link>

            <p className="text-[var(--muted)] text-md text-start">
              Defining the minimalist future of personal technology. Designed
              for the studio, built for the world.
            </p>
          </div>
          <div className="container relative items-start flex flex-col gap-3">
            <h3 className="font-bold ">Shop</h3>
            <ul className="text-[var(--muted)] text-md text-start">
              <li>All Projucts</li>
              <li>New Realeases</li>
              <li>Special Offer</li>
              <li>Gift Cards</li>
            </ul>
          </div>
          <div className="container relative items-start flex flex-col gap-3">
            <h3 className="font-bold ">Support</h3>
            <ul className="text-[var(--muted)] text-md text-start">
              <li>Help Center</li>
              <li>Track Order</li>
              <li>Shipping & Returns</li>
              <li>Contect Us</li>
            </ul>
          </div>
          <div className="container relative  flex flex-col gap-3">
            <h3 className="font-bold ">Contact</h3>
            <div className="flex relative items-center space-x-5">
                <Link href= '/' className="items-center p-2 relative rounded-full justify-center bg-[var(--border)]"><Share2 size={16}/></Link>
                <Link href= '/' className="items-center p-2 relative rounded-full justify-center bg-[var(--border)]"><Globe2 size={16}/></Link>
               
                 
            </div>
          </div>
        </div>
        <div className="flex items-center w-full border-t border-gray-300 py-6 ">
          <div className="container flex items-center justify-between relative">
            <p className="text-[var(--muted)] text-md  ">© 2024 E-Commerce gadget. All rights reserved.</p>
            <div className="flex center relative space-x-5 mx-0">
              <p className="text-[var(--muted)] text-md">Privacy Policy</p>
              <p className="text-[var(--muted)] text-md">Terms of Service</p>
              <p className="text-[var(--muted)] text-md">Cookies</p>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Footer;
