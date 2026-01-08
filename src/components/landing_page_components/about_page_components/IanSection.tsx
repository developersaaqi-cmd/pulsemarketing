import Image from "next/image";
import PrimaryBtn from "../PrimaryBtns/PrimaryBtn";
import Link from "next/link";

export default function IanSection(){
    return(
        <> 
        {/* main section */}
        <main
         className="flex-col items-center md:gap-4 gap-0 flex ct-container">
            <div id="center" className="heading-wrapper">
                <h3>About Us</h3>
            </div>
            <div className="flex flex-col items-center justify-between md:flex-row" id="about-content">
                <div className="flex flex-col">
                    <h2 className="text-xl font-semibold">Principal, Ian Slater</h2>
                    {/* <span className="text-lg mt-3">Ian Slater<br/></span> */}
                    <p className="mt-3 md:text-md text-xs md:leading-[1.8rem] leading-snug">
                        I’ve always been obsessed with business, branding, and the power of a good story. Growing up on the coast of British Columbia with two older brothers, I learned early how to compete, whether it was racing to the dinner table, winning in sports, or pushing myself in school. That drive carried me through NCAA tennis in California and into the world of business, where I discovered that great brands don’t just sell products; they sell trust, culture, and emotion.
                     </p>
                     <p className="mt-3 md:text-md text-xs md:leading-[1.8rem] leading-snug">
                        Nike doesn’t sell shoes. It sells an identity. Banks don’t sell mortgages. They sell security. For the past decade, I’ve helped brands figure out what they really stand for and how to connect with people in ways that actually last. From raking leaves and shoveling driveways as a kid, to doing $5 Fiverr jobs, to leading six-figure software projects, my path has always been about learning, adapting, and winning.
                    </p>
                    <p className="mt-3 md:text-md text-xs md:leading-[1.8rem] leading-snug">
                        Outside of business, I’m still competing. I’m currently ranked #1 in Canada in ITF Men’s 30s Doubles and #2 in Singles, which keeps my edge sharp both on and off the court. The discipline, focus, and resilience that tennis built in me are the same traits I bring into every project at Pulse Marketing.
                    </p>
                    <p className="mt-3 md:text-md text-xs md:leading-[1.8rem] leading-snug">
                        Since 2015, I’ve worked with more than 8,000 clients across startups and established businesses, helping them tell stories that cut through the noise. At Pulse Marketing, I work with entrepreneurs who want to build something real, not just look good online. And I don’t do it alone. My sidekick, Maverick, a three-year-old Siberian Husky, is part of the team, keeping me grounded, motivated, and laughing every day.
                    </p>
                    {/* button */}
                    <div className="md:mt-4 mt-8 flex flex-row flex-wrap gap-[20px]">
                        <Link href={"https://www.ianslater.ca/"} target="_blank">
                            <PrimaryBtn text={"Visit My Site"} onClick={""} icon={""}/>
                        </Link>
                        <Link href={"https://ca.linkedin.com/in/ianpslater"} target="_blank">
                            <PrimaryBtn text={"Connect on Linkedin"} onClick={""} icon={""}/>
                        </Link>
                    </div>
                </div>
                {/* right image section */}
                <div>
                    <Image 
                    src={"/ian-pic.png"} 
                    height={0} width={670} alt="ian slater"
                    >
                    </Image>
                </div>
            </div>
        </main>
        </>
    )
}