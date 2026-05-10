import React from 'react';
import { motion } from 'framer-motion';

const Shop = () => {
  const products = [
    { id: 1, name: 'Atlas Carbon', category: 'Men Sunglasses', price: '$240', image: '/men.png' },
    { id: 2, name: 'Rose Horizon', category: 'Women Optical', price: '$180', image: '/women.png' },
    { id: 3, name: 'Midnight Aviator', category: 'Premium Collection', price: '$320', image: '/men.png' },
    { id: 4, name: 'Blush Round', category: 'Women Optical', price: '$195', image: '/women.png' },
    { id: 5, name: 'Onyx Square', category: 'Men Optical', price: '$160', image: '/men.png' },
    { id: 6, name: 'Golden Hour', category: 'Women Sunglasses', price: '$210', image: '/women.png' },
    { id: 7, name: 'Titanium Edge', category: 'Premium Collection', price: '$350', image: '/men.png' },
    { id: 8, name: 'Clear Vision', category: 'Computer Glasses', price: '$120', image: '/women.png' },
  ];

  return (
    <div className="pt-24 pb-20 bg-[var(--color-surface)] min-h-screen">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
            <h1 className="text-4xl md:text-5xl font-light text-[var(--color-secondary)]">Shop All Eyewear</h1>
            <p className="text-gray-500 mt-2">Discover our complete collection of premium frames.</p>
          </motion.div>
          
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.2 }} className="mt-6 md:mt-0 flex gap-4">
            <select className="px-4 py-2 border border-gray-200 bg-white text-sm focus:outline-none focus:border-[var(--color-primary)]">
              <option>Category: All</option>
              <option>Men</option>
              <option>Women</option>
              <option>Kids</option>
              <option>Computer Glasses</option>
            </select>
            <select className="px-4 py-2 border border-gray-200 bg-white text-sm focus:outline-none focus:border-[var(--color-primary)]">
              <option>Sort By: Featured</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
            </select>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-square overflow-hidden bg-white/50 border border-gray-100 rounded-sm mb-6 flex items-center justify-center p-8">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-auto object-contain group-hover:scale-110 transition-transform duration-700 drop-shadow-lg"
                />
                <div className="absolute bottom-0 left-0 w-full p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <button className="w-full py-3 bg-[var(--color-secondary)] text-white uppercase tracking-widest text-xs hover:bg-[var(--color-primary)] transition-colors">
                    Add To Cart
                  </button>
                </div>
              </div>
              <div className="text-center">
                <p className="text-xs uppercase tracking-widest text-gray-400 mb-1">{product.category}</p>
                <h3 className="text-lg font-medium text-[var(--color-secondary)] mb-1">{product.name}</h3>
                <p className="text-[var(--color-primary-dark)] font-medium">{product.price}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Shop;
