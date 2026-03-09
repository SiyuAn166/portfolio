import { useEffect, useRef, useState } from 'react';

interface CommandRevealProps {
    command: string;
    prompt?: string;
    /** Start the typing animation when true */
    active: boolean;
    /** Called once results become visible, so the next section can begin */
    onComplete?: () => void;
    children: React.ReactNode;
}

/**
 * Simulates a terminal command being typed, then reveals children as the
 * "output". Sections are activated sequentially via the `active` prop.
 */
export function CommandReveal({
    command,
    prompt = 'guest@termfolio:~',
    active,
    onComplete,
    children,
}: CommandRevealProps) {
    const [typed, setTyped] = useState('');
    const [showResult, setShowResult] = useState(false);

    // Prevent the effect from re-triggering on subsequent renders
    const startedRef = useRef(false);
    // Keep onComplete stable so it never re-triggers the effect
    const onCompleteRef = useRef(onComplete);
    onCompleteRef.current = onComplete;

    useEffect(() => {
        if (!active || startedRef.current) return;
        startedRef.current = true;

        let cancelled = false;
        let timerId: ReturnType<typeof setTimeout>;
        let i = 0;

        const typeNext = () => {
            if (cancelled) return;
            if (i <= command.length) {
                setTyped(command.slice(0, i));
                i++;
                // Randomised typing speed — feels human
                timerId = setTimeout(typeNext, 38 + Math.random() * 28);
            } else {
                // Pause after full command — simulates execution time
                timerId = setTimeout(() => {
                    if (cancelled) return;
                    setShowResult(true);
                    onCompleteRef.current?.();
                }, 320);
            }
        };

        // Brief pause before the first keystroke
        timerId = setTimeout(typeNext, 200);

        return () => {
            cancelled = true;
            clearTimeout(timerId);
            // Reset so StrictMode double-invoke doesn't block the real mount
            startedRef.current = false;
        };
    }, [active, command]);

    // While not yet active, render nothing (but stay mounted so the effect
    // fires correctly when `active` flips to true)
    if (!active) return null;

    return (
        <>
            <div className="text-[13px] mb-6 font-mono">
                <span style={{ color: 'var(--fg-dim)' }}>{prompt}</span>
                <span style={{ color: 'var(--fg)' }}>{typed}</span>
                {!showResult && <span className="cursor" />}
            </div>

            {showResult && (
                <div className="reveal-content">
                    {children}
                </div>
            )}
        </>
    );
}
