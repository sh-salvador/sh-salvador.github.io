import React from 'react';
import { Container } from '../components/Container';
import { SectionTitle } from '../components/SectionTitle';

export function News() {
  return (
    <div className="py-12 sm:py-16">
      <Container>
        <SectionTitle
          eyebrow="Notícias & Artigos"
          title="Informativo"
          subtitle="Acompanhe as novidades e testemunhos da Missão Shalom Salvador."
        />
        <p className="text-gray-600 text-lg">Em construção.</p>
      </Container>
    </div>
  );
}

export default News;
