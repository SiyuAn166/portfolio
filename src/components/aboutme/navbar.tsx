"use client"

import Link from "next/link"
import { useState, useEffect } from "react";
import {navItems }from "./navitems";
import { cn } from "@/lib/utils";


export default function NavBar() {

    const [activeLink, setActiveLink] = useState('experience');

    useEffect(() => {
        const handleScroll = () => {
            const sectionElements = document.querySelectorAll('section');
            let activeSectionId = '';

            sectionElements.forEach((section) => {
                const rect = section.getBoundingClientRect();
                if (rect.top <= 100 && rect.bottom >= 200) {
                    activeSectionId = section.id;
                }
            });

            setActiveLink(activeSectionId);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className="fixed text-sm md:text-2xl ">
            <ul className="animate-fade-up animate-ease-in-out">
                {navItems.map((el) => (
                    <li key={el.link} className={cn("flex items-center p-4 gap-2 transition-all duration-700 ease-in-out",
                        activeLink === el.link.slice(1) ? "scale-125" : "")}>
                        <div className="flex justify-end w-10 text-indigo-500">
                            {activeLink === el.link.slice(1) && (
                                <el.icon />
                            )}
                        </div>

                        <div className="w-20 ">
                            <Link href={el.link} key={el.link}
                                className={cn("transition duration-700 ease-in-out",
                                    activeLink === el.link.slice(1) ? ' text-indigo-500' : '')}>
                                {el.label}
                            </Link>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}