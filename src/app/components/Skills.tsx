import { Palette, FileText, PresentationIcon, TrendingUp, Briefcase, Users, Code } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';
import { useTheme } from '../ThemeContext';

const skills = [
  {
    icon: Palette,
    title: 'Identidade Visual Estratégica',
    description: 'Desenvolvo logos, paletas de cores, tipografia e materiais de marca que comunicam a essência do seu negócio',
    accentColor: '#006DFF',
    glowColor: 'rgba(0,109,255,0.25)',
    gradient: 'linear-gradient(135deg, #006DFF, #2563EB)',
  },
  {
    icon: FileText,
    title: 'Design de Comunicação Visual',
    description: 'Flyers, banners e materiais promocionais que capturam atenção e transmitem sua mensagem com clareza',
    accentColor: '#d97706',
    glowColor: 'rgba(217,119,6,0.25)',
    gradient: 'linear-gradient(135deg, #d97706, #f59e0b)',
  },
  {
    icon: PresentationIcon,
    title: 'Apresentações Profissionais',
    description: 'Slides institucionais e comerciais com design sofisticado que engajam e convencem seu público',
    accentColor: '#00D9FF',
    glowColor: 'rgba(0,217,255,0.25)',
    gradient: 'linear-gradient(135deg, #00D9FF, #006DFF)',
  },
  {
    icon: TrendingUp,
    title: 'Estratégia de Marketing',
    description: 'Planejamento completo de comunicação visual com calendário editorial e diretrizes para redes sociais',
    accentColor: '#f97316',
    glowColor: 'rgba(249,115,22,0.25)',
    gradient: 'linear-gradient(135deg, #f97316, #ea580c)',
  },
  {
    icon: Briefcase,
    title: 'Gestão de Projetos',
    description: 'Administração eficiente de processos criativos com foco em prazos, qualidade e resultados',
    accentColor: '#6366f1',
    glowColor: 'rgba(99,102,241,0.25)',
    gradient: 'linear-gradient(135deg, #6366f1, #4f46e5)',
  },
  {
    icon: Users,
    title: 'Liderança & Desenvolvimento',
    description: 'Experiência em gestão de equipes criativas, instrução e desenvolvimento de pessoas',
    accentColor: '#0ea5e9',
    glowColor: 'rgba(14,165,233,0.25)',
    gradient: 'linear-gradient(135deg, #0ea5e9, #006DFF)',
  },
  {
    icon: Code,
    title: 'Projetos Web em Aprendizado',
    description: 'Sites institucionais simples desenvolvidos com HTML/CSS. Aceito projetos e parcerias para aprender e aplicar conhecimentos de front-end',
    accentColor: '#10b981',
    glowColor: 'rgba(16,185,129,0.25)',
    gradient: 'linear-gradient(135deg, #10b981, #059669)',
  },
];

const dirFor = (index: number): 'left' | 'up' | 'right' =>
  index % 3 === 0 ? 'left' : index % 3 === 1 ? 'up' : 'right';

export function Skills() {
  const { theme } = useTheme();

  return (
    <section
      id="habilidades"
      className="py-24 scroll-mt-16 transition-colors duration-300"
      style={{ background: theme === 'dark' ? '#050505' : '#f8fafc' }}
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
            Serviços Profissionais
          </h2>
          <div
            className="w-16 h-px mx-auto mb-6"
            style={{ background: 'linear-gradient(90deg, #006DFF, #00D9FF)', boxShadow: '0 0 12px rgba(0,109,255,0.5)' }}
          />
          <p className="max-w-2xl mx-auto" style={{ color: theme === 'dark' ? '#A0A0A0' : '#6B7280', lineHeight: 1.7, fontSize: '1.05rem' }}>
            Soluções criativas, estratégicas e tecnológicas para igrejas, organizações e empreendedores que
            desejam fortalecer sua identidade visual e presença digital. Aceito projetos colaborativos que me ajudem a evoluir tecnicamente.
          </p>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <ScrollReveal key={index} direction={dirFor(index)} delay={index * 0.07}>
                <div
                  className="group flex flex-col h-full rounded-[18px] transition-all duration-300"
                  style={{
                    padding: '28px',
                    background: theme === 'dark' ? 'rgba(255,255,255,0.025)' : 'rgba(0,0,0,0.02)',
                    border: theme === 'dark' ? '1px solid rgba(0,109,255,0.12)' : '1px solid rgba(0,109,255,0.15)',
                    boxShadow: theme === 'dark' ? '0 2px 20px rgba(0,0,0,0.35)' : '0 2px 20px rgba(0,0,0,0.05)',
                  }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLElement).style.border = `1px solid rgba(0,109,255,0.35)`;
                    const shadow = theme === 'dark'
                      ? `0 8px 40px ${skill.glowColor}, 0 2px 20px rgba(0,0,0,0.5)`
                      : `0 8px 40px ${skill.glowColor}, 0 2px 20px rgba(0,0,0,0.1)`;
                    (e.currentTarget as HTMLElement).style.boxShadow = shadow;
                    (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)';
                  }}
                  onMouseLeave={e => {
                    const borderColor = theme === 'dark' ? 'rgba(0,109,255,0.12)' : 'rgba(0,109,255,0.15)';
                    const shadow = theme === 'dark' ? '0 2px 20px rgba(0,0,0,0.35)' : '0 2px 20px rgba(0,0,0,0.05)';
                    (e.currentTarget as HTMLElement).style.border = `1px solid ${borderColor}`;
                    (e.currentTarget as HTMLElement).style.boxShadow = shadow;
                    (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
                  }}
                >
                  <div
                    className="inline-flex p-3 rounded-xl mb-5 shrink-0 w-fit"
                    style={{ background: skill.gradient, boxShadow: `0 4px 16px ${skill.glowColor}` }}
                  >
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <h3
                    className="font-semibold text-lg mb-3"
                    style={{ color: theme === 'dark' ? '#FFFFFF' : '#111827' }}
                  >
                    {skill.title}
                  </h3>
                  <p className="text-sm flex-1 mb-6" style={{ color: theme === 'dark' ? '#A0A0A0' : '#6B7280', lineHeight: 1.65 }}>
                    {skill.description}
                  </p>
                  <a
                    href="#contato"
                    className="inline-flex items-center justify-center font-semibold text-sm transition-all duration-200"
                    style={{
                      height: '44px',
                      borderRadius: '10px',
                      border: `1px solid ${skill.accentColor}40`,
                      color: skill.accentColor,
                      background: `${skill.accentColor}0D`,
                    }}
                    onMouseEnter={e => {
                      (e.currentTarget as HTMLElement).style.background = `${skill.accentColor}1A`;
                      (e.currentTarget as HTMLElement).style.borderColor = skill.accentColor;
                      (e.currentTarget as HTMLElement).style.boxShadow = `0 0 16px ${skill.accentColor}33`;
                    }}
                    onMouseLeave={e => {
                      (e.currentTarget as HTMLElement).style.background = `${skill.accentColor}0D`;
                      (e.currentTarget as HTMLElement).style.borderColor = `${skill.accentColor}40`;
                      (e.currentTarget as HTMLElement).style.boxShadow = 'none';
                    }}
                  >
                    Quero este serviço
                  </a>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
