import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useFavorites } from '../context/FavoritesContext';
import { Heart } from 'lucide-react';

const products = [
  {
    id: 1,
    name: 'Atlas Carbon',
    category: 'Men Sunglasses',
    price: '$240',
    image: '/men.png',
  },
  {
    id: 2,
    name: 'Rose Horizon',
    category: 'Women Optical',
    price: '$180',
    image: '/women.png',
  },
  {
    id: 3,
    name: 'Midnight Aviator',
    category: 'Premium Collection',
    price: '$320',
    image: '/men.png', // Reusing placeholder
  },
  {
    id: 4,
    name: 'Blush Round',
    category: 'Women Optical',
    price: '$195',
    image: '/women.png', // Reusing placeholder
  }
];

const FeaturedProducts = () => {
  const { toggleFavorite, isFavorite } = useFavorites();

  return (
    <section className="py-24 bg-[var(--color-surface)]">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex justify-between items-end mb-16">
          <div>
            <span className="text-[var(--color-primary)] uppercase tracking-widest text-sm font-semibold">Curated Collection</span>
            <h2 className="text-4xl md:text-5xl font-light mt-2 text-[var(--color-secondary)]">Trending Now</h2>
          </div>
          <Link to="/shop" className="hidden md:block uppercase tracking-widest text-sm border-b border-[var(--color-secondary)] pb-1 hover:text-[var(--color-primary)] hover:border-[var(--color-primary)] transition-all">
            View All
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-square overflow-hidden bg-[var(--color-accent)]/20 rounded-sm mb-6 flex items-center justify-center p-8">
                <div className="absolute top-4 right-4 z-20">
                  <button 
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      toggleFavorite(product);
                    }}
                    className={`p-2 rounded-full shadow-sm transition-all ${isFavorite(product.id) ? 'bg-[var(--color-primary)] text-white' : 'bg-white/80 hover:bg-white text-gray-400 hover:text-[var(--color-primary)]'}`}
                    title={isFavorite(product.id) ? "Remove from favorites" : "Add to favorites"}
                  >
                    <Heart size={18} fill={isFavorite(product.id) ? "currentColor" : "none"} />
                  </button>
                </div>
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-auto object-contain group-hover:scale-110 transition-transform duration-700 drop-shadow-2xl"
                />
                
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300" />
                
                <div className="absolute bottom-0 left-0 w-full p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <button className="w-full py-3 bg-white text-black uppercase tracking-widest text-xs hover:bg-[var(--color-primary)] hover:text-white transition-colors">
                    Quick View
                  </button>
                </div>
              </div>
              
              <div className="text-center">
                <p className="text-sm text-gray-500 mb-1">{product.category}</p>
                <h3 className="text-lg font-medium text-[var(--color-secondary)] mb-2">{product.name}</h3>
                <p className="text-[var(--color-primary-dark)]">{product.price}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
