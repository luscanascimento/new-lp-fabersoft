import React from 'react';
import { Bot, User, MessageSquareText, Cpu, Zap, Workflow } from 'lucide-react';

export const AIConversationBackground: React.FC = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-40 z-0">
       <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-faber-blue-royal/10 rounded-full blur-[120px]" />
       <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-emerald-500/5 rounded-full blur-[120px]" />
       
       <div className="relative w-full h-full max-w-7xl mx-auto">
          {/* AI Nodes */}
          <div className="absolute top-[20%] left-[5%] lg:left-[10%] animate-pulse-subtle">
             <div className="flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-emerald-500/20 to-transparent border border-emerald-500/30 backdrop-blur-sm">
                <Bot size={40} className="text-emerald-400" />
             </div>
          </div>

          <div className="absolute bottom-[25%] left-[8%] lg:left-[15%] animate-pulse-subtle" style={{ animationDelay: '1.5s' }}>
             <div className="flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-cyan-500/20 to-transparent border border-cyan-500/30 backdrop-blur-sm">
                <Workflow size={32} className="text-cyan-400" />
             </div>
          </div>
          
          {/* Human Nodes */}
          <div className="absolute top-[30%] right-[5%] lg:right-[15%] animate-pulse-subtle" style={{ animationDelay: '1s' }}>
             <div className="flex items-center justify-center w-24 h-24 rounded-full bg-gradient-to-br from-faber-blue-royal/20 to-transparent border border-faber-blue-royal/30 backdrop-blur-sm">
                <User size={48} className="text-faber-blue-light" />
             </div>
          </div>

          <div className="absolute bottom-[20%] right-[10%] lg:right-[20%] animate-pulse-subtle" style={{ animationDelay: '2.5s' }}>
             <div className="flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br from-faber-gold/20 to-transparent border border-faber-gold/30 backdrop-blur-sm">
                <User size={32} className="text-faber-gold" />
             </div>
          </div>

          {/* Central System Node */}
          <div className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 animate-pulse-subtle" style={{ animationDelay: '0.5s' }}>
             <div className="flex items-center justify-center w-32 h-32 rounded-3xl bg-gradient-to-br from-[#0B1226] to-faber-blue-royal/10 border border-faber-bg-border/60 shadow-2xl backdrop-blur-md">
                <Cpu size={56} className="text-gray-400" />
             </div>
          </div>

          {/* Connection Lines (SVG) */}
          <svg className="absolute inset-0 w-full h-full" style={{ zIndex: -1 }}>
             <line x1="12%" y1="25%" x2="50%" y2="50%" stroke="rgba(16, 185, 129, 0.25)" strokeWidth="2" strokeDasharray="6,6" />
             <line x1="15%" y1="75%" x2="50%" y2="50%" stroke="rgba(34, 211, 238, 0.25)" strokeWidth="2" strokeDasharray="6,6" />
             <line x1="85%" y1="35%" x2="50%" y2="50%" stroke="rgba(67, 102, 219, 0.25)" strokeWidth="2" strokeDasharray="6,6" />
             <line x1="80%" y1="80%" x2="50%" y2="50%" stroke="rgba(222, 189, 84, 0.25)" strokeWidth="2" strokeDasharray="6,6" />
          </svg>

          {/* Message bubbles floating */}
          <div className="absolute top-[35%] left-[25%] opacity-50 animate-bounce text-emerald-400">
             <MessageSquareText size={24} />
          </div>
          
          <div className="absolute top-[45%] right-[25%] opacity-50 animate-bounce text-faber-blue-light" style={{ animationDelay: '0.5s', animationDuration: '2s' }}>
             <MessageSquareText size={28} />
          </div>

          <div className="absolute bottom-[35%] left-[30%] opacity-50 animate-bounce text-cyan-400" style={{ animationDelay: '1s' }}>
             <Zap size={20} />
          </div>
       </div>
    </div>
  );
};
