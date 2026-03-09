// Shell session info shared across commands
const SHELL_USER = 'guest';
const SHELL_HOST = 'termfolio';
const SHELL_DIR = '~';

interface CommandLineProps {
    command: string;
}

export function CommandLine({ command }: CommandLineProps) {
    return (
        <div className="mb-6 text-[13px] font-mono">
            <span style={{ color: 'var(--fg-dim)' }}>
                {SHELL_USER}@{SHELL_HOST}:{SHELL_DIR}
            </span><span style={{ color: 'var(--fg)' }}>$ </span><span className="uppercase italic tracking-tight" style={{ color: 'var(--fg)' }}>
                {command}
            </span>
        </div>
    );
}
