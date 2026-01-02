"use client";
import React from "react";
// import { Reveal } from "@/utils/Reveal";
import Image from "next/image";
import { motion } from "motion/react";
import Newservice from "@/components/DigitalAgencyCards/new-service-boxes"
import Link from "next/link";
import PrimaryBtn from "@/components/landing_page_components/PrimaryBtns/PrimaryBtn";

const Allservice = () => {
  return (
    <main className="relative w-full">
      <div className='section-circle'>
        <img src="/new-circle.webp" />
      </div>
      <div className="flex-col md:flex md:items-center md:justify-between lg:flex-row ct-container service-page ct-new-service-cards" id="section-circle-after-div">
        {/* <Newservice/> */}
        <div className="new-service-cards" id="full-services-section">
          <div className="">
            <div className="heading-wrapper">
              <h3>Results-Driven Digital Solutions for Business Growth.</h3>
              <p>Maximize revenue and customer engagement with Pulse your expert partner in high-impact digital strategies that drive sales, conversions, and long-term success.</p>
            </div>

            <div className="full-services">
              <div className="full-service-card" style={{ backgroundImage: "url('/images/services_page_images/03.png')", }} >
                <div className="content">
                  <h3>Web<br/> Development</h3>
                  <p>Every decision we make needs to answer the million dollar question: how will this benefit our partner is goal best? We work to develop solutions. Step into our digital workshop, where innovative ideas converge with technical prowess to build bespoke online experiences.</p>
                  <Link href={"/web-development/"}>
                    <PrimaryBtn text="Learn More" />
                  </Link>
                </div>
                <div className="right-content">
                  <div className="ct-text-wrapper">
                    <h4>Tailored Solutions</h4>
                    <span></span>
                    <ul>
                      <li>Cutting-Edge Technology</li>
                      <li>User -Centric Design</li>
                      <li>SEO Optimization</li>
                      <li>Continuous Evolution</li>
                    </ul>
                  </div>
                </div>
                <h5 className="full-heading">Web Development</h5>
              </div>

              <span className="new-full-services-divider"></span>

              <div className="full-service-card mpnone" style={{ backgroundImage: "url('/images/services_page_images/third-section-img.png')", }} >
                <div className="content">
                  <h3>Application<br/> Development</h3>
                  <p>Welcome to the hub of digital innovation, where ideas evolve into functional intuitive applications that redefine user experiences. Our application development services are centered around creating robust, scalable solutions while delivering solutions that exceed expectations.</p>
                  <Link href={"/app/"}>
                    <PrimaryBtn text="Learn More" />
                  </Link>
                </div>
                <div className="right-content">
                  <div className="ct-text-wrapper">
                    <h4>Our Services</h4>
                    <span></span>
                    <ul>
                      <li>Flutter App Development</li>
                      <li>React Native Development</li>
                      <li>Native App Development</li>
                      <li>Maintenance Code Review</li>
                    </ul>
                  </div>
                </div>
                <h5 className="full-heading">App Development</h5>
              </div>

              <span className="new-full-services-divider"></span>

              <div className="full-service-card mpnone" style={{ backgroundImage: "url('/images/services_page_images/02.png')", }} >
                <div className="content">
                  <h3>Logo Design<br/> & Branding</h3>
                  <p>Our team of talented graphic designers will work with you through the whole process to create a stunning marketing piece that you will love. From logos, business cards, brochures, to signs and everything in between we have you covered for all of your design needs.</p>
                  <Link href={"/branding"}>
                    <PrimaryBtn text="Learn More" />
                  </Link>
                </div>
                <div className="right-content">
                  <div className="ct-text-wrapper">
                    <h4>Packaging Design</h4>
                    <span></span>
                    <ul>
                      <li>Business Card Design</li>
                      <li>Brochure Design</li>
                      <li>Corporate Identity Design</li>
                      <li>Logo Design</li>
                    </ul>
                  </div>
                </div>
                <h5 className="full-heading">Branding</h5>
              </div>

              <span className="new-full-services-divider"></span>

              <div className="full-service-card mpnone" style={{ backgroundImage: "url('/images/services_page_images/01.png')", }} >
                <div className="content">
                  <h3>Search Engine<br/> Optimization</h3>
                  <p>Unlock the full potential of your online presence with Pulse Marketing is expert SEO services. Our dedicated team crafts personalized strategies to improve your search engine rankings, drive organic traffic, and enhance your digital visibility.</p>
                  <Link href={"/seo"}>
                    <PrimaryBtn text="Learn More" />
                  </Link>
                </div>
                <div className="right-content">
                  <div className="ct-text-wrapper">
                    <h4>Business Assessment</h4>
                    <span></span>
                    <ul>
                      <li>Target Customer</li>
                      <li>Competitor Analysis</li>
                    </ul>
                  </div>
                </div>
                <h5 className="full-heading">SEO</h5>
              </div>

              <span className="new-full-services-divider"></span>

              <div className="full-service-card mpnone" style={{ backgroundImage: "url('/images/services_page_images/cro-section.png')", }} >
                <div className="content">
                  <h3>Conversation Rate<br/> Optimiation</h3>
                  <p>At Pulse, we specialize in Conversion Rate Optimization (CRO) to help e-commerce businesses maximize their sales and revenue. Our tailored CRO strategies are designed to identify barriers in your customer journey, optimize your website performance, and turn casual visitors into loyal customer.</p>
                  <Link href={"/cro"}>
                    <PrimaryBtn text="Learn More" />
                  </Link>
                </div>
                <div className="right-content">
                  <div className="ct-text-wrapper">
                    <h4>CRM & Lead Catch!</h4>
                    <span></span>
                    <ul>
                      <li>Emails & Texts That Are<br/>Hard To Ignore.</li>
                      <li>Smart And Hassel Free<br/>Business Line.</li>
                    </ul>
                  </div>
                </div>
                <h5 className="full-heading">CRO</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Allservice;