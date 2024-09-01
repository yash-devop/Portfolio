import Image from "next/image";

export default function SkillCard({
    icon,
    name
}:{
    icon: string,
    name: string
}){
    return (
        <>
            <div className="w-fit bg-secondary/10 py-2 px-4 rounded-lg border flex items-center gap-2 border-secondary/5 group-hover:opacity-25 hover:!opacity-100 cursor-pointer transition-all">
                <Image alt="next_svg" width={25} height={25} src={icon} className="object-contain fill-blue-400" />
                <span className="text-[16px] font-medium  text-primary dark:text-secondary-dark dark:group-hover:text-white">{name}</span>
            </div>
        </>
    )
}