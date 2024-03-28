import React from "react";

export default function Layout({children} : {children: React.ReactNode}){

    return (
        <div className="min-h-[calc(100vh-190px)]">
            {children}
        </div>
    )
}