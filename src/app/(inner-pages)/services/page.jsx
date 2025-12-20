import React from 'react'
import HeroSection from '@/components/landing_page_components/services_page_components/HeroSection';
import WebDevSection from '@/components/landing_page_components/services_page_components/WebDevSection';
import AppDevSection from '@/components/landing_page_components/services_page_components/AppDevSection';
import LogoDesgin from '@/components/landing_page_components/services_page_components/LogoDesgin';
import SEOSection from '@/components/landing_page_components/services_page_components/SEOSection';
import AllInOneSection from '@/components/landing_page_components/services_page_components/AllInOneSection';
import AllService from '@/components/landing_page_components/services_page_components/all-service';
import Footer from '@/components/layout/Footer';
import Calender from '@/components/Calender/Calender';
import '../../global.css';

const Services = () => {
  return (
        <main className="theme_bg_color">
        <HeroSection/>
        {/* <WebDevSection/>
        <AppDevSection/>
        <LogoDesgin/>
        <SEOSection/>
        <AllInOneSection/> */}
        <AllService/>
        <div className="">
          <Calender />
        </div>
        <Footer/>
        </main>
  )
}

export default Services