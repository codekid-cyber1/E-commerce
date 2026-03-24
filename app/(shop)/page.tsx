"use client";
import { show, trending } from "@/lib/constants";
import React from "react";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Link from "next/link";
import {
  ArrowRight,
  Headphones,
  Laptop,
  Smartphone,
  Watch,
} from "lucide-react";

interface ArrowProps {
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
}

function SampleNextArrow(props: ArrowProps) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "var(--muted)",
        borderRadius: "50%",
      }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props: ArrowProps) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "var(--muted)",
        borderRadius: "50%",
      }}
      onClick={onClick}
    />
  );
}

const Page = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 6000,
    pauseOnHover: true,
  };

  const setting = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="p-6">
      <Slider {...settings}>
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
      <div className="flex container w-full justify-center border-b border-[var(--border)] my-8  relative">
        <div className="w-90 flex  justify-between ">
          <div className="group relative hover:border-b-2  border-[var(--accent)] flex flex-col gap-2 py-2 cursor-pointer items-center">
            <Link
              href="/"
              className="group-hover:text-[var(--accent)] text-[var(--muted)] transition-colors"
            >
              <Laptop size={20} />
            </Link>
            <p className="group-hover:text-[var(--foreground)] text-[var(--muted)] transition-colors text-sm">
              Laptop
            </p>
          </div>
          <div className="group relative hover:border-b-2  border-[var(--accent)] flex flex-col gap-2 py-2 cursor-pointer items-center">
            <Link
              href="/"
              className="group-hover:text-[var(--accent)] text-[var(--muted)] transition-colors"
            >
              <Smartphone size={20} />
            </Link>
            <p className="group-hover:text-[var(--foreground)] text-[var(--muted)] transition-colors text-sm">
              Smartphone
            </p>
          </div>
          <div className="group relative hover:border-b-2  border-[var(--accent)] flex flex-col gap-2 py-2 cursor-pointer items-center">
            <Link
              href="/"
              className="group-hover:text-[var(--accent)] text-[var(--muted)] transition-colors"
            >
              <Headphones size={20} />
            </Link>
            <p className="group-hover:text-[var(--foreground)] text-[var(--muted)] transition-colors text-sm">
              Headphones
            </p>
          </div>
          <div className="group relative hover:border-b-2  border-[var(--accent)] flex flex-col gap-2 py-2 cursor-pointer items-center">
            <Link
              href="/"
              className="group-hover:text-[var(--accent)] text-[var(--muted)] transition-colors"
            >
              <Watch size={20} />
            </Link>
            <p className="group-hover:text-[var(--foreground)] text-[var(--muted)] transition-colors text-sm">
              Watch
            </p>
          </div>
        </div>
      </div>
      <div className="w-full">
        <h2 className="text-lg sm:text-2xl font-bold text-[var(--foreground)] mb-1">
          Trending Products
        </h2>
        <div className="flex justify-between items-center mb-8">
          <p className="text-xs sm:text-sm text-[var(--muted)]">
            Our most popular gear this week.
          </p>
          <Link
            href="/"
            className="text-xs sm:text-sm text-[var(--accent)] relative flex flex-row gap-1"
          >
            View All <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
          </Link>
        </div>
        <Slider {...setting}>
          {trending.map((item) => (
            <div key={item.id} className="outline-none">
              <div className="flex flex-col  justify-center gap-2 relative max-w-sm rounded-sm overflow-hidden cursor-pointer">
                <Image
                  src={item.image}
                  alt={item.name}
                  width={248}
                  height={248}
                />
                <div className="flex flex-col justify-center gap-1 p-2">
                  <p className="text-[var(--muted)] text-sm">{item.type}</p>
                  <p className="text-[var(--foreground)] font-bold text-lg ">
                    {item.name}
                  </p>
                  <p className="text-[var(--accent)] font-bold">{item.price}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
      <div className="w-full mt-12 bg-[var(--foreground)] rounded-lg flex flex-col items-center justify-center gap-2 py-20">
        <h3 className="text-2xl font-bold text-[var(--background)]">
          Stay ahead of the curve
        </h3>
        <p className="text-sm text-center text-[var(--muted)] w-[30%]">
          Join our inner circle for early access to product launches and
          exclusive studio drops.
        </p>
        <form className="flex justify-center items-center py-4 gap-4 flex-col sm:flex-row">
          
          <div className="w-sm">
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
};

export default Page;
