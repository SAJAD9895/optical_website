import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Heart, Search, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import CartDrawer from './CartDrawer';
import SearchModal from './SearchModal';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'glass py-3 shadow-sm' : 'bg-transparent py-5'
        }`}
    >
      <div className="container mx-auto px-6 lg:px-12 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold tracking-widest text-[var(--color-primary-dark)] uppercase">
          Lens Cart
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-8 text-sm uppercase tracking-wide font-medium">
          <Link to="/shop" className="hover:text-[var(--color-primary)] transition-colors">Shop</Link>
          <Link to="/premium" className="hover:text-[var(--color-primary)] transition-colors">Premium</Link>
          <Link to="/virtual-try-on" className="hover:text-[var(--color-primary)] transition-colors">Try-On</Link>
          <Link to="/book-test" className="hover:text-[var(--color-primary)] transition-colors">Eye Test</Link>
          <Link to="/about" className="hover:text-[var(--color-primary)] transition-colors">About</Link>
          <Link to="/contact" className="hover:text-[var(--color-primary)] transition-colors">Contact</Link>
        </div>

        {/* Icons */}
        <div className="hidden md:flex items-center space-x-6">
          <button onClick={() => setSearchOpen(true)} className="hover:text-[var(--color-primary)] transition-colors"><Search size={20} /></button>
          <button className="hover:text-[var(--color-primary)] transition-colors"><Heart size={20} /></button>
          <button onClick={() => setCartOpen(true)} className="hover:text-[var(--color-primary)] transition-colors relative">
            <ShoppingCart size={20} />
            <span className="absolute -top-2 -right-2 bg-[var(--color-primary)] text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">2</span>
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-gray-100"
          >
            <div className="flex flex-col py-4 px-6 space-y-4">
              <Link to="/shop" className="text-lg">Shop</Link>
              <Link to="/premium" className="text-lg">Premium</Link>
              <Link to="/virtual-try-on" className="text-lg">Try-On</Link>
              <Link to="/book-test" className="text-lg">Eye Test</Link>
              <Link to="/about" className="text-lg">About</Link>
              <Link to="/contact" className="text-lg">Contact</Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <CartDrawer isOpen={cartOpen} onClose={() => setCartOpen(false)} />
      <SearchModal isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
    </motion.nav>
  );
};

export default Navbar;
