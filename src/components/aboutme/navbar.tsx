"use client"

import Link from "next/link"
import { useState, useEffect } from "react";
import { navItems } from "./navitems";
import { cn } from "@/lib/utils";
import { RiArrowRightSLine } from "react-icons/ri";

export default function NavBar() {

    const [activeLink, setActiveLink] = useState('experience');

    useEffect(() => {
        const handleScroll = () => {
            const sectionElements = document.querySelectorAll('section');
            let activeSectionId = '';

            var viewportHeight = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
            var halfViewportHeight = viewportHeight / 2;

            sectionElements.forEach((section) => {
                const rect = section.getBoundingClientRect();
                if (rect.top <= halfViewportHeight && rect.bottom >= halfViewportHeight) {
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
        <nav className="hidden md:block sticky top-1/4 w-1/6 text-sm md:text-base" 
            style={{alignSelf: "flex-start"}}>
            {/* Problem: the box is not scrolling due to flex box.
                Fix: Since flex box elements default to stretch, all the elements are the same height, which can't be scrolled against.
                Adding align-self: flex-start to the sticky element set the height to auto, which allowed scrolling, and fixed it. */}
            <ul className="animate-fade-up animate-ease-in-out">
                {navItems.map((el) => (
                    <li key={el.link} className={cn("flex items-center p-4 gap-2 transition-all duration-700 ease-in-out",
                        activeLink === el.link.slice(1) ? "scale-125" : "")}>
                        <div className="flex justify-end w-10">
                            {activeLink === el.link.slice(1) && (
                                <RiArrowRightSLine/>
                            )}
                        </div>

                        <div className="w-20 ">
                            <Link href={el.link} key={el.link}
                                className={cn("transition duration-700 ease-in-out")}>
                                {el.label}
                            </Link>
                        </div>
                    </li>
                ))}
            </ul>
        </nav>
    )
}