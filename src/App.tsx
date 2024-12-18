import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import PajebEngineering from './pages/subsidiaries/PajebEngineering';
import PajebPaint from './pages/subsidiaries/PajebPaint';
import CabConnect from './pages/subsidiaries/CabConnect';
import FoodBasket from './pages/subsidiaries/FoodBasket';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/subsidiaries/pajeb-engineering" element={<PajebEngineering />} />
            <Route path="/subsidiaries/pajeb-paint" element={<PajebPaint />} />
            <Route path="/subsidiaries/cab-connect" element={<CabConnect />} />
            <Route path="/subsidiaries/food-basket" element={<FoodBasket />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}