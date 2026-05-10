import React from 'react';
import { motion } from 'framer-motion';
import { useFavorites } from '../context/FavoritesContext';
import { HeartOff } from 'lucide-react';
import { Link } from 'react-router-dom';

const Favorites = () => {
  const { favorites, removeFavorite } = useFavorites();

  return (
    <div className="pt-24 pb-20 bg-[var(--color-surface)] min-h-screen">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="mb-12 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-light text-[var(--color-secondary)]">Your Favorites</h1>
          <p className="text-gray-500 mt-2">Products you have saved for later.</p>
        </motion.div>

        {favorites.length === 0 ? (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex flex-col items-center justify-center py-20">
            <HeartOff size={64} className="text-gray-300 mb-6" />
            <h2 className="text-2xl text-[var(--color-secondary)] font-medium mb-4">Your wishlist is empty</h2>
            <p className="text-gray-500 mb-8">Save items you love to your favorites to review them later.</p>
            <Link to="/shop" className="px-8 py-3 bg-[var(--color-secondary)] text-white uppercase tracking-widest text-sm hover:bg-[var(--color-primary)] transition-colors">
              Continue Shopping
            </Link>
          </motion.div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {favorites.map((product, index) => (
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
                  <div className="absolute top-4 right-4 z-10">
                    <button 
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        removeFavorite(product.id);
                      }}
                      className="p-2 bg-white/80 rounded-full hover:bg-white text-[var(--color-primary)] shadow-sm transition-all"
                      title="Remove from favorites"
                    >
                      <HeartOff size={18} />
                    </button>
                  </div>
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
        )}
      </div>
    </div>
  );
};

export default Favorites;
