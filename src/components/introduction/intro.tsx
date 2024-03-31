import { cn } from "@/lib/utils"
import TypeIntro from "../typeintro/typeintro";
import Name from "../site/name";


export default function Intro() {
    let delay = 0;
    const getDelay = () => (delay += 200);
    return (
        <div className="flex flex-col justify-center gap-5 w-full min-h-screen 2xl:max-w-7xl px-6 md:px-10 py-10 md:py-15">
            <p
                className="text-2xl md:text-4xl tracking-widest animate-fade-up animate-ease-in-out"
            >
                Hi, my name is
            </p>

            <div className={'animate-fade-up animate-ease-in-out w-1/2'}
                style={{
                    WebkitTextFillColor: 'transparent',
                    animationDelay: `${getDelay()}ms`,
                }}
            >
                <Name/>
            </div>
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