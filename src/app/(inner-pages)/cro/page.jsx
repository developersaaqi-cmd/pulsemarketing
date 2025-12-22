import React from "react";
import HeroSection from "../../../components/landing_page_components/cro_page_components/HeroSection";
// import SecondSection from "../../../components/landing_page_components/cro_page_components/SecondSection";
// import WhyChooseUs from "../../../components/landing_page_components/cro_page_components/WhyChooseUs";
// import CROProcess from "../../../components/landing_page_components/cro_page_components/CROProcess";
import Expertise from "../../../components/landing_page_components/cro_page_components/Expertise";
// import Results from "../../../components/landing_page_components/cro_page_components/Results";
import Testimonials from "@/components/landing_page_components/app_page_components/Testimonials";
// import OurBlog from "@/components/landing_page_components/app_page_components/OurBlog";
import Footer from "@/components/layout/Footer";
import FAQSection from "@/components/landing_page_components/cro_page_components/CroFaq";
import Calender from "@/components/Calender/Calender";
import ConversionCalculator from "@/components/landing_page_components/cro_page_components/ConversionCalculator";
import BrandLogoCards from "@/components/ChoosePlus/BrandLogoCards";
import VideoSection from "@/components/landing_page_components/cro_page_components/VideoSection";
import CroProcess1 from "@/components/landing_page_components/cro_page_components/CroProcess1";
// import WhoWeWork from "@/components/landing_page_components/cro_page_components/WhoWeWork";
import Pricing from "@/components/landing_page_components/cro_page_components/Pricing"
import BeforeAfterTabs from "@/components/landing_page_components/cro_page_components/BeforeAfterTabs";
// import BeforeAfterSlider from "@/components/landing_page_components/cro_page_components/BeforeAfterSlider";
// import BeforeAfterSlider1 from "@/components/landing_page_components/cro_page_components/BeforeAfterSlider";
// import PulseDifferent from "@/components/landing_page_components/cro_page_components/PulseDifferent";
import YoutubeReviews from "@/components/landing_page_components/cro_page_components/YoutubeReviews";
import Team from "@/components/landing_page_components/cro_page_components/Team";
import NewPricingSection from "@/components/landing_page_components/cro_page_components/New-pricing-section";
import NewTestimonials from '@/components/landing_page_components/app_page_components/New-Testimonial-section';
const page = () => {
  return (
    <main className="theme_bg_color">
      <HeroSection />
      <ConversionCalculator />
      <BrandLogoCards/>
      <Expertise />
      {/* <Pricing/> */}
      <NewPricingSection/>
      <BeforeAfterTabs/>
      <VideoSection/>
      <CroProcess1/>
      <Team/>
      <YoutubeReviews/>
      <div className="app-page-testimonial mt-[40px] md:mt-[80px]">
        <NewTestimonials/>
      </div>
      <FAQSection />
      <Calender />
      <div>
      <Footer />
      </div>
    </main>
  );
};

export default page;
