import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from '../components/Container';
import { Button } from '../components/Button';
import { SectionTitle } from '../components/SectionTitle';
import { Card } from '../components/Card'
import { formatDate } from '../lib/formatDate';
import { MOCK_NEWS, MOCK_WEEKLY_SCHEDULE, MOCK_QUICK_ACCESS, PLACEHOLDER_IMAGES } from '../data/mock'
import { Hero } from '../components/home/Hero';
import { QuickAccess } from '../components/home/QuickAccess';
import { UpcomingEvents } from '../components/home/UpcomingEvents';
import { WeeklySchedule } from '../components/home/WeeklySchedule';
import { News } from '../components/home/News';
import { Join } from '../components/home/Join';

/* ==========================================================================
   COMPONENTE DA PÁGINA HOME
   ========================================================================== */
export function Home() {
  return (
    <div className="space-y-16 sm:space-y-24 pb-16">

      {/* 1. HERO SECTION */}
      <Hero />

      {/* 2. ACESSOS RÁPIDOS — "O que você procura?" */}
      <QuickAccess />

      {/* 3. PRÓXIMOS EVENTOS */}
      <UpcomingEvents />

      {/* 4. PROGRAMAÇÃO SEMANAL */}
      <WeeklySchedule />

      {/* 5. INFORMATIVO SHALOM */}
      <News />

      {/* 6. FAÇA PARTE DA MISSÃO */}
      <Join />

    </div>
  );
}

export default Home;
