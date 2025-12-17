import Image from "next/image";
import React from "react";

const WhoWeWork = () => {
  return (
    <main
    style={{
      backgroundImage:"url('/images/cro_page_images/section-expertise.jpg')",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
    }}
     className="w-full h-[180px] md:h-[600px] md:mb-24 mb-16 mt-8 px-6 py-16 md:mx-auto md:mt-0 md:w-[1200px] md:px-0">
      {/* <div>
        <h1 className="mb-3 text-center text-3xl font-bold tracking-wide md:text-5xl">
          <span className="block md:inline">Who We Work With</span>
        </h1>
      </div> */}

       {/* <div className="mt-8 flex flex-wrap items-center justify-between gap-3 px-4 md:mt-20 md:justify-center md:gap-4 md:px-0"> */}
              {/* First row */}
              {/* <div className="flex w-full flex-wrap justify-center gap-6 md:gap-6"> */}
                {/* card one  */}
                {/* <div className="cursor-default duration-400 flex min-h-[50px] w-full flex-col gap-3 rounded-2xl transition p-5 hover:scale-105 md:h-[340px] md:w-[15%]   md:p-0">
                  <div className="w-full justify-center flex h-60px]">
                  <Image
                    src={"/images/cro_page_images/shopify.png"}
                    height={250}
                    width={400}
                    alt="shopify store"
                    className=""
                    loading="eager"
                  ></Image>
                  </div>
                  <h2 className="text-xl text-center font-semibold">
                   Shopify Stores
                  </h2>
            </div> */}

                {/* card two  */}
                {/* <div className="cursor-default duration-400 flex min-h-[50px] w-full flex-col gap-3 rounded-2xl transition p-5 hover:scale-105 md:h-[340px] md:w-[15%]  md:p-0">
                  <div className="w-full justify-center flex h-60px]">
                  <Image
                    src={"/images/cro_page_images/wordpress.png"}
                    height={250}
                    width={400}
                    alt="shopify store"
                    className=""
                    loading="eager"
                  ></Image>
                  </div>
                  <h2 className="text-xl text-center font-semibold">
                  WooCommerce Brands
                  </h2>
            </div> */}

              {/* card three  */}
                {/* <div className="cursor-default duration-400 flex min-h-[50px] w-full flex-col gap-3 rounded-2xl transition p-5 hover:scale-105 md:h-[340px] md:w-[15%]   md:p-0">
                  <div className="w-full justify-center flex h-60px]">
                  <Image
                    src={"/images/cro_page_images/Coaches-&-Info-Products.png"}
                    height={250}
                    width={400}
                    alt="shopify store"
                    className=""
                    loading="eager"
                  ></Image>
                  </div>
                  <h2 className="text-xl text-center font-semibold">
                  Coaches & Info Products
                  </h2>
            </div> */}

            
              {/* card four  */}
                {/* <div className="cursor-default duration-400 flex min-h-[50px] w-full flex-col gap-3 rounded-2xl transition p-5 hover:scale-105 md:h-[340px] md:w-[15%]   md:p-0">
                  <div className="w-full justify-center flex h-60px]">
                  <Image
                    src={"/images/cro_page_images/sass.png"}
                    height={250}
                    width={400}
                    alt="shopify store"
                    className=""
                    loading="eager"
                  ></Image>
                  </div>
                  <h2 className="text-xl text-center font-semibold">
                  SaaS Companies
                  </h2>
            </div> */}

            
              {/* card five  */}
                {/* <div className="cursor-default duration-400 flex min-h-[50px] w-full flex-col gap-3 rounded-2xl transition p-5 hover:scale-105 md:h-[340px] md:w-[15%]   md:p-0">
                  <div className="w-full justify-center flex h-60px]">
                  <Image
                    src={"/images/cro_page_images/Agencies-or-Startups.png"}
                    height={250}
                    width={400}
                    alt="shopify store"
                    className=""
                    loading="eager"
                  ></Image>
                  </div>
                  <h2 className="text-xl text-center font-semibold">
                 Agencies or Startups ($10K–$10M/month range)
                  </h2>
            </div>
          </div>
        </div> */}
      </main>
    )}
export default WhoWeWork;