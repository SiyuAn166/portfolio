import MainNav from "@/components/navbar/main-nav";
import React from "react";
export default function Layout({ children }: {children: React.ReactNode}) {

    return (
        <div className="mx-auto w-full md:w-9/12">
            <MainNav />
            <main className="min-h-[calc(100vh-190px)]">
                {children}
            </main>
        </div>
    )

}