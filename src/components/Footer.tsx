import type { Meta } from '../types';

interface FooterProps {
    meta: Meta;
}

export function Footer({ meta }: FooterProps) {
    return (
        <footer className="mt-40 border-t border-dim pt-10">
            <div className="flex items-center gap-4 text-lg">
                <span className="text-accent font-black">$</span>
                <span className="text-faint tracking-tighter italic">type &apos;help&apos; to see more...</span>
                <div className="terminal-cursor" aria-hidden="true" />
            </div>

            <div
                className="mt-12 flex flex-col md:flex-row justify-between text-[9px] font-mono uppercase tracking-[0.3em]"
                style={{ opacity: 0.2 }}
            >
                <p>{meta.copyright}</p>
                <p>{meta.location}</p>
            </div>
        </footer>
    );
}
