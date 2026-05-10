import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const OfferZone = () => {
  return (
    <section className="py-24 bg-[var(--color-secondary)] text-white overflow-hidden relative">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-[var(--color-primary-dark)]/20 -skew-x-12 transform origin-top-right"></div>
      
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2"
          >
            <span className="text-[var(--color-primary)] uppercase tracking-widest text-sm font-semibold mb-4 block">Limited Time Offer</span>
            <h2 className="text-4xl md:text-6xl font-light mb-6">Summer <span className="italic font-normal">Sale</span> is Here</h2>
            <p className="text-gray-400 mb-8 max-w-md text-lg">
              Upgrade your vision with our premium collection. Get up to 40% off on selected luxury sunglasses and optical frames.
            </p>
            
            <div className="flex gap-4 mb-10">
              <div className="flex flex-col items-center justify-center bg-white/5 border border-white/10 p-4 rounded-sm min-w-[80px]">
                <span className="text-2xl font-light">04</span>
                <span className="text-xs uppercase text-gray-500 tracking-widest mt-1">Days</span>
              </div>
              <div className="flex flex-col items-center justify-center bg-white/5 border border-white/10 p-4 rounded-sm min-w-[80px]">
                <span className="text-2xl font-light">12</span>
                <span className="text-xs uppercase text-gray-500 tracking-widest mt-1">Hours</span>
              </div>
              <div className="flex flex-col items-center justify-center bg-white/5 border border-white/10 p-4 rounded-sm min-w-[80px]">
                <span className="text-2xl font-light">45</span>
                <span className="text-xs uppercase text-gray-500 tracking-widest mt-1">Mins</span>
              </div>
            </div>
            
            <Link to="/shop" className="inline-block px-8 py-4 bg-[var(--color-primary)] text-white hover:bg-white hover:text-[var(--color-secondary)] transition-colors duration-300 uppercase tracking-widest text-sm rounded-sm">
              Shop The Sale
            </Link>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2 relative"
          >
            <div className="relative aspect-[4/3] w-full flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-tr from-[var(--color-primary)]/40 to-transparent rounded-full blur-3xl"></div>
              <img 
                src="/men.png" 
                alt="Offer Sunglasses" 
                className="relative z-10 w-[80%] h-auto object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)] transform -rotate-12"
              />
              
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                className="absolute top-10 right-10 glass-dark p-6 rounded-full flex flex-col items-center justify-center w-32 h-32 z-20 border border-[var(--color-primary)]/30"
              >
                <span className="text-3xl font-light text-[var(--color-primary)]">-40%</span>
                <span className="text-xs uppercase tracking-widest mt-1">Off</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default OfferZone;
