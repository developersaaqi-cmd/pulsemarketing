import React from 'react'
import HeroSection from '../../../components/landing_page_components/web-dev_page_components/HeroSection'
import PorfolioSection from '../../../components/landing_page_components/web-dev_page_components/PortfolioSection'
import DigitalAgency from '../../../components/landing_page_components/web-dev_page_components/DigitalAgency'
import TechStack from '../../../components/landing_page_components/web-dev_page_components/TechStack'
import Services from '../../../components/landing_page_components/web-dev_page_components/Services'
import TakeSteps from '../../../components/landing_page_components/web-dev_page_components/TakeSteps'
import Testimonials from '@/components/landing_page_components/app_page_components/Testimonials';
import NewTestimonials from '@/components/landing_page_components/app_page_components/New-Testimonial-section';
import FAQSection from '../../../components/landing_page_components/web-dev_page_components/WebFaq';
// import OurBlog from '@/components/landing_page_components/app_page_components/OurBlog';
import Calender from '@/components/Calender/Calender';
import Footer from '@/components/layout/Footer';
import Tabs from "../../../components/MyTabs/Tabs";

const page = () => {
 
  return (
    <main className="theme_bg_color">
        <HeroSection/>
        <PorfolioSection/>
        {/* <div className='md:-mt-30 -mt-46 '>
        <DigitalAgency/>
        </div> */}
        <TechStack/>
        <Services/>
        <TakeSteps/>
        <Tabs />
        {/* <Testimonials/> */}
        <div className="web-dev-test">
          <NewTestimonials/>
        </div>
        <FAQSection />
        {/* <OurBlog/> */}
        <Calender/>
        <div>
        <Footer/>
        </div>
    </main>
  )
}

export default page