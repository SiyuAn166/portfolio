import { useEffect, useState } from 'react';
import type { Identity } from '../types';
import { CommandLine } from './CommandLine';

interface HeroSectionProps {
    identity: Identity;
}

export function HeroSection({ identity }: HeroSectionProps) {
    const [glitching, setGlitching] = useState(false);

    // Fire glitch on mount after a short delay, then repeat occasionally
    useEffect(() => {
        const fire = () => {
            setGlitching(true);
            setTimeout(() => setGlitching(false), 500);
        };

        const initial = setTimeout(fire, 800);
        const interval = setInterval(fire, 7000);
        return () => {
            clearTimeout(initial);
            clearInterval(interval);
        };
    }, []);

    return (
        <section className="mb-20">
            <CommandLine command="whoami --verbose" />
            <div className="pl-6 border-l-2 border-dim max-w-3xl">
                <h1
                    className={`glitch-title text-bright text-3xl md:text-5xl font-black italic tracking-tighter uppercase mb-4${glitching ? ' glitching' : ''}`}
                    data-text={identity.title}
                >
                    {identity.title}
                </h1>
                <p className="text-sm leading-relaxed italic" style={{ opacity: 0.8 }}>
                    &gt; {identity.tagline}
                </p>
            </div>
        </section>
    );
}
