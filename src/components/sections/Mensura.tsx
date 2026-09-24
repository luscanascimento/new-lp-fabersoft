import React, { useEffect, useState } from 'react';
import { SectionHeading } from '../ui/SectionHeading';
import { Button } from '../ui/Button';
import { TypedCode } from '../ui/TypedCode';

export const Mensura: React.FC = () => {
  const [showOverlay, setShowOverlay] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setTimeout(() => setShowOverlay(true), 2500);
      }
    });
    
    const element = document.getElementById('mensura-terminal');
    if (element) observer.observe(element);
    return () => observer.disconnect();
  }, []);

  const jsonCode = `
<span class="text-gray-500">// Transaction payload crossing departments</span><br/>
<span class="text-faber-gold">{'{'}</span><br/>
&nbsp;&nbsp;<span class="text-faber-blue-light">"transaction_id"</span>: <span class="text-emerald-400">"TRX-89210-BR"</span>,<br/>
&nbsp;&nbsp;<span class="text-faber-blue-light">"status"</span>: <span class="text-emerald-400">"PROCESSING"</span>,<br/>
&nbsp;&nbsp;<span class="text-faber-blue-light">"pipeline_stages"</span>: <span class="text-cyan-400">{'['}</span><br/>
&nbsp;&nbsp;&nbsp;&nbsp;<span class="text-emerald-400">'{'{'}"dept": "Comercial",  "action": "Quotation_Approved", "status": "DONE"{'}'}'</span>,<br/>
&nbsp;&nbsp;&nbsp;&nbsp;<span class="text-emerald-400">'{'{'}"dept": "Financeiro", "action": "Credit_Check",       "status": "DONE"{'}'}'</span>,<br/>
&nbsp;&nbsp;&nbsp;&nbsp;<span class="text-emerald-400">'{'{'}"dept": "Estoque",    "action": "Inventory_Allocated",  "status": "DONE"{'}'}'</span>,<br/>
&nbsp;&nbsp;&nbsp;&nbsp;<span class="text-emerald-400">'{'{'}"dept": "Fiscal",     "action": "Invoice_Generated",    "status": "PENDING"{'}'}'</span><br/>
&nbsp;&nbsp;<span class="text-cyan-400">{']'}</span>,<br/>
&nbsp;&nbsp;<span class="text-faber-blue-light">"data_integrity"</span>: <span class="text-faber-blue-royal">true</span>,<br/>
&nbsp;&nbsp;<span class="text-faber-blue-light">"sync_latency_ms"</span>: <span class="text-faber-gold">12</span><br/>
<span class="text-faber-gold">{'}'}</span><br/>
  `;

  return (
    <section className="py-24 bg-faber-bg-surface border-y border-faber-bg-border relative overflow-hidden" id="mensura">
      <div className="absolute -right-[10%] top-[30%] w-[40%] h-[40%] bg-faber-gold/5 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <SectionHeading 
          align="center"
          eyebrow="Produto FaberSoft · ERP"
          eyebrowColor="gold"
          title={<>O pedido entra uma vez. Atravessa a empresa inteira.</>}
          subtitle="O Mensura é o ERP da FaberSoft para indústria, distribuição e atacado. Do orçamento à entrega, o mesmo dado percorre comercial, financeiro, estoque, fiscal e logística. Não são sistemas integrados por arquivo — é um sistema só."
        />

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Data Flow Interface */}
          <div className="order-2 lg:order-1 relative group" id="mensura-terminal">
            <div className="rounded-xl overflow-hidden border border-faber-bg-border shadow-2xl bg-[#060B1A]">
              <div className="flex items-center gap-2 px-4 py-2 border-b border-faber-bg-border bg-black/50">
                <div className="text-[10px] font-mono text-gray-500">mensura_data_pipeline.json</div>
              </div>
              
              <div className="p-5 font-mono text-xs text-gray-300 leading-relaxed overflow-x-auto min-h-[300px]">
                <TypedCode code={jsonCode} speed={5} delay={500} />
              </div>
            </div>
            
            {/* Overlay contextual */}
            <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-black/80 backdrop-blur-md border border-faber-bg-border rounded-xl p-5 shadow-2xl w-4/5 transform transition-all duration-1000 ${showOverlay ? 'opacity-100 scale-105' : 'opacity-0 scale-95'}`}>
              <div className="flex items-center gap-3 text-white font-mono text-sm mb-3 border-b border-white/10 pb-2">
                <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
                Tracking de Pedido Único
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs text-gray-300">
                  <span>Comercial</span>
                  <span className="text-emerald-400">✓ Aprovado</span>
                </div>
                <div className="h-px w-full bg-white/5" />
                <div className="flex items-center justify-between text-xs text-gray-300">
                  <span>Financeiro</span>
                  <span className="text-emerald-400">✓ Faturado</span>
                </div>
                <div className="h-px w-full bg-white/5" />
                <div className="flex items-center justify-between text-xs text-gray-300">
                  <span>Expedição</span>
                  <span className="text-faber-gold animate-pulse">Em separação...</span>
                </div>
              </div>
            </div>
          </div>

          {/* Flow Side */}
          <div className="order-1 lg:order-2 space-y-8">
            <div className="bg-[#060B1A] rounded-xl p-8 border border-faber-bg-border">
              <h3 className="text-xl font-bold text-white mb-6">Nenhum campo é digitado de novo.</h3>
              
              <div className="relative border-l border-faber-bg-border/60 ml-3 space-y-8">
                
                <div className="relative pl-6">
                  <div className="absolute w-3 h-3 bg-faber-blue-royal rounded-full -left-[6px] top-1.5 shadow-[0_0_10px_rgba(67,102,219,0.8)]" />
                  <h4 className="text-white font-semibold">Orçamento</h4>
                  <p className="text-sm text-gray-400 mt-1">A proposta sai com a tabela de preço do cliente já aplicada. O desconto respeita a alçada de quem está logado.</p>
                </div>
                
                <div className="relative pl-6">
                  <div className="absolute w-3 h-3 bg-faber-gold rounded-full -left-[6px] top-1.5" />
                  <h4 className="text-white font-semibold">Pedido & Financeiro</h4>
                  <p className="text-sm text-gray-400 mt-1">Aprovação automática e faturamento integrado sem redigitação de NCM, impostos ou dados do cliente.</p>
                </div>
                
                <div className="relative pl-6">
                  <div className="absolute w-3 h-3 border-2 border-emerald-500 bg-[#060B1A] rounded-full -left-[6px] top-1.5" />
                  <h4 className="text-white font-semibold">Estoque & Expedição</h4>
                  <p className="text-sm text-gray-400 mt-1">Baixa em tempo real e rastreabilidade total do que saiu e do que precisa ser produzido.</p>
                </div>
                
              </div>
              
              <div className="mt-8 pt-6 border-t border-faber-bg-border">
                <Button asLink href="https://mensura.app.br" variant="ghost">Conhecer o Mensura</Button>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
