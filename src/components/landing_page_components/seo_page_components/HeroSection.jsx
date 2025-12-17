"use client";
import React from "react";
import Image from "next/image";
import { MdArrowForward } from "react-icons/md";
import { FaStar } from "react-icons/fa";
import Link from "next/link";
// import { Reveal } from '@/utils/Reveal'
import Navbar from "@/components/landing_page_components/Navbar";
import HeroForm from "@/components/landing_page_components/HeroForm";
import { motion } from "motion/react";

export default function HeroSection() {
  return (
    <main
      style={{
        backgroundImage: "url('/images/seo_page_images/seo-hero.png')",
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
        backgroundPosition: "center",
      }}
      className="ct-banner cro-home pb-[230px] md:pb-[150px]"
    >
      <Navbar />
      <div className="relative mx-auto md:pt-0 pt-[220px] flex h-[70vh] w-[1200px] flex-row items-center justify-between px-4 md:h-[110vh] md:px-0">
        {/* hero heading */}
        <motion.div
          initial={{
            x: -300,
            opacity: 0,
          }}
          whileInView={{
            x: 0,
            opacity: 1,
          }}
          transition={{
            delay: 0.5,
            duration: 0.5,
            ease: "easeInOut",
          }}
          viewport={{ once: false, amount: 0.2 }}
          className="mb-8 w-full md:mb-0 md:w-[50%]"
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
          <div className="mb-2 flex items-center gap-1">
            <Image
              src="/images/services_page_images/blue-dot.png"
              alt="blue-dot"
              width={20}
              height={20}
            />
            <p className="text-white">Boost Traffic, Increase Revenue</p>
          </div>

          <h2 className="text-3xl font-bold leading-tight text-white md:text-5xl">
            Search Engine <br />
            Optimization
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
        </motion.div>

        {/* hero form */}
        <motion.div
          initial={{
            scale: 0.1,
            opacity: 0,
          }}
          whileInView={{
            scale: 1,
            opacity: 1,
          }}
          transition={{
            delay: 0.5,
            duration: 0.5,
            ease: "easeInOut",
          }}
          viewport={{ once: false, amount: 0.2 }}
          className="border-1 absolute right-0 z-20 mt-[-10%] w-full max-w-md rounded-3xl border-white bg-black bg-opacity-30 p-6 text-white shadow-xl backdrop-blur-md md:mt-10 md:w-[40%] md:px-8 md:py-3"
        >
          <HeroForm />
        </motion.div>
      </div>
    </main>
  );
}
