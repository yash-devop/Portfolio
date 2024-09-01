import Heading from "@/components/ui/Heading";
import { Timeline } from "./(component)/Timeline";

const ResumeDetails = [
    {
        duration: "Mar. 2023 · Aug. 2023",
        title : "Feature head and Full-Stack developer",
        company: "Hypefury",
        description: "As a Project Lead, my responsibility was to oversee and maintain all the codebase of one of Hypefury's core offerings. Typescript, Rust, Python were used in the infrastructure. We utilized NextJS with the “T-3 stack” - ensuring developer productivity as well as a bug-free typesafe codebase."
    },
    {
        duration: "Mar. 2023 · Aug. 2023",
        title : "Feature head and Full-Stack developer",
        company: "Hypefury",
        description: "As a Project Lead, my responsibility was to oversee and maintain all the codebase of one of Hypefury's core offerings. Typescript, Rust, Python were used in the infrastructure. We utilized NextJS with the “T-3 stack” - ensuring developer productivity as well as a bug-free typesafe codebase."
    },
    {
        duration: "Mar. 2023 · Aug. 2023",
        title : "Feature head and Full-Stack developer",
        company: "Hypefury",
        description: "As a Project Lead, my responsibility was to oversee and maintain all the codebase of one of Hypefury's core offerings. Typescript, Rust, Python were used in the infrastructure. We utilized NextJS with the “T-3 stack” - ensuring developer productivity as well as a bug-free typesafe codebase."
    },
    {
        duration: "Mar. 2023 · Aug. 2023",
        title : "Feature head and Full-Stack developer",
        company: "Hypefury",
        description: "As a Project Lead, my responsibility was to oversee and maintain all the codebase of one of Hypefury's core offerings. Typescript, Rust, Python were used in the infrastructure. We utilized NextJS with the “T-3 stack” - ensuring developer productivity as well as a bug-free typesafe codebase."
    },
    {
        duration: "Mar. 2023 · Aug. 2023",
        title : "Feature head and Full-Stack developer",
        company: "Hypefury",
        description: "As a Project Lead, my responsibility was to oversee and maintain all the codebase of one of Hypefury's core offerings. Typescript, Rust, Python were used in the infrastructure. We utilized NextJS with the “T-3 stack” - ensuring developer productivity as well as a bug-free typesafe codebase."
    },

]
export default function Resume(){
    return (
        <>
            <div className="pt-20">
                <Heading>Resume</Heading>
                <div className="px-6 py-16">
                    {
                        ResumeDetails.map(({company,description,duration,title},idx)=>(
                            <Timeline length={ResumeDetails.length} idx={idx} company={company} description={description} duration={duration} title={title} />
                        ))
                    }
                </div>

            </div>
        </>
    )
}