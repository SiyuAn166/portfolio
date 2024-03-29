"use client";

import Link from "next/link";
import { Text } from 'lucide-react';
import { navItems } from "./config";
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTrigger,
} from "@/components/ui/sheet"
import { useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

import Logo from "@/components/site/logo";


export default function MobileNav() {
    const [open, setOpen] = useState(false);
    return (
        <div className={cn("w-full justify-start items-center ml-3 md:hidden")}>
            <Sheet open={open} onOpenChange={setOpen}>
                <SheetTrigger>
                    <Text />
                </SheetTrigger>
                <SheetContent side="left" className="w-40 animate-fade-right">
                    <SheetHeader className="pt-10">
                        <Logo/>
                    </SheetHeader>
                    <ol className="pt-10">
                        {navItems.map((item) => (
                            <li key={item.link} className="py-2">
                                <Link href={item.link} key={item.link} onClick={() => { setOpen(false) }}>
                                    {item.label}
                                </Link>
                            </li>
                        ))}
                    </ol>
                </SheetContent>
            </Sheet>
        </div>
    )
}