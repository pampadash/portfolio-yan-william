import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Sun, Moon, BookOpen } from 'lucide-react';
import { useTheme } from '../ThemeContext';
import { useNavigate, useLocation } from 'react-router';
import logo from "../../imports/7_20260605_194013_0006.png";

const sections = [
  { id: 'inicio',      label: 'Início' },
  { id: 'sobre',       label: 'Sobre' },
  { id: 'habilidades', label: 'Habilidades' },
  { id: 'experiencia', label: 'Experiência' },
  { id: 'portfolio',   label: 'Portfólio' },
  { id: 'depoimentos', label: 'Depoimentos' },
  { id: 'contato',     label: 'Contato' },
];

export function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [active, setActive]   = useState('inicio');
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen]        = useState(false);
  const navigate  = useNavigate();
  const location  = useLocation();

  const isPortfolio = location.pathname === '/';

  /* active section tracking */
  useEffect(() => {
    if (!isPortfolio) return;
    const observers: IntersectionObserver[] = [];
    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActive(id); },
        { rootMargin: '-40% 0px -55% 0px' }
      );
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach(o => o.disconnect());
  }, [isPortfolio]);

  /* navbar background on scroll */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleLink = (id: string) => {
    setOpen(false);
    if (!isPortfolio) {
      navigate('/');
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
      return;
    }
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleBlog = () => {
    setOpen(false);
    navigate('/blog');
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? theme === 'dark'
            ? 'bg-black/80 backdrop-blur-md border-b border-zinc-800/60 shadow-lg shadow-black/40'
            : 'bg-white/80 backdrop-blur-md border-b border-gray-200/60 shadow-lg shadow-gray-200/40'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-2 h-16 flex items-center justify-between">
        {/* Logo + Theme Toggle */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => handleLink('inicio')}
            className="amarathpampadash-logo"
          >
            <img src={logo} alt="Logo de Amarath Pampadash" className="h-35 w-300 mt-0 object-contain"/>
          </button>

          <button
            onClick={toggleTheme}
            aria-label="Alternar tema"
            className="relative flex items-center shrink-0 transition-all duration-300"
            style={{
              width: 52, height: 28, borderRadius: 14,
              background: theme === 'dark'
                ? 'linear-gradient(135deg, #1a1a2e, #0d1b2a)'
                : 'linear-gradient(135deg, #dbeafe, #bfdbfe)',
              border: `1px solid ${theme === 'dark' ? 'rgba(123,184,255,0.25)' : 'rgba(0,109,255,0.35)'}`,
              padding: 3,
              boxShadow: theme === 'dark' ? '0 0 12px rgba(123,184,255,0.1)' : '0 0 12px rgba(0,109,255,0.18)',
            }}
          >
            <motion.span
              animate={{ x: theme === 'dark' ? 24 : 0 }}
              transition={{ type: 'spring', stiffness: 520, damping: 32 }}
              className="flex items-center justify-center rounded-full"
              style={{
                width: 20, height: 20,
                background: theme === 'dark'
                  ? 'linear-gradient(135deg, #7BB8FF, #006DFF)'
                  : 'linear-gradient(135deg, #FFB347, #F97316)',
                boxShadow: theme === 'dark'
                  ? '0 0 8px rgba(0,109,255,0.7)'
                  : '0 0 8px rgba(249,115,22,0.55)',
              }}
            >
              {theme === 'dark'
                ? <Moon className="w-3 h-3 text-white" />
                : <Sun className="w-3 h-3 text-white" />}
            </motion.span>
          </button>
        </div>

        {/* Desktop links */}
        <nav className="hidden md:flex items-center gap-1">
          {sections.map(({ id, label }) => (
            <button
              key={id}
              onClick={() => handleLink(id)}
              className={`relative px-3 py-1.5 text-sm rounded-md transition-colors duration-200 ${
                isPortfolio && active === id
                  ? theme === 'dark' ? 'text-white' : 'text-gray-900'
                  : theme === 'dark' ? 'text-gray-400 hover:text-gray-200' : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              {isPortfolio && active === id && (
                <motion.span
                  layoutId="nav-pill"
                  className="absolute inset-0 rounded-md border"
                  style={{
                    background: theme === 'dark'
                      ? 'linear-gradient(to right, rgba(0,109,255,0.3), rgba(0,217,255,0.2))'
                      : 'linear-gradient(to right, rgba(0,109,255,0.15), rgba(0,217,255,0.1))',
                    borderColor: theme === 'dark' ? 'rgba(0,109,255,0.3)' : 'rgba(0,109,255,0.25)',
                  }}
                  transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                />
              )}
              <span className="relative z-10">{label}</span>
            </button>
          ))}

          {/* Blog link */}
          <button
            onClick={handleBlog}
            className="relative px-3 py-1.5 text-sm rounded-md transition-colors duration-200 flex items-center gap-1.5 ml-1"
            style={{
              background: !isPortfolio
                ? theme === 'dark' ? 'rgba(0,109,255,0.18)' : 'rgba(0,109,255,0.12)'
                : 'transparent',
              border: !isPortfolio
                ? `1px solid ${theme === 'dark' ? 'rgba(0,109,255,0.3)' : 'rgba(0,109,255,0.28)'}`
                : '1px solid transparent',
              color: !isPortfolio
                ? theme === 'dark' ? '#7BB8FF' : '#006DFF'
                : theme === 'dark' ? 'rgba(123,184,255,0.75)' : 'rgba(0,109,255,0.65)',
            }}
          >
            <BookOpen className="w-3.5 h-3.5" />
            Blog
          </button>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 transition-colors"
          style={{ color: theme === 'dark' ? '#9CA3AF' : '#4B5563' }}
          onClick={() => setOpen(v => !v)}
          aria-label="Menu"
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden overflow-hidden backdrop-blur-md border-b"
            style={{
              background: theme === 'dark' ? 'rgba(0,0,0,0.9)' : 'rgba(255,255,255,0.9)',
              borderColor: theme === 'dark' ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)',
            }}
          >
            <nav className="flex flex-col py-3 px-6 gap-1">
              {sections.map(({ id, label }) => (
                <button
                  key={id}
                  onClick={() => handleLink(id)}
                  className={`text-left px-3 py-2.5 rounded-md text-sm transition-colors border-l-2 ${
                    isPortfolio && active === id
                      ? theme === 'dark'
                        ? 'text-blue-400 bg-blue-900/30 border-blue-500'
                        : 'text-blue-600 bg-blue-50 border-blue-600'
                      : theme === 'dark'
                        ? 'text-gray-400 hover:text-white hover:bg-zinc-900 border-transparent'
                        : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100 border-transparent'
                  }`}
                >
                  {label}
                </button>
              ))}
              <button
                onClick={handleBlog}
                className="text-left px-3 py-2.5 rounded-md text-sm transition-colors border-l-2 flex items-center gap-2"
                style={{
                  color: theme === 'dark' ? '#7BB8FF' : '#006DFF',
                  borderColor: theme === 'dark' ? 'rgba(0,109,255,0.5)' : 'rgba(0,109,255,0.4)',
                  background: theme === 'dark' ? 'rgba(0,109,255,0.08)' : 'rgba(0,109,255,0.06)',
                }}
              >
                <BookOpen className="w-4 h-4" /> Blog
              </button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
