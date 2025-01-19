"use client"

import ProjectCard from "@/components/ProjectCard";
import { SerifHeading } from "@/components/SerifHeading";
import { useTheme } from "next-themes";

const Projects = [
    {
        title: "Club.sh",
        stack: ["NextJS","AWS","Tailwind","React Query",],
        githubLink:"https://github.com/yash-devop/club.sh",
        description: "Club.sh , is an URL Shortener with steroids with real-time analytics and link management infra.",
        websiteLink: "https://club.yashstack.com/"
    },
    {
        title: "Bloggen",
        stack: ["NextJS","AWS","Tailwind","React Query",],
        githubLink:"https://github.com/yash-devop/bloggen",
        description: "Bloggen - Turn your github repository issues into beautiful blog.",
        websiteLink: "https://bloggen.yashstack.com/"
    },
    {
        title: "Control",
        stack: ["NextJS","AWS","Tailwind","React Query",],
        githubLink:"https://github.com/yash-devop/website-uptime-monitor",
        description: "Control - Monitor website uptime, downtime, performance, and ensure reliability effortlessly",
        websiteLink: ""
    },
    {
        title: "Blinkchat",
        stack: ["ExpressJS","NodeJS","Typescript","Websockets","ReactJS","Tailwind"],
        githubLink:"https://github.com/yash-devop/socket-chat-app",
        description: "Blinkchat - a websocket based realtime chat app",
        websiteLink: "https://blinkchat-ten.vercel.app/"
    },
    {
        title: "Blogify",
        stack: ["MongoDB","ExpressJS","ReactJS","NodeJS"],
        githubLink:"https://github.com/yash-devop/MERN-Blog",
        description: "Blogify - MERN STACK Blog website",
        websiteLink: "https://blogifyv1.vercel.app/"
    },
    {
        title: "Ditto Google Search",
        stack: ["ReactJS", "Tailwind", "Google API"],
        githubLink:"https://github.com/yash-devop/GoogleSearch-Clone",
        description: "Identical to Google Search",
        websiteLink: "https://search-google-clonereact.netlify.app/"
    },
    {
        title: "Figma UI Design - 1",
        stack: ["Figma", "Authentication UI"],
        githubLink:"https://www.figma.com/design/A2GNjclHVqAc9cNy2naE8v/Untitled",
        description: "Identical to Google Search",
        websiteLink: "https://www.figma.com/design/A2GNjclHVqAc9cNy2naE8v/Untitled"
    },
    {
        title: "Figma UI Design - 2",
        stack: ["Figma", "Landing Page"],
        githubLink:"https://www.figma.com/design/T6iiiPqNLAZ0ZtcOetrAGr/realtime-text-editor",
        description: "Realtime - Instant Team Collaboration on documents anytime and anywhere",
        websiteLink: "https://www.figma.com/design/T6iiiPqNLAZ0ZtcOetrAGr/realtime-text-editor"
    },
];

const Skeleton=({
    length
}:{
    length: number
})=>{
    return (
        <>

            {
                Array.from({
                    length
                }).map((_, idx)=>(

                <div key={idx} className="min-h-[180px] w-full rounded-3xl p-6  bg-secondary/15 overflow-hidden relative tracking-tighter animate-pulse" />
                ))
            }
        </>
    )
}

export default function ProjectsPage() {
    const { theme } = useTheme();
    


    if(!theme){
        return (
            <div className="py-10 flex flex-wrap gap-3">
                <Skeleton length={2}/>
            </div>
        )
    }
    return (
        <>
            <div className="py-10 flex flex-col gap-5 items-center">
                {
                     Projects.map(({description , githubLink , stack , title , websiteLink},idx)=>(
                        <ProjectCard 
                        key={idx}
                            description={description}
                            githubLink={githubLink}
                            stack={stack}
                            title={title}
                            websiteLink={websiteLink}
                            theme={theme}
                        />
                    ))
                }
                <div className="flex gap-1 items-center pt-12 text-sm">
                    <span>Developed by —</span>
                    <SerifHeading className="p-0" />
                </div>
            </div>
        </>
    )
}