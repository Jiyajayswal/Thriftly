import React, { useState } from 'react';
import { MapPin, ChevronDown } from 'lucide-react';
import { useAppContext } from '../context/AppContext';
import { AnimatePresence, motion } from 'framer-motion';
export const LocationFilter = () => {
  const { currentLocation, locations, setCurrentLocation } = useAppContext();
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="relative z-30 px-4 py-3">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 w-full group">
        
        <div className="w-8 h-8 rounded-full border border-[#e8e4dc] flex items-center justify-center bg-white group-hover:border-[#c2410c] transition-colors">
          <MapPin size={14} className="text-[#1a1a1a]" strokeWidth={1.5} />
        </div>
        <div className="flex flex-col items-start">
          <span className="text-[10px] uppercase tracking-widest text-[#8c8c8c] font-medium">
            Location
          </span>
          <div className="flex items-center gap-1">
            <span className="text-sm font-serif font-medium text-[#1a1a1a]">
              {currentLocation.name}
            </span>
            <ChevronDown
              size={14}
              className={`text-[#1a1a1a] transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
              strokeWidth={1.5} />
            
          </div>
        </div>
      </button>

      <AnimatePresence>
        {isOpen &&
        <>
            <motion.div
            initial={{
              opacity: 0
            }}
            animate={{
              opacity: 1
            }}
            exit={{
              opacity: 0
            }}
            className="fixed inset-0 bg-[#1a1a1a]/20 backdrop-blur-sm z-40"
            onClick={() => setIsOpen(false)} />
          
            <motion.div
            initial={{
              opacity: 0,
              y: -10,
              scale: 0.98
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1
            }}
            exit={{
              opacity: 0,
              y: -10,
              scale: 0.98
            }}
            transition={{
              duration: 0.2
            }}
            className="absolute top-full left-4 right-4 bg-[#faf8f5] rounded-xl shadow-2xl overflow-hidden z-50 border border-[#e8e4dc]">
            
              {locations.map((loc) =>
            <button
              key={loc.id}
              onClick={() => {
                setCurrentLocation(loc);
                setIsOpen(false);
              }}
              className={`w-full text-left px-5 py-4 text-sm border-b border-[#e8e4dc] last:border-0 flex items-center justify-between transition-colors ${currentLocation.id === loc.id ? 'bg-white text-[#c2410c] font-serif italic' : 'text-[#1a1a1a] hover:bg-white/50'}`}>
              
                  {loc.name}
                  {currentLocation.id === loc.id &&
              <div className="w-1.5 h-1.5 rounded-full bg-[#c2410c]" />
              }
                </button>
            )}
            </motion.div>
          </>
        }
      </AnimatePresence>
    </div>);

};