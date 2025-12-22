"use client";
import React from "react";
import { useParams } from "next/navigation";
import { FireApi } from "../../../../../utils/useRequest"; 
import Navbar from "@/components/landing_page_components/Navbar";
import Footer from "@/components/layout/Footer";
import Image from "next/image";
import { Skeleton } from "@mui/material";
import Calender from '@/components/Calender/Calender';

const Page = () => {
  const { slug } = useParams();
  const [blogInner, setBlogInner] = React.useState(null);
  const [loading, setLoading] = React.useState(true);

  const fetchData = async () => {
    try {
      const blogPageId = "6751ba6ea80e78a9b6e139aa";
      const listRes = await FireApi(`component/read?page=${blogPageId}`, "GET");
      
      const generateSlug = (name) => 
        name.toLowerCase().trim().replace(/[^\w\s-]/g, '').replace(/[\s_-]+/g, '-');
      
      const matched = listRes?.data?.components?.find(b => generateSlug(b.name) === slug);

      if (matched) {
        const detailRes = await FireApi(`component/read/${matched._id}`, "GET");
        setBlogInner(detailRes?.data?.component); // Accessing .component directly
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  React.useEffect(() => { fetchData(); }, [slug]);

  // Loading State with Skeletons to prevent "Empty Space"
  if (loading) {
    return (
      <main className="theme_bg_color min-h-screen">
        <Navbar />
        <div className="h-[60vh] bg-neutral-900 flex items-center justify-center">
          <Skeleton variant="rectangular" width="60%" height={60} sx={{ bgcolor: '#333' }} />
        </div>
        <div className="max-w-4xl mx-auto py-10 px-6">
          <Skeleton variant="text" height={40} sx={{ bgcolor: '#222', mb: 2 }} />
          <Skeleton variant="rectangular" height={400} sx={{ bgcolor: '#222' }} />
        </div>
      </main>
    );
  }

  return (
    <main className="theme_bg_color min-h-screen">
      {/* 1. TOP HEADER WITH BACKGROUND IMAGE */}
      <section
        className="relative flex items-center justify-center overflow-hidden"
        id="single-blog-banner"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.3), rgba(0,0,0,0.8)), url(${blogInner?.pictures?.[0]})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute top-0 w-full z-50">
          <Navbar />
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-5xl">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="-ml-[4px] mb-2 flex items-center gap-1 md:-ml-[5px]">
              <img
                src="/images/services_page_images/blue-dot.png"
                alt="blue-dot"
                width={20}
                height={20}
                loading="eager"
              />
              <h2>Insights</h2>
            </div>
          </div>
          <h1 className="text-4xl md:text-7xl font-bold text-white leading-tight">
            {blogInner?.name}
          </h1>
        </div>
      </section>

      {/* 2. MAIN CONTENT SECTION */}
      <div id="single-blog-content">
        <div className='section-circle'>
          <img src="/new-circle.webp" />
        </div>
        <div className="ct-container">
          
          {/* THE MISSING TOP PARAGRAPH (Section) */}
          {blogInner?.section && (
            <p className="top-para-single-blog">
              {blogInner.section}
            </p>
          )}

          {/* THE REST OF THE CONTENT */}
          <div 
            className="main-content-signl-blog"
            dangerouslySetInnerHTML={{ __html: blogInner?.content }} 
          />
        </div>
      </div>

      <Calender />
      <Footer />
    </main>
  );
};

export default Page;