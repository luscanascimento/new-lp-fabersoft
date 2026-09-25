import React, { useEffect, useState } from 'react';
import { SectionHeading } from '../ui/SectionHeading';
import { Badge } from '../ui/Badge';
import { Button } from '../ui/Button';
import { TypedCode } from '../ui/TypedCode';
import { Bot, Sparkles, Brain, Code2, Rocket, Zap, Search, Moon, MessageSquareText } from 'lucide-react';

import { AIConversationBackground } from '../ui/AIConversationBackground';
import { ClaudeIcon, GeminiIcon, KimiIcon, CursorIcon, ChatGPTIcon } from '../ui/Icons';

export const AI: React.FC = () => {
  const [showOutput, setShowOutput] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setTimeout(() => setShowOutput(true), 2500); // Show output after code finishes typing
      }
    });
    
    const element = document.getElementById('ai-terminal');
    if (element) observer.observe(element);
    return () => observer.disconnect();
  }, []);

  const aiCode = `
<span class="text-faber-blue-royal">import</span> radisa_ai <span class="text-faber-blue-royal">as</span> rai<br/><br/>
<span class="text-gray-500"># Initializing autonomous business agent</span><br/>
agent = rai.<span class="text-cyan-400">Agent</span>(<br/>
&nbsp;&nbsp;model=<span class="text-emerald-400">'radisa-enterprise-v4'</span>,<br/>
&nbsp;&nbsp;context=<span class="text-emerald-400">'corporate_workflow'</span>,<br/>
&nbsp;&nbsp;permissions=[<span class="text-emerald-400">'read_erp'</span>, <span class="text-emerald-400">'write_reports'</span>]<br/>
)<br/><br/>
<span class="text-faber-blue-royal">def</span> <span class="text-faber-gold">optimize_process</span>(data):<br/>
&nbsp;&nbsp;analysis = agent.<span class="text-cyan-400">analyze_patterns</span>(data)<br/>
&nbsp;&nbsp;<span class="text-faber-blue-royal">if</span> analysis.bottlenecks_found > <span class="text-faber-gold">0</span>:<br/>
&nbsp;&nbsp;&nbsp;&nbsp;agent.<span class="text-cyan-400">trigger_automation</span>(analysis.resolution_plan)<br/>
&nbsp;&nbsp;&nbsp;&nbsp;<span class="text-faber-blue-royal">return</span> <span class="text-emerald-400">"Workflow Optimized"</span><br/>
&nbsp;&nbsp;<span class="text-faber-blue-royal">return</span> <span class="text-emerald-400">"Optimal State"</span><br/>
  `;

  return (
    <section className="py-24 bg-[#060B1A] relative" id="ia">
      <div className="absolute top-0 right-0 w-1/3 h-1/2 bg-faber-blue-royal/10 blur-[150px] pointer-events-none" />
      <AIConversationBackground />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div className="order-2 lg:order-1 relative" id="ai-terminal" data-reveal="left">
            <div className="relative rounded-xl overflow-hidden border border-faber-bg-border shadow-2xl shadow-faber-blue/5 bg-[#0B1226]">
              <div className="flex justify-between items-center px-4 py-2 border-b border-faber-bg-border bg-black/40">
                 <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-amber-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80"></div>
                </div>
                <Badge variant="outline" className="text-[9px]">radisa_agent_node.py</Badge>
              </div>
              
              <div className="p-5 font-mono text-xs sm:text-sm text-gray-300 leading-relaxed min-h-[300px]">
                <TypedCode code={aiCode} speed={10} delay={500} />
              </div>
            </div>

            <div className={`absolute -bottom-10 -right-6 sm:-bottom-6 sm:-right-6 bg-black/90 backdrop-blur-md border border-faber-bg-border rounded-lg p-4 w-4/5 shadow-2xl transition-all duration-1000 delay-500 ${showOutput ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <div className="flex justify-between items-center mb-2">
                <Badge variant="blue" dot>Output do Agente</Badge>
              </div>
              <div className="font-mono text-xs text-gray-300">
                <p><span className="text-emerald-400">❯</span> Monitorando funil de vendas e estoque...</p>
                <p><span className="text-emerald-400">❯</span> 14.283 registros verificados em 1.2s</p>
                <p className="mt-1"><span className="text-faber-blue-light font-bold bg-faber-blue-royal/20 px-1 py-0.5 rounded">✓ Padrão de anomalia resolvido sem intervenção humana.</span></p>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2" data-reveal="right">
            <SectionHeading 
              eyebrow="Inteligência artificial aplicada"
              title={<>IA que sai da apresentação e entra na operação.</>}
            />
            
            <div className="space-y-4 text-gray-300 text-lg mb-8">
              <p className="text-white font-medium">Inteligência artificial só faz sentido quando melhora alguma coisa.</p>
              <p>Por isso, não começamos pela IA. Começamos pelo problema. Identificamos processos, tarefas e decisões que podem ser acelerados e construímos soluções capazes de trabalhar junto com sua equipe e com os sistemas que sua empresa já utiliza.</p>
            </div>

            <ul className="space-y-6 mb-10">
              <li className="flex gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-faber-blue-royal mt-2" />
                <div>
                  <h4 className="text-white font-semibold">Agentes inteligentes</h4>
                  <p className="text-sm text-gray-400 mt-1">Soluções capazes de consultar informações, executar tarefas e interagir com os processos da empresa.</p>
                </div>
              </li>
              <li className="flex gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-faber-blue-royal mt-2" />
                <div>
                  <h4 className="text-white font-semibold">IA integrada aos seus sistemas</h4>
                  <p className="text-sm text-gray-400 mt-1">Conectamos modelos de inteligência artificial aos seus dados, plataformas, APIs e fluxos internos.</p>
                </div>
              </li>
            </ul>

            <div className="bg-[#0B1226] border border-faber-bg-border rounded-xl p-6 flex flex-col sm:flex-row items-center gap-6 justify-between hover:border-faber-blue/40 transition-colors">
              <div>
                <img src={`${import.meta.env.BASE_URL}assets/brand/radisa.svg`} alt="Radisa" className="h-8 mb-2" />
                <p className="text-xs text-gray-400 max-w-[250px]">Conheça a Radisa, nossa empresa especializada em Inteligência Artificial para negócios reais.</p>
              </div>
              <Button 
                variant="outline" 
                asLink 
                href="https://radisa.com.br"
                target="_blank"
                rel="noopener noreferrer"
                className="relative overflow-hidden group border-faber-blue-royal/50 hover:border-cyan-400/80 !p-0"
              >
                {/* Tech grid background that appears on hover */}
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4IiBoZWlnaHQ9IjgiPgo8cmVjdCB3aWR0aD0iOCIgaGVpZ2h0PSI4IiBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9IjAuMDEiLz4KPHBhdGggZD0iTTAgMEw4IDhNOCAwTDAgOCIgc3Ryb2tlPSIjMDBmZmZmIiBzdHJva2Utd2lkdGg9IjAuNSIgc3Ryb2tlLW9wYWNpdHk9IjAuMiIvPgo8L3N2Zz4=')] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Glowing sweep effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out"></div>
                
                <div className="relative z-10 flex items-center gap-2 px-6 py-2.5 w-full h-full">
                  <Bot className="w-5 h-5 text-cyan-400 group-hover:animate-[spin_2s_linear_infinite]" />
                  <span className="font-semibold bg-gradient-to-r from-faber-blue-light to-cyan-400 bg-clip-text text-transparent group-hover:from-cyan-300 group-hover:to-white transition-all duration-300">
                    Explorar soluções
                  </span>
                </div>
              </Button>
            </div>

            {/* Integrated Models */}
            <div className="mt-8 pt-8 border-t border-faber-bg-border/60" data-reveal="up">
              <p className="text-[10px] uppercase tracking-widest text-gray-500 mb-4 font-semibold">Integrado nativamente com os melhores modelos</p>
              <div className="flex flex-wrap gap-2.5">
                <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-faber-bg-border/60 bg-black/20 text-gray-400 text-xs font-medium hover:border-emerald-400/30 transition-colors cursor-default">
                  <ChatGPTIcon size={14} className="text-emerald-400" /> ChatGPT
                </div>
                <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-faber-bg-border/60 bg-black/20 text-gray-400 text-xs font-medium hover:border-blue-400/30 transition-colors cursor-default">
                  <GeminiIcon size={14} className="text-blue-400" /> Gemini
                </div>
                <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-faber-bg-border/60 bg-black/20 text-gray-400 text-xs font-medium hover:border-amber-400/30 transition-colors cursor-default">
                  <ClaudeIcon size={14} className="text-amber-400" /> Claude
                </div>
                <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-faber-bg-border/60 bg-black/20 text-gray-400 text-xs font-medium hover:border-gray-300/30 transition-colors cursor-default">
                  <KimiIcon size={14} className="text-gray-300" /> Kimi
                </div>
                <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-faber-bg-border/60 bg-black/20 text-gray-400 text-xs font-medium hover:border-faber-blue-royal/30 transition-colors cursor-default">
                  <CursorIcon size={14} className="text-faber-blue-royal" /> Cursor
                </div>

              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
