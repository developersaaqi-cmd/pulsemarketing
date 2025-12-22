"use client";

import Link from "next/link";
import PrimaryBtn from "../landing_page_components/PrimaryBtns/PrimaryBtn";

export default function NewChoosePlus() {

  return (
    <div className="ct-container" id="service-section">
        <div className="heading-wrapper">
            <h3>Results-Driven Digital Solutions for Business Growth.</h3>
            <p>Maximize revenue and customer engagement with Pulse your expert partner in high-impact digital strategies that drive sales, conversions, and long-term success.</p>
        </div>
        <div className="service-boxes-wrapper">
            <div className="service-box">
                <div className="content">
                    <h5>Web Development</h5>
                    <p>Every decision we make needs to answer the million dollar question: how will this benefit our partner is goal best? We work to develop solutions. Step into our digital workshop, where innovative ideas converge with technical prowess to build bespoke online experiences.</p>
                </div>
                <div className="button">
                    <div className="btn">
                        <Link href={"/web-development"}>
                            <PrimaryBtn text="Learn More" />
                        </Link>
                    </div>
                    <div className="icon">
                        <img src="/web.png" />
                    </div>
                </div>
            </div>
            <div className="service-box">
                <div className="content">
                    <h5>Application Development</h5>
                    <p>Welcome to the hub of digital innovation, where ideas evolve into functional intuitive applications that redefine user experiences. Our application development services are centered around creating robust, scalable solutions while delivering solutions that exceed expectations.</p>
                </div>
                <div className="button">
                    <div className="btn">
                        <Link href={"/app/"}>
                            <PrimaryBtn text="Learn More" />
                        </Link>
                    </div>
                    <div className="icon">
                        <img src="/app.png" />
                    </div>
                </div>
            </div>
            <div className="service-box">
                <div className="content">
                    <h5>Digital Branding</h5>
                    <p>Our team of talented graphic designers will work with you through the whole process to create a stunning marketing piece that you will love. From logos, business cards, brochures, to signs and everything in between we have you covered for all of your design needs.</p>
                </div>
                <div className="button">
                    <div className="btn">
                        <Link href={"/branding/"}>
                            <PrimaryBtn text="Learn More" />
                        </Link>
                    </div>
                    <div className="icon">
                        <img src="/deigital-marketing.png" />
                    </div>
                </div>
            </div>
            <div className="service-box">
                <div className="content">
                    <h5>Search Engine Optimization</h5>
                    <p>Unlock the full potential of your online presence with Pulse Marketing is expert SEO services. Our dedicated team crafts personalized strategies to improve your search engine rankings, drive organic traffic, and enhance your digital visibility.</p>
                </div>
                <div className="button">
                    <div className="btn">
                        <Link href={"/seo/"}>
                            <PrimaryBtn text="Learn More" />
                        </Link>
                    </div>
                    <div className="icon">
                        <img src="/seo.png" />
                    </div>
                </div>
            </div>
            <div className="service-box">
                <div className="content">
                    <h5>Conversion Rate Optimization CRO</h5>
                    <p>At Pulse, we specialize in Conversion Rate Optimization (CRO) to help e-commerce businesses maximize their sales and revenue. Our tailored CRO strategies are designed to identify barriers in your customer journey, optimize your website performance, and turn casual visitors into loyal customers.</p>
                </div>
                <div className="button">
                    <div className="btn">
                        <Link href={"/cro/"}>
                            <PrimaryBtn text="Learn More" />
                        </Link>
                    </div>
                    <div className="icon">
                        <img src="/cro.png" />
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}