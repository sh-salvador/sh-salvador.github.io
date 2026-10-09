import React from 'react';
import { Container } from '../components/Container';
import { SectionTitle } from '../components/SectionTitle';

export function Join() {
  return (
    <div className="py-12 sm:py-16">
      <Container>
        <SectionTitle
          eyebrow="Engaje-se"
          title="Faça Parte"
          subtitle="Descubra como participar dos grupos de oração, voluntariado e vocacional."
        />
        <p className="text-gray-600 text-lg">Em construção.</p>
      </Container>
    </div>
  );
}

export default Join;
