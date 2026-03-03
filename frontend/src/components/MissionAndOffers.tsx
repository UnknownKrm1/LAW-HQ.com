import { useScrollReveal } from '../hooks/useScrollReveal';
import { Trophy, Users, Star, TrendingUp, MessageSquare, CheckCircle2 } from 'lucide-react';

const offerings = [
  {
    icon: <Trophy size={24} />,
    title: 'Competitive Tournament Participation',
    description: 'Represent LAW HQ in official tournaments and scrimmages at every level.',
  },
  {
    icon: <Users size={24} />,
    title: 'Skilled and Dedicated Teammates',
    description: 'Train and compete alongside passionate players who share your drive to win.',
  },
  {
    icon: <Star size={24} />,
    title: 'Professional Leadership',
    description: 'Guided by experienced leadership committed to your growth and success.',
  },
  {
    icon: <TrendingUp size={24} />,
    title: 'Structured Growth Opportunities',
    description: 'Clear pathways to improve your skills, rank, and standing within the clan.',
  },
  {
    icon: <MessageSquare size={24} />,
    title: 'Positive and Active Community',
    description: 'A supportive environment where every member is valued and encouraged.',
  },
];

export default function MissionAndOffers() {
  const { ref: missionHeadingRef, isVisible: missionHeadingVisible } = useScrollReveal({ threshold: 0.2 });
  const { ref: missionContentRef, isVisible: missionContentVisible } = useScrollReveal({ threshold: 0.15 });
  const { ref: offersHeadingRef, isVisible: offersHeadingVisible } = useScrollReveal({ threshold: 0.15 });
  const { ref: offersGridRef, isVisible: offersGridVisible } = useScrollReveal({ threshold: 0.1 });

  return (
    <section
      id="mission"
      className="relative py-24 md:py-32 overflow-hidden"
      style={{ background: 'oklch(0.08 0 0)' }}
    >
      {/* Background */}
      <div className="absolute inset-0 geometric-bg opacity-20" />
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] pointer-events-none"
        style={{
          background: 'radial-gradient(circle, oklch(0.55 0.22 25 / 0.04), transparent 70%)',
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Our Mission */}
        <div className="mb-24">
          <div
            ref={missionHeadingRef}
            className={`mb-10 transition-all duration-700 ${missionHeadingVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            <span
              className="font-ui text-xs tracking-[0.4em] uppercase text-[oklch(0.62_0.24_25)] mb-3 block"
              style={{ letterSpacing: '0.4em' }}
            >
              Our Purpose
            </span>
            <h2
              className="font-display font-black text-[clamp(2.5rem,6vw,4.5rem)] section-heading-accent"
              style={{ color: 'oklch(0.96 0 0)' }}
            >
              Our <span style={{ color: 'oklch(0.62 0.24 25)' }}>Mission</span>
            </h2>
          </div>

          <div
            ref={missionContentRef}
            className={`transition-all duration-700 ${missionContentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            style={{ transitionDelay: '0.15s' }}
          >
            <div
              className="relative p-8 md:p-10 rounded-sm overflow-hidden max-w-4xl"
              style={{
                background: 'oklch(0.11 0 0)',
                border: '1px solid oklch(0.55 0.22 25 / 0.25)',
              }}
            >
              {/* Red left border accent */}
              <div
                className="absolute left-0 top-0 bottom-0 w-1"
                style={{ background: 'linear-gradient(to bottom, oklch(0.62 0.24 25), oklch(0.42 0.18 25))' }}
              />

              {/* Quote mark */}
              <div
                className="font-display font-black text-8xl leading-none mb-2 -mt-4"
                style={{ color: 'oklch(0.55 0.22 25 / 0.2)' }}
              >
                "
              </div>

              <p
                className="font-body text-lg md:text-xl leading-relaxed"
                style={{ color: 'oklch(0.78 0 0)' }}
              >
                To recruit upcoming talented players, compete at the highest level, build a strong esports brand, and create a supportive but competitive environment.
              </p>

              <div
                className="mt-6 flex items-center gap-3"
              >
                <div className="w-8 h-px bg-[oklch(0.62_0.24_25)]" />
                <span
                  className="font-ui text-xs tracking-widest uppercase"
                  style={{ color: 'oklch(0.62 0.24 25)', letterSpacing: '0.2em' }}
                >
                  LAW HQ Leadership
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* What We Offer */}
        <div>
          <div
            ref={offersHeadingRef}
            className={`mb-12 transition-all duration-700 ${offersHeadingVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            <span
              className="font-ui text-xs tracking-[0.4em] uppercase text-[oklch(0.62_0.24_25)] mb-3 block"
              style={{ letterSpacing: '0.4em' }}
            >
              Benefits
            </span>
            <h2
              className="font-display font-black text-[clamp(2.5rem,6vw,4.5rem)] section-heading-accent"
              style={{ color: 'oklch(0.96 0 0)' }}
            >
              What We <span style={{ color: 'oklch(0.62 0.24 25)' }}>Offer</span>
            </h2>
          </div>

          <div
            ref={offersGridRef}
            className={`grid sm:grid-cols-2 lg:grid-cols-3 gap-5 transition-all duration-700 ${offersGridVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            style={{ transitionDelay: '0.1s' }}
          >
            {offerings.map((offer, i) => (
              <div
                key={offer.title}
                className="group relative p-6 rounded-sm overflow-hidden"
                style={{
                  background: 'oklch(0.11 0 0)',
                  border: '1px solid oklch(0.20 0 0)',
                  transition: 'all 0.3s ease',
                  transitionDelay: `${i * 0.05}s`,
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLDivElement).style.borderColor = 'oklch(0.55 0.22 25 / 0.5)';
                  (e.currentTarget as HTMLDivElement).style.boxShadow = '0 0 20px oklch(0.55 0.22 25 / 0.1)';
                  (e.currentTarget as HTMLDivElement).style.transform = 'translateY(-3px)';
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLDivElement).style.borderColor = 'oklch(0.20 0 0)';
                  (e.currentTarget as HTMLDivElement).style.boxShadow = 'none';
                  (e.currentTarget as HTMLDivElement).style.transform = 'translateY(0)';
                }}
              >
                {/* Top red line on hover */}
                <div
                  className="absolute top-0 left-0 right-0 h-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: 'linear-gradient(to right, oklch(0.62 0.24 25), transparent)' }}
                />

                {/* Icon */}
                <div
                  className="w-12 h-12 rounded-sm flex items-center justify-center mb-4"
                  style={{
                    background: 'oklch(0.55 0.22 25 / 0.1)',
                    border: '1px solid oklch(0.55 0.22 25 / 0.3)',
                    color: 'oklch(0.62 0.24 25)',
                  }}
                >
                  {offer.icon}
                </div>

                {/* Check mark */}
                <div className="flex items-start gap-3 mb-3">
                  <CheckCircle2
                    size={16}
                    className="flex-shrink-0 mt-0.5"
                    style={{ color: 'oklch(0.62 0.24 25)' }}
                  />
                  <h3
                    className="font-display font-bold text-base leading-tight"
                    style={{ color: 'oklch(0.92 0 0)' }}
                  >
                    {offer.title}
                  </h3>
                </div>

                <p
                  className="font-body text-sm leading-relaxed pl-7"
                  style={{ color: 'oklch(0.55 0 0)' }}
                >
                  {offer.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
