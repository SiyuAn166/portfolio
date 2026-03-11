import { ASCII_ART } from '../config/ascii';
import type { ExperienceEntry, Identity, Meta } from '../types';

interface IdentitySectionProps {
    identity: Identity;
    experience: ExperienceEntry[];
    meta?: Meta;
}

export function IdentitySection({ identity, experience, meta }: IdentitySectionProps) {
    const currentRole = experience.find(e => e.current)?.title ?? 'Software Engineer';

    // Extract contact links from meta.commands
    const github = meta?.commands?.social?.replace('→', '').trim() ?? 'github.com/siyuan-an';
    const linkedin = meta?.commands?.contact?.replace('→', '').trim() ?? 'linkedin.com/in/siyu-an-bc';

    // neofetch-style: "siyu" @ "termfolio"
    const [namePart, hostPart] = identity.title.toLowerCase().replace(' ', '@termfolio').split('@') as [string, string];
    const separator = '─'.repeat(`${namePart}@${hostPart}`.length + 1);

    return (
        <section>
            <div className="flex flex-col md:flex-row gap-8 items-center md:items-stretch">

                {/* ── Left: ASCII mountain art ── */}
                <div className="w-full md:w-auto flex justify-center md:justify-start md:items-center flex-shrink-0">
                    <pre
                        aria-label="ASCII block letters"
                        style={{
                            color: 'var(--info)',
                            fontFamily: 'inherit',
                            fontSize: '13px',
                            lineHeight: '1.2',
                            userSelect: 'none',
                            margin: 0,
                        }}
                    >
                        {ASCII_ART}
                    </pre>
                </div>

                {/* ── Vertical divider — desktop only ── */}
                <div
                    className="hidden md:block w-px self-stretch"
                    style={{ background: 'var(--border)' }}
                />

                {/* ── Right: neofetch-style identity panel ── */}
                <div className="flex-1 min-w-0 font-mono text-[13px] flex flex-col justify-center gap-[2px]">

                    {/* user@host header */}
                    <div className="font-bold" style={{ fontSize: '15px' }}>
                        <span>{namePart}</span>
                        <span>@</span>
                        <span>termfolio</span>
                    </div>

                    {/* separator */}
                    <div style={{ fontSize: '13px', marginBottom: '4px' }}>
                        {separator}
                    </div>

                    {/* info rows */}
                    <NeoRow label="Role" value={currentRole} />
                    <NeoRow label="Status" value="OPEN_TO_OPPORTUNITIES" warn />
                    <NeoRow label="Location" value="Vancouver, BC, Canada" />
                    <NeoRow label="GitHub" value={github} link />
                    <NeoRow label="LinkedIn" value={linkedin} link />

                    {/* blank gap then bio */}
                    <div style={{ marginTop: '10px', paddingTop: '8px', borderTop: '1px solid var(--border)' }}>
                        <p style={{ lineHeight: '1.65', wordBreak: 'break-word' }}>
                            {identity.tagline}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

function NeoRow({ label, value, warn, link }: {
    label: string; value: string; warn?: boolean; link?: boolean;
}) {
    // neofetch style: "Label   : value" — label in cyan, colon dim, value in fg
    const padded = label.padEnd(8); // longest label "LinkedIn" = 8 chars
    return (
        <div className="flex" style={{ lineHeight: '1.7' }}>
            <span style={{ whiteSpace: 'pre', flexShrink: 0, fontWeight: 700 }}>
                {padded}
            </span>
            <span style={{ whiteSpace: 'pre' }}>{' : '}</span>
            {link ? (
                <a
                    href={`https://${value}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ wordBreak: 'break-all' }}
                >
                    {value} ↗
                </a>
            ) : (
                <span style={{ wordBreak: 'break-all' }}>{value}</span>
            )}
        </div>
    );
}
