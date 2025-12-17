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
const page = () => {
  return (
    <main className="theme_bg_color">
      <HeroSection />
      <ConversionCalculator />
      {/* <div
        style={{
          backgroundImage: "url('/images/services_page_images/circle.png/')",
          backgroundSize: "cover",
        }}
        className="h-[43vh] translate-y-[-51%] transform md:h-[500px] md:translate-y-[-75%]"
      />
      <div ClassName="cro-calculator md:h-[674px] overflow-hidden m-auto h-[1169px] md:w-[1184px] w-[100%]">
       <iframe
        src="https://pulsemarketing.cloud/calculator/calculator.html"
        width="100%"
        height="100%"
        style={{ border: "none", borderRadius: "10px" }}
    />
    </div> */}
    <BrandLogoCards/>
    <div className='md:translate-y-[70%] translate-y-[65%]'>
      <Expertise />
      {/* <WhoWeWork/> */}
      </div>
      {/* <SecondSection /> */}
      <Pricing/>
      <BeforeAfterTabs/>
      {/* <PulseDifferent/> */}
      {/* <WhyChooseUs /> */}
      {/* <CROProcess /> */}
      <VideoSection/>
      <CroProcess1/>
      <Team/>
      <YoutubeReviews/>
      {/* <BeforeAfterSlider/> */}
      {/* <Results /> */}
      <Testimonials />
      <FAQSection />
      {/* <OurBlog /> */}
      <Calender />
      <div>
      <Footer />
      </div>
    </main>
  );
};

export default page;
