
import { cn } from "@/lib/utils";
import { ArrowRight, LucideProps } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export interface TimelineProps {
  duration: string;
  Icon?: string | React.ComponentType<LucideProps>;
  title: string;
  company: string;
  description: string;
  length: number;
  link?: string;
  idx: number;
}

export const Timeline = (props: TimelineProps) => {
  const { Icon } = props;
  console.log('typeof Icon === "string"',Icon);
  return (
    <>
      <div className="flex gap-4 relative">
        <div className="absolute -left-7 -top-0.5">
          <div className="bg-neutral-200 dark:bg-[#282828] rounded-full size-14 z-10 flex items-center justify-center">
          {typeof Icon === "string" ? (
            <Image alt="Icon" width={25} height={25} src={Icon} />
          ) : Icon ? (
            <Icon />
          ) : null}
          </div>
        </div>
        <TimelineContent {...props} />
      </div>
    </>
  );
};

export const TimelineContent = ({
  title,
  description,
  company,
  duration,
  length,
  idx,
  link

}: TimelineProps) => {
  return (
    <>
      {}
      <div
        className={`${cn(
          "flex flex-col pl-16 pb-10",
          length !== idx + 1 ? "border-l border-secondary/20" : "border-none"
        )}`}
      >
        <h1 className="text-secondary">{duration}</h1>
        <h2 className="py-2 text-primary dark:text-white font-semibold">
          {title}
        </h2>
        <div className="flex items-center group">
          <Link href={link ?? ""} className="pb-2 dark:text-white">{company}</Link>
          {
            link && <ArrowRight size={12} className="-rotate-45 -translate-y-4 group-hover:-translate-y-5 group-hover:translate-x-1 transition-all"/>
          }
        </div>
        <p className="max-w-2xl text-wrap text-secondary dark:text-secondary-dark">
          {description}
        </p>
      </div>
    </>
  );
};
