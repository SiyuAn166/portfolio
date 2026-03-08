import type { Project } from '../types';
import { CommandLine } from './CommandLine';
import { ProjectCard } from './ProjectCard';

interface ProjectsSectionProps {
    projects: Project[];
}

export function ProjectsSection({ projects }: ProjectsSectionProps) {
    return (
        <section className="mb-20">
            <CommandLine command="./view_projects --featured" />
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
                {projects.map(project => (
                    <ProjectCard key={project.name} project={project} />
                ))}
            </div>
        </section>
    );
}
