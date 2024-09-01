import { cn } from "@/lib/utils"

export default function Heading(props:React.HTMLProps<HTMLHeadingElement>) {
    return (
        <>
            <h1 {...props} className={cn("text-[32px] tracking-tighter leading-tight text-primary dark:text-white", props.className)}>{props.children}</h1>
        </>
    )
}