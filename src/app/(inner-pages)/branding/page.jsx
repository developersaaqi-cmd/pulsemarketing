import React from 'react'
import HeroSection from '@/components/landing_page_components/branding_page_components/HeroSection';
import PortfolioSection from '@/components/landing_page_components/branding_page_components/PortofolioSection';
import BrandingSection from '@/components/landing_page_components/branding_page_components/BrandingSection';
import DesignServicesSection from '@/components/landing_page_components/branding_page_components/DesignServicesSection';
import Testimonials from '@/components/landing_page_components/app_page_components/Testimonials';
import FaqSection from '@/components/landing_page_components/app_page_components/FaqSection';
// import OurBlog from '@/components/landing_page_components/app_page_components/OurBlog';
import Footer from '@/components/layout/Footer';
import Calender from '@/components/Calender/Calender';
import BrandingProcess from '@/components/landing_page_components/branding_page_components/BrandingProcess'
import NewTestimonials from '@/components/landing_page_components/app_page_components/New-Testimonial-section';
const Branding = () => {
  return (
        <main className="theme_bg_color">
            <HeroSection/>
            <PortfolioSection/>
            <BrandingSection/>
            <DesignServicesSection/>
            <BrandingProcess/>
            <div className="app-page-testimonial mt-[40px] md:mt-[80px]">
              <NewTestimonials/>
            </div>
            <FaqSection/>
            {/* <OurBlog/> */}
            <Calender/>
            <div>
            <Footer/>
            </div>
        </main>
  )
}

export default Branding