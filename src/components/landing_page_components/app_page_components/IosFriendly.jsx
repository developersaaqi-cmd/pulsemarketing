import Image from "next/image";
import React from "react";

const IosFriendly = () => {

    const data= [
        {
            image: "/images/app_page_images/ios (2).png",
            category:"Apple Watch"
        },
        {
            image: "/images/app_page_images/ios (3).png",
            category:"iPhone"
        },
        {
            image: "/images/app_page_images/ios (4).png",
            category:"iPad"
        },
        {
            image: "/images/app_page_images/ios (1).png",
            category:"IoT & Connected Devices"
        },
    ];

  return (
    <main className="flex flex-col gap-5 ct-container" id="ios-device">

      <div className="heading-wrapper">
        <h3>iOS-Friendly Devices</h3>
        <p>
          We design and develop apps that perform flawlessly across the Apple ecosystem and beyond.
        </p>
      </div>

      <div className="flex flex-col gap-5 md:flex-row md:justify-between md:w-[70%] md:mx-auto mt-5">
        {data.map((item) => (
        <div key={item} className="flex flex-col items-center gap-5 md:gap-2">
          <Image
            width={290}
            height={290}
            src={item?.image}
            alt="ios-friendly"
          />
          <h5 className="text-xl font-medium mt-2">{item?.category}</h5>
        </div> 
        ))}
      </div>
      
    </main>
  );
};

export default IosFriendly;
