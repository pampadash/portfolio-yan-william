import { useState } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { RotateCcw, ExternalLink } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';
import { useTheme } from '../ThemeContext';
import bibliotecaImg from '../../imports/image.png';
import visualidentify from '../../imports/visualidentify.png'
import slidesapresentation from '../../imports/slidesapresentation.jpeg'

const projects = [
  {
    title: 'Identidade Visual Completa',
    category: 'Branding',
    type: 'design',
    description: 'Sistema de identidade visual estratégico para organizações com impacto duradouro.',
    image: visualidentify,
    challenge: 'A organização não tinha identidade visual consolidada, gerando inconsistência na comunicação.',
    solution: 'Desenvolvimento de logo, paleta de cores, tipografia e manual de marca. Processo baseado em pesquisa de público e análise de concorrência.',
    result: 'Marca coesa aplicada consistentemente em todos os pontos de contato, com reconhecimento engajado.',
    tags: ['Logo', 'Paleta de Cores', 'Tipografia', 'Manual de Marca'],
    accent: 'from-blue-600 to-cyan-600',
    accentHex: '#006DFF',
    glowColor: 'rgba(0,109,255,0.3)',
    projectUrl: 'https://drive.google.com/file/d/1FUDwLHiDuPqIyZs0BFZmIg3HAlnDhhgN/view?usp=drivesdk',
  },
  {
    title: 'Design de Publicidade',
    category: 'Marketing & Identidade',
    type: 'design',
    description: 'Imagens e estratégia de comunicação visual para diversos nichos e campanhas.',
    image: 'https://image2url.com/r2/default/images/1769109707561-76f2e991-05cc-46db-9d27-d5645c3bd124.jpeg',
    challenge: 'Criar identidade para organizações diversas e aumentar o engajamento digital de forma mensurável.',
    solution: 'Pesquisa com membros, desenvolvimento de logo e paleta, planejamento de campanhas para redes sociais.',
    result: '+50% de êxito na captação de leads e +30% de resultados em engajamento nas mídias digitais.',
    tags: ['Design Gráfico', 'Engajamento', 'Campanhas', 'Branding'],
    accent: 'from-amber-600 to-orange-600',
    accentHex: '#d97706',
    glowColor: 'rgba(217,119,6,0.3)',
    projectUrl: '#contato',
  },
  {
    title: 'Apresentações de Slides',
    category: 'Design de Slides',
    type: 'design',
    description: 'Apresentações profissionais para comunicação corporativa, eventos, trabalhos educacionais, etc.',
    image: slidesapresentation,
    challenge: 'Profisionalização de apresentações para diversas aplicações no âmbito comunicativo e instru.',
    solution: 'Produção de slides para múltiplos contextos com hierarquia visual clara.',
    result: 'Apresentações bem aplicadas com design de slides para diversos contextos e padronização visual completa.',
    tags: ['PowerPoint', 'Slides', 'Design', 'Comunicação'],
    accent: 'from-cyan-600 to-blue-600',
    accentHex: '#00D9FF',
    glowColor: 'rgba(0,217,255,0.3)',
    projectUrl: 'https://drive.google.com/file/d/1b-PUhSmreqlWeFJAK3JyN9Khnzl3-ztT/view?usp=sharing',
  },
  {
    title: 'Estratégia Visual para Redes Sociais',
    category: 'Marketing Digital',
    type: 'design',
    description: 'Planejamento de comunicação visual e calendário editorial completo.',
    image: 'https://image2url.com/r2/default/images/1769113465075-be1fefb8-c749-4247-99f9-9e613b0c327d.jpeg',
    challenge: 'Ausência de estratégia visual coerente nas redes sociais, resultando em baixo alcance orgânico.',
    solution: 'Análise de público, definição de identidade visual para redes sociais, calendário editorial e diretrizes de conteúdo.',
    result: '+40% de aumento no alcance orgânico e fortalecimento da identidade digital da marca em parâmetros visuais.',
    tags: ['Estratégia', 'Identidade', 'Conteúdo Visual', 'Marketing'],
    accent: 'from-indigo-600 to-blue-600',
    accentHex: '#6366f1',
    glowColor: 'rgba(99,102,241,0.3)',
    projectUrl: '#contato',
  },
  {
    title: 'Biblioteca Virtual (Experimento)',
    category: 'Experimento Web',
    type: 'web',
    description: 'Projeto simples de biblioteca virtual para o clube de desbravadores Vozes da Aurora, desenvolvido com HTML/CSS durante o meu aprendizado inicial.',
    image: bibliotecaImg,
    challenge: 'Criar uma biblioteca virtual simples de livros adventistas em PDF para Desbravadores, aplicando conhecimentos básicos de HTML e CSS.',
    solution: 'Estruturação semântica com HTML5, aplicação de estilização básica com CSS3.',
    result: 'Site funcional que serviu como primeiro projeto prático destinado internamente para uma organização religiosa.',
    tags: ['HTML', 'CSS', 'Responsividade', 'Aprendizado'],
    accent: 'from-emerald-600 to-green-600',
    accentHex: '#10b981',
    glowColor: 'rgba(16,185,129,0.3)',
    projectUrl: 'https://vozesdaaurora.wordpress.com/',
  },
];

const dirFor = (index: number): 'left' | 'up' | 'right' =>
  index % 3 === 0 ? 'left' : index % 3 === 1 ? 'up' : 'right';

export function Portfolio() {
  const { theme } = useTheme();
  const [flipped, setFlipped] = useState<Set<number>>(new Set());
  const [filter, setFilter] = useState<'all' | 'design' | 'web'>('all');

  const toggleFlip = (index: number) => {
    setFlipped(prev => {
      const next = new Set(prev);
      next.has(index) ? next.delete(index) : next.add(index);
      return next;
    });
  };

  const filteredProjects = filter === 'all'
    ? projects
    : projects.filter(p => p.type === filter);

  /* back-card styles per theme */
  const backBg = (accentHex: string) =>
    theme === 'dark'
      ? `linear-gradient(150deg, ${accentHex}14 0%, #050505 50%, rgba(0,0,0,0.95) 100%)`
      : `linear-gradient(150deg, ${accentHex}0d 0%, #ffffff 50%, #f0f4ff 100%)`;

  const backTitle  = theme === 'dark' ? '#FFFFFF' : '#111827';
  const backText   = theme === 'dark' ? '#D9D9D9' : '#374151';
  const backLabel  = theme === 'dark' ? '#717182' : '#9CA3AF';
  const backResult = theme === 'dark' ? '#7BB8FF' : '#2563EB';
  const backTag = {
    bg:     theme === 'dark' ? 'rgba(255,255,255,0.04)' : 'rgba(0,109,255,0.06)',
    border: theme === 'dark' ? 'rgba(0,109,255,0.2)'    : 'rgba(0,109,255,0.22)',
    color:  theme === 'dark' ? '#7BB8FF'                : '#2563EB',
  };
  const backFooterColor = theme === 'dark' ? '#717182' : '#9CA3AF';

  return (
    <section
      id="portfolio"
      className="py-24 scroll-mt-16 transition-colors duration-300"
      style={{ background: theme === 'dark' ? '#050505' : '#f8fafc' }}
    >
      <div className="max-w-6xl mx-auto px-6">

        <ScrollReveal direction="up" className="text-center mb-16">
          <h2
            className="text-5xl font-bold mb-4"
            style={{ letterSpacing: '-0.02em', color: theme === 'dark' ? '#FFFFFF' : '#111827' }}
          >
            Portfólio de Projetos
          </h2>
          <div
            className="w-16 h-px mx-auto mb-6"
            style={{ background: 'linear-gradient(90deg, #006DFF, #00D9FF)', boxShadow: '0 0 12px rgba(0,109,255,0.5)' }}
          />
          <p className="max-w-2xl mx-auto mb-6" style={{ color: theme === 'dark' ? '#A0A0A0' : '#6B7280', lineHeight: 1.7, fontSize: '1.05rem' }}>
            Projetos de design com resultados comprovados e experimentos web durante meu aprendizado.{' '}
            <span style={{ color: theme === 'dark' ? '#7BB8FF' : '#006DFF' }}>Clique em um card para mais informações.</span>
          </p>

          {/* Filter buttons */}
          <div className="flex justify-center gap-3 mb-8">
            {[
              { key: 'all', label: 'Todos' },
              { key: 'design', label: 'Design' },
              { key: 'web', label: 'Experimentos Web' },
            ].map(({ key, label }) => (
              <button
                key={key}
                onClick={() => setFilter(key as typeof filter)}
                className="px-5 py-2 text-sm font-semibold rounded-lg transition-all duration-200"
                style={{
                  background: filter === key
                    ? 'linear-gradient(135deg, #006DFF, #00D9FF)'
                    : theme === 'dark' ? 'rgba(0,109,255,0.08)' : 'rgba(0,109,255,0.07)',
                  border: filter === key
                    ? 'none'
                    : theme === 'dark' ? '1px solid rgba(0,109,255,0.2)' : '1px solid rgba(0,109,255,0.28)',
                  color: filter === key ? '#FFFFFF' : theme === 'dark' ? '#7BB8FF' : '#006DFF',
                  boxShadow: filter === key ? '0 0 20px rgba(0,109,255,0.4)' : 'none',
                }}
              >
                {label}
              </button>
            ))}
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => {
            const isFlipped = flipped.has(index);
            return (
              <ScrollReveal key={index} direction={dirFor(index)} delay={index * 0.09}>
                <div
                  className="cursor-pointer h-[460px]"
                  style={{ perspective: '1100px' }}
                  onClick={() => toggleFlip(index)}
                >
                  <div
                    className="relative w-full h-full"
                    style={{
                      transformStyle: 'preserve-3d',
                      transition: 'transform 0.65s cubic-bezier(0.4,0.2,0.2,1)',
                      transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
                    }}
                  >
                    {/* FRONT */}
                    <div
                      className="absolute inset-0 rounded-[18px] overflow-hidden transition-shadow duration-300 flex flex-col"
                      style={{
                        backfaceVisibility: 'hidden',
                        background: theme === 'dark' ? 'rgba(255,255,255,0.025)' : '#ffffff',
                        border: theme === 'dark' ? '1px solid rgba(0,109,255,0.12)' : '1px solid rgba(0,109,255,0.18)',
                        boxShadow: theme === 'dark' ? '0 2px 20px rgba(0,0,0,0.4)' : '0 2px 20px rgba(0,0,0,0.07)',
                      }}
                      onMouseEnter={e => {
                        if (!isFlipped) {
                          (e.currentTarget as HTMLElement).style.border = `1px solid ${project.accentHex}55`;
                          const shadow = theme === 'dark'
                            ? `0 8px 40px ${project.glowColor}, 0 2px 20px rgba(0,0,0,0.5)`
                            : `0 8px 40px ${project.glowColor}, 0 2px 20px rgba(0,0,0,0.1)`;
                          (e.currentTarget as HTMLElement).style.boxShadow = shadow;
                        }
                      }}
                      onMouseLeave={e => {
                        const borderColor = theme === 'dark' ? 'rgba(0,109,255,0.12)' : 'rgba(0,109,255,0.18)';
                        const shadow = theme === 'dark' ? '0 2px 20px rgba(0,0,0,0.4)' : '0 2px 20px rgba(0,0,0,0.07)';
                        (e.currentTarget as HTMLElement).style.border = `1px solid ${borderColor}`;
                        (e.currentTarget as HTMLElement).style.boxShadow = shadow;
                      }}
                    >
                      {/* Image area — no badge overlay */}
                      <div className="relative overflow-hidden h-44 shrink-0">
                        <ImageWithFallback
                          src={project.image}
                          alt={`Projeto de ${project.category}: ${project.title}`}
                          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                      </div>

                      {/* Text area */}
                      <div className="flex flex-col flex-1 px-5 pt-4 pb-4 gap-1">
                        {/* Category badge — in text area now */}
                        <span
                          className="inline-block self-start px-2.5 py-0.5 text-xs font-semibold rounded-full mb-1"
                          style={{
                            background: `${project.accentHex}18`,
                            border: `1px solid ${project.accentHex}44`,
                            color: project.accentHex === '#d97706' ? '#b45309'
                              : project.accentHex === '#6366f1' ? '#4f46e5'
                              : project.accentHex === '#10b981' ? '#059669'
                              : project.accentHex === '#00D9FF' ? '#0891b2'
                              : project.accentHex,
                          }}
                        >
                          {project.category}
                        </span>
                        <h3
                          className="font-semibold text-lg leading-snug"
                          style={{ color: theme === 'dark' ? '#FFFFFF' : '#111827' }}
                        >
                          {project.title}
                        </h3>
                        <p className="text-sm flex-1" style={{ color: theme === 'dark' ? '#A0A0A0' : '#6B7280', lineHeight: 1.55 }}>
                          {project.description}
                        </p>
                        <p className="text-xs pt-2 flex items-center gap-1 mt-auto" style={{ color: theme === 'dark' ? '#7BB8FF' : '#006DFF' }}>
                          <RotateCcw className="w-3 h-3" /> Clique para mais informações
                        </p>
                      </div>
                    </div>

                    {/* BACK */}
                    <div
                      className="absolute inset-0 rounded-[18px] flex flex-col justify-between overflow-hidden"
                      style={{
                        backfaceVisibility: 'hidden',
                        transform: 'rotateY(180deg)',
                        background: backBg(project.accentHex),
                        border: `1px solid ${project.accentHex}33`,
                        boxShadow: `0 8px 40px ${project.glowColor}`,
                        padding: '24px',
                      }}
                    >
                      {/* Top accent bar */}
                      <div
                        className={`absolute top-0 left-0 right-0 h-[2px] rounded-t-[18px] bg-gradient-to-r ${project.accent}`}
                      />

                      <div className="flex-1 overflow-hidden">
                        <span
                          className={`inline-block px-3 py-1 rounded-full text-xs mb-3 text-white font-semibold bg-gradient-to-r ${project.accent}`}
                        >
                          {project.category}
                        </span>
                        <h3 className="font-bold text-lg mb-4 leading-snug" style={{ color: backTitle }}>{project.title}</h3>

                        <div className="space-y-3 text-sm">
                          <div>
                            <p className="text-xs uppercase tracking-wider font-semibold mb-1" style={{ color: backLabel }}>
                              Desafio
                            </p>
                            <p style={{ color: backText, lineHeight: 1.6 }}>{project.challenge}</p>
                          </div>
                          <div>
                            <p className="text-xs uppercase tracking-wider font-semibold mb-1" style={{ color: backLabel }}>
                              Solução
                            </p>
                            <p style={{ color: backText, lineHeight: 1.6 }}>{project.solution}</p>
                          </div>
                          <div>
                            <p className="text-xs uppercase tracking-wider font-semibold mb-1" style={{ color: backLabel }}>
                              Resultado
                            </p>
                            <p style={{ color: backResult, lineHeight: 1.6, fontWeight: 500 }}>{project.result}</p>
                          </div>
                        </div>
                      </div>

                      <div className="mt-4">
                        <div className="flex flex-wrap gap-1.5 mb-4">
                          {project.tags.map((tag, i) => (
                            <span
                              key={i}
                              className="px-2 py-1 text-xs rounded-lg"
                              style={{
                                background: backTag.bg,
                                border: `1px solid ${backTag.border}`,
                                color: backTag.color,
                              }}
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                        <div className="flex items-center justify-between">
                          <a
                            href={project.projectUrl}
                            target={project.projectUrl.startsWith('http') ? '_blank' : undefined}
                            rel={project.projectUrl.startsWith('http') ? 'noopener noreferrer' : undefined}
                            className="flex items-center gap-1.5 text-xs font-semibold transition-all duration-200"
                            style={{ color: '#00D9FF' }}
                            onClick={e => e.stopPropagation()}
                          >
                            <ExternalLink className="w-3 h-3" />
                            Ver projeto completo
                          </a>
                          <p className="text-xs flex items-center gap-1" style={{ color: backFooterColor }}>
                            <RotateCcw className="w-3 h-3" /> Voltar
                          </p>
                        </div>
                      </div>
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
