import Heading from "@/components/ui/Heading";
import { Github, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";

export default function Page() {
    return (
        <>
            <div className="pt-20">
                <Heading>Let&apos;s connect ?</Heading>
                <p className="py-4">
                    I&apos;m excited to connect with others via email <a target="_blank" rel="noopener noreferrer" href="mailto:yashkamble.dev@gmail.com" className="text-blue-500 underline underline-offset-4"> (yashkamble.dev@gmail.com)</a> and <a href="https://x.com/yash_devop" className="text-blue-500 underline underline-offset-4">Twitter</a> to chat about projects and ideas. Ready to take freelance projects, and also open to hear about potential opportunities, discussing them with you and then potentially collaborating if it&apos;s a good fit.
                </p>

                <div className="pt-10 flex items-center flex-wrap gap-3">
                    <Link target="_blank" rel="noopener noreferrer" href={"https://x.com/yash_devop"}> 
                        <div className="border border-secondary/5 bg-secondary-dark/40 dark:bg-secondary-dark/10 text-primary dark:text-secondary px-6 rounded-xl py-3 w-fit flex items-center justify-center gap-2 cursor-pointer">
                            <Twitter className="text-blue-400 fill-blue-400"/>
                            <p className="text-blue-400">Twitter</p>
                        </div>
                    </Link>
                    <Link target="_blank" rel="noopener noreferrer" href={"https://www.linkedin.com/in/yash-dev/"}>
                        <div className="border border-secondary/5 bg-secondary-dark/40 dark:bg-secondary-dark/10 text-primary dark:text-secondary px-6 rounded-xl py-3 w-fit flex items-center justify-center gap-2 cursor-pointer">
                            <Linkedin className="text-blue-600"/>
                            <p className="text-blue-600">LinkedIn</p>
                        </div>
                    </Link>
                    <Link target="_blank" rel="noopener noreferrer" href={"https://github.com/yash-devop"}>
                        <div className="border border-secondary/5 bg-secondary-dark/40 dark:bg-secondary-dark/10 text-primary dark:text-secondary px-6 rounded-xl py-3 w-fit flex items-center justify-center gap-2 cursor-pointer">
                            <Github className="text-primary fill-yellow-500 dark:text-yellow-500 dark:fill-none"/>
                            <p className="text-primary dark:text-white">Github</p>
                        </div>
                    </Link>
                </div>
            </div>
        </>
    )
}