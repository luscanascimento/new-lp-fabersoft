import React, { useState, useEffect } from 'react';
import { Button } from '../ui/Button';
import { ArrowRight, Terminal, Cpu, Database, Activity, CheckCircle2, Layers } from 'lucide-react';

export const Hero: React.FC = () => {
  const [activeCycle, setActiveCycle] = useState(0);
  const [ticker, setTicker] = useState(14820);

  const pipelineStages = [
    { label: 'Problema', desc: 'Gargalos & processos manuais', color: 'text-amber-400', border: 'border-amber-500/30' },
    { label: 'Engenharia', desc: 'Arquitetura sob medida & regras', color: 'text-faber-blue-royal', border: 'border-faber-blue/40' },
    { label: 'Software', desc: 'MES, ERP, Web, Mobile & IA', color: 'text-cyan-400', border: 'border-cyan-500/30' },
    { label: 'Resultado', desc: 'Operação fluida & controle total', color: 'text-emerald-400', border: 'border-emerald-500/30' },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveCycle((prev) => (prev + 1) % pipelineStages.length);
      setTicker((prev) => prev + Math.floor(Math.random() * 3) + 1);
    }, 3200);
    return () => clearInterval(timer);
  }, [pipelineStages.length]);

  return (
    <section className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden bg-[#060B1A]" id="hero">
      {/* Background Ambience Layers */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" aria-hidden="true" />
      
      {/* Radial Glows */}
      <div 
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[900px] h-[450px] bg-gradient-to-tr from-faber-blue/20 via-faber-blue-royal/10 to-transparent rounded-full blur-3xl pointer-events-none" 
        aria-hidden="true" 
      />
      <div 
        className="absolute bottom-10 right-10 w-[400px] h-[300px] bg-faber-gold/5 rounded-full blur-3xl pointer-events-none" 
        aria-hidden="true" 
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Narrative & Positioning */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-faber-bg-surface/90 border border-faber-bg-border text-xs sm:text-sm font-medium text-gray-300">
              <span className="w-2 h-2 rounded-full bg-faber-gold animate-pulse" />
              <span className="font-semibold text-white">Software</span>
              <span className="text-gray-500">•</span>
              <span>Inteligência Artificial</span>
              <span className="text-gray-500">•</span>
              <span>Automação Industrial</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl xl:text-6xl font-black text-white tracking-tight leading-[1.08] font-lato">
              Transformamos desafios complexos em{' '}
              <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-white via-[#EBF1FF] to-faber-blue-royal">
                software que gera resultado.
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-gray-300 max-w-2xl font-light leading-relaxed">
              Desenvolvemos produtos digitais, plataformas MES industriais, sistemas ERP e soluções com inteligência artificial sob medida para transformar processos, conectar dados e tornar operações reais mais inteligentes.
            </p>

            {/* Operational Paradigm Stream */}
            <div className="pt-2 pb-2">
              <div className="text-xs uppercase font-mono tracking-wider text-gray-400 mb-2 flex items-center gap-2">
                <Layers className="w-3.5 h-3.5 text-faber-blue-royal" />
                <span>Nossa abordagem de engenharia</span>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {pipelineStages.map((stage, idx) => (
                  <div
                    key={stage.label}
                    className={`p-2.5 rounded-lg border transition-all duration-300 ${
                      activeCycle === idx
                        ? `bg-faber-bg-card/90 ${stage.border} shadow-lg shadow-faber-blue/10 scale-[1.02]`
                        : 'bg-faber-bg-surface/40 border-faber-bg-border/60 opacity-75'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] font-mono text-gray-500">0{idx + 1}</span>
                      {activeCycle === idx && (
                        <span className="w-1.5 h-1.5 rounded-full bg-faber-blue-royal animate-ping" />
                      )}
                    </div>
                    <div className={`text-xs font-bold font-lato mt-0.5 ${stage.color}`}>
                      {stage.label}
                    </div>
                    <div className="text-[10px] text-gray-400 leading-tight mt-0.5 line-clamp-1">
                      {stage.desc}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
              <Button
                asLink
                href="#contato"
                variant="primary"
                size="lg"
                icon={<ArrowRight className="w-4 h-4" />}
              >
                Fale com um especialista
              </Button>
              <Button
                asLink
                href="#solucoes"
                variant="ghost"
                size="lg"
              >
                Conheça nossas soluções
              </Button>
            </div>

            {/* Quick trust metrics */}
            <div className="pt-4 flex flex-wrap items-center gap-6 text-xs text-gray-400 border-t border-faber-bg-border/70">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>+40 indústrias e empresas atendidas</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>20 plataformas proprietárias</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-faber-gold" />
                <span>Avaliação 5.0 no Google</span>
              </div>
            </div>
          </div>

          {/* Right Column: Live Operational Telemetry & System Engineering Architecture */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              
              {/* Terminal Frame */}
              <div className="rounded-xl border border-faber-bg-borderLight/80 bg-gradient-to-b from-[#0B1226] to-[#060B1A] p-4 sm:p-5 shadow-2xl shadow-black/60 backdrop-blur-xl">
                {/* Header bar */}
                <div className="flex items-center justify-between pb-3 mb-4 border-b border-faber-bg-border">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-red-500/80" />
                    <span className="w-3 h-3 rounded-full bg-amber-500/80" />
                    <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
                    <span className="ml-2 text-xs font-mono text-gray-400 flex items-center gap-1.5">
                      <Terminal className="w-3.5 h-3.5 text-faber-blue-royal" />
                      fabersoft.production.telemetry
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5 text-[11px] font-mono text-emerald-400 bg-emerald-950/60 border border-emerald-500/30 px-2 py-0.5 rounded">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span>ONLINE</span>
                  </div>
                </div>

                {/* Real-time Cards */}
                <div className="space-y-3 font-mono text-xs">
                  
                  {/* Status Banner */}
                  <div className="bg-faber-bg-card/80 p-3 rounded-lg border border-faber-bg-border">
                    <div className="flex justify-between items-center text-gray-400 text-[11px] mb-1">
                      <span>MONITORAMENTO ATIVO</span>
                      <span className="text-faber-blue-royal">SJC-SP • DC-LATAM</span>
                    </div>
                    <div className="flex items-baseline justify-between">
                      <span className="text-sm font-semibold text-white font-lato">Operações Industriais & SaaS</span>
                      <span className="text-faber-gold font-bold text-sm">99.98% uptime</span>
                    </div>
                  </div>

                  {/* Telemetry Grid */}
                  <div className="grid grid-cols-2 gap-2.5">
                    <div className="bg-faber-bg-surface p-2.5 rounded-md border border-faber-bg-border/60">
                      <div className="text-[10px] text-gray-400 flex items-center gap-1">
                        <Activity className="w-3 h-3 text-cyan-400" />
                        <span>EVENTOS / DIA</span>
                      </div>
                      <div className="text-base font-bold text-white mt-1">
                        {ticker.toLocaleString()} req/s
                      </div>
                      <div className="text-[10px] text-emerald-400 mt-0.5">Sem filas reprimidas</div>
                    </div>

                    <div className="bg-faber-bg-surface p-2.5 rounded-md border border-faber-bg-border/60">
                      <div className="text-[10px] text-gray-400 flex items-center gap-1">
                        <Cpu className="w-3 h-3 text-faber-gold" />
                        <span>MÉDIA OEE (MES)</span>
                      </div>
                      <div className="text-base font-bold text-white mt-1">
                        84.6%
                      </div>
                      <div className="text-[10px] text-faber-gold mt-0.5">+14.2% pós-implantação</div>
                    </div>
                  </div>

                  {/* Active Pipelines */}
                  <div className="bg-faber-bg-surface/90 p-3 rounded-lg border border-faber-bg-border/70 space-y-2">
                    <div className="text-[11px] font-semibold text-gray-300 flex items-center justify-between">
                      <span className="flex items-center gap-1.5">
                        <Database className="w-3.5 h-3.5 text-faber-blue-royal" />
                        Sistemas Conectados
                      </span>
                      <span className="text-gray-500 text-[10px]">Latência &lt; 28ms</span>
                    </div>

                    <div className="space-y-1.5 text-[11px]">
                      <div className="flex items-center justify-between bg-black/30 px-2 py-1 rounded">
                        <span className="text-gray-300">LeanTrack MES 4.0 ⇄ Chão de Fábrica</span>
                        <span className="text-emerald-400 font-semibold">124 CLP Conectados</span>
                      </div>
                      <div className="flex items-center justify-between bg-black/30 px-2 py-1 rounded">
                        <span className="text-gray-300">Mensura ERP ⇄ Fiscal & Estoque</span>
                        <span className="text-cyan-400 font-semibold">Sync Idempotente</span>
                      </div>
                      <div className="flex items-center justify-between bg-black/30 px-2 py-1 rounded">
                        <span className="text-gray-300">Radisa IA ⇄ Agentes Operacionais</span>
                        <span className="text-faber-gold font-semibold">Pipeline Ativo</span>
                      </div>
                    </div>
                  </div>

                  {/* Terminal Log footer */}
                  <div className="p-2.5 bg-black/50 rounded-md border border-faber-bg-border/40 text-[10px] text-gray-400 leading-relaxed font-mono">
                    <span className="text-faber-blue-royal font-bold">$</span> fabersoft-engine --status=healthy --env=production
                    <br />
                    <span className="text-emerald-400">✓</span> 0 falhas não tratadas • Tolerância a falhas validada
                  </div>

                </div>
              </div>

              {/* Behind Subtle Device Illustration Badge */}
              <div className="absolute -bottom-6 -right-6 hidden sm:block p-3 rounded-lg bg-faber-bg-surface/90 border border-faber-blue-royal/40 shadow-xl backdrop-blur-md">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded bg-faber-blue/20 flex items-center justify-center text-faber-blue-royal font-bold text-xs">
                    FS
                  </div>
                  <div>
                    <div className="text-[11px] font-bold text-white font-lato">Engenharia de Ponta a Ponta</div>
                    <div className="text-[10px] text-gray-400">Do hardware ao dashboard executivo</div>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
