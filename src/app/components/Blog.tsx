import { useState } from 'react';
import { useNavigate } from 'react-router';
import { useTheme } from '../ThemeContext';
import {
  Search, ArrowLeft, ChevronLeft, ChevronRight,
  Tag, Calendar, BookOpen, Sun, Moon,
} from 'lucide-react';

/* ─── Types ─────────────────────────────────────────────────── */

type Category = 'Design' | 'Programação Web' | 'Liderança' | 'Gestão' | 'Outros';

interface BlogPost {
  id: string;
  title: string;
  description: string;
  content: string;
  category: Category;
  tags: string[];
  authorName: string;
  authorInitials: string;
  authorColor: string;
  readTime: number; // minutes
  publishedAt: string;
  coverGradient: string;
}

/* ─── Constants ─────────────────────────────────────────────── */

const CATEGORIES: Category[] = ['Design', 'Programação Web', 'Liderança', 'Gestão', 'Outros'];
const POSTS_PER_PAGE = 6;

const POSTS: BlogPost[] = [
  {
    id: '1',
    title: 'Os pilares do Design Gráfico: o que aprendi na prática',
    description: 'Uma reflexão sobre os fundamentos do design gráfico, da teoria à aplicação prática em projetos reais para igrejas e organizações.',
    content: `O design gráfico vai muito além de fazer "coisas bonitas". Ele é uma linguagem visual que comunica valores, transmite emoções e guia decisões.

Quando comecei a trabalhar com design no contexto da Igreja Adventista e no Clube de Desbravadores Vozes da Aurora, percebi rapidamente que a teoria acadêmica precisava ser adaptada à realidade de cada organização.

**Os três pilares que aprendi:**

**1. Identidade visual consistente** — Uma marca é reconhecida pela consistência, não pela complexidade. Antes de criar qualquer peça, defina cores, tipografia e tom de voz. A consistência cria reconhecimento, e o reconhecimento cria confiança.

**2. Contexto e público** — O design para uma campanha de jovens é completamente diferente de uma identidade para uma instituição religiosa. Conhecer profundamente o público é mais valioso do que dominar qualquer ferramenta.

**3. Iteração e feedback** — Nenhum projeto fica perfeito na primeira versão. O processo de revisão e melhoria não é um sinal de falha — é parte essencial do trabalho criativo bem-feito.

Esses aprendizados, combinados com ferramentas como CorelDRAW e princípios de composição visual, me permitiram entregar projetos que geraram +50% de engajamento nas campanhas que trabalhei.

O design é uma jornada de aprendizado contínuo. Cada projeto traz novos desafios, novos públicos e novas oportunidades de crescimento. O segredo é nunca parar de observar o mundo ao redor e perguntar: "como posso comunicar isso melhor?"`,
    category: 'Design',
    tags: ['design gráfico', 'identidade visual', 'branding', 'aprendizado'],
    authorName: 'Yan William (Pampadash)',
    authorInitials: 'YW',
    authorColor: '#006DFF',
    readTime: 5,
    publishedAt: '2026-05-15',
    coverGradient: 'linear-gradient(135deg, #006DFF 0%, #00D9FF 100%)',
  },
  {
    id: '2',
    title: 'HTML Semântico: por que a estrutura importa mais do que parece',
    description: 'A diferença entre usar <div> para tudo e usar as tags corretas — e por que essa escolha afeta acessibilidade, SEO e manutenção.',
    content: `Quando comecei a aprender HTML, minha tendência natural era usar <div> para tudo. Era simples, funcionava, e ninguém reclamava. Com o tempo, descobri que essa prática prejudica profundamente o código a longo prazo.

**O que é HTML semântico?**

HTML semântico significa usar as tags corretas para o conteúdo correto. Em vez de <div class="header">, usamos <header>. Em vez de <div class="nav">, usamos <nav>. Em vez de <div class="article">, usamos <article>.

**Por que isso importa de verdade?**

**Acessibilidade** — Leitores de tela dependem da semântica para navegar pelo conteúdo. Um <button> recebe foco de teclado automaticamente e dispara eventos de clique com Enter/Espaço. Um <div> clicável não faz nada disso sem JavaScript extra.

**SEO** — Os mecanismos de busca entendem melhor a hierarquia do conteúdo quando você usa <article>, <section>, <main>, <aside>. Uma <h1> bem posicionada dentro de um <main> comunica muito mais do que uma <div class="title"> dentro de outra <div>.

**Manutenção** — Código semântico é mais legível para outros desenvolvedores — e para você mesmo seis meses depois. "Eu me lembro de ter escrito isso, mas o que esse div faz?" é uma pergunta que o HTML semântico elimina.

**Exemplo prático:**

❌ Sem semântica:
<div class="card"><div class="title">Título</div><div class="text">Conteúdo</div></div>

✅ Com semântica:
<article><h2>Título</h2><p>Conteúdo</p></article>

Essa é uma das primeiras e mais importantes lições do meu estudo de Web Design. A semântica não é opcional — é a fundação de qualquer projeto web sólido, acessível e sustentável.`,
    category: 'Programação Web',
    tags: ['html', 'semântica', 'acessibilidade', 'SEO', 'web'],
    authorName: 'Yan William (Pampadash)',
    authorInitials: 'YW',
    authorColor: '#006DFF',
    readTime: 6,
    publishedAt: '2026-05-22',
    coverGradient: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
  },
  {
    id: '3',
    title: 'Liderança servidora: lições do Clube de Desbravadores',
    description: 'Como a experiência como Instrutor e Conselheiro Associado me ensinou mais sobre liderança genuína do que qualquer livro jamais poderia.',
    content: `Liderar jovens Desbravadores é uma das experiências mais desafiadoras e gratificantes que já tive. Não existe fórmula mágica, mas existem princípios que fazem toda a diferença.

**O que é liderança servidora?**

Liderança servidora é aquela que coloca as necessidades do grupo acima das do líder. Não é fraqueza — é a forma mais poderosa e sustentável de inspirar comprometimento genuíno. Robert Greenleaf, que cunhou o termo nos anos 70, dizia que o verdadeiro líder é primeiro servo, depois líder.

Na prática do clube Vozes da Aurora, isso significou:

**1. Presença real importa mais que autoridade**

Os jovens percebem imediatamente quando você está presente de verdade versus quando está "cumprindo obrigação". Participar das atividades ao lado deles, lembrar o nome de cada um, perguntar como foi a semana deles — isso constrói vínculo real e confiança duradoura. Autoridade sem vínculo é só regra sem significado.

**2. Clareza gera segurança**

Quando as expectativas são claras e justas, os jovens se sentem mais seguros para arriscar, errar e aprender. Regras arbitrárias ou explicadas de forma autoritária geram resistência. Regras explicadas com "o porquê" geram adesão voluntária.

**3. Celebre o processo, não só o resultado**

Em um ambiente de desenvolvimento integral como o clube de Desbravadores, comemorar o esforço tem o mesmo — ou mais — valor que comemorar o resultado. Um jovem que tentou de verdade e não conseguiu precisa ser reconhecido tanto quanto quem venceu.

**O que levo para além do clube:**

Essas lições transformaram minha forma de trabalhar em equipe, gerenciar projetos de design e se comunicar com clientes. Liderar é uma prática diária, não um título.`,
    category: 'Liderança',
    tags: ['liderança', 'desbravadores', 'desenvolvimento pessoal', 'gestão de pessoas'],
    authorName: 'Yan William (Pampadash)',
    authorInitials: 'YW',
    authorColor: '#006DFF',
    readTime: 7,
    publishedAt: '2026-05-28',
    coverGradient: 'linear-gradient(135deg, #d97706 0%, #f59e0b 100%)',
  },
  {
    id: '4',
    title: 'Gestão de projetos criativos: organização que liberta',
    description: 'Como um processo claro e documentado pode libertar a criatividade em vez de engessá-la — e as ferramentas simples que uso no dia a dia.',
    content: `Existe um mito no mundo criativo de que processos e metodologias sufocam a criatividade. A minha experiência é exatamente o oposto: um processo claro é o que me liberta para criar com mais qualidade e menos ansiedade.

Aprendi isso da forma mais difícil — com projetos atrasados, retrabalho desnecessário e clientes insatisfeitos por expectativas mal alinhadas.

**Meu processo atual em 4 etapas:**

**1. Brief detalhado antes de qualquer pixel**

Antes de abrir o CorelDRAW, respondo obrigatoriamente: Qual é o objetivo? Quem é o público? Qual é o prazo real? Quais são as restrições de marca? O que existe de referência? Um brief completo economiza horas de retrabalho e alinha expectativas desde o início.

**2. Etapas visíveis com entregáveis claros**

Todo projeto é dividido em: pesquisa e referências → conceito e moodboard → criação → revisão → entrega. Cada etapa tem um entregável específico que o cliente precisa aprovar antes de avançar. Isso evita "achei que ia ser diferente" no final.

**3. Feedback estruturado, não vago**

"Não gostei" não é feedback — é um ponto de partida para uma conversa. Aprendi a perguntar: O que especificamente não funciona? O que parece errado visualmente? Qual referência você acha mais próxima do que imagina? Feedback específico gera revisões precisas.

**4. Documentação mínima das decisões**

Salvo por que escolhemos aquela cor, por que aquela fonte, o que o cliente aprovou em cada etapa. Isso é ouro para projetos futuros e para revisitar decisões meses depois.

**Ferramentas que uso:**
Trello para organização de tarefas, Google Drive para armazenamento e colaboração, CorelDRAW para criação gráfica.

A gestão eficiente não é sobre ter as melhores ferramentas. É sobre ter clareza de processo e disciplina para segui-lo — mesmo quando a criatividade quer pular etapas.`,
    category: 'Gestão',
    tags: ['gestão', 'projetos', 'produtividade', 'design', 'processo criativo'],
    authorName: 'Yan William (Pampadash)',
    authorInitials: 'YW',
    authorColor: '#006DFF',
    readTime: 8,
    publishedAt: '2026-06-01',
    coverGradient: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
  },
  {
    id: '5',
    title: 'CSS Grid vs Flexbox: quando usar cada um',
    description: 'Uma análise prática das diferenças entre Grid e Flexbox, com exemplos de quando cada abordagem faz mais sentido no layout de páginas web.',
    content: `Quando comecei a aprender CSS, a dúvida que mais me confundiu foi: "quando uso Flexbox e quando uso Grid?" Depois de muita prática, cheguei a uma regra simples que me ajuda na maioria dos casos.

**A regra de ouro:**

**Flexbox** → um eixo (linha OU coluna)
**Grid** → dois eixos (linhas E colunas)

**Quando usar Flexbox:**

Flexbox é perfeito para distribuir itens em uma única direção. Barra de navegação com itens à esquerda e ações à direita? Flexbox. Botões centralizados vertical e horizontalmente? Flexbox. Cards em linha que devem se adaptar? Flexbox.

\`\`\`css
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
\`\`\`

**Quando usar Grid:**

Grid é ideal para layouts complexos com linhas E colunas ao mesmo tempo. Um layout de página com header, sidebar, main e footer? Grid. Uma galeria de imagens em grade responsiva? Grid.

\`\`\`css
.layout {
  display: grid;
  grid-template-columns: 260px 1fr;
  grid-template-rows: 60px 1fr auto;
}
\`\`\`

**A realidade prática:**

Na maioria dos projetos, você vai usar os dois juntos. Grid para o layout macro da página, Flexbox para os componentes dentro de cada região. O Grid diz onde as grandes áreas ficam; o Flexbox organiza o conteúdo dentro de cada área.

**Dica de responsividade:**

\`\`\`css
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
}
\`\`\`

Esse padrão com \`auto-fit\` e \`minmax\` cria uma grade que automaticamente se adapta ao espaço disponível, sem precisar de media queries para a maioria dos casos.

Estou no início do meu aprendizado de CSS, mas essa distinção entre Grid e Flexbox já me ajudou muito na estruturação dos meus projetos web.`,
    category: 'Programação Web',
    tags: ['css', 'grid', 'flexbox', 'layout', 'web', 'frontend'],
    authorName: 'Yan William (Pampadash)',
    authorInitials: 'YW',
    authorColor: '#006DFF',
    readTime: 6,
    publishedAt: '2026-06-03',
    coverGradient: 'linear-gradient(135deg, #14b8a6 0%, #0891b2 100%)',
  },
  {
    id: '6',
    title: 'Identidade visual para igrejas: desafios e aprendizados',
    description: 'Criar uma marca para uma instituição religiosa é diferente de qualquer outro projeto. Veja os principais desafios e como os abordei.',
    content: `Trabalhar com identidade visual para igrejas e organizações religiosas é um dos trabalhos mais desafiadores e significativos que já fiz. E não é porque seja tecnicamente mais difícil — é porque as apostas emocionais e simbólicas são muito mais altas.

**O desafio principal: servir a muitos públicos ao mesmo tempo**

Uma identidade visual de empresa tem que agradar principalmente ao nicho-alvo do negócio. Uma identidade de igreja precisa comunicar:
- Para os jovens: relevância e modernidade
- Para as famílias: confiança e solidez
- Para os visitantes: acolhimento e abertura
- Para a liderança: profissionalismo e seriedade

Encontrar um equilíbrio visual que sirva a todos esses públicos é o grande desafio.

**O que aprendi trabalhando com a IASD Jurunas e o Clube Vozes da Aurora:**

**1. A missão precisa vir antes da estética**

Antes de pensar em cores ou fontes, precisei entender profundamente a missão, os valores e a visão de cada organização. O design é expressão — e você não pode expressar o que não entende.

**2. Cores têm significados contextuais**

Azul transmite confiança e lealdade. Verde sugere crescimento e esperança. Roxo historicamente tem conotações de realeza e espiritualidade. No contexto adventista, o azul e branco carregam significados específicos de limpeza e fé. Cada decisão de cor precisou ser justificada dentro do contexto cultural e espiritual da comunidade.

**3. Simplicidade é respeito**

Identidades visuais religiosas muitas vezes tendem ao excesso — muitos elementos simbólicos, muitas cores, tipografia ornamentada. A abordagem que funcionou foi a simplicidade: um símbolo claro, duas cores principais, uma tipografia legível. Menos é mais, especialmente quando o conteúdo espiritual já é rico.

**O resultado mais gratificante:**

Ver a identidade aplicada em materiais reais — cartazes, camisetas, apresentações — e ouvir membros da comunidade dizerem "isso representa quem nós somos" é a validação que nenhuma métrica consegue substituir.`,
    category: 'Design',
    tags: ['identidade visual', 'design para igrejas', 'branding', 'comunidade'],
    authorName: 'Yan William (Pampadash)',
    authorInitials: 'YW',
    authorColor: '#006DFF',
    readTime: 7,
    publishedAt: '2026-06-05',
    coverGradient: 'linear-gradient(135deg, #2563EB 0%, #6366f1 100%)',
  },
  {
    id: '7',
    title: 'Design e fé: como os valores cristãos moldam meu trabalho criativo',
    description: 'Uma reflexão pessoal sobre como a fé influencia escolhas estéticas, éticas e relacionais no trabalho criativo e de liderança.',
    content: `Escrever sobre a relação entre fé e trabalho criativo é um ato de vulnerabilidade. Mas é também uma das conversas mais honestas e necessárias que posso ter sobre quem sou e como trabalho.

**A fé como bússola ética**

Antes de ser designer, sou uma pessoa formada por valores — e esses valores inevitavelmente aparecem no meu trabalho. A integridade com o cliente: não prometer o que não posso entregar. A honestidade nos processos: se algo não ficou bom, eu digo. O cuidado com as pessoas: entender que por trás de cada projeto existe alguém com sonhos, recursos limitados e expectativas reais.

Esses comportamentos não são técnicos — são éticos. E minha fé é a raiz mais profunda dessa ética.

**A criatividade como expressão do Criador**

Uma perspectiva que moldou profundamente minha visão do design é a ideia de que a criatividade humana é um reflexo da criatividade divina. Somos seres criados por um Criador, e nossa capacidade de criar — de imaginar algo que não existe e fazê-lo existir — é um reflexo dessa natureza.

Isso me liberta do perfeccionismo paralisante. Não preciso criar obras de arte transcendentes; preciso criar com honestidade, cuidado e propósito. A qualidade vem do comprometimento, não da perfeição.

**O design como serviço**

No contexto onde atuo — igrejas, clubes de jovens, organizações sem fins lucrativos — o design raramente é sobre ego criativo. É sobre servir. Serve ao comunicador que precisa alcançar mais pessoas. Serve à organização que quer expressar seus valores visualmente. Serve à comunidade que se reconhece em uma identidade bem construída.

Essa perspectiva de serviço é diretamente inspirada pela minha fé — e é o que torna o trabalho mais significativo do que qualquer portfólio poderia expressar.

**Crescendo com propósito**

Estou no início de uma jornada longa — em design, em desenvolvimento web, em Sistemas de Informação, em liderança. E o que me sustenta nessa jornada não é apenas ambição profissional, mas um senso de propósito que vai além da carreira.

Quero usar cada habilidade que desenvolver para servir melhor às pessoas ao meu redor.`,
    category: 'Outros',
    tags: ['fé', 'design', 'propósito', 'reflexão', 'valores'],
    authorName: 'Yan William (Pampadash)',
    authorInitials: 'YW',
    authorColor: '#006DFF',
    readTime: 9,
    publishedAt: '2026-06-08',
    coverGradient: 'linear-gradient(135deg, #ec4899 0%, #8b5cf6 100%)',
  },
];

/* ─── Helpers ────────────────────────────────────────────────── */

function formatDate(iso: string) {
  const [y, m, d] = iso.split('-').map(Number);
  return new Date(y, m - 1, d).toLocaleDateString('pt-BR', {
    day: '2-digit', month: 'short', year: 'numeric',
  });
}

function renderContent(text: string) {
  return text.split('\n').map((line, i) => {
    if (!line.trim()) return <br key={i} />;
    const parts = line.split(/(\*\*[^*]+\*\*)/g).map((part, j) =>
      part.startsWith('**') && part.endsWith('**')
        ? <strong key={j}>{part.slice(2, -2)}</strong>
        : part
    );
    return <p key={i} style={{ marginBottom: '0.4rem' }}>{parts}</p>;
  });
}

/* ─── Main Component ─────────────────────────────────────────── */

type View = 'list' | 'detail';

export function Blog() {
  const { theme, toggleTheme } = useTheme();
  const navigate = useNavigate();

  const dark = theme === 'dark';
  const bg            = dark ? '#050505' : '#f8fafc';
  const surface       = dark ? 'rgba(255,255,255,0.03)' : '#ffffff';
  const border        = dark ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.09)';
  const textPrimary   = dark ? '#FFFFFF' : '#111827';
  const textSecondary = dark ? '#A0A0A0' : '#6B7280';
  const textMuted     = dark ? '#717182' : '#9CA3AF';
  const accent        = '#006DFF';

  const [view, setView]               = useState<View>('list');
  const [selected, setSelected]       = useState<BlogPost | null>(null);
  const [search, setSearch]           = useState('');
  const [category, setCategory]       = useState<Category | 'all'>('all');
  const [page, setPage]               = useState(1);

  /* Filtering */
  const filtered = POSTS.filter(p => {
    const matchCat = category === 'all' || p.category === category;
    if (!search.trim()) return matchCat;
    const q = search.toLowerCase();
    return matchCat && (
      p.title.toLowerCase().includes(q) ||
      p.description.toLowerCase().includes(q) ||
      p.tags.some(t => t.includes(q))
    );
  }).sort((a, b) => b.publishedAt.localeCompare(a.publishedAt));

  const totalPages = Math.max(1, Math.ceil(filtered.length / POSTS_PER_PAGE));
  const pagePosts  = filtered.slice((page - 1) * POSTS_PER_PAGE, page * POSTS_PER_PAGE);

  const openDetail = (post: BlogPost) => {
    setSelected(post);
    setView('detail');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const goBack = () => {
    setView('list');
    setSelected(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const cardStyle: React.CSSProperties = {
    background: surface,
    border: `1px solid ${border}`,
    borderRadius: 18,
    boxShadow: dark ? '0 2px 16px rgba(0,0,0,0.3)' : '0 2px 16px rgba(0,0,0,0.06)',
  };

  const inputStyle: React.CSSProperties = {
    width: '100%', padding: '10px 14px', borderRadius: 10,
    background: dark ? 'rgba(255,255,255,0.05)' : '#f9fafb',
    border: `1px solid ${dark ? 'rgba(255,255,255,0.12)' : 'rgba(0,0,0,0.12)'}`,
    color: textPrimary, fontSize: '0.95rem', outline: 'none', boxSizing: 'border-box' as const,
  };

  return (
    <div className="min-h-screen transition-colors duration-300" style={{ background: bg, fontFamily: "'Inter', sans-serif" }}>

      {/* ── Header ── */}
      <header
        className="sticky top-0 z-40"
        style={{
          background: dark ? 'rgba(5,5,5,0.9)' : 'rgba(248,250,252,0.9)',
          backdropFilter: 'blur(14px)',
          borderBottom: `1px solid ${border}`,
        }}
      >
        <div className="max-w-5xl mx-auto px-4 h-16 flex items-center gap-3">
          <button
            onClick={() => navigate('/')}
            className="flex items-center gap-1.5 text-sm font-medium transition-colors duration-200 mr-2"
            style={{ color: textSecondary }}
            onMouseEnter={e => ((e.currentTarget as HTMLElement).style.color = accent)}
            onMouseLeave={e => ((e.currentTarget as HTMLElement).style.color = textSecondary)}
          >
            <ArrowLeft className="w-4 h-4" /> Portfólio
          </button>

          <div className="flex items-center gap-2 flex-1 min-w-0">
            <BookOpen className="w-5 h-5 shrink-0" style={{ color: accent }} />
            <span className="font-bold text-lg truncate" style={{ color: textPrimary }}>Blog & Artigos</span>
          </div>

          {/* Pill theme toggle */}
          <button
            onClick={toggleTheme}
            aria-label="Alternar tema"
            className="relative flex items-center shrink-0 transition-all duration-300"
            style={{
              width: 52, height: 28, borderRadius: 14,
              background: dark
                ? 'linear-gradient(135deg, #1a1a2e, #0d1b2a)'
                : 'linear-gradient(135deg, #dbeafe, #bfdbfe)',
              border: `1px solid ${dark ? 'rgba(123,184,255,0.25)' : 'rgba(0,109,255,0.3)'}`,
              padding: 3,
              boxShadow: dark ? '0 0 12px rgba(123,184,255,0.12)' : '0 0 12px rgba(0,109,255,0.15)',
            }}
          >
            <span
              className="flex items-center justify-center rounded-full transition-all duration-300"
              style={{
                width: 20, height: 20,
                transform: `translateX(${dark ? 24 : 0}px)`,
                background: dark
                  ? 'linear-gradient(135deg, #7BB8FF, #006DFF)'
                  : 'linear-gradient(135deg, #FFB347, #F97316)',
                boxShadow: dark ? '0 0 8px rgba(0,109,255,0.6)' : '0 0 8px rgba(249,115,22,0.5)',
              }}
            >
              {dark
                ? <Moon className="w-2.5 h-2.5 text-white" />
                : <Sun className="w-2.5 h-2.5 text-white" />}
            </span>
          </button>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 py-10">

        {/* ─ LIST VIEW ─ */}
        {view === 'list' && (
          <>
            {/* Hero text */}
            <div className="mb-10 text-center">
              <h1 className="text-3xl sm:text-4xl font-bold mb-3" style={{ color: textPrimary }}>
                Design · Web · Liderança · Gestão
              </h1>
              <p className="text-base max-w-xl mx-auto" style={{ color: textSecondary, lineHeight: 1.65 }}>
                Reflexões e aprendizados da minha jornada como designer gráfico, estudante de web design e líder voluntário.
              </p>
            </div>

            {/* Search */}
            <div className="relative mb-5">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4" style={{ color: textMuted }} />
              <input
                style={{ ...inputStyle, paddingLeft: 40 }}
                placeholder="Pesquisar artigos, temas, tags..."
                value={search}
                onChange={e => { setSearch(e.target.value); setPage(1); }}
              />
            </div>

            {/* Category filter */}
            <div className="flex flex-wrap gap-2 mb-8">
              {(['all', ...CATEGORIES] as (Category | 'all')[]).map(cat => (
                <button
                  key={cat}
                  onClick={() => { setCategory(cat); setPage(1); }}
                  className="px-4 py-1.5 text-xs font-semibold rounded-lg transition-all duration-200"
                  style={{
                    background: category === cat
                      ? 'linear-gradient(135deg, #006DFF, #00D9FF)'
                      : dark ? 'rgba(255,255,255,0.04)' : 'rgba(0,0,0,0.04)',
                    border: category === cat
                      ? 'none'
                      : `1px solid ${dark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)'}`,
                    color: category === cat ? '#fff' : textSecondary,
                    boxShadow: category === cat ? '0 0 14px rgba(0,109,255,0.35)' : 'none',
                  }}
                >
                  {cat === 'all' ? 'Todos' : cat}
                </button>
              ))}
            </div>

            {search && (
              <p className="mb-4 text-sm" style={{ color: textMuted }}>
                {filtered.length} resultado{filtered.length !== 1 ? 's' : ''} para &ldquo;{search}&rdquo;
              </p>
            )}

            {/* Grid */}
            {pagePosts.length === 0 ? (
              <div className="text-center py-20" style={{ color: textMuted }}>
                <BookOpen className="w-12 h-12 mx-auto mb-4 opacity-30" />
                <p>Nenhum artigo encontrado.</p>
              </div>
            ) : (
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-8">
                {pagePosts.map(post => (
                  <PostCard
                    key={post.id}
                    post={post}
                    dark={dark}
                    surface={surface}
                    border={border}
                    textPrimary={textPrimary}
                    textSecondary={textSecondary}
                    textMuted={textMuted}
                    onOpen={() => openDetail(post)}
                  />
                ))}
              </div>
            )}

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex items-center justify-center gap-2">
                <button
                  onClick={() => setPage(p => Math.max(1, p - 1))}
                  disabled={page === 1}
                  className="p-2 rounded-lg transition-all duration-200"
                  style={{
                    background: dark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.06)',
                    color: page > 1 ? textSecondary : textMuted,
                    border: `1px solid ${border}`,
                    opacity: page === 1 ? 0.4 : 1,
                  }}
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                {Array.from({ length: totalPages }, (_, i) => i + 1).map(n => (
                  <button
                    key={n}
                    onClick={() => setPage(n)}
                    className="w-8 h-8 rounded-lg text-sm font-semibold transition-all duration-200"
                    style={{
                      background: n === page ? 'linear-gradient(135deg, #006DFF, #00D9FF)' : (dark ? 'rgba(255,255,255,0.04)' : 'rgba(0,0,0,0.04)'),
                      color: n === page ? '#fff' : textSecondary,
                      border: n === page ? 'none' : `1px solid ${border}`,
                    }}
                  >
                    {n}
                  </button>
                ))}
                <button
                  onClick={() => setPage(p => Math.min(totalPages, p + 1))}
                  disabled={page === totalPages}
                  className="p-2 rounded-lg transition-all duration-200"
                  style={{
                    background: dark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.06)',
                    color: page < totalPages ? textSecondary : textMuted,
                    border: `1px solid ${border}`,
                    opacity: page === totalPages ? 0.4 : 1,
                  }}
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            )}
          </>
        )}

        {/* ─ DETAIL VIEW ─ */}
        {view === 'detail' && selected && (
          <>
            <button
              onClick={goBack}
              className="flex items-center gap-1.5 text-sm font-medium mb-6 transition-colors"
              style={{ color: textSecondary }}
              onMouseEnter={e => ((e.currentTarget as HTMLElement).style.color = accent)}
              onMouseLeave={e => ((e.currentTarget as HTMLElement).style.color = textSecondary)}
            >
              <ArrowLeft className="w-4 h-4" /> Voltar
            </button>

            {/* Cover */}
            <div
              className="w-full h-44 sm:h-56 rounded-2xl mb-8 flex items-end p-6"
              style={{ background: selected.coverGradient, boxShadow: '0 8px 40px rgba(0,0,0,0.2)' }}
            >
              <span
                className="px-3 py-1 text-xs font-semibold rounded-full text-white"
                style={{ background: 'rgba(0,0,0,0.25)', backdropFilter: 'blur(6px)' }}
              >
                {selected.category}
              </span>
            </div>

            <div style={{ ...cardStyle, padding: 32 }}>
              {/* Meta */}
              <div className="flex flex-wrap items-center gap-4 mb-5">
                <div className="flex items-center gap-2">
                  <div
                    className="w-9 h-9 rounded-full flex items-center justify-center text-white text-xs font-bold shrink-0"
                    style={{ background: selected.authorColor }}
                  >
                    {selected.authorInitials}
                  </div>
                  <span className="text-sm font-semibold" style={{ color: textPrimary }}>{selected.authorName}</span>
                </div>
                <span className="flex items-center gap-1 text-xs" style={{ color: textMuted }}>
                  <Calendar className="w-3 h-3" /> {formatDate(selected.publishedAt)}
                </span>
                <span className="text-xs" style={{ color: textMuted }}>{selected.readTime} min de leitura</span>
              </div>

              <h1 className="text-2xl sm:text-3xl font-bold mb-4 leading-snug" style={{ color: textPrimary }}>
                {selected.title}
              </h1>
              <p className="mb-7 text-base" style={{ color: textSecondary, lineHeight: 1.65 }}>
                {selected.description}
              </p>

              <div className="text-sm sm:text-base mb-7" style={{ color: textSecondary, lineHeight: 1.8 }}>
                {renderContent(selected.content)}
              </div>

              {/* Tags */}
              {selected.tags.length > 0 && (
                <div className="flex flex-wrap gap-2 pt-5" style={{ borderTop: `1px solid ${border}` }}>
                  {selected.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="flex items-center gap-1 px-2.5 py-1 text-xs rounded-lg"
                      style={{
                        background: dark ? 'rgba(0,109,255,0.08)' : 'rgba(0,109,255,0.07)',
                        border: `1px solid rgba(0,109,255,0.2)`,
                        color: dark ? '#7BB8FF' : '#2563EB',
                      }}
                    >
                      <Tag className="w-2.5 h-2.5" /> {tag}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </>
        )}
      </main>
    </div>
  );
}

/* ─── Post Card ──────────────────────────────────────────────── */

interface PostCardProps {
  post: BlogPost;
  dark: boolean;
  surface: string;
  border: string;
  textPrimary: string;
  textSecondary: string;
  textMuted: string;
  onOpen: () => void;
}

function PostCard({ post, dark, surface, border, textPrimary, textSecondary, textMuted, onOpen }: PostCardProps) {
  return (
    <div
      className="rounded-[18px] overflow-hidden flex flex-col cursor-pointer transition-all duration-300"
      style={{ background: surface, border: `1px solid ${border}`, boxShadow: dark ? '0 2px 12px rgba(0,0,0,0.25)' : '0 2px 12px rgba(0,0,0,0.05)' }}
      onClick={onOpen}
      onMouseEnter={e => {
        const el = e.currentTarget as HTMLElement;
        el.style.boxShadow = dark ? '0 10px 40px rgba(0,0,0,0.4)' : '0 10px 40px rgba(0,0,0,0.12)';
        el.style.borderColor = 'rgba(0,109,255,0.3)';
        el.style.transform = 'translateY(-3px)';
      }}
      onMouseLeave={e => {
        const el = e.currentTarget as HTMLElement;
        el.style.boxShadow = dark ? '0 2px 12px rgba(0,0,0,0.25)' : '0 2px 12px rgba(0,0,0,0.05)';
        el.style.borderColor = border;
        el.style.transform = 'translateY(0)';
      }}
    >
      {/* Cover */}
      <div className="h-28 relative flex items-end p-3" style={{ background: post.coverGradient }}>
        <span className="px-2.5 py-0.5 text-xs font-semibold rounded-full text-white" style={{ background: 'rgba(0,0,0,0.22)', backdropFilter: 'blur(6px)' }}>
          {post.category}
        </span>
      </div>

      <div className="flex flex-col flex-1 p-4 gap-2">
        <h3 className="font-bold text-base leading-snug" style={{ color: textPrimary }}>
          {post.title}
        </h3>
        <p className="text-xs flex-1 line-clamp-2" style={{ color: textSecondary, lineHeight: 1.55 }}>
          {post.description}
        </p>
        <div className="flex items-center gap-2 mt-2 pt-2" style={{ borderTop: `1px solid ${border}` }}>
          <div
            className="w-5 h-5 rounded-full flex items-center justify-center text-white shrink-0"
            style={{ background: post.authorColor, fontSize: 8, fontWeight: 700 }}
          >
            {post.authorInitials}
          </div>
          <span className="text-xs truncate" style={{ color: textMuted }}>{formatDate(post.publishedAt)}</span>
          <span className="text-xs ml-auto shrink-0" style={{ color: textMuted }}>{post.readTime} min</span>
        </div>
      </div>
    </div>
  );
}
