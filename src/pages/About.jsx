import React from 'react';
import { Container } from '../components/Container';
import { SectionTitle } from '../components/SectionTitle';

export function About() {
  return (
    <div className="py-12 sm:py-16">
      <Container>
        <SectionTitle
          eyebrow="Quem somos"
          title="A Missão"
          subtitle="Conheça a história e o carisma da Comunidade Católica Shalom em Salvador."
        />
        <p className="text-gray-600 text-lg">Em construção.</p>
      </Container>
    </div>
  );
}

export default About;
