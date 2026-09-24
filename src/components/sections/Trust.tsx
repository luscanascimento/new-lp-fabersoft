import React from 'react';

export const Trust: React.FC = () => {
  const clients = [
    "Imbera Brasil", "Grupo NTK", "Uninter", "Orbi Química", "Camaco",
    "Grupo ITS", "Joy Tubos", "Brasil Autos", "RDC Construtora", "Inorgan",
    "BRA Alumínios", "HI Engenharia", "Martelo Leilões", "Uchoas Contabilidade",
    "HiLicitá", "Plasdoni", "Sata Brasil", "Conexão Ind", "Lumise",
    "LimaLite Mineradora", "Valor Engenharia", "Capricho Franchising",
    "Culligan", "Ensina Radiólogos", "Sapia Inteligência", "Proact Ing",
    "WeMake", "Indaial Papel", "Amvian", "More Tecnologia", "CottonBaby",
    "Allied Titanium", "Stage2", "Tamura", "DLA Pharmaceutical",
    "Aliança Metalúrgica", "Qualyplas", "Softys Brasil", "Ruston Alimentos",
    "Ampri Indústria", "IBBL", "Sua Baze"
  ];

  return (
    <section className="py-16 md:py-20 border-b border-faber-bg-border bg-faber-bg-base" id="confianca">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10 text-center">
        <div className="inline-flex items-center gap-2 mb-3 justify-center">
          <span className="h-px w-6 bg-faber-blue-royal" aria-hidden="true" />
          <span className="text-xs md:text-sm font-semibold tracking-wider uppercase font-poppins text-faber-blue-royal">
            Tecnologia em operações de verdade
          </span>
          <span className="h-px w-6 bg-faber-blue-royal" aria-hidden="true" />
        </div>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Empresas de diferentes segmentos confiam na FaberSoft para transformar processos e conectar informações.
        </p>

        {/* Google Reviews Badge */}
        <div data-reveal="up" className="flex justify-center mt-8">
          <a 
            href="https://www.google.com/search?q=Fabersoft+Tecnologia" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-4 bg-[#0B1226] border border-faber-bg-border hover:border-faber-blue-royal/50 transition-colors rounded-full py-2.5 px-6 shadow-xl hover:shadow-faber-blue-royal/10 group cursor-pointer"
          >
            <div className="bg-white p-1 rounded-full">
              <img src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg" alt="Google" className="w-5 h-5" />
            </div>
            <div className="flex flex-col items-start">
              <div className="flex items-center gap-1 text-faber-gold mb-0.5">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg key={star} className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                ))}
                <span className="text-white font-bold text-sm ml-1">5.0</span>
              </div>
              <span className="text-[11px] text-gray-400 group-hover:text-gray-300 transition-colors">
                <strong className="text-gray-300 group-hover:text-white">38 avaliações</strong> reais
              </span>
            </div>
          </a>
        </div>
      </div>

      {/* Marquee Container */}
      <div className="relative flex overflow-x-hidden w-full group mask-image-fade">
        <div className="py-2 animate-marquee whitespace-nowrap flex items-center">
          {clients.map((client, idx) => (
            <React.Fragment key={idx}>
              <span className="mx-6 text-sm font-semibold text-gray-500 uppercase tracking-widest">{client}</span>
              <span className="w-1.5 h-1.5 rounded-full bg-faber-blue-royal/50" aria-hidden="true" />
            </React.Fragment>
          ))}
          {/* Duplicate for seamless loop */}
          {clients.map((client, idx) => (
            <React.Fragment key={`dup-${idx}`}>
              <span className="mx-6 text-sm font-semibold text-gray-500 uppercase tracking-widest">{client}</span>
              <span className="w-1.5 h-1.5 rounded-full bg-faber-blue-royal/50" aria-hidden="true" />
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};
