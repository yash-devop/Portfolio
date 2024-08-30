"use client"

import useMousePosition from "@/hooks/useMousePosition"
import { Play } from "lucide-react"
import { useRef, useState } from "react"

export default function ShowcaseCard() {
    // const [mousePosition, setMousePosition] = useMousePosition();
    const [mousePosition, setMousePosition] = useState<{ x: number, y: number } | null>(null)
    const containerRef = useRef<HTMLDivElement>(null)
    const [display, setDisplay] = useState<string>("none")

    const handleMouseMove = (e: MouseEvent) => {
        const rect = containerRef.current?.getBoundingClientRect()
        if (rect) {
            console.log('rect wid hi',rect.width,rect.height);          // 800 and 500 fixed !
            const maxX = rect.width + 50                                // 850 
            const maxY = rect.height + 50                               // 550

            setMousePosition({
                x: Math.max(30, Math.min(e.clientX - rect.left + 40, maxX)),        
                y: Math.max(30, Math.min(e.clientY - rect.top + 40, maxY)) 
            })
        }
    }
    

    return (
        <div 
            ref={containerRef} 
            className="w-full h-[500px] bg-gray-100 relative overflow-hiddens cursor-pointer flex items-center justify-center"
            onMouseMove={handleMouseMove}
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
