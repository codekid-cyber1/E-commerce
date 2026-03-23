"use client";
import { show } from "@/lib/constants";
import React from "react";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Link from "next/link";
import { Headphones, Laptop, Smartphone, Watch } from "lucide-react";

const page = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
  };

  return (
    <div className="p-6">
      <Slider {...settings}>
        {show.map((item) => (
          <div
            key={item.id}
            className=" outline-none"
          >
            <div className=" w-full bg-gray-100 rounded-lg flex flex-col lg:flex-row items-center justify-between relative  overflow-hidden">
              <div className="left-side flex flex-col flex-1 items-start justify-center md:py-10 py-5 gap-4 px-6 md:px-15 relative">
                <p style={{ color: "var(--accent)" }} className="text-xs md:text-base ">
                  NEW RELEASE
                </p>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold">{item.name}</h2>
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
                  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Buy Now
                  </button>
                  <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
                    Learn More
                  </button>
                </div>
              </div>
              <div className="right-side relative  w-100 h-89 sm:h-[100vh] lg:w-150 lg:h-150">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover rounded-lg lg:rounded-none lg:scale-100"
                />
              </div>
              <div className=" flex lg:hidden gap-4 py-5 w-full justify-around">
                  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Buy Now
                  </button>
                  <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
                    Learn More
                  </button>
                </div>
            </div>
          </div>
        ))}
      </Slider>
      <div className="flex">
        <Link href='/'><Laptop size={16}/></Link>
        <Link href='/'><Smartphone size={16}/></Link>
        <Link href='/'><Headphones size={16}/></Link>
        <Link href='/'><Watch size={16}/></Link>
      </div>
    </div>
  );
};

export default page;
