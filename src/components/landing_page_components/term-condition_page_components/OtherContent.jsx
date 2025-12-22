"use client";
// import { Reveal } from "@/utils/Reveal";
import React from "react";

const OtherContent = () => {
  
  const data = [
    {
      heading: "Service refers to the Website.",
      content:
        "Terms and Conditions (also referred as; Terms mean these Terms and Conditions that form the entire agreement between You and the Company regarding the use of the Service.",
      content2:
        "Third-party Social Media Service means any services or content (including data, information, products or services) provided by a third-party that may be displayed, included or made available by the Service.",
    },
    {
      heading: "Website refers to pulse, accessible from pulse.io.",
      content: "You means the individual accessing or using the Service, or the company, or other legal entity on behalf of which such individual is accessing or using the Service, as applicable.Acknowledgment These are the Terms and Conditions governing the use of this Service and the agreement that operates between You and the Company. These Terms and Conditions set out the rights and obligations of all users regarding the use of the Service. Your access to and use of the Service is conditioned on Your acceptance of and compliance with these Terms and Conditions. These Terms and Conditions apply to all visitors, users and others who access or use the Service.",
      content2:"By accessing or using the Service You agree to be bound by these Terms and Conditions. If You disagree with any part of these Terms and Conditions then You may not access the Service. You represent that you are over the age of 18. The Company does not permit those under 18 to use the Service. Your access to and use of the Service is also conditioned on Your acceptance of and compliance with the Privacy Policy of the Company. Our Privacy Policy describes Our policies and procedures on the collection, use and disclosure of Your personal information when You use the Application or the Website and tells You about Your privacy rights and how the law protects You. Please read Our Privacy Policy carefully before using Our Service.",
    },
    {
      heading: "Links to Other Websites",
      content: "Our Service may contain links to third-party web sites or services that are not owned or controlled by the Company.. The Company has no control over, and assumes no responsibility for, the content, privacy policies, or practices of any third party web sites or services. You further acknowledge and agree that the Company shall not be responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be caused by or in connection with the use of or reliance on any such content, goods or services available on or through any such web sites or services.",
      content2: "We strongly advise You to read the terms and conditions and privacy policies of any third-party web sites or services that You visit.",
    },
  ];

  return (
    <main className="privacy-content-container">
      {data.map((item, index) => (
        <div
          key={index._id}
          style={{
            backgroundImage: "url('/images/app_page_images/radial.png)",
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
          }}
          className="mx-auto flex flex-col items-center justify-center text-center"
        >
          <div className="flex w-full flex-col items-center justify-center">
            <div className="z-10 text-center">
              <h2 className="text-xl font-bold tracking-wide md:text-4xl">
                Interpretation
              </h2>
            </div>
            <div className="mx-auto flex flex-col items-center justify-center text-center">
              <p>
                The words of which the initial letter is capitalized have meanings
                defined under the following conditions. The following definitions
                shall have the same meaning regardless of whether they appear in
                singular or in plural.
              </p>

              <div className="flex-col items-center justify-center text-center">
                {/* <Reveal> */}
                <h2 className="text-center text-xl font-bold tracking-wide md:text-4xl">
                  Deﬁnitions
                </h2>
                {/* </Reveal> */}

                <p className="mt-3">
                  For the purposes of these Terms and Conditions: Affiliate means an
                  entity that controls, is controlled by or is under common control
                  with a party, where control; means ownership of 50% or more of the
                  shares, equity interest or other securities entitled to vote for
                  election of directors or other managing authority.
                </p>

                <p className="mt-3">
                  Country refers to: British Columbia, Canada Company referred to as
                  either the Company, We, Us or Our; in this Agreements refers to
                  Pulse Marketing Inc., 595 Burrard Street, Vancouver, BC V7X 1L4,
                  Canada.
                </p>

                <p className="mt-3">
                  Device means any device that can access the Service such as a
                  computer, a cellphone or a digital tablet.
                </p>
              </div>
            </div>
          </div>
          
          <h2 className=" text-xl md:text-4xl font-bold tracking-wide">{item.heading}</h2>
        
          <p>{item.content}</p>
        
          <p className="mb-0">{item.content2}</p>
          
        </div>
      ))}
    </main>
  );
};

export default OtherContent;
