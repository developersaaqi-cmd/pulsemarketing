"use client";
import React from "react";
// import { Reveal } from "@/utils/Reveal";
import Image from "next/image";
import { motion } from "motion/react";
import Newservice from "@/components/DigitalAgencyCards/new-service-boxes"

const Allservice = () => {
  return (
    <main className="relative w-full">
      <div className='section-circle'>
        <img src="/new-circle.webp" />
      </div>
      <div className="flex-col overflow-hidden md:flex md:items-center md:justify-between lg:flex-row ct-container service-page" id="section-circle-after-div">
        <Newservice/>
      </div>
    </main>
  );
};

export default Allservice;