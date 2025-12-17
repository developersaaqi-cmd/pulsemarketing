// import Image from "next/image";
// import React from "react";

// const CroProcess1 = () => {
//   return (
//     // <main
//     // style={{
//     //   backgroundImage:"url('/images/seo_page_images/seo-banner01.jpg')",
//     //   backgroundSize: "cover",
//     //   backgroundRepeat: "no-repeat",
//     //   backgroundPosition:"center",
//     //   backgroundAttachment: "fixed",
//     // }}
//     //  className="w-full px-6 py-16 md:mx-auto md:mt-0 md:w-full md:px-0">
//     //   <div>
//     //     <h1 className="mb-3 text-center text-3xl font-bold tracking-wide md:text-5xl">
//     //       <span className="block md:inline">CRO Process</span>
//     //     </h1>
//     //   </div>
//     //   <div className="mt-8 flex flex-wrap items-center justify-between gap-3 px-4 md:mt-20 md:justify-center md:gap-4 md:px-0">
//         {/* First row */}
//         // <div className="flex w-full flex-wrap justify-center gap-6 md:gap-6">
//           {/* card one  */}
//           // <div className="border-1 border-right border-l-0 border-t-0 md:border-b-0 cursor-default duration-400  flex min-h-[80px]  w-full flex-col justify-center items-center gap-3 border p-5 md:h-[280px] md:w-[20%] md:p-4">
//           //   <div className="w-full justify-center flex h-60px]">
//           //   <Image
//           //     src={"/images/cro_page_images/Book-your-free-CRO-audit.png"}
//           //     height={10}
//           //     width={60}
//           //     alt="seo-audit"
//           //     className="invert md:h-[90px] md:w-[90px] -ml-[4px]"
//           //     loading="eager"
//           //   ></Image>
//           //   </div>
//           //   <h2 className="text-xl text-center font-semibold">
//           //    Book your free CRO audit
//           //   </h2>
//           // </div>

//           {/* card two  */}
//           // <div className="border-1 border-right border-l-0 border-t-0 md:border-b-0 cursor-default duration-400  flex min-h-[80px]  w-full flex-col justify-center items-center gap-3 border p-5 md:h-[280px] md:w-[20%] md:p-4">
//           //   <div className="w-full justify-center flex h-60px]">
//           //   <Image
//           //     src={"/images/cro_page_images/We-analyze-your-site,-data-&-visitor-behavior.png"}
//           //     height={10}
//           //     width={60}
//           //     alt="strategy-development"
//           //     className="invert md:h-[90px] md:w-[90px]"
//           //     loading="eager"
//           //   ></Image>
//           //   </div>
//           //   <h2 className="text-xl text-center font-semibold">
//           //    We analyze your site, data & visitor behavior
//           //   </h2>
//           // </div>

//           {/* card three  */}
//           // <div className="border-1 border-right border-l-0 border-t-0 md:border-b-0 cursor-default duration-400 flex min-h-[80px]  w-full flex-col justify-center items-center gap-3 border p-5 md:h-[280px] md:w-[20%] md:p-4">
//           //   <div className="w-full justify-center flex h-60px]">
//           //   <Image
//           //     src={"/images/cro_page_images/We-test-&-implement-changes.png"}
//           //     height={10}
//           //     width={60}
//           //     alt="optimization"
//           //     className="invert md:h-[90px] md:w-[90px]"
//           //     loading="eager"
//           //   ></Image>
//           //   </div>
//           //   <h2 className="text-xl text-center font-semibold">
//           //     We test & implement changes
//           //   </h2>
//           // </div>

//           {/* card four */}
//     //       <div className="flex min-h-[80px]  w-full flex-col justify-center items-center gap-3 p-5 md:h-[280px] md:w-[20%] md:p-4">
//     //         <div className="w-full justify-center flex h-60px]">
//     //         <Image
//     //           src={"/images/cro_page_images/You-get-more-revenue,-same-traffic.png"}
//     //           height={10}
//     //           width={60}
//     //           alt="link building"
//     //           className="invert md:h-[90px] md:w-[90px]"
//     //           loading="eager"
//     //         ></Image>
//     //         </div>
//     //         <h2 className="text-xl text-center font-semibold">
//     //          You get more revenue, same traffic
//     //         </h2>
//     //       </div>
//     //     </div>
//     //   </div>
//     // </main>
//   );
// };

// export default CroProcess1;


"use client";

export default function CroProcess1() {
  return (
    <section id="croprocess">
      <div className="heading">
        <h5>CRO Process</h5>
      </div>
      <div className="process">
        <div className="item">
          <img src="/images/cro_page_images/icon0001 1.png" alt="" />
          <p>Book your free CRO audit</p>
        </div>
        <span>
          <img src="/images/cro_page_images/down-arrow 1.png" alt="" />
        </span>
        <div className="item">
          <img src="/images/cro_page_images/icon0003 1.png" alt="" />
          <p>We analyze your site, data & visitor behavior</p>
        </div>
        <span>
          <img src="/images/cro_page_images/down-arrow 1.png" alt="" />
        </span>
        <div className="item">
          <img src="/images/cro_page_images/icon0004 1.png" alt="" />
          <p>We test & implement changes</p>
        </div>
        <span>
          <img src="/images/cro_page_images/down-arrow 1.png" alt="" />
        </span>
        <div className="item">
          <img src="/images/cro_page_images/004 1.png" alt="" />
          <p>You get more revenue, same traffic</p>
        </div>
      </div>
    </section>
  );
}
