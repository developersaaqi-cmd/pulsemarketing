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
          Why Leaders <br /> Choose Pulse
        </h2>

        <p className="pp">
          Pulse empowers business leaders to achieve their objectives more swiftly
          and effectively. Our primary focus is to enhance client revenue.
        </p>

        <h5 className="flex items-center gap-2">
          <img src="/new-choose-arrow.svg" alt="" />
          100% We help businesses scale faster
        </h5>

        <p>Our highly skilled team applies the latest marketing strategies</p>
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