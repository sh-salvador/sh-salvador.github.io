import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';

import Home from './pages/Home';
import About from './pages/About';
import Events from './pages/Events';
import Cafe from './pages/Cafe';
import Bookstore from './pages/Bookstore';
import Join from './pages/Join';
import News from './pages/News';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="a-missao" element={<About />} />
          <Route path="programacao" element={<Events />} />
          <Route path="lanchonete" element={<Cafe />} />
          <Route path="livraria" element={<Bookstore />} />
          <Route path="faca-parte" element={<Join />} />
          <Route path="informativo" element={<News />} />
          <Route path="contato" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
