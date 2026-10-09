import React from 'react';
import { Container } from '../components/Container';
import { SectionTitle } from '../components/SectionTitle';

export function Bookstore() {
  return (
    <div className="py-12 sm:py-16">
      <Container>
        <SectionTitle
          eyebrow="Formação & Livros"
          title="Livraria"
          subtitle="Livros, artigos religiosos e materiais de formação espiritual."
        />
        <p className="text-gray-600 text-lg">Em construção.</p>
      </Container>
    </div>
  );
}

export default Bookstore;
