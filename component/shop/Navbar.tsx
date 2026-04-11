import React from "react";
import Image from "next/image";
import logo from "@/public/e-commerce_logo.png";
import { Search, User } from "lucide-react";
import Link from "next/link";
import NavbarCartIcon from "./NavbarCartIcon";
import { Show, UserButton,} from "@clerk/nextjs";

const Navbar = () => {
  return (
    <nav className="w-full h-[81px] bg-white fixed z-50 top-0 left-0 border-b border-[var(--border)] px-4 md:px-6 tracking-tighter">
      <div className="container mx-auto h-full flex items-center justify-between ">
        <Link href="/">
          <Image src={logo} alt="My E-Commerce logo" className=" w-27 " />
        </Link>

        <form className="  flex-1 relative items-center justify-center max-w-md h-[40px] hidden sm:flex">
          <div className="flex w-[85%] h-full items-center relative bg-gray-100 rounded px-2">
            <button
              type="submit"
              className="relative items-center justify-center w-[10%] cursor-pointer"
            >
              <Search className="  text-gray-500 w-[70%]" />
            </button>

            <input
              type="text"
              placeholder="Search products..."
              className="bg-gray-100 text-gray-800 placeholder:text-gray-500 focus:outline-none w-[90%] h-full rounded pr-2 cursor-pointer"
            />
          </div>
        </form>
        <div className="relative flex items-center justify-between space-x-5">
          <Search className="text-black w-6 h-6 cursor-pointer sm:hidden flex" />
          <Show when="signed-in">
            <UserButton />
          </Show>
          <Show when="signed-out">
            <Link href="/sign-in">
              <User className="text-black w-6 h-6 cursor-pointer" />
            </Link>
          </Show>

          <NavbarCartIcon />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
