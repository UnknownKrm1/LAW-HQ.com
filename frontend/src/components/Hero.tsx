import { useEffect, useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function Hero() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const scrollToJoin = () => {
    const el = document.querySelector('#join');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToAbout = () => {
    const el = document.querySelector('#about');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/assets/generated/hero-bg.dim_1920x1080.png')`,
        }}
      />

      {/* Dark Overlay */}
      <div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(
            135deg,
            oklch(0.06 0 0 / 0.92) 0%,
            oklch(0.08 0 0 / 0.85) 40%,
            oklch(0.42 0.18 25 / 0.15) 70%,
            oklch(0.06 0 0 / 0.95) 100%
          )`,
        }}
      />

      {/* Geometric Grid Overlay */}
      <div
        className="absolute inset-0 geometric-bg opacity-30"
      />

      {/* Red accent line top */}
      <div
        className="absolute top-0 left-0 right-0 h-1"
        style={{
          background: 'linear-gradient(to right, transparent, oklch(0.62 0.24 25), oklch(0.55 0.22 25), transparent)',
        }}
      />

      {/* Diagonal accent shape */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
        style={{
          background: 'linear-gradient(to bottom right, transparent 49%, oklch(0.08 0 0) 50%)',
        }}
      />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        {/* Tag line above */}
        <div
          className={`transition-all duration-700 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          style={{ transitionDelay: '0.1s' }}
        >
          <span
            className="font-ui text-sm tracking-[0.4em] uppercase text-[oklch(0.62_0.24_25)] border border-[oklch(0.55_0.22_25/0.4)] px-4 py-1.5 inline-block mb-6"
            style={{ letterSpacing: '0.4em' }}
          >
            Official Esports Clan
          </span>
        </div>

        {/* Main Title */}
        <div
          className={`transition-all duration-700 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          style={{ transitionDelay: '0.25s' }}
        >
          <h1
            className="font-display font-black text-[clamp(5rem,18vw,14rem)] leading-none tracking-widest text-glow-red animate-glow-pulse"
            style={{
              color: 'oklch(0.96 0 0)',
              letterSpacing: '0.08em',
            }}
          >
            LAW{' '}
            <span style={{ color: 'oklch(0.62 0.24 25)' }}>HQ</span>
          </h1>
        </div>

        {/* Tagline */}
        <div
          className={`transition-all duration-700 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          style={{ transitionDelay: '0.4s' }}
        >
          <p
            className="font-display text-[clamp(1.2rem,4vw,2.2rem)] font-semibold tracking-[0.3em] uppercase mt-2 mb-2"
            style={{
              color: 'oklch(0.72 0 0)',
              letterSpacing: '0.3em',
            }}
          >
            Loyalty.{' '}
            <span style={{ color: 'oklch(0.62 0.24 25)' }}>Ambition.</span>{' '}
            Winning.
          </p>
        </div>

        {/* Divider */}
        <div
          className={`flex items-center justify-center gap-4 my-8 transition-all duration-700 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          style={{ transitionDelay: '0.5s' }}
        >
          <div className="h-px w-16 bg-gradient-to-r from-transparent to-[oklch(0.55_0.22_25)]" />
          <div className="w-2 h-2 rotate-45 bg-[oklch(0.62_0.24_25)]" />
          <div className="h-px w-16 bg-gradient-to-l from-transparent to-[oklch(0.55_0.22_25)]" />
        </div>

        {/* Description */}
        <div
          className={`transition-all duration-700 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          style={{ transitionDelay: '0.55s' }}
        >
          <p
            className="font-body text-base md:text-lg max-w-xl mx-auto mb-10"
            style={{ color: 'oklch(0.60 0 0)' }}
          >
            An upcoming esports organization built on discipline, teamwork, and the relentless pursuit of competitive excellence.
          </p>
        </div>

        {/* CTA Buttons */}
        <div
          className={`flex flex-col sm:flex-row gap-4 justify-center transition-all duration-700 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          style={{ transitionDelay: '0.65s' }}
        >
          <button
            onClick={scrollToJoin}
            className="btn-red px-10 py-4 text-base rounded-sm font-display font-bold tracking-widest uppercase"
          >
            Join the Clan
          </button>
          <button
            onClick={scrollToAbout}
            className="btn-outline-red px-10 py-4 text-base rounded-sm font-display font-bold tracking-widest uppercase"
          >
            Learn More
          </button>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={scrollToAbout}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-[oklch(0.50_0_0)] hover:text-[oklch(0.62_0.24_25)] transition-colors duration-300 animate-float"
        aria-label="Scroll down"
      >
        <span className="font-ui text-xs tracking-widest uppercase" style={{ letterSpacing: '0.3em' }}>Scroll</span>
        <ChevronDown size={20} />
      </button>
    </section>
  );
}
