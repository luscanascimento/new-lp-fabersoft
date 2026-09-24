import React from 'react';
import { SectionHeading } from '../ui/SectionHeading';
import { Code2, Network, BrainCircuit, MonitorSmartphone, Terminal } from 'lucide-react';
import { TypedCode } from '../ui/TypedCode';

export const Solutions: React.FC = () => {
  const pillars = [
    {
      id: "software",
      title: "Software sob medida",
      desc: "Sistemas construídos em torno da sua operação, dos seus processos e das necessidades reais do seu negócio.",
      icon: <Code2 className="w-6 h-6 text-faber-blue-royal" />
    },
    {
      id: "integrations",
      title: "Integrações & APIs",
      desc: "Conectamos sistemas, ERPs, equipamentos e serviços para eliminar silos e fazer a informação fluir.",
      icon: <Network className="w-6 h-6 text-faber-gold" />
    },
    {
      id: "ai",
      title: "IA & Automação",
      desc: "Aplicamos IA e automação onde geram valor: reduzindo tarefas repetitivas, acelerando análises e apoiando decisões.",
      icon: <BrainCircuit className="w-6 h-6 text-emerald-400" />
    },
    {
      id: "web-mobile",
      title: "Web & Mobile",
      desc: "Aplicações modernas, rápidas e escaláveis para colocar sua operação, produto ou serviço onde seus usuários estão.",
      icon: <MonitorSmartphone className="w-6 h-6 text-cyan-400" />
    }
  ];

  const codeString = `
<span class="text-faber-blue-royal">import</span> {'{'} Cluster, Node, AI_Agent {'}'} <span class="text-faber-blue-royal">from</span> <span class="text-emerald-400">'@fabersoft/core'</span>;<br/><br/>
<span class="text-faber-blue-royal">const</span> architecture = <span class="text-faber-blue-royal">new</span> <span class="text-faber-gold">Cluster</span>({'{'}<br/>
&nbsp;&nbsp;name: <span class="text-emerald-400">'Enterprise_Stack'</span>,<br/>
&nbsp;&nbsp;scale: <span class="text-faber-gold">Infinity</span>,<br/>
&nbsp;&nbsp;modules: [<br/>
&nbsp;&nbsp;&nbsp;&nbsp;<span class="text-faber-blue-royal">new</span> <span class="text-faber-gold">Node</span>(<span class="text-emerald-400">'Custom_ERP'</span>, {'{'} sync: <span class="text-faber-blue-royal">true</span> {'}'}),<br/>
&nbsp;&nbsp;&nbsp;&nbsp;<span class="text-faber-blue-royal">new</span> <span class="text-faber-gold">Node</span>(<span class="text-emerald-400">'Industrial_IoT'</span>, {'{'} freq: <span class="text-emerald-400">'realtime'</span> {'}'}),<br/>
&nbsp;&nbsp;&nbsp;&nbsp;<span class="text-faber-blue-royal">new</span> <span class="text-faber-gold">AI_Agent</span>(<span class="text-emerald-400">'Predictive_Analysis'</span>)<br/>
&nbsp;&nbsp;]<br/>
{'}'});<br/><br/>
architecture.<span class="text-cyan-400">deploy</span>().<span class="text-cyan-400">then</span>(() <span class="text-faber-blue-royal">=&gt;</span> {'{'}<br/>
&nbsp;&nbsp;console.<span class="text-cyan-400">log</span>(<span class="text-emerald-400">'Bottlenecks resolved. Operation running smoothly.'</span>);<br/>
{'}'});<br/>
  `;

  return (
    <section className="py-24 bg-faber-bg-base relative overflow-hidden" id="solucoes">
      <div className="absolute -left-[20%] top-[10%] w-[50%] h-[50%] bg-faber-blue/5 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 items-start">
          <div className="lg:sticky lg:top-32">
            <SectionHeading 
              eyebrow="Tecnologia feita para resolver"
              title="Mais do que desenvolver software, resolvemos o que trava sua operação."
            />
            <div className="space-y-6 text-lg text-gray-300">
              <p>
                Processos manuais, informações espalhadas, sistemas que não conversam e ferramentas que já não acompanham o crescimento da empresa.
              </p>
              <p className="text-white font-medium">É nesse ponto que entramos.</p>
              <p>
                Entendemos o problema, desenhamos a solução e construímos a tecnologia necessária para transformar operações complexas em processos mais simples, conectados e inteligentes.
              </p>
            </div>
            
            <div className="mt-10">
              <div className="rounded-xl overflow-hidden border border-faber-bg-border shadow-2xl bg-[#0B1226]">
                <div className="flex items-center gap-2 px-4 py-2 border-b border-faber-bg-border bg-black/40">
                  <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-amber-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80"></div>
                  <span className="ml-2 text-xs font-mono text-gray-500 flex items-center gap-1"><Terminal className="w-3 h-3" /> system_architecture.ts</span>
                </div>
                <div className="p-4 sm:p-6 font-mono text-xs sm:text-sm text-gray-300 overflow-x-auto leading-relaxed min-h-[300px]">
                  <TypedCode code={codeString} speed={10} delay={200} />
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4 mt-8 lg:mt-0">
            {pillars.map((pillar) => (
              <div 
                key={pillar.id}
                data-reveal="up"
                className="group p-6 sm:p-8 rounded-2xl bg-faber-bg-surface/50 border border-faber-bg-border hover:bg-[#0F1A36] hover:border-faber-blue-royal/50 transition-all duration-300 relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-faber-blue-royal/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative flex items-start gap-5">
                  <div className="mt-1 p-3 rounded-lg bg-black/40 border border-faber-bg-border group-hover:border-faber-blue-royal/50 transition-colors shadow-inner">
                    {pillar.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-faber-blue-light transition-colors">{pillar.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">{pillar.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
