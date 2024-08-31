import ShowcaseCard from "@/components/ShowcaseCard";
import Heading from "@/components/ui/Heading";
import H1 from "@/components/ui/Heading";
import { cn } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react";
import { IBM_Plex_Serif } from "next/font/google";

const IBMPlexSerif = IBM_Plex_Serif({
  subsets: ["latin"],
  weight: ["400"],
  style: "italic"
})

export default function Home() {
  return (
    <>
      <div>
        <div className="tracking-tighter pt-20">
          <Heading className="w-full max-w-xl">Fullstack Developer and Freelancer based in Mumbai, India.</Heading>
          <h1 className="text-[32px] "></h1>
          <p className="text-[16px] py-5 leading-relaxed ">" Crafting designs and building products that should be able to solve<br />
            some of your problems and help make your life 
            uncomplicated + aesthetically pleasing "</p>
        </div>
      </div>

      <div className="tracking-tighter pt-8 flex flex-col gap-3">
        <span className={cn(IBMPlexSerif.className,"text-black")}>Hi, I’m Yash. Thankyou for visiting my world.</span>
        <p className="pb-4 max-w-xl text-black">I'm currently working with tech startups to help shape their digital products and user experience in a more consistent manner.</p>
        <div className="flex items-center group w-fit"> 
          <span className="underline cursor-pointer underline-offset-2 group-hover:-translate-y-1 transition-transform">Download Resume</span>
          <ArrowUpRight size={20} className="pb-2 group-hover:-translate-y-1 group-hover:translate-x-0.5 transition-transform" />
        </div>
      </div>

      <div className="pt-10 pb-4 flex flex-col gap-4">
        <ShowcaseCard />
        <ShowcaseCard />
      </div>

    </>
  );
}
