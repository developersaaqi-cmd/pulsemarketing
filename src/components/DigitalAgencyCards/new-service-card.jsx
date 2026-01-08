// "use client";
// import React, { useEffect, useState } from "react";
// import { Reveal } from "../../utils/Reveal";
// import Image from "next/image";
// import { FireApi } from "../../../utils/useRequest";

// const UpperTextComponent = () => {
//   const [agencyDetails, setAgencyDetails] = useState([]);

//   const DigitalAgencyContent = async () => {
//     try {
//       const res = await FireApi(
//         "component/read/?section=digital-agency-content",
//         "GET",
//       );
//       console.log("Response:", res);

//       if (res.status === true) {
//         setAgencyDetails(res?.data?.components);
//       } else {
//         console.log("An error occurred");
//       }
//     } catch (error) {
//       console.error("Error:", error);
//     }
//   };

//   useEffect(() => {
//     DigitalAgencyContent();
//   }, []);
//   return (
//     <>
//      <main>
//         <div className="m-auto flex-row items-center justify-between pb-10 md:flex md:pb-12 lg:w-[85%]">
//           <div className="w-[80%] md:w-[50%]">
//
//               {agencyDetails?.map((item) => (
//                 <h1 key={item._id} className="poppins-medium ct-heading text-5xl">
//                   {item?.header}
//                 </h1>
//               ))}
//
//           </div>
//           <div className="poppins-light mt-6 w-[90%] font-light md:mt-0 md:w-[50%]">
//
//               {agencyDetails?.map((item) => (
//                 <p key={item._id} className="float-right md:w-[60%]">
//                   {item?.content}
//                 </p>
//               ))}
//
//           </div>
//         </div>
//       </main>
//     </>
//   );
// };

// const Cards = () => {
//   return (
//     <>
//       <main className="card-section m-auto w-full pt-16 lg:w-[85%]">
//         <div className="m-auto  w-full px-10">
//           <UpperTextComponent />

//           <div className="mx-auto flex w-full flex-wrap items-center justify-between px-8 lg:w-[85%] lg:px-0">
//             {/* card -one  */}
//             <div className="card-css relative z-10 w-[48%] rotate-[-8deg] transform rounded-2xl bg-my-blue-gradient py-12 transition-transform duration-300 hover:rotate-0 hover:scale-110 hover:cursor-pointer hover:shadow-glow lg:w-[16%]">
//               <div className="flex translate-x-6 flex-col justify-center gap-4">
//                 <Image
//                   alt="img-alt"
//                   src={"/img (1).png"}
//                   width={40}
//                   height={40}
//                 />
//                 <h3 className="poppins-medium card-text">
//                   Web Design <br />
//                   Development
//                 </h3>
//               </div>

//               <h2 className="poppins-bold absolute right-0 top-0 px-[15px] pt-3 text-8xl opacity-[50%]">
//                 1
//               </h2>
//             </div>

//             <div className="card-css relative w-[48%] translate-y-3 rotate-[5deg] transform rounded-2xl bg-my-green-gradient py-12 transition-transform duration-300 hover:rotate-0 hover:scale-110 hover:cursor-pointer hover:shadow-glow lg:w-[16%]">
//               <div className="flex translate-x-6 flex-col justify-center gap-4">
//                 <Image
//                   alt="img-alt"
//                   src={"/img (6).png"}
//                   width={40}
//                   height={40}
//                 />
//                 <h3 className="poppins-medium card-text">
//                   Search Engine <br />
//                   Optimization
//                 </h3>
//               </div>
//               <h2 className="poppins-bold absolute right-0 top-0 px-[15px] pt-3 text-8xl opacity-[50%]">
//                 2
//               </h2>
//             </div>

//             <div className="card-css relative  w-[48%] -translate-y-4 rotate-[-6deg] transform rounded-2xl bg-my-purple-gradient py-12 transition-transform duration-300 hover:rotate-0 hover:scale-110 hover:cursor-pointer hover:shadow-glow lg:w-[16%]">
//               <div className="flex translate-x-6 flex-col justify-center gap-4">
//                 <Image
//                   alt="img-alt"
//                   src={"/img (5).png"}
//                   width={40}
//                   height={40}
//                 />
//                 <h3 className="poppins-medium card-text">
//                   Photography & <br />
//                   Videography
//                 </h3>
//               </div>
//               <h2 className="poppins-bold absolute right-0 top-0 px-[15px] pt-3 text-8xl opacity-[50%]">
//                 3
//               </h2>
//             </div>

//             <div className="card-css relative z-10 w-[48%] translate-y-3 rotate-[8deg] transform rounded-2xl bg-my-blue-gradient py-12 transition-transform duration-300 hover:rotate-0 hover:scale-110 hover:cursor-pointer hover:shadow-glow lg:w-[16%]">
//               <div className="flex translate-x-6 flex-col justify-center gap-4">
//                 <Image
//                   alt="img-alt"
//                   src={"/img (4).png"}
//                   width={40}
//                   height={40}
//                 />
//                 <h3 className="poppins-medium card-text w-[50%] md:w-full">
//                   Online <br />
//                   Reputation <br />
//                   Management
//                 </h3>
//               </div>
//               <h2 className="poppins-bold absolute right-0 top-0 px-[15px] pt-3 text-8xl opacity-[50%]">
//                 4
//               </h2>
//             </div>

//             <div className="card-css relative  w-[48%] -translate-y-3 rotate-[-6deg] transform rounded-2xl bg-my-green-gradient py-12 transition-transform duration-300 hover:rotate-0 hover:scale-110 hover:cursor-pointer hover:shadow-glow lg:w-[16%]">
//               <div className="flex translate-x-6 flex-col justify-center gap-4">
//                 <Image
//                   alt="img-alt"
//                   src={"/img (3).png"}
//                   width={40}
//                   height={40}
//                 />
//                 <h3 className="poppins-medium card-text">
//                   Branding <br />
//                   Packages
//                 </h3>
//               </div>
//               <h2 className="poppins-bold absolute right-0 top-0 px-[15px] pt-3 text-8xl opacity-[50%]">
//                 5
//               </h2>
//             </div>

//             <div className="card-css relative w-[48%] translate-y-4 rotate-[8deg] transform rounded-2xl bg-my-purple-gradient py-12 transition-transform duration-300 hover:rotate-0 hover:scale-110 hover:cursor-pointer hover:shadow-glow lg:w-[16%]">
//               <div className="flex translate-x-6 flex-col justify-center gap-4">
//                 <Image
//                   alt="img-alt"
//                   src={"/img (2).png"}
//                   width={40}
//                   height={40}
//                 />
//                 <h3 className="poppins-medium card-text">
//                   Mobile App <br />
//                   Development
//                 </h3>
//               </div>
//               <h2 className="poppins-bold absolute right-0 top-0 px-[15px] pt-3 text-8xl opacity-[50%]">
//                 6
//               </h2>
//             </div>
//           </div>
//         </div>
//       </main>
//     </>
//   );
// };

// export default Cards;

// import { Reveal } from "../../utils/Reveal";
import Image from "next/image";
import React from "react";
import WebDevService from "../DigitalAgencyCards/WebDevService";
import AppDevSection from "../DigitalAgencyCards/AppDevSection";
import Link from "next/link";
import PrimaryBtn from "../landing_page_components/PrimaryBtns/PrimaryBtn";
// import LogoDesign from '../DigitalAgencyCards/LogoDesign';

const UpperTextComponent = () => {
  return (
    <>
      <main>
        {/* <div className="mt-8 md:my-[5rem] md:border-b md:border-[#363445]" /> */}

        <div className="m-auto flex-row items-center justify-between pb-20 md:flex md:pb-12 lg:w-[91%]">
          <div className=" w-[80%] md:w-[50%]">
            <h1 className="poppins-medium ct-heading text-6xl">
            Results-Driven Digital <br className="md:hidden"/> Solutions for <br className="md:hidden"/> Business Growth.
            </h1>
          </div>
          <div className="poppins-light mt-6 w-[90%] font-light md:mt-0 md:w-[50%]">
            <p className="float-right md:w-[60%]">
             Maximize revenue and customer engagement with Pulse
             your expert partner in high-impact digital strategies that drive sales,
             conversions, and long-term success.{" "}
            </p>
          </div>
        </div>
      </main>
    </>
  );
};

const Cards = () => {
  return (
    <>
      <div className="new-service-cards my-[40px] md:my-[40px] lg:my-[100px]" id="full-services-section">
        <div className="ct-container">
          <div className="heading-wrapper">
            <h3>What We Do<br/>The Core Services That Make Websites Convert</h3>
            <p>Pulse focuses on the specific improvements that turn underperforming websites into lead-generating assets. We fix clarity issues, improve user flow, increase visibility in search, and track what actually drives results.</p>
          </div>

          <div className="full-services">
            <div className="full-service-card" style={{ backgroundImage: "url('/images/services_page_images/second-section-img.png')", }} >
              <div className="content">
                <h3>Website Design &<br/> Development</h3>
                <p>
                  Websites built to guide visitors toward one clear action.<br/>
                  We design and rebuild websites with clear messaging, logical structure, fast load times, and strong calls to action so visitors know exactly what to do and why they should do it.
                </p>
                <Link href={"/web-development"}>
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

            <div className="half-service-card-wrapper">
              <div className="half-service-card" style={{ backgroundImage: "url('/images/services_page_images/third-section-img.png')", }}>
                <div className="content">
                  <h3>App<br/> Development</h3>
                  <p>Welcome to the hub of digital innovation, where ideas evolve into functional intuitive applications that redefine user experiences. Our application development services are centered around creating robust, scalable solutions while delivering solutions that exceed expectations.</p>
                  <Link href={"/app"}>
                    <PrimaryBtn text="Learn More" />
                  </Link>
                </div>
                <h5 className="full-heading">Application Development</h5>
              </div>
              <div className="half-service-card" style={{ backgroundImage: "url('/analytic-service.png')", }}>
                <div className="content">
                  <h3>Analytics &<br/> Performance Tracking</h3>
                  <p>
                    See what’s working and what needs to change.<br/>
                    We set up tracking that shows where leads come from, which pages drive action, and where users lose interest so improvements are based on real behavior, not assumptions.
                  </p>
                  <Link href={"/branding"}>
                    <PrimaryBtn text="Learn More" />
                  </Link>
                </div>
                <h5 className="full-heading">Analytics</h5>
              </div>
            </div>

            <span className="new-full-services-divider"></span>

            <div className="half-service-card-wrapper">
              <div className="half-service-card" style={{ backgroundImage: "url('/images/services_page_images/fifth-section-img.png')", }}>
                <div className="content">
                  <h3>Search Engine<br/> Optimization (SEO)</h3>
                  <p>
                    Show up when people are actively searching for your services.<br/>
                    We optimize your pages, content, and technical setup so your website ranks for high-intent searches that bring in qualified visitors, not just empty traffic.
                  </p>
                  <Link href={"/seo"}>
                    <PrimaryBtn text="Learn More" />
                  </Link>
                </div>
                <h5 className="full-heading">SEO</h5>
              </div>
              <div className="half-service-card" style={{ backgroundImage: "url('/images/services_page_images/cro-section.png')", }}>
                <div className="content">
                  <h3>Conversion Rate<br/> Optimization (CRO)</h3>
                  <p>
                    Increase leads without increasing traffic.<br/>
                    We review how users move through your site, where they hesitate, and where they drop off, then refine layouts, copy, and page flow to improve conversions across key pages.
                  </p>
                  <Link href={"/cro"}>
                    <PrimaryBtn text="Learn More" />
                  </Link>
                </div>
                <h5 className="full-heading">CRO</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cards;
