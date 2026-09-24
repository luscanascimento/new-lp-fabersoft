import React from 'react';

interface SectionHeadingProps {
  eyebrow: string;
  title: string | React.ReactNode;
  subtitle?: string | React.ReactNode;
  align?: 'left' | 'center';
  eyebrowColor?: 'blue' | 'gold';
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  eyebrow,
  title,
  subtitle,
  align = 'left',
  eyebrowColor = 'blue',
  className = '',
}) => {
  const isCenter = align === 'center';

  return (
    <div data-reveal="up" className={`mb-12 md:mb-16 ${isCenter ? 'text-center mx-auto max-w-3xl' : 'max-w-3xl'} ${className}`}>
      <div className={`inline-flex items-center gap-2 mb-3 ${isCenter ? 'justify-center' : ''}`}>
        <span 
          className={`h-px w-6 ${eyebrowColor === 'gold' ? 'bg-faber-gold' : 'bg-faber-blue-royal'}`} 
          aria-hidden="true" 
        />
        <span className={`text-xs md:text-sm font-semibold tracking-wider uppercase font-poppins ${
          eyebrowColor === 'gold' ? 'text-faber-gold' : 'text-faber-blue-royal'
        }`}>
          {eyebrow}
        </span>
        {isCenter && (
          <span 
            className={`h-px w-6 ${eyebrowColor === 'gold' ? 'bg-faber-gold' : 'bg-faber-blue-royal'}`} 
            aria-hidden="true" 
          />
        )}
      </div>

      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight font-lato">
        {title}
      </h2>

      {subtitle && (
        <div className="mt-4 text-base sm:text-lg text-gray-300 leading-relaxed font-light">
          {subtitle}
        </div>
      )}
    </div>
  );
};
