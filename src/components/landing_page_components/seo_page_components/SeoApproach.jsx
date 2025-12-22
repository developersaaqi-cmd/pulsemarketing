"use client";
// import { Reveal } from "@/utils/Reveal";
import Image from "next/image";
import React from "react";

const SeoApproach = () => {
  return (
    <React.Fragment>
      <main id="seo-service-circle-after">
        <div className='section-circle'>
          <img src="/new-circle.webp" />
        </div>
        <div className="flex w-full flex-col items-center justify-center ct-container" style={{ backgroundImage: "url('/images/app_page_images/radial.png')", backgroundSize: "contain", backgroundRepeat: "no-repeat", }} >
          <div id="center" className="heading-wrapper">
            <h3>Why SEO Matters for Your Business</h3>
          </div>

          {/* inner content  */}
          <div className="seo-service-circle-after-content">
            {/* left box  */}
            <div className="seo-service-circle-after-content-img">
              <div className="">
                <img 
                  layout="fill"
                  objectFit="cover"
                  src={"/images/seo_page_images/second-banner.png"}
                  className="rounded-2xl"
                />
              </div>

              {/* <div className="cards-seo mt-8 hidden gap-3 md:mt-28 md:flex ">
                <div className="flex w-[33%] items-center justify-around gap-2 border-r border-gray-2 pr-3 ">
                  <div>
                    <Image
                      width={30}
                      height={30}
                      src={"/images/seo_page_images/100.png"}
                    />
                  </div>

                  <div>
                    <h2 className="text-4xl font-bold tracking-wide">+126%</h2>
                    <p>
                      Total Visitors
                      <br />
                      Per Month
                    </p>
                  </div>
                </div>

                <div className="flex w-[33%] items-center justify-around gap-2 border-r border-gray-2  pr-10">
                  <div>
                    <Image
                      width={25}
                      height={20}
                      src={"/images/seo_page_images/50.png"}
                    />
                  </div>

                  <div>
                    <h2 className="text-4xl font-bold tracking-wide">+43%</h2>
                    <p>
                      Traffic <br />
                      Increased
                    </p>
                  </div>
                </div>

                <div className="flex w-[33%] items-center justify-around gap-2 pr-3">
                  <div>
                    <Image
                      width={30}
                      height={30}
                      src={"/images/seo_page_images/100.png"}
                    />
                  </div>

                  <div>
                    <h2 className="text-4xl font-bold tracking-wide">+220%</h2>
                    <p>
                      Leads Per <br />
                      Month
                    </p>
                  </div>
                </div>
              </div> */}
            </div>

            {/* right box  */}
            <div
              className=""
              style={{
                backgroundImage: "url('/images/app_page_images/radial.png)",
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
              }}
            >
              <h4 className=" text-xl font-bold tracking-wide md:text-3xl">
                Are you struggling to get your website noticed?
              </h4>

              <p>
                Do you want more traffic, leads, and sales without spending a
                fortune on ads? <br />
                Is your website buried deep in search results? <br />
                Wondering why your competitors are outranking you?
                <br />
                <p className="mt-4">
                  Partner with us to stay ahead in the competitive digital
                  landscape and achieve measurable results. Elevate your brand
                  today with Pulse Marketing!
                </p>
              </p>
            </div>
          </div>
        </div>
      </main>
    </React.Fragment>
  );
};

export default SeoApproach;
