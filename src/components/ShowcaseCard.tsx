"use client"

import useMousePosition from "@/hooks/useMousePosition"
import { Play } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useRef, useState } from "react"


type ShowcaseType = {
    id: number,
    image: string,
    href: string,
    className?: string
}

export default function ShowcaseCard({id,href,image, className}:ShowcaseType) {
    const containerRef = useRef<HTMLDivElement>(null)
    const mousePosition = useMousePosition(containerRef, 500, 300)
    const [display, setDisplay] = useState<string>("none")


    return (
        <div
         key={id}
            ref={containerRef}
            className="w-full relative overflow-hidden cursor-pointer flex items-center justify-center"
            onMouseLeave={() => setDisplay("none")}
            onMouseEnter={() => setDisplay("block")}
        >
            <Link key={id} href={href} className={className}>
                <Image
                    alt="project1"
                    src={image}
                    width={850}
                    height={850}
                    className="object-cover aspect-auto"
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
