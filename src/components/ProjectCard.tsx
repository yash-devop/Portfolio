"use client"
import { Lock } from "lucide-react";
import { useTheme } from "next-themes";
import Link from "next/link";


const Badge = ({
    name
}: {
    name: string
}) => {
    return (
        <>
            <div className="rounded-full py-0.5 px-2 border border-[#DDDDDD] dark:border-secondary/35 text-[#A0A0A0] bg-[#F4F3F3] dark:bg-[#2B2B2B] text-xs w-fit h-fit">
                {name}
            </div>
        </>
    )
}

export default function ProjectCard({
    title = "Project",
    description,
    stack,
    githubLink,
    websiteLink,
    theme
}: {
    title: string,
    description: string
    stack: string[],
    githubLink: string,
    websiteLink: string,
    theme:string
}) {
    return (
        <>
            <div className="h-[250px] w-[380px] rounded-3xl p-6 border border-secondary/15 bg-secondary/5 dark:border-secondary/35 overflow-hidden relative tracking-tighter">
                <Link href={websiteLink}>
                    {
                        theme === "light" ? <img src="/assets/icons/bg_lines.svg" className="absolute inset-0 w-full z-[-1]" /> : <img src="/assets/icons/bg_lines_black.svg" className="absolute inset-0 w-full z-[-1]" />
                    }
                    <div className="z-10 space-y-2 flex items-start justify-between gap-10 w-full h-fit">
                        <div className="flex flex-col gap-2 w-fusll">
                            <div className="bg-[#2B2B2B] text-white rounded-xl w-14 h-12 flex items-center justify-center border dark:border-secondary/10">
                                <Lock />
                            </div>
                            <p className="text-[#2B2B2B] font-medium text-2xl dark:text-[#D6D6D6]">Club.sh</p>
                        </div>
                        <div className="flex flex-wrap  gap-2 leading-3">
                            {
                                stack.map((skill) => (
                                    <Badge name={skill} />
                                ))
                            }
                        </div>
                    </div>
                    <div className="max-w-xs py-4 text-sm text-[#6e6e6e] dark:text-[#D4D4D4]/70">
                        <p className="">{description}</p>
                    </div>
                    <div className="rounded-tr-none rounded-tl-none rounded-3xl absolute bottom-0 left-0 right-0 w-full px-6 py-3 bg-white dark:bg-[#2B2B2B]">
                        <a href={githubLink} target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 cursor-pointer text-sm dark:text-[#6e6e6e]">view github</a>
                    </div>
                </Link>
            </div>
        </>
    )
}