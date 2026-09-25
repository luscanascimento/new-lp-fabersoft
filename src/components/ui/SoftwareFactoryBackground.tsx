import React from 'react';
import { Settings, FileCode2, Database, Box, Server, GitMerge, FileJson, CheckCircle2 } from 'lucide-react';

export const SoftwareFactoryBackground: React.FC = () => {
  
  const BeltItems = () => (
    <div className="flex shrink-0">
      <div className="mx-12 sm:mx-20 flex flex-col items-center gap-2">
        <div className="w-12 h-12 rounded bg-[#0B1226] border border-emerald-500/30 flex items-center justify-center shadow-lg shadow-emerald-500/10">
          <FileCode2 className="text-emerald-400" />
        </div>
        <span className="font-mono text-[9px] text-emerald-400">frontend.tsx</span>
      </div>

      <div className="mx-12 sm:mx-20 flex flex-col items-center gap-2">
        <div className="w-12 h-12 rounded bg-[#0B1226] border border-faber-gold/30 flex items-center justify-center shadow-lg shadow-faber-gold/10">
          <Database className="text-faber-gold" />
        </div>
        <span className="font-mono text-[9px] text-faber-gold">schema.sql</span>
      </div>

      <div className="mx-12 sm:mx-20 flex flex-col items-center gap-2">
        <div className="w-12 h-12 rounded bg-[#0B1226] border border-cyan-400/30 flex items-center justify-center shadow-lg shadow-cyan-400/10">
          <Server className="text-cyan-400" />
        </div>
        <span className="font-mono text-[9px] text-cyan-400">api_gateway</span>
      </div>

      <div className="mx-12 sm:mx-20 flex flex-col items-center gap-2">
        <div className="w-12 h-12 rounded bg-[#0B1226] border border-faber-blue-royal/30 flex items-center justify-center shadow-lg shadow-faber-blue-royal/10">
          <Box className="text-faber-blue-light" />
        </div>
        <span className="font-mono text-[9px] text-faber-blue-light">docker_image</span>
      </div>

      <div className="mx-12 sm:mx-20 flex flex-col items-center gap-2">
        <div className="w-12 h-12 rounded bg-[#0B1226] border border-purple-400/30 flex items-center justify-center shadow-lg shadow-purple-400/10">
          <FileJson className="text-purple-400" />
        </div>
        <span className="font-mono text-[9px] text-purple-400">config.json</span>
      </div>
      
      <div className="mx-12 sm:mx-20 flex flex-col items-center gap-2">
        <div className="w-12 h-12 rounded bg-[#0B1226] border border-green-500/30 flex items-center justify-center shadow-lg shadow-green-500/10">
          <CheckCircle2 className="text-green-500" />
        </div>
        <span className="font-mono text-[9px] text-green-500">tests_passed</span>
      </div>
    </div>
  );

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-[0.15] z-0">
       <div className="absolute top-0 right-0 w-[50%] h-[50%] bg-faber-blue-royal/5 blur-[120px]" />
       
       <div className="relative w-full h-full max-w-7xl mx-auto flex flex-col justify-center origin-center scale-[2.5] md:scale-[3]">
          
          {/* Main Conveyor Track */}
          <div className="absolute top-1/2 left-[-50%] w-[300%] h-1 bg-faber-bg-border/60" />
          <div className="absolute top-1/2 left-[-50%] w-[300%] h-1 mt-1 bg-faber-bg-border/40" />

          {/* Conveyor motion indicators */}
          <div className="absolute top-1/2 left-[-50%] w-[300%] h-0.5 mt-0.5 border-t-2 border-dashed border-faber-blue-royal/40 animate-marquee" />

          {/* Software "Products" moving on the belt */}
          <div className="absolute top-[calc(50%-45px)] flex w-max animate-marquee" style={{ animationDuration: '30s' }}>
             <BeltItems />
             <BeltItems />
             <BeltItems />
             <BeltItems />
          </div>

          {/* "Machines" / Processors hovering over the belt */}
          <div className="absolute top-[calc(50%-100px)] left-[15%] lg:left-[20%] flex flex-col items-center animate-pulse" style={{ animationDuration: '4s' }}>
            <Settings className="w-12 h-12 sm:w-16 sm:h-16 text-gray-500 animate-[spin_10s_linear_infinite]" />
            <div className="w-1 h-8 sm:h-12 bg-gray-500/50 mt-1" />
            <span className="font-mono text-[9px] sm:text-[10px] text-gray-400 mt-2">COMPILER</span>
          </div>

          <div className="absolute top-[calc(50%-120px)] left-[45%] lg:left-[50%] flex flex-col items-center animate-pulse" style={{ animationDuration: '5s', animationDelay: '1s' }}>
            <GitMerge className="w-12 h-12 sm:w-16 sm:h-16 text-faber-blue-royal animate-[pulse_4s_ease-in-out_infinite]" />
            <div className="w-1 h-12 sm:h-16 bg-faber-blue-royal/50 mt-1" />
            <span className="font-mono text-[9px] sm:text-[10px] text-faber-blue-light mt-2">CI/CD PIPELINE</span>
          </div>

          <div className="absolute top-[calc(50%-90px)] right-[15%] lg:right-[20%] flex flex-col items-center animate-pulse" style={{ animationDuration: '3.5s', animationDelay: '2s' }}>
            <Settings className="w-10 h-10 sm:w-12 sm:h-12 text-emerald-500 animate-[spin_8s_linear_infinite_reverse]" />
            <div className="w-1 h-6 sm:h-10 bg-emerald-500/50 mt-1" />
            <span className="font-mono text-[9px] sm:text-[10px] text-emerald-400 mt-2">DEPLOY_NODE</span>
          </div>
       </div>
    </div>
  );
};
