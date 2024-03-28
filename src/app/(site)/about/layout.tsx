import React from "react";
import NavBar from "@/components/aboutme/navbar";

export default function Layout({children} : {children: React.ReactNode}){

    return (
        <div className="container mx-auto">
            {children}
        </div>
    )
}