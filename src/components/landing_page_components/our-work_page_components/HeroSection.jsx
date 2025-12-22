"use client"; // Add this line at the top of the file

import React, { useState, useRef, useCallback, useEffect } from "react";
import Navbar from "@/components/landing_page_components/Navbar";
import Image from "next/image";
import Link from "next/link";
import { MdArrowForward } from "react-icons/md";
import { FaStar } from "react-icons/fa";
import "./index.css";
import PrimaryBtn from "../PrimaryBtns/PrimaryBtn";
import { baseURL } from "../../../../utils/useRequest";

const HeroSection = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [portfolioContent, setPortfolioContent] = useState([]);
  const imageSectionRef = useRef(null);

  const handleTabChange = (index) => {
    if (index >= 0 && index < industries.length) {
      setActiveTab(index);
      imageSectionRef.current?.scrollIntoView({ behavior: "smooth" });
    } else {
      console.warn("Invalid tab index:", index);
    }
  };

  const industries = [
    { name: "Animated" },
    { name: "Hospitality" },
    { name: "Contractors" },
    { name: "E-Commerce" },
    { name: "Services" },
    { name: "Landing Pages" },
    { name: "Real Estate" },
    { name: "Dispensaries" },
    { name: "TurnKey Sites" },
    { name: "Apps" }, // This is the Apps tab
  ];

  const tabs = [
    { label: "Animated", endpoint: "component/read?page=674f6c452eb453a1457758e9" },
    { label: "Hospitality", endpoint: "component/read?page=674f753f54e5bff06e4ba7f8" },
    { label: "Contractors", endpoint: "component/read?page=674f767b54e5bff06e4ba80e" },
    { label: "E-Commerce", endpoint: "component/read?page=674f8684f094b86dc391900b" },
    { label: "Services", endpoint: "component/read?page=674f886ef094b86dc3919021" },
    { label: "Landing Pages", endpoint: "component/read?page=674f89eef094b86dc3919040" },
    { label: "Real Estate", endpoint: "component/read?page=674f8ac9f094b86dc3919052" },
    { label: "Dispensaries", endpoint: "component/read?page=674f8b63f094b86dc3919062" },
    { label: "TurnKey Sites", endpoint: "component/read?page=674f8bc8f094b86dc391906d" },
    { label: "Apps", endpoint: "component/read?page=674f8d4af094b86dc3919097" },
  ];

  const fetchTabContent = useCallback(async (endpoint) => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(`${baseURL}/${endpoint}`);
      if (!response.ok) {
        throw new Error("Failed to fetch portfolio content");
      }
      const data = await response.json();
      setPortfolioContent(data?.data?.components);
    } catch (err) {
      setError(err.message);
      console.error("Error fetching portfolio content:", err);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchTabContent(tabs[activeTab].endpoint);
  }, [activeTab, fetchTabContent]);

  if (isLoading) {
    return (
      <div className="flex min-h-[500px] items-center justify-center">
        <div className="h-12 w-12 animate-spin rounded-full border-t-2 border-blue-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex min-h-[500px] items-center justify-center text-center text-red-500">
        {error}
      </div>
    );
  }

  return (
    <>
      <main
        style={{
          backgroundImage: "url('/images/our-work_page_images/our-work.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
          backgroundPosition: "center",
        }}
        className="relative cro-home"
        id="portfolio-banner"
      >
        <div className="absolute inset-0 bg-black/30 bg-opacity-50"></div>
  
        <Navbar />
        <div className="relative flex w-full flex-col items-center justify-center ct-container" id="service-page-banner">
          <div className="z-10 flex flex-col">
            <div className="mb-5 flex">
              <Link
                href={"https://www.bbb.org/ca/bc/vancouver/profile/digital-marketing/pulse-marketing-inc-0037-2428735/#sealclick"}
                target="_blank"
              >
                <Image
                  alt="image"
                  className="mr-8"
                  src={"/images/cro_page_images/bbb.png"}
                  width={125}
                  height={125}
                  loading="eager"
                />
              </Link>
  
              <Link
                href={"https://www.google.com/search?sca_esv=09379ecd0b6efd91&sca_upv=1&q=Pulse+Marketing+Inc.&ludocid=8690602816288484550&lsig=AB86z5VS1uhD8C0TEf_4MQU5HsGp&kgs=dd8e1417abb4f44a&shndl=30&shem=lnole,lsde,lsp&source=sh/x/loc/act/m1/1"}
                target="_blank"
              >
                <Image
                  alt="image"
                  src={"/images/cro_page_images/google.png"}
                  width={125}
                  height={125}
                  loading="eager"
                />
              </Link>
            </div>
            <div className="-ml-[4px] mb-2 flex items-center gap-1 md:-ml-[5px]">
              <Image
                src="/images/services_page_images/blue-dot.png"
                alt="blue-dot"
                width={20}
                height={20}
                loading="eager"
              />
              <p>Our Portfolio</p>
            </div>
  
            <h2
              className="pb-2 text-3xl font-bold capitalize text-white md:text-5xl"
              style={{ lineHeight: "1.2" }}
            >
              Explore All Industries
            </h2>
  
            <div className="portfolio-ct-tabs">
              {industries.map((industry, index) => (
                <div
                  key={index}
                  className={`flex w-[49%] cursor-pointer flex-wrap items-center justify-start rounded px-4 py-2 text-center text-[1.2rem] font-medium md:w-auto md:px-4 md:py-0 md:text-[1.6rem] ${
                    index === activeTab ? "text-white" : "text-gray-500"
                  }`}
                  onClick={() => handleTabChange(index)}
                >
                  {industry.name}
                </div>
              ))}
            </div>
  
            <div className="mt-3 flex w-full flex-col flex-wrap gap-2 text-left md:flex-row md:items-center md:gap-3">
              <p> Clients rate our team and work</p>
              <div className="flex text-yellow-500">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
              <p>4.9</p>
              <p className="-mb-[8px] text-blue-300 md:mb-0">
                based on 86 client reviews
              </p>
            </div>
  
            <div className="mt-5">
              <Link
                href={"https://calendly.com/ianpslater/powermeeting"}
                target="_blank"
              >
                <button
                  className="poppins-regular contact-btn mb-10 mt-0 flex items-center justify-between rounded-3xl border-none bg-white px-4 py-2 text-black outline-none ease-in-out hover:bg-my-blue-gradient hover:text-white hover:transition-all md:mb-0 md:mt-[24px]"
                >
                  Book Now
                  <div className="ml-2 h-full rounded-full bg-[#6EE3D7] p-[2px]">
                    <MdArrowForward />
                  </div>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </main>

      {/* Images Section */}
      <main className="relative w-full">
        <div className='section-circle'>
          <img src="/new-circle.webp" />
        </div>
        <div
          className={`flex w-full flex-wrap items-center justify-center ct-container ${activeTab === 9 ? 'app-tab' : ''}`} 
          id="portflio-page-pr"
        >
          {portfolioContent?.slice(0)?.map((image, index) => (
            <div
              className="flex w-full flex-col justify-center md:w-1/2"
              key={index}
            >
              <div className="relative mb-8 h-[200px] w-[95%] transform rounded-2xl transition-transform duration-700 ease-in-out hover:scale-105 md:mb-0 md:h-[350px]">
                <Link href={image?.section} target="_blank">
                  <Image
                    src={image?.pictures[0]}
                    layout="fill"
                    objectFit="contain"
                    className="rounded-2xl"
                    alt={`Industry Image ${index + 1}`}
                  />
                </Link>
              </div>

              <div className="-mt-2 md:mt-2">
                <h4 className="text-left text-xl font-semibold tracking-wide">
                  {image?.name.toUpperCase()}
                </h4>

                <div className="mb-7 flex flex-wrap items-center justify-between gap-4 md:mb-0">
                  <div className="flex flex-wrap gap-4">
                    {["Design", "Development", "SEO"].map((tag, idx) => (
                      <div
                        key={idx}
                        className="mb-2 flex w-auto items-center gap-1"
                      >
                        <Image
                          src="/images/services_page_images/blue-dot.png"
                          alt="blue-dot"
                          width={20}
                          height={20}
                        />
                        <p>{tag}</p>
                      </div>
                    ))}
                  </div>
                  <div className="mr-0 md:mr-8">
                    <PrimaryBtn
                      text="View Site"
                      onClick={() => {
                        window.open(`${image?.section}`, "_blank");
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </>
  );
};

export default HeroSection;