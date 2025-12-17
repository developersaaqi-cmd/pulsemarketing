"use client";
import React, { useState } from "react";
import Navbar from "@/components/landing_page_components/Navbar";
import Image from "next/image";
import Link from "next/link";
import { MdArrowForward } from "react-icons/md";
import { FaStar } from "react-icons/fa";
import PrimaryBtn from "../PrimaryBtns/PrimaryBtn";
// import { Reveal } from '@/utils/Reveal'
import { motion } from "motion/react";
import HeroForm from "@/components/landing_page_components/HeroForm";

const HeroSection = () => {
  const [budget, setBudget] = useState(5000);

  return (
    <React.Fragment>
      <main
        style={{
          backgroundImage:
            "url('/images/branding_page_images/branding-hero.png')",
          backgroundSize: "cover",
          backgroundAttachment: "fixed",
          backgroundPosition: "center",
        }}
        className="ct-banner cro-home pb-[150px] md:pb-[200px]"
      >
        <Navbar />
        <div className="relative mx-auto pt-[120px] flex h-[75vh] w-[1200px] flex-row items-center justify-between md:h-[100vh] md:pt-[0px]">
          {/* hero heading  */}
          <div
            // initial={{
            //   x: -300,
            //   opacity: 0,
            // }}
            // whileInView={{
            //   x: 0,
            //   opacity: 1,
            // }}
            // transition={{
            //   delay: 0.5,
            //   duration: 0.5,
            //   ease: "easeInOut",
            // }}
            // viewport={{ once: false, amount: 0.2 }}
            className="md:w-[50%] flex-col px-8 md:px-0"
          >
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
                src={"/accrebited-bussiness-logo2.png"}
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
                src={"/google-review-logo2.png"}
                width={125}
                height={125}
                loading="eager"
              />
            </Link>
          </div>
            <div className="mb-2 flex w-auto items-center gap-1">
              <Image
                src="/images/services_page_images/blue-dot.png"
                alt="blue-dot"
                width={20}
                height={20}
                loading="eager"
              />

              <p>Logo Design & Branding</p>
            </div>

            {/* heading main  */}

            <h2 className="text-left text-2xl font-bold leading-tight md:text-5xl">
              Full-Service Branding <br />
              Agency With A Difference
            </h2>

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
              href={"https://calendly.com/ianpslater/20min"}
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
          <div
            // initial={{
            //   scale: 0.1,
            //   opacity: 0,
            // }}
            // whileInView={{
            //   scale: 1,
            //   opacity: 1,
            // }}
            // transition={{
            //   delay: 0.5,
            //   duration: 0.5,
            //   ease: "easeInOut",
            // }}
            // viewport={{ once: false, amount: 0.2 }}
            className="border-1 absolute top-20 right-0 z-20 w-full max-w-md rounded-3xl border-white bg-black bg-opacity-30 p-6 text-white shadow-xl backdrop-blur-md md:mt-10 md:w-[40%] md:px-8 md:py-3"
          >
            <HeroForm />
          </div>
        </div>
      </main>
    </React.Fragment>
  );
};

export default HeroSection;
