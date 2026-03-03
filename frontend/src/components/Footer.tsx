import { SiX, SiYoutube, SiInstagram, SiTiktok } from 'react-icons/si';
import { Heart } from 'lucide-react';

const socialLinks = [
  { icon: <SiX size={16} />, label: 'Twitter / X', href: '#' },
  { icon: <SiYoutube size={16} />, label: 'YouTube', href: '#' },
  { icon: <SiInstagram size={16} />, label: 'Instagram', href: '#' },
  { icon: <SiTiktok size={16} />, label: 'TikTok', href: '#' },
];

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Leadership', href: '#leadership' },
  { label: 'Mission', href: '#mission' },
  { label: 'Join', href: '#join' },
  { label: 'Discord', href: '#discord' },
];

export default function Footer() {
  const handleNavClick = (href: string) => {
    const target = document.querySelector(href);
    if (target) target.scrollIntoView({ behavior: 'smooth' });
  };

  const appId = encodeURIComponent(window.location.hostname || 'law-hq-esports');

  return (
    <footer
      className="relative overflow-hidden"
      style={{
        background: 'oklch(0.06 0 0)',
        borderTop: '1px solid oklch(0.55 0.22 25 / 0.3)',
      }}
    >
      {/* Top red accent line */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background: 'linear-gradient(to right, transparent, oklch(0.62 0.24 25 / 0.8), transparent)',
        }}
      />

      {/* Background grid */}
      <div className="absolute inset-0 geometric-bg opacity-10" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <img
                src="/assets/generated/law-hq-logo.dim_400x400.png"
                alt="LAW HQ"
                className="h-10 w-10 object-contain"
              />
              <span
                className="font-display font-black text-2xl tracking-widest"
                style={{ color: 'oklch(0.96 0 0)', letterSpacing: '0.15em' }}
              >
                LAW <span style={{ color: 'oklch(0.62 0.24 25)' }}>HQ</span>
              </span>
            </div>
            <p
              className="font-display font-semibold text-sm tracking-widest uppercase mb-6"
              style={{ color: 'oklch(0.62 0.24 25)', letterSpacing: '0.2em' }}
            >
              Loyalty. Ambition. Winning.
            </p>
            <p
              className="font-body text-sm leading-relaxed"
              style={{ color: 'oklch(0.45 0 0)' }}
            >
              An upcoming esports organization built on discipline, teamwork, and the relentless pursuit of competitive excellence.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4
              className="font-display font-bold text-sm tracking-widest uppercase mb-5"
              style={{ color: 'oklch(0.62 0.24 25)', letterSpacing: '0.2em' }}
            >
              Navigation
            </h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => handleNavClick(link.href)}
                    className="font-ui text-sm tracking-wide transition-colors duration-200 text-left"
                    style={{ color: 'oklch(0.50 0 0)' }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLButtonElement).style.color = 'oklch(0.62 0.24 25)';
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLButtonElement).style.color = 'oklch(0.50 0 0)';
                    }}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Community */}
          <div>
            <h4
              className="font-display font-bold text-sm tracking-widest uppercase mb-5"
              style={{ color: 'oklch(0.62 0.24 25)', letterSpacing: '0.2em' }}
            >
              Community
            </h4>
            <a
              href="https://discord.gg/WRadjbztnW"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-red inline-flex items-center gap-2 px-6 py-3 text-sm rounded-sm font-display font-bold tracking-widest uppercase mb-6"
            >
              Join Discord
            </a>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-9 h-9 rounded-sm flex items-center justify-center transition-all duration-300"
                  style={{
                    background: 'oklch(0.10 0 0)',
                    border: '1px solid oklch(0.20 0 0)',
                    color: 'oklch(0.45 0 0)',
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.borderColor = 'oklch(0.55 0.22 25 / 0.5)';
                    (e.currentTarget as HTMLAnchorElement).style.color = 'oklch(0.62 0.24 25)';
                    (e.currentTarget as HTMLAnchorElement).style.background = 'oklch(0.55 0.22 25 / 0.1)';
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.borderColor = 'oklch(0.20 0 0)';
                    (e.currentTarget as HTMLAnchorElement).style.color = 'oklch(0.45 0 0)';
                    (e.currentTarget as HTMLAnchorElement).style.background = 'oklch(0.10 0 0)';
                  }}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div
          className="h-px mb-8"
          style={{ background: 'linear-gradient(to right, transparent, oklch(0.55 0.22 25 / 0.3), transparent)' }}
        />

        {/* Bottom row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p
            className="font-ui text-xs tracking-wide"
            style={{ color: 'oklch(0.35 0 0)' }}
          >
            © {new Date().getFullYear()} LAW HQ. All rights reserved.
          </p>
          <p
            className="font-ui text-xs flex items-center gap-1.5"
            style={{ color: 'oklch(0.35 0 0)' }}
          >
            Built with{' '}
            <Heart
              size={12}
              className="inline"
              style={{ color: 'oklch(0.55 0.22 25)', fill: 'oklch(0.55 0.22 25)' }}
            />{' '}
            using{' '}
            <a
              href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${appId}`}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors duration-200"
              style={{ color: 'oklch(0.45 0 0)' }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.color = 'oklch(0.62 0.24 25)';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.color = 'oklch(0.45 0 0)';
              }}
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
