import { useEffect, useState } from 'react';
import { CapabilitiesSection } from './components/CapabilitiesSection';
import { CommandReveal } from './components/CommandReveal';
import { ExperienceSection } from './components/ExperienceSection';
import { CopyrightBar, TerminalInput } from './components/Footer';
import { useHeroState } from './components/HeroSection';
import { IdentitySection } from './components/IdentitySection';
import { ProjectsSection } from './components/ProjectsSection';
import { TerminalBanner } from './components/TerminalBanner';
import { usePortfolioData } from './hooks/usePortfolioData';
import { useTheme } from './hooks/useTheme';
import './index.css';

function App() {
  const { theme, toggleTheme } = useTheme();
  const { data, error } = usePortfolioData();
  const [revealIndex, setRevealIndex] = useState(0);
  const [currentTime, setCurrentTime] = useState('');
  const { lastLogin, userIP } = useHeroState();

  // Generate random PID on component mount (simulates SSH session creation)
  const [pid] = useState(() => Math.floor(Math.random() * 3591) + 1000);

  useEffect(() => {
    const tick = () => {
      const now = new Date();
      const h = String(now.getHours()).padStart(2, '0');
      const m = String(now.getMinutes()).padStart(2, '0');
      const s = String(now.getSeconds()).padStart(2, '0');
      const dd = String(now.getDate()).padStart(2, '0');
      const mm = String(now.getMonth() + 1).padStart(2, '0');
      const yyyy = now.getFullYear();
      setCurrentTime(`${h}:${m}:${s} ${dd}/${mm}/${yyyy}`);
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    if (data) {
      console.log('data loaded successfully!');
    }
  }, [data]);

  useEffect(() => {
    if (error) {
      console.error('error loading data:', error);
    }
  }, [error]);

  return (
    <div style={{ background: 'var(--bg)', minHeight: '100vh', color: 'var(--fg)' }}>
      {/* CRT scanline overlay */}
      <div className="crt-overlay" aria-hidden="true" />

      {/* ── Sticky TTY Header ── */}
      <header
        className="sticky top-0 z-50 border-b flex justify-between items-center text-[12px] uppercase tracking-widest mx-auto"
        style={{
          background: 'var(--bg)',
          borderColor: 'var(--border)',
          width: '100%',
          padding: '12px 1rem',
          maxWidth: '80rem',
          boxSizing: 'border-box',
        }}
      >
        {/* Left: SSH info */}
        <div style={{ color: 'var(--fg)' }}>
          guest@termfolio [TTY1] // SSH_OPEN (PID: {pid})&nbsp;&nbsp;
          <span style={{ color: 'var(--fg-dim)' }}>
            {data?.meta.systemTag ?? 'PORTFOLIO KERNEL v6.0.2'}
          </span>
        </div>

        {/* Right: time + theme toggle */}
        <div className="flex items-center gap-4">
          <span style={{ color: 'var(--fg-dim)' }}>
            {currentTime || (data?.meta.time ?? '--')}
          </span>
          <button
            onClick={toggleTheme}
            className="hover:underline cursor-pointer uppercase tracking-widest"
            style={{
              background: 'none',
              color: 'var(--fg)',
              padding: '1px 6px',
              fontSize: '10px',
            }}
            aria-label="Toggle theme"
          >
            [ {theme === 'dark' ? 'LITE' : 'DARK'} ]
          </button>
        </div>
      </header>

      {/* ── Main Content ── */}
      {/* pb-10 leaves room above the fixed CopyrightBar */}
      <main className="mx-auto px-4 md:px-8 py-4 space-y-6 pb-10" style={{ width: '100%', maxWidth: '80rem', boxSizing: 'border-box' }}>

        {/* Data-driven content */}
        {data && (
          <>
            <TerminalBanner
              bannerTitle={data.meta.bannerTitle}
              bannerSystem={data.meta.bannerSystem}
              lastLogin={lastLogin}
              userIP={userIP}
            />
            <CommandReveal
              command={data.commandStrings?.identity ?? "$ whoami --verbose"}
              active={revealIndex >= 0}
              onComplete={() => setRevealIndex(1)}
            >
              <IdentitySection identity={data.identity} experience={data.experience} />
            </CommandReveal>
            <CommandReveal
              command={data.commandStrings?.experience ?? "$ ls -la /vol/experience"}
              active={revealIndex >= 1}
              onComplete={() => setRevealIndex(2)}
            >
              <ExperienceSection entries={data.experience} />
            </CommandReveal>
            <CommandReveal
              command={data.commandStrings?.projects ?? "$ ls -la /sys/projects"}
              active={revealIndex >= 2}
              onComplete={() => setRevealIndex(3)}
            >
              <ProjectsSection projects={data.projects} />
            </CommandReveal>
            <CommandReveal
              command={data.commandStrings?.skills ?? "$ stats --visualize --skills"}
              active={revealIndex >= 3}
              onComplete={() => setRevealIndex(4)}
            >
              <CapabilitiesSection skills={data.skills} />
            </CommandReveal>
            {revealIndex >= 4 && <TerminalInput meta={data.meta} />}
          </>
        )}
      </main>

      {data && <CopyrightBar meta={data.meta} />}
    </div>
  );
}

export default App;
