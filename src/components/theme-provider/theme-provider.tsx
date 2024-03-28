"use client"

import * as React from "react"
import { ThemeProvider as NextThemesProvider } from "next-themes"
import { type ThemeProviderProps } from "next-themes/dist/types"
import { useState, useEffect } from "react"


export default function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  const [isMounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  if (!isMounted) {
    return null;
  }
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}
