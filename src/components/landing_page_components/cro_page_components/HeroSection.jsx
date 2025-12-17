"use client";
import React from "react";
import Link from "next/link";
import { FaStar } from "react-icons/fa";
import Navbar from "@/components/landing_page_components/Navbar";
import Image from "next/image";
import { MdArrowForward } from "react-icons/md";
// import { Reveal } from '@/utils/Reveal'
import PrimaryBtn from "../PrimaryBtns/PrimaryBtn";
import { motion } from "motion/react";
// import HeroForm from "@/components/landing_page_components/HeroForm";

const HeroSection = () => {
  return (
    <main
      style={{
        backgroundImage: "url('/images/cro_page_images/cro-banner-min.jpg')",
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
        backgroundPosition: "center",
      }}
      className="ct-banner cro-home pb-[460px] md:pb-[150px] 2xl:pb-0"
    >
      <Navbar />
      <div className="relative mx-auto flex h-[75vh] z-40 w-[100%] flex-col items-center justify-between md:h-[100vh] md:w-[1200px] md:flex-row md:pt-[60px]">
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
          className="mt-34 w-[100%] flex-col px-8 md:mx-0 md:ml-0 md:mt-0  md:w-[50%] md:px-0"
        >
          <div className="flex mb-5">
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
          <div className="mb-2 flex w-auto items-center gap-1">
            <Image
              src="/images/services_page_images/blue-dot.png"
              alt="blue-dot"
              width={25}
              height={25}
            />

            <h1 className="md:text-2xl">CRO Services</h1>
          </div>

          {/* heading main  */}

          <h2 className="text-left text-2xl font-bold leading-tight md:text-7xl">
            Conversion Rate <br /> Optimization
          </h2>
          <div className="my-4 w-[90%] border-l-2 pl-3">
          <h2 className="mt-5 poppins-light">
            Generate 30–70% more revenue <br /> with the same traffic.
          </h2>
          </div>
          <div className="flex w-full flex-col flex-wrap gap-2 text-left mt-3 md:flex-row md:items-center md:gap-3">
            <p> Clients rate our team and work</p>
            <div className="flex text-yellow-500">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
            <p>4.9</p>
            <p className="md:mb-0 -mb-[8px] text-blue-300">
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
          className="absolute right-[0.5rem] top-[650px] z-20 md:-right-5 md:top-[330px]"
        >
          <Image
            src="/images/cro_page_images/cro-page-upper-min 1.svg"
            alt=""
            height={100}
            width={400}
            className="md:w-[540px]"
          />
        </div>
      </div>
    </main>
  );
};

export default HeroSection;
