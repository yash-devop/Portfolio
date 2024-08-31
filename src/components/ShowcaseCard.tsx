"use client"

import useMousePosition from "@/hooks/useMousePosition"
import { Play } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useRef, useState } from "react"

export default function ShowcaseCard() {
    const containerRef = useRef<HTMLDivElement>(null)
    const mousePosition = useMousePosition(containerRef, 500, 300)
    const [display, setDisplay] = useState<string>("none")


    return (
        <div
            ref={containerRef}
            className="w-full h-[500px] bg-gray-100 relative overflow-hiddens cursor-pointer flex items-center justify-center"
            onMouseLeave={() => setDisplay("none")}
            onMouseEnter={() => setDisplay("block")}
        >
            <Link href={"/newroute"}>
                <Image
                    alt="project1"
                    src={"/assets/project1.png"}
                    width={800}
                    height={800}
                    className="object-fill"
                />
                {mousePosition && (
                    <div
                        className="absolute z-[1000] shadow-sm py-1 bg-white rounded-full w-[140px] text-center pointer-events-none border-2"
                        style={{
                            top: `${mousePosition.y}px`,
                            left: `${mousePosition.x}px`,
                            transform: 'translate(-50%, -50%)',
                            pointerEvents: 'none',
                            display,
                        }}
                    >

                        <div className="flex items-center justify-center gap-2">
                            <div className="p-1 rounded-full border-2 w-fit">
                                <Play size={12} className="text-black" />
                            </div>
                            <span className="text-black text-[16px] pr-1">Check it out </span>
                        </div>
                    </div>
                )}
            </Link>
        </div>
    )
}
