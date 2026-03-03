import { useScrollReveal } from '../hooks/useScrollReveal';
import { ArrowRight, Crosshair } from 'lucide-react';

export default function JoinClan() {
  const { ref: headingRef, isVisible: headingVisible } = useScrollReveal({ threshold: 0.2 });
  const { ref: contentRef, isVisible: contentVisible } = useScrollReveal({ threshold: 0.15 });

  return (
    <section
      id="join"
      className="relative py-24 md:py-36 overflow-hidden"
      style={{ background: 'oklch(0.10 0 0)' }}
    >
      {/* Aggressive background treatment */}
      <div className="absolute inset-0 geometric-bg opacity-25" />

      {/* Red glow center */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at center, oklch(0.55 0.22 25 / 0.12) 0%, transparent 65%)',
        }}
      />

      {/* Diagonal red accent lines */}
      <div
        className="absolute top-0 left-0 right-0 h-1"
        style={{
          background: 'linear-gradient(to right, transparent, oklch(0.62 0.24 25 / 0.8), transparent)',
        }}
      />
      <div
        className="absolute bottom-0 left-0 right-0 h-1"
        style={{
          background: 'linear-gradient(to right, transparent, oklch(0.62 0.24 25 / 0.8), transparent)',
        }}
      />

      {/* Corner decorations */}
      <div className="absolute top-8 left-8 w-16 h-16 border-t-2 border-l-2 border-[oklch(0.55_0.22_25/0.4)]" />
      <div className="absolute top-8 right-8 w-16 h-16 border-t-2 border-r-2 border-[oklch(0.55_0.22_25/0.4)]" />
      <div className="absolute bottom-8 left-8 w-16 h-16 border-b-2 border-l-2 border-[oklch(0.55_0.22_25/0.4)]" />
      <div className="absolute bottom-8 right-8 w-16 h-16 border-b-2 border-r-2 border-[oklch(0.55_0.22_25/0.4)]" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Icon */}
        <div
          className={`flex justify-center mb-8 transition-all duration-700 ${headingVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-75'}`}
        >
          <div
            className="w-20 h-20 rounded-sm flex items-center justify-center animate-glow-pulse"
            style={{
              background: 'oklch(0.55 0.22 25 / 0.1)',
              border: '2px solid oklch(0.55 0.22 25 / 0.5)',
              color: 'oklch(0.62 0.24 25)',
            }}
          >
            <Crosshair size={36} />
          </div>
        </div>

        {/* Heading */}
        <div
          ref={headingRef}
          className={`transition-all duration-700 ${headingVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <span
            className="font-ui text-xs tracking-[0.4em] uppercase text-[oklch(0.62_0.24_25)] mb-3 block"
            style={{ letterSpacing: '0.4em' }}
          >
            Recruitment Open
          </span>
          <h2
            className="font-display font-black text-[clamp(2.8rem,7vw,5.5rem)] leading-none"
            style={{ color: 'oklch(0.96 0 0)' }}
          >
            We Are{' '}
            <span
              className="text-glow-red"
              style={{ color: 'oklch(0.62 0.24 25)' }}
            >
              Recruiting
            </span>
          </h2>
        </div>

        {/* Content */}
        <div
          ref={contentRef}
          className={`mt-8 transition-all duration-700 ${contentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          style={{ transitionDelay: '0.2s' }}
        >
          <p
            className="font-body text-lg md:text-xl leading-relaxed max-w-2xl mx-auto mb-10"
            style={{ color: 'oklch(0.68 0 0)' }}
          >
            We are currently recruiting upcoming skilled players who are passionate about esports and ready to improve, compete, and represent LAW HQ with pride.
          </p>

          {/* Requirements chips */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {['Passionate', 'Dedicated', 'Competitive', 'Team Player', 'Growth Mindset'].map((req) => (
              <span
                key={req}
                className="font-ui text-xs tracking-widest uppercase px-4 py-2 rounded-sm"
                style={{
                  background: 'oklch(0.55 0.22 25 / 0.08)',
                  border: '1px solid oklch(0.55 0.22 25 / 0.25)',
                  color: 'oklch(0.72 0 0)',
                  letterSpacing: '0.15em',
                }}
              >
                {req}
              </span>
            ))}
          </div>

          {/* CTA Button */}
          <a
            href="https://discord.gg/WRadjbztnW"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-red inline-flex items-center gap-3 px-12 py-5 text-lg rounded-sm font-display font-bold tracking-widest uppercase"
          >
            Apply Now
            <ArrowRight size={20} />
          </a>

          <p
            className="font-body text-sm mt-5"
            style={{ color: 'oklch(0.40 0 0)' }}
          >
            Applications are reviewed via Discord
          </p>
        </div>
      </div>
    </section>
  );
}
