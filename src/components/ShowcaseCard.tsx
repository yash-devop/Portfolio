"use client"

import useMousePosition from "@/hooks/useMousePosition"
import { Play } from "lucide-react"
import { useRef, useState } from "react"

export default function ShowcaseCard() {
    const containerRef = useRef<HTMLDivElement>(null)
    const mousePosition = useMousePosition(containerRef,500,300)
    const [display, setDisplay] = useState<string>("none")


    return (
        <div 
            ref={containerRef} 
            className="w-full h-[500px] bg-gray-100 relative overflow-hiddens cursor-pointer flex items-center justify-center"
            onMouseLeave={() => setDisplay("none")}
            onMouseEnter={() => setDisplay("block")}
        >
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
                                <Play size={12} className="text-[#9ca3af]"/>
                            </div>
                            <span className="text-[#9ca3af] text-[16px] pr-1">Check it out </span>
                        </div>
                </div>
            )}
        </div>
    )
}
