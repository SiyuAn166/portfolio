"use client"

import Link from "next/link";
import { navItems } from "./config";

import { Button } from "../ui/button";
import MobileNav from "./mobile-nav";

import Logo from "@/components/site/logo"
import SocialContact from "./social-contact";

export default function MainNav() {
    return (
        <header className="flex justify-center z-10 items-center w-full backdrop-blur transition-[background-color,border-width] border-x-0 text-2xl md:text-base pt-3 px-3">

            <MobileNav />
            <div className="hidden w-full md:flex justify-left items-center space-x-4">
                <div className="w-20">
                    <Logo />
                </div>
                {navItems.map((item) => (
                    <Button variant="link" asChild key={item.link}>
                        <Link href={item.link} key={item.link} className="text-sm hover:text-cyan-500">
                            {item.label}
                        </Link>
                    </Button>
                ))}
            </div>
            <SocialContact />
        </header>
    )
}