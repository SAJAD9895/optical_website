import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';

const Hero = () => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);

  return (
    <section className="relative h-[90vh] flex items-center justify-center overflow-hidden bg-[var(--color-secondary)]">
      <motion.div 
        style={{ y }}
        className="absolute inset-0 z-0"
      >
        <div className="absolute inset-0 bg-black/40 z-10"></div>
        <img 
          src="/hero.png" 
          alt="Premium Eyewear Showroom" 
          className="w-full h-full object-cover object-center"
        />
      </motion.div>

      <div className="container mx-auto px-6 lg:px-12 relative z-20 text-center flex flex-col items-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-white/80 uppercase tracking-[0.3em] text-sm mb-4"
        >
          Luxury Vision Redefined
        </motion.p>
        
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-5xl md:text-7xl lg:text-8xl font-light text-white mb-8 max-w-4xl leading-tight"
        >
          See The World In <span className="text-[var(--color-primary)] italic">Elegance</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-6 mt-8"
        >
          <Link to="/shop" className="px-8 py-4 bg-[var(--color-primary)] text-white hover:bg-[var(--color-primary-dark)] transition-all duration-300 uppercase tracking-widest text-sm rounded-sm shadow-lg hover:-translate-y-1">
            Shop Eyewear
          </Link>
          <Link to="/book-test" className="px-8 py-4 glass text-white hover:bg-white/20 transition-all duration-300 uppercase tracking-widest text-sm rounded-sm shadow-lg hover:-translate-y-1">
            Book Eye Test
          </Link>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20 flex flex-col items-center"
      >
        <span className="text-white/60 text-xs tracking-widest uppercase mb-2">Scroll</span>
        <div className="w-px h-12 bg-white/20 relative overflow-hidden">
          <motion.div 
            animate={{ y: [0, 48, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
            className="w-full h-1/2 bg-[var(--color-primary)] absolute top-0 left-0"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
