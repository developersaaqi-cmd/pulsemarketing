"use client";
import React from "react";
import HeroSection from "../../../components/landing_page_components/about_page_components/HeroSection";
import AboutText from "../../../components/landing_page_components/about_page_components/AboutText";
import Testimonial from "@/components/landing_page_components/app_page_components/Testimonials";
import NewTestimonial from "@/components/landing_page_components/app_page_components/New-Testimonial-section";
import FaqSection from "@/components/landing_page_components/app_page_components/FaqSection";
import Footer from "@/components/layout/Footer";
import Calender from '@/components/Calender/Calender';

// import OurBlog from '@/components/landing_page_components/app_page_components/OurBlog';
import BrandLogoCards from "@/components/ChoosePlus/BrandLogoCards";
import IanSection from "@/components/landing_page_components/about_page_components/IanSection";

const AboutUs = () => {
  return (
    <main className="theme_bg_color">
      <HeroSection />
      <AboutText />
      <BrandLogoCards />
      <IanSection />
      <div className="my-[40px] md:my-[40px] lg:my-[100px]">
        <NewTestimonial />
      </div>
      <FaqSection />
      <div className="">
        <Calender />
      </div>
      <Footer />
    </main>
  );
};

export default AboutUs;
