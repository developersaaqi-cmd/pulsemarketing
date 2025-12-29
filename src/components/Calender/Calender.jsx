"use client";
import React from "react";
import Head from "next/head";

const Calender = () => {
  // Use the URL parameters to ensure optimal iframe behavior
  const calendlyUrl = "https://calendly.com/ianpslater/powermeeting?month=2025-12&embed_domain=yourdomain.com&embed_type=Inline";

  return (
    <>
      {/* 1. Pre-warm and Pre-load the document itself in the Head */}
      <Head>
        <link rel="preconnect" href="https://calendly.com" />
        <link rel="preconnect" href="https://assets.calendly.com" />
        {/* Force the browser to start downloading the calendar document immediately */}
        <link rel="preload" href={calendlyUrl} as="document" />
      </Head>

      <main
        className="flex w-full justify-center mt-[40px] md:mt-[40px] lg:mt-[100px]"
        style={{
          backgroundImage: "url('/images/app_page_images/radial.png')",
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="flex w-full flex-col items-center justify-between lg:w-[100%] lg:flex-col ct-container">
          <div className="heading-wrapper celender" id="center">
            <h3>Got A Project Or Partnership <br/> In Mind?</h3>
          </div>

          <div
            id="calendly-inline-app"
            className="flex w-full justify-center"
            style={{ minWidth: "320px", height: "700px" }}
          >
            {/* 2. Direct Iframe with 'eager' loading attribute */}
            <iframe
              src={calendlyUrl}
              width="100%"
              height="100%"
              frameBorder="0"
              title="Calendly Scheduling Page"
              loading="eager" // Forces the browser to load it immediately [4]
              style={{ minWidth: "320px", height: "700px" }}
            ></iframe>
          </div>
        </div>
      </main>
    </>
  );
};

export default Calender;