import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import type { Meta } from '../types';

const SHELL_USER = 'guest';
const SHELL_HOST = 'termfolio';
const SHELL_DIR = '~';

const DEFAULT_COMMANDS: Record<string, string | ((input: string) => string)> = {
    date: () => new Date().toLocaleString('en-US', { weekday: 'short', month: 'short', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit', year: 'numeric' }),
    echo: (input: string) => {
        const args = input.replace(/^echo\s*/i, '');
        return args;
    },
};

/** CSS for cursor indicator - solid block when focused, hollow block when blurred */
const CURSOR_STYLE = `
  .cursor {
    display: inline-block;
    width: 0.5em;
    height: 1em;
    margin-left: 2px;
    vertical-align: text-bottom;
  }
  
  .cursor.active {
    background-color: var(--fg);
  }
  
  .cursor.inactive {
    border: 1px solid var(--fg);
    background-color: transparent;
  }
`;

export function TerminalInput({ meta }: { meta?: Meta }) {
    const [input, setInput] = useState('');
    const [history, setHistory] = useState<{ cmd: string; output: string }[]>([]);
    const [historyIndex, setHistoryIndex] = useState(-1);
    const [isFocused, setIsFocused] = useState(false);
    const inputRef = useRef<HTMLInputElement>(null);
    const sizerRef = useRef<HTMLSpanElement>(null);
    const inputRowRef = useRef<HTMLDivElement>(null);

    // Merge config commands with defaults
    const COMMANDS = { ...DEFAULT_COMMANDS, ...(meta?.commands || {}) };
    const commandNames = Object.keys(COMMANDS);

    // Sync input element width to measured text width — runs before paint, no flicker.
    useLayoutEffect(() => {
        if (sizerRef.current && inputRef.current) {
            inputRef.current.style.width = sizerRef.current.offsetWidth + 'px';
        }
    }, [input]);

    // After history grows (user executes commands), scroll input line into center view.
    // Only scroll if history has content — don't scroll on initial mount.
    useEffect(() => {
        if (history.length > 0) {
            inputRowRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    }, [history]);

    const handleKey = (e: React.KeyboardEvent<HTMLInputElement>) => {
        // Handle history navigation
        if (e.key === 'ArrowUp') {
            e.preventDefault();
            if (history.length === 0) return;
            let newIndex = historyIndex + 1;
            if (newIndex >= history.length) newIndex = history.length - 1;
            setHistoryIndex(newIndex);
            setInput(history[history.length - 1 - newIndex].cmd);
            return;
        }

        if (e.key === 'ArrowDown') {
            e.preventDefault();
            if (historyIndex <= -1) return;
            const newIndex = historyIndex - 1;
            setHistoryIndex(newIndex);
            if (newIndex === -1) {
                setInput('');
            } else {
                setInput(history[history.length - 1 - newIndex].cmd);
            }
            return;
        }

        // Handle tab autocomplete
        if (e.key === 'Tab') {
            e.preventDefault();
            const trimmedInput = input.trim().toLowerCase();
            const matches = commandNames.filter(cmd => cmd.startsWith(trimmedInput));

            if (matches.length === 1) {
                setInput(matches[0]);
            } else if (matches.length > 1) {
                // Find common prefix
                const commonPrefix = matches[0];
                const prefix = commonPrefix.substring(0,
                    matches.reduce((minLen, match) => {
                        let i = 0;
                        while (i < minLen && commonPrefix[i] === match[i]) i++;
                        return i;
                    }, commonPrefix.length)
                );
                if (prefix.length > trimmedInput.length) {
                    setInput(prefix);
                }
            }
            return;
        }

        if (e.key !== 'Enter') return;
        const cmd = input.trim();
        const cmdName = cmd.toLowerCase().split(' ')[0];

        if (cmdName === 'clear') {
            setHistory([]);
            setInput('');
            setHistoryIndex(-1);
            return;
        }

        let output = '';
        if (cmdName === 'contact') {
            // Always use contactLinks if available, ignore commands.contact
            if (meta?.contactLinks) {
                output = meta.contactLinks.map(link => `→ ${link.label}: ${link.value}`).join('\n');
            } else {
                output = 'No contact information available';
            }
        } else if (cmdName in COMMANDS) {
            const val = COMMANDS[cmdName];
            output = typeof val === 'function' ? val(cmd) : val;
        } else if (cmd) {
            output = `bash: ${cmdName}: command not found`;
        }

        setHistory(h => [...h, { cmd: input, output }]);
        setInput('');
        setHistoryIndex(-1);
    };

    return (
        <>
            <style>{CURSOR_STYLE}</style>
            {/* Outer container */}
            <div
                className="w-full transition-all duration-300"
                style={{
                    width: '100%',
                    background: 'var(--bg)',
                    boxSizing: 'border-box',
                }}
            >
                <section
                    className=""
                    onClick={() => inputRef.current?.focus()}
                >
                    <div className="pt-8 pb-12 mx-auto" style={{ maxWidth: '80rem' }}>
                        {history.length > 0 && (
                            <div className="space-y-1 mb-3 text-[13px] font-mono w-full">
                                {history.map((h, i) => (
                                    <div key={i}>
                                        <p>
                                            <span style={{ color: 'var(--fg-dim)' }}>{SHELL_USER}@{SHELL_HOST}:{SHELL_DIR}</span>
                                            <span style={{ color: 'var(--fg)' }}>$ </span>
                                            <span style={{ color: 'var(--fg)' }}>{h.cmd}</span>
                                        </p>
                                        {h.output && (
                                            <pre style={{ color: 'var(--fg)', margin: 0, whiteSpace: 'pre-wrap', wordWrap: 'break-word', fontFamily: 'inherit' }}>
                                                {h.output}
                                            </pre>
                                        )}
                                    </div>
                                ))}
                            </div>
                        )}

                        <div ref={inputRowRef} className="flex items-center text-[13px] font-mono w-full">
                            <span style={{ color: 'var(--fg-dim)', flexShrink: 0 }}>{SHELL_USER}@{SHELL_HOST}:{SHELL_DIR}</span>
                            <span style={{ color: 'var(--fg)', flexShrink: 0 }}>$</span>
                            <span style={{ position: 'relative', display: 'inline-flex', alignItems: 'center', flex: 1, minWidth: 0, marginLeft: '1ch' }}>
                                {/* Hidden sizer: measures exact pixel width of typed text */}
                                <span
                                    ref={sizerRef}
                                    aria-hidden="true"
                                    style={{
                                        visibility: 'hidden', position: 'absolute', whiteSpace: 'pre',
                                        pointerEvents: 'none', fontFamily: 'inherit', fontSize: 'inherit',
                                        fontWeight: 'inherit', letterSpacing: 'inherit', left: 0, top: 0,
                                    }}
                                >
                                    {input}
                                </span>
                                <input
                                    ref={inputRef}
                                    value={input}
                                    onChange={e => setInput(e.target.value)}
                                    onKeyDown={handleKey}
                                    onFocus={() => setIsFocused(true)}
                                    onBlur={() => setIsFocused(false)}
                                    className="bg-transparent outline-none border-none"
                                    style={{
                                        color: 'var(--fg)',
                                        caretColor: 'transparent',
                                        fontFamily: 'inherit', fontSize: 'inherit', fontWeight: 'inherit',
                                        letterSpacing: 'inherit', padding: 0, margin: 0, minWidth: 0, width: '0px',
                                    }}
                                    autoCorrect="off"
                                    autoCapitalize="off"
                                    spellCheck={false}
                                    aria-label="Terminal command input"
                                />
                                <span className={`cursor ${isFocused ? 'active' : 'inactive'}`} aria-hidden="true" />
                            </span>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
}

export function CopyrightBar({ meta }: { meta: Meta }) {
    return (
        <footer
            className="fixed bottom-0 z-40 px-4 md:px-8 py-3"
            style={{
                left: '50%',
                transform: 'translateX(-50%)',
                width: '100%',
                maxWidth: '80rem',
                boxSizing: 'border-box',
                background: 'var(--bg)',
                borderTop: '1px solid var(--border)',
            }}
        >
            <div
                className="flex flex-col sm:flex-row justify-between text-[11px] font-mono uppercase tracking-[0.25em]"
                style={{ color: 'var(--fg-dim)', opacity: 0.45 }}
            >
                <p>{meta.copyright}</p>
                <p>{meta.location}</p>
            </div>
        </footer>
    );
}
