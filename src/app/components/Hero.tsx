import { ArrowDown } from 'lucide-react';
import { motion } from 'motion/react';
import { useTheme } from '../ThemeContext';

const stats = [
  { value: '+10', label: 'Projetos Desenvolvidos' },
  { value: '+2', label: 'Anos de Experiência' },
  { value: '+3', label: 'Organizações Atendidas' },
];

export function Hero() {
  const { theme } = useTheme();

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden scroll-mt-16 transition-colors duration-300"
      style={{ background: theme === 'dark' ? '#050505' : '#f8fafc' }}
    >
      {/* Ambient glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 80% 60% at 50% 40%, rgba(0,109,255,0.10) 0%, rgba(0,217,255,0.04) 45%, transparent 70%)',
        }}
      />

      <div className="relative max-w-4xl mx-auto px-6 py-24 text-center">

        {/* Role badge */}
        <motion.div
          className="mb-6"
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: 'easeOut' }}
        >
          <span
            className="inline-block px-4 py-1.5 text-sm font-medium rounded-full"
            style={{
              background: theme === 'dark' ? 'rgba(0,109,255,0.12)' : 'rgba(0,109,255,0.09)',
              border: `1px solid ${theme === 'dark' ? 'rgba(0,109,255,0.28)' : 'rgba(0,109,255,0.3)'}`,
              color: theme === 'dark' ? '#7BB8FF' : '#006DFF',
            }}
          >
            Designer Gráfico · Web Design · Sistemas de Informação
          </span>
        </motion.div>

        {/* Name */}
        <motion.h1
          className="text-6xl md:text-8xl font-bold mb-2"
          style={{
            backgroundImage: theme === 'dark'
              ? 'linear-gradient(135deg, #FFFFFF 0%, #7BB8FF 55%, #00D9FF 100%)'
              : 'linear-gradient(135deg, #0f172a 0%, #006DFF 60%, #00D9FF 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            filter: 'drop-shadow(0 0 32px rgba(0,109,255,0.2))',
            lineHeight: 1.05,
          }}
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.65, ease: 'easeOut', delay: 0.12 }}
        >
          Yan William
        </motion.h1>

        {/* Alias */}
        <motion.p
          className="text-sm mb-6"
          style={{ color: theme === 'dark' ? '#717182' : '#9CA3AF' }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.25 }}
        >
          Também conhecido como{' '}
          <span style={{ color: '#00D9FF' }} className="font-semibold">Amarath Pampadash</span>
        </motion.p>

        {/* Tagline */}
        <motion.p
          className="text-xl md:text-2xl font-bold mb-4"
          style={{ color: theme === 'dark' ? '#FFFFFF' : '#111827', lineHeight: 1.35 }}
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.35 }}
        >
          Transformo histórias em marcas e sistemas memoráveis.
        </motion.p>

        {/* Description */}
        <motion.p
          className="text-base md:text-lg max-w-2xl mx-auto mb-10"
          style={{ color: theme === 'dark' ? '#A0A0A0' : '#6B7280', lineHeight: 1.65 }}
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.45 }}
        >
          Ajudo igrejas, organizações e empreendedores a criarem identidades visuais que conectam com seu público.
          Aceito projetos que me desafiem e me ajudem a crescer enquanto me formo em Sistemas de Informação.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.58 }}
        >
          <a
            href="#contato"
            className="flex items-center justify-center font-semibold transition-all duration-200 hover:scale-[1.02]"
            style={{
              height: '52px',
              padding: '0 32px',
              borderRadius: '12px',
              background: 'linear-gradient(135deg, #006DFF 0%, #00D9FF 100%)',
              color: '#FFFFFF',
              boxShadow: '0 0 24px rgba(0,109,255,0.35), 0 4px 12px rgba(0,0,0,0.3)',
            }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLElement).style.boxShadow =
                '0 0 40px rgba(0,109,255,0.6), 0 4px 16px rgba(0,0,0,0.4)';
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLElement).style.boxShadow =
                '0 0 24px rgba(0,109,255,0.35), 0 4px 12px rgba(0,0,0,0.3)';
            }}
          >
            Solicite seu Projeto
          </a>
          <a
            href="#portfolio"
            className="flex items-center justify-center font-semibold transition-all duration-200 hover:scale-[1.02]"
            style={{
              height: '52px',
              padding: '0 32px',
              borderRadius: '12px',
              border: `1px solid ${theme === 'dark' ? 'rgba(0,109,255,0.4)' : 'rgba(0,109,255,0.5)'}`,
              color: theme === 'dark' ? '#7BB8FF' : '#006DFF',
              background: theme === 'dark' ? 'rgba(0,109,255,0.06)' : 'rgba(0,109,255,0.05)',
            }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLElement).style.background = 'rgba(0,109,255,0.12)';
              (e.currentTarget as HTMLElement).style.boxShadow = '0 0 18px rgba(0,109,255,0.18)';
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLElement).style.background = theme === 'dark'
                ? 'rgba(0,109,255,0.06)' : 'rgba(0,109,255,0.05)';
              (e.currentTarget as HTMLElement).style.boxShadow = 'none';
            }}
          >
            Conheça meu Portfólio
          </a>
        </motion.div>

        {/* Stats */}
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-14"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.72 }}
        >
          {stats.map((stat, i) => (
            <div key={i} className="flex flex-col items-center gap-1">
              <span
                className="text-3xl font-bold"
                style={{
                  backgroundImage: 'linear-gradient(135deg, #006DFF 0%, #00D9FF 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                {stat.value}
              </span>
              <span
                className="text-xs uppercase tracking-widest"
                style={{ color: theme === 'dark' ? '#717182' : '#9CA3AF' }}
              >
                {stat.label}
              </span>
            </div>
          ))}
        </motion.div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown
          className="w-5 h-5"
          style={{ color: '#006DFF', filter: 'drop-shadow(0 0 6px rgba(0,109,255,0.4))' }}
        />
      </div>
    </section>
  );
}
