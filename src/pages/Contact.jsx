import React from 'react';
import { Container } from '../components/Container';
import { SectionTitle } from '../components/SectionTitle';

export function Contact() {
  return (
    <div className="py-12 sm:py-16">
      <Container>
        <SectionTitle
          eyebrow="Fale Conosco"
          title="Contato"
          subtitle="Entre em contato com nossa equipe ou visite nosso centro evangelizador."
        />
        <p className="text-gray-600 text-lg">Em construção.</p>
      </Container>
    </div>
  );
}

export default Contact;
