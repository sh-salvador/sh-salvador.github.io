/* ==========================================================================
   IMAGENS PLACEHOLDER (Substitua pelas imagens reais no futuro)
   ========================================================================== */
export const PLACEHOLDER_IMAGES = {
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

// 1. Acessos Rápidos ("O que você procura?")
export const MOCK_QUICK_ACCESS = [
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

// 3. Programação Semanal
export const MOCK_WEEKLY_SCHEDULE = [
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
export const MOCK_NEWS = [
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