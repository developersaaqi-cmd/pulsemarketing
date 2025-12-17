import Image from "next/image";
import React from "react";

const SeoProcess = () => {
  return (
    <main
    style={{
      backgroundImage:"url('/images/seo_page_images/seo-banner01.jpg')",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      backgroundPosition:"center",
      backgroundAttachment: "fixed",
    }}
     className="w-full px-6 py-16 md:mx-auto md:mt-0 md:w-full md:px-0">
      <div>
        <h1 className="mb-3 text-center text-xl font-bold tracking-wide md:text-5xl">
          <span className="block md:inline">The Pulse SEO Process:</span>
          <span className="block md:inline"> How We Work</span>
        </h1>
      </div>
      <div className="mt-8 flex flex-wrap items-center justify-between gap-3 px-4 md:mt-20 md:justify-center md:gap-4 md:px-0">
        {/* First row */}
        <div className="flex w-full flex-wrap justify-center gap-6 md:gap-6">
          {/* card one  */}
          <div className="border-1 cursor-default duration-400  flex min-h-[50px] w-full flex-col justify-center items-center gap-3 rounded-2xl border bg-white bg-opacity-10 p-5 backdrop-blur-md transition hover:scale-105 md:h-[200px] md:w-[23%] md:p-4">
            <div className="w-full justify-center flex h-60px]">
            <Image
              src={"/images/seo_page_images/search.png"}
              height={10}
              width={60}
              alt="seo-audit"
              className="invert -ml-[4px]"
              loading="eager"
            ></Image>
            </div>
            <h2 className="text-xl text-center font-semibold">
              Free Seo Audit <br />
              (No String Attached!)
            </h2>
          </div>

          {/* card two  */}
          <div className="border-1 cursor-default duration-400 items-center flex min-h-[50px] w-full flex-col justify-center gap-3 rounded-2xl border bg-white bg-opacity-10 p-5 backdrop-blur-md transition hover:scale-105 md:h-[200px] md:w-[23%] md:p-4">
            <div className="w-full justify-center flex h-60px]">
            <Image
              src={"/images/seo_page_images/partnerships.png"}
              height={10}
              width={60}
              alt="strategy-development"
              className="invert"
              loading="eager"
            ></Image>
            </div>
            <h2 className="text-xl text-center font-semibold">
              Strategy Development Tailored 
             to your Business
            </h2>
          </div>

          {/* card three  */}
          <div className="border-1 cursor-default duration-400 flex items-center min-h-[50px] w-full flex-col justify-center gap-3 rounded-2xl border bg-white bg-opacity-10 p-5 backdrop-blur-md transition hover:scale-105 md:h-[200px] md:w-[23%] md:p-4">
            <div className="w-full justify-center flex h-60px]">
            <Image
              src={"/images/seo_page_images/support.png"}
              height={10}
              width={60}
              alt="optimization"
              className="invert"
              loading="eager"
            ></Image>
            </div>
            <h2 className="text-xl text-center font-semibold">
              On-Page & Technical <br />
              Optimization
            </h2>
          </div>
        </div>

        {/* Space between rows */}
        {/* <div className='h-8'></div> */}

        {/* Second row */}
        <div className="mt-3 flex w-full flex-wrap justify-between gap-6 md:mt-5 md:justify-center md:gap-6">
          {/* card four */}
          <div className="border-1 cursor-default duration-400 flex items-center min-h-[50px] w-full flex-col justify-center gap-3 rounded-2xl border bg-white bg-opacity-10 p-5 backdrop-blur-md transition hover:scale-105 md:h-[200px] md:w-[23%] md:p-4">
            <div className="w-full justify-center flex h-60px]">
            <Image
              src={"/images/seo_page_images/content-creation.png"}
              height={10}
              width={60}
              alt="link building"
              className="invert"
              loading="eager"
            ></Image>
            </div>
            <h2 className="text-xl text-center font-semibold">
              Content Creation &
              <br /> Link Building
            </h2>
          </div>

          {/* card five */}
          <div className="border-1 cursor-default duration-400 items-center flex min-h-[50px] w-full flex-col justify-center gap-3 rounded-2xl border bg-white bg-opacity-10 p-5 backdrop-blur-md transition hover:scale-105 md:h-[200px] md:w-[23%] md:p-4">
            <div className="w-full justify-center flex h-60px]">
            <Image
              src={"/images/seo_page_images/tracking.png"}
              height={10}
              width={60}
              alt="performance tracking"
              className="invert -ml-[10px]"
              loading="eager"
            ></Image>
            </div>
            <h2 className="text-xl text-center font-semibold">
              Performance Tracking and <br />
              Contiunous Improvement
            </h2>
          </div>
        </div>
        {/* <img
          src="/images/seo_page_images/seo-process.gif"
          alt="seo process"
          className="w-full md:w-[60%] lg:w-[65%] xl:w-[65%]"
        /> */}
      </div>
    </main>
  );
};

export default SeoProcess;
