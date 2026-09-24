import React, { useState, useEffect } from 'react';
import { navigationLinks } from '../../data/brand';
import { Button } from '../ui/Button';
import { Menu, X, ArrowRight, ShieldCheck } from 'lucide-react';

export const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-[#060B1A]/90 backdrop-blur-md border-b border-faber-bg-border shadow-xl shadow-black/20 py-3'
            : 'bg-gradient-to-b from-[#060B1A] via-[#060B1A]/80 to-transparent py-5'
        }`}
      >
        <div className="w-full px-6 md:px-12">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a 
              href="#" 
              className="flex items-center gap-2 group focus:outline-none focus:ring-2 focus:ring-faber-blue rounded-md p-1"
              aria-label="FaberSoft Tecnologia — Início"
            >
              <img
                src="/assets/brand/logo-horizontal-light.svg"
                alt="FaberSoft Tecnologia"
                className="h-8 sm:h-9 w-auto object-contain transition-transform duration-200 group-hover:scale-[1.02]"
                width="172"
                height="43"
              />
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden xl:flex items-center gap-1 2xl:gap-2" aria-label="Navegação Principal">
              {navigationLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="px-3 py-1.5 text-xs xl:text-sm font-medium text-gray-300 hover:text-white transition-colors duration-200 rounded-md hover:bg-white/5 relative group"
                >
                  <span>{link.label}</span>
                  {link.badge && (
                    <span className="ml-1.5 px-1.5 py-0.2 text-[10px] font-semibold uppercase tracking-wider bg-faber-gold/20 text-faber-gold rounded border border-faber-gold/30">
                      {link.badge}
                    </span>
                  )}
                  <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-faber-blue-royal scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left" />
                </a>
              ))}
            </nav>

            {/* Desktop Actions */}
            <div className="hidden xl:flex items-center gap-4">
              <div className="hidden xl:flex items-center gap-2 text-xs text-emerald-400 bg-emerald-950/40 border border-emerald-500/20 px-2.5 py-1 rounded-full">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span>Operação Ativa</span>
              </div>
              <Button
                asLink
                href="#contato"
                variant="primary"
                size="sm"
                icon={<ArrowRight className="w-3.5 h-3.5" />}
              >
                Fale com especialista
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex items-center gap-2 xl:hidden">
              <a
                href="#contato"
                className="text-xs font-semibold px-3 py-1.5 bg-faber-blue hover:bg-faber-blue-denim text-white rounded-md transition-colors"
              >
                Contato
              </a>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-md text-gray-300 hover:text-white hover:bg-white/5 focus:outline-none focus:ring-2 focus:ring-faber-blue"
                aria-expanded={mobileMenuOpen}
                aria-controls="mobile-nav"
                aria-label={mobileMenuOpen ? 'Fechar menu' : 'Abrir menu de navegação'}
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          id="mobile-nav"
          className="fixed inset-0 z-40 xl:hidden bg-[#060B1A]/95 backdrop-blur-xl pt-24 px-6 pb-8 flex flex-col justify-between overflow-y-auto animate-in fade-in duration-200"
          role="dialog"
          aria-modal="true"
          aria-label="Menu móvel"
        >
          <div className="space-y-2 divide-y divide-faber-bg-border/60">
            <div className="pb-4 space-y-1">
              {navigationLinks.map((link, idx) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between py-3 px-3 text-base font-medium text-gray-200 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
                >
                  <span className="flex items-center gap-3">
                    <span className="text-xs font-mono text-faber-blue-royal">0{idx + 1}</span>
                    <span>{link.label}</span>
                  </span>
                  {link.badge && (
                    <span className="px-2 py-0.5 text-xs font-semibold uppercase bg-faber-gold/20 text-faber-gold rounded border border-faber-gold/30">
                      {link.badge}
                    </span>
                  )}
                </a>
              ))}
            </div>

            <div className="pt-6 space-y-4">
              <div className="flex items-center gap-2 text-xs text-gray-400">
                <ShieldCheck className="w-4 h-4 text-faber-blue-royal" />
                <span>São José dos Campos, SP • Desde 2018</span>
              </div>
              <Button
                asLink
                href="#contato"
                variant="primary"
                size="lg"
                className="w-full text-center"
                icon={<ArrowRight className="w-4 h-4" />}
                onClick={() => setMobileMenuOpen(false)}
              >
                Fale com um Especialista
              </Button>
            </div>
          </div>

          <div className="pt-8 border-t border-faber-bg-border text-center text-xs text-gray-500">
            FaberSoft Tecnologia • Transformando desafios complexos em software
          </div>
        </div>
      )}
    </>
  );
};
