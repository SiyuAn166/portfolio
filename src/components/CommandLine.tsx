import { useMemo } from 'react';

interface CommandLineProps {
    command: string;
    /** Animation delay offset in seconds (default: 0) */
    delay?: number;
}

export function CommandLine({ command, delay = 0 }: CommandLineProps) {
    const duration = useMemo(() => Math.max(0.4, command.length * 0.045), [command]);
    const steps = command.length;

    return (
        <div className="flex items-center gap-3 mb-6">
            <span className="text-accent font-black flex-shrink-0">$</span>
            <span
                className="text-bright font-bold tracking-tight uppercase italic typewriter"
                style={{
                    '--typewriter-duration': `${duration}s`,
                    '--typewriter-steps': steps,
                    animationDelay: `${delay}s`,
                } as React.CSSProperties}
            >
                {command}
            </span>
        </div>
    );
}
