import { useState } from 'react';
import type { ExperienceEntry } from '../types';

interface ExperienceSectionProps {
    entries: ExperienceEntry[];
}

/** Opacity ladder: current=100%, then decays for older entries */
const OPACITY_LEVELS = [1, 0.55, 0.35, 0.18];

/** Convert a display string to ALL_CAPS_TERMINAL format */
function term(s: string): string {
    return s
        .toUpperCase()
        .replace(/[\s'.]+/g, '_')
        .replace(/[^A-Z0-9_\-]/g, '')
        .replace(/_+$/, '');
}

/** Bus divider line color — shared across all rows to stay consistent */
const BUS_CLR = 'var(--border-hi)';

export function ExperienceSection({ entries }: ExperienceSectionProps) {
    return (
        <section className="font-mono text-[13px] select-none">

            {/* ── TOP POINTER ──
                 Layout: w-20 gutter | ^ (on the bus line) | message text
                 The ^ replaces the very first | tick of the bus line.
                 We achieve this by giving the right column `border-l` but
                 offsetting the ^ with -ml-[1px] so the glyph sits centred
                 on the 1px border, then using pl-3 for the text that follows.
            ── */}
            <div className="flex">
                <div
                    className="w-20 flex-shrink-0 text-[12px]"
                    style={{ color: 'var(--fg-dim)' }}
                >
                    NOW
                </div>
                <div
                    className="flex-1 border-l pb-2"
                    style={{ borderColor: BUS_CLR }}
                >
                    {/* Negative left margin centres ^ over the 1px border */}
                    <div className="relative">
                        <span
                            className="absolute text-[20px]"
                            style={{ color: BUS_CLR, left: '-0.32em', top: '-0.7em' }}
                        >^</span>
                        <span
                            className="animate-pulse text-[12px] uppercase tracking-widest ml-3"
                            style={{ color: 'var(--warn)' }}
                        >

                        </span>
                    </div>
                </div>
            </div>

            {/* ── JOURNAL ENTRIES ── */}
            {entries.map((entry, i) => (
                <EntryRow key={entry.name} entry={entry} index={i} />
            ))}

            {/* ── BOTTOM BOUNDARY ── */}
            <div className="flex">
                <div
                    className="w-20 flex-shrink-0 text-[12px] pt-0.5"
                    style={{ color: 'var(--fg-dim)' }}
                >
                </div>
                <div
                    className="flex-1 border-l pt-0.5"
                    style={{ borderColor: BUS_CLR }}
                >
                    <div className="relative">
                        <span
                            className="absolute text-[22px]"
                            style={{ color: BUS_CLR, left: '-0.3em', top: '-0.8em' }}
                        >_</span>
                        <span
                            className="text-[12px] uppercase tracking-widest ml-3"
                            style={{ color: 'var(--fg-dim)', opacity: 0.5 }}
                        >
                            END_OF_JOURNAL
                        </span>
                    </div>
                </div>
            </div>

        </section>
    );
}

/* ─────────────────────────────────────────────── */
/*  Single journal entry                           */
/* ─────────────────────────────────────────────── */

interface EntryRowProps {
    entry: ExperienceEntry;
    index: number;
}

function EntryRow({ entry, index }: EntryRowProps) {
    const [expanded, setExpanded] = useState(false);
    const [hovered, setHovered] = useState(false);

    const isActive = !!entry.current;
    const baseOpacity = OPACITY_LEVELS[Math.min(index, OPACITY_LEVELS.length - 1)];

    const role = term(entry.title ?? 'UNKNOWN');
    const corp = term(entry.company ?? 'UNKNOWN');
    const period = (entry.dateRange ?? entry.timestamp).toUpperCase();
    const status = isActive ? 'ACTIVE' : 'FORMER';

    return (
        <div
            className="flex transition-opacity duration-300"
            style={{ opacity: hovered ? 1 : baseOpacity }}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            {/* Timestamp column */}
            <div
                className="w-20 flex-shrink-0 text-[12px] pt-0.5 leading-tight"
                style={{ color: 'var(--fg-dim)' }}
            >
                {entry.timestamp}
            </div>

            {/* Payload column — border-l creates the continuous bus line */}
            <div
                className="flex-1 border-l pb-7 relative"
                style={{ borderColor: BUS_CLR }}
            >
                <span
                    className="absolute text-[22px]"
                    style={{ color: BUS_CLR, top: '-0.86em' }}
                >_</span>
                <div className="ml-3">
                    {/* Entry header */}
                    <div className="mb-1.5 uppercase tracking-widest leading-tight">
                        <span className="font-bold" style={{ color: 'var(--fg-dim)' }}>{'>>> '}</span>
                        <span className="font-bold" style={{ color: isActive ? 'var(--fg)' : 'var(--fg-dim)' }}>
                            {entry.name}
                        </span>
                        <span
                            className="ml-2 text-[11px]"
                            style={{ color: isActive ? 'var(--warn)' : 'var(--fg-dim)' }}
                        >
                            [{status}]
                        </span>
                    </div>

                    {/* Key-value block — colons aligned at column 7 (padEnd(6) + " : ") */}
                    <div className="space-y-0.5 text-[12px] mb-2">
                        <KV k="ROLE" v={role} active={isActive} />
                        <KV k="CORP" v={corp} />
                        <KV k="PERIOD" v={period} />
                        <KV k="STATUS" v={status} active={isActive} warn={isActive} />
                        {entry.researchUrl && (
                            <div className="flex">
                                <span style={{ whiteSpace: 'pre', color: 'var(--fg-dim)' }}>{'REF   '}</span>
                                <span style={{ color: 'var(--fg-dim)' }}>{' : '}</span>
                                <a
                                    href={entry.researchUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="underline"
                                    style={{ color: 'var(--info)' }}
                                    onClick={e => e.stopPropagation()}
                                >
                                    EXTERNAL LINK ↗
                                </a>
                            </div>
                        )}
                    </div>

                    {/* Highlights toggle */}
                    {entry.highlights && entry.highlights.length > 0 && (
                        <>
                            <button
                                onClick={() => setExpanded(v => !v)}
                                className="text-[12px] uppercase tracking-widest cursor-pointer hover:underline"
                                style={{ background: 'none', border: 'none', padding: 0, color: 'var(--fg-dim)' }}
                            >
                                {expanded
                                    ? '[-] COLLAPSE'
                                    : `[+] EXPAND_HIGHLIGHTS(${entry.highlights.length})`}
                            </button>

                            {expanded && (
                                <div className="mt-2 space-y-2">
                                    {entry.highlights.map((h, j) => (
                                        <div key={j} className="flex gap-2 text-[12px]">
                                            <span
                                                className="flex-shrink-0 font-bold"
                                                style={{ color: 'var(--fg-dim)' }}
                                            >
                                                {`[${String(j + 1).padStart(2, '0')}]`}
                                            </span>
                                            <span
                                                className="uppercase"
                                                style={{ color: 'var(--fg-dim)', wordBreak: 'break-word' }}
                                            >
                                                {h}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}

/* ─────────────────────────────────────────────── */
/*  Key : Value row with aligned colons            */
/* ─────────────────────────────────────────────── */

interface KVProps {
    k: string;
    v: string;
    active?: boolean;
    warn?: boolean;
}

function KV({ k, v, active, warn }: KVProps) {
    const valColor = warn
        ? 'var(--warn)'
        : active
            ? 'var(--fg)'
            : 'var(--fg-dim)';

    return (
        <div className="flex">
            {/* padEnd(6) aligns all colons at column 7 in monospace */}
            <span style={{ whiteSpace: 'pre', color: 'var(--fg-dim)' }}>{k.padEnd(6)}</span>
            <span style={{ color: 'var(--fg-dim)' }}>{' : '}</span>
            <span className="uppercase" style={{ color: valColor }}>{v}</span>
        </div>
    );
}
