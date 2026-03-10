import type { ReactNode } from 'react';
import { useState } from 'react';
import type { ExperienceEntry } from '../types';

interface ExperienceSectionProps {
    entries: ExperienceEntry[];
}

/** Opacity ladder: index 0 (current) = 100%, decays for older entries */
const OPACITY_LEVELS = [1, 0.6, 0.4, 0.22];

/** Number of highlights shown before the expand toggle appears */
const PREVIEW_COUNT = 3;

/** Long dash run — container clips overflow to fill any width */
const DASHES = '─'.repeat(300);

const BOX_CLR = 'var(--border-hi)';

/**
 * A 1px vertical line drawn via background-image inside a 1ch-wide div.
 * The div stretches to the full flex-row height (align-self:stretch is the
 * flexbox default), so the line is continuous even when content wraps.
 * background-position:center aligns the 1px strip with the vertical stroke
 * of the ┌/└/├ corner glyphs used in BoxTop / BoxMid / BoxBot.
 */
const SIDE_LINE: React.CSSProperties = {
    flexShrink: 0,
    width: '1ch',
    backgroundImage: `linear-gradient(${BOX_CLR}, ${BOX_CLR})`,
    backgroundSize: '1px 100%',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
};

/* ─────────────────────────────────────────────── */
/*  Primitive box-drawing rows                     */
/* ─────────────────────────────────────────────── */

function BoxTop() {
    return (
        <div className="flex overflow-hidden leading-none select-none">
            <span style={{ color: BOX_CLR, flexShrink: 0 }}>┌</span>
            <span aria-hidden style={{ color: BOX_CLR, flex: 1, overflow: 'hidden', whiteSpace: 'nowrap' }}>
                {DASHES}
            </span>
            <span style={{ color: BOX_CLR, flexShrink: 0 }}>┐</span>
        </div>
    );
}

function BoxMid() {
    return (
        <div className="flex overflow-hidden leading-none select-none">
            <span style={{ color: BOX_CLR, flexShrink: 0 }}>├</span>
            <span aria-hidden style={{ color: BOX_CLR, flex: 1, overflow: 'hidden', whiteSpace: 'nowrap' }}>
                {DASHES}
            </span>
            <span style={{ color: BOX_CLR, flexShrink: 0 }}>┤</span>
        </div>
    );
}

function BoxBot() {
    return (
        <div className="flex overflow-hidden leading-none select-none">
            <span style={{ color: BOX_CLR, flexShrink: 0 }}>└</span>
            <span aria-hidden style={{ color: BOX_CLR, flex: 1, overflow: 'hidden', whiteSpace: 'nowrap' }}>
                {DASHES}
            </span>
            <span style={{ color: BOX_CLR, flexShrink: 0 }}>┘</span>
        </div>
    );
}

function BoxRow({ children }: { children: ReactNode }) {
    return (
        <div className="flex">
            {/* left side: 1px line centered in 1ch div — stretches with row height */}
            <div aria-hidden style={SIDE_LINE} />
            <div className="flex-1 px-2 min-w-0">{children}</div>
            {/* right side: same trick */}
            <div aria-hidden style={SIDE_LINE} />
        </div>
    );
}

/* ─────────────────────────────────────────────── */
/*  Chain connector — arrow points UP              */
/*  (oldest entry at bottom → newest at top)       */
/* ─────────────────────────────────────────────── */

function ChainConnector() {
    return (
        <div
            className="flex flex-col items-center leading-tight py-0.5 select-none"
            aria-hidden
            style={{ color: BOX_CLR }}
        >
            <span>│</span>
            <span>▲</span>
            <span>│</span>
        </div>
    );
}

/* ─────────────────────────────────────────────── */
/*  Main section                                   */
/* ─────────────────────────────────────────────── */

export function ExperienceSection({ entries }: ExperienceSectionProps) {
    return (
        <section className="font-mono text-[13px]">
            {entries.map((entry, i) => (
                <div key={entry.name}>
                    <EntryBlock entry={entry} index={i} />
                    {i < entries.length - 1 && <ChainConnector />}
                </div>
            ))}
        </section>
    );
}

/* ─────────────────────────────────────────────── */
/*  Single entry block                             */
/* ─────────────────────────────────────────────── */

interface EntryBlockProps {
    entry: ExperienceEntry;
    index: number;
}

function EntryBlock({ entry, index }: EntryBlockProps) {
    const [expanded, setExpanded] = useState(false);
    const [hovered, setHovered] = useState(false);

    const isActive = !!entry.current;
    const opacity = OPACITY_LEVELS[Math.min(index, OPACITY_LEVELS.length - 1)];

    const name = (entry.name ?? 'UNKNOWN').toUpperCase();
    const role = (entry.title ?? 'UNKNOWN').toUpperCase().replace(/\s+/g, '_');
    const dateRange = (entry.dateRange ?? entry.timestamp).toUpperCase();

    const highlights = entry.highlights ?? [];
    const shown = expanded ? highlights : highlights.slice(0, PREVIEW_COUNT);
    const remaining = highlights.length - PREVIEW_COUNT;

    return (
        <div
            className="transition-opacity duration-300"
            style={{ opacity: hovered ? 1 : opacity }}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            {/* Date range header */}
            <div
                className="mb-0.5 text-[12px] tracking-widest uppercase"
                style={{ color: 'var(--fg-dim)' }}
            >
                [ {dateRange} ]
            </div>

            <BoxTop />

            {/* Title row: NAME | ROLE  [ACTIVE] */}
            <BoxRow>
                <div className="flex items-center gap-2 py-0.5 flex-wrap">
                    <span
                        className="font-bold uppercase tracking-wider"
                        style={{ color: isActive ? 'var(--fg)' : 'var(--fg-dim)' }}
                    >
                        {name}
                    </span>
                    <span style={{ color: BOX_CLR }}>|</span>
                    <span
                        className="uppercase tracking-wider"
                        style={{ color: isActive ? 'var(--fg)' : 'var(--fg-dim)' }}
                    >
                        {role}
                    </span>
                    {isActive && (
                        <span
                            className="text-[11px] tracking-widest ml-auto"
                            style={{ color: 'var(--warn)' }}
                        >
                            [ACTIVE]
                        </span>
                    )}
                </div>
            </BoxRow>

            <BoxMid />

            {/* Highlight rows */}
            {shown.map((h, j) => (
                <BoxRow key={j}>
                    <div
                        className="py-px text-[12px] leading-snug"
                        style={{ color: 'var(--fg-dim)' }}
                    >
                        <span className="mr-1.5" aria-hidden>•</span>
                        {h}
                    </div>
                </BoxRow>
            ))}

            {/* Research URL */}
            {entry.researchUrl && (
                <BoxRow>
                    <div className="py-px text-[12px]">
                        <span style={{ color: 'var(--fg-dim)' }}>REF: </span>
                        <a
                            href={entry.researchUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="underline"
                            style={{ color: 'var(--info)' }}
                            onClick={e => e.stopPropagation()}
                        >
                            EXTERNAL_LINK ↗
                        </a>
                    </div>
                </BoxRow>
            )}

            {/* Expand / collapse toggle */}
            {highlights.length > PREVIEW_COUNT && (
                <BoxRow>
                    <div className="py-px">
                        <button
                            onClick={() => setExpanded(v => !v)}
                            className="text-[12px] uppercase tracking-widest cursor-pointer hover:underline"
                            style={{ background: 'none', border: 'none', padding: 0, color: 'var(--fg-dim)' }}
                            aria-expanded={expanded}
                        >
                            {expanded ? '[-] COLLAPSE' : `[+] ${remaining} MORE...`}
                        </button>
                    </div>
                </BoxRow>
            )}

            <BoxBot />
        </div>
    );
}
