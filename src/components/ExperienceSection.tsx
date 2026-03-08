import { useState } from 'react';
import type { ExperienceEntry } from '../types';
import { CommandLine } from './CommandLine';

interface ExperienceSectionProps {
    entries: ExperienceEntry[];
}

export function ExperienceSection({ entries }: ExperienceSectionProps) {
    // First entry expanded by default
    const [expanded, setExpanded] = useState<number | null>(0);

    const toggle = (i: number) => setExpanded(prev => (prev === i ? null : i));

    return (
        <section className="mb-20">
            <CommandLine command="ls -la /vol/experience" />

            <div className="space-y-px">
                {entries.map((entry, i) => {
                    const isExpanded = expanded === i;
                    const hasDetails = (entry.highlights?.length ?? 0) > 0;

                    return (
                        <div key={i}>
                            {/* ── Summary row ── */}
                            <button
                                onClick={() => toggle(i)}
                                className="w-full text-left flex items-center gap-3 py-2 px-2 transition-colors hover:bg-[var(--border-05)] font-mono text-[10px] md:text-[11px]"
                                style={{ opacity: entry.current ? 1 : 0.6 }}
                                aria-expanded={isExpanded}
                            >
                                {/* permissions */}
                                <span className="tracking-tighter hidden sm:block flex-shrink-0 w-[8.5rem]" style={{ color: 'var(--text-mid)' }}>
                                    {entry.permissions}
                                </span>
                                {/* owner */}
                                <span className="hidden md:block flex-shrink-0 w-10" style={{ color: 'var(--text-mid)' }}>
                                    {entry.owner}
                                </span>
                                {/* date */}
                                <span className="flex-shrink-0 w-[5.5rem]" style={{ color: 'var(--text-mid)' }}>
                                    {entry.timestamp}
                                </span>
                                {/* name — main label */}
                                <span
                                    className="flex-1 font-bold uppercase tracking-tight"
                                    style={{ color: entry.current ? 'var(--accent)' : 'var(--text-strong)' }}
                                >
                                    {entry.name}
                                </span>
                                {/* title pill — show when collapsed */}
                                {entry.title && !isExpanded && (
                                    <span className="hidden lg:block text-[9px] italic flex-shrink-0" style={{ color: 'var(--text-mid)' }}>
                                        {entry.title}
                                    </span>
                                )}
                                {/* expand chevron */}
                                {hasDetails && (
                                    <span
                                        className="flex-shrink-0 text-[10px] transition-transform duration-200 text-accent"
                                        style={{ transform: isExpanded ? 'rotate(90deg)' : 'rotate(0deg)' }}
                                    >
                                        ▶
                                    </span>
                                )}
                            </button>

                            {/* ── Expanded detail panel ── */}
                            {isExpanded && hasDetails && (
                                <div
                                    className="ml-2 mb-4 border-l-2 pl-4 pt-2 pb-3"
                                    style={{ borderColor: 'var(--border-20)' }}
                                >
                                    {/* cat command echo */}
                                    <div className="text-[9px] uppercase tracking-widest mb-3" style={{ color: 'var(--text-mid)' }}>
                                        $ cat {entry.name}
                                    </div>

                                    {/* metadata block */}
                                    <div className="text-[11px] space-y-0.5 mb-4 font-mono">
                                        {entry.title && (
                                            <div className="flex gap-2">
                                                <span className="flex-shrink-0 w-20" style={{ color: 'var(--text-mid)' }}>title:</span>
                                                <span className="font-bold text-bright">{entry.title}</span>
                                            </div>
                                        )}
                                        {entry.company && (
                                            <div className="flex gap-2">
                                                <span className="flex-shrink-0 w-20" style={{ color: 'var(--text-mid)' }}>company:</span>
                                                <span style={{ color: 'var(--text-strong)' }}>{entry.company}</span>
                                            </div>
                                        )}
                                        {entry.dateRange && (
                                            <div className="flex gap-2">
                                                <span className="flex-shrink-0 w-20" style={{ color: 'var(--text-mid)' }}>period:</span>
                                                <span className="text-accent">{entry.dateRange}</span>
                                            </div>
                                        )}
                                    </div>

                                    {/* divider */}
                                    <div className="mb-3" style={{ borderTop: '1px solid var(--border-10)' }} />

                                    {/* highlights */}
                                    <div className="space-y-2">
                                        {entry.highlights?.map((h, j) => (
                                            <div key={j} className="flex items-start gap-2 text-[11px] leading-relaxed">
                                                <span className="text-accent flex-shrink-0 mt-0.5">›</span>
                                                <span style={{ color: 'var(--text-strong)', opacity: 0.85 }}>{h}</span>
                                            </div>
                                        ))}
                                    </div>

                                    {/* links section */}
                                    <div className="flex flex-wrap gap-4 mt-4">
                                        {/* research publication link */}
                                        {entry.researchUrl && (
                                            <a
                                                href={entry.researchUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center gap-1 text-[9px] uppercase tracking-widest text-accent hover:underline"
                                                onClick={e => e.stopPropagation()}
                                            >
                                                ↗ research_paper
                                            </a>
                                        )}
                                        {/* general reference/project link */}
                                        {entry.url && (
                                            <a
                                                href={entry.url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center gap-1 text-[9px] uppercase tracking-widest text-accent hover:underline"
                                                onClick={e => e.stopPropagation()}
                                            >
                                                ↗ view_reference
                                            </a>
                                        )}
                                    </div>
                                </div>
                            )}
                        </div>
                    );
                })}
            </div>
        </section>
    );
}
