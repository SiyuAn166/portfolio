import { useEffect, useRef } from 'react';
import type { Skill } from '../types';

interface SkillBarProps {
    skill: Skill;
    /** Delay before the bar animates in (ms, default 0) */
    delay?: number;
    animate?: boolean;
}

export function SkillBar({ skill, delay = 0, animate = false }: SkillBarProps) {
    const fillRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!animate) return;
        const el = fillRef.current;
        if (!el) return;

        const timer = setTimeout(() => {
            el.classList.add('animate');
        }, delay);
        return () => clearTimeout(timer);
    }, [animate, delay]);

    return (
        <div className="space-y-1">
            <div className="flex justify-between text-[10px] uppercase font-bold tracking-widest text-bright">
                <span>{skill.name}</span>
                <span>{skill.level}%</span>
            </div>
            <div
                className="h-2 flex border"
                style={{
                    backgroundColor: 'var(--border-05)',
                    borderColor: 'var(--border-10)',
                }}
            >
                <div
                    ref={fillRef}
                    className="progress-bar-fill"
                    style={{ '--target-width': `${skill.level}%` } as React.CSSProperties}
                />
            </div>
        </div>
    );
}
