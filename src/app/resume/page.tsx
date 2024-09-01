import Heading from "@/components/ui/Heading";
import { Timeline } from "./(component)/Timeline";
import { ResumeDetails } from "@/constants";

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