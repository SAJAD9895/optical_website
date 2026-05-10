import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ScanFace, Camera, Sparkles } from 'lucide-react';

const VirtualTryOn = () => {
  const [scanning, setScanning] = useState(false);

  return (
    <div className="pt-24 pb-20 bg-[var(--color-surface)] min-h-screen">
      <div className="container mx-auto px-6 lg:px-12 text-center mb-12">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <h1 className="text-4xl md:text-5xl font-light text-[var(--color-secondary)] mb-4">
            AI <span className="italic font-normal text-[var(--color-primary)]">Virtual</span> Try-On
          </h1>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Experience our premium eyewear collection from the comfort of your home. Use your camera to see how our frames look on you in real-time.
          </p>
        </motion.div>
      </div>

      <div className="container mx-auto px-6 lg:px-12 max-w-4xl">
        <div className="bg-black/5 p-2 rounded-2xl">
          <div className="bg-[var(--color-secondary)] rounded-xl aspect-[16/9] md:aspect-[21/9] relative overflow-hidden flex flex-col items-center justify-center group">
            
            {/* Background elements */}
            <div className="absolute inset-0 bg-gradient-to-tr from-black to-[var(--color-primary-dark)] opacity-50 z-0"></div>
            
            {/* UI Overlay */}
            <div className="absolute inset-0 z-10 flex flex-col items-center justify-center p-8 text-white">
              {!scanning ? (
                <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="flex flex-col items-center">
                  <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center mb-6 backdrop-blur-md border border-white/20">
                    <Camera size={32} className="text-white" />
                  </div>
                  <h3 className="text-2xl font-light mb-2">Enable Camera Access</h3>
                  <p className="text-white/60 mb-8 text-center text-sm">We need access to your camera to scan your face dimensions.</p>
                  <button 
                    onClick={() => setScanning(true)}
                    className="px-8 py-4 bg-[var(--color-primary)] text-white hover:bg-white hover:text-[var(--color-secondary)] transition-colors duration-300 uppercase tracking-widest text-sm rounded-full flex items-center gap-2 shadow-lg"
                  >
                    <ScanFace size={18} /> Start Face Scan
                  </button>
                </motion.div>
              ) : (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex flex-col items-center w-full max-w-md">
                  <div className="relative w-48 h-64 border-2 border-[var(--color-primary)] rounded-full mb-6 overflow-hidden flex items-center justify-center">
                    <motion.div 
                      animate={{ y: ['-100%', '100%'] }} 
                      transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
                      className="absolute top-0 left-0 w-full h-1 bg-[var(--color-primary)] shadow-[0_0_15px_var(--color-primary)] z-20"
                    />
                    <Sparkles className="text-[var(--color-primary)]/50 animate-pulse w-16 h-16" />
                  </div>
                  <h3 className="text-xl font-light mb-2">Analyzing Facial Structure...</h3>
                  <p className="text-[var(--color-primary)] text-sm animate-pulse">Please keep your head still.</p>
                </motion.div>
              )}
            </div>

            {/* Corner brackets for futuristic look */}
            <div className="absolute top-6 left-6 w-8 h-8 border-t-2 border-l-2 border-white/30 z-20"></div>
            <div className="absolute top-6 right-6 w-8 h-8 border-t-2 border-r-2 border-white/30 z-20"></div>
            <div className="absolute bottom-6 left-6 w-8 h-8 border-b-2 border-l-2 border-white/30 z-20"></div>
            <div className="absolute bottom-6 right-6 w-8 h-8 border-b-2 border-r-2 border-white/30 z-20"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VirtualTryOn;
