import MainNav from "@/components/navbar/main-nav";
import React from "react";
export default function Layout({ children }: {children: React.ReactNode}) {

    return (
        <div className="flex justify-center">
            <MainNav />
            <main className="w-full md:w-9/12 h-full">
                {children}
            </main>
        </div>
    )

}