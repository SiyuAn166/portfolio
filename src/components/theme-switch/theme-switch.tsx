"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import { useEffect } from "react"

export default function ThemeSwitch() {
    const { theme, setTheme } = useTheme()
    document.body.style.backgroundAttachment = 'fixed';
    useEffect(()=>{
        document.body.style.backgroundImage = theme === 'light' ? 'url(images/bg-light.jpg)' : 'url(images/bg-dark.jpg)'
    },[theme])

    return (
        <Button variant="outline" size="icon" onClick={() => { setTheme(theme === "light" ? "dark" : "light") }}>
            <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle theme</span>
        </Button>

    )
}