import { IBM_Plex_Serif } from "next/font/google";
import { cn } from "@/lib/utils";

const IBMPlexSerif = IBM_Plex_Serif({
    subsets: ["latin"],
    weight: ["500"],
    style: "italic"
})
export const SerifHeading=({
    className
}:{
    className?:string
})=>{
    return (
        <>
            <h1 className={`${cn("py-12 font-medium",IBMPlexSerif.className, className)} `}>Yash Kamble .</h1>
        </>
    )
}