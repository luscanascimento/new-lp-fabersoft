import React from 'react';
import { SectionHeading } from '../ui/SectionHeading';
import { Badge } from '../ui/Badge';
import { Button } from '../ui/Button';

export const LeanTrack: React.FC = () => {
  return (
    <section className="py-24 bg-[#0B1226] border-y border-faber-bg-border relative" id="leantrack">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <SectionHeading 
              eyebrow="Produto FaberSoft"
              eyebrowColor="gold"
              title={<>Da máquina ao indicador.<br /><span className="text-gray-500">Do indicador à decisão.</span></>}
            />
            
            <div className="space-y-5 text-gray-300 text-lg mb-10">
              <p>O LeanTrack transforma dados do chão de fábrica em informação confiável para quem precisa decidir.</p>
              <p>Uma plataforma MES desenvolvida para acompanhar a produção em tempo real, automatizar a coleta de dados e revelar onde estão as perdas, gargalos e oportunidades de melhoria da operação industrial.</p>
            </div>
            
            <div className="space-y-4 mb-10">
              {[
                { title: "OEE e produtividade", desc: "Acompanhe eficiência, disponibilidade, performance e qualidade com dados reais da produção." },
                { title: "Coleta automática de dados", desc: "Reduza apontamentos manuais e capture informações diretamente de máquinas, sensores e equipamentos." },
                { title: "Gestão em tempo real", desc: "Saiba o que está produzindo, o que parou, por que parou e onde sua atenção é necessária." }
              ].map((feature, i) => (
                <div key={i} className="flex gap-4">
                  <span className="text-faber-gold font-mono font-bold">0{i+1}</span>
                  <div>
                    <h4 className="text-white font-semibold mb-1">{feature.title}</h4>
                    <p className="text-sm text-gray-400">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-4">
              <Button asLink href="https://leantrack.com.br" target="_blank" rel="noopener noreferrer" variant="gold">
                Conhecer o LeanTrack
              </Button>
            </div>
          </div>

          <div className="relative mt-8 lg:mt-0">
            {/* The Dashboard Image with a sleek presentation */}
            <div className="relative rounded-2xl overflow-hidden border border-faber-bg-border/80 shadow-2xl bg-black group transform transition-transform duration-500 hover:scale-[1.02]">
              <div className="absolute inset-0 bg-gradient-to-t from-[#060B1A] via-transparent to-transparent opacity-80 z-10 pointer-events-none" />
              <img 
                src="/assets/images/Dashboard - Fabersoft.png" 
                alt="Dashboard do LeanTrack" 
                className="w-full h-auto object-cover opacity-80 mix-blend-screen transition-opacity duration-500 group-hover:opacity-100"
              />
              
              {/* Floating Terminal Overlay for tech feel */}
              <div className="absolute bottom-4 right-4 left-12 sm:left-auto sm:w-80 rounded-xl overflow-hidden border border-faber-bg-border shadow-2xl bg-[#060B1A]/95 backdrop-blur-md z-20 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <div className="flex items-center justify-between px-3 py-1.5 border-b border-faber-bg-border bg-black/50">
                  <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-500/80"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80"></div>
                  </div>
                  <div className="text-[9px] font-mono text-gray-400">leantrack_stream</div>
                </div>
                <div className="p-3 font-mono text-[10px] text-gray-300">
                  <div className="flex justify-between text-faber-gold mb-2 border-b border-white/10 pb-1">
                    <span>[STREAM ACTIVE]</span>
                    <span>OEE_ENGINE</span>
                  </div>
                  <div className="space-y-1.5">
                    <div className="flex gap-2">
                      <span className="text-emerald-400">[OK]</span>
                      <span className="truncate">Machine_CNC_01: RUNNING</span>
                    </div>
                    <div className="flex gap-2">
                      <span className="text-faber-blue-royal">[METRIC]</span>
                      <span className="truncate">Performance: 107.1%</span>
                    </div>
                    <div className="flex gap-2">
                      <span className="text-emerald-400">[OK]</span>
                      <span className="truncate">Global_OEE = 84.6%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating context element */}
            <div className="absolute -bottom-6 -left-6 sm:-bottom-4 sm:-left-8 bg-[#0B1226] border border-faber-bg-border p-4 rounded-xl shadow-2xl shadow-black/80 z-30">
              <div className="flex items-center gap-4">
                <div className="relative w-12 h-12 rounded-full border-[3px] border-faber-gold flex items-center justify-center bg-[#060B1A] shadow-[0_0_15px_rgba(222,189,84,0.3)]">
                  <span className="text-white font-bold text-sm">84%</span>
                </div>
                <div>
                  <Badge variant="gold" dot className="mb-1">Tempo Real</Badge>
                  <p className="text-xs text-gray-400">OEE Consolidado</p>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
