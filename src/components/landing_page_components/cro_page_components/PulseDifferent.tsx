import React from "react";
import Image from "next/image";

const PulseDifferent = () => {
  return (
    <>
      <main
        className="mx-auto md:mt-10 flex w-full flex-col-reverse flex-wrap items-center md:justify-start justify-center px-4 py-10 md:w-[1200px] md:flex-row md:px-0"
      >
        <div className="flex flex-wrap justify-between">
             <div className="mb-4 md:mt-0 mt-8 flex w-full transform items-start justify-center transition-transform duration-700 ease-in-out hover:scale-105 md:mb-0 md:w-[28%]">
            <Image
              src={"/images/web-dev_page_images/pulse-logo.webp"}
              width={350}
              height={350}
              alt="mob1"
            />
          </div>
          <div className="w-full md:w-[60%]">
            <h2 className="text-left text-2xl font-bold tracking-wide md:text-4xl">
              What Makes Pulse Different
            </h2>

            <p className="text-left mt-4 text-[15px]">
              Pulse Marketing is more than a web design agency—we build digital solutions that drive real business results.
              Our approach is rooted in strategy, speed,
              and custom development. We don’t rely on templates or shortcuts. Every project is built to match your goals,
              whether it's a marketing website, ecommerce store,
              or full-scale software platform.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-between gap-6">
              {/* card one  */}
              <div className="border-1 flex flex-col min-h-[50px] justify-center w-full transform gap-3 rounded-2xl border bg-white bg-opacity-10 p-5 backdrop-blur-md transition-transform duration-700 ease-in-out hover:scale-105 md:w-[100%]">
                <div className="flex">
                  <Image
                    src="/images/services_page_images/blue-dot.png"
                    alt="blue-dot"
                    width={25}
                    height={20}
                  />
                  <h3 className="text-xl flex font-bold tracking-wide">
                    Strategy-led process
                  </h3>
                </div>

                <div className="flex">
                  <Image
                    src="/images/services_page_images/blue-dot.png"
                    alt="blue-dot"
                    width={25}
                    height={20}
                  />
                  <h3 className="text-xl flex font-bold tracking-wide">
                    Fast and reliable delivery
                  </h3>
                </div>

                <div className="flex items-center">
                  <Image
                    src="/images/services_page_images/blue-dot.png"
                    alt="blue-dot"
                    width={30}
                    height={20}
                    className="md:h-[25px] md:w-[25px]"
                  />
                  <h3 className="text-xl flex font-bold tracking-wide">
                    Expertise in AI and automation
                  </h3>
                </div>

                <div className="flex">
                  <Image
                    src="/images/services_page_images/blue-dot.png"
                    alt="blue-dot"
                    width={25}
                    height={20}
                  />
                  <h3 className="text-xl flex font-bold tracking-wide">
                    Fully custom development
                  </h3>
                </div>

                <div className="flex items-center">
                  <Image
                    src="/images/services_page_images/blue-dot.png"
                    alt="blue-dot"
                    width={30}
                    height={20}
                    className="md:h-[25px] md:w-[25px]"
                  />
                  <h3 className="text-xl flex font-bold tracking-wide">
                    Clear communication and collaboration
                  </h3>
                </div>
              </div>
            </div>

            {/* <p className="text-sm">
                  <div className="flex flex-col ">
                    <div className="mb-2 flex w-auto items-center gap-1">
                      <Image
                        src="/images/services_page_images/blue-dot.png"
                        alt="blue-dot"
                        width={20}
                        height={20}
                      />
                      <p>Launch</p>
                    </div>
                    <div className="mb-2 flex w-auto items-center gap-1">
                      <Image
                        src="/images/services_page_images/blue-dot.png"
                        alt="blue-dot"
                        width={20}
                        height={20}
                      />
                      <p>Opinion Monitoring</p>
                    </div>
                    <div className="mb-2 flex w-auto items-center gap-1">
                      <Image
                        src="/images/services_page_images/blue-dot.png"
                        alt="blue-dot"
                        width={20}
                        height={20}
                      />
                      <p>Maintenance</p>
                    </div>
                    <div className="mb-2 flex w-auto items-center gap-1">
                      <Image
                        src="/images/services_page_images/blue-dot.png"
                        alt="blue-dot"
                        width={20}
                        height={20}
                      />
                      <p>Post-deployment Support</p>
                    </div>
                  </div>
                </p> */}
          </div>

          {/* card two  */}
          {/* <div className="border-1 flex min-h-[50px] w-full transform flex-col gap-3 rounded-2xl border bg-white bg-opacity-10 p-5 backdrop-blur-md transition-transform duration-700 ease-in-out hover:scale-105 md:w-[48%]">
                <h3 className="text-xl font-bold tracking-wide">
                  Development Stage
                </h3>
                <p className="text-sm">
                  <div className="flex flex-col ">
                    <div className="mb-2 flex w-auto items-center gap-1">
                      <Image
                        src="/images/services_page_images/blue-dot.png"
                        alt="blue-dot"
                        width={20}
                        height={20}
                      />
                      <p>Business analysis</p>
                    </div>
                    <div className="mb-2 flex w-auto items-center gap-1">
                      <Image
                        src="/images/services_page_images/blue-dot.png"
                        alt="blue-dot"
                        width={20}
                        height={20}
                      />
                      <p>Document specifications</p>
                    </div>
                    <div className="mb-2 flex w-auto items-center gap-1">
                      <Image
                        src="/images/services_page_images/blue-dot.png"
                        alt="blue-dot"
                        width={20}
                        height={20}
                      />
                      <p>Preparing wireframes</p>
                    </div>
                    <div className="mb-2 flex w-auto items-center gap-1">
                      <Image
                        src="/images/services_page_images/blue-dot.png"
                        alt="blue-dot"
                        width={20}
                        height={20}
                      />
                      <p>Getting client approval</p>
                    </div>
                  </div>
                </p>
              </div> */}

          {/* card three  */}
          {/* <div className="border-1 flex min-h-[50px] w-full transform flex-col gap-3 rounded-2xl border bg-white bg-opacity-10 p-5 backdrop-blur-md transition-transform duration-700 ease-in-out hover:scale-105 md:w-[48%]">
                <h3 className="text-xl font-bold tracking-wide">
                  Quality Assurance
                </h3>
                <p className="text-sm">
                  <div className="flex flex-col ">
                    <div className="mb-2 flex w-auto items-center gap-1">
                      <Image
                        src="/images/services_page_images/blue-dot.png"
                        alt="blue-dot"
                        width={20}
                        height={20}
                      />
                      <p>Business analysis</p>
                    </div>
                    <div className="mb-2 flex w-auto items-center gap-1">
                      <Image
                        src="/images/services_page_images/blue-dot.png"
                        alt="blue-dot"
                        width={20}
                        height={20}
                      />
                      <p>Document specifications</p>
                    </div>
                    <div className="mb-2 flex w-auto items-center gap-1">
                      <Image
                        src="/images/services_page_images/blue-dot.png"
                        alt="blue-dot"
                        width={20}
                        height={20}
                      />
                      <p>Preparing wireframes</p>
                    </div>
                    <div className="mb-2 flex w-auto items-center gap-1">
                      <Image
                        src="/images/services_page_images/blue-dot.png"
                        alt="blue-dot"
                        width={20}
                        height={20}
                      />
                      <p>Getting client approval</p>
                    </div>
                  </div>
                </p>
              </div> */}

          {/* card one  */}
          {/* <div className="border-1 flex min-h-[50px] w-full transform flex-col gap-3 rounded-2xl border bg-white bg-opacity-10 p-5 backdrop-blur-md transition-transform duration-700 ease-in-out hover:scale-105 md:w-[48%]">
                <h3 className="text-xl font-bold tracking-wide">Deployment</h3>
                <p className="text-sm">
                  <div className="flex flex-col ">
                    <div className="mb-2 flex w-auto items-center gap-1">
                      <Image
                        src="/images/services_page_images/blue-dot.png"
                        alt="blue-dot"
                        width={20}
                        height={20}
                      />
                      <p>Launch</p>
                    </div>
                    <div className="mb-2 flex w-auto items-center gap-1">
                      <Image
                        src="/images/services_page_images/blue-dot.png"
                        alt="blue-dot"
                        width={20}
                        height={20}
                      />
                      <p>Opinion Monitoring</p>
                    </div>
                    <div className="mb-2 flex w-auto items-center gap-1">
                      <Image
                        src="/images/services_page_images/blue-dot.png"
                        alt="blue-dot"
                        width={20}
                        height={20}
                      />
                      <p>Maintenance</p>
                    </div>
                    <div className="mb-2 flex w-auto items-center gap-1">
                      <Image
                        src="/images/services_page_images/blue-dot.png"
                        alt="blue-dot"
                        width={20}
                        height={20}
                      />
                      <p>Post-deployment Support</p>
                    </div>
                  </div>
                </p>
              </div> */}
        </div>
      </main>
    </>
  )
}
export default PulseDifferent;