"use client";
import React from "react";
// import { Reveal } from "@/utils/Reveal";
import Image from "next/image";
import { motion } from "motion/react";

const AboutText = () => {
  return (
    <main className="relative w-full">
      <div className='section-circle'>
        <img src="/new-circle.webp" />
      </div>
      <div className="flex-col overflow-hidden md:flex md:items-center md:justify-between lg:flex-row ct-container" id="section-circle-after-div">
        {/* left box  */}
        <div className="min-h-[27rem] w-full rounded-2xl bg-[#120E28] p-10 md:w-[48%] flex flex-col items-start justify-center">
          <h2 className="mb-3 text-2xl font-bold">Why Pulse Works</h2>
          <span className="flex flex-col gap-[7px]">
            <p>
              We’ve seen what works and what doesn’t.
            </p>
            <p>
              Pulse is backed by years of real-world experience building and optimizing marketing systems across multiple industries. We’ve helped businesses navigate growth stages, scale responsibly, and turn marketing into a predictable revenue driver.
            </p>
            <p>
              Our approach is focused, performance-driven, and grounded in execution. We build what converts, refine what matters, and scale what works.
            </p>
            <p>
              Simple. Intentional. Effective.
            </p>
          </span>
        </div>

        {/* right box  */}
        <div className="relative hidden h-full min-h-[27rem] w-full justify-end rounded-2xl md:flex md:w-[48%]">
          <Image
            src={"/about-new-top.jpg"}
            alt="about-project"
            className="rounded-2xl"
            layout="fill"
            objectFit="cover"
            loading="eager"
          />
        </div>
      </div>
    </main>
  );
};

export default AboutText;
