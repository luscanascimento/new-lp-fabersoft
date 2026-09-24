import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'blue' | 'gold' | 'emerald' | 'charcoal' | 'outline';
  dot?: boolean;
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'blue',
  dot = false,
  className = '',
}) => {
  const variantStyles = {
    blue: 'bg-faber-blue/15 text-faber-blue-royal border-faber-blue/30',
    gold: 'bg-faber-gold/15 text-faber-gold border-faber-gold/30',
    emerald: 'bg-emerald-500/15 text-emerald-400 border-emerald-500/30',
    charcoal: 'bg-faber-charcoal/20 text-gray-300 border-faber-charcoal/40',
    outline: 'bg-transparent text-gray-300 border-faber-bg-borderLight/60',
  };

  const dotColors = {
    blue: 'bg-faber-blue-royal',
    gold: 'bg-faber-gold',
    emerald: 'bg-emerald-400 animate-pulse',
    charcoal: 'bg-gray-400',
    outline: 'bg-gray-400',
  };

  return (
    <span className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium border font-poppins ${variantStyles[variant]} ${className}`}>
      {dot && <span className={`w-1.5 h-1.5 rounded-full ${dotColors[variant]}`} aria-hidden="true" />}
      {children}
    </span>
  );
};
