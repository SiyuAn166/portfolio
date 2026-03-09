import { useState } from 'react';
import type { ExperienceEntry, Identity } from '../types';

interface IdentitySectionProps {
    identity: Identity;
    experience: ExperienceEntry[];
}

export function IdentitySection({ identity, experience }: IdentitySectionProps) {
    const [expanded, setExpanded] = useState(false);
    const currentRole = experience.find(e => e.current)?.title ?? 'Software Engineer';
    const bioPreview = identity.tagline.length > 120
        ? identity.tagline.slice(0, 120) + '...'
        : identity.tagline;

    return (
        <section>
            <div className="text-[13px] font-mono space-y-1 mb-6">
                <InfoRow label="IDENTITY" value={identity.title} bright />
                <InfoRow label="RANK" value={currentRole} />
                <InfoRow label="STATUS" value="OPEN_TO_OPPORTUNITIES" warn />
                <InfoRow label="LOCATION" value="Vancouver, BC, Canada" />

                {/* Bio with expand/collapse */}
                <div className="flex gap-2 overflow-hidden">
                    <span
                        className="flex-shrink-0 w-24 uppercase tracking-wider"
                        style={{ color: 'var(--fg-dim)', opacity: 0.55 }}
                    >
                        [BIO]
                    </span>
                    <div className="flex-1">
                        <p style={{ color: 'var(--fg-dim)', wordBreak: 'break-word', whiteSpace: 'normal' }}>
                            {expanded ? identity.tagline : bioPreview}
                        </p>
                        {identity.tagline.length > 120 && (
                            <button
                                onClick={() => setExpanded(!expanded)}
                                style={{
                                    background: 'none',
                                    border: 'none',
                                    color: 'var(--fg-dim)',
                                    cursor: 'pointer',
                                    fontSize: '10px',
                                    marginTop: '0.25rem',
                                    textDecoration: 'underline',
                                    padding: 0,
                                }}
                                aria-label={expanded ? 'Collapse bio' : 'Expand bio'}
                            >
                                [{expanded ? 'collapse' : 'expand'}]
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}

function InfoRow({
    label,
    value,
    bright,
    warn,
    faint,
}: {
    label: string;
    value: string;
    bright?: boolean;
    warn?: boolean;
    faint?: boolean;
}) {
    const color = bright
        ? 'var(--fg)'
        : warn
            ? 'var(--warn)'
            : faint
                ? 'var(--fg-dim)'
                : 'var(--fg-dim)';
    return (
        <div className="flex gap-2 overflow-hidden">
            <span
                className="flex-shrink-0 w-24 uppercase tracking-wider"
                style={{ color: 'var(--fg-dim)', opacity: 0.55 }}
            >
                [{label}]
            </span>
            <span style={{ color, wordBreak: 'break-word', whiteSpace: 'normal' }}>{value}</span>
        </div>
    );
}
