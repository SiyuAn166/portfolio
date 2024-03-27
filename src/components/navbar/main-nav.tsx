"use client"

import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

import Link from "next/link";
import { navItems, githubPath, linkedInPath } from "./config";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { ThemeSwitch } from "../theme-switch";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"


export default function MainNav() {
    return (
        <header className="w-full sticky top-0 backdrop-blur transition-[background-color,border-width] border-x-0  flex justify-center z-10 items-center">
            <div className="w-full h-16 flex items-center py-4 px-8">
                {/* <div className="w-full flex items-center justify-center">
                    <Link href="/" className="flex items-center">
                        <Avatar>
                            <AvatarImage src="images/profile.png" />
                            <AvatarFallback>SA</AvatarFallback>

                        </Avatar>
                        <div className="px-4">Siyu An</div>

                    </Link>
                </div> */}
                <div className="w-full flex justify-end items-center space-x-4">
                    <NavigationMenu className="list-none">
                        {navItems.map((it) => (
                            <NavigationMenuItem key={it.label}>
                                <Link href={it.link} legacyBehavior passHref>
                                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                        {it.label}
                                    </NavigationMenuLink>
                                </Link>
                            </NavigationMenuItem>
                        ))}
                    </NavigationMenu>
                    <Link href={githubPath} target="_blank">
                        <FaGithub />
                    </Link>
                    <Link href={linkedInPath} target="_blank">
                        <FaLinkedin />
                    </Link>
                    <ThemeSwitch />

                </div>
            </div>
        </header>
    )
}