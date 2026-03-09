import type { Skill } from '../types';

const TOTAL = 30;

export function SkillBar({ skill }: { skill: Skill }) {
    const filled = Math.round((skill.level / 100) * TOTAL);
    const empty = TOTAL - filled;

    return (
        <div className="flex items-center gap-3 text-[13px] font-mono">
            <span style={{ flexShrink: 0 }}>
                <span style={{ color: 'var(--fg-dim)' }}>[</span>
                <span className="hash-filled">{'#'.repeat(filled)}</span>
                <span className="hash-empty">{'-'.repeat(empty)}</span>
                <span style={{ color: 'var(--fg-dim)' }}>]</span>
            </span>
            <span className="uppercase tracking-widest" style={{ color: 'var(--fg)' }}>
                {skill.name}
            </span>
            <span className="ml-auto flex-shrink-0" style={{ color: 'var(--fg-dim)' }}>
                {skill.level}%
            </span>
        </div>
    );
}
