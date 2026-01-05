"use client";
// import { Reveal } from '@/utils/Reveal'
import React from "react";
import { motion } from "motion/react";
import Link from "next/link";
import PrimaryBtn from "@/components/landing_page_components/PrimaryBtns/PrimaryBtn";

const BrandingProcess = () => {
  return (
    <main
      className="ct-container"
      id="branding-process"
      style={{
        backgroundImage: "url('/images/app_page_images/radial.png')",
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
      }}
    >

      <div id="center" className="heading-wrapper">
        <h3>Our Branding Process</h3>
        <p>
          A clear, focused process that turns strategy into a brand that performs.
        </p>
      </div>

      <div className="mt-10 flex flex-wrap items-center justify-between gap-3 px-4 md:gap-0 md:px-0" id="seo-gird-boxes">
        {/* First row */}
        <div className="flex w-full flex-wrap justify-between gap-6">
          {/* card one  */}
          <div className="border-1 flex w-full flex-col gap-3 rounded-2xl border bg-white bg-opacity-10 p-5 backdrop-blur-md md:w-[32%]">
            <h4>01</h4>
            <h3 className="text-xl font-bold tracking-wide">
            Discovery
            </h3>
            <p className="text-sm text-[#ffffffc9] font-normal">
            We learn your business, audience, and positioning to define a clear brand direction.
            </p>
          </div>

          {/* card two  */}
          <div className="border-1 flex w-full flex-col gap-3 rounded-2xl border bg-white bg-opacity-10 p-5 backdrop-blur-md md:w-[32%]">
            <h4>02</h4>
            <h3 className="text-xl font-bold tracking-wide">Strategy</h3>
            <p className="text-sm text-[#ffffffc9] font-normal">
            We develop the foundation: brand voice, positioning, and visual direction.
            </p>
          </div>

          {/* card three  */}
          <div className="border-1 flex w-full flex-col gap-3 rounded-2xl border bg-white bg-opacity-10 p-5 backdrop-blur-md md:w-[32%]">
            <h4>03</h4>
            <h3 className="text-xl font-bold tracking-wide">
              Visual Identity
            </h3>
            <p className="text-sm text-[#ffffffc9] font-normal">
            We design your logo, color system, and typography, refining until it aligns with your vision.
            </p>
          </div>
        </div>

        {/* Space between rows */}
        {/* <div className='h-8'></div> */}

        {/* Second row */}
        <div className="md:mt-5 mt-3 flex w-full flex-wrap justify-between gap-6 md:gap-2">
          {/* card four */}
          <div className="border-1 flex min-h-[50px] w-full flex-col gap-3 rounded-2xl border bg-white bg-opacity-10 p-5 backdrop-blur-md md:min-h-[240px] md:w-[24%]">
            <h4>04</h4>
            <h3 className="text-xl font-bold tracking-wide">
            Brand Assets
            </h3>
            <p className="text-sm text-[#ffffffc9] font-normal">
            We create the core assets your brand needs to show up consistently.
            <ul className="mt-[12px] flex flex-col gap-[5px]">
              <li>Business and marketing materials.</li>
              <li>Social and digital assets.</li>
              <li>Website brand elements.</li>
            </ul>
            </p>
          </div>

          {/* card five */}
          <div className="border-1 flex min-h-[50px] w-full flex-col gap-3 rounded-2xl border bg-white bg-opacity-10 p-5 backdrop-blur-md md:min-h-[240px] md:w-[23%]">
            <h4>05</h4>
            <h3 className="text-xl font-bold tracking-wide">
            Brand Guidelines
            </h3>
            <p className="text-sm text-[#ffffffc9] font-normal">
            We document how your brand is used to ensure consistency everywhere.
            </p>
          </div>

          {/* card six */}
          <div className="border-1 flex min-h-[50px] w-full flex-col gap-3 rounded-2xl border bg-white bg-opacity-10 p-5 backdrop-blur-md md:min-h-[240px] md:w-[23%]">
            <h4>06</h4>
            <h3 className="text-xl font-bold tracking-wide">
             Launch
            </h3>
            <p className="text-sm text-[#ffffffc9] font-normal">
            We deliver final assets and support rollout across platforms and channels.
            </p>
          </div>

          <div className="border-1 flex min-h-[50px] w-full flex-col gap-3 rounded-2xl border bg-white bg-opacity-10 p-5 backdrop-blur-md md:min-h-[240px] md:w-[23%]">
            <h4>07</h4>
            <h3 className="text-xl font-bold tracking-wide">
              Ongoing Support
            </h3>
            <p className="text-sm text-[#ffffffc9] font-normal">
             We continue to support your brand as it evolves.
            </p>
          </div>
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
      <div className="mt-[20px] md:mt-[30px] flex w-full items-center justify-center text-center">
        <Link href={"#calendly-inline-app"}>
          <PrimaryBtn text="Let’s get started" />
        </Link>
      </div>
    </main>
  );
};

export default BrandingProcess;
