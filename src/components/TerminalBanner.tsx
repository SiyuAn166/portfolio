
interface TerminalBannerProps {
    bannerTitle: string;
    bannerSystem: string;
    lastLogin: string;
    userIP: string;
}

export function TerminalBanner({ bannerTitle, bannerSystem, lastLogin, userIP }: TerminalBannerProps) {
    const ASCII_ART = `${bannerTitle} (${bannerSystem})
Last login: ${lastLogin} from ${userIP}`;

    return (
        <pre
            className="hero-banner"
            style={{
                color: 'var(--fg)',
                fontSize: 'clamp(6px, 1.15vw, 12px)',
                lineHeight: 1.2,
                overflowX: 'auto',
                overflowY: 'hidden',
                userSelect: 'none',
            }}
        >
            {ASCII_ART}
        </pre>
    );
}
