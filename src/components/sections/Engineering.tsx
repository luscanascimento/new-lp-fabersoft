import React from 'react';
import { SectionHeading } from '../ui/SectionHeading';
import { FloatingIcons } from '../ui/FloatingIcons';

export const Engineering: React.FC = () => {
  return (
    <section className="py-24 bg-faber-bg-base relative overflow-hidden" id="tecnologias">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-faber-blue-royal/5 blur-[120px] rounded-full pointer-events-none" />
      <FloatingIcons />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <SectionHeading 
          eyebrow="Engenharia sem amarras"
          title="Não começamos pela tecnologia. Começamos pelo problema."
          align="center"
          subtitle="Escolhemos tecnologia de acordo com contexto, performance, segurança, escalabilidade, manutenção e custo de evolução."
        />
        
        <div className="mt-12 grid items-stretch gap-6 lg:grid-cols-[0.72fr_1.28fr]">
          <figure data-reveal="left" className="group relative min-h-[360px] overflow-hidden rounded-xl border border-faber-bg-border shadow-2xl lg:min-h-[430px]">
            <img
              src={`${import.meta.env.BASE_URL}assets/images/engineering-factory.webp`}
              alt="Engenheiro de software trabalhando conectado a uma operação industrial"
              className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.025]"
              width="1100"
              height="1375"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#060B1A] via-[#060B1A]/10 to-transparent" aria-hidden="true" />
            <figcaption className="absolute bottom-5 left-5 right-5 text-left">
              <span className="mb-2 inline-flex items-center gap-2 rounded-full border border-white/10 bg-[#060B1A]/70 px-3 py-1 font-mono text-[9px] uppercase tracking-wider text-faber-gold backdrop-blur-md">
                Operação real
              </span>
              <p className="max-w-xs text-sm font-medium leading-relaxed text-white">
                Engenharia próxima de quem opera, produz e toma decisões.
              </p>
            </figcaption>
          </figure>

        <div data-reveal="right" className="relative w-full rounded-xl overflow-hidden border border-faber-bg-border shadow-2xl bg-[#0B1226] text-left">
           <div className="flex items-center gap-2 px-4 py-2 border-b border-faber-bg-border bg-black/50">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
              <div className="w-3 h-3 rounded-full bg-amber-500/80"></div>
              <div className="w-3 h-3 rounded-full bg-emerald-500/80"></div>
            </div>
            <div className="text-[10px] font-mono text-gray-500 ml-2">tech_stack_selection.config</div>
          </div>
          <div className="p-6 font-mono text-xs sm:text-sm text-gray-300">
            <span className="text-faber-blue-royal">const</span> techStack = {'{'}
            <br/>
            &nbsp;&nbsp;<span className="text-faber-blue-light">"frontend"</span>: [<span className="text-emerald-400">"React"</span>, <span className="text-emerald-400">"TypeScript"</span>, <span className="text-emerald-400">"Tailwind"</span>, <span className="text-emerald-400">"Next.js"</span>],
            <br/>
            &nbsp;&nbsp;<span className="text-faber-blue-light">"backend"</span>: [<span className="text-emerald-400">"Node.js"</span>, <span className="text-emerald-400">"Python"</span>, <span className="text-emerald-400">"Go"</span>, <span className="text-emerald-400">".NET"</span>],
            <br/>
            &nbsp;&nbsp;<span className="text-faber-blue-light">"mobile"</span>: [<span className="text-emerald-400">"React Native"</span>, <span className="text-emerald-400">"Flutter"</span>],
            <br/>
            &nbsp;&nbsp;<span className="text-faber-blue-light">"database"</span>: [<span className="text-emerald-400">"PostgreSQL"</span>, <span className="text-emerald-400">"MongoDB"</span>, <span className="text-emerald-400">"Redis"</span>],
            <br/>
            &nbsp;&nbsp;<span className="text-faber-blue-light">"infrastructure"</span>: [<span className="text-emerald-400">"AWS"</span>, <span className="text-emerald-400">"Docker"</span>, <span className="text-emerald-400">"Kubernetes"</span>]
            <br/>
            {'}'};
            <br/><br/>
            <span className="text-gray-500">// We select the stack based on the problem, not the hype.</span>
            <br/>
            <span className="text-faber-blue-royal">function</span> <span className="text-faber-gold">solve</span>(problemContext) {'{'}
            <br/>
            &nbsp;&nbsp;<span className="text-faber-blue-royal">return</span> <span className="text-cyan-400">architectSolution</span>(problemContext, techStack);
            <br/>
            {'}'}
          </div>
        </div>
        </div>
      </div>
    </section>
  );
};
