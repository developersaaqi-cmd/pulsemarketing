import React from "react";

export default function VideoSection(){
    return(
        <>
        <main className="w-full flex-col gap-5 md:gap-0 items-center flex ct-container" id="cro-video">
            <div className="heading-wrapper" id="center">
                <h3>What is CRO?</h3>
            </div>
            <iframe allowFullScreen src="https://www.youtube.com/embed/y1hkZ-qNkgg?si=b2x_0aPQCzoPofH6"  title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share">
            </iframe>
            {/* </div> */}
        </main>
        </>
    )
}