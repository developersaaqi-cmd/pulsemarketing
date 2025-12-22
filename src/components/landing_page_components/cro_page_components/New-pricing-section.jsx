"use client";

import { useState, useEffect } from "react";

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
                    Our pricing is tailored based on your website traffic, project complexity, and business goals-no fixed plans, just personalized solutions. Whether you're a startup or a growing brand, we align costs with the value we deliver. Most clients see 3-5x ROI within 60 days. reflecting our results-driven approach. Let's create a scalable solution that fuels your growth.
                </p>
            </div>
            <div className="pricing-box-wrapper">
                <div className="pricing-box">
                    <h3>Find Out What is Holding Your Website Back</h3>
                    <p>Uncover the issues preventing your website from performing at its best.</p>
                    <div className="img">
                        <img src="/001.png"/>
                    </div>
                </div>
                <div className="pricing-box">
                    <h3>Discover Hidden Opportunities to Increase Traffic</h3>
                    <p>Reveal untapped opportunities to attract more visitors and grow your traffic.</p>
                    <div className="img">
                        <img src="/002.png"/>
                    </div>
                </div>
                <div className="pricing-box">
                    <h3>Start Dominating Search Results—With Pulse!</h3>
                    <p>Boost your visibility and rank higher where your audience is already searching.</p>
                    <div className="img">
                        <img src="/003.png"/>
                    </div>
                </div>
            </div>
        </div>
    </main>
  );
}