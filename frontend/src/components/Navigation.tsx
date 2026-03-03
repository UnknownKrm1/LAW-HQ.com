import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Leadership', href: '#leadership' },
  { label: 'Mission', href: '#mission' },
  { label: 'Join', href: '#join' },
  { label: 'Discord', href: '#discord' },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-[oklch(0.08_0_0/0.97)] border-b border-[oklch(0.55_0.22_25/0.3)] shadow-[0_4px_30px_oklch(0_0_0/0.5)]'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <button
            onClick={() => handleNavClick('#home')}
            className="flex items-center gap-3 group"
          >
            <img
              src="/assets/generated/law-hq-logo.dim_400x400.png"
              alt="LAW HQ"
              className="h-10 w-10 object-contain"
            />
            <span
              className="font-display text-2xl font-black tracking-widest text-[oklch(0.96_0_0)] group-hover:text-[oklch(0.62_0.24_25)] transition-colors duration-300"
              style={{ letterSpacing: '0.15em' }}
            >
              LAW <span className="text-[oklch(0.62_0.24_25)]">HQ</span>
            </span>
          </button>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="font-ui font-600 text-sm tracking-widest uppercase px-4 py-2 text-[oklch(0.72_0_0)] hover:text-[oklch(0.62_0.24_25)] transition-all duration-300 relative group"
              >
                {link.label}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-[oklch(0.62_0.24_25)] group-hover:w-full transition-all duration-300" />
              </button>
            ))}
            <a
              href="https://discord.gg/WRadjbztnW"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-red ml-4 px-5 py-2 text-sm rounded-sm font-display font-bold tracking-widest uppercase"
            >
              Join Discord
            </a>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden text-[oklch(0.72_0_0)] hover:text-[oklch(0.62_0.24_25)] transition-colors p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-400 overflow-hidden ${
          mobileOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        }`}
        style={{
          background: 'oklch(0.08 0 0 / 0.98)',
          borderBottom: mobileOpen ? '1px solid oklch(0.55 0.22 25 / 0.3)' : 'none',
        }}
      >
        <div className="px-4 py-4 flex flex-col gap-1">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNavClick(link.href)}
              className="font-ui font-600 text-base tracking-widest uppercase py-3 px-4 text-[oklch(0.72_0_0)] hover:text-[oklch(0.62_0.24_25)] hover:bg-[oklch(0.55_0.22_25/0.08)] transition-all duration-200 text-left border-b border-[oklch(0.20_0_0)]"
            >
              {link.label}
            </button>
          ))}
          <a
            href="https://discord.gg/WRadjbztnW"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-red mt-3 px-5 py-3 text-sm rounded-sm font-display font-bold tracking-widest uppercase text-center"
          >
            Join Discord
          </a>
        </div>
      </div>
    </nav>
  );
}
