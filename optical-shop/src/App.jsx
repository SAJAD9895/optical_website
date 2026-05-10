import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Shop from './pages/Shop';
import Premium from './pages/Premium';
import VirtualTryOn from './pages/VirtualTryOn';
import BookTest from './pages/BookTest';
import About from './pages/About';
import Contact from './pages/Contact';
import Favorites from './pages/Favorites';
import Footer from './components/Footer';
import { FavoritesProvider } from './context/FavoritesContext';

function App() {
  return (
    <FavoritesProvider>
      <Router>
        <div className="min-h-screen flex flex-col bg-[var(--color-background)]">
        <Navbar />
        <main className="flex-grow pt-20">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/premium" element={<Premium />} />
            <Route path="/virtual-try-on" element={<VirtualTryOn />} />
            <Route path="/book-test" element={<BookTest />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/favorites" element={<Favorites />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
    </FavoritesProvider>
  );
}

export default App;
