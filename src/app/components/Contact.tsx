import { useState, FormEvent } from 'react';
import { Mail, MapPin, Linkedin, Instagram, Send, MessageCircle, Github, CheckCircle } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';
import { useTheme } from '../ThemeContext';

interface FormData {
  name: string;
  email: string;
  service: string;
  message: string;
}

const SERVICE_LABELS: Record<string, string> = {
  identidade: 'Identidade Visual Estratégica',
  comunicacao: 'Design de Comunicação Visual',
  apresentacoes: 'Apresentações Profissionais',
  marketing: 'Estratégia de Marketing',
  gestao: 'Gestão de Projetos',
  web: 'Projetos Web em Aprendizado',
  outro: 'Outro / Parceria',
};

export function Contact() {
  const { theme } = useTheme();
  const dark = theme === 'dark';

  const [form, setForm] = useState<FormData>({ name: '', email: '', service: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const set = (field: keyof FormData) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => setForm(prev => ({ ...prev, [field]: e.target.value }));

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) return;

    /* Save to localStorage */
    const entry = { ...form, submittedAt: new Date().toISOString() };
    const existing = JSON.parse(localStorage.getItem('pampadash_contacts') ?? '[]') as object[];
    localStorage.setItem('pampadash_contacts', JSON.stringify([entry, ...existing]));

    /* Build mailto URL — opens Gmail pre-filled */
    const serviceLabel = form.service ? SERVICE_LABELS[form.service] ?? form.service : 'Não especificado';
    const subject = encodeURIComponent(`[Portfólio] Pedido de ${form.name} — ${serviceLabel}`);
    const body = encodeURIComponent(
      `Olá, Yan William | Amarath Pampadash!\n\nEstou entrando em contato para solicitação de seus serviços. A seguir, um breve relatório de informações para a conferência do meu pedido:\n\n` +
      `────────────────────\n` +
      `Nome do Cliente:    ${form.name}\n` +
      `E-mail do Remetente:   ${form.email}\n` +
      `Serviço Escolhido: ${serviceLabel}\n` +
      `────────────────────\n\n` +
      `${form.message}\n\n` +
      `────────────────────\n` +
      `Descrição do pedido gerada em: ${new Date().toLocaleString('pt-BR')}\n` +
      `Origem: Formulário do WebPortfólio de Yan William | Amarath Pampadash`
    );

    window.open(`https://mail.google.com/mail/?view=cm&to=yanveloso1611@gmail.com&su=${subject}&body=${body}`, '_blank');
    setSubmitted(true);
  };

  const resetForm = () => {
    setForm({ name: '', email: '', service: '', message: '' });
    setSubmitted(false);
  };

  /* shared input style */
  const inputBase: React.CSSProperties = {
    padding: '14px 16px',
    background: dark ? 'rgba(255,255,255,0.04)' : 'rgba(0,0,0,0.03)',
    border: dark ? '1px solid rgba(255,255,255,0.1)' : '1px solid rgba(0,0,0,0.1)',
    color: dark ? '#FFFFFF' : '#111827',
    fontSize: '0.95rem',
    borderRadius: 12,
    outline: 'none',
    width: '100%',
    transition: 'border-color 0.2s, box-shadow 0.2s',
    boxSizing: 'border-box' as const,
  };

  const focusHandlers = {
    onFocus: (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
      (e.currentTarget as HTMLElement).style.borderColor = 'rgba(0,109,255,0.5)';
      (e.currentTarget as HTMLElement).style.boxShadow = '0 0 0 3px rgba(0,109,255,0.1)';
    },
    onBlur: (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
      (e.currentTarget as HTMLElement).style.borderColor = dark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)';
      (e.currentTarget as HTMLElement).style.boxShadow = 'none';
    },
  };

  return (
    <section
      id="contato"
      className="py-24 scroll-mt-16 transition-colors duration-300"
      style={{ background: dark ? '#050505' : '#f8fafc' }}
    >
      <div className="max-w-6xl mx-auto px-6">

        <ScrollReveal direction="up" className="text-center mb-16">
          <h2
            className="text-5xl font-bold mb-4"
            style={{ letterSpacing: '-0.02em', color: dark ? '#FFFFFF' : '#111827' }}
          >
            Vamos construir algo incrível juntos!
          </h2>
          <div
            className="w-16 h-px mx-auto mb-6"
            style={{ background: 'linear-gradient(90deg, #006DFF, #00D9FF)', boxShadow: '0 0 12px rgba(0,109,255,0.5)' }}
          />
          <p className="max-w-2xl mx-auto" style={{ color: dark ? '#A0A0A0' : '#6B7280', lineHeight: 1.7, fontSize: '1.05rem' }}>
            Estou em Belém (PA) e atendo clientes de todo o Brasil. Preencha o formulário ou entre em contato diretamente!
          </p>
        </ScrollReveal>

        {/* WhatsApp CTA */}
        <ScrollReveal direction="up" delay={0.05} className="mb-10">
          <div className="flex justify-center">
            <a
              href="https://wa.me/5591980742854"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 font-semibold transition-all duration-200 hover:scale-[1.02]"
              style={{
                height: '52px', padding: '0 32px', borderRadius: '12px',
                background: 'linear-gradient(135deg, #25D366, #128C7E)',
                color: '#FFFFFF',
                boxShadow: '0 0 24px rgba(37,211,102,0.3), 0 4px 12px rgba(0,0,0,0.3)',
              }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.boxShadow = '0 0 40px rgba(37,211,102,0.5), 0 4px 16px rgba(0,0,0,0.4)'; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.boxShadow = '0 0 24px rgba(37,211,102,0.3), 0 4px 12px rgba(0,0,0,0.3)'; }}
            >
              <MessageCircle className="w-5 h-5" /> Fale pelo WhatsApp
            </a>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-12">

          {/* Left — contact info */}
          <ScrollReveal direction="left" delay={0.1}>
            <div>
              <h3 className="text-2xl font-semibold mb-2" style={{ color: dark ? '#FFFFFF' : '#111827' }}>
                Informações de Contato
              </h3>
              <p className="text-sm mb-8" style={{ color: dark ? '#A0A0A0' : '#6B7280', lineHeight: 1.6 }}>
                Entre em contato para discutir seu projeto, sugerir ideias ou propor parcerias de aprendizado
              </p>

              <div className="space-y-5 mb-10">
                {[
                  { icon: Mail,           label: 'Email',       value: 'yanveloso1611@gmail.com',     href: 'mailto:yanveloso1611@gmail.com' },
                  { icon: MessageCircle,  label: 'WhatsApp',    value: '+55 (91) 9 8074-2854',   href: 'https://wa.me/5591980742854' },
                  { icon: MapPin,         label: 'Localização', value: 'Belém, Pará — Brasil',   href: undefined },
                ].map(({ icon: Icon, label, value, href }, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div
                      className="p-3 rounded-xl shrink-0"
                      style={{
                        background: dark ? 'rgba(0,109,255,0.08)' : 'rgba(0,109,255,0.1)',
                        border: dark ? '1px solid rgba(0,109,255,0.2)' : '1px solid rgba(0,109,255,0.25)',
                      }}
                    >
                      <Icon className="w-5 h-5" style={{ color: dark ? '#7BB8FF' : '#006DFF' }} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm mb-0.5" style={{ color: dark ? '#FFFFFF' : '#111827' }}>{label}</h4>
                      {href ? (
                        <a
                          href={href}
                          target={href.startsWith('http') ? '_blank' : undefined}
                          rel="noopener noreferrer"
                          className="text-sm transition-colors duration-200"
                          style={{ color: dark ? '#A0A0A0' : '#6B7280' }}
                          onMouseEnter={e => ((e.currentTarget as HTMLElement).style.color = dark ? '#7BB8FF' : '#006DFF')}
                          onMouseLeave={e => ((e.currentTarget as HTMLElement).style.color = dark ? '#A0A0A0' : '#6B7280')}
                        >
                          {value}
                        </a>
                      ) : (
                        <p className="text-sm" style={{ color: dark ? '#A0A0A0' : '#6B7280' }}>{value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div>
                <h4 className="font-semibold text-sm mb-4" style={{ color: dark ? '#FFFFFF' : '#111827' }}>Redes Sociais</h4>
                <div className="flex gap-3">
                  {[
                    { href: 'https://www.linkedin.com/in/pampadash', icon: Linkedin,       label: 'LinkedIn' },
                    { href: 'https://www.instagram.com/yanwilli.am', icon: Instagram,      label: 'Instagram' },
                    { href: 'https://t.me/pampadash',                icon: Send,           label: 'Telegram' },
                    { href: 'https://github.com/pampadash',           icon: Github,         label: 'GitHub' },
                  ].map(({ href, icon: Icon, label }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={label}
                      className="w-11 h-11 flex items-center justify-center rounded-xl transition-all duration-200"
                      style={{
                        background: dark ? 'rgba(0,109,255,0.08)' : 'rgba(0,109,255,0.08)',
                        border: dark ? '1px solid rgba(0,109,255,0.22)' : '1px solid rgba(0,109,255,0.22)',
                        color: dark ? '#7BB8FF' : '#006DFF',
                      }}
                      onMouseEnter={e => {
                        (e.currentTarget as HTMLElement).style.background = 'rgba(0,109,255,0.2)';
                        (e.currentTarget as HTMLElement).style.boxShadow = '0 0 16px rgba(0,109,255,0.35)';
                        (e.currentTarget as HTMLElement).style.color = '#ffffff';
                      }}
                      onMouseLeave={e => {
                        (e.currentTarget as HTMLElement).style.background = dark ? 'rgba(0,109,255,0.08)' : 'rgba(0,109,255,0.08)';
                        (e.currentTarget as HTMLElement).style.boxShadow = 'none';
                        (e.currentTarget as HTMLElement).style.color = dark ? '#7BB8FF' : '#006DFF';
                      }}
                    >
                      <Icon className="w-4 h-4" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Right — form */}
          <ScrollReveal direction="right" delay={0.2}>
            <div
              className="rounded-[18px]"
              style={{
                padding: '36px',
                background: dark ? 'rgba(255,255,255,0.025)' : '#ffffff',
                border: dark ? '1px solid rgba(0,109,255,0.15)' : '1px solid rgba(0,109,255,0.18)',
                boxShadow: dark ? '0 4px 32px rgba(0,0,0,0.4)' : '0 4px 32px rgba(0,0,0,0.07)',
              }}
            >
              {submitted ? (
                /* Success state */
                <div className="flex flex-col items-center justify-center py-8 text-center gap-4">
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center"
                    style={{ background: 'rgba(37,211,102,0.12)', border: '1px solid rgba(37,211,102,0.3)' }}
                  >
                    <CheckCircle className="w-8 h-8" style={{ color: '#25D366' }} />
                  </div>
                  <h3 className="text-xl font-bold" style={{ color: dark ? '#FFFFFF' : '#111827' }}>
                    Gmail aberto!
                  </h3>
                  <p className="text-sm" style={{ color: dark ? '#A0A0A0' : '#6B7280', lineHeight: 1.6 }}>
                    Uma aba do Gmail foi aberta com sua mensagem pré-preenchida. Basta confirmar o envio por lá.
                    Sua mensagem também foi salva localmente.
                  </p>
                  <button
                    onClick={resetForm}
                    className="mt-2 px-6 py-2.5 text-sm font-semibold rounded-xl transition-all duration-200"
                    style={{
                      background: 'linear-gradient(135deg, #006DFF, #00D9FF)',
                      color: '#fff',
                      boxShadow: '0 0 18px rgba(0,109,255,0.3)',
                    }}
                  >
                    Enviar outra mensagem
                  </button>
                </div>
              ) : (
                <form className="space-y-5" onSubmit={handleSubmit}>
                  {/* Name */}
                  <div>
                    <label className="block text-sm font-medium mb-2" style={{ color: dark ? '#D9D9D9' : '#374151' }}>
                      Nome <span style={{ color: '#ef4444' }}>*</span>
                    </label>
                    <input
                      type="text"
                      required
                      style={inputBase}
                      placeholder="Seu nome completo"
                      value={form.name}
                      onChange={set('name')}
                      {...focusHandlers}
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-sm font-medium mb-2" style={{ color: dark ? '#D9D9D9' : '#374151' }}>
                      Email <span style={{ color: '#ef4444' }}>*</span>
                    </label>
                    <input
                      type="email"
                      required
                      style={inputBase}
                      placeholder="seu@email.com"
                      value={form.email}
                      onChange={set('email')}
                      {...focusHandlers}
                    />
                  </div>

                  {/* Service */}
                  <div>
                    <label className="block text-sm font-medium mb-2" style={{ color: dark ? '#D9D9D9' : '#374151' }}>
                      Serviço de Interesse
                    </label>
                    <select
                      style={{ ...inputBase, cursor: 'pointer', color: form.service ? (dark ? '#FFFFFF' : '#111827') : (dark ? '#717182' : '#9CA3AF') }}
                      value={form.service}
                      onChange={set('service')}
                      {...focusHandlers}
                    >
                      <option value="">Selecione um serviço</option>
                      {Object.entries(SERVICE_LABELS).map(([val, label]) => (
                        <option key={val} value={val} style={{ background: dark ? '#0A0A0A' : '#FFFFFF', color: dark ? '#FFFFFF' : '#111827' }}>
                          {label}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-sm font-medium mb-2" style={{ color: dark ? '#D9D9D9' : '#374151' }}>
                      Mensagem <span style={{ color: '#ef4444' }}>*</span>
                    </label>
                    <textarea
                      required
                      rows={5}
                      style={{ ...inputBase, resize: 'none' } as React.CSSProperties}
                      placeholder="Conte-me sobre seu projeto, objetivos, prazo ou sugestões de ideias..."
                      value={form.message}
                      onChange={set('message')}
                      {...focusHandlers}
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full font-semibold transition-all duration-200 hover:scale-[1.02] flex items-center justify-center gap-2"
                    style={{
                      height: '52px', borderRadius: '12px',
                      background: 'linear-gradient(135deg, #006DFF 0%, #00D9FF 100%)',
                      color: '#FFFFFF',
                      boxShadow: '0 0 24px rgba(0,109,255,0.35), 0 4px 12px rgba(0,0,0,0.3)',
                    }}
                    onMouseEnter={e => { (e.currentTarget as HTMLElement).style.boxShadow = '0 0 40px rgba(0,109,255,0.6), 0 4px 16px rgba(0,0,0,0.4)'; }}
                    onMouseLeave={e => { (e.currentTarget as HTMLElement).style.boxShadow = '0 0 24px rgba(0,109,255,0.35), 0 4px 12px rgba(0,0,0,0.3)'; }}
                  >
                    <Mail className="w-4 h-4" /> Abrir Gmail e Enviar
                  </button>
                  <p className="text-xs text-center" style={{ color: dark ? '#717182' : '#9CA3AF' }}>
                    Abre o Gmail com a mensagem pré-preenchida para envio · Respondo em até 24h úteis
                  </p>
                </form>
              )}
            </div>
          </ScrollReveal>
        </div>
      </div>

      <footer
        className="mt-20 pt-8 text-center"
        style={{ borderTop: dark ? '1px solid rgba(255,255,255,0.06)' : '1px solid rgba(0,0,0,0.07)' }}
      >
        <p style={{ color: dark ? '#717182' : '#9CA3AF', fontSize: '0.875rem' }}>
          © 2026 Yan William | Amarath Pampadash  · Todos os direitos reservados · Designer Gráfico · Estudante de Web Design · Belém-PA, Brasil.
        </p>
      </footer>
    </section>
  );
}
