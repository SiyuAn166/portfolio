import type { Project } from '../types';

interface ProjectCardProps {
    project: Project;
}

const STATUS_COLORS: Record<string, string> = {
    ACTIVE: 'var(--accent)',
    STABLE: '#60A5FA',
    BETA: '#FBBF24',
    ARCHIVED: 'var(--text-mid)',
    WIP: '#F97316',
};

export function ProjectCard({ project }: ProjectCardProps) {
    const statusColor = STATUS_COLORS[project.status] ?? 'var(--text-mid)';

    const handleClick = () => {
        if (project.url) window.open(project.url, '_blank', 'noopener,noreferrer');
    };

    return (
        <div
            className="project-card p-4"
            onClick={project.url ? handleClick : undefined}
            style={{ cursor: project.url ? 'pointer' : 'default' }}
            role={project.url ? 'link' : undefined}
            tabIndex={project.url ? 0 : undefined}
            onKeyDown={e => {
                if (project.url && (e.key === 'Enter' || e.key === ' ')) handleClick();
            }}
        >
            {/* Single-line compact header */}
            <div className="flex items-baseline justify-between gap-2 mb-2.5">
                <div className="flex items-baseline gap-2 min-w-0 overflow-hidden">
                    <span
                        className="text-[9px] font-black uppercase tracking-widest flex-shrink-0"
                        style={{ color: statusColor }}
                    >
                        [{project.status}]
                    </span>
                    <span className="text-bright font-black text-[13px] uppercase tracking-tight truncate">
                        {project.name}
                    </span>
                    <span className="text-[9px] flex-shrink-0" style={{ color: 'var(--text-mid)' }}>
                        {project.version}
                    </span>
                </div>
                {project.url && (
                    <span className="text-accent text-[11px] flex-shrink-0 opacity-60">↗</span>
                )}
            </div>

            {/* Description — 2-line clamp */}
            <p
                className="text-[11px] leading-relaxed mb-3"
                style={{
                    opacity: 0.72,
                    display: '-webkit-box',
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: 'vertical',
                    overflow: 'hidden',
                }}
            >
                {project.description}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-1.5 text-[9px] font-black uppercase">
                {project.tags.map(tag => (
                    <span key={tag} className="bg-accent fg-accent px-1.5 py-0.5">
                        # {tag}
                    </span>
                ))}
                {project.license && (
                    <span className="border border-light px-1.5 py-0.5 italic" style={{ color: 'var(--text-mid)' }}>
                        {project.license}
                    </span>
                )}
            </div>
        </div>
    );
}
