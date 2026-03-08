import { useEffect, useState } from 'react';

interface BootSequenceProps {
    messages: string[];
    /** Delay in ms between each line appearing (default: 150) */
    lineDelay?: number;
    onComplete?: () => void;
}

/** Token colours for bracket tags at the start of a boot line */
const TAG_COLORS: Record<string, string> = {
    'OK': 'var(--accent)',       // green
    'ERR': '#F87171',             // red-400
    'WARN': '#FBBF24',             // amber-400
    'INFO': '#60A5FA',             // blue-400
    '....': 'var(--text-mid)',     // dim (loading placeholder)
};

/**
 * Splits a message like "[ OK ] Some text" into a coloured tag span
 * and the remaining plain text. Falls back to rendering the whole line
 * as plain text if no known tag is found.
 */
function BootLine({ msg, isLast }: { msg: string; isLast: boolean }) {
    const match = msg.match(/^\[\s*([^\]]+?)\s*\]\s*(.*)/s);

    if (match) {
        const [, tag, rest] = match;
        const color = TAG_COLORS[tag.trim()] ?? 'var(--text-mid)';
        return (
            <p
                className={isLast ? 'pt-2 font-bold' : ''}
                style={{ animation: 'fadeInUp 0.2s ease-out forwards', color: 'var(--text-dim)' }}
            >
                <span style={{ color: 'var(--text-dim)' }}>[ </span>
                <span style={{ color }}>{tag.trim()}</span>
                <span style={{ color: 'var(--text-dim)' }}> ]</span>
                {rest ? ` ${rest}` : ''}
            </p>
        );
    }

    // No tag — render the whole line, last line gets accent colour
    return (
        <p
            className={isLast ? 'text-accent pt-2 font-bold' : 'text-dim'}
            style={{ animation: 'fadeInUp 0.2s ease-out forwards' }}
        >
            {msg}
        </p>
    );
}

export function BootSequence({ messages, lineDelay = 150, onComplete }: BootSequenceProps) {
    const [visibleCount, setVisibleCount] = useState(0);

    useEffect(() => {
        if (visibleCount >= messages.length) {
            const done = setTimeout(() => onComplete?.(), 400);
            return () => clearTimeout(done);
        }
        const timer = setTimeout(() => setVisibleCount(v => v + 1), lineDelay);
        return () => clearTimeout(timer);
    }, [visibleCount, messages.length, lineDelay, onComplete]);

    return (
        <section className="mb-16 space-y-1 text-[10px] md:text-xs" style={{ opacity: 0.6 }}>
            {messages.slice(0, visibleCount).map((msg, i) => (
                <BootLine key={i} msg={msg} isLast={i === messages.length - 1} />
            ))}
        </section>
    );
}
