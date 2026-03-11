import type { Project } from '../types';

interface ProjectCardProps {
    project: Project;
}

const STATUS_COLORS: Record<string, string> = {
    ACTIVE: 'var(--ok)',
    STABLE: 'var(--info)',
    BETA: 'var(--warn)',
    ARCHIVED: 'var(--fg-dim)',
    WIP: 'var(--warn)',
};

export function ProjectCard({ project }: ProjectCardProps) {
    const statusColor = STATUS_COLORS[project.status] ?? 'var(--fg-dim)';

    const handleClick = () => {
        if (project.url) window.open(project.url, '_blank', 'noopener,noreferrer');
    };

    return (
        <div
            className="project-card p-3"
            onClick={project.url ? handleClick : undefined}
            style={{ cursor: project.url ? 'pointer' : 'default' }}
            role={project.url ? 'link' : undefined}
            tabIndex={project.url ? 0 : undefined}
            onKeyDown={e => {
                if (project.url && (e.key === 'Enter' || e.key === ' ')) handleClick();
            }}
        >
            {/* Header */}
            <div className="flex items-baseline justify-between gap-2 mb-2">
                <div className="flex items-baseline gap-2 min-w-0 overflow-hidden">
                    <span
                        className="text-[11px] font-bold uppercase tracking-widest flex-shrink-0"
                        style={{ color: statusColor }}
                    >
                        [{project.status}]
                    </span>
                    <span
                        className="font-bold text-[14px] uppercase tracking-tight truncate"
                        style={{ color: 'var(--fg)' }}
                    >
                        {project.name}
                    </span>
                    <span className="text-[11px] flex-shrink-0" style={{ color: 'var(--fg-dim)' }}>
                        {project.version}
                    </span>
                </div>
                {project.url && (
                    <span className="text-[13px] flex-shrink-0" style={{ color: 'var(--fg-dim)' }}>↗</span>
                )}
            </div>

            {/* Description */}
            <p
                className="text-[13px] leading-relaxed mb-3"
                style={{
                    color: 'var(--fg-dim)',
                    display: '-webkit-box',
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: 'vertical',
                    overflow: 'hidden',
                }}
            >
                {project.description}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-1 text-[11px] font-bold uppercase">
                {project.tags.map(tag => (
                    <span
                        key={tag}
                        className="px-1.5 py-0.5"
                        style={{
                            border: '1px solid var(--border-hi)',
                            color: 'var(--fg-dim)',
                        }}
                    >
                        #{tag}
                    </span>
                ))}
                {project.license && (
                    <span
                        className="px-1.5 py-0.5 italic"
                        style={{ border: '1px solid var(--border)', color: 'var(--fg-dim)' }}
                    >
                        {project.license}
                    </span>
                )}
            </div>
        </div>
    );
}
