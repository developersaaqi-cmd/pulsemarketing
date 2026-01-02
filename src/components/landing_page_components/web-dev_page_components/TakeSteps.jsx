"use client";
// import { Reveal } from "@/utils/Reveal";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { motion } from "motion/react";

const TakeSteps = () => {
  const [isDesktop, setIsDesktop] = useState(false);

  // Check screen size
  useEffect(() => {
    const updateMedia = () => {
      setIsDesktop(window.innerWidth >= 768);
    };

    updateMedia(); // Run on mount
    window.addEventListener("resize", updateMedia);

    return () => window.removeEventListener("resize", updateMedia);
  }, []);

  return (
    <main
      className="ct-container my-[40px] md:my-[40px] lg:my-[100px]"
      id="web-dev-staps"
      style={{
        backgroundImage: "url('/images/app_page_images/radial.png')",
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="flex flex-wrap justify-between">
        <div className="flex w-full transform items-start justify-center transition-transform duration-700 ease-in-out hover:scale-105 md:mb-0 md:w-[28%]">
          <Image
            src={"/images/web-dev_page_images/pulse-logo.webp"}
            width={350}
            height={350}
            alt="mob1"
          />
        </div>

        <div className="w-full md:w-[60%]">
          <h2 className="text-left text-2xl font-bold tracking-wide md:text-4xl">
            How We Work
          </h2>

          <p className="text-left text-[15px] mt-2">
            A streamlined process built for clarity, speed, and results.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-between gap-6">
            {/* card one  */}
            <div className="border-1 flex min-h-[50px] w-full transform flex-col gap-3 rounded-2xl border bg-white bg-opacity-10 p-5 backdrop-blur-md transition-transform duration-700 ease-in-out hover:scale-105 md:w-[48%]">
              <h3 className="text-xl font-bold tracking-wide">
                Strategy
              </h3>
              <p className="text-[#ffffffc9] font-normal">We align on goals and define a clear execution plan.</p>
              <p className="text-sm">
                <div className="flex flex-col ">
                  <div className="mb-2 flex w-auto items-center gap-1">
                    <Image
                      src="/images/services_page_images/blue-dot.png"
                      alt="blue-dot"
                      width={20}
                      height={20}
                    />
                    <p>Business objectives</p>
                  </div>
                  <div className="mb-2 flex w-auto items-center gap-1">
                    <Image
                      src="/images/services_page_images/blue-dot.png"
                      alt="blue-dot"
                      width={20}
                      height={20}
                    />
                    <p>Project scope</p>
                  </div>
                  <div className="mb-2 flex w-auto items-center gap-1">
                    <Image
                      src="/images/services_page_images/blue-dot.png"
                      alt="blue-dot"
                      width={20}
                      height={20}
                    />
                    <p>Technical direction</p>
                  </div>
                  {/* <div className="mb-2 flex w-auto items-center gap-1">
                    <Image
                      src="/images/services_page_images/blue-dot.png"
                      alt="blue-dot"
                      width={20}
                      height={20}
                    />
                    <p>Post-deployment Support</p>
                  </div> */}
                </div>
              </p>
            </div>

            {/* card two  */}
            <div className="border-1 flex min-h-[50px] w-full transform flex-col gap-3 rounded-2xl border bg-white bg-opacity-10 p-5 backdrop-blur-md transition-transform duration-700 ease-in-out hover:scale-105 md:w-[48%]">
              <h3 className="text-xl font-bold tracking-wide">
                Design
              </h3>
              <p className="text-[#ffffffc9] font-normal">We design structure and flow with usability in mind.</p>
              <p className="text-sm">
                <div className="flex flex-col ">
                  <div className="mb-2 flex w-auto items-center gap-1">
                    <Image
                      src="/images/services_page_images/blue-dot.png"
                      alt="blue-dot"
                      width={20}
                      height={20}
                    />
                    <p>Wireframes</p>
                  </div>
                  <div className="mb-2 flex w-auto items-center gap-1">
                    <Image
                      src="/images/services_page_images/blue-dot.png"
                      alt="blue-dot"
                      width={20}
                      height={20}
                    />
                    <p>User experience</p>
                  </div>
                  <div className="mb-2 flex w-auto items-center gap-1">
                    <Image
                      src="/images/services_page_images/blue-dot.png"
                      alt="blue-dot"
                      width={20}
                      height={20}
                    />
                    <p>Client alignment</p>
                  </div>
                  {/* <div className="mb-2 flex w-auto items-center gap-1">
                    <Image
                      src="/images/services_page_images/blue-dot.png"
                      alt="blue-dot"
                      width={20}
                      height={20}
                    />
                    <p>Getting client approval</p>
                  </div> */}
                </div>
              </p>
            </div>

            {/* card three  */}
            <div className="border-1 flex min-h-[50px] w-full transform flex-col gap-3 rounded-2xl border bg-white bg-opacity-10 p-5 backdrop-blur-md transition-transform duration-700 ease-in-out hover:scale-105 md:w-[48%]">
              <h3 className="text-xl font-bold tracking-wide">
                Development
              </h3>
              <p className="text-[#ffffffc9] font-normal">We build fast, secure, and scalable websites.</p>
              <p className="text-sm">
                <div className="flex flex-col ">
                  <div className="mb-2 flex w-auto items-center gap-1">
                    <Image
                      src="/images/services_page_images/blue-dot.png"
                      alt="blue-dot"
                      width={20}
                      height={20}
                    />
                    <p>Frontend and backend</p>
                  </div>
                  <div className="mb-2 flex w-auto items-center gap-1">
                    <Image
                      src="/images/services_page_images/blue-dot.png"
                      alt="blue-dot"
                      width={20}
                      height={20}
                    />
                    <p>Integrations</p>
                  </div>
                  <div className="mb-2 flex w-auto items-center gap-1">
                    <Image
                      src="/images/services_page_images/blue-dot.png"
                      alt="blue-dot"
                      width={20}
                      height={20}
                    />
                    <p>Performance optimization</p>
                  </div>
                  {/* <div className="mb-2 flex w-auto items-center gap-1">
                    <Image
                      src="/images/services_page_images/blue-dot.png"
                      alt="blue-dot"
                      width={20}
                      height={20}
                    />
                    <p>Getting client approval</p>
                  </div> */}
                </div>
              </p>
            </div>

            {/* card one  */}
            <div className="border-1 flex min-h-[50px] w-full transform flex-col gap-3 rounded-2xl border bg-white bg-opacity-10 p-5 backdrop-blur-md transition-transform duration-700 ease-in-out hover:scale-105 md:w-[48%]">
              <h3 className="text-xl font-bold tracking-wide">Launch & Support</h3>
              <p className="text-[#ffffffc9] font-normal">We launch, monitor, and maintain your site.</p>
              <p className="text-sm">
                <div className="flex flex-col ">
                  <div className="mb-2 flex w-auto items-center gap-1">
                    <Image
                      src="/images/services_page_images/blue-dot.png"
                      alt="blue-dot"
                      width={20}
                      height={20}
                    />
                    <p>Deployment</p>
                  </div>
                  <div className="mb-2 flex w-auto items-center gap-1">
                    <Image
                      src="/images/services_page_images/blue-dot.png"
                      alt="blue-dot"
                      width={20}
                      height={20}
                    />
                    <p>Ongoing monitoring</p>
                  </div>
                  <div className="mb-2 flex w-auto items-center gap-1">
                    <Image
                      src="/images/services_page_images/blue-dot.png"
                      alt="blue-dot"
                      width={20}
                      height={20}
                    />
                    <p>Continuous updates</p>
                  </div>
                  {/* <div className="mb-2 flex w-auto items-center gap-1">
                    <Image
                      src="/images/services_page_images/blue-dot.png"
                      alt="blue-dot"
                      width={20}
                      height={20}
                    />
                    <p>Post-deployment Support</p>
                  </div> */}
                </div>
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default TakeSteps;
