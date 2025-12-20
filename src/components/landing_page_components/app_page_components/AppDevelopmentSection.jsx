"use client";
import Image from "next/image";
import React from "react";
import ContentTab from "./ContentTab";
// import { Reveal } from '@/utils/Reveal';
import { motion } from "framer-motion";

const AppDevelopmentSection = () => {
  const [tabImage, setTabImage] = React.useState(0);
  const isDesktop = typeof window !== "undefined" && window.innerWidth >= 768;

  return (
    <main className="ct-container my-[40px] md:my-[40px] lg:my-[100px]" id="app-mobile-tab">
      <div className="heading-wrapper">
        <h3>Leading the Way in Mobile<br/> App Development</h3>
      </div>

      <main className="w-full flex-col-reverse justify-between md:flex md:flex-row lg:flex">
        {/* Left Box */}
        <motion.div
          initial={isDesktop ? { x: 0, opacity: 1 } : false}
          whileInView={isDesktop ? { x: 0, opacity: 1 } : false}
          transition={
            isDesktop ? { delay: 0.5, duration: 0.5, ease: "easeInOut" } : {}
          }
          viewport={isDesktop ? { once: false, amount: 0.2 } : {}}
          className="mx-auto flex w-[100%] items-center justify-center rounded-md md:mx-0 md:w-[50%] md:p-0"
          id="ct-new-content-img"
        >
          {tabImage === 0 && (
            <div className="transform rounded-2xl transition-transform duration-700 ease-in-out hover:scale-105">
              <Image
                src={"/images/app_page_images/third-sec.png"}
                alt="mob1"
                width={600}
                height={600}
              />
            </div>
          )}
          {tabImage === 1 && (
            <div className="transform rounded-2xl transition-transform duration-700 ease-in-out hover:scale-105">
              <Image
                src={"/images/app_page_images/app-hero.png"}
                alt="mob2"
                width={600}
                height={600}
              />
            </div>
          )}
          {tabImage === 2 && (
            <div className="transform rounded-2xl transition-transform duration-700 ease-in-out hover:scale-105">
              <Image
                src={"/images/app_page_images/third-sec.png"}
                alt="mob3"
                width={600}
                height={600}
              />
            </div>
          )}
        </motion.div>

        {/* Right Box */}
        <motion.div
          initial={isDesktop ? { x: 0, opacity: 1 } : false}
          whileInView={isDesktop ? { x: 0, opacity: 1 } : false}
          transition={
            isDesktop ? { delay: 0.5, duration: 0.5, ease: "easeInOut" } : {}
          }
          viewport={isDesktop ? { once: false, amount: 0.2 } : {}}
          className="ct-projects relative flex w-[100%] flex-col justify-between md:w-[55%] md:flex-row md:px-0"
          id="ct-new-content"
        >
          {/* Tab Section */}
          <div className="w-[100%] md:w-[100%]" id="content-wrapper-ct-app">
            <ContentTab tabImage={tabImage} setTabImage={setTabImage} />
          </div>
        </motion.div>
      </main>
    </main>
  );
};

export default AppDevelopmentSection;
