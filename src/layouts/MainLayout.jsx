import React, { useState } from 'react';
import { NavLink, Link, Outlet } from 'react-router-dom';
import { Container } from '../components/Container';

const navItems = [
  { path: '/', label: 'Início' },
  { path: '/a-missao', label: 'A Missão' },
  { path: '/programacao', label: 'Programação & Eventos' },
  { path: '/lanchonete', label: 'Lanchonete' },
  { path: '/livraria', label: 'Livraria' },
  { path: '/faca-parte', label: 'Faça Parte' },
  { path: '/contato', label: 'Contato' },
];

const footerLinks = [
  { path: '/', label: 'Início' },
  { path: '/a-missao', label: 'A Missão' },
  { path: '/programacao', label: 'Programação & Eventos' },
  { path: '/lanchonete', label: 'Lanchonete' },
  { path: '/livraria', label: 'Livraria' },
  { path: '/faca-parte', label: 'Faça Parte' },
  { path: '/informativo', label: 'Informativo' },
  { path: '/contato', label: 'Contato' },
];

export function MainLayout() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-deep-dark">
      {/* Skip Link para acessibilidade */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-shalom-orange focus:text-deep-dark focus:font-medium focus:rounded-md focus:shadow-lg focus:outline-none"
      >
        Pular para o conteúdo
      </a>

      {/* Header Fixo */}
      <header className="sticky top-0 z-40 bg-white border-b border-gray-100 shadow-sm">
        <Container>
          <div className="flex items-center justify-between h-20">
            {/* Logo Placeholder */}
            <Link
              to="/"
              onClick={closeMobileMenu}
              className="flex items-center space-x-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-shalom-orange rounded-lg"
            >
              <span className="font-display text-xl sm:text-2xl text-shalom-blue tracking-tight">
                Shalom <span className="text-shalom-orange">Salvador</span>
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-6" aria-label="Navegação Principal">
              {navItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  end={item.path === '/'}
                  className={({ isActive }) =>
                    `text-sm font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-shalom-orange rounded-md px-2 py-1 ${
                      isActive
                        ? 'text-shalom-orange font-semibold border-b-2 border-shalom-orange'
                        : 'text-deep-dark hover:text-shalom-blue'
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
            </nav>

            {/* Actions: Search & Mobile Toggle */}
            <div className="flex items-center space-x-3">
              {/* Botão de Busca (Placeholder) */}
              <button
                type="button"
                aria-label="Buscar no site"
                className="p-2 text-deep-dark hover:text-shalom-blue focus:outline-none focus-visible:ring-2 focus-visible:ring-shalom-orange rounded-lg"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>

              {/* Botão Hamburger (Mobile) */}
              <button
                type="button"
                onClick={toggleMobileMenu}
                aria-label={isMobileMenuOpen ? "Fechar menu de navegação" : "Abrir menu de navegação"}
                aria-expanded={isMobileMenuOpen}
                className="lg:hidden p-2 text-deep-dark hover:text-shalom-blue focus:outline-none focus-visible:ring-2 focus-visible:ring-shalom-orange rounded-lg"
              >
                {isMobileMenuOpen ? (
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                )}
              </button>
            </div>
          </div>

          {/* Mobile Navigation Drawer */}
          {isMobileMenuOpen && (
            <nav className="lg:hidden py-4 border-t border-gray-100 space-y-2" aria-label="Navegação Mobile">
              {navItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  end={item.path === '/'}
                  onClick={closeMobileMenu}
                  className={({ isActive }) =>
                    `block px-4 py-2 text-base font-medium rounded-lg transition-colors ${
                      isActive
                        ? 'bg-warm-cream text-shalom-orange font-semibold'
                        : 'text-deep-dark hover:bg-gray-50'
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
            </nav>
          )}
        </Container>
      </header>

      {/* Conteúdo Principal */}
      <main id="main-content" className="flex-grow">
        <Outlet />
      </main>

      {/* Footer Principal */}
      <footer className="bg-shalom-blue text-white pt-12 pb-8 mt-auto">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pb-12 border-b border-white/20">
            {/* Coluna 1: Logo & Sobre */}
            <div className="space-y-4">
              <span className="font-display text-2xl tracking-tight text-white block">
                Shalom <span className="text-shalom-orange">Salvador</span>
              </span>
              <p className="text-white/80 text-sm leading-relaxed">
                Comunidade Católica Shalom - Missão Salvador. Uma família para você.
              </p>
            </div>

            {/* Coluna 2: Links Rápidos */}
            <div>
              <h3 className="font-display text-lg mb-4 text-warm-cream">Links Rápidos</h3>
              <ul className="space-y-2 text-sm">
                {footerLinks.map((link) => (
                  <li key={link.path}>
                    <Link
                      to={link.path}
                      className="text-white/80 hover:text-shalom-orange transition-colors focus:outline-none focus-visible:underline"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Coluna 3: Contato */}
            <div>
              <h3 className="font-display text-lg mb-4 text-warm-cream">Contato</h3>
              <ul className="space-y-2 text-sm text-white/80">
                <li>Telefone: (71) 99999-9999</li>
                <li>WhatsApp: (71) 99999-9999</li>
                <li>E-mail: contato@shalomsalvador.org.br</li>
                <li>Endereço: Rua Exemplo, 123 - Salvador/BA</li>
              </ul>
            </div>

            {/* Coluna 4: Redes Sociais */}
            <div>
              <h3 className="font-display text-lg mb-4 text-warm-cream">Redes Sociais</h3>
              <div className="flex space-x-4">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-white/10 rounded-lg hover:bg-shalom-orange hover:text-deep-dark transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
                  aria-label="Instagram da Missão Shalom Salvador"
                >
                  Instagram
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-white/10 rounded-lg hover:bg-shalom-orange hover:text-deep-dark transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
                  aria-label="Facebook da Missão Shalom Salvador"
                >
                  Facebook
                </a>
              </div>
            </div>
          </div>

          {/* Linha Inferior de Copyright */}
          <div className="pt-8 flex flex-col sm:flex-row justify-between items-center text-xs text-white/60 space-y-2 sm:space-y-0">
            <p>© 2025 Missão Shalom Salvador. Todos os direitos reservados.</p>
            <p className="font-medium text-white/80">Shalom em Salvador</p>
          </div>
        </Container>
      </footer>
    </div>
  );
}

export default MainLayout;
