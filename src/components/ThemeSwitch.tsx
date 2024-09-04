
import { cn } from "@/lib/utils";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react"
import { flushSync } from "react-dom";

export default function ThemeSwitch() {
    const [mounted, setMounted] = useState(false)
    const { theme, setTheme } = useTheme();

    // useEffect only runs on the client, so now we can safely show the UI
    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) {
        return null
    }

    const toggleTheme = () => {
        document.startViewTransition(()=>{
            flushSync(()=>{

                setTheme(theme === "dark" ? "light" : "dark");
            })
        })
    };


    return (
        <>
            <div onClick={toggleTheme}
            className={cn(
                "rounded-full p-1.5 cursor-pointer",
                theme === "light" ? "hover:bg-gray-100" : "hover:bg-white/10"
            )}>
                {
                    theme === "light" ? (
                        <Moon size={18}/>
                    ) : (
                        <Sun size={18} />
                    )
                }
            </div>
        </>
    )
}