"use client";

import React, { useState, useEffect } from 'react';
import { BiArrowToTop } from "react-icons/bi";

const BackToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 100) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', toggleVisibility);

        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <button
            className={`fixed bottom-4 right-4 z-20 md:bottom-10 md:right-60 hover:bg-gray-300/70 dark:hover:bg-[#424242]/70 rounded-full p-2 transition duration-300 ease-in-out ${isVisible ? 'opacity-100' : 'opacity-0'
                }`}
            onClick={scrollToTop}
            style={{ opacity: isVisible ? 1 : 0 }}
        >
            <BiArrowToTop className="h-6 w-6" />
        </button>
    );
};

export default BackToTop;
