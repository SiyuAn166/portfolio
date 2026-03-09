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
            {/* Label above the switch */}
            <span className="text-bright text-[10px] font-black uppercase tracking-[0.18em] leading-none"
                style={{ opacity: 0.3 }}
            >
                PWR
            </span>
            {/* Track */}
            <div className="power-switch-track w-9 h-[18px] flex items-center px-0.5">
                {/* Thumb */}
                <div
                    className="power-switch-thumb w-3 h-3"
                    style={{
                        transform: isDark ? 'translateX(18px)' : 'translateX(0)',
                    }}
                />
            </div>
            {/* Mode indicator below */}
            <span className="text-accent text-[9px] font-black uppercase tracking-widest leading-none"
                style={{ opacity: 0.5 }}
            >
                {isDark ? 'DARK' : 'LITE'}
            </span>
        </button>
    );
}
