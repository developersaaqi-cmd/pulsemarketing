import React from 'react'
import HeroSection from '../../../components/landing_page_components/term-condition_page_components/HeroSection'
import Terms from '../../../components/landing_page_components/term-condition_page_components/Terms'
import OtherContent from '../../../components/landing_page_components/term-condition_page_components/OtherContent'
import Footer from '@/components/layout/Footer'
import Calender from '@/components/Calender/Calender';

const page = () => {
  return (
    <main className="theme_bg_color">
        <HeroSection/>
        <Terms/>
        <OtherContent/>
        <Calender />
        <Footer/>
    </main>
  )
}

export default page