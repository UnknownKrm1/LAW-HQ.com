import { useScrollReveal } from '../hooks/useScrollReveal';
import { Shield, Crown } from 'lucide-react';

interface Leader {
  tag: string;
  title: string;
  role: string;
  description: string;
  icon: React.ReactNode;
  accentLabel: string;
}

const leaders: Leader[] = [
  {
    tag: 'LAW EnergeT1cc',
    title: 'Founder',
    role: 'Founder of LAW HQ',
    description:
      'The visionary behind the clan, responsible for building the foundation and leading the organization toward competitive success.',
    icon: <Crown size={32} />,
    accentLabel: 'Founder',
  },
  {
    tag: 'LAW KrmFv!',
    title: 'Presidential Board',
    role: 'Presidential Board',
    description:
      'Oversees clan operations, strategic growth, recruitment decisions, and ensures LAW HQ maintains professionalism and excellence.',
    icon: <Shield size={32} />,
    accentLabel: 'President',
  },
];

export default function LeadershipTeam() {
  const { ref: headingRef, isVisible: headingVisible } = useScrollReveal({ threshold: 0.2 });
  const { ref: card1Ref, isVisible: card1Visible } = useScrollReveal({ threshold: 0.15 });
  const { ref: card2Ref, isVisible: card2Visible } = useScrollReveal({ threshold: 0.15 });

  const cardRefs = [card1Ref, card2Ref];
  const cardVisible = [card1Visible, card2Visible];

  return (
    <section
      id="leadership"
      className="relative py-24 md:py-32 overflow-hidden"
      style={{ background: 'oklch(0.10 0 0)' }}
    >
      {/* Background accent */}
      <div
        className="absolute inset-0 geometric-bg opacity-15"
      />
      <div
        className="absolute bottom-0 left-0 w-96 h-96 pointer-events-none"
        style={{
          background: 'radial-gradient(circle at bottom left, oklch(0.55 0.22 25 / 0.07), transparent 70%)',
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div
          ref={headingRef}
          className={`mb-16 text-center transition-all duration-700 ${headingVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <span
            className="font-ui text-xs tracking-[0.4em] uppercase text-[oklch(0.62_0.24_25)] mb-3 block"
            style={{ letterSpacing: '0.4em' }}
          >
            The Command
          </span>
          <h2
            className="font-display font-black text-[clamp(2.5rem,6vw,4.5rem)] inline-block section-heading-accent"
            style={{ color: 'oklch(0.96 0 0)' }}
          >
            Leadership <span style={{ color: 'oklch(0.62 0.24 25)' }}>Team</span>
          </h2>
          <p
            className="font-body mt-6 max-w-xl mx-auto text-base"
            style={{ color: 'oklch(0.55 0 0)' }}
          >
            The minds and force behind LAW HQ — guiding the clan with vision, discipline, and competitive drive.
          </p>
        </div>

        {/* Leader Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {leaders.map((leader, i) => (
            <div
              key={leader.tag}
              ref={cardRefs[i]}
              className={`transition-all duration-700 ${cardVisible[i] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${i * 0.15}s` }}
            >
              <div
                className="relative p-8 rounded-sm overflow-hidden group cursor-default"
                style={{
                  background: 'oklch(0.11 0 0)',
                  border: '1px solid oklch(0.55 0.22 25 / 0.35)',
                  transition: 'all 0.3s ease',
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLDivElement).style.borderColor = 'oklch(0.62 0.24 25 / 0.7)';
                  (e.currentTarget as HTMLDivElement).style.boxShadow = '0 0 30px oklch(0.55 0.22 25 / 0.2)';
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLDivElement).style.borderColor = 'oklch(0.55 0.22 25 / 0.35)';
                  (e.currentTarget as HTMLDivElement).style.boxShadow = 'none';
                }}
              >
                {/* Corner accents */}
                <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-[oklch(0.62_0.24_25)]" />
                <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-[oklch(0.62_0.24_25)]" />

                {/* Role badge */}
                <div className="absolute top-4 right-4">
                  <span
                    className="font-ui text-xs tracking-widest uppercase px-3 py-1 rounded-sm"
                    style={{
                      background: 'oklch(0.55 0.22 25 / 0.15)',
                      color: 'oklch(0.62 0.24 25)',
                      border: '1px solid oklch(0.55 0.22 25 / 0.3)',
                      letterSpacing: '0.15em',
                    }}
                  >
                    {leader.accentLabel}
                  </span>
                </div>

                {/* Avatar */}
                <div className="flex items-start gap-5 mb-6">
                  <div
                    className="flex-shrink-0 w-16 h-16 rounded-sm flex items-center justify-center"
                    style={{
                      background: 'oklch(0.55 0.22 25 / 0.12)',
                      border: '2px solid oklch(0.55 0.22 25 / 0.4)',
                      color: 'oklch(0.62 0.24 25)',
                    }}
                  >
                    {leader.icon}
                  </div>
                  <div className="pt-1">
                    <h3
                      className="font-display font-black text-xl md:text-2xl leading-tight"
                      style={{ color: 'oklch(0.96 0 0)' }}
                    >
                      {leader.tag}
                    </h3>
                    <p
                      className="font-ui text-sm tracking-widest uppercase mt-1"
                      style={{ color: 'oklch(0.62 0.24 25)', letterSpacing: '0.15em' }}
                    >
                      {leader.role}
                    </p>
                  </div>
                </div>

                {/* Divider */}
                <div
                  className="h-px mb-5"
                  style={{ background: 'linear-gradient(to right, oklch(0.55 0.22 25 / 0.4), transparent)' }}
                />

                {/* Description */}
                <p
                  className="font-body text-sm md:text-base leading-relaxed"
                  style={{ color: 'oklch(0.65 0 0)' }}
                >
                  {leader.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
