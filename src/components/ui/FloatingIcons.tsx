import React, { useEffect, useState } from 'react';
import { Badge } from './Badge';

const techTags = [
  "React", "TypeScript", "Node.js", "Python", "Go", "AWS", "Docker", "Kubernetes", "PostgreSQL", "MongoDB", "GraphQL", "REST", "TensorFlow", "PyTorch", "Redis", "Kafka"
];

export const FloatingIcons: React.FC = () => {
  const [icons, setIcons] = useState<{ id: number; tag: string; left: string; top: string; delay: string; duration: string; scale: number }[]>([]);

  useEffect(() => {
    const generated = Array.from({ length: 12 }).map((_, i) => ({
      id: i,
      tag: techTags[Math.floor(Math.random() * techTags.length)],
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      delay: `${Math.random() * 5}s`,
      duration: `${15 + Math.random() * 15}s`,
      scale: 0.6 + Math.random() * 0.6,
    }));
    setIcons(generated);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {icons.map(icon => (
        <div
          key={icon.id}
          className="absolute flex items-center justify-center opacity-30 animate-pulse-subtle"
          style={{
            left: icon.left,
            top: icon.top,
            transform: `scale(${icon.scale})`,
            animationName: 'float-up',
            animationDuration: icon.duration,
            animationTimingFunction: 'linear',
            animationIterationCount: 'infinite',
            animationDelay: icon.delay,
          }}
        >
          <div className="px-3 py-1.5 rounded bg-[#0B1226]/80 border border-faber-bg-borderLight backdrop-blur shadow-xl text-faber-blue-light font-mono text-xs">
            {icon.tag}
          </div>
        </div>
      ))}
    </div>
  );
};
