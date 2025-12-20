'use client';
// import { Reveal } from "@/utils/Reveal";
import Image from "next/image";
import React, { useEffect } from "react";
import "./slider.css";
import Slider from './Slider'
export default function PortfolioSection() {
  return (
    <main className="relative w-full">
      <div className='section-circle'>
        <img src="/new-circle.webp" />
      </div>
      <div className="flex w-full flex-col items-center justify-center" id="web-pr-slider">
        <div
          style={{
            backgroundImage: "url('/images/app_page_images/radial.png')",
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
          }}
          className="w-full md:w-full md:mx-auto"
        >
          <Slider/>
        </div>
      </div>
    </main>
  );
}
