"use client"

import { useScrollBlock } from "@/hooks/useLockScroll";
import { cn } from "@/lib/utils"
import { IBM_Plex_Serif } from "next/font/google"
import { useEffect, useState } from "react";
import { useMediaQuery } from 'react-responsive'

const IBMPlexSerif = IBM_Plex_Serif({
    subsets: ["latin"],
    weight: ["500"],
    style: "italic"
})

const nav_links = ["Projects", "Tech Stack", "Resume", "Connect"];

export default function Navbar() {
    const [toggle, setToggle] = useState(false);
    const [blockScroll, allowScroll] = useScrollBlock();

    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-width: 1224px)'
    });

    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' });

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
            <header className="border-b w-full h-[60px] tracking-tighter">
                <nav className="max-w-[800px] w-full mx-auto flex items-center justify-between h-full px-6 md:px-0">
                    <div className="flex gap-4 items-center h-full text-[15px] ">
                        <h1 className={`${cn(IBMPlexSerif.className)} font-medium`}>Yash Kamble .</h1>
                        <ul className="hidden md:flex items-center gap-4 leading-3 pt-0.5 text-[#9ca3af]">
                            {nav_links.map((link) => (
                                <li key={link}>{link}</li>
                            ))}
                        </ul>
                    </div>
                    <div className="hidden md:block">
                        <AvailableToWork />
                    </div>
                    <div className="flex md:hidden items-center gap-3">
                        <div className="block sm:block md:hidden">
                            <span onClick={() => setToggle((prev) => !prev)}>HAM</span>
                        </div>
                    </div>
                </nav>
                {toggle && (
                    <div className="flex md:hidden bg-gray-300/30 w-full h-full fixed inset-0 backdrop-blur-sm transition-all items-end justify-end ">
                        <div className="bg-red-400 max-w-[400px] w-full h-full">
                            <p onClick={() => setToggle(false)}>Close</p>
                        </div>
                    </div>
                )}
            </header>
        </>
    );
}

function AvailableToWork() {
    return (
        <div className="w-fit px-2 py-0.5 rounded-full border border-[#F0F0F0] text-[#9ca3af] flex items-center gap-1">
            <div className="bg-green-500 rounded-full size-2 animate-pulse" />
            <span className="text-[12px]">Available for work</span>
        </div>
    );
}
