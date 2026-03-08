export interface Meta {
    /** Short system tag shown in the header, e.g. "DEBIAN_VIRTUAL_TERMINAL [TTY1]" */
    systemTag: string;
    /** Current system time string, auto-updating every second. Format: YYYY-MM-DD HH:MM:SS */
    time: string;
    /** Active session identifier */
    session: string;
    /** Lines shown during the animated boot sequence */
    bootMessages: string[];
    /** Copyright line shown in the footer, e.g. "© 2026 ARCHITECT_TTY_SESSION" */
    copyright: string;
    /** Location + crypto shown in footer, e.g. "Loc: 49.28° N, 123.12° W // Enc: AES-256-GCM" */
    location: string;
}

export interface Identity {
    /** Large hero title, e.g. "Principal_Systems_Engineer" */
    title: string;
    /** Tagline paragraph shown beneath the hero title */
    tagline: string;
}

export interface ExperienceEntry {
    /** Unix-style permission string, e.g. "drwxr-xr-x" */
    permissions: string;
    /** Owner column value, e.g. "admin" */
    owner: string;
    /** File size string, e.g. "2048B" */
    size: string;
    /** Timestamp string, e.g. "MAR 2024" */
    timestamp: string;
    /** Entry name / path, e.g. "/LEAD_ARCHITECT_LAB_01" */
    name: string;
    /** If true, this row is highlighted as the current/active role */
    current?: boolean;
    /** Optional URL to open when clicking the entry name */
    url?: string;
    /** Optional research publication URL (e.g., DOI link) */
    researchUrl?: string;
    /** Actual job title, e.g. "Lead Software Architect" */
    title?: string;
    /** Company or organization display name */
    company?: string;
    /** Human-readable date range, e.g. "MAR 2024 – Present" */
    dateRange?: string;
    /** Bullet-point achievements / responsibilities shown in the expanded panel */
    highlights?: string[];
}

export interface Project {
    /** Project system name, e.g. "ONYX_PROTOCOL" */
    name: string;
    /** Semantic version string, e.g. "v2.1.0" */
    version: string;
    /** Short status label shown in the ASCII header box, e.g. "ACTIVE" */
    status: string;
    /** One-to-two sentence description of the project */
    description: string;
    /** Tech/lang badges shown below the description, e.g. ["Rust_Lang", "WebRTC"] */
    tags: string[];
    /** License identifier, e.g. "MIT_License" — renders as an italic badge */
    license?: string;
    /** Optional link opened when user clicks the card header */
    url?: string;
}

export interface Skill {
    /** Display name of the skill, e.g. "Rust_Core" */
    name: string;
    /** Proficiency level 0–100 */
    level: number;
}

export interface PortfolioData {
    meta: Meta;
    identity: Identity;
    experience: ExperienceEntry[];
    projects: Project[];
    skills: Skill[];
}
