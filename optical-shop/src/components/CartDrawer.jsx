import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Trash2 } from 'lucide-react';

const CartDrawer = ({ isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[60]"
          />
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 h-full w-full md:w-[400px] bg-white z-[70] shadow-2xl flex flex-col"
          >
            <div className="p-6 border-b border-gray-100 flex justify-between items-center bg-[var(--color-surface)]">
              <h2 className="text-xl font-light text-[var(--color-secondary)] uppercase tracking-widest">Your Cart</h2>
              <button onClick={onClose} className="p-2 hover:bg-black/5 rounded-full transition-colors">
                <X size={20} />
              </button>
            </div>

            <div className="flex-grow overflow-y-auto p-6 flex flex-col gap-6">
              {/* Cart Item 1 */}
              <div className="flex gap-4">
                <div className="w-24 h-24 bg-[var(--color-surface)] rounded-sm flex items-center justify-center p-2">
                  <img src="/men.png" alt="Atlas Carbon" className="w-full h-auto object-contain" />
                </div>
                <div className="flex-grow flex flex-col justify-center">
                  <div className="flex justify-between items-start">
                    <h3 className="text-sm font-medium text-[var(--color-secondary)]">Atlas Carbon</h3>
                    <button className="text-gray-400 hover:text-red-500 transition-colors"><Trash2 size={16} /></button>
                  </div>
                  <p className="text-xs text-gray-500 mt-1 uppercase tracking-widest">Men Sunglasses</p>
                  <div className="flex justify-between items-center mt-3">
                    <div className="flex items-center border border-gray-200 rounded-sm">
                      <button className="px-2 py-1 text-gray-500 hover:bg-gray-100">-</button>
                      <span className="px-2 text-sm">1</span>
                      <button className="px-2 py-1 text-gray-500 hover:bg-gray-100">+</button>
                    </div>
                    <span className="font-medium text-[var(--color-primary-dark)]">$240.00</span>
                  </div>
                </div>
              </div>

              {/* Cart Item 2 */}
              <div className="flex gap-4">
                <div className="w-24 h-24 bg-[var(--color-surface)] rounded-sm flex items-center justify-center p-2">
                  <img src="/women.png" alt="Rose Horizon" className="w-full h-auto object-contain" />
                </div>
                <div className="flex-grow flex flex-col justify-center">
                  <div className="flex justify-between items-start">
                    <h3 className="text-sm font-medium text-[var(--color-secondary)]">Rose Horizon</h3>
                    <button className="text-gray-400 hover:text-red-500 transition-colors"><Trash2 size={16} /></button>
                  </div>
                  <p className="text-xs text-gray-500 mt-1 uppercase tracking-widest">Women Optical</p>
                  <div className="flex justify-between items-center mt-3">
                    <div className="flex items-center border border-gray-200 rounded-sm">
                      <button className="px-2 py-1 text-gray-500 hover:bg-gray-100">-</button>
                      <span className="px-2 text-sm">1</span>
                      <button className="px-2 py-1 text-gray-500 hover:bg-gray-100">+</button>
                    </div>
                    <span className="font-medium text-[var(--color-primary-dark)]">$180.00</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-6 border-t border-gray-100 bg-[var(--color-surface)]">
              <div className="flex justify-between items-center mb-4 text-sm">
                <span className="text-gray-500 uppercase tracking-widest">Subtotal</span>
                <span className="font-medium text-lg">$420.00</span>
              </div>
              <p className="text-xs text-gray-400 mb-6 text-center">Shipping & taxes calculated at checkout.</p>
              <button className="w-full py-4 bg-[var(--color-secondary)] text-white uppercase tracking-widest text-sm hover:bg-[var(--color-primary)] transition-colors">
                Proceed to Checkout
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default CartDrawer;
