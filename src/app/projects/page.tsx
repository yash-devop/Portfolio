"use client"

import ProjectCard from "@/components/ProjectCard";
import { useTheme } from "next-themes";
import { use, useEffect, useState } from "react";

const Projects = [
    {
        title: "Club.sh",
        stack: ["NextJS","AWS","Tailwind","React Query",],
        githubLink:"https://github.com/club_sh",
        description: "Club.sh , is an URL Shortener with steroids with real-time analytics and link management infra.",
        websiteLink: ""
    },
    {
        title: "Club.sh",
        stack: ["NextJS","AWS","Tailwind","React Query",],
        githubLink:"https://github.com/club_sh",
        description: "Club.sh , is an URL Shortener with steroids with real-time analytics and link management infra.",
        websiteLink: ""
    },
    {
        title: "Club.sh",
        stack: ["NextJS","AWS","Tailwind","React Query",],
        githubLink:"https://github.com/club_sh",
        description: "Club.sh , is an URL Shortener with steroids with real-time analytics and link management infra.",
        websiteLink: ""
    },
]

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
                }).map((_)=>(

                <div className="h-[250px] w-[380px] rounded-3xl p-6  bg-secondary/15 overflow-hidden relative tracking-tighter animate-pulse" />
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
            <div className="py-10 flex flex-wrap gap-3 items-center">
                {
                     Projects.map(({description , githubLink , stack , title , websiteLink})=>(
                        <ProjectCard 
                            description={description}
                            githubLink={githubLink}
                            stack={stack}
                            title={title}
                            websiteLink={websiteLink}
                            theme={theme}
                        />
                    ))
                }
            </div>
        </>
    )
}