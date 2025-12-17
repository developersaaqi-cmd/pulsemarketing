// import React from "react";
// import Image from "next/image";
// import { RiFacebookCircleFill, RiInstagramLine, RiLinkedinFill } from "@remixicon/react"

// const Team = () => {
//     return (
//         <>
//             <main className="mx-auto flex flex-col w-full md:gap-12 md:mb-24 gap-6 px-4 py-10 md:w-[1200px] md:px-0 md:py-0">
//                 <div>
//                     <h1 className="mb-3 text-center text-3xl font-bold tracking-wide md:text-5xl">
//                         <span className="block md:inline">Our Team</span>
//                     </h1>
//                 </div>
//                 <div className="md:h-[570px] h-[1240px] flex flex-col md:gap-12 md:flex-row w-full justify-around md:justify-center ">
//                     {/* Team 1 */}
//                     <div className="md:h-full h-[400px] flex gap-1 md:gap-3 items-center flex-col md:w-[25%] ">
//                         {/* image */}
//                         <div className="md:h-full md:w-full h-[200px] flex justify-center">
//                             <Image
//                                 src={"/images/cro_page_images/ian-pic.png"}
//                                 height={200}
//                                 width={160}
//                                 alt="ian-pic"
//                                 className="md:h-full md:w-full"
//                             >
//                             </Image>
//                         </div>
//                         {/* headings */}
//                         <h1 className="md:text-3xl text-xl  font-bold uppercase">Ian Slater</h1>
//                         <h1 className="md:text-2xl text-lg  font-bold uppercase">Founder</h1>
//                         {/* icons */}
//                         <div className="md:h-[50px] w-full flex items-center justify-center gap-1 ">
//                             <RiFacebookCircleFill size={25} className="md:h-[33px] md:w-[33px]" color="white"></RiFacebookCircleFill>
//                             <RiInstagramLine size={25} className="md:h-[33px] md:w-[33px]" color="white"></RiInstagramLine>
//                             <RiLinkedinFill size={25} className="md:h-[33px] md:w-[33px]" color="white"></RiLinkedinFill>
//                         </div>
//                         {/* signature */}
//                         <Image
//                             src={"/images/cro_page_images/sign.png"}
//                             height={200}
//                             width={100}
//                             alt="sign"
//                             className="md:h-[200px] w-[200px]"
//                         >
//                         </Image>
//                     </div>

//                     {/* Team 2 */}
//                     <div className="md:h-full h-[400px] flex gap-1 md:gap-3 items-center flex-col md:w-[25%] ">
//                         {/* image */}
//                         <div className="md:h-full md:w-full h-[200px] flex justify-center">
//                             <Image
//                                 src={"/images/cro_page_images/ian-pic.png"}
//                                 height={200}
//                                 width={160}
//                                 alt="ian-pic"
//                                 className="md:h-full md:w-full "
//                             >
//                             </Image>
//                         </div>
//                         {/* headings */}
//                         <h1 className="md:text-3xl text-xl  font-bold uppercase">Ian Slater</h1>
//                         <h1 className="md:text-2xl text-lg  font-bold uppercase">Founder</h1>
//                         {/* icons */}
//                         <div className="md:h-[50px] w-full flex items-center justify-center gap-1 ">
//                             <RiFacebookCircleFill size={25} className="md:h-[33px] md:w-[33px]" color="white"></RiFacebookCircleFill>
//                             <RiInstagramLine size={25} className="md:h-[33px] md:w-[33px]" color="white"></RiInstagramLine>
//                             <RiLinkedinFill size={25} className="md:h-[33px] md:w-[33px]" color="white"></RiLinkedinFill>
//                         </div>
//                         {/* signature */}
//                         <Image
//                             src={"/images/cro_page_images/sign.png"}
//                             height={200}
//                             width={100}
//                             alt="sign"
//                             className="md:h-[200px] w-[200px]"
//                         >
//                         </Image>
//                     </div>

//                     {/* Team 3 */}
//                     <div className="md:h-full h-[400px] flex gap-1 md:gap-3 items-center flex-col md:w-[25%] ">
//                         {/* image */}
//                         <div className="md:h-full md:w-full h-[200px] flex justify-center">
//                             <Image
//                                 src={"/images/cro_page_images/ian-pic.png"}
//                                 height={200}
//                                 width={160}
//                                 alt="ian-pic"
//                                 className="md:h-full md:w-full "
//                             >
//                             </Image>
//                         </div>
//                         {/* headings */}
//                         <h1 className="md:text-3xl text-xl  font-bold uppercase">Ian Slater</h1>
//                         <h1 className="md:text-2xl text-lg  font-bold uppercase">Founder</h1>
//                         {/* icons */}
//                         <div className="md:h-[50px] w-full flex items-center justify-center gap-1 ">
//                             <RiFacebookCircleFill size={25} className="md:h-[33px] md:w-[33px]" color="white"></RiFacebookCircleFill>
//                             <RiInstagramLine size={25} className="md:h-[33px] md:w-[33px]" color="white"></RiInstagramLine>
//                             <RiLinkedinFill size={25} className="md:h-[33px] md:w-[33px]" color="white"></RiLinkedinFill>
//                         </div>
//                         {/* signature */}
//                         <Image
//                             src={"/images/cro_page_images/sign.png"}
//                             height={200}
//                             width={100}
//                             alt="sign"
//                             className="md:h-[200px] w-[200px]"
//                         >
//                         </Image>
//                     </div>
//                 </div>
//             </main>
//         </>
//     )
// }
// export default Team;

"use client";

export default function Team() {
  return (
    <section id="team">
      <div className="heading">
        <h5>Our Team</h5>
      </div>
      <div className="team-wrapper">
        <div className="item">
          <div className="img">
            <img src="/images/cro_page_images/team01.jpg" alt="Ian Slater" />
          </div>
          <div className="content">
            <h4>Ian Slater</h4>
            <h6>FounderPrincipal & Project Manager</h6>
            <p>
              Ian is the Principal at Pulse Marketing Inc., a Vancouver-based performance
              marketing agency focused on revenue growth and brand acceleration. With nearly
              a decade of experience, he’s led successful campaigns for over 8,000 businesses —
              from Fortune 500s to emerging startups.
            </p>
            <p>
              A former NCAA athlete, Ian brings a competitive edge and strategic discipline
              to every project, combining data-driven execution with long-term brand thinking.
              His leadership style emphasizes innovation, accountability, and results that scale.
            </p>
          </div>
        </div>

        <div className="item">
          <div className="content">
            <h4>Paula Hlavacek</h4>
            <h6>Branding & UGC Lead</h6>
            <p>
              Paula is the Founder of Social Bean Creatives, a boutique agency specializing in
              branding, digital content, and marketing strategy. With a BBA in Marketing and
              over seven years of hands-on experience, she’s helped dozens of brands craft
              their voice, grow organically, and build lasting connections.
            </p>
            <p>
              Her work spans creative direction, content development, and brand positioning —
              with a focus on storytelling that converts. Paula is passionate about helping
              businesses create identity systems that resonate with their ideal audience.
            </p>
          </div>
          <div className="img">
            <img src="/images/cro_page_images/team02.jpg" alt="Paula Hlavacek" />
          </div>
        </div>

        <div className="item">
          <div className="img">
            <img src="/images/cro_page_images/team03.jpg" alt="Brendon Jorssen" />
          </div>
          <div className="content">
            <h4>Brendon Jorssen</h4>
            <h6>Marketing & Brand Strategy Lead</h6>
            <p>
              Brendon helps businesses scale through performance marketing, brand development,
              and AI-powered systems. With eight years of experience and over 250 projects
              completed, he’s driven multi-million dollar growth for both emerging startups
              and established product brands.
            </p>
            <p>
              He also partners with top creators and founders to launch and grow product lines,
              bringing together strategic insight, conversion-focused content, and smart
              automation to drive measurable ROI.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
