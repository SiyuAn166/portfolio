import { cn } from "@/lib/utils"
import { TypeIntro } from "../typeintro";
import { Button } from "../ui/button";
import { PiNewspaperLight } from "react-icons/pi";


export default function Introduction() {
    let delay = 0;
    const getDelay = () => (delay += 200);

    return (
        <div className="max-w-screen-md 2xl:max-w-7xl gap-5 flex flex-col justify-center min-h-full px-6 md:px-10 py-10 md:py-15 ">
            <p
                className="text-2xl md:text-4xl tracking-widest animate-fade-up animate-ease-in-out"
            >
                Hi, my name is
            </p>

            <strong
                className={cn(
                    `text-5xl md:text-8xl tracking-widest font-black bg-clip-text bg-gradient-to-r`,
                    'animate-fade-up animate-ease-in-out',
                    'from-indigo-700 to-red-500'
                )}
                style={{
                    WebkitTextFillColor: 'transparent',
                    animationDelay: `${getDelay()}ms`,
                }}
            >
                Siyu An
            </strong>
            <div
                className={cn('animate-fade-up animate-ease-in-out')}
                style={{
                    animationDelay: `${getDelay()}ms`,
                }}>
                <TypeIntro />
            </div>
            <div
                className={cn(
                    'tracking-widest',
                    'animate-fade-up animate-ease-in-out',
                    'gap-3'
                )}
                style={{
                    animationDelay: `${getDelay()}ms`,
                }}
            >
                <p className="text-2xl md:text-4xl">
                    I build things with
                </p>
                <div className="text-2xl md:text-5xl py-2 md:py-4">
                    <span className={cn(`font-semibold text-[#61DAFB]`, 'underline decoration-[#61DAFB]')}>React</span>,&nbsp;
                    <span className={cn(`font-semibold text-[#007ACC]`, 'underline decoration-[#007ACC]')}>TypeScript</span>,&nbsp;
                    <span className={cn(`font-semibold text-[#00ADD8]`, 'underline decoration-[#00ADD8]')}>Golang</span> and&nbsp;
                    <span className={cn(`font-semibold text-[#B07219]`, 'underline decoration-[#B07219]')}>Java</span>.
                </div>
                
            </div>
        </div>
    )
}