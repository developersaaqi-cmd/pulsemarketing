import React from "react";
import HeroSection from "../HeroSection/HeroSection";
import ChoosePlus from "../ChoosePlus";
import NewChoosePlus from "../ChoosePlus/new-choose"
import Tabs from "../MyTabs/Tabs";
import Projects from "../Projects/Projects";
import HeroSection2 from "../CroinHome/HeroSection2";
import Cards from "../DigitalAgencyCards/Cards";
import Newservice from "../DigitalAgencyCards/new-service-boxes";
import Testimonials from "../landing_page_components/app_page_components/Testimonials";
import NewTestimonail from "../landing_page_components/app_page_components/New-Testimonial-section";
import Calender from "../Calender/Calender";
// import Video from "../TiktokVideo/Video";
import Footer from "./Footer";
import SeorankingWidget from "../landing_page_components/SeoRankingWidget";
import BrandLogoCards from "@/components/ChoosePlus/BrandLogoCards";
import { FaStar } from "react-icons/fa";
import Link from "next/link";
import DownloadBook from "@/components/DownloadBook/DownloadBook";
import Expertise from "@/components/landing_page_components/cro_page_components/Expertise"
import PowerSignatureSection from "../landing_page_components/app_page_components/PowerSignatureSection";
const ContentWrapper = () => {

  return (
    <div>
      {/* <SeorankingWidget >  */}
      <HeroSection />
      <NewChoosePlus />
      {/* <ChoosePlus /> */}
      <Tabs />
      <BrandLogoCards />
      <Projects />
      {/* <DownloadBook/> */}
      <HeroSection2/>
      <Expertise />
      <Newservice />
      {/* <Cards />  */}
      {/* <Video /> */}
      {/* <PowerSignatureSection/> */}
      {/* <Testimonials/> */}
      <NewTestimonail />
      <Calender />
      <Footer />
    </div>
  );
};

export default ContentWrapper;








