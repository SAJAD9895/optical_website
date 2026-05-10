import React from 'react';
import { motion } from 'framer-motion';

const Premium = () => {
  const brands = ['GUCCI', 'PRADA', 'TOM FORD', 'RAY-BAN', 'DIOR', 'CHANEL', 'OAKLEY', 'VERSACE'];

  return (
    <div className="pt-24 pb-20 bg-[var(--color-secondary)] text-white min-h-screen flex flex-col items-center">
      <div className="container mx-auto px-6 lg:px-12 text-center mb-20">
        <motion.span 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          className="text-[var(--color-primary)] uppercase tracking-widest text-sm font-semibold mb-4 block"
        >
          Luxury Collection
        </motion.span>
        <motion.h1 
          initial={{ opacity: 0, y: 30 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-light mb-6"
        >
          Premium <span className="italic font-normal">Brands</span>
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-gray-400 max-w-2xl mx-auto"
        >
          Explore our hand-picked selection of the world's most prestigious luxury eyewear brands. Elegance, craftsmanship, and timeless design.
        </motion.p>
      </div>

      {/* Infinite Marquee */}
      <div className="w-full overflow-hidden bg-white/5 py-10 border-y border-white/10 mb-20 flex">
        <motion.div
          animate={{ x: [0, -1000] }}
          transition={{ repeat: Infinity, ease: "linear", duration: 20 }}
          className="flex whitespace-nowrap gap-20 px-10 items-center"
        >
          {[...brands, ...brands, ...brands].map((brand, i) => (
            <span key={i} className="text-4xl md:text-6xl font-serif text-white/50 uppercase hover:text-[var(--color-primary)] transition-colors cursor-pointer">
              {brand}
            </span>
          ))}
        </motion.div>
      </div>

      <div className="container mx-auto px-6 lg:px-12 grid grid-cols-1 md:grid-cols-2 gap-12">
        <motion.div 
          initial={{ opacity: 0, y: 50 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }}
          className="relative aspect-[4/5] bg-white/5 flex items-center justify-center overflow-hidden group"
        >
          <img src="/men.png" alt="Premium Men" className="w-2/3 h-auto object-contain z-10 group-hover:scale-110 transition-transform duration-700" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-20 flex items-end p-10">
            <div>
              <h3 className="text-3xl font-light mb-2">Tom Ford Exclusive</h3>
              <p className="text-gray-400 text-sm uppercase tracking-widest">Shop Collection &rarr;</p>
            </div>
          </div>
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, y: 50 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="relative aspect-[4/5] bg-white/5 flex items-center justify-center overflow-hidden group"
        >
          <img src="/women.png" alt="Premium Women" className="w-2/3 h-auto object-contain z-10 group-hover:scale-110 transition-transform duration-700" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-20 flex items-end p-10">
            <div>
              <h3 className="text-3xl font-light mb-2">Gucci Summer '26</h3>
              <p className="text-[var(--color-primary)] text-sm uppercase tracking-widest">Shop Collection &rarr;</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Premium;
