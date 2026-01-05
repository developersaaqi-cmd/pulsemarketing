import React from "react";
import "./Offerings.css";
import Image from "next/image";

const Offerings = () => {
  return (
    <div className="offerings my-[40px] md:my-[40px] lg:my-[100px] ct-container" id="offering">
      <div className="heading-wrapper">
        <h3>Pulse Offerings</h3>
        <p>We build high-performance mobile apps using modern frameworks and proven development practices. From MVPs to enterprise-ready platforms, our team delivers scalable, secure applications designed to grow with your business.</p>
      </div>
      <div className="offering-cards md:mx-auto md:mt-8">
        <div className="offeringCard">
          <Image width={50} height={50} src="/images/app_page_images/flutter.png" alt="Flutter App Development" />
          <h3 className="text-[18px]">Flutter App Development</h3>
          <span className="text-sm text-[#ffffffc9] font-normal text-center">Cross-platform apps with a single codebase. Fast, cost-efficient, and built for performance.</span>
          <div className="circle-anim"></div>
        </div>
        <div className="offeringCard">
          <Image width={50} height={50} src="/images/app_page_images/react.png" alt="React Native Development" />
          <h3 className="text-[18px]">React Native Development</h3>
          <span className="text-sm text-[#ffffffc9] font-normal text-center">Native-like experiences with faster development cycles and seamless scalability.</span>
          <div className="circle-anim"></div>
        </div>
        <div className="offeringCard">
          <Image width={50} height={50} src="/images/app_page_images/native.png" alt="Native App Development" />
          <h3 className="text-[18px]">Native App Development</h3>
          <span className="text-sm text-[#ffffffc9] font-normal text-center">Fully native iOS and Android apps for maximum performance, reliability, and control.</span>
          <div className="circle-anim"></div>
        </div>
        <div className="offeringCard">
          <Image width={50} height={50} src="/images/app_page_images/maintenance.png" alt="Maintenance Code Review" />
          <h3 className="text-[18px]">Maintenance & Code Review</h3>
          <span className="text-sm text-[#ffffffc9] font-normal text-center">Ongoing updates, performance improvements, security checks, and code optimization.</span>
          <div className="circle-anim"></div>
        </div>
      </div>
    </div>
  );
};

export default Offerings;
