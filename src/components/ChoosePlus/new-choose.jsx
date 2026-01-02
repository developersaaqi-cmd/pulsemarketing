"use client";

import React from "react";
import Image from "next/image";

const IMAGES = [
  "/17.png",
  "/1 (1).png",
  "/19.png",
  "/chose-plus (1).png",
  "/chose-plus (2).png",
  "/chose-pluse (1).png",
  "/chose-pluse (4).png",
  "/1 (11).png",
  "/11.png",
  "/1 (6).png",
  "/10.png",
  "/15.png",
  "/1 (13).png",
];

export default function NewChoosePlus() {
  const half = Math.ceil(IMAGES.length / 2);
  const firstColumn = IMAGES.slice(0, half);
  const secondColumn = IMAGES.slice(half);

  return (
    <div className="choose-section ct-container flex items-center gap-12">

      {/* LEFT CONTENT */}
      <div className="content">
        <h2>
          Marketing That Actually <br /> Grows Revenue
        </h2>

        <p className="pp">
          Pulse exists to do one thing well: grow your business.<br/>
          We design and execute marketing strategies that turn demand into customers and customers into scale.<br/><br/>
          No guesswork. No fluff. Just results.
        </p>

        <h5 className="flex items-center gap-2">
          <img src="/new-choose-arrow.svg" alt="" />
          We help businesses grow faster
        </h5>

        <p>Strategy, creative, and execution built to perform.</p>
      </div>

      {/* RIGHT MARQUEE AREA */}
      <div className="logoes-slider h-[420px] overflow-hidden flex gap-6">

        {/* COLUMN 1 — UP → DOWN */}
        <div className="overflow-hidden">
          <div className="marquee-up">
            {[...firstColumn, ...firstColumn].map((img, i) => (
              <div key={i} className="flex justify-center py-4">
                <Image src={img} alt="logo" width={120} height={120} />
              </div>
            ))}
          </div>
        </div>

        {/* COLUMN 2 — DOWN → UP */}
        <div className="overflow-hidden">
          <div className="marquee-down">
            {[...secondColumn, ...secondColumn].map((img, i) => (
              <div key={i} className="flex justify-center py-4">
                <Image src={img} alt="logo" width={120} height={120} />
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}