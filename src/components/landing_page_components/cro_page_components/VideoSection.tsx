import React from "react";

export default function VideoSection(){
    return(
        <>
        <main className="md:h-[925px] h-[350px] md:-mb-20 md:mt-0 mt-10 w-full flex-col gap-5 md:gap-0 items-center flex">
             <div className="md:w-[1200px] w-full h-[80px] md:h-[50px] flex items-center justify-center">
                <h1 className="md:text-5xl text-4xl font-bold">What is CRO?</h1>
            </div>
            {/* <div
             style={{
            backgroundImage:"url('/images/cro_page_images/laptop-realistic.png')",
            backgroundRepeat:"no-repeat",
            backgroundSize:"cover",
            backgroundPositionY: "47%",
        }} 
            className="md:h-[900px] md:mt-0 -mt-24 laptop-pos md:w-[1435px] w-[360px] h-[430px] flex justify-center items-center"
            > */}
            <iframe allowFullScreen className="md:h-[600px] rounded-xl h-[185px] md:mt-16 w-[78%] md:w-[66.4%]" width="560" height="315" src="https://www.youtube.com/embed/y1hkZ-qNkgg?si=b2x_0aPQCzoPofH6"  title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share">
            </iframe>
            {/* </div> */}
        </main>
        </>
    )
}