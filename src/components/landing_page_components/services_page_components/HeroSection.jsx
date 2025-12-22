"use client";
import React from "react";
import Navbar from "@/components/landing_page_components/Navbar";
import Image from "next/image";
import { MdArrowForward } from "react-icons/md";
import { FaStar } from "react-icons/fa";
import Link from "next/link";
// import { Reveal } from '@/utils/Reveal'
const HeroSection = () => {
  return (
    // <React.Fragment>
    //   <main
    //     style={{
    //       backgroundImage: "url('/images/services_page_images/hero-img.png')",
    //       backgroundSize: "cover",
    //       backgroundAttachment: "fixed",
    //       backgroundPosition: "center",
    //     }}
    //     className="ct-banner cro-home pb-[250px] md:pb-[150px]"
    //   >
    //     <Navbar />
    //     <div className="relative flex h-[60vh] w-full flex-col items-center justify-center md:h-[76vh]">
    //       <div className="translate-y-[6.8rem] z-40 flex-col md:translate-y-[4rem]">
    //          <div className="flex mb-5">
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
    //         {/* serive heading  */}
    //         <div className="mb-2 flex items-center gap-1">
    //           <Image
    //             src="/images/services_page_images/blue-dot.png"
    //             alt="blue-dot"
    //             width={20}
    //             height={20}
    //           />
    //           <p>Services</p>
    //         </div>

    //         {/* heading main  */}

    //         <h2
    //           className="text-3xl font-bold md:text-5xl"
    //           style={{ lineHeight: "1.2" }}
    //         >
    //           We Create Digital <br />
    //           Products That Grow <br /> Ambitious Brands.
    //         </h2>
    //         <div className="flex w-full flex-col flex-wrap gap-2 text-left mt-3 md:flex-row md:items-center md:gap-3">
    //         <p> Clients rate our team and work</p>
    //         <div className="flex text-yellow-500">
    //           <FaStar />
    //           <FaStar />
    //           <FaStar />
    //           <FaStar />
    //           <FaStar />
    //         </div>
    //         <p>4.9</p>
    //         <p className="md:mb-0 -mb-[8px] text-blue-300">
    //           based on 86 client reviews
    //         </p>
    //       </div>
    //       <div className="mt-5">
    //         <Link
    //           href={"https://calendly.com/ianpslater/powermeeting"}
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
    //       </div>

    //       {/* <div className='bg-my-blue-gradient rounded-full p-3 absolute bottom-6 right-6'>
    //             <Image
    //             src={'/images/services_page_images/inbox.png'}
    //             alt="inbox"
    //             width={15}
    //             height={15}
    //             />
    //         </div> */}
    //     </div>
    //   </main>
    // </React.Fragment>

      <main
        style={{
          backgroundImage: "url('/images/services_page_images/hero-img.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
          backgroundPosition: "center",
        }}
        className="relative cro-home"
      >
        <div className="absolute inset-0 bg-black/30 bg-opacity-50"></div>

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
              <h2>Services</h2>
            </div>

            <h2
              className="pb-2 text-3xl font-bold capitalize text-white md:text-5xl"
              style={{ lineHeight: "1.2" }}
            >
              We Create Digital<br/>
              Products That Grow<br/>
              Ambitious Brands.
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
  );
};

export default HeroSection;
