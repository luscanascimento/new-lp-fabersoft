import React from 'react';

export const ProgrammingScreensBackground: React.FC = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-50 z-0">
      
      {/* Background glow */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-faber-blue-royal/10 rounded-full blur-[100px]" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-emerald-500/5 rounded-full blur-[100px]" />

      <div className="relative w-full h-full max-w-7xl mx-auto">
        {/* Screen 1 (Left) */}
        <div className="absolute top-[20%] left-[5%] lg:left-[10%] opacity-50 rotate-[-5deg] animate-[pulse_4s_ease-in-out_infinite]">
           <div className="border border-faber-blue-royal/30 bg-[#060B1A]/80 rounded-md w-40 sm:w-56 h-28 sm:h-36 p-3 flex flex-col gap-2 overflow-hidden shadow-2xl backdrop-blur-sm">
             <div className="flex gap-1.5 mb-1">
               <div className="w-2 h-2 rounded-full bg-red-500/40"></div>
               <div className="w-2 h-2 rounded-full bg-amber-500/40"></div>
               <div className="w-2 h-2 rounded-full bg-emerald-500/40"></div>
             </div>
             {/* Animated Code lines */}
             <div className="space-y-1.5">
               <div className="h-1.5 w-3/4 bg-faber-blue-royal/40 rounded animate-pulse" />
               <div className="h-1.5 w-1/2 bg-faber-blue-royal/40 rounded animate-pulse" style={{ animationDelay: '100ms' }} />
               <div className="h-1.5 w-5/6 bg-faber-blue-royal/40 rounded animate-pulse" style={{ animationDelay: '200ms' }} />
               <div className="h-1.5 w-1/3 bg-emerald-500/40 rounded animate-pulse" style={{ animationDelay: '300ms' }} />
               <div className="h-1.5 w-2/3 bg-emerald-500/40 rounded animate-pulse" style={{ animationDelay: '400ms' }} />
             </div>
           </div>
        </div>

        {/* Screen 2 (Right) */}
        <div className="absolute bottom-[15%] right-[5%] lg:right-[15%] opacity-50 rotate-[3deg] animate-[pulse_5s_ease-in-out_infinite]" style={{ animationDelay: '1s' }}>
           <div className="border border-cyan-500/30 bg-[#060B1A]/80 rounded-md w-48 sm:w-64 h-32 sm:h-40 p-3 flex flex-col gap-2 overflow-hidden shadow-2xl backdrop-blur-sm">
             <div className="flex gap-1.5 mb-1">
               <div className="w-2 h-2 rounded-full bg-red-500/40"></div>
               <div className="w-2 h-2 rounded-full bg-amber-500/40"></div>
               <div className="w-2 h-2 rounded-full bg-emerald-500/40"></div>
             </div>
             <div className="space-y-1.5">
               <div className="h-1.5 w-full bg-cyan-500/40 rounded animate-pulse" />
               <div className="h-1.5 w-4/5 bg-cyan-500/40 rounded animate-pulse" style={{ animationDelay: '150ms' }} />
               <div className="h-1.5 w-1/2 bg-faber-gold/40 rounded animate-pulse" style={{ animationDelay: '300ms' }} />
               <div className="h-1.5 w-3/4 bg-faber-gold/40 rounded animate-pulse" style={{ animationDelay: '450ms' }} />
               <div className="h-1.5 w-2/5 bg-cyan-500/40 rounded animate-pulse" style={{ animationDelay: '600ms' }} />
               <div className="h-1.5 w-5/6 bg-cyan-500/40 rounded animate-pulse" style={{ animationDelay: '750ms' }} />
             </div>
           </div>
        </div>

        {/* Screen 3 (Center Top) */}
        <div className="absolute top-[10%] right-[30%] opacity-30 rotate-[8deg] animate-[pulse_6s_ease-in-out_infinite]" style={{ animationDelay: '2s' }}>
           <div className="border border-emerald-500/30 bg-[#060B1A]/80 rounded-md w-32 h-24 p-2 flex flex-col gap-1.5 overflow-hidden shadow-2xl backdrop-blur-sm">
             <div className="flex gap-1 mb-1">
               <div className="w-1.5 h-1.5 rounded-full bg-red-500/40"></div>
               <div className="w-1.5 h-1.5 rounded-full bg-amber-500/40"></div>
               <div className="w-1.5 h-1.5 rounded-full bg-emerald-500/40"></div>
             </div>
             <div className="space-y-1">
               <div className="h-1 w-3/4 bg-emerald-500/40 rounded animate-pulse" />
               <div className="h-1 w-full bg-emerald-500/40 rounded animate-pulse" style={{ animationDelay: '100ms' }} />
               <div className="h-1 w-2/3 bg-emerald-500/40 rounded animate-pulse" style={{ animationDelay: '200ms' }} />
             </div>
           </div>
        </div>

        {/* Code snippets floating */}
        <div className="absolute top-[45%] right-[20%] text-[10px] sm:text-xs font-mono text-emerald-400 whitespace-pre opacity-30 animate-pulse">
          {'<SystemBuilder />'}
        </div>

        <div className="absolute bottom-[35%] left-[25%] text-[10px] sm:text-xs font-mono text-faber-blue-royal whitespace-pre opacity-30 animate-bounce">
          {'npm run deploy:prod'}
        </div>
      </div>
    </div>
  );
};
