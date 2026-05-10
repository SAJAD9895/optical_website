import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-[var(--color-secondary)] text-white pt-20 pb-10 border-t border-white/10">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div>
            <h3 className="text-2xl font-bold tracking-widest text-[var(--color-primary)] uppercase mb-6">
              Lens Cart
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Elevating vision to an art form. Premium eyewear collections for the modern aesthetic.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full glass-dark flex items-center justify-center hover:bg-[var(--color-primary)] transition-colors">
                <span className="sr-only">Instagram</span>
                IG
              </a>
              <a href="#" className="w-10 h-10 rounded-full glass-dark flex items-center justify-center hover:bg-[var(--color-primary)] transition-colors">
                <span className="sr-only">Facebook</span>
                FB
              </a>
              <a href="#" className="w-10 h-10 rounded-full glass-dark flex items-center justify-center hover:bg-[var(--color-primary)] transition-colors">
                <span className="sr-only">Twitter</span>
                TW
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-sm uppercase tracking-widest font-semibold mb-6">Shop</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li><a href="#" className="hover:text-[var(--color-primary)] transition-colors">Men's Collection</a></li>
              <li><a href="#" className="hover:text-[var(--color-primary)] transition-colors">Women's Collection</a></li>
              <li><a href="#" className="hover:text-[var(--color-primary)] transition-colors">Kids Eyewear</a></li>
              <li><a href="#" className="hover:text-[var(--color-primary)] transition-colors">Premium Brands</a></li>
              <li><a href="#" className="hover:text-[var(--color-primary)] transition-colors">Contact Lenses</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm uppercase tracking-widest font-semibold mb-6">Support</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li><a href="#" className="hover:text-[var(--color-primary)] transition-colors">Book Eye Test</a></li>
              <li><a href="#" className="hover:text-[var(--color-primary)] transition-colors">Virtual Try-On FAQ</a></li>
              <li><Link to="/about" className="hover:text-[var(--color-primary)] transition-colors">About Lens Cart</Link></li>
              <li><a href="#" className="hover:text-[var(--color-primary)] transition-colors">Shipping & Returns</a></li>
              <li><a href="#" className="hover:text-[var(--color-primary)] transition-colors">Track Order</a></li>
              <li><a href="#" className="hover:text-[var(--color-primary)] transition-colors">Contact Us</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm uppercase tracking-widest font-semibold mb-6">Newsletter</h4>
            <p className="text-gray-400 text-sm mb-4">Subscribe to receive updates, access to exclusive deals, and more.</p>
            <form className="flex flex-col gap-3">
              <input
                type="email"
                placeholder="Enter your email address"
                className="bg-white/5 border border-white/10 px-4 py-3 text-sm focus:outline-none focus:border-[var(--color-primary)] text-white"
              />
              <button
                type="submit"
                className="bg-[var(--color-primary)] text-white px-4 py-3 text-sm uppercase tracking-widest hover:bg-[var(--color-primary-dark)] transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-xs mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Lens Cart Eyewear. All rights reserved.
          </p>
          <div className="flex space-x-6 text-xs text-gray-500">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
