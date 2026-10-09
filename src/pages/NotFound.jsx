import React from 'react';
import { Container } from '../components/Container';
import { Button } from '../components/Button';

export function NotFound() {
  return (
    <div className="py-20 sm:py-28 text-center">
      <Container>
        <h1 className="font-display text-6xl text-shalom-blue mb-4">404</h1>
        <h2 className="font-display text-2xl sm:text-3xl text-deep-dark mb-4">
          Página não encontrada
        </h2>
        <p className="text-gray-600 mb-8 max-w-md mx-auto">
          Desculpe, a página que você está procurando não existe ou foi movida.
        </p>
        <Button as="a" href="/" variant="primary">
          Voltar para a página inicial
        </Button>
      </Container>
    </div>
  );
}

export default NotFound;
