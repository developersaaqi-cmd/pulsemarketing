'use client';
import React from 'react'
import Navbar from '@/components/landing_page_components/Navbar'
import Image from 'next/image'
// import { Reveal } from '@/utils/Reveal'
const HeroSection = () => {
  return (
    <main
        style={{
            backgroundImage: "url(/images/term_page_images/hero.png)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundAttachment: "fixed",
            backgroundPosition: "center",
        }}
        className="relative cro-home"
        >
        <div className="absolute inset-0 bg-black/30 bg-opacity-50"></div>

        <Navbar />
        <div className="relative flex w-full flex-col items-center justify-center" id='privacy-banner'>
            <div className="heading-wrapper" id="center-span-heading">
                <span>
                    <span className="mr-2 md:text-left text-cyan-500">•</span>The legal stuff
                </span>
                <h3>Terms And Conditions</h3>
                <p>Please read these terms and conditions carefully before using our service.</p>
            </div>
        </div>
        </main>
  )
}

export default HeroSection






