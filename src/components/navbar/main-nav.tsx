"use client"

import Link from "next/link";
import Image from "next/image";
import { navItems, githubPath, linkedInPath } from "./config";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import ThemeSwitch from "../theme-switch/theme-switch";
import { Button } from "../ui/button";
import MobileNav from "./mobile-nav";

import Logo from "@/components/site/logo"

export default function MainNav() {
    return (
        <header className="flex justify-center z-10 items-center w-full backdrop-blur transition-[background-color,border-width] border-x-0 text-2xl md:text-base pt-3 px-3">

            <MobileNav/>
            <div className="hidden w-full md:flex justify-left items-center space-x-4">
                <div className="w-20">
                    <Logo/>
                </div>
                {navItems.map((item) => (
                    <Button variant="link" asChild key={item.link}>
                        <Link href={item.link} key={item.link} className="text-sm hover:text-cyan-500">
                            {item.label}
                        </Link>
                    </Button>
                ))}
            </div>
            <div className="flex justify-end items-center">
                <Link href={githubPath} target="_blank"
                    className="px-2 md:px-4 transition duration-600 ease-in-out hover:text-cyan-500 ">
                    <FaGithub />
                </Link>
                <Link href={linkedInPath} target="_blank"
                    className="px-2 md:px-4 transition duration-600 ease-in-out hover:text-cyan-500">
                    <FaLinkedin />
                </Link>
                <ThemeSwitch />
            </div>
        </header>
    )
}