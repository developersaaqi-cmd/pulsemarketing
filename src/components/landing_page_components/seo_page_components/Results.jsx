import Image from "next/image";
import React from "react";

const Results = () => {
  return (
    <div className="ct-container my-[40px] md:my-[40px] lg:my-[100px]">
      <div id="center" className="heading-wrapper">
        <h3>Real Results. Real Growth.</h3>
      </div>
      <div className="mt-5 md:mt-10 flex w-[100%] flex-col items-center justify-center gap-10 md:flex-row md:gap-0">
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
          <div>
            <h2 className="text-center font-bold tracking-wide text-[18px] md:text-[22px]">
              300% Traffic Growth
            </h2>
          </div>
          <div>
            <p className="text-center text-[#ffffffc9] font-normal">
              Average organic increases<br/> within 6 months
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
          <div>
            <h2 className="text-center font-bold tracking-wide text-[18px] md:text-[22px]">
              Top Rankings
            </h2>
          </div>
          <div>
            <p className="text-center text-[#ffffffc9] font-normal">
              Competitive keywords across<br /> key markets
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
          <div>
            <h2 className="text-center font-bold tracking-wide text-[18px] md:text-[22px]">
              Revenue Impact
            </h2>
          </div>
          <div>
            <p className="text-center text-[#ffffffc9] font-normal">
              SEO built to drive conversions,<br /> not just clicks
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Results;
