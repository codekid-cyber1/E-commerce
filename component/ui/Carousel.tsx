"use client"; 

import React, { ReactNode } from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


export default function Carousel({ children }: { children: ReactNode }) {
  const settings = {
  dots: true,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 6000,
  pauseOnHover: true,
  arrows: false,
};

  return (
    <Slider {...settings}>
      {children}
    </Slider>
  );
}