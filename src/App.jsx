import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage/LandingPage';
import About from './pages/About/About';
import Life from './pages/Life/Life';
import Quality from './pages/Quality/Quality';
import Contact from './pages/Contact/Contact';
import LEO from './pages/LEO/LEO';
import Aqua from './pages/Aqua/Aqua';
import Kavach from './pages/Kavach/Kavach';
import T90 from './pages/T90/T90';
import Libra from './pages/Libra/Libra';
import Cris from './pages/Cris/Cris';
import './App.css';
import ScrollToTop from './ScrollToTop';

function App() {
  return (
    <div className="App">
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/life" element={<Life />} />
          <Route path="/quality" element={<Quality />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/leo" element={<LEO />} />
          <Route path="/aqua" element={<Aqua />} />
          <Route path="/products/aqua" element={<Aqua />} />
          <Route path="/products/kavach" element={<Kavach />} />
          <Route path="/kavach" element={<Kavach />} />
          <Route path="/products/t90" element={<T90 />} />
          <Route path="/t90" element={<T90 />} />
          <Route path="/products/libra" element={<Libra />} />
          <Route path="/libra" element={<Libra />} />
          <Route path="/products/cris" element={<Cris />} />
          <Route path="/cris" element={<Cris />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
