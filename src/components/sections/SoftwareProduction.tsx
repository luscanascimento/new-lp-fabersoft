import React from 'react';
import { SectionHeading } from '../ui/SectionHeading';
import { Badge } from '../ui/Badge';
import { Database, LayoutTemplate, Layers } from 'lucide-react';

export const SoftwareProduction: React.FC = () => {
  return (
    <section className="py-24 bg-[#0B1226] border-y border-faber-bg-border" id="plataformas">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <SectionHeading 
              eyebrow="Software em Produção"
              title="Aonde nossa engenharia chega"
            />
            
            <div className="flex flex-wrap gap-3 mb-8">
              <Badge variant="outline">Sistemas de gestão</Badge>
              <Badge variant="outline">Produtos digitais</Badge>
              <Badge variant="outline">Indústria & MES</Badge>
              <Badge variant="outline">Portais e plataformas</Badge>
              <Badge variant="outline">Integrações</Badge>
              <Badge variant="outline">Dados & automação</Badge>
            </div>
            
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              Construímos ecossistemas completos. Desde a interface que seu cliente final utiliza, até o painel industrial que coleta dados de máquinas e o ERP que consolida todo o fluxo financeiro e logístico.
            </p>
          </div>

          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              
              {/* Box 1 */}
              <div className="bg-[#060B1A] border border-faber-bg-border p-5 rounded-xl shadow-lg transform -translate-y-4 hover:-translate-y-6 transition-transform duration-300">
                <Database className="w-6 h-6 text-faber-blue-royal mb-4" />
                <h4 className="text-white font-bold text-sm mb-1">Backend & APIs</h4>
                <div className="text-[10px] font-mono text-gray-500 mb-3">Node.js • Python • Go</div>
                <div className="space-y-1.5">
                  <div className="h-1.5 w-full bg-faber-bg-border rounded overflow-hidden">
                    <div className="h-full bg-faber-blue-royal w-[85%]" />
                  </div>
                  <div className="h-1.5 w-full bg-faber-bg-border rounded overflow-hidden">
                    <div className="h-full bg-faber-blue w-[60%]" />
                  </div>
                </div>
              </div>

              {/* Box 2 */}
              <div className="bg-[#060B1A] border border-faber-bg-border p-5 rounded-xl shadow-lg transform translate-y-8 hover:translate-y-6 transition-transform duration-300">
                <LayoutTemplate className="w-6 h-6 text-faber-gold mb-4" />
                <h4 className="text-white font-bold text-sm mb-1">Frontend & Mobile</h4>
                <div className="text-[10px] font-mono text-gray-500 mb-3">React • TypeScript • Tailwind</div>
                <div className="space-y-2">
                  <div className="h-8 w-full border border-faber-bg-border/60 rounded flex items-center px-2 gap-2">
                    <div className="w-4 h-4 bg-faber-gold/20 rounded-sm" />
                    <div className="h-2 w-12 bg-white/10 rounded-sm" />
                  </div>
                </div>
              </div>

              {/* Box 3 */}
              <div className="bg-[#060B1A] border border-faber-bg-border p-5 rounded-xl shadow-lg col-span-2 mt-4 hover:border-faber-blue/40 transition-colors">
                <div className="flex items-center gap-3 mb-4">
                  <Layers className="w-5 h-5 text-emerald-400" />
                  <h4 className="text-white font-bold text-sm">Integração Contínua (CI/CD)</h4>
                </div>
                <div className="font-mono text-xs text-gray-400 bg-black/50 p-3 rounded border border-white/5">
                  <span className="text-emerald-400">✓</span> Build successful<br/>
                  <span className="text-emerald-400">✓</span> 428 tests passed<br/>
                  <span className="text-faber-blue-royal">deploy</span> starting roll-out to production...
                </div>
              </div>

            </div>
          </div>
        </div>
        
      </div>
    </section>
  );
};
