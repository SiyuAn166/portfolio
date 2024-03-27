import MainNav from "@/components/navbar/main-nav";
import React from "react";
export default function Layout({ children }: {children: React.ReactNode}) {

    return (
        <div style={{ width: '90%', margin: '0 auto' }}>
            <MainNav />
            <main className="min-h-[calc(100vh-190px)]">
                {children}
            </main>
        </div>
    )

}