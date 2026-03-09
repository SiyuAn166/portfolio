import type { Skill } from '../types';

function getStatus(level: number): string {
    if (level >= 90) return '[OPTIMAL]';
    if (level >= 80) return '[ACTIVE]';
    if (level >= 70) return '[LOADED]';
    if (level >= 60) return '[STABLE]';
    return '[STANDBY]';
}

function getVersion(level: number): string {
    return `v${Math.floor(level / 10)}.${level % 10}`;
}

function hexId(i: number): string {
    return `0x${(i + 1).toString(16).toUpperCase().padStart(2, '0')}`;
}

interface CapabilitiesSectionProps {
    skills: Skill[];
}

export function CapabilitiesSection({ skills }: CapabilitiesSectionProps) {
    return (
        <section>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-2xl">
                {skills.map((skill, i) => (
                    <div
                        key={skill.name}
                        className="relative border border-[var(--fg)] bg-[var(--bg)] text-[var(--fg)] p-2 min-h-[60px] flex flex-col justify-between hover:bg-[var(--fg)] hover:text-[var(--bg)] transition-colors cursor-crosshair"
                    >
                        {/* Hex ID badge — explicit colors so they don't invert with parent hover */}
                        <span
                            className="absolute -top-2 -left-1 px-1 text-[10px] border border-[var(--fg)] bg-[var(--bg)] text-[var(--fg)]"
                            aria-hidden="true"
                        >
                            {hexId(i)}
                        </span>
                        <span className="font-black text-xs uppercase pt-1 tracking-tighter">
                            {skill.name}
                        </span>
                        <div className="flex justify-between items-end mt-2 text-[10px] opacity-70">
                            <span>{getVersion(skill.level)}</span>
                            <span>{getStatus(skill.level)}</span>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
