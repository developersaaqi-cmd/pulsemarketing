import React from 'react'
import HeroSection from '@/components/landing_page_components/app_page_components/HeroSection';
import PortfolioSection from '@/components/landing_page_components/app_page_components/PortfolioSection';
import AppDevelopmentSection from '@/components/landing_page_components/app_page_components/AppDevelopmentSection';
import RevolvingIndustries from '@/components/landing_page_components/app_page_components/RevolvingIndustries';
import AndriodSection from '@/components/landing_page_components/app_page_components/AndriodSection';
import Testimonials from '@/components/landing_page_components/app_page_components/Testimonials';
import FaqSection from '@/components/landing_page_components/app_page_components/FaqSection';
// import OurBlog from '@/components/landing_page_components/app_page_components/OurBlog';
import Footer from '@/components/layout/Footer';
import Calender from '@/components/Calender/Calender';
import Offerings from '../../../components/landing_page_components/app_page_components/OfferingSection';
import IosFriendly from '../../../components/landing_page_components/app_page_components/IosFriendly';
// import Calendar from '@/components/Calender';

const App = () => {
  return (
        <main className="theme_bg_color">
            <HeroSection/>
            <PortfolioSection/>
            <Offerings/>
            <IosFriendly/>
            <AppDevelopmentSection/>
            <RevolvingIndustries/>
            {/* <AndriodSection/> */}
            <Testimonials/>
            <FaqSection/>
             <div className='md:-mt-10 -mt-12'>
        <Calender/>
        </div>
            {/* <OurBlog/> */}
            <Footer/>
        </main>
  )
}

export default App