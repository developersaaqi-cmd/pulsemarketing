"use client";
import React, { useState } from "react";
import Navbar from "@/components/landing_page_components/Navbar";
import Image from "next/image";
import Link from "next/link";
import { MdArrowForward } from "react-icons/md";
import { FaStar } from "react-icons/fa";
import PrimaryBtn from "../PrimaryBtns/PrimaryBtn";
import HeroForm from "@/components/landing_page_components/HeroForm";
// import { Reveal } from '@/utils/Reveal';
import { motion } from "motion/react";

const HeroSection = () => {
  return (
    // <main
    //   style={{
    //     backgroundImage: "url('/images/web-dev_page_images/hero.png')",
    //     backgroundSize: "cover",
    //     backgroundAttachment: "fixed",
    //     backgroundPosition: "center",
    //   }}
    //   className="ct-banner cro-home md:pb-[370px] pb-[280px]"
    // >
    //   <Navbar />
    //   <div className="relative mx-auto flex h-[70vh] w-[1200px] flex-row items-center justify-between md:h-[100vh] pt-[140px] md:pt-[0px]">
    //     {/* hero heading  */}
    //     <motion.div
    //       initial={{
    //         x: -300,
    //         opacity: 0,
    //       }}
    //       whileInView={{
    //         x: 0,
    //         opacity: 1,
    //       }}
    //       transition={{
    //         delay: 0.5,
    //         duration: 0.5,
    //         ease: "easeInOut",
    //       }}
    //       viewport={{ once: false, amount: 0.2 }}
    //       className=" w-full translate-y-[-30%] flex-col px-6 md:w-[50%] md:translate-y-0 md:px-0"
    //     >
    //         <div className="mb-5 flex">
    //         <Link
    //           href={
    //             "https://www.bbb.org/ca/bc/vancouver/profile/digital-marketing/pulse-marketing-inc-0037-2428735/#sealclick"
    //           }
    //           target="_blank"
    //         >
    //           <Image
    //             alt="image"
    //             className="mr-8"
    //             src={"/accrebited-bussiness-logo2.png"}
    //             width={125}
    //             height={125}
    //             loading="eager"
    //           />
    //         </Link>

    //         <Link
    //           href={
    //             "https://www.google.com/search?sca_esv=09379ecd0b6efd91&sca_upv=1&q=Pulse+Marketing+Inc.&ludocid=8690602816288484550&lsig=AB86z5VS1uhD8C0TEf_4MQU5HsGp&kgs=dd8e1417abb4f44a&shndl=30&shem=lnole,lsde,lsp&source=sh/x/loc/act/m1/1"
    //           }
    //           target="_blank"
    //         >
    //           <Image
    //             alt="image"
    //             src={"/google-review-logo2.png"}
    //             width={125}
    //             height={125}
    //             loading="eager"
    //           />
    //         </Link>
    //       </div>
    //       <div className="mb-2 flex w-auto items-center gap-1">
    //         <span className="flex items-center gap-3">
    //           <Image
    //             src="/images/services_page_images/blue-dot.png"
    //             alt="blue-dot"
    //             width={20}
    //             height={20}
    //             loading="eager"
    //           />
    //           <p>Web Development</p>
    //         </span>
    //       </div>

    //       {/* heading main  */}

    //       <h2 className="text-left text-2xl font-bold leading-tight md:text-5xl">
    //         Bring The Digital Vision <br />
    //         Of Your Brand To Life
    //       </h2>
    //       <div className="mt-3 flex w-full flex-col flex-wrap gap-2 text-left md:flex-row md:items-center md:gap-3">
    //         <p> Clients rate our team and work</p>
    //         <div className="flex text-yellow-500">
    //           <FaStar />
    //           <FaStar />
    //           <FaStar />
    //           <FaStar />
    //           <FaStar />
    //         </div>
    //         <p>4.9</p>
    //         <p className="-mb-[8px] text-blue-300 md:mb-0">
    //           based on 86 client reviews
    //         </p>
    //       </div>
    //       <div className="mt-5">
    //         <Link
    //           href={"https://calendly.com/ianpslater/20min"}
    //           target="_blank"
    //         >
    //           <button
    //             // onClick={toggleForm}
    //             className="poppins-regular contact-btn mb-10 mt-0 flex items-center justify-between rounded-3xl border-none bg-white px-4 py-2 text-black outline-none ease-in-out hover:bg-my-blue-gradient hover:text-white hover:transition-all md:mb-0 md:mt-[24px]"
    //           >
    //             Book Now
    //             <div className="ml-2 h-full rounded-full bg-[#6EE3D7] p-[2px]">
    //               <MdArrowForward />
    //             </div>
    //           </button>
    //           {/* <PrimaryBtn text={"Book now"} /> */}
    //         </Link>
    //       </div>
    //     </motion.div>

    //     {/* hero form  */}
    //     <motion.div
    //       initial={{
    //         scale: 0.1,
    //         opacity: 0,
    //       }}
    //       whileInView={{
    //         scale: 1,
    //         opacity: 1,
    //       }}
    //       transition={{
    //         delay: 0.5,
    //         duration: 0.5,
    //         ease: "easeInOut",
    //       }}
    //       viewport={{ once: false, amount: 0.2 }}
    //       className="border-1 absolute top-20 right-0 z-20 w-full max-w-md rounded-3xl border-white bg-black bg-opacity-30 p-6 text-white shadow-xl backdrop-blur-md md:mt-10 md:w-[40%] md:px-8 md:py-3"
    //     >
    //       <HeroForm />
    //     </motion.div>

    //     {/* <div className='bg-my-blue-gradient rounded-full p-3 absolute bottom-6 right-6'>
    //             <Image
    //             src={'/images/services_page_images/inbox.png'}
    //             alt="inbox"
    //             width={15}
    //             height={15}
    //             />
    //         </div> */}
    //   </div>
    // </main>

    <main
      style={{
        backgroundImage: "url('/images/web-dev_page_images/hero.png')",
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
            <p>Web Development</p>
          </div>

          <h2
            className="pb-2 text-3xl font-bold capitalize text-white md:text-5xl"
            style={{ lineHeight: "1.2" }}
          >
            Bring The Digital Vision <br />
            Of Your Brand To Life
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
