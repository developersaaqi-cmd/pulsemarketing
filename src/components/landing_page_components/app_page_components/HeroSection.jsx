"use client";
import React, { useState } from "react";
import Navbar from "@/components/landing_page_components/Navbar";
import Image from "next/image";
import Link from "next/link";
import { MdArrowForward } from "react-icons/md";
import { FaStar } from "react-icons/fa";
import PrimaryBtn from "../PrimaryBtns/PrimaryBtn";
import { motion } from "motion/react";
import HeroForm from "../HeroForm";

const HeroSection = () => {
  return (
    <main
      style={{
        backgroundImage: "url('/images/app_page_images/app-hero.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        backgroundPosition: "center",
      }}
      className="relative cro-home"
    >
      <div className="absolute inset-0 bg-black/30 bg-opacity-50"></div>

      <Navbar />
      <div className="relative flex w-full flex-col items-center justify-center ct-container" id="service-page-banner">
        <div className="z-10 flex flex-col">
          <div className="mb-5 flex">
            <Link
              href={
                "https://www.bbb.org/ca/bc/vancouver/profile/digital-marketing/pulse-marketing-inc-0037-2428735/#sealclick"
              }
              target="_blank"
            >
              <Image
                alt="image"
                className="mr-8"
                src={"/images/cro_page_images/bbb.png"}
                width={125}
                height={125}
                loading="eager"
              />
            </Link>

            <Link
              href={
                "https://www.google.com/search?sca_esv=09379ecd0b6efd91&sca_upv=1&q=Pulse+Marketing+Inc.&ludocid=8690602816288484550&lsig=AB86z5VS1uhD8C0TEf_4MQU5HsGp&kgs=dd8e1417abb4f44a&shndl=30&shem=lnole,lsde,lsp&source=sh/x/loc/act/m1/1"
              }
              target="_blank"
            >
              <Image
                alt="image"
                src={"/images/cro_page_images/google.png"}
                width={125}
                height={125}
                loading="eager"
              />
            </Link>
          </div>
          <div className="-ml-[4px] mb-2 flex items-center gap-1 md:-ml-[5px]">
            <Image
              src="/images/services_page_images/blue-dot.png"
              alt="blue-dot"
              width={20}
              height={20}
              loading="eager"
            />
            <h2>Mobile App Development</h2>
          </div>

          <h2
            className="pb-2 text-3xl font-bold capitalize text-white md:text-5xl"
            style={{ lineHeight: "1.2" }}
          >
            Innovative App<br/>
            Development<br/>
            Proudly Canadian
          </h2>

          {/* <p className="mx-auto abt-text mt-2 w-[100%] text-left text-xs font-medium leading-snug text-gray-100 md:text-xl">
            We help businesses scale faster through revenue-focused
            strategies, cutting-edge web development, and data-driven
            marketing solutions.
          </p> */}

          <div className="mt-3 flex w-full flex-col flex-wrap gap-2 text-left md:flex-row md:items-center md:gap-3">
            <p> Clients rate our team and work</p>
            <div className="flex text-yellow-500">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
            <p>4.9</p>
            <p className="-mb-[8px] text-blue-300 md:mb-0">
              based on 86 client reviews
            </p>
          </div>

          <div className="mt-5">
            <Link
              href={"https://calendly.com/ianpslater/powermeeting"}
              target="_blank"
            >
              <button
                // onClick={toggleForm}
                className="poppins-regular contact-btn mb-10 mt-0 flex items-center justify-between rounded-3xl border-none bg-white px-4 py-2 text-black outline-none ease-in-out hover:bg-my-blue-gradient hover:text-white hover:transition-all md:mb-0 md:mt-[24px]"
              >
                Book Now
                <div className="ml-2 h-full rounded-full bg-[#6EE3D7] p-[2px]">
                  <MdArrowForward />
                </div>
              </button>
              {/* <PrimaryBtn text={"Book now"} /> */}
            </Link>
          </div>
        </div>
         {/* hero form  */}
        <div className="border-1 w-full rounded-3xl border-white bg-black bg-opacity-30 p-6 text-white shadow-xl backdrop-blur-md md:px-8 md:py-3">
          <HeroForm />
        </div>
      </div>
    </main>
  );
};

export default HeroSection;
