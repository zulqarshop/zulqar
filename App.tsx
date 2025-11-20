import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Services } from './pages/Services';
import { Portfolio } from './pages/Portfolio';
import { Pricing } from './pages/Pricing';
import { Contact } from './pages/Contact';
import { Store } from './pages/Store';
import { Auth } from './pages/Auth';
import { Profile } from './pages/Profile';
import { ShopProvider } from './context/ShopContext';
import { CartDrawer } from './components/CartDrawer';

function App() {
  return (
    <ShopProvider>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="services" element={<Services />} />
            <Route path="portfolio" element={<Portfolio />} />
            <Route path="pricing" element={<Pricing />} />
            <Route path="contact" element={<Contact />} />
            <Route path="store" element={<Store />} />
            <Route path="auth" element={<Auth />} />
            <Route path="profile" element={<Profile />} />
          </Route>
        </Routes>
        <CartDrawer />
      </HashRouter>
    </ShopProvider>
  );
}

export default App;