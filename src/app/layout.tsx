import React from "react";
import type { Metadata } from "next";
import "./globals.css";
import ThemeProvider from "@/components/theme-provider/theme-provider";
import { url } from "inspector";

export const metadata: Metadata = {
  title: "Siyu An",
  description: "Siyu An\'s Portfolio",

};

export default function RootLayout({
  children,
}:
  { children: React.ReactNode }
) {
  return (
    <html lang="en" className='scroll-smooth'>
      <body className="debug-screens scroll-smooth overflow-x-clip bg-cover bg-center">
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            disableTransitionOnChange>

            {children}

          </ThemeProvider>
      </body>
    </html>
  );
}
