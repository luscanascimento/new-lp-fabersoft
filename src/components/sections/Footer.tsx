import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0B1226] border-t border-faber-bg-border pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          <div className="lg:col-span-1">
            <img src={`${import.meta.env.BASE_URL}assets/brand/logo-horizontal-light.svg`} alt="FaberSoft Tecnologia" className="h-8 mb-6" />
            <p className="text-sm text-gray-400 leading-relaxed mb-6">
              Transformamos desafios complexos em software que gera resultado.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4 font-lato uppercase tracking-wider text-xs">Soluções</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><a href="#solucoes" className="hover:text-faber-blue-light transition-colors">Software sob medida</a></li>
              <li><a href="#solucoes" className="hover:text-faber-blue-light transition-colors">Integrações & APIs</a></li>
              <li><a href="#ia" className="hover:text-faber-blue-light transition-colors">Inteligência Artificial</a></li>
              <li><a href="#plataformas" className="hover:text-faber-blue-light transition-colors">Web & Mobile</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4 font-lato uppercase tracking-wider text-xs">Produtos</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><a href="#leantrack" className="hover:text-faber-blue-light transition-colors">LeanTrack MES</a></li>
              <li><a href="#mensura" className="hover:text-faber-blue-light transition-colors">Mensura ERP</a></li>
              <li><a href="#ia" className="hover:text-faber-blue-light transition-colors">Radisa IA</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4 font-lato uppercase tracking-wider text-xs">Contato</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li>Oregon Business Center, Aquarius</li>
              <li>São José dos Campos, SP - Brasil</li>
              <li className="pt-2"><a href="mailto:contato@fabersoft.com.br" className="text-faber-gold hover:text-white transition-colors">contato@fabersoft.com.br</a></li>
              <li><a href="tel:+551233023544" className="hover:text-white transition-colors">+55 12 3302-3544</a></li>
            </ul>
          </div>

        </div>

        <div className="pt-8 border-t border-faber-bg-border/60 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <p>&copy; {new Date().getFullYear()} FaberSoft Tecnologia. Todos os direitos reservados.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-gray-300">Termos de uso</a>
            <a href="#" className="hover:text-gray-300">Política de privacidade</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
