import Heading from "@/components/ui/Heading";
import { Timeline } from "./(component)/Timeline";

const ResumeDetails = [
    {
        duration: "Dec. 2023 · Apr. 2024",
        logo: "/assets/icons/iitb_logo.png",
        title : "Tech lead and Full Stack Developer",
        company: "Indian Institute of Technology, Bombay · Internship",
        description: "As a Project Lead, my responsibility was to oversee and maintain all the codebase of one of Hypefury's core offerings. Typescript, Rust, Python were used in the infrastructure. We utilized NextJS with the “T-3 stack” - ensuring developer productivity as well as a bug-free typesafe codebase."
    },

]
export default function Resume(){
    return (
        <>
            <div className="pt-20">
                <Heading>Resume</Heading>
                <div className="px-8 py-16">
                    {
                        ResumeDetails.map(({company,description,duration,title,logo},idx)=>(
                            <Timeline length={ResumeDetails.length} idx={idx} company={company} description={description} duration={duration} title={title} logo={logo}/>
                        ))
                    }
                </div>

            </div>
        </>
    )
}