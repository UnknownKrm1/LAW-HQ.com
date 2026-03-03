import { useScrollReveal } from '../hooks/useScrollReveal';
import { SiDiscord, SiX, SiYoutube, SiInstagram, SiTiktok } from 'react-icons/si';
import { Users, Swords, Shield, ExternalLink } from 'lucide-react';

const roles = [
  {
    icon: <Users size={20} />,
    name: 'Members',
    description: 'General community members who are part of the LAW HQ family. Access to community chats, events, and announcements.',
    color: 'oklch(0.62 0.24 25)',
  },
  {
    icon: <Swords size={20} />,
    name: 'Competitive Team',
    description: 'Active roster players representing LAW HQ in tournaments and scrimmages. The elite core of the clan.',
    color: 'oklch(0.62 0.24 25)',
  },
  {
    icon: <Shield size={20} />,
    name: 'Staff',
    description: 'Clan leadership and moderators who manage operations, enforce rules, and guide the community.',
    color: 'oklch(0.62 0.24 25)',
  },
];

const socialLinks = [
  { icon: <SiX size={18} />, label: 'Twitter / X', href: '#' },
  { icon: <SiYoutube size={18} />, label: 'YouTube', href: '#' },
  { icon: <SiInstagram size={18} />, label: 'Instagram', href: '#' },
  { icon: <SiTiktok size={18} />, label: 'TikTok', href: '#' },
];

export default function Discord() {
  const { ref: headingRef, isVisible: headingVisible } = useScrollReveal({ threshold: 0.2 });
  const { ref: mainCardRef, isVisible: mainCardVisible } = useScrollReveal({ threshold: 0.1 });
  const { ref: rolesRef, isVisible: rolesVisible } = useScrollReveal({ threshold: 0.1 });

  return (
    <section
      id="discord"
      className="relative py-24 md:py-32 overflow-hidden"
      style={{ background: 'oklch(0.08 0 0)' }}
    >
      {/* Background */}
      <div className="absolute inset-0 geometric-bg opacity-20" />
      <div
        className="absolute top-0 right-0 w-[500px] h-[500px] pointer-events-none"
        style={{
          background: 'radial-gradient(circle at top right, oklch(0.55 0.22 25 / 0.06), transparent 70%)',
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
            Community Hub
          </span>
          <h2
            className="font-display font-black text-[clamp(2.5rem,6vw,4.5rem)] inline-block section-heading-accent"
            style={{ color: 'oklch(0.96 0 0)' }}
          >
            Join Our <span style={{ color: 'oklch(0.62 0.24 25)' }}>Discord</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 items-start">
          {/* Left: Main Discord Card */}
          <div
            ref={mainCardRef}
            className={`transition-all duration-700 ${mainCardVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}
          >
            <div
              className="relative p-8 md:p-10 rounded-sm overflow-hidden"
              style={{
                background: 'oklch(0.11 0 0)',
                border: '1px solid oklch(0.55 0.22 25 / 0.35)',
              }}
            >
              {/* Corner accents */}
              <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-[oklch(0.62_0.24_25)]" />
              <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-[oklch(0.62_0.24_25)]" />

              {/* Discord Icon + Member Count */}
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-4">
                  <div
                    className="w-14 h-14 rounded-sm flex items-center justify-center"
                    style={{
                      background: 'oklch(0.55 0.22 25 / 0.1)',
                      border: '1px solid oklch(0.55 0.22 25 / 0.3)',
                      color: 'oklch(0.62 0.24 25)',
                    }}
                  >
                    <SiDiscord size={28} />
                  </div>
                  <div>
                    <div
                      className="font-display font-black text-xl"
                      style={{ color: 'oklch(0.96 0 0)' }}
                    >
                      LAW HQ
                    </div>
                    <div
                      className="font-ui text-xs tracking-widest uppercase"
                      style={{ color: 'oklch(0.55 0 0)', letterSpacing: '0.15em' }}
                    >
                      Official Server
                    </div>
                  </div>
                </div>

                {/* Member Count Badge */}
                <div
                  className="flex items-center gap-2 px-4 py-2 rounded-sm animate-border-pulse"
                  style={{
                    background: 'oklch(0.55 0.22 25 / 0.1)',
                    border: '1px solid oklch(0.55 0.22 25 / 0.4)',
                  }}
                >
                  <div
                    className="w-2 h-2 rounded-full animate-pulse"
                    style={{ background: 'oklch(0.62 0.24 25)' }}
                  />
                  <span
                    className="font-display font-bold text-sm"
                    style={{ color: 'oklch(0.62 0.24 25)' }}
                  >
                    350+ Members
                  </span>
                </div>
              </div>

              {/* Description */}
              <p
                className="font-body text-base leading-relaxed mb-8"
                style={{ color: 'oklch(0.65 0 0)' }}
              >
                Stay connected with our active community — join chats, scrims, announcements, and tryouts all in one place.
              </p>

              {/* Features list */}
              <div className="space-y-3 mb-8">
                {[
                  'Active community chats & voice channels',
                  'Scrim scheduling & tournament announcements',
                  'Tryout notifications & recruitment updates',
                  'Exclusive member roles & perks',
                ].map((feature) => (
                  <div key={feature} className="flex items-center gap-3">
                    <div
                      className="w-1.5 h-1.5 rotate-45 flex-shrink-0"
                      style={{ background: 'oklch(0.62 0.24 25)' }}
                    />
                    <span
                      className="font-body text-sm"
                      style={{ color: 'oklch(0.65 0 0)' }}
                    >
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              {/* Join Button */}
              <a
                href="https://discord.gg/WRadjbztnW"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-red w-full flex items-center justify-center gap-3 py-4 text-base rounded-sm font-display font-bold tracking-widest uppercase"
              >
                <SiDiscord size={20} />
                Join Our Discord
                <ExternalLink size={16} />
              </a>

              {/* Social Links */}
              <div className="mt-8 pt-6" style={{ borderTop: '1px solid oklch(0.20 0 0)' }}>
                <p
                  className="font-ui text-xs tracking-widest uppercase mb-4 text-center"
                  style={{ color: 'oklch(0.40 0 0)', letterSpacing: '0.2em' }}
                >
                  Follow Us
                </p>
                <div className="flex justify-center gap-4">
                  {socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      aria-label={social.label}
                      className="w-10 h-10 rounded-sm flex items-center justify-center transition-all duration-300"
                      style={{
                        background: 'oklch(0.15 0 0)',
                        border: '1px solid oklch(0.22 0 0)',
                        color: 'oklch(0.55 0 0)',
                      }}
                      onMouseEnter={(e) => {
                        (e.currentTarget as HTMLAnchorElement).style.borderColor = 'oklch(0.55 0.22 25 / 0.5)';
                        (e.currentTarget as HTMLAnchorElement).style.color = 'oklch(0.62 0.24 25)';
                        (e.currentTarget as HTMLAnchorElement).style.background = 'oklch(0.55 0.22 25 / 0.1)';
                      }}
                      onMouseLeave={(e) => {
                        (e.currentTarget as HTMLAnchorElement).style.borderColor = 'oklch(0.22 0 0)';
                        (e.currentTarget as HTMLAnchorElement).style.color = 'oklch(0.55 0 0)';
                        (e.currentTarget as HTMLAnchorElement).style.background = 'oklch(0.15 0 0)';
                      }}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right: Roles */}
          <div
            ref={rolesRef}
            className={`transition-all duration-700 ${rolesVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}
            style={{ transitionDelay: '0.15s' }}
          >
            <div className="mb-6">
              <h3
                className="font-display font-black text-2xl md:text-3xl mb-2"
                style={{ color: 'oklch(0.96 0 0)' }}
              >
                Roles <span style={{ color: 'oklch(0.62 0.24 25)' }}>System</span>
              </h3>
              <p
                className="font-body text-sm"
                style={{ color: 'oklch(0.50 0 0)' }}
              >
                Every member earns their place. Here's how our hierarchy works:
              </p>
            </div>

            <div className="space-y-4">
              {roles.map((role, i) => (
                <div
                  key={role.name}
                  className="relative p-6 rounded-sm overflow-hidden group"
                  style={{
                    background: 'oklch(0.11 0 0)',
                    border: '1px solid oklch(0.20 0 0)',
                    transition: 'all 0.3s ease',
                    transitionDelay: `${i * 0.1}s`,
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLDivElement).style.borderColor = 'oklch(0.55 0.22 25 / 0.5)';
                    (e.currentTarget as HTMLDivElement).style.transform = 'translateX(4px)';
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLDivElement).style.borderColor = 'oklch(0.20 0 0)';
                    (e.currentTarget as HTMLDivElement).style.transform = 'translateX(0)';
                  }}
                >
                  {/* Left accent */}
                  <div
                    className="absolute left-0 top-0 bottom-0 w-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ background: 'linear-gradient(to bottom, oklch(0.62 0.24 25), oklch(0.42 0.18 25))' }}
                  />

                  <div className="flex items-start gap-4">
                    <div
                      className="flex-shrink-0 w-10 h-10 rounded-sm flex items-center justify-center"
                      style={{
                        background: 'oklch(0.55 0.22 25 / 0.1)',
                        border: '1px solid oklch(0.55 0.22 25 / 0.3)',
                        color: 'oklch(0.62 0.24 25)',
                      }}
                    >
                      {role.icon}
                    </div>
                    <div>
                      <h4
                        className="font-display font-bold text-lg mb-1"
                        style={{ color: 'oklch(0.92 0 0)' }}
                      >
                        {role.name}
                      </h4>
                      <p
                        className="font-body text-sm leading-relaxed"
                        style={{ color: 'oklch(0.55 0 0)' }}
                      >
                        {role.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Invite link display */}
            <div
              className="mt-6 p-4 rounded-sm flex items-center justify-between"
              style={{
                background: 'oklch(0.11 0 0)',
                border: '1px solid oklch(0.55 0.22 25 / 0.2)',
              }}
            >
              <span
                className="font-ui text-sm tracking-wide"
                style={{ color: 'oklch(0.55 0 0)' }}
              >
                discord.gg/WRadjbztnW
              </span>
              <a
                href="https://discord.gg/WRadjbztnW"
                target="_blank"
                rel="noopener noreferrer"
                className="font-ui text-xs tracking-widest uppercase px-4 py-2 rounded-sm transition-all duration-300"
                style={{
                  background: 'oklch(0.55 0.22 25 / 0.15)',
                  border: '1px solid oklch(0.55 0.22 25 / 0.4)',
                  color: 'oklch(0.62 0.24 25)',
                  letterSpacing: '0.15em',
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.background = 'oklch(0.55 0.22 25 / 0.25)';
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.background = 'oklch(0.55 0.22 25 / 0.15)';
                }}
              >
                Join
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
