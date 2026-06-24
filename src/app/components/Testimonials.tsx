import { useState } from 'react';
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';
import { useTheme } from '../ThemeContext';
import vozesAurora from '../../imports/vozes.aurora_14050320_164319149.jpg.jpeg'
import iasdJurunas from '../../imports/iasdjurunas_14050320_164335635.jpg.jpeg'
const testimonials = [
  {
    name: 'Isabela Monteiro',
    role: 'Coordenadora de Artes',
    org: 'Departamento de Comunicação',
    text: 'O Yan captou nossa essência e transformou em uma identidade que orgulha nossa comunidade. Sua liderança inspirou toda a equipe a crescer. Cada entrega superou o esperado.',
    photo: 'https://images.unsplash.com/photo-1581065178047-8ee15951ede6?crop=face&fit=crop&w=120&h=120&q=80',
    initials: 'IM',
    metrics: [
      { value: '+30%', label: 'engajamento' },
      { value: '+50%', label: 'inscrições em eventos' },
    ],
    accent: 'linear-gradient(135deg, #006DFF, #00D9FF)',
    glowColor: 'rgba(0,109,255,0.3)',
  },
  {
    name: 'Vozes da Aurora',
    role: 'Clube de Desbravadores',
    org: '2ª Região — DSA',
    text: 'O Yan não apenas entregou um trabalho visual excepcional, mas liderou a transformação da nossa comunicação. Comprometimento, criatividade e capacidade de inspirar jovens. Nosso clube nunca teve tanta visibilidade.',
    photo: vozesAurora,
    initials: 'VA',
    metrics: [
      { value: '+30', label: 'jovens orientados' },
      { value: '100%', label: 'satisfação da equipe' },
    ],
    accent: 'linear-gradient(135deg, #6366f1, #2563EB)',
    glowColor: 'rgba(99,102,241,0.3)',
  },
  {
    name: 'Lucas Ferreira',
    role: 'Coordenação de Marketing',
    org: 'Departamento de Mídia',
    text: 'Trabalhamos juntos em mais de 15 campanhas e o Yan sempre entregou acima do esperado. Une visão estratégica com execução técnica impecável.',
    photo: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?crop=face&fit=crop&w=120&h=120&q=80',
    initials: 'LF',
    metrics: [
      { value: '+40%', label: 'alcance orgânico' },
      { value: '-60%', label: 'tempo de produção' },
    ],
    accent: 'linear-gradient(135deg, #00D9FF, #006DFF)',
    glowColor: 'rgba(0,217,255,0.3)',
  },
  {
    name: 'IASD Jurunas',
    role: 'Igreja Adventista do Sétimo Dia',
    org: 'Distrito Central de Belém - ANPa',
    text: 'As apresentações e identidades visuais criadas pelo Yan elevaram nossa comunicação institucional. Cada material reflete profissionalismo e alinhamento com nossos valores.',
    photo: iasdJurunas,
    initials: 'IASD',
    metrics: [
      { value: '+15', label: 'campanhas produzidas' },
      { value: '5★', label: 'avaliação da liderança' },
    ],
    accent: 'linear-gradient(135deg, #2563EB, #6366f1)',
    glowColor: 'rgba(37,99,235,0.3)',
  },
];

function TestimonialPhoto({ photo, initials, accent }: { photo: string; initials: string; accent: string }) {
  const [err, setErr] = useState(false);
  return (
    <div className="w-full h-full flex items-center justify-center">
      {!err ? (
        <img src={photo} alt={initials} className="w-full h-full object-cover" onError={() => setErr(true)} />
      ) : (
        <span className="font-bold text-white" style={{ fontSize: 18, background: accent }}>{initials}</span>
      )}
    </div>
  );
}

export function Testimonials() {
  const { theme } = useTheme();
  const dark = theme === 'dark';
  const [active, setActive] = useState(0);

  const prev = () => setActive(i => (i === 0 ? testimonials.length - 1 : i - 1));
  const next = () => setActive(i => (i === testimonials.length - 1 ? 0 : i + 1));

  const t = testimonials[active];

  return (
    <section
      id="depoimentos"
      className="py-24 scroll-mt-16 transition-colors duration-300"
      style={{ background: dark ? '#0A0A0A' : '#ffffff' }}
    >
      <div className="max-w-5xl mx-auto px-6">

        <ScrollReveal direction="up" className="text-center mb-16">
          <h2
            className="text-5xl font-bold mb-4"
            style={{ letterSpacing: '-0.02em', color: dark ? '#FFFFFF' : '#111827' }}
          >
            Depoimentos
          </h2>
          <div
            className="w-16 h-px mx-auto mb-6"
            style={{ background: 'linear-gradient(90deg, #006DFF, #00D9FF)', boxShadow: '0 0 12px rgba(0,109,255,0.5)' }}
          />
          <p className="max-w-xl mx-auto" style={{ color: dark ? '#A0A0A0' : '#6B7280', lineHeight: 1.7 }}>
            O que dizem as pessoas e organizações que já trabalharam comigo ou com quem trabalhei?
          </p>
        </ScrollReveal>

        <ScrollReveal direction="up" delay={0.1}>
          <div
            className="relative rounded-[24px] overflow-hidden transition-all duration-500"
            style={{
              background: dark ? 'rgba(255,255,255,0.025)' : '#ffffff',
              border: dark ? '1px solid rgba(0,109,255,0.18)' : '1px solid rgba(0,109,255,0.2)',
              boxShadow: dark
                ? `0 8px 60px ${t.glowColor}, 0 2px 20px rgba(0,0,0,0.5)`
                : `0 8px 60px ${t.glowColor}, 0 2px 20px rgba(0,0,0,0.08)`,
            }}
          >
            {/* Top accent */}
            <div
              className="absolute top-0 left-0 right-0 h-[2px] transition-all duration-500"
              style={{ background: t.accent }}
            />

            <div className="p-8 md:p-12">
              <div className="flex flex-col md:flex-row gap-10 items-start">

                {/* Left: author + metrics */}
                <div className="flex flex-col items-center md:items-start gap-4 md:w-56 shrink-0">
                  {/* Photo avatar */}
                  <div
                    className="w-16 h-16 rounded-full overflow-hidden flex items-center justify-center text-white font-bold text-xl shrink-0"
                    style={{
                      background: t.accent,
                      boxShadow: `0 0 24px ${t.glowColor}`,
                      border: `2px solid ${dark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.08)'}`,
                    }}
                  >
                    <TestimonialPhoto photo={t.photo} initials={t.initials} accent={t.accent} />
                  </div>

                  <div className="text-center md:text-left">
                    <p className="font-semibold text-base" style={{ color: dark ? '#FFFFFF' : '#111827' }}>{t.name}</p>
                    <p className="text-sm font-medium" style={{ color: dark ? '#7BB8FF' : '#006DFF' }}>{t.role}</p>
                    <p className="text-xs mt-0.5" style={{ color: dark ? '#717182' : '#9CA3AF' }}>{t.org}</p>
                  </div>

                  {/* Metrics */}
                  <div className="flex md:flex-col gap-3 w-full">
                    {t.metrics.map((m, i) => (
                      <div
                        key={i}
                        className="flex-1 rounded-xl px-3 py-3 text-center md:text-left"
                        style={{
                          background: dark ? 'rgba(0,109,255,0.06)' : 'rgba(0,109,255,0.06)',
                          border: dark ? '1px solid rgba(0,109,255,0.15)' : '1px solid rgba(0,109,255,0.18)',
                        }}
                      >
                        <p
                          className="text-xl font-bold"
                          style={{
                            backgroundImage: 'linear-gradient(135deg, #006DFF, #00D9FF)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            backgroundClip: 'text',
                          }}
                        >
                          {m.value}
                        </p>
                        <p className="text-xs" style={{ color: dark ? '#A0A0A0' : '#6B7280' }}>{m.label}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Right: quote */}
                <div className="flex-1 flex flex-col">
                  <Quote className="w-10 h-10 mb-4" style={{ color: 'rgba(0,109,255,0.2)' }} />
                  <p
                    className="text-lg md:text-xl"
                    style={{ color: dark ? '#D9D9D9' : '#374151', lineHeight: 1.75, fontStyle: 'italic' }}
                  >
                    &ldquo;{t.text}&rdquo;
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-6 mt-8">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200"
              style={{
                background: dark ? 'rgba(0,109,255,0.08)' : 'rgba(0,109,255,0.1)',
                border: dark ? '1px solid rgba(0,109,255,0.22)' : '1px solid rgba(0,109,255,0.28)',
                color: dark ? '#7BB8FF' : '#006DFF',
              }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = 'rgba(0,109,255,0.18)'; (e.currentTarget as HTMLElement).style.boxShadow = '0 0 16px rgba(0,109,255,0.3)'; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = dark ? 'rgba(0,109,255,0.08)' : 'rgba(0,109,255,0.1)'; (e.currentTarget as HTMLElement).style.boxShadow = 'none'; }}
              aria-label="Anterior"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className="rounded-full transition-all duration-300"
                  style={{
                    width: i === active ? '24px' : '8px',
                    height: '8px',
                    background: i === active
                      ? 'linear-gradient(90deg, #006DFF, #00D9FF)'
                      : dark ? 'rgba(255,255,255,0.18)' : 'rgba(0,0,0,0.18)',
                    boxShadow: i === active ? '0 0 12px rgba(0,109,255,0.5)' : 'none',
                  }}
                  aria-label={`Ir para depoimento ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200"
              style={{
                background: dark ? 'rgba(0,109,255,0.08)' : 'rgba(0,109,255,0.1)',
                border: dark ? '1px solid rgba(0,109,255,0.22)' : '1px solid rgba(0,109,255,0.28)',
                color: dark ? '#7BB8FF' : '#006DFF',
              }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = 'rgba(0,109,255,0.18)'; (e.currentTarget as HTMLElement).style.boxShadow = '0 0 16px rgba(0,109,255,0.3)'; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = dark ? 'rgba(0,109,255,0.08)' : 'rgba(0,109,255,0.1)'; (e.currentTarget as HTMLElement).style.boxShadow = 'none'; }}
              aria-label="Próximo"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          {/* Name pills */}
          <div className="flex flex-wrap justify-center gap-3 mt-5">
            {testimonials.map((item, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className="flex items-center gap-2 rounded-xl px-3 py-2 text-xs font-medium transition-all duration-200"
                style={{
                  background: i === active
                    ? dark ? 'rgba(0,109,255,0.12)' : 'rgba(0,109,255,0.1)'
                    : 'transparent',
                  border: i === active
                    ? dark ? '1px solid rgba(0,109,255,0.4)' : '1px solid rgba(0,109,255,0.4)'
                    : dark ? '1px solid rgba(255,255,255,0.08)' : '1px solid rgba(0,0,0,0.1)',
                  color: i === active
                    ? dark ? '#7BB8FF' : '#006DFF'
                    : dark ? '#717182' : '#9CA3AF',
                }}
              >
                <div
                  className="w-5 h-5 rounded-full overflow-hidden shrink-0 flex items-center justify-center"
                  style={{ background: item.accent }}
                >
                  <img src={item.photo} alt={item.name} className="w-full h-full object-cover" onError={e => { (e.currentTarget as HTMLImageElement).style.display = 'none'; }} />
                </div>
                {item.name.split(' ')[0]}
              </button>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
