import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from '../components/Container';
import { Button } from '../components/Button';
import { SectionTitle } from '../components/SectionTitle';

/* ==========================================================================
   IMAGENS PLACEHOLDER (Substitua pelas imagens reais no futuro)
   ========================================================================== */
const PLACEHOLDER_IMAGES = {
  heroBg: "https://images.unsplash.com/photo-1544365558-35aa4afcf11f?auto=format&fit=crop&q=80&w=1920", // Foto de Salvador / Jovens
  eventPrayer: "https://images.unsplash.com/photo-1515162305285-0293e4767cc2?auto=format&fit=crop&q=80&w=800", // Noite de Oração
  eventYouth: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&q=80&w=800", // Encontro de Jovens
  eventMass: "https://images.unsplash.com/photo-1548625149-fc4a29cf7092?auto=format&fit=crop&q=80&w=800", // Missa de Cura
  eventRetreat: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&q=80&w=800", // Retiro
  newsYouth: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=800", // Notícia Jovens
  newsBible: "https://images.unsplash.com/photo-1507434965515-61970f2bd7c6?auto=format&fit=crop&q=80&w=800", // Notícia Bíblia
  newsCafe: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&q=80&w=800", // Notícia Lanchonete
  joinBg: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&q=80&w=1600", // Faça Parte Fundo
};

/* ==========================================================================
   DADOS MOCKADOS
   ========================================================================== */

// 1. Acessos Rápidos ("O que você procura?")
const MOCK_QUICK_ACCESS = [
  {
    id: 1,
    title: 'Programação',
    description: 'Confira os horários e atividades da missão.',
    href: '/programacao',
    icon: '📅',
    colorBg: 'bg-orange-50 text-shalom-orange border-orange-100',
  },
  {
    id: 2,
    title: 'Lanchonete',
    description: 'Confira o cardápio e os horários de atendimento.',
    href: '/lanchonete',
    icon: '☕',
    colorBg: 'bg-emerald-50 text-emerald-600 border-emerald-100',
  },
  {
    id: 3,
    title: 'Livraria',
    description: 'Conheça os livros, artigos e produtos disponíveis.',
    href: '/livraria',
    icon: '📚',
    colorBg: 'bg-sky-50 text-shalom-blue border-sky-100',
  },
  {
    id: 4,
    title: 'Próximos Eventos',
    description: 'Confira o que está acontecendo na missão.',
    href: '/programacao',
    icon: '🎉',
    colorBg: 'bg-purple-50 text-purple-600 border-purple-100',
  },
  {
    id: 5,
    title: 'Fale Conosco',
    description: 'Encontre telefone, WhatsApp e demais canais de contato.',
    href: '/contato',
    icon: '📞',
    colorBg: 'bg-amber-50 text-amber-600 border-amber-100',
  },
];

// 2. Próximos Eventos
const MOCK_EVENTS = [
  {
    id: 1,
    day: '12',
    month: 'ABR',
    title: 'Noite de Oração',
    time: '19h30',
    location: 'Igreja da Missão',
    description: 'Um momento especial de oração, louvor e adoração.',
    image: PLACEHOLDER_IMAGES.eventPrayer,
    href: '/programacao',
  },
  {
    id: 2,
    day: '16',
    month: 'ABR',
    title: 'Encontro de Jovens',
    time: '19h',
    location: 'Salão da Missão',
    description: 'Um encontro para viver a alegria do Evangelho juntos!',
    image: PLACEHOLDER_IMAGES.eventYouth,
    href: '/programacao',
  },
  {
    id: 3,
    day: '20',
    month: 'ABR',
    title: 'Missa de Cura e Libertação',
    time: '19h30',
    location: 'Igreja da Missão',
    description: 'Venha viver este momento de fé e renovação.',
    image: PLACEHOLDER_IMAGES.eventMass,
    href: '/programacao',
  },
  {
    id: 4,
    day: '27',
    month: 'ABR',
    title: 'Retiro Shalom',
    time: '08h às 17h',
    location: 'Casa de Retiros',
    description: 'Um dia para aprofundar sua fé e fortalecer a caminhada.',
    image: PLACEHOLDER_IMAGES.eventRetreat,
    href: '/programacao',
  },
];

// 3. Programação Semanal
const MOCK_WEEKLY_SCHEDULE = [
  {
    id: 'missas',
    category: 'Missas',
    borderAccent: 'border-l-shalom-blue',
    items: [
      { label: 'SEG, SEX e SÁB', value: '18h' },
      { label: '1ª QUINTA DO MÊS — Missa pela Cura', value: '19h' },
      { label: 'DOM — 11h (Paróquia de Sant\'Ana, Rio Vermelho)', value: '' },
    ],
  },
  {
    id: 'confissoes',
    category: 'Confissões',
    borderAccent: 'border-l-shalom-orange',
    items: [
      { label: 'QUINTA', value: '16h30 às 17h30' },
      { label: 'SÁBADO', value: 'Após a Missa' },
    ],
  },
  {
    id: 'grupos-oracao',
    category: 'Grupos de Oração',
    borderAccent: 'border-l-shalom-blue',
    items: [
      { label: 'Jovens', value: 'SÁB — 16h' },
      { label: 'Adultos', value: 'TER — 19h | DOM — 9h' },
      { label: 'Casaís', value: 'QUI — 19h' },
      { label: 'Kids', value: 'QUI — 19h' },
    ],
  },
  {
    id: 'quinta-da-paz',
    category: 'Quinta da Paz',
    borderAccent: 'border-l-shalom-orange',
    items: [
      { label: 'Terço da Misericórdia', value: '15h' },
      { label: 'Oração e Aconselhamento', value: '' },
      { label: 'Confissões', value: '' },
      { label: 'Terço Mariano', value: '' },
      { label: 'Noite de Louvor', value: '19h' },
    ],
  },
  {
    id: 'oracao-aconselhamento',
    category: 'Oração e Aconselhamento',
    borderAccent: 'border-l-shalom-blue',
    items: [
      { label: 'QUARTA e QUINTA', value: '15h às 18h' },
    ],
  },
  {
    id: 'lanchonete-livraria',
    category: 'Lanchonete SH82 e Livraria Shalom',
    borderAccent: 'border-l-shalom-orange',
    items: [
      { label: 'SEGUNDA a SÁBADO', value: '14h às 21h' },
    ],
  },
];

// 4. Informativo Shalom (Notícias)
const MOCK_NEWS = [
  {
    id: 1,
    date: '05 ABR 2025',
    title: 'Jovens da Missão participam de encontro regional',
    description: 'Nosso grupo de jovens viveu um final de semana especial de formação e comunhão.',
    image: PLACEHOLDER_IMAGES.newsYouth,
    href: '/informativo',
  },
  {
    id: 2,
    date: '28 MAR 2025',
    title: 'Formação sobre a Palavra de Deus',
    description: 'Aconteceu no último sábado mais uma formação bíblica com a nossa comunidade.',
    image: PLACEHOLDER_IMAGES.newsBible,
    href: '/informativo',
  },
  {
    id: 3,
    date: '20 MAR 2025',
    title: 'Lanchonete da Missão: mais que uma refeição, um encontro!',
    description: 'Conheça o cardápio e os horários de atendimento da nossa lanchonete.',
    image: PLACEHOLDER_IMAGES.newsCafe,
    href: '/informativo',
  },
];

/* ==========================================================================
   COMPONENTE DA PÁGINA HOME
   ========================================================================== */
export function Home() {
  return (
    <div className="space-y-16 sm:space-y-24 pb-16">

      {/* 1. HERO SECTION */}
      <section className="relative min-h-[520px] sm:min-h-[600px] flex items-center bg-deep-dark text-white overflow-hidden">
        {/* Imagem de Fundo com Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src={PLACEHOLDER_IMAGES.heroBg}
            alt="Comunidade Shalom Salvador"
            className="w-full h-full object-cover object-center opacity-40 transform scale-105 transition-transform duration-1000"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-deep-dark/95 via-deep-dark/80 to-transparent" />
        </div>

        <Container className="relative z-10 py-16 sm:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Conteúdo Principal do Hero */}
            <div className="lg:col-span-8 space-y-6">
              <div className="inline-block">
                <span className="text-xs uppercase tracking-widest text-warm-cream font-medium bg-white/10 px-3 py-1 rounded-full backdrop-blur-sm border border-white/15">
                  Comunidade Católica Shalom
                </span>
              </div>

              <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-none">
                MISSÃO <span className="text-shalom-orange">Shalom</span> SALVADOR
              </h1>

              <p className="text-lg sm:text-2xl text-white/90 font-light max-w-2xl leading-relaxed">
                Uma presença de paz, evangelização e comunhão.
              </p>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4">
                <Button as={Link} to="/a-missao" variant="primary" className="text-base shadow-lg">
                  Conheça a Missão →
                </Button>
                <Button
                  as={Link}
                  to="/programacao"
                  variant="outline"
                  className="text-base text-white border-white hover:bg-white hover:text-deep-dark"
                >
                  Veja a Programação →
                </Button>
              </div>
            </div>

            {/* Elemento Decorativo na Direita (Desktop) */}
            <div className="hidden lg:flex lg:col-span-4 justify-end items-center">
              <div className="transform rotate-3 bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20 shadow-2xl max-w-xs text-center">
                <p className="font-display text-2xl text-warm-cream leading-snug">
                  "Aqui tem lugar pra você!"
                </p>
                <span className="block mt-2 text-xs text-white/70 uppercase tracking-widest font-sans">
                  Seja bem-vindo
                </span>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 2. ACESSOS RÁPIDOS — "O que você procura?" */}
      <section className="py-2">
        <Container>
          <SectionTitle
            title="O que você procura?"
            subtitle="Acesse rapidamente as principais informações da missão."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {MOCK_QUICK_ACCESS.map((item) => (
              <Link
                key={item.id}
                to={item.href}
                className="group bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md hover:border-shalom-orange/30 transition-all flex flex-col justify-between focus:outline-none focus-visible:ring-2 focus-visible:ring-shalom-orange"
              >
                <div>
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-xl mb-4 border ${item.colorBg}`}>
                    {item.icon}
                  </div>
                  <h3 className="font-display text-xl text-deep-dark group-hover:text-shalom-orange transition-colors mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed mb-4">
                    {item.description}
                  </p>
                </div>
                <div className="pt-2 text-shalom-orange font-semibold text-lg flex items-center justify-end group-hover:translate-x-1 transition-transform">
                  →
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      {/* 3. PRÓXIMOS EVENTOS */}
      <section className="py-2 bg-slate-50/50">
        <Container>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
            <SectionTitle
              title="Próximos Eventos"
              subtitle="Não perca o que está acontecendo na missão."
              className="mb-0"
            />
            <Button
              as={Link}
              to="/programacao"
              variant="outline"
              className="self-start sm:self-auto text-sm py-2 px-4 whitespace-nowrap"
            >
              Ver todos os eventos →
            </Button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {MOCK_EVENTS.map((event) => (
              <Link
                key={event.id}
                to={event.href}
                className="group bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-shadow flex flex-col h-full focus:outline-none focus-visible:ring-2 focus-visible:ring-shalom-orange"
              >
                {/* Imagem com Badge de Data */}
                <div className="relative h-48 w-full overflow-hidden">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {/* Date Badge */}
                  <div className="absolute top-4 left-4 bg-white text-deep-dark rounded-xl px-3 py-1.5 text-center shadow-md border border-gray-100">
                    <span className="block font-display text-xl font-bold leading-none text-shalom-blue">
                      {event.day}
                    </span>
                    <span className="block text-[10px] font-semibold text-gray-500 uppercase tracking-wider">
                      {event.month}
                    </span>
                  </div>
                </div>

                {/* Conteúdo do Card */}
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="font-display text-xl text-deep-dark group-hover:text-shalom-orange transition-colors mb-3">
                    {event.title}
                  </h3>

                  <div className="space-y-1 text-xs text-gray-500 mb-3">
                    <div className="flex items-center space-x-1.5">
                      <span>🕐</span>
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center space-x-1.5">
                      <span>📍</span>
                      <span>{event.location}</span>
                    </div>
                  </div>

                  <p className="text-sm text-gray-600 mb-6 flex-grow leading-relaxed">
                    {event.description}
                  </p>

                  <div className="mt-auto pt-2">
                    <span className="text-shalom-orange text-sm font-medium inline-flex items-center group-hover:underline">
                      Saiba mais →
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      {/* 4. PROGRAMAÇÃO SEMANAL */}
      <section className="py-12 bg-warm-cream/30 rounded-3xl border border-warm-cream/50">
        <Container>
          <SectionTitle
            title="Programação"
            subtitle="Confira a nossa programação semanal."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
            {MOCK_WEEKLY_SCHEDULE.map((block) => (
              <div
                key={block.id}
                className={`bg-white rounded-2xl p-6 shadow-sm border border-gray-100 border-l-4 ${block.borderAccent}`}
              >
                <h4 className="font-display text-lg text-deep-dark mb-4">
                  {block.category}
                </h4>

                <ul className="space-y-2">
                  {block.items.map((item, idx) => (
                    <li
                      key={idx}
                      className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 text-sm"
                    >
                      <span className="text-deep-dark/80">{item.label}</span>
                      {item.value && (
                        <span className="font-semibold text-shalom-blue whitespace-nowrap">
                          {item.value}
                        </span>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Button
              as={Link}
              to="/programacao"
              variant="secondary"
              className="px-8 shadow-md"
            >
              Ver programação completa →
            </Button>
          </div>
        </Container>
      </section>

      {/* 5. INFORMATIVO SHALOM */}
      <section className="py-2">
        <Container>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
            <SectionTitle
              title="Informativo Shalom"
              subtitle="Notícias, testemunhos, formações e novidades da Missão Salvador."
              className="mb-0"
            />
            <Button
              as={Link}
              to="/informativo"
              variant="outline"
              className="self-start sm:self-auto text-sm py-2 px-4 whitespace-nowrap"
            >
              Ver todas as notícias →
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {MOCK_NEWS.map((news) => (
              <Link
                key={news.id}
                to={news.href}
                className="group bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-shadow flex flex-col h-full focus:outline-none focus-visible:ring-2 focus-visible:ring-shalom-orange"
              >
                <div className="h-48 w-full overflow-hidden">
                  <img
                    src={news.image}
                    alt={news.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <span className="text-xs font-semibold text-shalom-orange mb-2">
                    {news.date}
                  </span>
                  <h3 className="font-display text-xl text-deep-dark group-hover:text-shalom-orange transition-colors mb-3 leading-snug">
                    {news.title}
                  </h3>
                  <p className="text-sm text-gray-600 mb-6 flex-grow leading-relaxed">
                    {news.description}
                  </p>
                  <div className="mt-auto pt-2">
                    <span className="text-shalom-orange text-sm font-medium inline-flex items-center group-hover:underline">
                      Leia mais →
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      {/* 6. FAÇA PARTE DA MISSÃO */}
      <section className="py-2">
        <Container>
          <div className="relative rounded-3xl bg-shalom-blue text-white overflow-hidden p-8 sm:p-12 lg:p-16 shadow-xl">
            {/* Background Pattern / Imagem Overlay Sutil */}
            <div className="absolute inset-0 opacity-10">
              <img
                src={PLACEHOLDER_IMAGES.joinBg}
                alt="Background Faça Parte"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              {/* Lado Esquerdo: Chamada */}
              <div className="lg:col-span-5 space-y-4">
                <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-white leading-tight">
                  Faça Parte da Missão
                </h2>
                <p className="text-white/80 text-lg leading-relaxed">
                  Existem várias formas de participar e apoiar esta obra.
                </p>
              </div>

              {/* Lado Direito: Os 2 Cards */}
              <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Card 1: Comunhão de Bens */}
                <div className="bg-white text-deep-dark p-6 sm:p-8 rounded-2xl shadow-lg flex flex-col justify-between">
                  <div>
                    <div className="w-12 h-12 rounded-full bg-orange-100 text-shalom-orange flex items-center justify-center text-2xl mb-4">
                      🧡
                    </div>
                    <h3 className="font-display text-xl mb-2 text-deep-dark">
                      Comunhão de Bens
                    </h3>
                    <p className="text-sm text-gray-600 mb-6 leading-relaxed">
                      Conheça essa forma de viver a partilha e colaborar com a missão.
                    </p>
                  </div>
                  <Button
                    as={Link}
                    to="/faca-parte"
                    variant="primary"
                    className="w-full text-xs sm:text-sm py-2.5 px-3 text-center"
                  >
                    Conheça a Comunhão de Bens →
                  </Button>
                </div>

                {/* Card 2: Benfeitor da Paz */}
                <div className="bg-white text-deep-dark p-6 sm:p-8 rounded-2xl shadow-lg flex flex-col justify-between">
                  <div>
                    <div className="w-12 h-12 rounded-full bg-sky-100 text-shalom-blue flex items-center justify-center text-2xl mb-4">
                      💙
                    </div>
                    <h3 className="font-display text-xl mb-2 text-deep-dark">
                      Benfeitor da Paz
                    </h3>
                    <p className="text-sm text-gray-600 mb-6 leading-relaxed">
                      Ajude a sustentar a obra de evangelização.
                    </p>
                  </div>
                  <Button
                    as={Link}
                    to="/faca-parte"
                    variant="secondary"
                    className="w-full text-xs sm:text-sm py-2.5 px-3 text-center"
                  >
                    Seja Benfeitor da Paz →
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

    </div>
  );
}

export default Home;
