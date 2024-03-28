"use client"

import Link from "next/link";
import { navItems, githubPath, linkedInPath } from "./config";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import ThemeSwitch from "../theme-switch/theme-switch";
import { Button } from "../ui/button";


export default function MainNav() {
    return (
        <header className="w-full sticky top-0 backdrop-blur transition-[background-color,border-width] border-x-0  flex justify-center z-10 items-center">
            <div className="w-full h-16 flex items-center py-4 px-8">
                <div className="w-full flex justify-end items-center space-x-4">
                    {navItems.map((item) => (
                        <Button variant="link" asChild key={item.link}>
                            <Link href={item.link} key={item.link}>
                                {item.label}
                            </Link>
                        </Button>
                    ))}
                    <Link href={githubPath} target="_blank" className="px-2 md:px-4">
                        <FaGithub />
                    </Link>
                    <Link href={linkedInPath} target="_blank" className="px-2 md:px-4">
                        <FaLinkedin />
                    </Link>
                    <ThemeSwitch />

                </div>
            </div>
        </header>
    )
}