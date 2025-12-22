"use client";
import React from "react";
import Navbar from "@/components/landing_page_components/Navbar";
import Image from "next/image";
import Link from "next/link";
import { FireApi } from "../../../../utils/useRequest"; 
import Footer from "@/components/layout/Footer";
import { Pagination, styled, Skeleton } from "@mui/material";
import HeroSection from "@/components/landing_page_components/ourblog-component/herosection";
import Calender from '@/components/Calender/Calender';

// Custom styled pagination
const CustomPagination = styled(Pagination)(({ theme }) => ({
  "& .MuiPaginationItem-root": { color: "white", fontWeight: "bold" },
  "& .MuiPaginationItem-root.Mui-selected": {
    color: "black",
    backgroundColor: "#1DA1F2",
    fontWeight: "bold",
  },
  "& .MuiPaginationItem-root:hover": { backgroundColor: "#1DA1F2", color: "white" },
}));

const BlogPage = () => {
  const [blogComponent, setBlogComponent] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [currentPage, setCurrentPage] = React.useState(1);
  const blogsPerPage = 9;

  const getComponentData = async () => {
    setLoading(true);
    try {
      const blogPageId = "6751ba6ea80e78a9b6e139aa";
      const res = await FireApi(`component/read?page=${blogPageId}`, "GET");
      setBlogComponent(res?.data?.components || []);
    } catch (err) {
      console.error("Error:", err);
    } finally {
      setLoading(false);
    }
  };

  React.useEffect(() => {
    getComponentData();
  }, []);

  const generateSlug = (name) => {
    return name.toLowerCase().trim().replace(/[^\w\s-]/g, '').replace(/[\s_-]+/g, '-').replace(/^-+|-+$/g, '');
  };

  // Pagination Logic
  const handlePageChange = (event, value) => {
    setCurrentPage(value);
    // Page change par scroll top par le jane ke liye
    window.scrollTo({ top: 400, behavior: 'smooth' });
  };

  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = blogComponent.slice(indexOfFirstBlog, indexOfLastBlog);

  return (
    <main className="theme_bg_color min-h-screen">

      <HeroSection/>

      <main id="main-our-blog-section">
        <div className='section-circle'>
          <img src="/new-circle.webp" />
        </div>
        <div className="ct-container">
          <div className="heading-wrapper">
            <h3>Your Weekly Dose of Knowledge and Creativity</h3>
          </div>
          <div id="blogs-grid-wrapper">
            {loading ? (
              // LOADING SKELETONS
              [...Array(6)].map((_, i) => (
                <div key={i} className="w-full w-[100%] space-y-3 mb-10">
                  <Skeleton variant="rectangular" height={250} sx={{ bgcolor: '#222', borderRadius: '8px' }} />
                  <Skeleton variant="text" sx={{ bgcolor: '#222' }} fontSize="2rem" />
                  <Skeleton variant="text" sx={{ bgcolor: '#222' }} width="60%" />
                </div>
              ))
            ) : (
              // ACTUAL CONTENT
              currentBlogs.map((item, index) => (
                <Link key={index} href={`/blog/${generateSlug(item.name)}`} className="w-full sm:w-[45%] md:w-[30%] group mb-10">
                  <div className="overflow-hidden rounded-lg">
                    <Image 
                      src={item?.pictures[0]} 
                      alt={item.name} 
                      width={350} 
                      height={250} 
                      className="h-[250px] w-full object-cover transition-transform duration-500 group-hover:scale-110" 
                    />
                  </div>
                  <h2 className="mt-4 text-xl font-bold text-white line-clamp-1">{item.name}</h2>
                  <p className="mt-2 text-gray-400 line-clamp-2">{item.section}</p>
                  <div className="mt-4 text-[#1DA1F2] font-semibold flex items-center gap-2">
                    Read More <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </div>
                </Link>
              ))
            )}
          </div>
        </div>
      </main>

      {/* PAGINATION SECTION - Loading khatam hone ke baad aur blogs hone par hi dikhega */}
      {!loading && blogComponent.length > blogsPerPage && (
        <div className="my-[40px] flex justify-center">
          <CustomPagination
            count={Math.ceil(blogComponent.length / blogsPerPage)}
            page={currentPage}
            onChange={handlePageChange}
          />
        </div>
      )}
      <Calender />
      <Footer />
    </main>
  );
};

export default BlogPage;