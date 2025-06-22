import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage/LandingPage';
import About from './pages/About/About';
import Life from './pages/Life/Life';
import Quality from './pages/Quality/Quality';
import Contact from './pages/Contact/Contact';
import Product from './pages/Product';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/life" element={<Life />} />
          <Route path="/quality" element={<Quality />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/products" element={<Product />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
