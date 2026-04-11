import { show, trending } from "@/lib/constants";
import Image from "next/image";
import Link from "next/link";

import {
  ArrowRight,
  Headphones,
  Laptop,
  Smartphone,
  Watch,
} from "lucide-react";
import BuyNow from "@/component/shop/BuyNow";
import Carousel from "@/component/ui/Carousel";



export default function Page () {
  return (
    <div className="p-6 mt-16">
      <Carousel>
        {show.map((item) => (
          <div key={item.id} className=" outline-none">
            <div className=" w-full bg-gray-100 rounded-lg flex flex-col lg:flex-row items-center justify-between relative  overflow-hidden">
              <div className="left-side flex flex-col flex-1 items-start justify-center md:py-10 py-5 gap-4 px-6 md:px-15 relative">
                <p
                  style={{ color: "var(--accent)" }}
                  className="text-xs md:text-base "
                >
                  NEW RELEASE
                </p>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold">
                  {item.name}
                </h2>
                <h2
                  style={{ color: "var(--muted)" }}
                  className="text-4xl md:text-5xl lg:text-6xl font-bold"
                >
                  {item.edition}
                </h2>
                <p
                  style={{ color: "var(--muted)" }}
                  className="md:w-[60%] text-sm md:text-lg"
                >
                  {item.discription}
                </p>
                <div className=" hidden lg:flex gap-4">
                  <BuyNow product={item} />
                  <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
                    Learn More
                  </button>
                </div>
              </div>
              <div className="right-side relative  w-full h-89 sm:h-[100vh] lg:w-150 lg:h-150">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="w-full h-auto object-cover rounded-lg lg:rounded-none lg:scale-100"
                />
              </div>
              <div className=" flex lg:hidden gap-4 py-5 w-full justify-around">
                <BuyNow product={item} />
                <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
                  Learn More
                </button>
              </div>
            </div> 
          </div>
        ))}
      </Carousel>
      

      <div className="flex container w-full justify-center border-b border-[var(--border)] my-8 relative">
        <div className="w-90 flex  justify-between ">
          <Link
            href="/products?category=Laptop"
            className="group relative hover:border-b-2  border-[var(--accent)] flex flex-col gap-2 py-2 cursor-pointer items-center"
          >
            <div className="group-hover:text-[var(--accent)] text-[var(--muted)] transition-colors">
              <Laptop size={20} />
            </div>
            <p className="group-hover:text-[var(--foreground)] text-[var(--muted)] transition-colors text-sm">
              Laptop
            </p>
          </Link>
          <Link
            href="/products?category=Smartphone"
            className="group relative hover:border-b-2  border-[var(--accent)] flex flex-col gap-2 py-2 cursor-pointer items-center"
          >
            <div className="group-hover:text-[var(--accent)] text-[var(--muted)] transition-colors">
              <Smartphone size={20} />
            </div>
            <p className="group-hover:text-[var(--foreground)] text-[var(--muted)] transition-colors text-sm">
              Smartphone
            </p>
          </Link>
          <Link
            href="/products?category=Headphones"
            className="group relative hover:border-b-2  border-[var(--accent)] flex flex-col gap-2 py-2 cursor-pointer items-center"
          >
            <div className="group-hover:text-[var(--accent)] text-[var(--muted)] transition-colors">
              <Headphones size={20} />
            </div>
            <p className="group-hover:text-[var(--foreground)] text-[var(--muted)] transition-colors text-sm">
              Headphones
            </p>
          </Link>
          <Link
            href="/products?category=Watch"
            className="group relative hover:border-b-2  border-[var(--accent)] flex flex-col gap-2 py-2 cursor-pointer items-center"
          >
            <div className="group-hover:text-[var(--accent)] text-[var(--muted)] transition-colors">
              <Watch size={20} />
            </div>
            <p className="group-hover:text-[var(--foreground)] text-[var(--muted)] transition-colors text-sm">
              Watch
            </p>
          </Link>
        </div>
      </div>
      <div className="w-full overflow-hidden border-y border-[var(--muted)] py-4  rounded-lg">
        <div className="outline-none">
          <h2 className="text-lg sm:text-2xl font-bold text-[var(--foreground)] mb-1">
            Trending Products
          </h2>
          <div className="flex justify-between items-center mb-8">
            <p className="text-xs sm:text-sm text-[var(--muted)]">
              Our most popular gear this week.
            </p>
            <Link
              href="/products"
              className="text-xs sm:text-sm text-[var(--accent)] relative flex flex-row gap-1"
            >
              View All <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </Link>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 ">
          {trending.map((item) => (
            <Link href={`/products/${item.id}`} key={item.id} className=" outline-none">
              <div className="flex flex-col   gap-4 relative max-w-sm rounded-sm overflow-hidden cursor-pointer">
                <Image
                  src={item.image}
                  alt={item.name}
                  width={248}
                  height={248}
                  className="w-full h-auto object-cover"
                />
                <div className="flex flex-col justify-center gap-1 p-2">
                  <p className="text-[var(--muted)] text-sm">{item.type}</p>
                  <p className="text-[var(--foreground)] font-bold text-lg hover:underline">
                    {item.name}
                  </p>
                  <p className="text-[var(--accent)] font-bold">₦{item.price.toLocaleString()}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <div className="w-full mt-12 bg-[var(--foreground)] rounded-lg relative flex flex-col items-center justify-center gap-2 py-20 px-4 ">
        <h3 className="text-2xl font-bold text-[var(--background)]">
          Stay ahead of the curve
        </h3>
        <p className="text-sm text-center text-[var(--muted)] md:w-[30%]">
          Join our inner circle for early access to product launches and
          exclusive studio drops.
        </p>
        <form className="flex relative justify-center items-center py-4 gap-4 flex-col sm:flex-row">
          <div className="sm:w-sm w-xs">
            <input
              className="bg-[var(--background)] appearance-none border-2 border-[var(--muted)] rounded w-full py-2 px-4 text-[var(--muted)] leading-tight focus:outline-none focus:bg-white focus:border-[var(--accent)]"
              type="text"
              placeholder="Email Address"
            />
          </div>
          <div className="">
            <button
              className="cursor-pointer bg-[var(--accent)] hover:scale-105 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
              type="submit"
            >
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
} ;
