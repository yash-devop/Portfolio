import Footer from "@/components/Footer";
import ShowcaseCard from "@/components/ShowcaseCard";
import SkillCard from "@/components/SkillCard";
import Heading from "@/components/ui/Heading";
import H1 from "@/components/ui/Heading";
import { Skills } from "@/constants";
import { cn } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react";
import { IBM_Plex_Serif } from "next/font/google";
import Link from "next/link";

const IBMPlexSerif = IBM_Plex_Serif({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: "italic",
});

const showcase = [
  {
    id: 1,
    href: "/projects",
    image: "/assets/project1.png",
  },
  {
    id: 2,
    href: "/projects",
    image: "/assets/project2.png",
  },
];

export default function Home() {
  return (
    <>
      <div className="min-h-screen overflow-auto flex flex-col">
        <div>
          <div className="tracking-tighter pt-20">
            <Heading className="w-full max-w-xl">
              Fullstack Developer and Freelancer based in Mumbai, India.
            </Heading>
            {/* <h1 className="text-[32px] "></h1> */}
            <p className="text-[16px] py-5 leading-relaxed text-secondary dark:text-primaryDark">
              &ldquo;Crafting designs and building products that should be able
              to solve
              <br />
              some of your problems and help make your life uncomplicated +
              aesthetically pleasing &ldquo;
            </p>
          </div>
        </div>
        <div className="flex flex-col flex-grow">
          <div className="tracking-tighter pt-8 flex flex-col gap-3">
            <span
              className={cn(
                IBMPlexSerif.className,
                "text-primary dark:text-white"
              )}
            >
              Hi, I&apos;m Yash. Thankyou for visiting my world.
            </span>
            <p className="pb-4 max-w-xl text-secondary dark:text-primaryDark">
              I&apos;m currently working as a freelancer to help shape their
              digital products and user experience in a more consistent manner.
            </p>
            <Link
              target="_blank"
              href={
                "https://drive.google.com/file/d/1qzrjpqz7A0SmEYhsrpMYpS46_tdUD1UK/view?usp=drive_link"
              }
              className="flex items-center group w-fit pb-6"
            >
              <span className="underline cursor-pointer underline-offset-2 group-hover:-translate-y-1 transition-transform text-primary dark:text-white">
                Download Resume
              </span>
              <ArrowUpRight
                size={20}
                className="pb-2 group-hover:-translate-y-1 group-hover:translate-x-0.5 transition-transform"
              />
            </Link>
            <div className="flex items-center gap-3 flex-wrap group w-fit">
              {Skills.map(({ icon, name }, idx) => (
                <SkillCard key={idx} icon={icon} name={name} />
              ))}
            </div>
          </div>

          <div className="pt-10 pb-8 grid grid-cols-1 gap-8">
            {showcase ? (
              <>
                {showcase.map((data , idx) => (
                  <ShowcaseCard {...data} key={idx}/>
                ))}
                <div className="flex items-center w-full justify-center py-6">
                  <Link href={"/projects"} className="py-2 w-fit px-5 border border-primaryDark/40 hover:dark:bg-white hover:dark:text-black transition-all hover:bg-primaryDark hover:text-white dark:border-primaryDark/10 rounded-lg">
                    More Projects
                  </Link>
                </div>
              </>
            ) : null}
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
