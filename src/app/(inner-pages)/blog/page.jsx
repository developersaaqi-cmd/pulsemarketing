"use client";
import Navbar from "@/components/landing_page_components/Navbar";
// import { Reveal } from '@/utils/Reveal'
import Image from "next/image";
import React from "react";
import Link from "next/link";
import { MdArrowForward } from "react-icons/md";
import { FaStar } from "react-icons/fa";
import Calender from '@/components/Calender/Calender';
import { FireApi } from "../../../../utils/useRequest";
import { useRouter } from "next/navigation";
import PrimaryBtn from "@/components/landing_page_components/PrimaryBtns/PrimaryBtn";
import Footer from "@/components/layout/Footer";
import { Pagination, styled } from "@mui/material";
const BlogPage = () => {
  const CustomPagination = styled(Pagination)(({ theme }) => ({
    "& .MuiPaginationItem-root": {
      color: "white", // Default color
      fontWeight: "bold",
    },
    "& .MuiPaginationItem-root.Mui-selected": {
      color: "black", // Active page text color
      backgroundColor: "#1DA1F2", // Active page background color
      fontWeight: "bold",
    },
    "& .MuiPaginationItem-root:hover": {
      backgroundColor: "#1DA1F2", // Hover background color
      color: "white", // Hover text color
    },
  }));

  const router = useRouter();

  const [blogComponent, setBlogComponent] = React.useState([]);
  const [currentPage, setCurrentPage] = React.useState(1);
  const blogsPerPage = 9;

  const getComponentData = async () => {
    try {
      const blogPageId = "6751ba6ea80e78a9b6e139aa";
      const res = await FireApi(`component/read?page=${blogPageId}`, "GET");
      setBlogComponent(res?.data?.components || []);
    } catch (err) {
      console.error("Error fetching pages:", err);
    }
  };

  React.useEffect(() => {
    getComponentData();
  }, []);

  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };

  const handleBlogClick = (componentId) => {
    console.log(componentId, "componentId");
    localStorage.setItem("blogId", componentId);
    router.push(`/blog_details`);
  };

  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;

  // Slice current blogs
  const currentBlogs = blogComponent.slice(indexOfFirstBlog, indexOfLastBlog);

  return (
    <main className="theme_bg_color">
      {/* hero section of blog page  */}
      <main
        style={{
          backgroundImage: "url('/images/blog_page_images/blog.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
          backgroundPosition: "center",
        }}
        className="relative cro-home pb-[200px]"
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>

        <Navbar />
        <div className="relative flex h-[85vh] w-full flex-col items-center justify-center md:h-[100vh]">
          <div className="z-10 flex md:w-[70%] translate-y-17 w-[90%] flex-col md:translate-y-[0rem]">
            <div className="mb-5 flex">
                        <Link
                          href={
                            "https://www.bbb.org/ca/bc/vancouver/profile/digital-marketing/pulse-marketing-inc-0037-2428735/#sealclick"
                          }
                          target="_blank"
                        >
                          <Image
                            alt="image"
                            className="mr-8"
                            src={"/images/cro_page_images/bbb.png"}
                            width={125}
                            height={125}
                            loading="eager"
                          />
                        </Link>
            
                        <Link
                          href={
                            "https://www.google.com/search?sca_esv=09379ecd0b6efd91&sca_upv=1&q=Pulse+Marketing+Inc.&ludocid=8690602816288484550&lsig=AB86z5VS1uhD8C0TEf_4MQU5HsGp&kgs=dd8e1417abb4f44a&shndl=30&shem=lnole,lsde,lsp&source=sh/x/loc/act/m1/1"
                          }
                          target="_blank"
                        >
                          <Image
                            alt="image"
                            src={"/images/cro_page_images/google.png"}
                            width={125}
                            height={125}
                            loading="eager"
                          />
                        </Link>
                      </div>
            {/* Service heading */}
            <div className="mb-2 flex items-center gap-1">
              <Image
                src="/images/services_page_images/blue-dot.png"
                alt="blue-dot"
                width={20}
                height={20}
              />
              <p>Insights</p>
            </div>

            {/* Heading main */}

            <h2
              className="text-3xl font-bold capitalize text-white md:text-5xl"
              style={{ lineHeight: "1.2" }}
            >
              Insights That <br/> Drive Growth
            </h2>

            <p className="text-left abt-text md:leading-7 md:text-base text-sm mt-2 md:w-[80%] text-gray-200">
            Expert strategies and creative insights to help businesses thrive in Canada.
             Based in Vancouver, BC,
             we share actionable tips to boost sales, build brands, and scale success.
            </p>
             <div className="mt-3 flex w-full flex-col flex-wrap gap-2 text-left md:flex-row md:items-center md:gap-3">
                        <p> Clients rate our team and work</p>
                        <div className="flex text-yellow-500">
                          <FaStar />
                          <FaStar />
                          <FaStar />
                          <FaStar />
                          <FaStar />
                        </div>
                        <p>4.9</p>
                        <p className="-mb-[8px] text-blue-300 md:mb-0">
                          based on 86 client reviews
                        </p>
                      </div>
                      <div className="mt-5">
                        <Link
                          href={"https://calendly.com/ianpslater/20min"}
                          target="_blank"
                        >
                          <button
                            // onClick={toggleForm}
                            className="poppins-regular contact-btn mb-10 mt-0 flex items-center justify-between rounded-3xl border-none bg-white px-4 py-2 text-black outline-none ease-in-out hover:bg-my-blue-gradient hover:text-white hover:transition-all md:mb-0 md:mt-[24px]"
                          >
                            Book Now
                            <div className="ml-2 h-full rounded-full bg-[#6EE3D7] p-[2px]">
                              <MdArrowForward />
                            </div>
                          </button>
                          {/* <PrimaryBtn text={"Book now"} /> */}
                        </Link>
                      </div>
          </div>

          {/* <div className="absolute bottom-[4.5rem] md:bottom-6 right-6 z-10 rounded-full bg-my-blue-gradient p-3">
            <Image
              src={"/images/services_page_images/inbox.png"}
              alt="inbox"
              width={15}
              height={15}
            />
          </div> */}
        </div>
      </main>

      {/* blog section  */}
      <main className="relative w-full pb-32 md:-mt-[250px] md:pb-0">
        <div
          style={{
            backgroundImage: "url('/images/services_page_images/circle.png/')",
            backgroundSize: "cover",
            // transform: "translateY(-100%)",
          }}
          className="h-[50vh] translate-y-[-43%] transform md:h-[37rem] md:translate-y-[-50%]"
        />
        <div
          className="absolute top-0 z-10 flex w-full flex-col items-center justify-center md:top-12 "
          style={{
            backgroundImage: "url('/images/app_page_images/radial.png')",
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="z-10 md:mb-0 mb-10 text-center md:mt-16">
            <h1 className="md:mb-2 mb-5 text-xl font-bold tracking-wide md:text-5xl">
              Your Weekly Dose of <br />
              Knowledge and Creativity
            </h1>
          </div>
        </div>
      </main>

      <div className="mx-auto my-4 flex max-w-[1200px] translate-y-[-7%] transform flex-wrap justify-between gap-8 md:gap-4 px-4 pt-6 md:my-0 md:translate-y-[-16%]">
        {currentBlogs.map((item, index) => (
          <div
            key={index}
            className="flex w-full cursor-pointer flex-col justify-between space-y-2 sm:w-[45%] md:mt-8 md:w-[30%] lg:w-[30%]"
            onClick={() => handleBlogClick(item?._id)}
          >
            <div className="transform transition-transform duration-700 ease-in-out hover:scale-105">
              <Image
                src={item?.pictures[0]}
                alt=""
                width={350}
                height={350}
                className="h-[250px] w-full rounded-lg object-cover"
              />
            </div>
            <div
              className="flex flex-col justify-between gap-3"
              style={{
                minHeight: "200px",
              }}
            >
              <h2 className="line-clamp-2 text-xl font-bold">{item?.name}</h2>

              <p className="txt-ovrflow text-gray-400">
                {item?.section}
              </p>

              <div>
                <PrimaryBtn
                  text={"Read More"}
                  className="mt-auto"
                  onClick={() => handleBlogClick(item?._id)}
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* pagination  */}
      <div className="-mt-[20rem] mb-20 flex justify-center md:-mt-[8%]">
        <CustomPagination
          count={Math.ceil(blogComponent.length / blogsPerPage)} // Total pages
          page={currentPage}
          onChange={handlePageChange}
        />
      </div>
     <div className='md:-mt-16 md:mb-20 -mt-12'>
        <Calender/>
        </div>
      <div className="-mt-12">
        <Footer />
      </div>
    </main>
  );
};

export default BlogPage;
