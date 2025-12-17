'use client'
import Image from 'next/image'
import React from 'react'
import Slider from 'react-slick'
import {motion} from 'motion/react';

const Expertise = () => {

    const techSliderImage = [
        {
            image: '/images/cro_page_images/slider (1).png',
            title: 'Shopify',
            content: 'Unleashing the platform is full potential for growth.'
        },
        {
            image: '/images/cro_page_images/slider (2).png',
            title: 'WooCommerce',
            content: 'Tailored solutions for seamless WordPress integration.'
        },
        {
            image: '/images/cro_page_images/slider (3).png',
            title: 'Magento',
            content: 'Advanced customizations for enterprise level stores.'
        },
        {
            image: '/images/cro_page_images/slider (4).png',
            title: 'Big Commerce',
            content: 'Scalable optimizations for growing businesses.'
        },
        {
            image: '/images/cro_page_images/slider (1).png',
            title: 'Shopify',
            content: 'Unleashing the platform is full potential for growth.'
        },
        {
            image: '/images/cro_page_images/slider (2).png',
            title: 'WooCommerce',
            content: 'Tailored solutions for seamless WordPress integration.'
        },
        {
            image: '/images/cro_page_images/slider (3).png',
            title: 'Magento',
            content: 'Advanced customizations for enterprise level stores.'
        },
        {
            image: '/images/cro_page_images/slider (4).png',
            title: 'Big Commerce',
            content: 'Scalable optimizations for growing businesses.'
        },
    ]

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4, 
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 2000,
        arrows: false, 
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    

  return (
    <main className="relative ct-container"
        style={{
        backgroundImage: "url('/images/app_page_images/radial.png')",
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        }}>

        {/* top headin section  */}
        <div className='flex flex-col md:flex-row md:justify-between items-center gap-4'>
            <div className="heading-wrapper">
                <h3>Expertise in <br/>Leading Platforms</h3>
                <p>No matter your platform, our CRO strategies are designed to deliver results that drive revenue and delight your customers.</p>
            </div>
        </div>

        {/* slider content div  */}
        <div className="expertise-slider mt-[30px]">
            <Slider {...settings}>
                {techSliderImage.map((item, index) => (
                <div key={index}>
                    <motion.div
                    style={{ margin: "0 20px 0 0" }}   // 👈 20px gap
                    whileInView={{
                        scale: 1,
                        opacity: 1,
                    }}
                    transition={{
                        delay: 0.5,
                        duration: 0.5,
                        ease: "easeInOut",
                    }}
                    viewport={{ once: false, amount: 0.2 }}
                    className="flex flex-col items-start justify-center"
                    >
                    <Image
                        src={item.image}
                        loading="eager"
                        alt={item.content}
                        width={400}
                        height={250}
                        className="rounded-lg"
                    />
                    <h3 className="text-start font-semibold text-2xl mt-3">
                        {item.title}
                    </h3>
                    <p className="text-start text-[15px]">
                        {item.content.slice(0, 70)}
                    </p>
                    </motion.div>
                </div>
                ))}
            </Slider>
        </div>
    </main>
  )
}

export default Expertise