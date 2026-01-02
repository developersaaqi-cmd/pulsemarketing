"use client";
// import { Reveal } from "@/utils/Reveal";
import React from "react";
import { motion } from "framer-motion";

const Services = () => {
  const isDesktop = typeof window !== "undefined" && window.innerWidth >= 768;
  return (
    <main
      className="ct-container"
      id="web-service-boxes"
      style={{
        backgroundImage: "url('/images/app_page_images/radial.png')",
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
      }}
    >

      <div className="heading-wrapper">
        <h3>Services</h3>
      </div>

      <div className="flex flex-col flex-wrap items-center justify-between gap-4 md:flex-row">
        {[
          {
            title: "Website Design & Development",
            description:
              "We design and build high-performance websites that are fast, responsive, and built to convert. Every site is structured around usability, scalability, and your business goals, not templates or shortcuts.",
            delay: 0.2,
          },
          {
            title: "Ongoing Website Care",
            description:
              "Our maintenance plans keep your site secure, updated, and running smoothly. We handle updates, security patches, performance monitoring, and fixes so your website stays reliable and worry-free.",
            delay: 0.25,
          },
          {
            title: "Website Optimization & Improvements",
            description:
              "We continuously improve your site through content updates, technical fixes, and performance enhancements. The goal is simple: a faster, more stable website that performs better over time.",
            delay: 0.27,
          },
          {
            title: "Hosting & Infrastructure Management",
            description:
              "We provide secure, high-reliability hosting with ongoing monitoring, server management, and domain administration. Your website stays fast, protected, and online at all times.",
            delay: 0.28,
          },
        ].map((card, index) => (
          <div
            key={index}
            className="border-1 flex min-h-[220px] w-full transform flex-col gap-3 rounded-2xl border bg-white bg-opacity-10 p-5 backdrop-blur-md transition-transform duration-700 ease-in-out hover:scale-105 md:w-[24%] lg:min-h-[240px] xl:min-h-[292px] 2xl:min-h-[200px]"
          >
            <h3 className="text-xl font-bold tracking-wide">{card.title}</h3>
            <p className="text-[#ffffffc9] font-normal">{card.description}</p>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Services;
