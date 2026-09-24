import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'ghost' | 'gold' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  asLink?: boolean;
  href?: string;
  target?: string;
  rel?: string;
  icon?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  asLink = false,
  href,
  icon,
  children,
  className = '',
  ...props
}) => {
  const baseStyles = "relative inline-flex items-center justify-center font-medium font-poppins rounded-md transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-faber-blue focus:ring-offset-2 focus:ring-offset-faber-bg-base select-none cursor-pointer";
  
  const sizeStyles = {
    sm: "px-3.5 py-1.5 text-xs gap-1.5",
    md: "px-5 py-2.5 text-sm gap-2",
    lg: "px-7 py-3.5 text-base gap-2.5 font-semibold",
  };

  const variantStyles = {
    primary: "bg-faber-blue hover:bg-faber-blue-denim text-white shadow-lg shadow-faber-blue/25 hover:shadow-faber-blue/40 border border-faber-blue-royal/40 active:translate-y-0.5",
    ghost: "bg-faber-bg-surface/80 hover:bg-faber-bg-card text-faber-lotion hover:text-white border border-faber-bg-border hover:border-faber-blue/40 backdrop-blur-sm active:translate-y-0.5",
    gold: "bg-faber-gold hover:bg-faber-gold-light text-[#060B1A] font-semibold shadow-lg shadow-faber-gold/20 hover:shadow-faber-gold/35 border border-faber-gold/40 active:translate-y-0.5",
    outline: "bg-transparent text-faber-blue-royal hover:text-white border border-faber-blue-royal/50 hover:bg-faber-blue/15 active:translate-y-0.5"
  };

  const combinedClass = `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`;

  if (asLink && href) {
    return (
      <a href={href} className={combinedClass} {...(props as any)}>
        <span>{children}</span>
        {icon && <span className="transition-transform duration-200 group-hover:translate-x-0.5">{icon}</span>}
      </a>
    );
  }

  return (
    <button className={combinedClass} {...props}>
      <span>{children}</span>
      {icon && <span className="transition-transform duration-200 group-hover:translate-x-0.5">{icon}</span>}
    </button>
  );
};
