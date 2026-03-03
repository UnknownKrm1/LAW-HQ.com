import { useScrollReveal } from '../hooks/useScrollReveal';

export default function AboutUs() {
  const { ref: headingRef, isVisible: headingVisible } = useScrollReveal({ threshold: 0.2 });
  const { ref: contentRef, isVisible: contentVisible } = useScrollReveal({ threshold: 0.15 });

  return (
    <section
      id="about"
      className="relative py-24 md:py-32 overflow-hidden"
      style={{ background: 'oklch(0.08 0 0)' }}
    >
      {/* Background geometric grid */}
      <div className="absolute inset-0 geometric-bg opacity-20" />

      {/* Red accent glow top-right */}
      <div
        className="absolute top-0 right-0 w-96 h-96 pointer-events-none"
        style={{
          background: 'radial-gradient(circle at top right, oklch(0.55 0.22 25 / 0.08), transparent 70%)',
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Label */}
        <div
          ref={headingRef}
          className={`mb-12 transition-all duration-700 ${headingVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <span
            className="font-ui text-xs tracking-[0.4em] uppercase text-[oklch(0.62_0.24_25)] mb-3 block"
            style={{ letterSpacing: '0.4em' }}
          >
            Who We Are
          </span>
          <h2
            className="font-display font-black text-[clamp(2.5rem,6vw,4.5rem)] section-heading-accent"
            style={{ color: 'oklch(0.96 0 0)' }}
          >
            About <span style={{ color: 'oklch(0.62 0.24 25)' }}>Us</span>
          </h2>
        </div>

        {/* Content */}
        <div
          ref={contentRef}
          className={`grid md:grid-cols-2 gap-12 items-center transition-all duration-700 ${contentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          style={{ transitionDelay: '0.15s' }}
        >
          {/* Text Block */}
          <div className="space-y-6">
            <div
              className="red-line-left"
              style={{ borderLeft: '4px solid oklch(0.62 0.24 25)', paddingLeft: '1.5rem' }}
            >
              <p
                className="font-body text-lg md:text-xl leading-relaxed"
                style={{ color: 'oklch(0.80 0 0)' }}
              >
                LAW HQ is an official esports clan built on loyalty, ambition, and winning mentality. We focus on developing talented players, creating opportunities, and building a respected name in the esports scene. We are an upcoming clan with big goals and strong leadership guiding us to success.
              </p>
            </div>

            {/* Stats row */}
            <div className="grid grid-cols-3 gap-4 mt-8">
              {[
                { value: '350+', label: 'Members' },
                { value: '2', label: 'Leaders' },
                { value: '∞', label: 'Ambition' },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="card-dark p-4 text-center rounded-sm border border-[oklch(0.20_0_0)] hover:border-[oklch(0.55_0.22_25/0.5)] transition-all duration-300"
                >
                  <div
                    className="font-display font-black text-3xl text-glow-red-sm"
                    style={{ color: 'oklch(0.62 0.24 25)' }}
                  >
                    {stat.value}
                  </div>
                  <div
                    className="font-ui text-xs tracking-widest uppercase mt-1"
                    style={{ color: 'oklch(0.50 0 0)', letterSpacing: '0.2em' }}
                  >
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Visual Block */}
          <div className="relative">
            <div
              className="relative p-8 rounded-sm overflow-hidden"
              style={{
                background: 'oklch(0.11 0 0)',
                border: '1px solid oklch(0.55 0.22 25 / 0.3)',
                boxShadow: '0 0 30px oklch(0.55 0.22 25 / 0.1)',
              }}
            >
              {/* Corner accents */}
              <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-[oklch(0.62_0.24_25)]" />
              <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-[oklch(0.62_0.24_25)]" />
              <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-[oklch(0.62_0.24_25)]" />
              <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-[oklch(0.62_0.24_25)]" />

              <div className="text-center py-4">
                <div
                  className="font-display font-black text-6xl md:text-7xl text-glow-red animate-glow-pulse mb-4"
                  style={{ color: 'oklch(0.62 0.24 25)' }}
                >
                  LAW
                </div>
                <div
                  className="font-ui text-sm tracking-[0.5em] uppercase"
                  style={{ color: 'oklch(0.50 0 0)', letterSpacing: '0.5em' }}
                >
                  Headquarters
                </div>
                <div
                  className="mt-6 h-px"
                  style={{ background: 'linear-gradient(to right, transparent, oklch(0.55 0.22 25 / 0.5), transparent)' }}
                />
                <div className="mt-6 space-y-2">
                  {['Loyalty', 'Ambition', 'Winning'].map((value, i) => (
                    <div
                      key={value}
                      className="flex items-center justify-center gap-3"
                      style={{ animationDelay: `${i * 0.1}s` }}
                    >
                      <div className="w-1.5 h-1.5 rotate-45 bg-[oklch(0.62_0.24_25)]" />
                      <span
                        className="font-display font-semibold text-lg tracking-widest uppercase"
                        style={{ color: 'oklch(0.72 0 0)', letterSpacing: '0.2em' }}
                      >
                        {value}
                      </span>
                      <div className="w-1.5 h-1.5 rotate-45 bg-[oklch(0.62_0.24_25)]" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
