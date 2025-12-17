import React from "react";
import Link from "next/link";
import PrimaryBtn from "../landing_page_components/PrimaryBtns/PrimaryBtn";

const HeroSection = () => {
  return (
    <main
      style={{
        backgroundImage:
          "url('/images/cro_page_images/cro-banner-min.jpg')",
          backgroundAttachment:"fixed",
        backgroundSize: "cover",
      }}
      className="flex h-[80vh] cro-home flex-col items-center justify-center text-center md:h-[70vh] my-[40px] md:my-[40px] lg:my-[100px]"
    >
      <div className="heading-wrapper" id="banner-text">
          <p>CRO Services</p>
          <h3>Conversion Rate <br /> Optimization</h3>
      </div>
      <div className="mt-4">
        <Link href={"/cro"}>
        <PrimaryBtn text="Calculate My CRO" />
        </Link>
      </div>
    </main>
  );
};

export default HeroSection;
