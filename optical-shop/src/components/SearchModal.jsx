import React, { useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, X } from 'lucide-react';

const SearchModal = ({ isOpen, onClose }) => {
  const inputRef = useRef(null);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      setTimeout(() => inputRef.current.focus(), 100);
    }
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-[var(--color-secondary)]/95 backdrop-blur-md z-[60] flex flex-col"
          >
            <div className="container mx-auto px-6 py-6 flex justify-end">
              <button onClick={onClose} className="p-2 text-white/50 hover:text-white hover:bg-white/10 rounded-full transition-colors">
                <X size={32} />
              </button>
            </div>
            
            <div className="flex-grow flex items-center justify-center container mx-auto px-6 lg:px-12">
              <motion.div 
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 20, opacity: 0 }}
                className="w-full max-w-4xl"
              >
                <form className="relative flex items-center" onSubmit={(e) => e.preventDefault()}>
                  <Search className="absolute left-6 text-white/50" size={32} />
                  <input 
                    ref={inputRef}
                    type="text" 
                    placeholder="What are you looking for?" 
                    className="w-full bg-transparent border-b-2 border-white/20 text-white text-3xl md:text-5xl font-light py-6 pl-20 pr-6 focus:outline-none focus:border-[var(--color-primary)] placeholder-white/20 transition-colors"
                  />
                </form>

                <div className="mt-12">
                  <h4 className="text-white/40 uppercase tracking-widest text-sm mb-6">Popular Searches</h4>
                  <div className="flex flex-wrap gap-4">
                    {['Men Sunglasses', 'Gucci Frames', 'Blue Light Glasses', 'Contact Lenses', 'Titanium Frames'].map((term) => (
                      <button key={term} className="px-6 py-3 rounded-full border border-white/20 text-white/70 hover:bg-white hover:text-black transition-all">
                        {term}
                      </button>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default SearchModal;
