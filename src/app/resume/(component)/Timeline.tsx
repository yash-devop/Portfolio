import { cn } from "@/lib/utils";

interface TimelineProps {
    duration : string;
    title :string;
    company: string;
    description: string;
    length: number;
    idx: number
}

export const Timeline = (props: TimelineProps) => {
    return (
        <>
            <div className="flex gap-4 relative">
                <div className="absolute -left-8 -top-4">
                    <div className="bg-[#212121] rounded-full size-16"></div>
                </div>
                <TimelineContent {...props}/>
            </div>
        </>
    );
};

export const TimelineContent = ({title,description,company,duration,length,idx}:TimelineProps) => {
    return (
        <>
            {}
            <div className={`${cn("flex flex-col pl-16 pb-10", length !== idx+1 ? "border-l":"border-none")}`}>
                <h1>{duration}</h1>
                <h2 className="py-2">{title}</h2>
                <h4 className="pb-2">{company}</h4>
                <p className="max-w-2xl text-wrap">{description}</p>
            </div>
        </>
    )
}