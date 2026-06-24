import { Users, Award, Lightbulb, Heart, Briefcase } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';
import { useTheme } from '../ThemeContext';

const timelineItems = [
  { year: 'Dez/2024', label: 'Início pelo Clube Vozes da Aurora', desc: 'Primeiros projetos voluntários de design, liderança e desenvolvimento, incluindo biblioteca virtual simples criada com HTML/CSS' },
  { year: '2025', label: 'Consolidação em Design e Liderança', desc: 'Firmado como Diretor de Artes, Conselheiro e Instrutor, desenvolvendo identidades visuais e liderando equipes' },
  { year: 'Maio/2026', label: 'Início dos Estudos em Web Design', desc: 'Começo do aprendizado estruturado em HTML (avançado), CSS (básico-intermediário) e preparação para JavaScript' },
  { year: '2026', label: 'Momento Atual + Futuro Próximo', desc: 'Cursarei Sistemas de Informação com foco em gestão e administração, unindo design, tecnologia e estratégia' },
];

export function About() {
  const { theme } = useTheme();

  return (
    <section
      id="sobre"
      className="py-24 scroll-mt-16 transition-colors duration-300"
      style={{ background: theme === 'dark' ? '#0A0A0A' : '#ffffff' }}
    >
      <div className="max-w-6xl mx-auto px-6">

        <ScrollReveal direction="up" className="text-center mb-16">
          <h2
            className="text-5xl font-bold mb-4"
            style={{
              letterSpacing: '-0.02em',
              color: theme === 'dark' ? '#FFFFFF' : '#111827',
            }}
          >
            Sobre Mim
          </h2>
          <div
            className="w-16 h-px mx-auto mb-4"
            style={{ background: 'linear-gradient(90deg, #006DFF, #00D9FF)', boxShadow: '0 0 12px rgba(0,109,255,0.5)' }}
          />
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-16 items-start mb-20">
          {/* Left — Text */}
          <div>
            <ScrollReveal direction="left" delay={0.05}>
              <h3
                className="text-sm font-semibold uppercase tracking-widest mb-2"
                style={{ color: '#00D9FF' }}
              >
                Quem sou?
              </h3>
              <p className="text-lg mb-8" style={{ color: theme === 'dark' ? '#D9D9D9' : '#374151', lineHeight: 1.7 }}>
                Sou Yan William, um jovem designer gráfico em transição para a área de Sistemas de Informação, com interesse em combinar design, desenvolvimento web e gestão. Desde 2024 atuo em projetos voluntários na{' '}
                <span className="font-semibold" style={{ color: theme === 'dark' ? '#7BB8FF' : '#006DFF' }}>
                  Igreja Adventista do Sétimo Dia
                </span>
                , liderando equipes criativas e desenvolvendo identidades visuais. Atualmente, estou no início dos meus estudos em Web Design, com conhecimento avançado em HTML, básico-intermediário em CSS, e futuramente iniciando JavaScript.
              </p>
            </ScrollReveal>

            <ScrollReveal direction="left" delay={0.15}>
              <h3
                className="text-sm font-semibold uppercase tracking-widest mb-2"
                style={{ color: '#00D9FF' }}
              >
                Missão:
              </h3>
              <p className="text-lg mb-8" style={{ color: theme === 'dark' ? '#D9D9D9' : '#374151', lineHeight: 1.7 }}>
                Minha missão é combinar criatividade, tecnologia e estratégia para entregar soluções visuais e digitais que
                refletem valores e geram impacto real, além de contribuir para o meu aprendizado contínuo. 
              </p>
            </ScrollReveal>

            <ScrollReveal direction="left" delay={0.25}>
              <h3
                className="text-sm font-semibold uppercase tracking-widest mb-2"
                style={{ color: '#00D9FF' }}
              >
                Valores:
              </h3>
              <p className="text-lg" style={{ color: theme === 'dark' ? '#D9D9D9' : '#374151', lineHeight: 1.7 }}>
                Criatividade, liderança, estratégia, gestão, administração e fé orientam meu trabalho. Atuei como{' '}
                <span className="font-semibold" style={{ color: theme === 'dark' ? '#7BB8FF' : '#006DFF' }}>
                  Instrutor, Conselheiro Associado e Diretor de Artes
                </span>{' '}
                no Clube de Desbravadores Vozes da Aurora, combinando design com gestão e desenvolvimento de pessoas.
              </p>
            </ScrollReveal>
          </div>

          {/* Right — Value Cards */}
          <div className="space-y-4">
            {[
              {
                icon: Lightbulb,
                title: 'Criatividade',
                desc: 'Soluções visuais inovadoras que capturam a essência da sua marca',
                gradient: 'linear-gradient(135deg, #006DFF, #2563EB)',
                glow: 'rgba(0,109,255,0.3)',
                hoverBorder: 'rgba(0,109,255,0.4)',
                delay: 0.1,
              },
              {
                icon: Users,
                title: 'Liderança',
                desc: 'Experiência em gestão de equipes e desenvolvimento de pessoas',
                gradient: 'linear-gradient(135deg, #d97706, #f59e0b)',
                glow: 'rgba(217,119,6,0.3)',
                hoverBorder: 'rgba(217,119,6,0.4)',
                delay: 0.2,
              },
              {
                icon: Award,
                title: 'Estratégia',
                desc: 'Planejamento estratégico de marketing com foco em resultados mensuráveis',
                gradient: 'linear-gradient(135deg, #00D9FF, #006DFF)',
                glow: 'rgba(0,217,255,0.3)',
                hoverBorder: 'rgba(0,217,255,0.4)',
                delay: 0.3,
              },
              {
                icon: Briefcase,
                title: 'Gestão e Administração',
                desc: 'Competências em gestão de projetos, administração e organização estratégica',
                gradient: 'linear-gradient(135deg, #10b981, #059669)',
                glow: 'rgba(16,185,129,0.3)',
                hoverBorder: 'rgba(16,185,129,0.4)',
                delay: 0.35,
              },
              {
                icon: Heart,
                title: 'Fé',
                desc: 'Propósito, princípios e valores cristãos que guiam cada decisão criativa e profissional',
                gradient: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
                glow: 'rgba(99,102,241,0.3)',
                hoverBorder: 'rgba(99,102,241,0.4)',
                delay: 0.4,
              },
            ].map(({ icon: Icon, title, desc, gradient, glow, hoverBorder, delay }, i) => (
              <ScrollReveal key={i} direction="right" delay={delay}>
                <div
                  className="flex items-start gap-4 rounded-[18px] transition-all duration-300 cursor-default"
                  style={{
                    padding: '22px 24px',
                    background: theme === 'dark' ? 'rgba(255,255,255,0.02)' : 'rgba(0,0,0,0.02)',
                    border: theme === 'dark' ? '1px solid rgba(0,109,255,0.12)' : '1px solid rgba(0,109,255,0.15)',
                    boxShadow: theme === 'dark' ? '0 2px 16px rgba(0,0,0,0.3)' : '0 2px 16px rgba(0,0,0,0.05)',
                  }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLElement).style.border = `1px solid ${hoverBorder}`;
                    (e.currentTarget as HTMLElement).style.boxShadow = theme === 'dark'
                      ? `0 4px 24px ${glow}, 0 2px 16px rgba(0,0,0,0.4)`
                      : `0 4px 24px ${glow}, 0 2px 16px rgba(0,0,0,0.1)`;
                  }}
                  onMouseLeave={e => {
                    const borderColor = theme === 'dark' ? 'rgba(0,109,255,0.12)' : 'rgba(0,109,255,0.15)';
                    const shadow = theme === 'dark' ? '0 2px 16px rgba(0,0,0,0.3)' : '0 2px 16px rgba(0,0,0,0.05)';
                    (e.currentTarget as HTMLElement).style.border = `1px solid ${borderColor}`;
                    (e.currentTarget as HTMLElement).style.boxShadow = shadow;
                  }}
                >
                  <div
                    className="p-3 rounded-xl shrink-0"
                    style={{ background: gradient, boxShadow: `0 4px 12px ${glow}` }}
                  >
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3
                      className="font-semibold text-base mb-1"
                      style={{ color: theme === 'dark' ? '#FFFFFF' : '#111827' }}
                    >
                      {title}
                    </h3>
                    <p className="text-sm" style={{ color: theme === 'dark' ? '#A0A0A0' : '#6B7280', lineHeight: 1.6 }}>{desc}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>

        {/* Timeline */}
        <ScrollReveal direction="up" delay={0.1}>
          <div
            className="rounded-[18px] p-8 md:p-10"
            style={{
              background: theme === 'dark' ? 'rgba(255,255,255,0.02)' : 'rgba(0,0,0,0.02)',
              border: theme === 'dark' ? '1px solid rgba(0,109,255,0.12)' : '1px solid rgba(0,109,255,0.15)',
            }}
          >
            <h3
              className="text-sm font-semibold uppercase tracking-widest mb-8 text-center"
              style={{ color: '#00D9FF' }}
            >
              Minha Trajetória — Do Design à Tecnologia
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {timelineItems.map((item, i) => (
                <div key={i} className="relative flex flex-col">
                  {/* Connector line (hidden on last) */}
                  {i < timelineItems.length - 1 && (
                    <div
                      className="hidden lg:block absolute top-3 left-full w-full h-px"
                      style={{ background: 'linear-gradient(90deg, rgba(0,109,255,0.4), transparent)', zIndex: 0 }}
                    />
                  )}
                  <div className="flex items-center gap-3 mb-3">
                    <div
                      className="w-6 h-6 rounded-full flex items-center justify-center shrink-0"
                      style={{
                        background: 'linear-gradient(135deg, #006DFF, #00D9FF)',
                        boxShadow: '0 0 12px rgba(0,109,255,0.5)',
                      }}
                    >
                      <div className="w-2 h-2 rounded-full bg-white" />
                    </div>
                    <span
                      className="text-sm font-bold"
                      style={{ color: '#006DFF' }}
                    >
                      {item.year}
                    </span>
                  </div>
                  <p
                    className="font-semibold text-sm mb-1"
                    style={{ color: theme === 'dark' ? '#FFFFFF' : '#111827' }}
                  >
                    {item.label}
                  </p>
                  <p className="text-xs" style={{ color: theme === 'dark' ? '#717182' : '#6B7280', lineHeight: 1.5 }}>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
