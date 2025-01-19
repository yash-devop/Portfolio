"use client";
import { ArrowRight} from "lucide-react";
import Link from "next/link";

type ProjectType = {
  title: string;
  description: string;
  stack: string[];
  githubLink: string;
  websiteLink: string;
  theme: string;
};

const Badge = ({ str }: { str: string }) => {
  return (
    <>
      <span className="px-2 rounded-md text-xs py-0.5 border border-neutral-300 dark:border-primaryDark/20">
        {str}
      </span>
    </>
  );
};
export default function ProjectCard({ githubLink, description , stack, title,websiteLink }: ProjectType) {
  return (
    <>
      <Link
        href={websiteLink}
        target="_blank"
        rel="noopener noreferrer"
        className="min-h-[150px] flex flex-col h-full w-full rounded-3xl p-6 border border-secondary/15 bg-secondary/5 dark:border-secondary/35 overflow-hidden tracking-tighter"
      >
        <div className=" text-sm text-[#6e6e6e] dark:text-[#D4D4D4]/70 w-full flex-grow flex flex-col gap-4">
          <div className="flex flex-col justify-between flex-wrap gap-3">
            <h1 className="text-xl text-[#000000] font-semibold dark:text-white">
              {title}
            </h1>
            <div className="flex flex-wrap text-sm gap-x-2 gap-y-1 md:gap-y-2">
                {
                    stack.map((skill,idx)=>(
                        <Badge str={skill} key={idx}/>
                    ))
                }
            </div>
          </div>
        </div>
        <p className="text-base pt-8 pb-4 text-[#6e6e6e] dark:text-[#D4D4D4]/70">
          {description}
        </p>
        <div className="flex flex-col ">
          <div className="flex gap-2 w-fit">
            <Link
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-4 cursor-pointer text-sm dark:text-[#6e6e6e] flex items-center gap-2"
            >
              view github
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </Link>
    </>
  );
}
