"use client";
import { Box, Modal, TextField } from "@mui/material";
import Link from "next/link";
import React from "react";
import PrimaryBtn from "../PrimaryBtns/PrimaryBtn";
// import { Reveal } from "@/utils/Reveal";
import Image from "next/image";
import { MdArrowForward } from "react-icons/md";
import { FaStar } from "react-icons/fa";
import Navbar from "../Navbar";

// const DownloadBook = () => {
//   const [open, setOpen] = React.useState(false);

//   return (
//     <>
//       <div
//         className="flex w-full flex-col-reverse items-center gap-5 px-5 pb-20 pt-20 md:flex-row md:justify-between md:px-40"
//         style={{
//           backgroundImage: "url('/images/app_page_images/radial.png')",
//           backgroundSize: "contain",
//           backgroundRepeat: "no-repeat",
//         }}
//       >
//         <div className="z-10 md:mt-6 md:px-4">
//           <h2 className="mb-6 text-2xl font-bold tracking-wide md:text-4xl">
//             Download Your Free eBook <br />
//             to Brand Like a Boss
//           </h2>

//           <PrimaryBtn text={"Download Now"} onClick={() => setOpen(true)} />
//           <DownloadModal open={open} handleClose={() => setOpen(false)} />
//         </div>

//         <Image
//           src={"/images/brand like a boss book mokcup.png"}
//           width={400}
//           height={400}
//           alt="Brand Like a Boss eBook"
//         />
//       </div>
//     </>
//   );
// };

// const DownloadModal = ({ open, handleClose }) => {
//   const [formData, setFormData] = React.useState({
//     name: "",
//     email: "",
//     phone: "",
//   });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleDownload = () => {
//     const link = document.createElement("a");
//     link.href = "/images/book-img.pdf";
//     link.download = "book-img.pdf";
//     document.body.appendChild(link);
//     link.click();
//     document.body.removeChild(link);
//     handleClose();
//   };

//   return (
//     <Modal
//       open={open}
//       onClose={handleClose}
//       sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
//     >
//       <Box
//         sx={{
//           position: "absolute",
//           top: "50%",
//           left: "50%",
//           transform: "translate(-50%, -50%)",
//           width: 400,
//           bgcolor: "background.paper",
//           boxShadow: 24,
//           p: 4,
//           borderRadius: 2,
//         }}
//       >
//         <h2 className="mb-4 text-center text-xl font-bold text-black-2">
//           Download Your Free eBook
//         </h2>
//         <TextField
//           fullWidth
//           label="Name"
//           name="name"
//           value={formData.name}
//           onChange={handleChange}
//           margin="normal"
//         />
//         <TextField
//           fullWidth
//           label="Email"
//           name="email"
//           value={formData.email}
//           onChange={handleChange}
//           margin="normal"
//         />
//         <TextField
//           fullWidth
//           label="Phone Number"
//           name="phone"
//           value={formData.phone}
//           onChange={handleChange}
//           margin="normal"
//         />
//         <div className="mt-3 flex justify-center gap-3">
//           <PrimaryBtn text={"Cancel"} onClick={handleClose} />
//           <PrimaryBtn text={"Submit Details"} onClick={handleDownload} />
//         </div>
//       </Box>
//     </Modal>
//   );
// };

const HeroSection = () => {
  return (
    <>
      <main
        style={{
          backgroundImage: "url('/images/about_page_images/banner-01.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
          backgroundPosition: "center",
        }}
        className="relative cro-home pb-[400px] md:pb-[250px]"
      >
        <div className="absolute inset-0 bg-black/30 bg-opacity-50"></div>

        <Navbar />
        <div className="relative flex h-[90vh] w-full flex-col items-center justify-center md:h-[105vh]">
          <div className="z-10 flex w-[80%] translate-y-[4.2rem] flex-col md:w-[70%] md:translate-y-[0rem]">
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
            <div className="-ml-[4px] mb-2 flex items-center gap-1 md:-ml-[5px]">
              <Image
                src="/images/services_page_images/blue-dot.png"
                alt="blue-dot"
                width={20}
                height={20}
                loading="eager"
              />
              <h2>About us</h2>
            </div>

            <h2
              className="pb-2 text-3xl font-bold capitalize text-white md:text-5xl"
              style={{ lineHeight: "1.2" }}
            >
              Driving Growth <br />
              Fueling Success.
            </h2>

            <p className="mx-auto abt-text mt-2 w-[100%] text-left text-xs font-medium leading-snug text-gray-100 md:text-xl">
              We help businesses scale faster through revenue-focused
              strategies, cutting-edge web development, and data-driven
              marketing solutions.
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
        </div>
      </main>
    </>
  );
};

export default HeroSection;
