import { useEffect, useState } from 'react';
import { AsciiNoise } from './components/AsciiNoise';
import { BootSequence } from './components/BootSequence';
import { CapabilitiesSection } from './components/CapabilitiesSection';
import { ExperienceSection } from './components/ExperienceSection';
import { Footer } from './components/Footer';
import { HeroSection } from './components/HeroSection';
import { ProjectsSection } from './components/ProjectsSection';
import { RevealSection } from './components/RevealSection';
import { ScanlineOverlay } from './components/ScanlineOverlay';
import { ThemeToggle } from './components/ThemeToggle';
import { usePortfolioData } from './hooks/usePortfolioData';
import { useTheme } from './hooks/useTheme';
import './index.css';

function App() {
  const { theme, toggleTheme } = useTheme();
  const { data, loading, error } = usePortfolioData();
  const [bootDone, setBootDone] = useState(false);
  const [currentTime, setCurrentTime] = useState<string>('');

  // Update time every second
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const year = now.getFullYear();
      const month = String(now.getMonth() + 1).padStart(2, '0');
      const day = String(now.getDate()).padStart(2, '0');
      const hours = String(now.getHours()).padStart(2, '0');
      const minutes = String(now.getMinutes()).padStart(2, '0');
      const seconds = String(now.getSeconds()).padStart(2, '0');
      setCurrentTime(`${hours}:${minutes}:${seconds} ${day}/${month}/${year}`);
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative overflow-x-hidden" data-theme={theme}>
      {/* Fixed layers */}
      <AsciiNoise />
      <ScanlineOverlay />
      <ThemeToggle theme={theme} onToggle={toggleTheme} />

      {/* Main terminal body */}
      <main className="relative z-10 min-h-screen font-mono px-4 md:px-12 py-4 md:py-12">

        {/* ── Header ── */}
        {/* pr-20 reserves space for the fixed ThemeToggle so they never overlap */}
        <header className="mb-12 border-b border-dim pb-4 flex justify-between items-end flex-wrap gap-4 pr-20">
          <div className="space-y-1">
            <div className="text-[10px] text-mid uppercase tracking-widest">
              System_Status: Operational
            </div>
            <div className="text-xs font-bold text-accent">
              {data?.meta.systemTag ?? 'TERMINAL [TTY1]'}
            </div>
          </div>
          <div className="text-right text-[10px] text-mid uppercase leading-relaxed">
            {data ? (
              <>
                SYSTEM_CLOCK: {currentTime || data.meta.time}<br />
                {data.meta.session}
              </>
            ) : (
              <>SYSTEM_CLOCK: --<br />SESSION: --</>
            )}
          </div>
        </header>

        {/* ── Loading / error states ── */}
        {loading && (
          <section className="mb-16 space-y-1 text-[10px] md:text-xs" style={{ opacity: 0.5 }}>
            <p className="text-accent animate-pulse">[ .... ] Fetching portfolio data...</p>
          </section>
        )}

        {error && (
          <section className="mb-16 text-[10px] md:text-xs" style={{ opacity: 0.7 }}>
            <p className="text-red-500">[ ERR ] Failed to load portfolio data: {error}</p>
            <p className="text-mid mt-1">
              Check <code>src/config.ts</code> and make sure your Gist URL is correct.
            </p>
          </section>
        )}

        {/* ── Data-driven content ── */}
        {data && (
          <>
            <BootSequence
              messages={data.meta.bootMessages}
              onComplete={() => setBootDone(true)}
            />

            {bootDone && (
              <>
                <RevealSection>
                  <HeroSection identity={data.identity} />
                </RevealSection>

                <RevealSection>
                  <ExperienceSection entries={data.experience} />
                </RevealSection>

                <RevealSection>
                  <ProjectsSection projects={data.projects} />
                </RevealSection>

                <RevealSection>
                  <CapabilitiesSection skills={data.skills} />
                </RevealSection>

                <Footer meta={data.meta} />
              </>
            )}
          </>
        )}
      </main>
    </div>
  );
}

export default App;
