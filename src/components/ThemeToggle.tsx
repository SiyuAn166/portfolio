interface ThemeToggleProps {
    theme: 'dark' | 'light';
    onToggle: () => void;
}

export function ThemeToggle({ theme, onToggle }: ThemeToggleProps) {
    const isDark = theme === 'dark';

    return (
        <button
            onClick={onToggle}
            className="fixed top-5 right-5 z-[110] flex flex-col items-center gap-1.5 cursor-pointer select-none bg-transparent border-none outline-none group"
            aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
            title={`Switch to ${isDark ? 'light' : 'dark'} mode`}
        >
            {/* Mode indicator below */}
            <span className="text-accent text-[9px] font-black uppercase tracking-widest leading-none"
                style={{ opacity: 0.5 }}
            >
                {isDark ? 'DARK' : 'LITE'}
            </span>
        </button>
    );
}
