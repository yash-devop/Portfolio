"use client";

import { useScrollBlock } from "@/hooks/useLockScroll";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import ThemeSwitch from "./ThemeSwitch";
import { SerifHeading } from "./SerifHeading";

const nav_links = [
  {
    name: "Projects",
    to: "/projects",
  },
  {
    name: "Resume",
    to: "/resume",
  },
  {
    name: "Connect",
    to: "/connect",
  },
];

export default function Navbar() {
  const [toggle, setToggle] = useState(false);
  const [blockScroll, allowScroll] = useScrollBlock();

  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 1224px)",
  });
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });

  useEffect(() => {
    if (isDesktopOrLaptop) {
      allowScroll();
    } else if (isTabletOrMobile && toggle) {
      blockScroll();
    } else {
      allowScroll();
    }
  }, [isDesktopOrLaptop, isTabletOrMobile, toggle, blockScroll, allowScroll]);

  return (
    <>
      <header className="border-b dark:border-secondary/10 w-full h-[60px] tracking-tighter">
        <nav className="max-w-[825px] w-full mx-auto flex items-center justify-between h-full px-6 md:px-6">
          <div className="flex gap-4 items-center h-full text-[15px] ">
            <Link href="/" className="">
              <SerifHeading />
            </Link>
            <ul className="hidden md:flex items-center gap-4 leading-3 pt-0.5 text-primaryDark">
              {nav_links.map(({ name, to }) => (
                <Link
                  href={to}
                  key={name.toLowerCase()}
                  className="cursor-pointer transition-colors"
                >
                  {name}
                </Link>
              ))}
            </ul>
          </div>
          <div className="flex items-center gap-3">
            <ThemeSwitch />
            <div className="flex">
              <div className="hidden md:block">
                <AvailableToWork />
              </div>
              <span
                className="block md:hidden"
                onClick={() => setToggle((prev) => !prev)}
              >
                HAM
              </span>
            </div>
          </div>
        </nav>
        {toggle && (
          <div className="flex md:hidden bg-gray-300/30 w-full h-full fixed inset-0 backdrop-blur-sm transition-all items-end justify-end">
            <div className="bg-primary/80 max-w-[400px] w-full h-full p-4">
              <p onClick={() => setToggle(false)} className="flex justify-end">Close</p>
              <div className="flex flex-col gap-3 pt-10">
                {nav_links.map(({ name, to }) => (
                  <>
                      <Link
                        href={to}
                        key={name.toLowerCase()}
                        onClick={() => setToggle(false)}
                        className="cursor-pointer transition-colors p-3 rounded-md active:bg-primaryDark/10 hover:bg-primaryDark/10"
                      >
                        {name}
                      </Link>
                  </>
                ))}
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}

function AvailableToWork() {
  return (
    <div className="w-fit px-2 py-0.5 rounded-full border border-[#F0F0F0] dark:border-secondary/50 flex items-center gap-1">
      <div className="bg-green-500 rounded-full size-2 animate-pulse" />
      <span className="text-[12px]">Available for work</span>
    </div>
  );
}
