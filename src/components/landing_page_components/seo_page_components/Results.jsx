import Image from "next/image";
import React from "react";

const Results = () => {
  return (
    <div className="mb-10 md:-mt-24 md:py-20">
      {/*Heading*/}
      <div>
        <h1 className="mb-3 mt-16 text-center text-xl font-bold tracking-wide md:text-5xl">
          Real Results, Real Growth{" "}
        </h1>
      </div>
      {/*Grid of results*/}
      <div className="mt-16 flex w-[100%] flex-col items-center justify-center gap-10 md:flex-row md:gap-0">
            {/*First Result*/}     
          <div className="w-full md:w-[25%]">
          <div className="flex items-center justify-center">
            <Image
              src="/images/seo_page_images/new-icons/icon0001.png"
              alt=""
              width={120}
              height={120}
            />
          </div>{" "}
          <br />
          <div>
            <h1 className="text-center text-lg font-bold tracking-wide md:text-4xl ">
              300% Increase
            </h1>
          </div>
          <div>
            <p className="text-center">
              in Organic Traffic for Clients in <br /> 6 Months
            </p>
          </div>
        </div>
        {/*Second Result*/} 
        <div className="w-full md:w-[25%]">
          <div className="flex items-center justify-center">
            <Image
              src="/images/seo_page_images/new-icons/icon0002.png"
              alt=""
              width={120}
              height={120}
            />
          </div>{" "}
          <br />
          <div>
            <h1 className="text-center text-lg font-bold tracking-wide md:text-4xl ">
              #1 Rankings
            </h1>
          </div>
          <div>
            <p className="text-center">
              Achieved for Competitive <br /> Keywords
            </p>
          </div>
        </div>
        {/*Third Result*/} 
        <div className="w-full md:w-[25%]">
          <div className="flex items-center justify-center">
            <Image
              src="/images/seo_page_images/new-icons/icon0003.png"
              alt=""
              width={120}
              height={120}
            />
          </div>{" "}
          <br />
          <div>
            <h1 className="text-center text-lg font-bold tracking-wide md:text-4xl ">
              Boosted Revenue
            </h1>
          </div>
          <div>
            <p className="text-center">
              by 150% on Average Through <br /> SEO Efforts
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Results;
