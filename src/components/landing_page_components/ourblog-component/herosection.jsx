"use client";
import { Box, Modal, TextField } from "@mui/material";
import Link from "next/link";
import React from "react";
// import PrimaryBtn from "../PrimaryBtns/PrimaryBtn";
// import { Reveal } from "@/utils/Reveal";
import Image from "next/image";
import { MdArrowForward } from "react-icons/md";
import { FaStar } from "react-icons/fa";
import Navbar from "../Navbar";

const HeroSection = () => {
  return (
    <>
      <main
        style={{
          backgroundImage: "url(/images/blog_page_images/blog.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
          backgroundPosition: "center",
        }}
        className="relative cro-home"
      >
        <div className="absolute inset-0 bg-black/70 bg-opacity-50"></div>

        <Navbar />
        <div className="relative flex w-full flex-col items-center justify-center">
          <div className="z-10 flex flex-col ct-container" id="innerpages-banner">
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
              <h2>Insights</h2>
            </div>

            <h2
              className="pb-2 text-3xl font-bold capitalize text-white md:text-5xl"
              style={{ lineHeight: "1.2" }}
            >
              Insights That <br/>Drive Growth
            </h2>

            <p className="mx-auto abt-text mt-2 w-[100%] text-left text-xs font-medium leading-snug text-gray-100 md:text-xl">
              Expert strategies and creative insights to help businesses thrive in Canada. Based in Vancouver,<br/> BC, we share actionable tips to boost sales, build brands, and scale success.
            </p>

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
        </div>
      </main>
    </>
  );
};

export default HeroSection;