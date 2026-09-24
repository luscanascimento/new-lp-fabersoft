import React, { useEffect, useState, useRef } from 'react';
import { useTypewriter } from '../../hooks/useTypewriter';

interface TypedCodeProps {
  code: string;
  speed?: number;
  delay?: number;
  className?: string;
}

export const TypedCode: React.FC<TypedCodeProps> = ({ code, speed = 15, delay = 0, className = "" }) => {
  const [startTyping, setStartTyping] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Only pass the delay to the hook once we've triggered intersection
  const { displayedText, isComplete } = useTypewriter(startTyping ? code : '', speed, delay);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setStartTyping(true);
        observer.disconnect();
      }
    }, { threshold: 0.1 });

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={containerRef} className={className}>
      <span dangerouslySetInnerHTML={{ __html: displayedText }} />
      {!isComplete && <span className="animate-pulse">_</span>}
    </div>
  );
};
