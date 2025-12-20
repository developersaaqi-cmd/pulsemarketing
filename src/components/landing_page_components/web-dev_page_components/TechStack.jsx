"use client";
// import { Reveal } from "@/utils/Reveal";
import Image from "next/image";
import React from "react";
import { motion } from "motion/react";

const TechStack = () => {
  const techImage = [
    { img: "/images/web-dev_page_images/logos (1).png" },
    { img: "/images/web-dev_page_images/logos (2).png" },
    { img: "/images/web-dev_page_images/logos (3).png" },
    { img: "/images/web-dev_page_images/logos (4).png" },
    { img: "/images/web-dev_page_images/logos (5).png" },
    { img: "/images/web-dev_page_images/logos (6).png" },
    { img: "/images/web-dev_page_images/logos (7).png" },
    { img: "/images/web-dev_page_images/logos (8).png" },
    { img: "/images/web-dev_page_images/logos (9).png" },
  ];
  return (
    <main className="ct-container my-[40px] md:my-[40px] lg:my-[100px]" id="technoly-section">
      <div className="heading-wrapper">
        <h3>Web Development <br /> Technology Stack</h3>
        <p>
          At Pulse, we specialize in building cutting-edge web solutions
          tailored to your business needs. Our technology stack empowers your
          vision with scalable, fast, and secure websites.
          From modern frameworks to robust backend systems, we bring
          innovation to every project, ensuring a seamless online presence.
        </p>
      </div>

      <div
        className="mx-auto flex flex-wrap place-items-center justify-between gap-5"
        style={{
          backgroundImage: "url('/images/app_page_images/radial.png')",
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
        }}
      >
        {techImage.map((item, index) => (
          <motion.div
            key={index}
            initial={{
              y: 0,
              opacity: 1,
            }}
            whileInView={{
              y: 0,
              opacity: 1,
            }}
            transition={{
              delay: 0.5,
              duration: 0.5,
              ease: "easeInOut",
            }}
            viewport={{ once: false, amount: 0.2 }}
            className="technology-boxes"
          >
            <Image
              key={index}
              src={item.img}
              alt={"logos"}
              width={90}
              height={90}
            />
          </motion.div>
        ))}
      </div>
    </main>
  );
};

export default TechStack;
