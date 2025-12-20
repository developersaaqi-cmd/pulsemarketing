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
        <div className="min-h-[27rem] w-full rounded-2xl bg-[#120E28] p-10 md:w-[48%] ">
          <h2 className="mb-3 text-2xl font-bold">Why We Rock</h2>
          <p>
            Welcome to Pulse Marketing Inc, a Vancouver-based marketing firm
            with years of experience serving over 8,000 clients from various
            industries. We have successfully completed more than 25,000
            projects, offering comprehensive services from AI consulting,
            website and app development, ORM, branding, to digital marketing
            and more. Our highly skilled team applies the latest marketing
            strategies to meet our clients goals, including increasing brand
            awareness, lead generation and sales growth. Thanks for
            considering Pulse Marketing Inc. for your marketing needs. We are
            committed to helping you reach your goals and propelling your
            business forward.
          </p>
        </div>

        {/* right box  */}
        <div className="relative hidden h-full min-h-[28rem] w-full justify-end rounded-2xl md:flex md:w-[48%]">
          <Image
            src={"/images/about_page_images/abou-banner.jpg"}
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
