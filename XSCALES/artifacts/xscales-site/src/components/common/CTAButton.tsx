import { Link } from 'wouter';

interface CTAButtonProps {
  href?: string;
  onClick?: () => void;
  variant?: 'primary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  className?: string;
  'data-testid'?: string;
  external?: boolean;
}

const variantStyles: Record<string, React.CSSProperties> = {
  primary: {
    background: '#FFC500',
    color: '#050816',
    border: 'none',
    boxShadow: '0 0 28px rgba(255,197,0,0.20)',
  },
  outline: {
    background: 'transparent',
    color: '#FFC500',
    border: '1px solid rgba(255,197,0,0.40)',
  },
  ghost: {
    background: 'transparent',
    color: 'rgba(248,250,252,0.70)',
    border: 'none',
  },
};

const sizeStyles: Record<string, React.CSSProperties> = {
  sm: { padding: '8px 16px', fontSize: '13px' },
  md: { padding: '12px 24px', fontSize: '14px' },
  lg: { padding: '14px 32px', fontSize: '15px' },
};

export default function CTAButton({
  href,
  onClick,
  variant = 'primary',
  size = 'md',
  children,
  className = '',
  'data-testid': testId,
  external = false,
}: CTAButtonProps) {
  const baseStyle: React.CSSProperties = {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '8px',
    borderRadius: '8px',
    fontWeight: 600,
    fontFamily: 'inherit',
    cursor: 'pointer',
    transition: 'all 0.2s ease',
    textDecoration: 'none',
    whiteSpace: 'nowrap',
    ...variantStyles[variant],
    ...sizeStyles[size],
  };

  const handleMouseEnter = (e: React.MouseEvent<HTMLElement>) => {
    const el = e.currentTarget as HTMLElement;
    if (variant === 'primary') {
      el.style.background = '#FFC500';
      el.style.transform = 'translateY(-1px)';
    } else if (variant === 'outline') {
      el.style.borderColor = '#FFC500';
      el.style.background = 'rgba(255,197,0,0.06)';
    } else {
      el.style.color = 'rgba(248,250,252,0.90)';
    }
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLElement>) => {
    const el = e.currentTarget as HTMLElement;
    if (variant === 'primary') {
      el.style.background = '#FFC500';
      el.style.transform = '';
    } else if (variant === 'outline') {
      el.style.borderColor = 'rgba(255,197,0,0.40)';
      el.style.background = 'transparent';
    } else {
      el.style.color = 'rgba(248,250,252,0.70)';
    }
  };

  if (href) {
    if (external) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          style={baseStyle}
          className={className}
          data-testid={testId}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {children}
        </a>
      );
    }
    return (
      <Link
        href={href}
        style={baseStyle}
        className={className}
        data-testid={testId}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      onClick={onClick}
      style={baseStyle}
      className={className}
      data-testid={testId}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </button>
  );
}
