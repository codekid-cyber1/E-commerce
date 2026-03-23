"use client";
import { show } from "@/lib/constants";
import React from "react";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

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
            <div className=" w-full bg-gray-100 rounded-lg flex  items-center justify-between relative overflow-hidden">
              <div className="left-side flex flex-col flex-1 items-start justify-center py-10 gap-4 px-15 relative">
                <p style={{ color: "var(--accent)" }} className="text-base">
                  NEW RELEASE
                </p>
                <h2 className="text-6xl font-bold">{item.name}</h2>
                <h2
                  style={{ color: "var(--muted)" }}
                  className="text-6xl font-bold"
                >
                  {item.edition}
                </h2>
                <p
                  style={{ color: "var(--muted)" }}
                  className="w-[60%] text-lg"
                >
                  {item.discription}
                </p>
                <div className=" flex gap-4">
                  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Buy Now
                  </button>
                  <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
                    Learn More
                  </button>
                </div>
              </div>
              <div className="right-side ">
                <Image
                  src={item.image}
                  alt={item.name}
                  width={500}
                  height={450}
                />
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default page;
