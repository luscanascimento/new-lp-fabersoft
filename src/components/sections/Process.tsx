import React from 'react';
import { SectionHeading } from '../ui/SectionHeading';

export const Process: React.FC = () => {
  const steps = [
    { num: "01", title: "Entender", desc: "Mapeamento do problema real e da operação antes de qualquer linha de código." },
    { num: "02", title: "Especificar", desc: "Definição de arquitetura, integrações e escopo técnico necessário." },
    { num: "03", title: "Construir", desc: "Desenvolvimento com as tecnologias adequadas para segurança e escala." },
    { num: "04", title: "Validar", desc: "Homologação em ambiente controlado, testes de carga e uso prático." },
    { num: "05", title: "Evoluir", desc: "Software que cresce e se adapta junto com a sua empresa." },
  ];

  return (
    <section className="py-24 bg-faber-bg-base" id="processo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading 
          eyebrow="Nosso Processo"
          title="Engenharia com maturidade."
          subtitle="O processo não deve parecer: Briefing → Design → Código → Tchau. Mostramos acompanhamento e evolução contínua."
          align="center"
        />

        <div className="mt-16 relative">
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-px bg-faber-bg-border -translate-y-1/2" />
          
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {steps.map((step, idx) => (
              <div key={idx} className="relative z-10 flex flex-col md:items-center md:text-center group">
                <div className="w-12 h-12 rounded-full bg-[#0B1226] border border-faber-bg-border flex items-center justify-center text-faber-gold font-mono font-bold mb-4 group-hover:border-faber-gold transition-colors">
                  {step.num}
                </div>
                <h4 className="text-white font-bold text-lg mb-2">{step.title}</h4>
                <p className="text-sm text-gray-400">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
