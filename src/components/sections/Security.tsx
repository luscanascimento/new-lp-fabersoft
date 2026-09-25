import React from 'react';
import {
  Activity,
  Check,
  Fingerprint,
  KeyRound,
  LockKeyhole,
  Radar,
  ShieldCheck,
} from 'lucide-react';
import { SectionHeading } from '../ui/SectionHeading';

const safeguards = [
  {
    icon: KeyRound,
    title: 'Acesso sob controle',
    description: 'Permissões por perfil, autenticação e princípio do menor privilégio desde a arquitetura.',
  },
  {
    icon: Fingerprint,
    title: 'Dados protegidos',
    description: 'Criptografia, isolamento e tratamento responsável das informações em cada camada.',
  },
  {
    icon: Radar,
    title: 'Operação observável',
    description: 'Logs, alertas e rastreabilidade para identificar comportamentos anormais com rapidez.',
  },
];

const controls = [
  { label: 'Identidade e acesso', status: 'Protegido' },
  { label: 'Tráfego de dados', status: 'Criptografado' },
  { label: 'Eventos críticos', status: 'Monitorados' },
];

export const Security: React.FC = () => {
  return (
    <section
      id="seguranca"
      className="relative overflow-hidden border-y border-faber-bg-border bg-[#081023] py-24 md:py-32"
    >
      <div className="absolute inset-0 security-grid opacity-50" aria-hidden="true" />
      <div className="absolute left-1/2 top-0 h-72 w-[44rem] -translate-x-1/2 rounded-full bg-faber-blue-royal/10 blur-[110px]" aria-hidden="true" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-[1.02fr_.98fr] lg:gap-20">
          <div>
            <SectionHeading
              eyebrow="Segurança por princípio"
              title={<>Software confiável começa <span className="text-faber-blue-light">antes da primeira linha de código.</span></>}
              subtitle="Segurança não é uma camada adicionada no fim. Ela orienta decisões de arquitetura, acesso, dados, infraestrutura e evolução do produto."
            />

            <figure data-reveal="up" className="group relative mb-5 h-44 overflow-hidden rounded-2xl border border-faber-bg-borderLight/70 bg-faber-bg-surface shadow-xl sm:h-48">
              <img
                src={`${import.meta.env.BASE_URL}assets/images/secure-infrastructure.webp`}
                alt="Especialista inspecionando infraestrutura segura em um data center"
                className="h-full w-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.025]"
                width="1440"
                height="960"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#060B1A]/90 via-[#060B1A]/35 to-transparent" aria-hidden="true" />
              <figcaption className="absolute bottom-4 left-4 max-w-[230px] text-sm font-medium leading-snug text-white sm:bottom-5 sm:left-5">
                Infraestrutura acompanhada por pessoas, processos e tecnologia.
              </figcaption>
            </figure>

            <div className="grid gap-4 sm:grid-cols-3">
              {safeguards.map(({ icon: Icon, title, description }, index) => (
                <article
                  key={title}
                  data-reveal="up"
                  style={{ transitionDelay: `${100 + index * 90}ms` }}
                  className="security-feature group rounded-2xl border border-faber-bg-border bg-faber-bg-surface/70 p-5 backdrop-blur-sm"
                >
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl border border-faber-blue-royal/30 bg-faber-blue-royal/10 text-faber-blue-light transition-transform duration-500 group-hover:-translate-y-1 group-hover:rotate-3">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <h3 className="mb-2 text-sm font-semibold text-white">{title}</h3>
                  <p className="text-xs leading-relaxed text-gray-400">{description}</p>
                </article>
              ))}
            </div>

            <div data-reveal="up" style={{ transitionDelay: '370ms' }} className="mt-7 flex items-start gap-3 rounded-xl border border-emerald-500/15 bg-emerald-500/[0.04] p-4">
              <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-emerald-400" aria-hidden="true" />
              <p className="text-sm leading-relaxed text-gray-300">
                Cada projeto recebe controles proporcionais ao contexto, aos riscos e à criticidade da operação.
              </p>
            </div>
          </div>

          <div data-reveal="right" className="relative mx-auto w-full max-w-[560px]">
            <div className="absolute -inset-8 rounded-full bg-faber-blue-royal/[0.06] blur-3xl" aria-hidden="true" />

            <div className="security-console relative overflow-hidden rounded-[1.75rem] border border-faber-bg-borderLight/70 bg-[#070D1C]/95 p-5 shadow-2xl shadow-black/60 sm:p-7">
              <div className="flex items-center justify-between border-b border-faber-bg-border/70 pb-4">
                <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.18em] text-gray-400 sm:text-xs">
                  <Activity className="h-4 w-4 text-faber-blue-royal" aria-hidden="true" />
                  Security control center
                </div>
                <span className="flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-2.5 py-1 font-mono text-[9px] text-emerald-400 sm:text-[10px]">
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
                  SISTEMA ÍNTEGRO
                </span>
              </div>

              <div className="relative my-7 flex min-h-[280px] items-center justify-center overflow-hidden rounded-2xl border border-faber-bg-border/60 bg-[#050A16] sm:min-h-[330px]">
                <div className="security-scan" aria-hidden="true" />
                <div className="absolute inset-0 security-radar-grid opacity-50" aria-hidden="true" />

                <div className="security-orbit security-orbit-outer" aria-hidden="true">
                  <span className="security-node security-node-blue" />
                  <span className="security-node security-node-gold" />
                </div>
                <div className="security-orbit security-orbit-inner" aria-hidden="true">
                  <span className="security-node security-node-green" />
                </div>

                <div className="security-shield relative z-10 flex h-28 w-28 items-center justify-center rounded-[2rem] border border-faber-blue-royal/40 bg-gradient-to-br from-faber-blue-royal/25 to-faber-bg-surface shadow-[0_0_55px_rgba(67,102,219,.22)] sm:h-32 sm:w-32">
                  <ShieldCheck className="h-14 w-14 text-faber-blue-light sm:h-16 sm:w-16" strokeWidth={1.35} aria-hidden="true" />
                  <span className="absolute -bottom-3 flex items-center gap-1.5 rounded-full border border-emerald-500/25 bg-[#07140f] px-3 py-1 font-mono text-[9px] text-emerald-300">
                    <LockKeyhole className="h-3 w-3" /> VERIFICADO
                  </span>
                </div>

                <span className="data-packet packet-one" aria-hidden="true">AUTH</span>
                <span className="data-packet packet-two" aria-hidden="true">TLS</span>
                <span className="data-packet packet-three" aria-hidden="true">LOG</span>
              </div>

              <div className="space-y-2.5">
                {controls.map((control, index) => (
                  <div key={control.label} className="group flex items-center justify-between rounded-xl border border-white/[0.05] bg-white/[0.025] px-4 py-3 transition-colors hover:border-faber-blue-royal/25 hover:bg-faber-blue-royal/[0.05]">
                    <div className="flex items-center gap-3 text-xs text-gray-300 sm:text-sm">
                      <span className="flex h-6 w-6 items-center justify-center rounded-md bg-emerald-500/10 text-emerald-400">
                        <Check className="h-3.5 w-3.5" strokeWidth={2.5} />
                      </span>
                      {control.label}
                    </div>
                    <span className="font-mono text-[9px] uppercase tracking-wider text-gray-500 sm:text-[10px]">{control.status}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="absolute -right-3 top-24 hidden items-center gap-2 rounded-lg border border-faber-bg-border bg-[#0B1226]/95 px-3 py-2 font-mono text-[9px] text-gray-400 shadow-xl backdrop-blur md:flex">
              <span className="h-1.5 w-1.5 rounded-full bg-faber-gold" />
              threat_check: passed
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
