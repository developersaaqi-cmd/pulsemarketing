"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import PrimaryBtn from "@/components/landing_page_components/PrimaryBtns/PrimaryBtn";

export default function Pricing() {
  return (
    <main className="my-[40px] md:my-[40px] lg:my-[100px]" id="new-pricing">
        <div className="ct-container">
            <div className="pricing-circle">
                <img src="/pricing-circle.png" alt="" />
            </div>
            <div className="heading-wrapper" id="center-span-heading">
                <span><span className="mr-2 md:text-left text-cyan-500">•</span>CRO</span>
                <h3>Pricing Transparency</h3>
                <p>
                    Pricing is tailored to your traffic, site complexity, and growth goals.<br/>
                    No fixed packages. No wasted spend.<br/>
                    Most clients see 3–5x ROI within 60 days through focused, data-driven CRO.<br/>
                    We scale effort based on impact, not guesswork.
                </p>
            </div>
            <div className="pricing-box-wrapper">
                <div className="pricing-box">
                    <h3>Find What’s Holding Your Website Back</h3>
                    <p>Identify friction points blocking conversions and revenue growth.</p>
                    <div className="img">
                        <img src="/001.png"/>
                    </div>
                </div>
                <div className="pricing-box">
                    <h3>Discover Hidden Growth Opportunities</h3>
                    <p>Uncover high-impact changes that increase traffic and conversions.</p>
                    <div className="img">
                        <img src="/002.png"/>
                    </div>
                </div>
                <div className="pricing-box">
                    <h3>Start Winning More Conversions With Pulse</h3>
                    <p>Turn existing traffic into measurable revenue gains</p>
                    <div className="img">
                        <img src="/003.png"/>
                    </div>
                </div>
            </div>
            <div className="mt-[20px] md:mt-[30px] flex w-full items-center justify-center text-center">
                <Link href={"#calendly-inline-app"}>
                <PrimaryBtn text="Get a CRO assessment " />
                </Link>
            </div>
        </div>
    </main>
  );
}