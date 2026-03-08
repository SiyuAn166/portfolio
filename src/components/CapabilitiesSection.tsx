import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import type { Skill } from '../types';
import { CommandLine } from './CommandLine';
import { SkillBar } from './SkillBar';

interface CapabilitiesSectionProps {
    skills: Skill[];
}

export function CapabilitiesSection({ skills }: CapabilitiesSectionProps) {
    const [ref, isVisible] = useIntersectionObserver<HTMLDivElement>({ threshold: 0.2 });

    return (
        <section className="mb-32">
            <CommandLine command="stat ./capabilities.bin" />
            <div ref={ref} className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl">
                {skills.map((skill, i) => (
                    <SkillBar
                        key={skill.name}
                        skill={skill}
                        delay={i * 120}
                        animate={isVisible}
                    />
                ))}
            </div>
        </section>
    );
}
