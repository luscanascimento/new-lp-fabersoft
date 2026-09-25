import React from 'react';
import { Button } from '../ui/Button';
import { ProgrammingScreensBackground } from '../ui/ProgrammingScreensBackground';

export const CTA: React.FC = () => {
  return (
    <section className="py-32 relative bg-[#060B1A] overflow-hidden" id="contato">
      <ProgrammingScreensBackground />

      <div className="absolute inset-0 bg-gradient-to-t from-[#060B1A] via-[#060B1A]/80 to-transparent z-[1]" />

      <div data-reveal="up" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white font-lato mb-6">
          Seu problema não precisa caber em um software pronto.
        </h2>
        <p className="text-xl text-gray-300 mb-10 font-light">
          Conte sobre seu projeto, desafio operacional ou ideia de produto. Nossa equipe de engenharia está pronta para entender o que você precisa.
        </p>
        <Button asLink href="mailto:contato@fabersoft.com.br" size="lg" variant="primary">
          Falar com um especialista
        </Button>
      </div>
    </section>
  );
};
