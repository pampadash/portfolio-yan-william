import { Building2, Users, GraduationCap } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';
import { useTheme } from '../ThemeContext';

const experiences = [
  {
    icon: Users,
    role: 'Instrutor - Conselheiro Associado - Diretor de Artes',
    organization: 'Clube de Desbravadores Vozes da Aurora',
    period: 'Dez. 2024 — Mai. 2026',
    description:
      'Atuação na liderança do clube, orientando mais de 30 jovens desbravadores em atividades educacionais, recreativas e espirituais. Desenvolvimento de identidade visuais, em principal, designs do clube, campanhas de engajamento e materiais de comunicação. Também responsável pela criação e padronização de toda comunicação visual da igreja e seus departamentos. Desenvolvimento de identidades visuais, apresentações institucionais, flyers para eventos e estratégias de marketing digital.',
    highlights: ['Liderança Proativa', 'Desenvolvimento de Pessoas', 'Identidade Visual', 'Produção de Design'],
    metrics: [
      { value: '+30', label: 'jovens orientados a Cristo' },
      { value: '+70%', label: 'êxito em operação audiovisual e desenvolvimento físico-mental-espiritual' },
    ],
    accentGradient: 'linear-gradient(135deg, #006DFF, #2563EB)',
    glowColor: 'rgba(0,109,255,0.25)',
  },
  {
    icon: Building2,
    role: 'Operador Audiovisual',
    organization: 'IASD Jurunas 1 (Antiga) — IASD Batista Campos (Atual)',
    period: 'Dez. de 2024 — Presente',
    description:
      'Atuei pela Operação e Produção de Conteúdo Audiovisual pela IASD J1, em principal, pelo departamento da Sonoplastia e da Mídia, com ciclo encerrado em maio de 2026. atualmente, agora seguindo a operação e produção audiovisual na IASD ABC (Batista Campos), também por meio do departamento de Sonoplastia e da Mídia.',
    highlights: ['Design Gráfico', 'Operação Audiovisual', 'Apresentação de Slides', 'Marketing Institucional'],
    metrics: [
      { value: '+8', label: 'projetos e produções audiovisuais e gestores' },
      { value: '+40%', label: 'alcance orgânico de jovens e adolescentes para Cristo' },
    ],
    accentGradient: 'linear-gradient(135deg, #00D9FF, #006DFF)',
    glowColor: 'rgba(0,217,255,0.2)',
  },
  {
    icon: GraduationCap,
    role: 'Estudos e Formação',
    organization: 'Desenvolvimento Contínuo em Web Design e Sistemas',
    period: '2026 — Presente',
    description:
      'Atualmente em formação autodidática em Web Design com foco em HTML (avançado), CSS (básico-intermediário) e futuramente JavaScript (iniciante). Planejo cursar Sistemas de Informação com ênfase em gestão e administração, unindo design, tecnologia e estratégia empresarial. Busco projetos colaborativos e oportunidades de aprendizado prático.',
    highlights: ['HTML Avançado', 'CSS Básico-Intermediário', 'Futuro JavaScript Iniciante', 'Sistemas de Informação'],
    metrics: [
      { value: '3', label: 'tecnologias front-end em estudo' },
      { value: '100%', label: 'dedicação ao aprendizado contínuo' },
    ],
    accentGradient: 'linear-gradient(135deg, #10b981, #059669)',
    glowColor: 'rgba(16,185,129,0.25)',
  },
];

export function Experience() {
  const { theme } = useTheme();

  return (
    <section
      id="experiencia"
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
            Experiência e Formação
          </h2>
          <div
            className="w-16 h-px mx-auto mb-6"
            style={{ background: 'linear-gradient(90deg, #006DFF, #00D9FF)', boxShadow: '0 0 12px rgba(0,109,255,0.5)' }}
          />
          <p className="max-w-2xl mx-auto" style={{ color: theme === 'dark' ? '#A0A0A0' : '#6B7280', lineHeight: 1.7, fontSize: '1.05rem' }}>
            Trajetória em design gráfico, liderança, gestão e desenvolvimento contínuo em tecnologia
          </p>
        </ScrollReveal>

        <div className="space-y-8">
          {experiences.map((exp, index) => {
            const Icon = exp.icon;
            const dir = index % 2 === 0 ? 'left' : 'right';
            return (
              <ScrollReveal key={index} direction={dir} delay={index * 0.1}>
                <div className="relative flex gap-6 md:gap-8">
                  {/* Timeline indicator */}
                  <div className="flex flex-col items-center shrink-0">
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center shrink-0"
                      style={{
                        background: exp.accentGradient,
                        boxShadow: `0 0 20px ${exp.glowColor}`,
                      }}
                    >
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    {index < experiences.length - 1 && (
                      <div
                        className="w-px flex-1 mt-3"
                        style={{ background: 'linear-gradient(180deg, rgba(0,109,255,0.3), transparent)', minHeight: '32px' }}
                      />
                    )}
                  </div>

                  {/* Card */}
                  <div
                    className="flex-1 rounded-[18px] transition-all duration-300 mb-4"
                    style={{
                      padding: '28px',
                      background: theme === 'dark' ? 'rgba(255,255,255,0.025)' : 'rgba(0,0,0,0.02)',
                      border: theme === 'dark' ? '1px solid rgba(0,109,255,0.12)' : '1px solid rgba(0,109,255,0.15)',
                      boxShadow: theme === 'dark' ? '0 2px 20px rgba(0,0,0,0.35)' : '0 2px 20px rgba(0,0,0,0.05)',
                    }}
                    onMouseEnter={e => {
                      (e.currentTarget as HTMLElement).style.border = `1px solid rgba(0,109,255,0.3)`;
                      const shadow = theme === 'dark'
                        ? `0 8px 40px ${exp.glowColor}, 0 2px 20px rgba(0,0,0,0.4)`
                        : `0 8px 40px ${exp.glowColor}, 0 2px 20px rgba(0,0,0,0.1)`;
                      (e.currentTarget as HTMLElement).style.boxShadow = shadow;
                    }}
                    onMouseLeave={e => {
                      const borderColor = theme === 'dark' ? 'rgba(0,109,255,0.12)' : 'rgba(0,109,255,0.15)';
                      const shadow = theme === 'dark' ? '0 2px 20px rgba(0,0,0,0.35)' : '0 2px 20px rgba(0,0,0,0.05)';
                      (e.currentTarget as HTMLElement).style.border = `1px solid ${borderColor}`;
                      (e.currentTarget as HTMLElement).style.boxShadow = shadow;
                    }}
                  >
                    <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                      <div>
                        <h3
                          className="text-xl font-semibold mb-1"
                          style={{ color: theme === 'dark' ? '#FFFFFF' : '#111827' }}
                        >
                          {exp.role}
                        </h3>
                        <p className="text-sm font-medium" style={{ color: theme === 'dark' ? '#7BB8FF' : '#006DFF' }}>{exp.organization}</p>
                      </div>
                      <span
                        className="px-3 py-1 text-xs font-medium rounded-full shrink-0"
                        style={{
                          background: 'rgba(0,109,255,0.12)',
                          border: '1px solid rgba(0,109,255,0.25)',
                          color: '#7BB8FF',
                        }}
                      >
                        {exp.period}
                      </span>
                    </div>

                    <p className="text-sm mb-6" style={{ color: theme === 'dark' ? '#D9D9D9' : '#374151', lineHeight: 1.7 }}>
                      {exp.description}
                    </p>

                    {/* Metric badges */}
                    <div className="flex flex-wrap gap-3 mb-6">
                      {exp.metrics.map((m, i) => (
                        <div
                          key={i}
                          className="flex items-center gap-2 rounded-xl px-4 py-2"
                          style={{
                            background: 'rgba(0,109,255,0.08)',
                            border: '1px solid rgba(0,109,255,0.2)',
                          }}
                        >
                          <span
                            className="text-lg font-bold"
                            style={{
                              background: 'linear-gradient(135deg, #006DFF, #00D9FF)',
                              WebkitBackgroundClip: 'text',
                              WebkitTextFillColor: 'transparent',
                              backgroundClip: 'text',
                            }}
                          >
                            {m.value}
                          </span>
                          <span className="text-xs" style={{ color: theme === 'dark' ? '#A0A0A0' : '#6B7280' }}>{m.label}</span>
                        </div>
                      ))}
                    </div>

                    {/* Skill tags */}
                    <div className="flex flex-wrap gap-2">
                      {exp.highlights.map((highlight, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 text-xs rounded-lg"
                          style={{
                            background: theme === 'dark' ? 'rgba(255,255,255,0.04)' : 'rgba(0,0,0,0.04)',
                            border: theme === 'dark' ? '1px solid rgba(0,109,255,0.2)' : '1px solid rgba(0,109,255,0.25)',
                            color: theme === 'dark' ? '#7BB8FF' : '#006DFF',
                          }}
                        >
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
