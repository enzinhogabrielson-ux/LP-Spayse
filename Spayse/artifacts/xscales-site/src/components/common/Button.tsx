import { forwardRef } from 'react';
import { Link } from 'wouter';
import { cn } from '@/lib/utils';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'animated' | 'shinery';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  asChild?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', href, children, asChild, ...props }, ref) => {
    
    if (variant === 'animated') {
      const content = (
        <button ref={ref} className={cn("botao-cta", className)} {...props}>
          <div className="container-botao-cta">
            <div className="wrapper-icones-cta">
              <div className="icone-cta-1"></div>
              <svg className="icone-cta-2" xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
            </div>
            <div className="fundo-cta"></div>
            <div className="texto-cta-1">{children}</div>
            <div className="texto-cta-2">{children}</div>
          </div>
        </button>
      );
      if (href) {
        return <Link href={href}>{content}</Link>;
      }
      return content;
    }

    if (variant === 'shinery') {
      const content = (
        <button ref={ref} className={cn("btn-shinery", className)} {...props}>
          {children}
        </button>
      );
      if (href) {
        return <Link href={href}>{content}</Link>;
      }
      return content;
    }

    const baseClasses = 'inline-flex items-center justify-center gap-2 rounded-lg font-semibold transition-all duration-200 focus-ring disabled:opacity-50 disabled:cursor-not-allowed';

    const variantClasses = {
      primary: 'btn-primary',
      secondary: 'btn-secondary',
      ghost: 'btn-ghost',
      animated: '',
      shinery: ''
    };

    const sizeClasses = {
      sm: 'px-4 py-2 text-xs',
      md: 'px-6 py-3 text-sm',
      lg: 'px-7 py-3.5 text-sm',
    };

    const classes = cn(
      baseClasses,
      variantClasses[variant],
      sizeClasses[size],
      className
    );

    if (href) {
      return (
        <Link href={href}>
          <button ref={ref} className={classes} {...props}>
            {children}
          </button>
        </Link>
      );
    }

    return (
      <button ref={ref} className={classes} {...props}>
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';

export default Button;
