import React, { useEffect, useState } from 'react';
import { PROMOS } from '../data/mockData';
import { motion, AnimatePresence } from 'framer-motion';
export const PromoCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % PROMOS.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);
  return (
    <div className="relative w-full px-4 py-2">
      <div className="relative h-48 w-full overflow-hidden rounded-none shadow-sm bg-noise">
        <AnimatePresence initial={false}>
          <motion.div
            key={currentIndex}
            initial={{
              opacity: 0,
              scale: 1.05
            }}
            animate={{
              opacity: 1,
              scale: 1
            }}
            exit={{
              opacity: 0
            }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1]
            }}
            className="absolute inset-0 w-full h-full bg-[#1a1a1a]">
            
            <img
              src={PROMOS[currentIndex].imageUrl}
              alt={PROMOS[currentIndex].title}
              className="absolute inset-0 w-full h-full object-cover opacity-50 mix-blend-luminosity" />
            
            <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a]/80 via-transparent to-transparent z-10" />

            <div className="relative z-20 h-full flex flex-col justify-end p-5 text-[#faf8f5]">
              <span className="text-[10px] uppercase tracking-[0.2em] mb-2 text-[#faf8f5]/70">
                Editorial
              </span>
              <h3 className="text-2xl font-serif font-medium leading-tight mb-1">
                {PROMOS[currentIndex].title}
              </h3>
              <p className="text-xs font-light tracking-wide text-[#faf8f5]/90">
                {PROMOS[currentIndex].subtitle}
              </p>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="flex justify-center gap-2 mt-4">
        {PROMOS.map((_, idx) =>
        <button
          key={idx}
          onClick={() => setCurrentIndex(idx)}
          className={`h-0.5 transition-all duration-500 ${idx === currentIndex ? 'w-6 bg-[#1a1a1a]' : 'w-2 bg-[#e8e4dc]'}`}
          aria-label={`Go to slide ${idx + 1}`} />

        )}
      </div>
    </div>);

};