interface SectionDividerProps {
  variant?: 'diagonal' | 'chevron' | 'slash';
  flip?: boolean;
  className?: string;
}

export default function SectionDivider({ variant = 'diagonal', flip = false, className = '' }: SectionDividerProps) {
  const getClipPath = () => {
    if (variant === 'diagonal') {
      return flip ? 'polygon(0 0, 100% 15%, 100% 100%, 0 100%)' : 'polygon(0 0, 100% 0, 100% 85%, 0 100%)';
    }
    if (variant === 'chevron') {
      return flip ? 'polygon(0 0, 100% 0, 100% 100%, 50% 80%, 0 100%)' : 'polygon(0 0, 100% 0, 100% 80%, 50% 100%, 0 80%)';
    }
    if (variant === 'slash') {
      return flip ? 'polygon(0 0, 100% 20%, 100% 100%, 0 100%)' : 'polygon(0 0, 100% 0, 100% 100%, 0 80%)';
    }
    return '';
  };

  return (
    <div
      className={`relative h-16 md:h-24 w-full overflow-hidden ${className}`}
      aria-hidden="true"
    >
      <div
        className="absolute inset-0"
        style={{
          background: 'oklch(0.08 0 0)',
          clipPath: getClipPath(),
        }}
      />
      {/* Red accent line */}
      <div
        className="absolute left-0 right-0"
        style={{
          top: flip ? '0' : 'auto',
          bottom: flip ? 'auto' : '0',
          height: '2px',
          background: 'linear-gradient(to right, transparent, oklch(0.55 0.22 25 / 0.6), transparent)',
        }}
      />
    </div>
  );
}
