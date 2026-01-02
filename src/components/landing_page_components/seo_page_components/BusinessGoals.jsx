"use client";
// import { Reveal } from '@/utils/Reveal'
import React from "react";
import { motion } from "motion/react";

const BusinessGoals = () => {
  return (
    <main
      className="ct-container my-[40px] md:my-[40px] lg:my-[100px]"
      style={{
        backgroundImage: "url('/images/app_page_images/radial.png')",
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
      }}
    >

      <div id="center" className="heading-wrapper">
        <h3>What We Do: SEO Services Built to Perform</h3>
      </div>

      <div className="mt-10 flex flex-wrap items-center justify-between gap-3 px-4 md:gap-0 md:px-0" id="seo-gird-boxes">
        {/* First row */}
        <div className="flex w-full flex-wrap justify-between gap-6">
          {/* card one  */}
          <div className="border-1 cursor-default transition duration-400 hover:scale-105 flex w-full flex-col gap-3 rounded-2xl border bg-white bg-opacity-10 p-5 backdrop-blur-md md:w-[32%]">
            <h4>01</h4>
            <h3 className="text-xl font-bold tracking-wide">
              Strategy & Audit
            </h3>
            <p className="text-sm">
               We assess your site, market, and opportunities to build a clear SEO roadmap.
            </p>
          </div>

          {/* card two  */}
          <div className="border-1 cursor-default transition duration-400 hover:scale-105 flex w-full flex-col gap-3 rounded-2xl border bg-white bg-opacity-10 p-5 backdrop-blur-md md:w-[32%]">
            <h4>02</h4>
            <h3 className="text-xl font-bold tracking-wide">Keyword & Competitor Research</h3>
            <p className="text-sm">
              We target search terms that drive buyers, not just traffic.
            </p>
          </div>

          {/* card three  */}
          <div className="border-1 cursor-default transition duration-400 hover:scale-105 flex w-full flex-col gap-3 rounded-2xl border bg-white bg-opacity-10 p-5 backdrop-blur-md md:w-[32%]">
            <h4>03</h4>
            <h3 className="text-xl font-bold tracking-wide">
              On-Page Optimization
            </h3>
            <p className="text-sm">
              We optimize structure, content, and technical foundations.
            </p>
          </div>
        </div>

        {/* Space between rows */}
        {/* <div className='h-8'></div> */}

        {/* Second row */}
        <div className="md:mt-5 mt-3 flex w-full flex-wrap justify-between gap-6 md:gap-3">
          {/* card four */}
          <div className="border-1 cursor-default transition duration-400 hover:scale-105 flex w-full flex-col gap-3 rounded-2xl border bg-white bg-opacity-10 p-5 backdrop-blur-md md:w-[32%]">
            <h4>04</h4>
            <h3 className="text-xl font-bold tracking-wide">
              Content Strategy
            </h3>
            <p className="text-sm">
              We create and optimize content that ranks and converts.
            </p>
          </div>

          {/* card five */}
          <div className="border-1 cursor-default transition duration-400 hover:scale-105 flex w-full flex-col gap-3 rounded-2xl border bg-white bg-opacity-10 p-5 backdrop-blur-md md:w-[32%]">
            <h4>05</h4>
            <h3 className="text-xl font-bold tracking-wide">
              Performance Tracking
            </h3>
            <p className="text-sm">
              We measure what matters and refine continuously.
            </p>
          </div>

          {/* card six */}
          <div className="border-1 cursor-default transition duration-400 hover:scale-105 flex w-full flex-col gap-3 rounded-2xl border bg-white bg-opacity-10 p-5 backdrop-blur-md md:w-[32%]">
            <h4>06</h4>
            <h3 className="text-xl font-bold tracking-wide">
              Ongoing Optimization
            </h3>
            <p className="text-sm">
              SEO is never set-and-forget. We improve month over month.
            </p>
          </div>
           {/* card seven */}
          {/* <div className="border-1 cursor-default transition duration-400 hover:scale-105 flex min-h-[50px] w-full flex-col gap-3 rounded-2xl border bg-white bg-opacity-10 p-5 backdrop-blur-md md:min-h-[240px] md:w-[23%]">
            <h4>07</h4>
            <h3 className="text-xl font-bold tracking-wide">
              SEO Consultation
            </h3>
            <p className="text-sm">
              Get expert SEO consultation to develop a roadmap for your business
              success online.
            </p>
          </div> */}
        </div>

        {/* Space between rows */}
        {/* <div className='h-8'></div> */}

        {/* Third row (Single Centered Card) */}
        {/* <div className="mt-3 flex w-full justify-center"> */}
          {/* <div className="border-1 flex min-h-[50px] w-full flex-col gap-3 rounded-2xl border bg-white bg-opacity-10 p-5 backdrop-blur-md md:min-h-[240px] md:w-[28%]">
            <h4>07</h4>
            <h3 className="text-xl font-bold tracking-wide">
              SEO Consultation
            </h3>
            <p className="text-sm">
              Get expert SEO consultation to develop a roadmap for your business
              success online.
            </p>
          </div> */}
        {/* </div> */}
      </div>
    </main>
  );
};

export default BusinessGoals;
